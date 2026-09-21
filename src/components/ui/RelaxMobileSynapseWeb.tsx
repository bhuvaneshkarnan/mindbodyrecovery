"use client";

import React from "react";

export const RelaxMobileSynapseWeb: React.FC<{ className?: string }> = ({ className = "" }) => {
  const mainColor = "#C79A45";
  const secondaryColor = "#93A579";
  const faintColor = "rgba(199, 154, 69, 0.22)";

  // 9 Axon Paths connecting Center Soma to 9 Therapy Nodes in mobile 2-col grid
  const AXON_PATHS = [
    {
      id: "mob-relax-axon-0",
      d: "M 150 165 C 130 195, 95 225, 90 275",
      endX: 90,
      endY: 275,
      dur: "2.4s",
      delay: "0s",
    },
    {
      id: "mob-relax-axon-1",
      d: "M 210 165 C 230 195, 265 225, 270 275",
      endX: 270,
      endY: 275,
      dur: "2.5s",
      delay: "0.2s",
    },
    {
      id: "mob-relax-axon-2",
      d: "M 155 175 C 140 230, 105 320, 90 405",
      endX: 90,
      endY: 405,
      dur: "2.8s",
      delay: "0.4s",
    },
    {
      id: "mob-relax-axon-3",
      d: "M 205 175 C 220 230, 255 320, 270 405",
      endX: 270,
      endY: 405,
      dur: "2.9s",
      delay: "0.6s",
    },
    {
      id: "mob-relax-axon-4",
      d: "M 180 470 C 150 495, 105 510, 90 540",
      endX: 90,
      endY: 540,
      dur: "2.7s",
      delay: "0.8s",
    },
    {
      id: "mob-relax-axon-5",
      d: "M 180 470 C 210 495, 255 510, 270 540",
      endX: 270,
      endY: 540,
      dur: "2.6s",
      delay: "1.0s",
    },
    {
      id: "mob-relax-axon-6",
      d: "M 180 610 C 150 635, 105 650, 90 675",
      endX: 90,
      endY: 675,
      dur: "3.0s",
      delay: "1.2s",
    },
    {
      id: "mob-relax-axon-7",
      d: "M 180 610 C 210 635, 255 650, 270 675",
      endX: 270,
      endY: 675,
      dur: "3.1s",
      delay: "1.4s",
    },
    {
      id: "mob-relax-axon-8",
      d: "M 180 740 C 160 765, 140 790, 135 815",
      endX: 135,
      endY: 815,
      dur: "3.2s",
      delay: "1.6s",
    },
  ];

  // Central undulating spine running down between the two columns
  const centralSpine =
    "M 180 180 C 188 230, 172 290, 180 350 C 188 410, 172 470, 180 530 C 188 590, 172 650, 180 710 C 188 770, 174 810, 180 855";

  // Horizontal inter-synapse bridges linking node pairs
  const BRIDGES = [
    "M 115 285 C 150 305, 210 305, 245 285",
    "M 115 415 C 150 435, 210 435, 245 415",
    "M 115 550 C 150 570, 210 570, 245 550",
    "M 115 685 C 150 705, 210 705, 245 685",
  ];

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible ${className}`}
      viewBox="0 0 360 880"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mob-relax-axon-v" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.85" />
          <stop offset="50%" stopColor={mainColor} stopOpacity="1" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.85" />
        </linearGradient>

        <filter id="mob-relax-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <radialGradient id="mob-relax-soma-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={mainColor} stopOpacity="0.25" />
          <stop offset="60%" stopColor={secondaryColor} stopOpacity="0.10" />
          <stop offset="100%" stopColor={mainColor} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* 1. CENTRAL SOMA HALO & BIO-RHYTHM RINGS BEHIND CENTER PHOTO */}
      <circle cx="180" cy="95" r="115" fill="url(#mob-relax-soma-halo)" />

      <circle
        cx="180"
        cy="95"
        r="105"
        stroke={faintColor}
        strokeWidth="1"
        strokeDasharray="4 6"
      >
        <animate
          attributeName="r"
          values="100;108;100"
          dur="5.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          values="0.18;0.32;0.18"
          dur="5.5s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="180"
        cy="95"
        r="75"
        stroke={faintColor}
        strokeWidth="1"
        strokeDasharray="3 5"
      />

      {/* Apical Dendrites branching outward above center photo */}
      <path
        d="M 130 35 C 100 20, 70 24, 40 12"
        stroke={faintColor}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M 230 35 C 260 20, 290 24, 320 12"
        stroke={faintColor}
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* 2. CENTRAL NEURAL SPINE RUNNING DOWN THE GRID */}
      <path
        d={centralSpine}
        stroke="url(#mob-relax-axon-v)"
        strokeWidth="1.8"
        strokeDasharray="6 8"
        strokeLinecap="round"
        opacity="0.6"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;-140"
          dur="6s"
          repeatCount="indefinite"
        />
      </path>

      {/* Spark travelling down central spine */}
      <circle r="3.5" fill={mainColor} opacity="0.8">
        <animateMotion
          dur="4.5s"
          repeatCount="indefinite"
          path={centralSpine}
        />
      </circle>

      {/* 3. AXON PATHS CONNECTING SOMA TO ALL 9 NODES */}
      {AXON_PATHS.map((axon) => (
        <g key={axon.id}>
          {/* Synaptic wavy axon line */}
          <path
            d={axon.d}
            stroke="url(#mob-relax-axon-v)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeDasharray="4 6"
            filter="url(#mob-relax-glow)"
          />

          {/* Golden animated travelling action potential spark */}
          <circle r="4" fill={mainColor} opacity="0.9">
            <animateMotion
              dur={axon.dur}
              repeatCount="indefinite"
              begin={axon.delay}
              path={axon.d}
            />
          </circle>

          {/* White core spark */}
          <circle r="2" fill="#FFFFFF">
            <animateMotion
              dur={axon.dur}
              repeatCount="indefinite"
              begin={axon.delay}
              path={axon.d}
            />
          </circle>

          {/* Synaptic Terminal Bouton Bulb at Node */}
          <circle
            cx={axon.endX}
            cy={axon.endY}
            r="4.5"
            fill={mainColor}
            stroke="#FFFFFF"
            strokeWidth="1.2"
            filter="url(#mob-relax-glow)"
          >
            <animate
              attributeName="r"
              values="3.8;5.2;3.8"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx={axon.endX}
            cy={axon.endY}
            r="8"
            fill="none"
            stroke={mainColor}
            strokeWidth="0.75"
            opacity="0.4"
          />
        </g>
      ))}

      {/* 4. HORIZONTAL INTER-SYNAPSE BRIDGES BETWEEN NODES */}
      {BRIDGES.map((d, idx) => (
        <path
          key={idx}
          d={d}
          stroke={faintColor}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeDasharray="4 6"
        />
      ))}
    </svg>
  );
};
