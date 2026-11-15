"use client";

import React from "react";

interface TileItem {
  id: string;
  name: string;
  src: string;
}

// 1: Feri Baldim, 2: SkyReel, 3: Hospitality Partner, 4: The Fiora Clothing
const BASE_TILES: TileItem[] = [
  {
    id: "feri-baldim",
    name: "Feri Baldim",
    src: "/logos/tile-feri.jpg",
  },
  {
    id: "skyreel",
    name: "SkyReel",
    src: "/logos/tile-skyreel.jpg",
  },
  {
    id: "hospitality",
    name: "Hospitality Partner",
    src: "/logos/tile-hospitality.jpg",
  },
  {
    id: "fiora",
    name: "The Fiora Clothing",
    src: "/logos/tile-fiora.jpg",
  },
];

// Repeating alternating sequence to create an infinite seamless marquee
const REPEATED_TILES = [
  ...BASE_TILES,
  ...BASE_TILES,
  ...BASE_TILES,
  ...BASE_TILES,
  ...BASE_TILES,
  ...BASE_TILES,
  ...BASE_TILES,
  ...BASE_TILES,
];

export function LogoTicker() {
  return (
    <section className="relative w-full bg-[#121212] py-6 border-t border-neutral-900 overflow-hidden">
      {/* Red Header: Brands and Collaborations */}
      <div className="max-w-7xl mx-auto px-6 mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <span className="text-xs sm:text-sm font-mono font-bold text-red-500 uppercase tracking-[0.2em]">
            Brands and Collaborations
          </span>
        </div>
      </div>

      {/* The Moving Tape Ribbon: Suitable normal height (h-16 sm:h-20) */}
      <div className="relative w-full h-16 sm:h-20 bg-black border-y border-neutral-800 overflow-hidden shadow-2xl">
        {/* Subtle left & right edge fades for smooth entry and exit */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#121212] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#121212] to-transparent z-10" />

        {/* Continuous Left-to-Right Moving Track */}
        <div className="animate-ticker-ltr flex items-center h-full">
          {REPEATED_TILES.map((tile, idx) => (
            <div
              key={`${tile.id}-${idx}`}
              className="h-full aspect-square shrink-0 flex items-center justify-center overflow-hidden select-none border-r border-black/30"
            >
              <img
                src={tile.src}
                alt={tile.name}
                className="w-full h-full object-cover select-none pointer-events-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
