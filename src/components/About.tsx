"use client";

import React from "react";
import { GlassCard } from "./ui/GlassCard";
import { Badge } from "./ui/Badge";
import { PERSONAL_INFO } from "@/lib/constants";
import { 
  Sparkles, 
  MapPin, 
  GraduationCap, 
  Cpu, 
  TrendingUp, 
  Mail, 
  Phone, 
  Instagram, 
  Linkedin, 
  BookOpen,
  ArrowUpRight 
} from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative w-full bg-[#121212] py-24 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-white/5">
      {/* Background ambient light */}
      <div className="pointer-events-none absolute top-1/3 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-[130px]" />
      <div className="pointer-events-none absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-[130px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              <span className="text-xs font-mono text-white/50 tracking-[0.2em] uppercase">
                02 // Profile & Foundation
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              Behind The Code
            </h2>
          </div>
          <p className="max-w-md text-white/60 text-sm sm:text-base font-light leading-relaxed">
            Combining frontend engineering, modern generative AI tools, and data-driven digital brand growth.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          
          {/* Main Bio Card (Span 2 cols on md/lg) */}
          <GlassCard className="md:col-span-2 lg:col-span-2 p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <Badge variant="glow">
                  <Sparkles className="w-3.5 h-3.5 mr-1 text-indigo-400" />
                  Full Stack & Creative Developer
                </Badge>
                <span className="text-xs font-mono text-white/40">Kathmandu, Nepal</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Siddarth Katwal
              </h3>

              <p className="text-white/70 text-sm sm:text-base leading-relaxed font-light mb-6">
                I am a professional full stack and creative developer from Nepal with a deep fascination for artificial intelligence. Whether architecting agency platforms, developing custom e-commerce web presences, or scaling organic audiences, I build modern web solutions designed for speed, beauty, and real-world results.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap gap-2">
              <Badge variant="outline">Next.js & React</Badge>
              <Badge variant="outline">Tailwind CSS</Badge>
              <Badge variant="outline">AI Integration</Badge>
              <Badge variant="outline">Digital Brand Growth</Badge>
            </div>
          </GlassCard>

          {/* Academic & Focus Card */}
          <GlassCard className="p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6">
                <GraduationCap className="w-6 h-6 text-indigo-400" />
              </div>

              <span className="text-xs font-mono text-indigo-300 uppercase tracking-widest block mb-2">
                Education
              </span>
              <h4 className="text-xl font-bold text-white mb-2">
                Class 11 Scholar
              </h4>
              <p className="text-white/60 text-sm font-light leading-relaxed mb-4">
                Global School of Science (GSS), Nepal. Balancing rigorous scientific studies with modern software craftsmanship.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>Nepal • Active Learner</span>
              </div>
            </div>
          </GlassCard>

          {/* Social Growth & Impact Card */}
          <GlassCard className="p-8 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-purple-400" />
              </div>

              <span className="text-xs font-mono text-purple-300 uppercase tracking-widest block mb-2">
                Growth Management
              </span>
              <div className="text-3xl font-extrabold text-white mb-1">
                84K+
              </div>
              <p className="text-white/60 text-sm font-light leading-relaxed mb-4">
                Organic followers managed and scaled on TikTok (@shakiraaa_katwalll) through high-velocity content strategy.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href={PERSONAL_INFO.tiktokManager}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-mono text-purple-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                <span>View Creator Profile</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </GlassCard>

          {/* AI Passion Card */}
          <GlassCard className="md:col-span-3 lg:col-span-2 p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                <Cpu className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <span className="text-xs font-mono text-cyan-300 uppercase tracking-widest block mb-1">
                  Technology Passion
                </span>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                  AI-Powered Development & Rapid Prototyping
                </h4>
                <p className="text-white/60 text-xs sm:text-sm font-light leading-relaxed">
                  Leveraging cutting-edge AI architectures to build scalable platforms faster, smarter, and with greater precision.
                </p>
              </div>
            </div>
            <a
              href={PERSONAL_INFO.agency}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-white flex items-center gap-2 transition-all hover:border-cyan-400/50"
            >
              <span>Skyreel Agency</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </GlassCard>

          {/* Quick Connect Card */}
          <GlassCard className="md:col-span-3 lg:col-span-2 p-8 flex flex-col justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                  Direct Inquiries
                </span>
                <h4 className="text-lg font-bold text-white">Let's Connect</h4>
              </div>
              <Badge variant="emerald">Open for Opportunities</Badge>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 text-white/80 hover:text-white transition-all"
              >
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                <span className="truncate">{PERSONAL_INFO.email}</span>
              </a>

              <a
                href={`tel:${PERSONAL_INFO.phoneRaw}`}
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 text-white/80 hover:text-white transition-all"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{PERSONAL_INFO.phone}</span>
              </a>

              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 text-white/80 hover:text-white transition-all"
              >
                <Instagram className="w-4 h-4 text-pink-400 shrink-0" />
                <span>{PERSONAL_INFO.instagramHandle}</span>
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 text-white/80 hover:text-white transition-all"
              >
                <Linkedin className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Siddarth Katwal</span>
              </a>
            </div>
          </GlassCard>

        </div>
      </div>
    </section>
  );
}
