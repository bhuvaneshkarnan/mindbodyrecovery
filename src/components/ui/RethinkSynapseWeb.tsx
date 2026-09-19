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

export const RethinkSynapseWeb: React.FC<{ className?: string }> = ({ className = "" }) => {
  const mainColor = "#8C5B41";
  const secondaryColor = "#C79A45";
  const faintColor = "rgba(140, 91, 65, 0.22)";

  // Biological curly wavy axon paths with harmonic sinusoidal undulations (completely uneven constellation):
  // Node 0: Screen Review (top-right highest) -> (718, 78)
  // Node 1: Journaling / Reflection (top-left dropped lower) -> (88, 118)
  // Node 2: Sameer Focus (top-center) -> (405, 170)
  // Node 3: New Habits (upper-mid right outer) -> (788, 223)
  // Node 4: Foot Reflexology (mid-left inward) -> (130, 330)
  // Node 5: Craniosacral Release (lower-mid right) -> (720, 405)
  // Node 6: Balcony Somatic Rest (bottom-left raised high) -> (75, 565)
  // Node 7: Consultation Dialogue (bottom-right mid-level) -> (770, 625)
  const AXON_PATHS = [
    {
      id: "rethink-axon-0",
      d: generateCurlyAxon(580, 272, 718, 78, 22, 4),
      endX: 718,
      endY: 78,
      dur: "3.3s",
      delay: "0.2s",
    },
    {
      id: "rethink-axon-1",
      d: generateCurlyAxon(265, 280, 88, 118, 24, 4),
      endX: 88,
      endY: 118,
      dur: "3.1s",
      delay: "0s",
    },
    {
      id: "rethink-axon-2",
      d: generateCurlyAxon(405, 272, 405, 170, 16, 3),
      endX: 405,
      endY: 170,
      dur: "2.2s",
      delay: "0.4s",
    },
    {
      id: "rethink-axon-3",
      d: generateCurlyAxon(605, 305, 788, 223, 20, 3),
      endX: 788,
      endY: 223,
      dur: "2.5s",
      delay: "0.3s",
    },
    {
      id: "rethink-axon-4",
      d: generateCurlyAxon(250, 335, 130, 330, 20, 3),
      endX: 130,
      endY: 330,
      dur: "2.6s",
      delay: "0.5s",
    },
    {
      id: "rethink-axon-5",
      d: generateCurlyAxon(605, 395, 720, 405, 14, 3),
      endX: 720,
      endY: 405,
      dur: "2.7s",
      delay: "0.1s",
    },
    {
      id: "rethink-axon-6",
      d: generateCurlyAxon(255, 455, 75, 565, 24, 4),
      endX: 75,
      endY: 565,
      dur: "3.4s",
      delay: "0.6s",
    },
    {
      id: "rethink-axon-7",
      d: generateCurlyAxon(595, 460, 770, 625, 22, 4),
      endX: 770,
      endY: 625,
      dur: "3.2s",
      delay: "0.7s",
    },
  ];

  // Subtle secondary curly filaments to quote cards
  const pathQuote1 = generateCurlyAxon(265, 272, 200, 35, 14, 3);
  const pathQuote2 = generateCurlyAxon(550, 272, 505, 90, 14, 3);
  const pathQuote3 = generateCurlyAxon(300, 478, 255, 685, 14, 3);

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none z-10 ${className}`}
      viewBox="0 0 860 750"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Main Synaptic Axon Gradient for Light Theme */}
        <linearGradient id="rethink-axon-v" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={mainColor} stopOpacity="0.85" />
          <stop offset="50%" stopColor={secondaryColor} stopOpacity="1" />
          <stop offset="100%" stopColor={mainColor} stopOpacity="0.85" />
        </linearGradient>

        {/* Glow Filter for Light Theme */}
        <filter id="rethink-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Central Soma Halo Gradient */}
        <radialGradient id="rethink-soma-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.18" />
          <stop offset="60%" stopColor={mainColor} stopOpacity="0.07" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Central Soma Halo behind Consultation Frame */}
      <circle cx="430" cy="375" r="230" fill="url(#rethink-soma-halo)" />

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
            stroke="url(#rethink-axon-v)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeDasharray="5 7"
            filter="url(#rethink-glow)"
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
            filter="url(#rethink-glow)"
          />
          <circle
            cx={axon.endX}
            cy={axon.endY}
            r="9"
            fill="none"
            stroke={secondaryColor}
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
