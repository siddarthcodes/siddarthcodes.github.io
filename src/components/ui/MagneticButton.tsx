"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
}

export function MagneticButton({
  children,
  className,
  variant = "primary",
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.25, y: middleY * 0.25 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const variants = {
    primary:
      "bg-white text-black font-semibold hover:bg-white/90 shadow-[0_0_25px_rgba(255,255,255,0.3)]",
    secondary:
      "bg-white/[0.07] text-white hover:bg-white/[0.12] border border-white/15 backdrop-blur-md",
    ghost:
      "bg-transparent text-white/80 hover:text-white border border-transparent hover:border-white/10",
  };

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 250, damping: 18, mass: 0.2 }}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer",
        variants[variant],
        className
      )}
      {...(props as any)}
    >
      {children}
    </motion.button>
  );
}
