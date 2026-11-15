import React from "react";
import { ScrollyCanvas } from "@/components/ScrollyCanvas";
import { LogoTicker } from "@/components/LogoTicker";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      {/* 500vh Sticky Scrollytelling Sequence with Parallax Overlay */}
      <ScrollyCanvas />

      {/* Thin Moving Logo Ticker Tape (Left to Right) */}
      <LogoTicker />

      {/* About & Profile Bento Section */}
      <About />

      {/* Projects Grid Section */}
      <Projects />

      {/* Footer / Contact Section */}
      <Footer />
    </>
  );
}
