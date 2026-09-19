"use client";

import React from "react";

export const RelaxSynapseWeb: React.FC<{ className?: string }> = ({ className = "" }) => {
  const mainColor = "#C79A45";
  const secondaryColor = "#93A579";
  const faintColor = "rgba(199, 154, 69, 0.22)";

  // Exactly synchronized axon neural dendritic paths connecting center Dr Sameer soma frame
  // to each of the 10 scattered lasso therapy nodes:
  // Node 0: Shirodhara (top-center/left) -> (380, 190)
  // Node 1: Pulse Assessment (upper-right) -> (685, 267)
  // Node 2: Podikizhi Herbal Pouch (lower-left) -> (222, 490)
  // Node 3: Cupping Therapy (mid-left) -> (111, 371)
  // Node 4: Foot Reflexology (mid-right) -> (761, 467)
  // Node 5: Somatic Movement (bottom-center) -> (472, 660)
  // Node 6: Facial Acupuncture (far top-left) -> (100, 82)
  // Node 7: Joint Mobilization (far top-right) -> (775, 87)
  // Node 8: Craniosacral Somatic Release (far bottom-left) -> (85, 665)
  // Node 9: Pranayama Breathwork (far bottom-right) -> (782, 672)
  const AXON_PATHS = [
    {
      id: "axon-0",
      d: "M 395 265 C 390 235, 385 210, 380 190",
      endX: 380,
      endY: 190,
      dur: "2.0s",
      delay: "0s",
    },
    {
      id: "axon-1",
      d: "M 615 295 C 640 285, 665 275, 685 267",
      endX: 685,
      endY: 267,
      dur: "2.2s",
      delay: "0.2s",
    },
    {
      id: "axon-2",
      d: "M 250 445 C 240 462, 230 478, 222 490",
      endX: 222,
      endY: 490,
      dur: "2.1s",
      delay: "0.4s",
    },
    {
      id: "axon-3",
      d: "M 245 375 C 195 375, 150 373, 111 371",
      endX: 111,
      endY: 371,
      dur: "2.4s",
      delay: "0.3s",
    },
    {
      id: "axon-4",
      d: "M 615 410 C 665 428, 715 448, 761 467",
      endX: 761,
      endY: 467,
      dur: "2.5s",
      delay: "0.5s",
    },
    {
      id: "axon-5",
      d: "M 450 485 C 458 540, 465 600, 472 660",
      endX: 472,
      endY: 660,
      dur: "2.6s",
      delay: "0.1s",
    },
    {
      id: "axon-6",
      d: "M 265 265 C 205 195, 150 135, 100 82",
      endX: 100,
      endY: 82,
      dur: "3.0s",
      delay: "0.6s",
    },
    {
      id: "axon-7",
      d: "M 590 265 C 655 195, 715 135, 775 87",
      endX: 775,
      endY: 87,
      dur: "3.1s",
      delay: "0.7s",
    },
    {
      id: "axon-8",
      d: "M 250 475 C 190 535, 135 600, 85 665",
      endX: 85,
      endY: 665,
      dur: "3.2s",
      delay: "0.8s",
    },
    {
      id: "axon-9",
      d: "M 610 475 C 670 540, 730 605, 782 672",
      endX: 782,
      endY: 672,
      dur: "2.9s",
      delay: "0.9s",
    },
  ];

  // Subtle secondary dendritic filaments to quote cards
  const pathQuote1 = "M 270 265 C 240 200, 200 120, 180 65";
  const pathQuote2 = "M 560 265 C 550 190, 540 120, 530 65";
  const pathQuote3 = "M 320 485 C 310 545, 300 605, 290 660";

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none z-10 ${className}`}
      viewBox="0 0 860 750"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Main Synaptic Axon Gradient */}
        <linearGradient id="relax-axon-v" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.85" />
          <stop offset="50%" stopColor={mainColor} stopOpacity="1" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.85" />
        </linearGradient>

        {/* Glow Filter */}
        <filter id="relax-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Central Soma Halo Gradient */}
        <radialGradient id="relax-soma-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={mainColor} stopOpacity="0.22" />
          <stop offset="55%" stopColor={secondaryColor} stopOpacity="0.09" />
          <stop offset="100%" stopColor={mainColor} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Central Soma Halo behind Dr Sameer */}
      <circle cx="430" cy="375" r="230" fill="url(#relax-soma-halo)" />

      {/* Concentric Bio-Rhythm Rings */}
      <circle
        cx="430"
        cy="375"
        r="220"
        stroke={faintColor}
        strokeWidth="1"
        strokeDasharray="4 8"
      />
      <circle
        cx="430"
        cy="375"
        r="150"
        stroke={faintColor}
        strokeWidth="1"
        strokeDasharray="3 6"
      />

      {/* 10 Connecting Axons to All 10 Scattered Therapy Nodes */}
      {AXON_PATHS.map((axon) => (
        <g key={axon.id}>
          {/* Base synaptic dashed path */}
          <path
            id={axon.id}
            d={axon.d}
            stroke="url(#relax-axon-v)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="5 7"
            filter="url(#relax-glow)"
          />

          {/* Golden animated travelling synapse action potential spark */}
          <circle r="4.5" fill={mainColor} opacity="0.85">
            <animateMotion
              dur={axon.dur}
              repeatCount="indefinite"
              begin={axon.delay}
              path={axon.d}
            />
          </circle>

          {/* White hot core spark */}
          <circle r="2.2" fill="#FFFFFF">
            <animateMotion
              dur={axon.dur}
              repeatCount="indefinite"
              begin={axon.delay}
              path={axon.d}
            />
          </circle>

          {/* Synaptic Terminal Bouton Bulb at the exact connection point */}
          <circle
            cx={axon.endX}
            cy={axon.endY}
            r="5"
            fill={mainColor}
            stroke="#FFFFFF"
            strokeWidth="1.5"
            filter="url(#relax-glow)"
          />
          <circle
            cx={axon.endX}
            cy={axon.endY}
            r="9"
            fill="none"
            stroke={mainColor}
            strokeWidth="0.75"
            opacity="0.45"
          />
        </g>
      ))}

      {/* Subtle secondary filaments to quote accents */}
      {[pathQuote1, pathQuote2, pathQuote3].map((d, idx) => (
        <path
          key={idx}
          d={d}
          stroke={faintColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="4 6"
        />
      ))}
    </svg>
  );
};
