"use client";

import React from "react";

export const RethinkMobileSynapseWeb: React.FC<{ className?: string }> = ({ className = "" }) => {
  // Somatic biological neural palette for light background
  const mainColor = "#8C5B41";      // Rich Somatic Amber / Terracotta
  const secondaryColor = "#C79A45"; // Warm Neural Gold
  const faintColor = "rgba(199, 154, 69, 0.35)";
  const sparkColor = "#FFFFFF";

  // 1. Central Neural Spine / Axon Trunk (Soma base descending through the midline)
  const centralTrunk =
    "M 180 185 C 176 235, 184 285, 180 340 C 176 395, 184 445, 180 500 C 176 555, 184 605, 180 660 C 178 695, 182 725, 180 740";

  // 2. Dendritic Axon Branches (Branching organically like a nerve tree)
  const BRANCHES = [
    // Row 1 Left (Node 0 - Screen Review)
    {
      id: "branch-0",
      path: "M 180 205 C 160 215, 125 240, 108 275",
      endX: 108,
      endY: 275,
      dur: "2.4s",
      delay: "0s",
    },
    // Row 1 Right (Node 1 - Mindful Journaling)
    {
      id: "branch-1",
      path: "M 180 205 C 200 215, 235 240, 252 275",
      endX: 252,
      endY: 275,
      dur: "2.5s",
      delay: "0.2s",
    },
    // Row 2 Left (Node 2 - New Habits)
    {
      id: "branch-2",
      path: "M 180 355 C 160 375, 125 395, 108 425",
      endX: 108,
      endY: 425,
      dur: "2.7s",
      delay: "0.4s",
    },
    // Row 2 Right (Node 3 - Reflexology)
    {
      id: "branch-3",
      path: "M 180 355 C 200 375, 235 395, 252 425",
      endX: 252,
      endY: 425,
      dur: "2.8s",
      delay: "0.6s",
    },
    // Row 3 Left (Node 4 - Craniosacral)
    {
      id: "branch-4",
      path: "M 180 515 C 160 535, 125 555, 108 580",
      endX: 108,
      endY: 580,
      dur: "2.6s",
      delay: "0.8s",
    },
    // Row 3 Right (Node 5 - Balcony Rest)
    {
      id: "branch-5",
      path: "M 180 515 C 200 535, 235 555, 252 580",
      endX: 252,
      endY: 580,
      dur: "2.5s",
      delay: "1.0s",
    },
    // Row 4 Center (Node 6 - Consultation Dialogue)
    {
      id: "branch-6",
      path: "M 180 660 C 180 685, 180 710, 180 735",
      endX: 180,
      endY: 735,
      dur: "2.6s",
      delay: "1.2s",
    },
  ];

  // 3. Delicate Dendritic Arborizations (Fine natural twigs sprouting at branch bifurcations)
  const DENDRITIC_TWIGS = [
    // Top Apical Dendrites (Spreading above the cell body)
    "M 140 45 C 115 25, 85 30, 50 15",
    "M 100 28 C 85 15, 70 12, 45 4",
    "M 220 45 C 245 25, 275 30, 310 15",
    "M 260 28 C 275 15, 290 12, 315 4",
    // Level 1 twigs
    "M 145 225 C 130 220, 115 208, 95 212",
    "M 215 225 C 230 220, 245 208, 265 212",
    // Level 2 twigs
    "M 145 385 C 125 385, 110 375, 90 378",
    "M 215 385 C 235 385, 250 375, 270 378",
    // Level 3 twigs
    "M 145 540 C 125 540, 110 530, 90 534",
    "M 215 540 C 235 540, 250 530, 270 534",
    // Level 4 terminal arbor
    "M 180 690 C 160 700, 145 710, 135 725",
    "M 180 690 C 200 700, 215 710, 225 725",
  ];

  // 4. Subtle Inter-Synaptic Horizontal Neural Bridges
  const BRIDGES = [
    "M 115 315 C 150 330, 210 330, 245 315",
    "M 115 465 C 150 480, 210 480, 245 465",
    "M 115 615 C 150 630, 210 630, 245 615",
  ];

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible ${className}`}
      viewBox="0 0 360 820"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        {/* Continuous Neural Axon Gradient */}
        <linearGradient id="rethink-bio-axon-v" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.9" />
          <stop offset="50%" stopColor={mainColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.85" />
        </linearGradient>

        {/* Central Soma Cell Body Glowing Halo */}
        <radialGradient id="rethink-soma-halo-v4" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C79A45" stopOpacity="0.22" />
          <stop offset="65%" stopColor="#8C5B41" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#C79A45" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* 1. SOMA (CELL BODY) RADIAL BIO-HALO & CONCENTRIC BIO-RHYTHM RINGS */}
      <circle cx="180" cy="110" r="115" fill="url(#rethink-soma-halo-v4)" />

      <circle
        cx="180"
        cy="110"
        r="110"
        stroke={faintColor}
        strokeWidth="1"
        strokeDasharray="4 6"
      >
        <animate
          attributeName="r"
          values="105;114;105"
          dur="6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          values="0.2;0.4;0.2"
          dur="6s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="180"
        cy="110"
        r="80"
        stroke={faintColor}
        strokeWidth="0.9"
        strokeDasharray="3 5"
      />

      {/* 2. DELICATE DENDRITIC TWIGS & ARBORIZATIONS (Smooth, fine, natural caliber) */}
      {DENDRITIC_TWIGS.map((d, idx) => (
        <path
          key={`twig-${idx}`}
          d={d}
          stroke={faintColor}
          strokeWidth="1.1"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ))}

      {/* 3. INTER-SYNAPTIC BRIDGES (Subtle lateral neural mesh) */}
      {BRIDGES.map((d, idx) => (
        <path
          key={`bridge-${idx}`}
          d={d}
          stroke={faintColor}
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray="3 4"
        />
      ))}

      {/* 4. MAIN CENTRAL NEURAL TRUNK (Smooth, continuous nerve axon — zero dashes) */}
      {/* Outer ambient glow */}
      <path
        d={centralTrunk}
        stroke={secondaryColor}
        strokeWidth="4"
        strokeLinecap="round"
        opacity="0.22"
      />
      {/* Core continuous nerve fiber */}
      <path
        d={centralTrunk}
        stroke="url(#rethink-bio-axon-v)"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.85"
      />

      {/* Central Trunk Action Potential Spark */}
      <circle r="3.5" fill={secondaryColor} opacity="0.6">
        <animateMotion
          dur="4.5s"
          repeatCount="indefinite"
          path={centralTrunk}
        />
      </circle>
      <circle r="1.8" fill={sparkColor}>
        <animateMotion
          dur="4.5s"
          repeatCount="indefinite"
          path={centralTrunk}
        />
      </circle>

      {/* 5. PRIMARY DENDRITIC AXON BRANCHES (Organic smooth fibers branching to each card) */}
      {BRANCHES.map((b) => (
        <g key={b.id}>
          {/* Outer soft ambient glow */}
          <path
            d={b.path}
            stroke={secondaryColor}
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.25"
          />

          {/* Continuous core nerve axon — smooth, fine biological line */}
          <path
            d={b.path}
            stroke="url(#rethink-bio-axon-v)"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.88"
          />

          {/* Bioluminescent Action Potential Pulse (Gliding smoothly along the axon) */}
          <circle r="3.5" fill={secondaryColor} opacity="0.65">
            <animateMotion
              dur={b.dur}
              repeatCount="indefinite"
              begin={b.delay}
              path={b.path}
            />
          </circle>
          <circle r="1.8" fill={sparkColor}>
            <animateMotion
              dur={b.dur}
              repeatCount="indefinite"
              begin={b.delay}
              path={b.path}
            />
          </circle>

          {/* Synaptic Terminal Bouton Bulb (Meeting the exact edge of the photo card) */}
          <circle
            cx={b.endX}
            cy={b.endY}
            r="6"
            fill={secondaryColor}
            opacity="0.25"
          >
            <animate
              attributeName="r"
              values="4.5;6.5;4.5"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx={b.endX}
            cy={b.endY}
            r="3.2"
            fill={mainColor}
            stroke={secondaryColor}
            strokeWidth="1"
          />
          <circle
            cx={b.endX}
            cy={b.endY}
            r="1.4"
            fill={sparkColor}
          />
        </g>
      ))}
    </svg>
  );
};
