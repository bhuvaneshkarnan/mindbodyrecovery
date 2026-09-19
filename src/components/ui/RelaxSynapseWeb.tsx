"use client";

import React from "react";

export const RelaxSynapseWeb: React.FC<{ className?: string }> = ({ className = "" }) => {
  const mainColor = "#C79A45";
  const secondaryColor = "#93A579";
  const faintColor = "rgba(199, 154, 69, 0.2)";

  // Axon neural dendritic paths connecting center frame to 7 scattered lasso nodes
  const pathNode1 = "M 375 250 C 390 220, 360 190, 375 160"; // Shirodhara (upper-center-left)
  const pathNode2 = "M 560 250 C 585 200, 625 180, 645 140"; // Pulse (upper-right)
  const pathNode3 = "M 605 330 C 635 310, 675 350, 705 330"; // Reflexology (mid-right)
  const pathNode4 = "M 560 450 C 570 480, 625 510, 610 545"; // Somatic Movement (lower-right)
  const pathNode5 = "M 340 450 C 320 480, 360 510, 340 543"; // Podikizhi (lower-center-left)
  const pathNode6 = "M 255 380 C 220 370, 195 420, 170 430"; // Cupping (mid-lower-left)
  const pathNode7 = "M 280 250 C 260 210, 210 190, 180 160"; // Acupuncture (upper-left)

  // Paths to quiet quote accents
  const pathQuoteTL = "M 260 260 C 230 200, 190 120, 150 65";
  const pathQuoteBL = "M 260 430 C 230 490, 190 570, 160 635";
  const pathQuoteTR = "M 580 260 C 610 200, 660 120, 720 65";

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none z-10 ${className}`}
      viewBox="0 0 860 700"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Main Neural Gradients */}
        <linearGradient id="relax-axon-v" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.85" />
          <stop offset="50%" stopColor={mainColor} stopOpacity="1" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.85" />
        </linearGradient>

        <linearGradient id="relax-axon-h" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.85" />
          <stop offset="50%" stopColor={mainColor} stopOpacity="1" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.85" />
        </linearGradient>

        {/* Glow Filter */}
        <filter id="relax-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <radialGradient id="relax-soma-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={mainColor} stopOpacity="0.18" />
          <stop offset="55%" stopColor={secondaryColor} stopOpacity="0.08" />
          <stop offset="100%" stopColor={mainColor} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Central Soma Halo behind Dr Sameer */}
      <circle cx="430" cy="350" r="220" fill="url(#relax-soma-halo)" />
      
      {/* Concentric Bio-Rhythm Rings */}
      <circle
        cx="430"
        cy="350"
        r="210"
        stroke={faintColor}
        strokeWidth="1"
        strokeDasharray="4 8"
      />
      <circle
        cx="430"
        cy="350"
        r="140"
        stroke={faintColor}
        strokeWidth="1"
        strokeDasharray="3 6"
      />

      {/* Connecting Axon Curves to 7 Scattered Lasso Nodes */}
      {[
        { id: "axon-1", d: pathNode1, dur: "2.4s", delay: "0s" },
        { id: "axon-2", d: pathNode2, dur: "2.8s", delay: "0.4s" },
        { id: "axon-3", d: pathNode3, dur: "2.6s", delay: "0.8s" },
        { id: "axon-4", d: pathNode4, dur: "3.0s", delay: "0.2s" },
        { id: "axon-5", d: pathNode5, dur: "2.5s", delay: "1.0s" },
        { id: "axon-6", d: pathNode6, dur: "2.7s", delay: "0.6s" },
        { id: "axon-7", d: pathNode7, dur: "2.9s", delay: "1.2s" },
      ].map((axon) => (
        <g key={axon.id}>
          {/* Base synaptic path */}
          <path
            id={axon.id}
            d={axon.d}
            stroke="url(#relax-axon-v)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="5 7"
            filter="url(#relax-glow)"
          />
          {/* Glowing travelling synapse spark */}
          <circle r="4" fill={mainColor} opacity="0.6">
            <animateMotion
              dur={axon.dur}
              repeatCount="indefinite"
              begin={axon.delay}
              path={axon.d}
            />
          </circle>
          <circle r="2" fill="#FFFFFF">
            <animateMotion
              dur={axon.dur}
              repeatCount="indefinite"
              begin={axon.delay}
              path={axon.d}
            />
          </circle>
        </g>
      ))}

      {/* Subtle secondary lines to quote accents */}
      {[pathQuoteTL, pathQuoteBL, pathQuoteTR].map((d, idx) => (
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
