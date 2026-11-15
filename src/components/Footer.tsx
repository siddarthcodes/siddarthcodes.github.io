"use client";

import React, { useState } from "react";
import { MagneticButton } from "./ui/MagneticButton";
import { Badge } from "./ui/Badge";
import { 
  Copy, 
  Check, 
  ArrowUp, 
  Instagram, 
  Linkedin, 
  Globe, 
  Phone, 
  Mail, 
  BookOpen, 
  MapPin 
} from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

export function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative w-full bg-[#121212] pt-24 pb-16 px-6 sm:px-12 md:px-16 lg:px-24 border-t border-white/5 overflow-hidden">
      {/* Glow orb */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 rounded-full blur-[140px]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 pb-20 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="glow">
                Initiate Collaboration
              </Badge>
              <Badge variant="emerald" className="text-[10px]">
                <MapPin className="w-3 h-3 mr-1" />
                {PERSONAL_INFO.location}
              </Badge>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.05]">
              Let's build something <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-300">
                extraordinary together.
              </span>
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Copy Email Button */}
            <button
              onClick={handleCopyEmail}
              className="group flex items-center justify-between sm:justify-start gap-3 px-5 py-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-mono text-sm transition-all duration-300 hover:border-indigo-400/50 shadow-xl"
              title="Click to copy email"
            >
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-indigo-400" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              {copiedEmail ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4 text-white/40 group-hover:text-white" />
              )}
            </button>

            {/* Direct Mail action */}
            <a href={`mailto:${PERSONAL_INFO.email}`}>
              <MagneticButton variant="primary" className="w-full sm:w-auto">
                Send Direct Mail
              </MagneticButton>
            </a>
          </div>
        </div>

        {/* Contact Strip */}
        <div className="py-10 border-b border-white/10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-sm">
          <div>
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-1">
              Direct Contact
            </span>
            <a
              href={`tel:${PERSONAL_INFO.phoneRaw}`}
              className="text-white hover:text-indigo-400 font-mono transition-colors flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              <span>{PERSONAL_INFO.phone}</span>
            </a>
          </div>

          <div>
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-1">
              Location & Timezone
            </span>
            <p className="text-white font-mono">
              Kathmandu, Nepal (GMT+5:45)
            </p>
          </div>

          <div>
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-1">
              Education
            </span>
            <p className="text-white font-mono">
              Global School of Science (GSS)
            </p>
          </div>

          <div>
            <span className="text-xs font-mono text-white/40 uppercase tracking-widest block mb-1">
              Primary Role
            </span>
            <p className="text-white font-mono">
              Full Stack Developer
            </p>
          </div>
        </div>

        {/* Footer Meta */}
        <div className="pt-10 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-white/40">
          <div className="flex items-center gap-4 sm:gap-6 flex-wrap justify-center md:justify-start">
            <span>© 2026 Siddarth Katwal</span>
            <span className="hidden sm:inline">•</span>
            <span>All rights reserved</span>
            <span className="hidden sm:inline">•</span>
            <span className="text-white/70">Full Stack Developer</span>
          </div>

          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" /> LinkedIn
            </a>
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Instagram className="w-3.5 h-3.5" /> Instagram
            </a>
            <a
              href={PERSONAL_INFO.blog}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5" /> Tech Blog
            </a>
            <a
              href={PERSONAL_INFO.agency}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5" /> Skyreel Agency
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors ml-2"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
