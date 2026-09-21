"use client";

import React from "react";

/**
 * Generates an authentic, sweeping curly sinusoidal axon path
 * with smooth Bézier curvature.
 */
function generateCurlyAxon(
  xStart: number,
  yStart: number,
  xEnd: number,
  yEnd: number,
  amplitude: number = 22,
  numWaves: number = 2
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
    const effAmp = amplitude * (0.75 + 0.25 * taper);

    const cp1Dist = startDist + segLen * 0.32;
    const cp1x = xStart + ux * cp1Dist + px * (sign * effAmp);
    const cp1y = yStart + uy * cp1Dist + py * (sign * effAmp);

    const cp2Dist = endDist - segLen * 0.32;
    const cp2x = xStart + ux * cp2Dist + px * (sign * effAmp);
    const cp2y = yStart + uy * cp2Dist + py * (sign * effAmp);

    const segEndX = xStart + ux * endDist;
    const segEndY = yStart + uy * endDist;

    d += ` C ${Math.round(cp1x)} ${Math.round(cp1y)}, ${Math.round(cp2x)} ${Math.round(cp2y)}, ${Math.round(segEndX)} ${Math.round(segEndY)}`;
  }
  return d;
}

export const RebuildMobileSynapseWeb: React.FC<{ className?: string }> = ({ className = "" }) => {
  // Radiant gold & sage neural palette for sanctuary dark background
  const mainColor = "#F0C76C";      // Luminous Warm Gold
  const secondaryColor = "#C79A45"; // Deep Neural Gold
  const faintColor = "rgba(199, 154, 69, 0.35)";
  const sparkColor = "#FFFFFF";

  // 1. Visibly Curly Central Neural Trunk (Undulating down the dark canvas)
  const centralTrunk = generateCurlyAxon(180, 185, 180, 745, 22, 5);

  // 2. Visibly Curly Dendritic Axon Branches (Sweeping S-curves reaching each retreat card)
  const BRANCHES = [
    // Row 1 Left (Node 0 - Sanctuary Block A)
    {
      id: "rebuild-b-0",
      path: generateCurlyAxon(170, 195, 115, 285, 24, 2),
      endX: 115,
      endY: 285,
      dur: "2.4s",
      delay: "0s",
    },
    // Row 1 Right (Node 1 - Bodywork Therapies)
    {
      id: "rebuild-b-1",
      path: generateCurlyAxon(190, 195, 245, 285, -24, 2),
      endX: 245,
      endY: 285,
      dur: "2.5s",
      delay: "0.2s",
    },
    // Row 2 Left (Node 2 - Shirodhara)
    {
      id: "rebuild-b-2",
      path: generateCurlyAxon(170, 350, 115, 440, 26, 2),
      endX: 115,
      endY: 440,
      dur: "2.7s",
      delay: "0.4s",
    },
    // Row 2 Right (Node 3 - Pulse Assessment)
    {
      id: "rebuild-b-3",
      path: generateCurlyAxon(190, 350, 245, 440, -26, 2),
      endX: 245,
      endY: 440,
      dur: "2.8s",
      delay: "0.6s",
    },
    // Row 3 Left (Node 4 - Cupping)
    {
      id: "rebuild-b-4",
      path: generateCurlyAxon(170, 510, 115, 595, 26, 2),
      endX: 115,
      endY: 595,
      dur: "2.6s",
      delay: "0.8s",
    },
    // Row 3 Right (Node 5 - Somatic Mat)
    {
      id: "rebuild-b-5",
      path: generateCurlyAxon(190, 510, 245, 595, -26, 2),
      endX: 245,
      endY: 595,
      dur: "2.5s",
      delay: "1.0s",
    },
    // Row 4 Left (Node 6 - Peaceful Room)
    {
      id: "rebuild-b-6",
      path: generateCurlyAxon(170, 670, 115, 750, 26, 2),
      endX: 115,
      endY: 750,
      dur: "2.8s",
      delay: "1.2s",
    },
    // Row 4 Right (Node 7 - Morning Pranayama)
    {
      id: "rebuild-b-7",
      path: generateCurlyAxon(190, 670, 245, 750, -26, 2),
      endX: 245,
      endY: 750,
      dur: "2.9s",
      delay: "1.4s",
    },
  ];

  // 3. Visibly Curly Side Tendrils & Apical Dendrites (Zero straight lines)
  const CURLY_TENDRILS = [
    // Top Apical Curly Dendrites
    generateCurlyAxon(140, 50, 35, 12, 22, 3),
    generateCurlyAxon(220, 50, 325, 12, -22, 3),
    generateCurlyAxon(95, 30, 35, 5, 15, 2),
    generateCurlyAxon(265, 30, 325, 5, -15, 2),
    // Side Curly Twigs at each tier
    generateCurlyAxon(140, 220, 65, 205, 20, 2),
    generateCurlyAxon(220, 220, 295, 205, -20, 2),
    generateCurlyAxon(140, 375, 65, 360, 20, 2),
    generateCurlyAxon(220, 375, 295, 360, -20, 2),
    generateCurlyAxon(140, 535, 65, 520, 20, 2),
    generateCurlyAxon(220, 535, 295, 520, -20, 2),
  ];

  // 4. Curly Horizontal Synaptic Bridges
  const BRIDGES = [
    generateCurlyAxon(115, 315, 245, 315, 18, 2),
    generateCurlyAxon(115, 465, 245, 465, -18, 2),
    generateCurlyAxon(115, 615, 245, 615, 18, 2),
  ];

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible ${className}`}
      viewBox="0 0 360 820"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="rebuild-curly-axon-v" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.95" />
          <stop offset="50%" stopColor={mainColor} stopOpacity="1" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.9" />
        </linearGradient>

        <radialGradient id="rebuild-soma-halo-v5" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C79A45" stopOpacity="0.30" />
          <stop offset="65%" stopColor="#93A579" stopOpacity="0.10" />
          <stop offset="100%" stopColor="#C79A45" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* 1. SOMA (CELL BODY) RADIAL BIO-HALO & CONCENTRIC RINGS */}
      <circle cx="180" cy="110" r="115" fill="url(#rebuild-soma-halo-v5)" />

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

      {/* 2. CURLY APICAL DENDRITES & SIDE TENDRILS */}
      {CURLY_TENDRILS.map((d, idx) => (
        <path
          key={`curly-tendril-${idx}`}
          d={d}
          stroke={faintColor}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      ))}

      {/* 3. CURLY INTER-SYNAPTIC BRIDGES */}
      {BRIDGES.map((d, idx) => (
        <path
          key={`curly-bridge-${idx}`}
          d={d}
          stroke={faintColor}
          strokeWidth="1.1"
          strokeLinecap="round"
        />
      ))}

      {/* 4. CURLY CENTRAL NEURAL TRUNK (Undulating wave down the dark canvas) */}
      <path
        d={centralTrunk}
        stroke={secondaryColor}
        strokeWidth="4.5"
        strokeLinecap="round"
        opacity="0.25"
      />
      <path
        d={centralTrunk}
        stroke="url(#rebuild-curly-axon-v)"
        strokeWidth="1.8"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* Action potential spark undulating down the curly central trunk */}
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

      {/* 5. VISIBLY CURLY AXON BRANCHES */}
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

          {/* Core smooth, voluptuous curly axon */}
          <path
            d={b.path}
            stroke="url(#rebuild-curly-axon-v)"
            strokeWidth="1.7"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* Action Potential Spark (Dancing along the curly wave) */}
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

          {/* Terminal Synaptic Bouton at card connection point */}
          <circle
            cx={b.endX}
            cy={b.endY}
            r="5"
            fill={mainColor}
            opacity="0.28"
          >
            <animate
              attributeName="r"
              values="4;6;4"
              dur="3s"
              repeatCount="indefinite"
            />
          </circle>
          <circle
            cx={b.endX}
            cy={b.endY}
            r="2.8"
            fill={mainColor}
            stroke="#FFFFFF"
            strokeWidth="0.8"
          />
          <circle
            cx={b.endX}
            cy={b.endY}
            r="1.2"
            fill={sparkColor}
          />
        </g>
      ))}
    </svg>
  );
};
