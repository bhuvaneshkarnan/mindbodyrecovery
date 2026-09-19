"use client";

import React from "react";

function generateCurlyAxon(
  xStart: number,
  yStart: number,
  xEnd: number,
  yEnd: number,
  amplitude: number = 18,
  numWaves: number = 4
): string {
  const dx = xEnd - xStart;
  const dy = yEnd - yStart;
  const len = Math.hypot(dx, dy);
  if (len < 10) return `M ${Math.round(xStart)} ${Math.round(yStart)} L ${Math.round(xEnd)} ${Math.round(yEnd)}`;

  const ux = dx / len;
  const uy = dy / len;
  // Perpendicular normal vector for wave oscillation
  const px = -uy;
  const py = ux;

  const segLen = len / numWaves;
  let d = `M ${Math.round(xStart)} ${Math.round(yStart)}`;

  for (let i = 0; i < numWaves; i++) {
    const sign = i % 2 === 0 ? 1 : -1;
    const startDist = i * segLen;
    const endDist = (i + 1) * segLen;

    // Sinusoidal taper so waves emerge gracefully from center frame and land right on bouton
    const taper = Math.sin(((i + 0.5) / numWaves) * Math.PI);
    const effAmp = amplitude * (0.6 + 0.4 * taper);

    const cp1Dist = startDist + segLen * 0.36;
    const cp1x = xStart + ux * cp1Dist + px * (sign * effAmp);
    const cp1y = yStart + uy * cp1Dist + py * (sign * effAmp);

    const cp2Dist = endDist - segLen * 0.36;
    const cp2x = xStart + ux * cp2Dist + px * (sign * effAmp);
    const cp2y = yStart + uy * cp2Dist + py * (sign * effAmp);

    const segEndX = xStart + ux * endDist;
    const segEndY = yStart + uy * endDist;

    d += ` C ${Math.round(cp1x)} ${Math.round(cp1y)}, ${Math.round(cp2x)} ${Math.round(cp2y)}, ${Math.round(segEndX)} ${Math.round(segEndY)}`;
  }
  return d;
}

export const RelaxSynapseWeb: React.FC<{ className?: string }> = ({ className = "" }) => {
  const mainColor = "#C79A45";
  const secondaryColor = "#93A579";
  const faintColor = "rgba(199, 154, 69, 0.22)";

  // Biological curly wavy axon paths with harmonic sinusoidal undulations:
  // Node 0: Shirodhara (top-center/left) -> (385, 185)
  // Node 1: Pulse Assessment (upper-right: pushed outward to right edge) -> (788, 233)
  // Node 2: Podikizhi Herbal Pouch (snug lower-left) -> (223, 485)
  // Node 3: Cupping Therapy (mid-left) -> (105, 350)
  // Node 4: Craniosacral Somatic Release (mid-lower-right: tucked inward snug) -> (675, 415)
  // Node 5: Somatic Mat Movement (bottom-center lowest point) -> (463, 677)
  // Node 6: Facial Acupuncture (far top-left) -> (103, 83)
  // Node 7: Joint Mobilization (far top-right: pulled inward) -> (728, 83)
  // Node 8: Sanctuary Garden Retreat (bottom-left highest point) -> (80, 570)
  // Node 9: Pranayama Breathwork (bottom-right: stepped outward) -> (775, 630)
  const AXON_PATHS = [
    {
      id: "axon-0",
      d: generateCurlyAxon(395, 272, 385, 185, 16, 3),
      endX: 385,
      endY: 185,
      dur: "2.2s",
      delay: "0s",
    },
    {
      id: "axon-1",
      d: generateCurlyAxon(605, 310, 788, 233, 20, 3),
      endX: 788,
      endY: 233,
      dur: "2.4s",
      delay: "0.2s",
    },
    {
      id: "axon-2",
      d: generateCurlyAxon(255, 430, 223, 485, 18, 3),
      endX: 223,
      endY: 485,
      dur: "2.3s",
      delay: "0.4s",
    },
    {
      id: "axon-3",
      d: generateCurlyAxon(250, 350, 105, 350, 22, 4),
      endX: 105,
      endY: 350,
      dur: "2.6s",
      delay: "0.3s",
    },
    {
      id: "axon-4",
      d: generateCurlyAxon(605, 410, 675, 415, 12, 2),
      endX: 675,
      endY: 415,
      dur: "2.7s",
      delay: "0.5s",
    },
    {
      id: "axon-5",
      d: generateCurlyAxon(440, 478, 463, 677, 20, 4),
      endX: 463,
      endY: 677,
      dur: "2.8s",
      delay: "0.1s",
    },
    {
      id: "axon-6",
      d: generateCurlyAxon(270, 272, 103, 83, 24, 5),
      endX: 103,
      endY: 83,
      dur: "3.2s",
      delay: "0.6s",
    },
    {
      id: "axon-7",
      d: generateCurlyAxon(580, 272, 728, 83, 22, 4),
      endX: 728,
      endY: 83,
      dur: "3.3s",
      delay: "0.7s",
    },
    {
      id: "axon-8",
      d: generateCurlyAxon(255, 450, 80, 570, 22, 4),
      endX: 80,
      endY: 570,
      dur: "3.4s",
      delay: "0.8s",
    },
    {
      id: "axon-9",
      d: generateCurlyAxon(595, 465, 775, 630, 24, 4),
      endX: 775,
      endY: 630,
      dur: "3.1s",
      delay: "0.9s",
    },
  ];

  // Subtle secondary curly filaments to quote cards
  const pathQuote1 = generateCurlyAxon(270, 272, 180, 65, 14, 3);
  const pathQuote2 = generateCurlyAxon(560, 272, 530, 65, 14, 3);
  const pathQuote3 = generateCurlyAxon(320, 478, 290, 660, 14, 3);

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

      {/* Central Soma Halo behind Sameer */}
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
