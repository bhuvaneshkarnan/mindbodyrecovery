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
  const px = -uy;
  const py = ux;

  const segLen = len / numWaves;
  let d = `M ${Math.round(xStart)} ${Math.round(yStart)}`;

  for (let i = 0; i < numWaves; i++) {
    const sign = i % 2 === 0 ? 1 : -1;
    const startDist = i * segLen;
    const endDist = (i + 1) * segLen;

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

export const RebuildSynapseWeb: React.FC<{ className?: string }> = ({ className = "" }) => {
  const mainColor = "#C79A45";
  const secondaryColor = "#93A579";
  const faintColor = "rgba(199, 154, 69, 0.22)";

  // Biological curly wavy axon paths with harmonic sinusoidal undulations (completely uneven constellation):
  // Node 0: Block A Welcome (top-right) -> (712, 80)
  // Node 1: Ayurvedic Therapies (top-left hero) -> (93, 115)
  // Node 2: Shirodhara Stream (top-center hero) -> (422, 150)
  // Node 3: Pulse Assessment (upper-mid right hero) -> (775, 230)
  // Node 4: Cupping Decompression (mid-left) -> (115, 328)
  // Node 5: Somatic Movement (lower-mid right) -> (722, 418)
  // Node 6: Garden Trees & Terrace (bottom-left) -> (83, 572)
  // Node 7: Morning Pranayama (bottom-right) -> (760, 630)
  const AXON_PATHS = [
    {
      id: "rebuild-axon-0",
      d: generateCurlyAxon(580, 272, 712, 80, 22, 4),
      endX: 712,
      endY: 80,
      dur: "3.3s",
      delay: "0.2s",
    },
    {
      id: "rebuild-axon-1",
      d: generateCurlyAxon(265, 280, 93, 115, 24, 4),
      endX: 93,
      endY: 115,
      dur: "3.1s",
      delay: "0s",
    },
    {
      id: "rebuild-axon-2",
      d: generateCurlyAxon(420, 265, 422, 150, 16, 3),
      endX: 422,
      endY: 150,
      dur: "2.2s",
      delay: "0.4s",
    },
    {
      id: "rebuild-axon-3",
      d: generateCurlyAxon(605, 305, 775, 230, 20, 3),
      endX: 775,
      endY: 230,
      dur: "2.5s",
      delay: "0.3s",
    },
    {
      id: "rebuild-axon-4",
      d: generateCurlyAxon(250, 335, 115, 328, 20, 3),
      endX: 115,
      endY: 328,
      dur: "2.6s",
      delay: "0.5s",
    },
    {
      id: "rebuild-axon-5",
      d: generateCurlyAxon(605, 395, 722, 418, 14, 3),
      endX: 722,
      endY: 418,
      dur: "2.7s",
      delay: "0.1s",
    },
    {
      id: "rebuild-axon-6",
      d: generateCurlyAxon(255, 455, 83, 572, 24, 4),
      endX: 83,
      endY: 572,
      dur: "3.4s",
      delay: "0.6s",
    },
    {
      id: "rebuild-axon-7",
      d: generateCurlyAxon(595, 460, 760, 630, 22, 4),
      endX: 760,
      endY: 630,
      dur: "3.2s",
      delay: "0.7s",
    },
  ];

  // Subtle secondary curly filaments to quote cards
  const pathQuote1 = generateCurlyAxon(265, 272, 245, 30, 14, 3);
  const pathQuote2 = generateCurlyAxon(550, 272, 570, 75, 14, 3);
  const pathQuote3 = generateCurlyAxon(300, 478, 320, 690, 14, 3);

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none z-10 ${className}`}
      viewBox="0 0 860 750"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Main Synaptic Axon Gradient for Dark Theme */}
        <linearGradient id="rebuild-axon-v" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.85" />
          <stop offset="50%" stopColor={mainColor} stopOpacity="1" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.85" />
        </linearGradient>

        {/* Glow Filter for Dark Theme */}
        <filter id="rebuild-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Central Soma Halo Gradient */}
        <radialGradient id="rebuild-soma-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={mainColor} stopOpacity="0.22" />
          <stop offset="55%" stopColor={secondaryColor} stopOpacity="0.09" />
          <stop offset="100%" stopColor={mainColor} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Central Soma Halo behind Sanctuary Frame */}
      <circle cx="430" cy="375" r="230" fill="url(#rebuild-soma-halo)" />

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

      {/* Connecting Axons to All 8 Scattered Therapy Nodes */}
      {AXON_PATHS.map((axon) => (
        <g key={axon.id}>
          {/* Base synaptic dashed path */}
          <path
            id={axon.id}
            d={axon.d}
            stroke="url(#rebuild-axon-v)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="5 7"
            filter="url(#rebuild-glow)"
          />

          {/* Animated travelling synapse action potential spark */}
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
            filter="url(#rebuild-glow)"
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
