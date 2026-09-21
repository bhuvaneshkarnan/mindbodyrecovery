"use client";

import React from "react";

export const RethinkMobileSynapseWeb: React.FC<{ className?: string }> = ({ className = "" }) => {
  const mainColor = "#8C5B41";
  const secondaryColor = "#C79A45";
  const faintColor = "rgba(140, 91, 65, 0.22)";

  // 7 Axon Paths connecting Center Soma to 7 Therapy Nodes in mobile 2-col grid
  const AXON_PATHS = [
    {
      id: "mob-rethink-axon-0",
      d: "M 150 165 C 130 195, 95 225, 90 275",
      endX: 90,
      endY: 275,
      dur: "2.4s",
      delay: "0s",
    },
    {
      id: "mob-rethink-axon-1",
      d: "M 210 165 C 230 195, 265 225, 270 275",
      endX: 270,
      endY: 275,
      dur: "2.5s",
      delay: "0.2s",
    },
    {
      id: "mob-rethink-axon-2",
      d: "M 155 175 C 140 230, 105 320, 90 405",
      endX: 90,
      endY: 405,
      dur: "2.8s",
      delay: "0.4s",
    },
    {
      id: "mob-rethink-axon-3",
      d: "M 205 175 C 220 230, 255 320, 270 405",
      endX: 270,
      endY: 405,
      dur: "2.9s",
      delay: "0.6s",
    },
    {
      id: "mob-rethink-axon-4",
      d: "M 180 470 C 150 495, 105 510, 90 540",
      endX: 90,
      endY: 540,
      dur: "2.7s",
      delay: "0.8s",
    },
    {
      id: "mob-rethink-axon-5",
      d: "M 180 470 C 210 495, 255 510, 270 540",
      endX: 270,
      endY: 540,
      dur: "2.6s",
      delay: "1.0s",
    },
    {
      id: "mob-rethink-axon-6",
      d: "M 180 605 C 180 630, 180 650, 180 675",
      endX: 180,
      endY: 675,
      dur: "2.8s",
      delay: "1.2s",
    },
  ];

  const centralSpine =
    "M 180 180 C 188 230, 172 290, 180 350 C 188 410, 172 470, 180 530 C 188 590, 174 640, 180 710";

  const BRIDGES = [
    "M 115 285 C 150 305, 210 305, 245 285",
    "M 115 415 C 150 435, 210 435, 245 415",
    "M 115 550 C 150 570, 210 570, 245 550",
  ];

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible ${className}`}
      viewBox="0 0 360 760"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="mob-rethink-axon-v" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.85" />
          <stop offset="50%" stopColor={mainColor} stopOpacity="1" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.85" />
        </linearGradient>

        <filter id="mob-rethink-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <radialGradient id="mob-rethink-soma-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={mainColor} stopOpacity="0.18" />
          <stop offset="60%" stopColor={secondaryColor} stopOpacity="0.08" />
          <stop offset="100%" stopColor={mainColor} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* 1. CENTRAL SOMA HALO & BIO-RHYTHM RINGS BEHIND CENTER PHOTO */}
      <circle cx="180" cy="95" r="115" fill="url(#mob-rethink-soma-halo)" />

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
          values="0.16;0.30;0.16"
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

      {/* Apical Dendrites */}
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

      {/* 2. CENTRAL NEURAL SPINE */}
      <path
        d={centralSpine}
        stroke="url(#mob-rethink-axon-v)"
        strokeWidth="1.8"
        strokeDasharray="6 8"
        strokeLinecap="round"
        opacity="0.55"
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

      {/* 3. AXON PATHS CONNECTING SOMA TO ALL 7 NODES */}
      {AXON_PATHS.map((axon) => (
        <g key={axon.id}>
          <path
            d={axon.d}
            stroke="url(#mob-rethink-axon-v)"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeDasharray="4 6"
            filter="url(#mob-rethink-glow)"
          />

          <circle r="4" fill={mainColor} opacity="0.9">
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

          <circle
            cx={axon.endX}
            cy={axon.endY}
            r="4.5"
            fill={mainColor}
            stroke="#FFFFFF"
            strokeWidth="1.2"
            filter="url(#mob-rethink-glow)"
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
            opacity="0.35"
          />
        </g>
      ))}

      {/* 4. HORIZONTAL BRIDGES */}
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
