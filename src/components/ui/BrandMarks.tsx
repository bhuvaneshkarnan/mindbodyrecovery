"use client";

import React from "react";
import clsx from "clsx";

interface IconProps {
  className?: string;
  size?: number;
}

// Circular Tree of Life Emblem (The clinic's primary logo mark)
export const TreeOfLifeEmblem: React.FC<IconProps> = ({
  className = "text-gold-500",
  size = 40,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx("transition-transform duration-500 hover:rotate-6", className)}
      aria-label="Mind Body Recovery Tree of Life Emblem"
    >
      {/* Outer concentric sacred circle with thin hairline */}
      <circle
        cx="50"
        cy="50"
        r="47"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="4 2"
        className="opacity-70"
      />
      <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1.25" />
      
      {/* Roots grounding into earth */}
      <path
        d="M50 58 C50 68, 38 78, 25 82 M50 62 C45 74, 35 84, 38 88 M50 65 C52 76, 62 84, 75 82 M50 62 C55 74, 65 84, 62 88 M50 58 L50 86"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Central sturdy Trunk */}
      <path
        d="M47 42 C47 52, 45 60, 43 65 L57 65 C55 60, 53 52, 53 42 Z"
        fill="currentColor"
        className="opacity-80"
      />
      
      {/* Flourishing organic Canopy & Radiating Leaves */}
      <path
        d="M50 42 C50 28, 34 22, 22 28 C26 38, 36 42, 50 42 Z"
        fill="currentColor"
        className="opacity-30"
      />
      <path
        d="M50 42 C50 28, 66 22, 78 28 C74 38, 64 42, 50 42 Z"
        fill="currentColor"
        className="opacity-30"
      />
      <path
        d="M50 38 C40 22, 44 14, 50 14 C56 14, 60 22, 50 38 Z"
        fill="currentColor"
        className="opacity-40"
      />
      
      {/* Delicate branch vector lines */}
      <path
        d="M50 44 C45 32, 30 28, 22 34 M50 38 C44 26, 36 18, 30 20 M50 36 C50 22, 50 14, 50 14 M50 38 C56 26, 64 18, 70 20 M50 44 C55 32, 70 28, 78 34"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      
      {/* Synaptic vital dots around crown */}
      <circle cx="22" cy="34" r="2" fill="currentColor" />
      <circle cx="30" cy="20" r="2" fill="currentColor" />
      <circle cx="50" cy="14" r="2.5" fill="currentColor" />
      <circle cx="70" cy="20" r="2" fill="currentColor" />
      <circle cx="78" cy="34" r="2" fill="currentColor" />
    </svg>
  );
};

// Lotus Divider Glyph
export const LotusGlyph: React.FC<IconProps> = ({
  className = "text-gold-500",
  size = 28,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M16 4C14 10 10 16 4 18C10 20 14 26 16 32C18 26 22 20 28 18C22 16 18 10 16 4Z"
        fill="currentColor"
        className="opacity-80"
      />
      <circle cx="16" cy="18" r="2" fill="#12140D" />
    </svg>
  );
};

// Botanical Leaf Mark (for RELAX step)
export const BotanicalLeaf: React.FC<IconProps> = ({
  className = "text-sage-400",
  size = 24,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M20 4C13 4 8 8 6 14C4 20 4 20 4 20C4 20 10 20 16 18C22 16 20 4 20 4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 14C10 12 14 8 20 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
};
