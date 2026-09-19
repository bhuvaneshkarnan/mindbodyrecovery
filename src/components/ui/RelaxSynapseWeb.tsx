"use client";

import React from "react";

export const RelaxSynapseWeb: React.FC<{ className?: string }> = ({ className = "" }) => {
  const mainColor = "#C79A45";
  const secondaryColor = "#93A579";
  const faintColor = "rgba(199, 154, 69, 0.2)";

  // Axon neural dendritic paths connecting center frame to 10 scattered lasso nodes
  // 3 Very Close, 3 Medium, 4 Far Orbit
  const pathNode0 = "M 375 279 C 375 255, 375 240, 375 215"; // Shirodhara (very close top-left)
  const pathNode1 = "M 600 300 C 620 295, 635 290, 645 285"; // Pulse (very close top-right)
  const pathNode2 = "M 600 420 C 640 435, 675 450, 710 460"; // Reflexology (mid-right)
  const pathNode3 = "M 475 470 C 475 510, 475 560, 475 615"; // Somatic Movement (medium bottom)
  const pathNode4 = "M 260 450 C 240 465, 230 475, 220 490"; // Podikizhi (very close bottom-left)
  const pathNode5 = "M 260 375 C 220 375, 180 375, 145 375"; // Cupping (medium mid-left)
  const pathNode6 = "M 280 279 C 235 210, 175 145, 125 100"; // Acupuncture (far upper-left)
  const pathNode7 = "M 580 279 C 625 210, 695 140, 745 95";  // Head Massage (far upper-right)
  const pathNode8 = "M 260 465 C 200 525, 150 590, 110 635"; // Back Cupping (far bottom-left)
  const pathNode9 = "M 600 465 C 655 525, 725 585, 765 630"; // Breathwork (far bottom-right)

  // Subtle secondary lines to quote accents
  const pathQuote1 = "M 270 279 C 240 210, 200 120, 180 65";
  const pathQuote2 = "M 560 279 C 550 200, 540 120, 530 65";
  const pathQuote3 = "M 320 470 C 310 540, 300 600, 290 660";

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none z-10 ${className}`}
      viewBox="0 0 860 750"
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

      {/* Connecting Axon Curves to 10 Scattered Lasso Nodes */}
      {[
        { id: "axon-0", d: pathNode0, dur: "1.9s", delay: "0s" },
        { id: "axon-1", d: pathNode1, dur: "2.1s", delay: "0.2s" },
        { id: "axon-2", d: pathNode2, dur: "2.5s", delay: "0.5s" },
        { id: "axon-3", d: pathNode3, dur: "2.6s", delay: "0.3s" },
        { id: "axon-4", d: pathNode4, dur: "2.0s", delay: "0.7s" },
        { id: "axon-5", d: pathNode5, dur: "2.4s", delay: "0.4s" },
        { id: "axon-6", d: pathNode6, dur: "3.0s", delay: "0.1s" },
        { id: "axon-7", d: pathNode7, dur: "3.1s", delay: "0.6s" },
        { id: "axon-8", d: pathNode8, dur: "3.2s", delay: "0.8s" },
        { id: "axon-9", d: pathNode9, dur: "3.0s", delay: "0.9s" },
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
