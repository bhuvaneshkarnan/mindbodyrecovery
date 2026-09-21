"use client";

import React from "react";

export const RelaxMobileSynapseWeb: React.FC<{ className?: string }> = ({ className = "" }) => {
  // Vibrant gold neural palette for dark background
  const mainColor = "#F0C76C";      // Luminous Warm Gold
  const secondaryColor = "#C79A45"; // Deep Neural Gold
  const faintColor = "rgba(199, 154, 69, 0.35)";
  const sparkColor = "#FFFFFF";

  // 1. Central Neural Spine / Axon Trunk (Soma base descending through the midline)
  const centralTrunk =
    "M 180 185 C 176 235, 184 285, 180 340 C 176 395, 184 445, 180 500 C 176 555, 184 605, 180 660 C 176 715, 184 765, 180 815 C 178 855, 182 880, 180 895";

  // 2. Dendritic Axon Branches (Branching organically to all 9 therapy nodes)
  const BRANCHES = [
    // Row 1 Left (Node 0 - Shirodhara)
    {
      id: "relax-b-0",
      path: "M 180 205 C 160 215, 125 240, 108 275",
      endX: 108,
      endY: 275,
      dur: "2.4s",
      delay: "0s",
    },
    // Row 1 Right (Node 1 - Pulse Assessment)
    {
      id: "relax-b-1",
      path: "M 180 205 C 200 215, 235 240, 252 275",
      endX: 252,
      endY: 275,
      dur: "2.5s",
      delay: "0.2s",
    },
    // Row 2 Left (Node 2 - Podikizhi)
    {
      id: "relax-b-2",
      path: "M 180 355 C 160 375, 125 395, 108 425",
      endX: 108,
      endY: 425,
      dur: "2.7s",
      delay: "0.4s",
    },
    // Row 2 Right (Node 3 - Cupping)
    {
      id: "relax-b-3",
      path: "M 180 355 C 200 375, 235 395, 252 425",
      endX: 252,
      endY: 425,
      dur: "2.8s",
      delay: "0.6s",
    },
    // Row 3 Left (Node 4 - Craniosacral)
    {
      id: "relax-b-4",
      path: "M 180 515 C 160 535, 125 555, 108 580",
      endX: 108,
      endY: 580,
      dur: "2.6s",
      delay: "0.8s",
    },
    // Row 3 Right (Node 5 - Somatic Movement)
    {
      id: "relax-b-5",
      path: "M 180 515 C 200 535, 235 555, 252 580",
      endX: 252,
      endY: 580,
      dur: "2.5s",
      delay: "1.0s",
    },
    // Row 4 Left (Node 6 - Facial Care)
    {
      id: "relax-b-6",
      path: "M 180 670 C 160 690, 125 710, 108 735",
      endX: 108,
      endY: 735,
      dur: "2.8s",
      delay: "1.2s",
    },
    // Row 4 Right (Node 7 - Joint Mobilization)
    {
      id: "relax-b-7",
      path: "M 180 670 C 200 690, 235 710, 252 735",
      endX: 252,
      endY: 735,
      dur: "2.9s",
      delay: "1.4s",
    },
    // Row 5 Center (Node 8 - Restorative Breathwork)
    {
      id: "relax-b-8",
      path: "M 180 820 C 180 845, 180 870, 180 895",
      endX: 180,
      endY: 895,
      dur: "3.0s",
      delay: "1.6s",
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
    // Level 4 twigs
    "M 145 695 C 125 695, 110 685, 90 689",
    "M 215 695 C 235 695, 250 685, 270 689",
    // Level 5 terminal arbor
    "M 180 850 C 160 860, 145 870, 135 885",
    "M 180 850 C 200 860, 215 870, 225 885",
  ];

  // 4. Subtle Inter-Synaptic Horizontal Bridges
  const BRIDGES = [
    "M 115 315 C 150 330, 210 330, 245 315",
    "M 115 465 C 150 480, 210 480, 245 465",
    "M 115 615 C 150 630, 210 630, 245 615",
    "M 115 765 C 150 780, 210 780, 245 765",
  ];

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible ${className}`}
      viewBox="0 0 360 980"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="relax-bio-axon-v" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.95" />
          <stop offset="50%" stopColor={mainColor} stopOpacity="1" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.9" />
        </linearGradient>

        <radialGradient id="relax-soma-halo-v4" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C79A45" stopOpacity="0.30" />
          <stop offset="65%" stopColor="#93A579" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#C79A45" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* 1. SOMA (CELL BODY) RADIAL BIO-HALO & CONCENTRIC RINGS */}
      <circle cx="180" cy="110" r="115" fill="url(#relax-soma-halo-v4)" />

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
          values="0.25;0.45;0.25"
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

      {/* 2. DELICATE DENDRITIC TWIGS & ARBORIZATIONS */}
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

      {/* 3. INTER-SYNAPTIC BRIDGES */}
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

      {/* 4. MAIN CENTRAL NEURAL TRUNK (Smooth continuous nerve axon) */}
      <path
        d={centralTrunk}
        stroke={secondaryColor}
        strokeWidth="4.5"
        strokeLinecap="round"
        opacity="0.25"
      />
      <path
        d={centralTrunk}
        stroke="url(#relax-bio-axon-v)"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Central Trunk Action Potential Spark */}
      <circle r="3.5" fill={mainColor} opacity="0.75">
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

      {/* 5. PRIMARY DENDRITIC AXON BRANCHES */}
      {BRANCHES.map((b) => (
        <g key={b.id}>
          {/* Outer soft ambient glow */}
          <path
            d={b.path}
            stroke={secondaryColor}
            strokeWidth="3.8"
            strokeLinecap="round"
            opacity="0.28"
          />

          {/* Continuous core nerve axon — smooth, fine biological line */}
          <path
            d={b.path}
            stroke="url(#relax-bio-axon-v)"
            strokeWidth="1.6"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* Bioluminescent Action Potential Pulse */}
          <circle r="3.5" fill={mainColor} opacity="0.75">
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

          {/* Synaptic Terminal Bouton Bulb */}
          <circle
            cx={b.endX}
            cy={b.endY}
            r="6"
            fill={mainColor}
            opacity="0.28"
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
            stroke="#FFFFFF"
            strokeWidth="0.8"
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
