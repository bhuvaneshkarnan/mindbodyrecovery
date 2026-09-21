"use client";

import React from "react";

/**
 * Generates an organic curly wavy sinusoidal axon path
 */
function generateCurlyAxon(
  xStart: number,
  yStart: number,
  xEnd: number,
  yEnd: number,
  amplitude: number = 14,
  numWaves: number = 3
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
    const effAmp = amplitude * (0.7 + 0.3 * taper);

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

export const RebuildMobileSynapseWeb: React.FC<{ className?: string }> = ({ className = "" }) => {
  // Vibrant high-contrast gold & forest sage palette for dark background
  const strokeColor = "#F0C76C"; // Bright warm gold core
  const glowColor = "#C79A45";   // Deep gold ambient glow
  const faintColor = "rgba(199, 154, 69, 0.35)";

  // 8 Primary Curly Connecting Axons to Therapy Nodes in mobile 2-col constellation
  const AXON_PATHS = [
    {
      id: "mob-rebuild-axon-0",
      d: generateCurlyAxon(145, 185, 90, 310, 16, 3),
      endX: 90,
      endY: 310,
      dur: "2.4s",
      delay: "0s",
    },
    {
      id: "mob-rebuild-axon-1",
      d: generateCurlyAxon(215, 185, 270, 310, -16, 3),
      endX: 270,
      endY: 310,
      dur: "2.5s",
      delay: "0.2s",
    },
    {
      id: "mob-rebuild-axon-2",
      d: generateCurlyAxon(155, 195, 90, 470, 18, 4),
      endX: 90,
      endY: 470,
      dur: "2.7s",
      delay: "0.4s",
    },
    {
      id: "mob-rebuild-axon-3",
      d: generateCurlyAxon(205, 195, 270, 470, -18, 4),
      endX: 270,
      endY: 470,
      dur: "2.8s",
      delay: "0.6s",
    },
    {
      id: "mob-rebuild-axon-4",
      d: generateCurlyAxon(170, 490, 90, 630, 15, 3),
      endX: 90,
      endY: 630,
      dur: "2.6s",
      delay: "0.8s",
    },
    {
      id: "mob-rebuild-axon-5",
      d: generateCurlyAxon(190, 490, 270, 630, -15, 3),
      endX: 270,
      endY: 630,
      dur: "2.5s",
      delay: "1.0s",
    },
    {
      id: "mob-rebuild-axon-6",
      d: generateCurlyAxon(170, 650, 90, 790, 16, 3),
      endX: 90,
      endY: 790,
      dur: "2.8s",
      delay: "1.2s",
    },
    {
      id: "mob-rebuild-axon-7",
      d: generateCurlyAxon(190, 650, 270, 790, -16, 3),
      endX: 270,
      endY: 790,
      dur: "2.9s",
      delay: "1.4s",
    },
  ];

  // Central undulating curly neural spine down the center
  const centralSpine = generateCurlyAxon(180, 190, 180, 880, 18, 7);

  // Uneven secondary dendritic tendrils
  const SECONDARY_TENDRILS = [
    generateCurlyAxon(100, 160, 35, 230, 14, 3),   // Left apical branch
    generateCurlyAxon(260, 160, 325, 230, -14, 3),  // Right apical branch
    generateCurlyAxon(180, 310, 135, 390, 13, 2),   // Spine branch to row 2 left
    generateCurlyAxon(180, 310, 225, 390, -13, 2),  // Spine branch to row 2 right
    generateCurlyAxon(180, 470, 130, 550, 14, 3),   // Spine branch to row 3 left
    generateCurlyAxon(180, 470, 230, 550, -14, 3),  // Spine branch to row 3 right
    generateCurlyAxon(90, 345, 90, 435, 11, 2),     // Inter-node link row 1 -> row 2 left
    generateCurlyAxon(270, 345, 270, 435, -11, 2),   // Inter-node link row 1 -> row 2 right
    generateCurlyAxon(90, 505, 90, 595, 11, 2),     // Inter-node link row 2 -> row 3 left
    generateCurlyAxon(270, 505, 270, 595, -11, 2),   // Inter-node link row 2 -> row 3 right
  ];

  // Horizontal curly synaptic bridges between columns
  const BRIDGES = [
    generateCurlyAxon(115, 310, 245, 310, 12, 3),
    generateCurlyAxon(115, 470, 245, 470, -12, 3),
    generateCurlyAxon(115, 630, 245, 630, 12, 3),
  ];

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible ${className}`}
      viewBox="0 0 360 920"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="mob-rebuild-soma-halo-v3" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C79A45" stopOpacity="0.30" />
          <stop offset="60%" stopColor="#93A579" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#C79A45" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* 1. SOMA GLOWING HALO & BIO-RHYTHM RINGS BEHIND SANCTUARY PHOTO */}
      <circle cx="180" cy="110" r="120" fill="url(#mob-rebuild-soma-halo-v3)" />

      <circle
        cx="180"
        cy="110"
        r="110"
        stroke={faintColor}
        strokeWidth="1.2"
        strokeDasharray="4 6"
      >
        <animate
          attributeName="r"
          values="105;115;105"
          dur="5.5s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-opacity"
          values="0.25;0.45;0.25"
          dur="5.5s"
          repeatCount="indefinite"
        />
      </circle>

      <circle
        cx="180"
        cy="110"
        r="80"
        stroke={faintColor}
        strokeWidth="1.2"
        strokeDasharray="3 5"
      />

      {/* Apical Curly Dendrites */}
      <path
        d={generateCurlyAxon(140, 45, 40, 15, 12, 3)}
        stroke={faintColor}
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d={generateCurlyAxon(220, 45, 320, 15, -12, 3)}
        stroke={faintColor}
        strokeWidth="1.6"
        strokeLinecap="round"
      />

      {/* 2. CENTRAL NEURAL SPINE (Dual-stroke for guaranteed WebKit glow) */}
      <path
        d={centralSpine}
        stroke={glowColor}
        strokeWidth="4.5"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d={centralSpine}
        stroke={strokeColor}
        strokeWidth="2.2"
        strokeDasharray="6 8"
        strokeLinecap="round"
        opacity="0.85"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;-140"
          dur="5.5s"
          repeatCount="indefinite"
        />
      </path>

      {/* Central Spine Action Potential Spark */}
      <circle r="4.5" fill={strokeColor} opacity="0.95">
        <animateMotion
          dur="4.2s"
          repeatCount="indefinite"
          path={centralSpine}
        />
      </circle>
      <circle r="2" fill="#FFFFFF">
        <animateMotion
          dur="4.2s"
          repeatCount="indefinite"
          path={centralSpine}
        />
      </circle>

      {/* 3. MULTIPLE UNEVEN SECONDARY DENDRITIC TENDRILS */}
      {SECONDARY_TENDRILS.map((d, idx) => (
        <path
          key={`tendril-${idx}`}
          d={d}
          stroke={faintColor}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeDasharray="3 5"
          opacity="0.75"
        />
      ))}

      {/* 4. CURLY AXON PATHS CONNECTING SOMA TO ALL 8 RETREAT NODES */}
      {AXON_PATHS.map((axon) => (
        <g key={axon.id}>
          {/* Outer glow stroke (hardware-accelerated, no fragile filters) */}
          <path
            d={axon.d}
            stroke={glowColor}
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.35"
          />

          {/* Crisp inner core axon stroke */}
          <path
            d={axon.d}
            stroke={strokeColor}
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeDasharray="4 6"
            opacity="0.9"
          />

          {/* Action Potential Traveling Spark (Gold + White core) */}
          <circle r="4.5" fill={strokeColor} opacity="0.95">
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

          {/* Synaptic Terminal Bouton Bulb at Node */}
          <circle
            cx={axon.endX}
            cy={axon.endY}
            r="5"
            fill={strokeColor}
            stroke="#FFFFFF"
            strokeWidth="1.5"
          >
            <animate
              attributeName="r"
              values="4;5.5;4"
              dur="2.8s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx={axon.endX}
            cy={axon.endY}
            r="9"
            fill="none"
            stroke={glowColor}
            strokeWidth="1"
            opacity="0.5"
          />
        </g>
      ))}

      {/* 5. HORIZONTAL CURLY INTER-SYNAPSE BRIDGES */}
      {BRIDGES.map((d, idx) => (
        <path
          key={`bridge-${idx}`}
          d={d}
          stroke={faintColor}
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeDasharray="4 6"
        />
      ))}
    </svg>
  );
};
