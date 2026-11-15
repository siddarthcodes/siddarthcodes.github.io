"use client";

import React from "react";
import { PROJECTS } from "@/lib/constants";
import { GlassCard } from "./ui/GlassCard";
import { Badge } from "./ui/Badge";
import { MagneticButton } from "./ui/MagneticButton";
import { ArrowUpRight, Sparkles, Terminal, ExternalLink } from "lucide-react";

export function Projects() {
  return (
    <section id="work" className="relative w-full bg-[#121212] py-28 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-white/5">
      {/* Background ambient glow spheres */}
      <div className="pointer-events-none absolute top-10 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-white/50 tracking-[0.2em] uppercase">
                03 // Selected Archive
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Featured Case Studies
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-sm sm:text-base font-light leading-relaxed">
            Real-world digital products, AI architectures, e-commerce storefronts, and audience scaling operations.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, idx) => (
            <GlassCard
              key={project.id}
              className="group p-8 sm:p-10 flex flex-col justify-between min-h-[440px]"
            >
              {/* Top metadata */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-white/40">
                      {(idx + 1).toString().padStart(2, "0")}
                    </span>
                    <Badge variant={project.featured ? "glow" : "default"}>
                      {project.category}
                    </Badge>
                  </div>
                  <span className="text-xs font-mono text-white/40">{project.year}</span>
                </div>

                {/* Project Visual Canvas / Mockup Area */}
                <div className="relative w-full h-48 rounded-xl overflow-hidden mb-6 bg-gradient-to-br from-white/[0.05] to-transparent border border-white/5 flex items-center justify-center group-hover:border-white/20 transition-all duration-500">
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr ${project.gradient} opacity-40 group-hover:opacity-75 transition-opacity duration-500`}
                  />
                  
                  {/* Decorative wireframe visual */}
                  <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-md group-hover:scale-110 group-hover:border-indigo-400/50 transition-all duration-300">
                      <Sparkles className="w-6 h-6 text-indigo-300" />
                    </div>
                    <span className="text-xs font-mono text-white/60 uppercase tracking-widest">
                      Live Experience
                    </span>
                  </div>

                  {/* Corner tag */}
                  <div className="absolute top-3 right-3">
                    <div className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] font-mono text-emerald-400">
                      {project.metrics}
                    </div>
                  </div>
                </div>

                {/* Title & Description */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group/link"
                >
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 flex items-center justify-between">
                    <span className="group-hover/link:text-indigo-300 transition-colors">
                      {project.title}
                    </span>
                    <ArrowUpRight className="w-6 h-6 text-white/40 group-hover/link:text-white group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-all duration-300" />
                  </h3>
                </a>
                <p className="text-white/65 text-sm sm:text-base leading-relaxed mb-6 font-light">
                  {project.description}
                </p>
              </div>

              {/* Bottom Tags & Action */}
              <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-white/[0.04] text-white/70 text-xs font-mono border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <div className="flex items-center gap-2">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MagneticButton variant="secondary" className="px-4 py-2 text-xs flex items-center gap-1.5">
                        <span>Visit Live</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </MagneticButton>
                    </a>
                  </div>
                )}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Professional Callout Banner */}
        <div className="mt-16 p-8 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-semibold text-base sm:text-lg">
                Looking to build your next digital platform?
              </h4>
              <p className="text-white/50 text-xs sm:text-sm font-light">
                Available for frontend engineering, AI platform development, and bespoke web solutions.
              </p>
            </div>
          </div>
          <MagneticButton
            variant="primary"
            onClick={() => {
              const el = document.getElementById("contact");
              el?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Start a Project
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
