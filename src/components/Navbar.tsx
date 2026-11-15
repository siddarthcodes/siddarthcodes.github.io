"use client";

import React, { useState, useEffect } from "react";
import { MagneticButton } from "./ui/MagneticButton";
import { Badge } from "./ui/Badge";
import { Menu, X, ArrowUpRight, Mail, Instagram, Linkedin } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-40 px-6 py-4 flex items-center justify-between pointer-events-none transition-all duration-300">
      {/* Brand / Logo */}
      <div className="pointer-events-auto flex items-center gap-3">
        <a
          href="#"
          className="text-white font-bold tracking-tighter text-lg uppercase flex items-center gap-2 group"
        >
          <span className="w-3 h-3 rounded-sm bg-indigo-500 group-hover:rotate-45 transition-transform duration-300" />
          <span>SIDDARTH KATWAL</span>
        </a>
        {/* Nepal with Prithvi Narayan Shah photo (clean inline bold text, no popup badge) */}
        <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-white/15">
          <img
            src="/logos/prithvi-narayan-shah.png"
            alt="Prithvi Narayan Shah"
            className="h-7 w-auto object-contain select-none pointer-events-none drop-shadow"
          />
          <span className="text-xs font-bold text-white uppercase tracking-wider">
            Nepal
          </span>
        </div>
      </div>

      {/* Floating Pill Nav */}
      <nav
        className={`pointer-events-auto hidden md:flex items-center gap-1 px-4 py-2 rounded-full border transition-all duration-300 ${
          scrolled
            ? "bg-black/60 border-white/15 backdrop-blur-xl shadow-2xl shadow-black/80"
            : "bg-white/[0.04] border-white/10 backdrop-blur-md"
        }`}
      >
        <a
          href="#"
          className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-white/70 hover:text-white transition-colors"
        >
          Experience
        </a>
        <a
          href="#about"
          className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-white/70 hover:text-white transition-colors"
        >
          About
        </a>
        <a
          href="#work"
          className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-white/70 hover:text-white transition-colors"
        >
          Works
        </a>
        <a
          href="#contact"
          className="px-4 py-1.5 text-xs font-mono uppercase tracking-wider text-white/70 hover:text-white transition-colors"
        >
          Contact
        </a>
      </nav>

      {/* Action / Contact Button */}
      <div className="pointer-events-auto flex items-center gap-3">
        <MagneticButton
          variant="secondary"
          className="hidden sm:inline-flex px-4 py-2 text-xs"
          onClick={() => {
            const el = document.getElementById("contact");
            el?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Let's Connect
        </MagneticButton>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/10"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="pointer-events-auto fixed inset-0 bg-[#121212]/95 backdrop-blur-2xl z-50 flex flex-col justify-center items-center gap-8 p-6 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center mb-4">
            <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block mb-1">
              Navigation
            </span>
            <h3 className="text-2xl font-bold text-white">Siddarth Katwal</h3>
          </div>

          <div className="flex flex-col items-center gap-5 text-xl font-medium text-white/80">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              Selected Works
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center gap-6 text-white/60">
            <a
              href={PERSONAL_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors p-2"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors p-2"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-white transition-colors p-2"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
