"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { useScroll, useMotionValueEvent, MotionValue } from "framer-motion";
import { SEQUENCE_CONFIG } from "@/lib/constants";
import { Overlay } from "./Overlay";

interface ScrollyCanvasProps {
  frameCount?: number;
}

export function ScrollyCanvas({
  frameCount = SEQUENCE_CONFIG.frameCount,
}: ScrollyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Store preloaded images in ref to avoid re-renders during 60/120fps scrubbing
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const animationFrameIdRef = useRef<number | null>(null);

  // Loading & State
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  // Framer Motion useScroll hook
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /**
   * High performance canvas cover drawing logic
   * Implements object-fit: cover with retina devicePixelRatio support
   */
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const img = imagesRef.current[frameIndex];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    if (width === 0 || height === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Keep internal canvas resolution matched to physical display pixels
    if (canvas.width !== Math.round(width * dpr) || canvas.height !== Math.round(height * dpr)) {
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // object-fit: cover calculations
    const imgWidth = img.naturalWidth;
    const imgHeight = img.naturalHeight;
    const imgRatio = imgWidth / imgHeight;
    const canvasRatio = width / height;

    let renderWidth = width;
    let renderHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderWidth = width;
      renderHeight = width / imgRatio;
      offsetY = (height - renderHeight) / 2;
    } else {
      renderHeight = height;
      renderWidth = height * imgRatio;
      offsetX = (width - renderWidth) / 2;
    }

    // Fill background with exact matching dark hex before drawing
    ctx.fillStyle = "#121212";
    ctx.fillRect(0, 0, width, height);

    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
    ctx.restore();
  }, []);

  /**
   * RequestAnimationFrame throttle for smooth frame scrubbing
   */
  const scheduleRender = useCallback(
    (targetIndex: number) => {
      currentFrameRef.current = targetIndex;
      if (animationFrameIdRef.current !== null) return;

      animationFrameIdRef.current = requestAnimationFrame(() => {
        drawFrame(currentFrameRef.current);
        animationFrameIdRef.current = null;
      });
    },
    [drawFrame]
  );

  /**
   * Listen to scroll progress changes from Framer Motion
   */
  useMotionValueEvent(scrollYProgress, "change", (latest: number) => {
    const clampedProgress = Math.min(1, Math.max(0, latest));
    const targetIndex = Math.min(
      frameCount - 1,
      Math.max(0, Math.floor(clampedProgress * (frameCount - 1)))
    );

    scheduleRender(targetIndex);
  });

  /**
   * Preload all sequence frames
   */
  useEffect(() => {
    let active = true;
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;

    const checkFirstFrameDrawn = (img: HTMLImageElement, index: number) => {
      if (index === 0 && active) {
        requestAnimationFrame(() => drawFrame(0));
      }
    };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      const primaryUrl = SEQUENCE_CONFIG.getFrameUrl(i);
      const fallbackUrl = SEQUENCE_CONFIG.getDelayFrameUrl(i);

      img.onload = () => {
        if (!active) return;
        loadedCount++;
        const pct = Math.round((loadedCount / frameCount) * 100);
        setLoadProgress(pct);
        checkFirstFrameDrawn(img, i);

        if (loadedCount >= frameCount) {
          setIsLoaded(true);
          drawFrame(currentFrameRef.current);
        }
      };

      img.onerror = () => {
        // Try fallback naming convention if primary fails
        img.onerror = () => {
          if (!active) return;
          loadedCount++;
          const pct = Math.round((loadedCount / frameCount) * 100);
          setLoadProgress(pct);
          if (loadedCount >= frameCount) {
            setIsLoaded(true);
            drawFrame(currentFrameRef.current);
          }
        };
        img.src = fallbackUrl;
      };

      img.src = primaryUrl;
      loadedImages.push(img);
    }

    imagesRef.current = loadedImages;

    // Safety timeout: ensure loading screen dismisses even if an asset stalls
    const safetyTimer = setTimeout(() => {
      if (active && !isLoaded) {
        setIsLoaded(true);
        drawFrame(currentFrameRef.current);
      }
    }, 2500);

    // Window resize handler to maintain object-fit cover responsiveness
    const handleResize = () => {
      if (active) {
        drawFrame(currentFrameRef.current);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      active = false;
      clearTimeout(safetyTimer);
      window.removeEventListener("resize", handleResize);
      if (animationFrameIdRef.current !== null) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
    };
  }, [frameCount, drawFrame]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[500vh] bg-[#121212]"
    >
      {/* Sticky viewport container (100vh) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#121212]">
        
        {/* HTML5 Canvas with cover layout */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full block z-0"
        />

        {/* Cinematic gradient vignette overlays for seamless edge blending */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#121212] via-transparent to-[#121212]/80 opacity-60" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 z-[2] bg-gradient-to-t from-[#121212] to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-32 z-[2] bg-gradient-to-b from-[#121212] to-transparent" />

        {/* Parallax Overlay - sits on top of canvas */}
        <Overlay scrollYProgress={scrollYProgress} />

        {/* Minimalist Awwwards Preloader Curtain */}
        <div
          className={`absolute inset-0 z-50 flex flex-col items-center justify-center bg-[#121212] transition-opacity duration-700 pointer-events-none ${
            isLoaded ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative w-16 h-16 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-t-2 border-indigo-500 animate-spin" />
              <div className="w-10 h-10 rounded-full border-b-2 border-white/20 animate-spin" style={{ animationDirection: "reverse" }} />
              <span className="text-[10px] font-mono text-white/70">{loadProgress}%</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-white/50">
                Initializing Cinema Sequence
              </span>
              <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-400 transition-all duration-150"
                  style={{ width: `${loadProgress}%` }}
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
