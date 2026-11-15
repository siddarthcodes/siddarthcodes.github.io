"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Badge } from "./ui/Badge";
import { ArrowDown, Sparkles, Code2, Compass } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export function Overlay({ scrollYProgress }: OverlayProps) {
  // -------------------------------------------------------------
  // Section 1: 0% scroll (Intro Hero - Center aligned)
  // -------------------------------------------------------------
  const sec1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.2], [1, 1, 0]);
  const sec1Y = useTransform(scrollYProgress, [0, 0.2], [0, -70]);
  const sec1Scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  // -------------------------------------------------------------
  // Section 2: ~30% scroll (Left aligned statement)
  // -------------------------------------------------------------
  const sec2Opacity = useTransform(
    scrollYProgress,
    [0.18, 0.28, 0.38, 0.48],
    [0, 1, 1, 0]
  );
  const sec2Y = useTransform(scrollYProgress, [0.18, 0.48], [80, -80]);

  // -------------------------------------------------------------
  // Section 3: ~60% scroll (Right aligned philosophy)
  // -------------------------------------------------------------
  const sec3Opacity = useTransform(
    scrollYProgress,
    [0.48, 0.58, 0.68, 0.78],
    [0, 1, 1, 0]
  );
  const sec3Y = useTransform(scrollYProgress, [0.48, 0.78], [80, -80]);

  // -------------------------------------------------------------
  // Section 4: ~85% scroll (Transition into Works)
  // -------------------------------------------------------------
  const sec4Opacity = useTransform(
    scrollYProgress,
    [0.76, 0.86, 0.96, 1],
    [0, 1, 1, 0.3]
  );
  const sec4Y = useTransform(scrollYProgress, [0.76, 1], [50, 0]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-between p-6 sm:p-12 md:p-16 lg:p-24 overflow-hidden">
      
      {/* SECTION 1: 0% Scroll - Hero (Center) */}
      <motion.div
        style={{ opacity: sec1Opacity, y: sec1Y, scale: sec1Scale }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="flex flex-col items-center max-w-4xl gap-6">
          <Badge variant="glow" className="animate-pulse">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            Full Stack Developer & AI Enthusiast • Nepal
          </Badge>

          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight text-white uppercase leading-[0.95]">
            Siddarth Katwal.
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300">
              Full Stack Developer.
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-white/70 font-light max-w-xl mx-auto leading-relaxed">
            Crafting tactile web experiences, modern platforms, and digital systems with code, motion, and AI.
          </p>

          <div className="mt-8 flex items-center gap-3 text-xs font-mono tracking-widest text-white/40 uppercase">
            <span className="w-8 h-[1px] bg-white/20" />
            <span>Scroll to Scrub Reality</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              <ArrowDown className="w-3.5 h-3.5 text-indigo-400" />
            </motion.div>
            <span className="w-8 h-[1px] bg-white/20" />
          </div>
        </div>
      </motion.div>

      {/* SECTION 2: 30% Scroll - Left Aligned */}
      <motion.div
        style={{ opacity: sec2Opacity, y: sec2Y }}
        className="absolute inset-x-6 sm:inset-x-12 md:inset-x-20 top-1/2 -translate-y-1/2 flex items-center justify-start"
      >
        <div className="max-w-2xl backdrop-blur-md bg-black/40 p-8 rounded-3xl border border-white/10 shadow-2xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping" />
            <span className="text-xs font-mono text-indigo-300 uppercase tracking-widest">
              01 / Creative Engineering & AI
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5 leading-tight">
            Code that feels <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              fluid and intelligent.
            </span>
          </h2>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6 font-light">
            Every interface is engineered with precision. Merging modern full stack architecture with AI-driven velocity to create responsive, high-impact digital products.
          </p>

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Full Stack Engineering</Badge>
            <Badge variant="outline">AI-Driven Stack</Badge>
            <Badge variant="outline">Next.js & React</Badge>
            <Badge variant="emerald">Nepal 🇳🇵</Badge>
          </div>
        </div>
      </motion.div>

      {/* SECTION 3: 60% Scroll - Right Aligned */}
      <motion.div
        style={{ opacity: sec3Opacity, y: sec3Y }}
        className="absolute inset-x-6 sm:inset-x-12 md:inset-x-20 top-1/2 -translate-y-1/2 flex items-center justify-end"
      >
        <div className="max-w-2xl backdrop-blur-md bg-black/40 p-8 rounded-3xl border border-white/10 shadow-2xl text-right">
          <div className="flex items-center justify-end gap-2 mb-4">
            <span className="text-xs font-mono text-purple-300 uppercase tracking-widest">
              02 / Brand & Growth Architecture
            </span>
            <Code2 className="w-4 h-4 text-purple-400" />
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-5 leading-tight">
            From architecture to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400">
              real-world impact.
            </span>
          </h2>

          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-6 font-light">
            Building complete online presence for brands like The Fiora Clothing and executing digital growth strategies managing 84k+ organic community followers.
          </p>

          <div className="flex flex-wrap justify-end gap-2">
            <Badge variant="glow">84k+ Audience Reach</Badge>
            <Badge variant="outline">E-Commerce Architecture</Badge>
            <Badge variant="emerald">Global School of Science</Badge>
          </div>
        </div>
      </motion.div>

      {/* SECTION 4: 85% - 100% Scroll - Transition Callout (Bottom Center) */}
      <motion.div
        style={{ opacity: sec4Opacity, y: sec4Y }}
        className="absolute inset-x-0 bottom-12 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="flex flex-col items-center gap-3">
          <Badge variant="default" className="bg-white/10 text-white">
            <Compass className="w-3.5 h-3.5 mr-1" />
            Curated Portfolio
          </Badge>
          <h3 className="text-2xl sm:text-4xl font-bold tracking-tight text-white">
            Selected Works & Ventures
          </h3>
          <p className="text-xs sm:text-sm font-mono text-white/50 uppercase tracking-widest flex items-center gap-2">
            Continue Scrolling
            <ArrowDown className="w-3.5 h-3.5 text-indigo-400 animate-bounce" />
          </p>
        </div>
      </motion.div>

    </div>
  );
}
