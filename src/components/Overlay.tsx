"use client";

import React from "react";
import { motion, MotionValue, useTransform } from "framer-motion";
import { Badge } from "./ui/Badge";
import { ArrowDown, Sparkles, Code2, Compass } from "lucide-react";

interface OverlayProps {
  scrollYProgress: MotionValue<number>;
}

export function Overlay({ scrollYProgress }: OverlayProps) {
  const sec1Opacity = useTransform(scrollYProgress, [0, 0.12, 0.2], [1, 1, 0]);
  const sec1Y = useTransform(scrollYProgress, [0, 0.2], [0, -70]);
  const sec1Scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const sec2Opacity = useTransform(scrollYProgress, [0.18, 0.28, 0.38, 0.48], [0, 1, 1, 0]);
  const sec2Y = useTransform(scrollYProgress, [0.18, 0.48], [80, -80]);

  const sec3Opacity = useTransform(scrollYProgress, [0.48, 0.58, 0.68, 0.78], [0, 1, 1, 0]);
  const sec3Y = useTransform(scrollYProgress, [0.48, 0.78], [80, -80]);

  const sec4Opacity = useTransform(scrollYProgress, [0.76, 0.86, 0.96, 1], [0, 1, 1, 0.3]);
  const sec4Y = useTransform(scrollYProgress, [0.76, 1], [50, 0]);

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">

      {/* SECTION 1: Hero — scales well on all screen sizes */}
      <motion.div
        style={{ opacity: sec1Opacity, y: sec1Y, scale: sec1Scale }}
        className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 sm:px-8"
      >
        <div className="flex flex-col items-center w-full max-w-4xl gap-4 sm:gap-6">
          <Badge variant="glow" className="animate-pulse text-[10px] sm:text-xs">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
            Full Stack Developer &amp; AI Enthusiast • Nepal
          </Badge>

          {/* Name + Title — tighter on mobile */}
          <h1 className="text-[2.2rem] leading-[1] sm:text-6xl md:text-8xl font-black tracking-tight text-white uppercase">
            Siddarth Katwal.
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300">
              Full Stack Developer.
            </span>
          </h1>

          {/* Bio paragraph — shown on all sizes */}
          <p className="text-sm sm:text-base md:text-lg text-white/70 font-light max-w-2xl mx-auto leading-relaxed px-2">
            I&apos;m Siddarth Katwal, a creative web designer passionate about building innovative
            digital experiences. With a focus on clean design, intuitive user experiences, and the
            latest web technologies, I help brands and businesses transform their online presence.
            Whether you&apos;re looking to revamp your current site or build something from the
            ground up, I&apos;m here to bring your ideas to life. Let&apos;s create something
            amazing together!
          </p>

          <div className="mt-4 sm:mt-8 flex items-center gap-3 text-[10px] sm:text-xs font-mono tracking-widest text-white/40 uppercase">
            <span className="w-6 sm:w-8 h-[1px] bg-white/20" />
            <span>Scroll to Explore</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-400" />
            </motion.div>
            <span className="w-6 sm:w-8 h-[1px] bg-white/20" />
          </div>
        </div>
      </motion.div>

      {/* SECTION 2: Left aligned — adjusted inset for mobile */}
      <motion.div
        style={{ opacity: sec2Opacity, y: sec2Y }}
        className="absolute inset-x-4 sm:inset-x-10 md:inset-x-20 top-1/2 -translate-y-1/2 flex items-center justify-start"
      >
        <div className="w-full max-w-2xl backdrop-blur-md bg-black/50 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
            <span className="text-[10px] sm:text-xs font-mono text-indigo-300 uppercase tracking-widest">
              01 / Creative Engineering &amp; AI
            </span>
          </div>

          <h2 className="text-2xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-5 leading-tight">
            Code that feels <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              fluid and intelligent.
            </span>
          </h2>

          <p className="text-white/70 text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6 font-light">
            Every interface is engineered with precision. Merging modern full stack architecture
            with AI-driven velocity to create responsive, high-impact digital products.
          </p>

          <div className="flex flex-wrap gap-2">
            <Badge variant="outline">Full Stack Engineering</Badge>
            <Badge variant="outline">AI-Driven Stack</Badge>
            <Badge variant="outline">Next.js &amp; React</Badge>
            <Badge variant="emerald">Nepal 🇳🇵</Badge>
          </div>
        </div>
      </motion.div>

      {/* SECTION 3: Right aligned */}
      <motion.div
        style={{ opacity: sec3Opacity, y: sec3Y }}
        className="absolute inset-x-4 sm:inset-x-10 md:inset-x-20 top-1/2 -translate-y-1/2 flex items-center justify-end"
      >
        <div className="w-full max-w-2xl backdrop-blur-md bg-black/50 p-5 sm:p-8 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl text-right">
          <div className="flex items-center justify-end gap-2 mb-3 sm:mb-4">
            <span className="text-[10px] sm:text-xs font-mono text-purple-300 uppercase tracking-widest">
              02 / Brand &amp; Growth Architecture
            </span>
            <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
          </div>

          <h2 className="text-2xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3 sm:mb-5 leading-tight">
            From architecture to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400">
              real-world impact.
            </span>
          </h2>

          <p className="text-white/70 text-sm sm:text-lg leading-relaxed mb-4 sm:mb-6 font-light">
            Building complete online presence for brands like The Fiora Clothing and executing
            digital growth strategies managing 84k+ organic community followers.
          </p>

          <div className="flex flex-wrap justify-end gap-2">
            <Badge variant="glow">84k+ Audience Reach</Badge>
            <Badge variant="outline">E-Commerce Architecture</Badge>
            <Badge variant="emerald">Global School of Science</Badge>
          </div>
        </div>
      </motion.div>

      {/* SECTION 4: Bottom callout */}
      <motion.div
        style={{ opacity: sec4Opacity, y: sec4Y }}
        className="absolute inset-x-0 bottom-10 sm:bottom-12 flex flex-col items-center justify-center text-center px-4"
      >
        <div className="flex flex-col items-center gap-3">
          <Badge variant="default" className="bg-white/10 text-white text-[10px] sm:text-xs">
            <Compass className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1" />
            Curated Portfolio
          </Badge>
          <h3 className="text-xl sm:text-4xl font-bold tracking-tight text-white">
            Selected Works &amp; Ventures
          </h3>
          <p className="text-[10px] sm:text-sm font-mono text-white/50 uppercase tracking-widest flex items-center gap-2">
            Continue Scrolling
            <ArrowDown className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-indigo-400 animate-bounce" />
          </p>
        </div>
      </motion.div>

    </div>
  );
}
