"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "glow" | "outline" | "emerald";
  children: React.ReactNode;
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  const variants = {
    default:
      "bg-white/[0.06] text-white/90 border border-white/10 hover:border-white/20",
    glow: "bg-indigo-500/10 text-indigo-300 border border-indigo-500/30 shadow-[0_0_15px_rgba(99,102,241,0.25)]",
    outline: "border border-white/15 text-white/80",
    emerald:
      "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 shadow-[0_0_15px_rgba(16,185,129,0.2)]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider transition-colors duration-200",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
