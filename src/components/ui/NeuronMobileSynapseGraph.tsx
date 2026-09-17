"use client";

import React from "react";

interface NeuronMobileSynapseGraphProps {
  variant?: "dark" | "light";
  className?: string;
}

export const NeuronMobileSynapseGraph: React.FC<NeuronMobileSynapseGraphProps> = ({
  variant = "dark",
  className = "",
}) => {
  const isDark = variant === "dark";
  const mainColor = isDark ? "#C79A45" : "#8C5B41";
  const secondaryColor = isDark ? "#93A579" : "#C79A45";
  const faintColor = isDark ? "rgba(199, 154, 69, 0.22)" : "rgba(140, 91, 65, 0.22)";
  const sparkColor = "#FFFFFF";

  // Coordinates normalized to a 360 x 520 viewBox:
  // Mobile Soma Center Photo: centered around x=180, y=100 (height ~200px)
  // Grid Row 1: Node 1 at (90, 310), Node 2 at (270, 310)
  // Grid Row 2: Node 3 at (90, 450), Node 4 at (270, 450)

  // S-Curve Axon Paths
  // Soma bottom-left to Node 1 (Arch)
  const pathNode1 = "M 145 190 C 130 225, 95 245, 90 295";
  // Soma bottom-right to Node 2 (Circle)
  const pathNode2 = "M 215 190 C 230 225, 265 245, 270 295";
  // Soma central axon branching down to Node 3 (Capsule)
  const pathNode3 = "M 160 200 C 150 260, 105 350, 90 435";
  // Soma central axon branching down to Node 4 (Squircle)
  const pathNode4 = "M 200 200 C 210 260, 255 350, 270 435";

  // Horizontal inter-synapse bridging Card 1 and Card 2
  const pathBridge12 = "M 115 330 C 150 350, 210 350, 245 330";
  // Horizontal inter-synapse bridging Card 3 and Card 4
  const pathBridge34 = "M 115 470 C 150 490, 210 490, 245 470";

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden ${className}`}
      viewBox="0 0 360 520"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`mob-grad-1-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={mainColor} stopOpacity="0.95" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.8" />
        </linearGradient>

        <linearGradient id={`mob-grad-2-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.75" />
          <stop offset="50%" stopColor={mainColor} stopOpacity="1" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.75" />
        </linearGradient>

        <radialGradient id={`mob-soma-halo-${variant}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={mainColor} stopOpacity={isDark ? "0.26" : "0.16"} />
          <stop offset="60%" stopColor={secondaryColor} stopOpacity={isDark ? "0.10" : "0.06"} />
          <stop offset="100%" stopColor={mainColor} stopOpacity="0" />
        </radialGradient>

        <filter id={`mob-glow-${variant}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* 1. SOMA GLOWING HALO & BIO-RHYTHM RINGS BEHIND PHOTO */}
      <circle cx="180" cy="105" r="115" fill={`url(#mob-soma-halo-${variant})`} />
      
      <circle
        cx="180"
        cy="105"
        r="110"
        stroke={faintColor}
        strokeWidth="1"
        strokeDasharray="4 6"
        vectorEffect="non-scaling-stroke"
      />
      <circle
        cx="180"
        cy="105"
        r="80"
        stroke={faintColor}
        strokeWidth="1"
        strokeDasharray="3 5"
        vectorEffect="non-scaling-stroke"
      />

      {/* 2. DENDRITIC FINE ARBORIZATIONS */}
      {/* Upper dendrites branching outward from photo top */}
      <path
        d="M 120 40 C 95 25, 70 30, 45 15"
        stroke={faintColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M 240 40 C 265 25, 290 30, 315 15"
        stroke={faintColor}
        strokeWidth="1.2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      {/* Side dendrites */}
      <path
        d="M 65 105 C 45 100, 30 115, 10 110"
        stroke={faintColor}
        strokeWidth="1"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M 295 105 C 315 100, 330 115, 350 110"
        stroke={faintColor}
        strokeWidth="1"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />

      {/* 3. PRIMARY AXON FIBERS TO 4 THERAPY NODES */}
      
      {/* Axon 1 (To Node 1 - Arch) */}
      <path
        d={pathNode1}
        stroke={`url(#mob-grad-1-${variant})`}
        strokeWidth="2.2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        filter={`url(#mob-glow-${variant})`}
      />
      {/* Axon 1 side twig */}
      <path
        d="M 115 255 C 95 260, 80 250, 65 260"
        stroke={mainColor}
        strokeWidth="1"
        strokeOpacity="0.55"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />

      {/* Axon 2 (To Node 2 - Circle) */}
      <path
        d={pathNode2}
        stroke={`url(#mob-grad-1-${variant})`}
        strokeWidth="2.2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        filter={`url(#mob-glow-${variant})`}
      />
      {/* Axon 2 side twig */}
      <path
        d="M 245 255 C 265 260, 280 250, 295 260"
        stroke={mainColor}
        strokeWidth="1"
        strokeOpacity="0.55"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />

      {/* Axon 3 (To Node 3 - Capsule) */}
      <path
        d={pathNode3}
        stroke={`url(#mob-grad-1-${variant})`}
        strokeWidth="1.8"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        strokeDasharray="4 2"
      />

      {/* Axon 4 (To Node 4 - Squircle) */}
      <path
        d={pathNode4}
        stroke={`url(#mob-grad-1-${variant})`}
        strokeWidth="1.8"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        strokeDasharray="4 2"
      />

      {/* Inter-nodal synaptic bridges */}
      <path
        d={pathBridge12}
        stroke={`url(#mob-grad-2-${variant})`}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="3 3"
        vectorEffect="non-scaling-stroke"
        strokeOpacity="0.7"
      />
      <path
        d={pathBridge34}
        stroke={`url(#mob-grad-2-${variant})`}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="3 3"
        vectorEffect="non-scaling-stroke"
        strokeOpacity="0.7"
      />

      {/* 4. SYNAPTIC TERMINAL BOUTONS (Contact points at nodes) */}
      {/* Bouton 1 */}
      <circle cx="90" cy="295" r="4" fill={mainColor} filter={`url(#mob-glow-${variant})`} />
      <circle cx="90" cy="295" r="2" fill={sparkColor} />

      {/* Bouton 2 */}
      <circle cx="270" cy="295" r="4" fill={mainColor} filter={`url(#mob-glow-${variant})`} />
      <circle cx="270" cy="295" r="2" fill={sparkColor} />

      {/* Bouton 3 */}
      <circle cx="90" cy="435" r="3.5" fill={secondaryColor} filter={`url(#mob-glow-${variant})`} />
      <circle cx="90" cy="435" r="1.8" fill={sparkColor} />

      {/* Bouton 4 */}
      <circle cx="270" cy="435" r="3.5" fill={secondaryColor} filter={`url(#mob-glow-${variant})`} />
      <circle cx="270" cy="435" r="1.8" fill={sparkColor} />

      {/* 5. ACTION POTENTIAL FIRING SPARK PULSES */}
      {/* Pulse 1: Down Axon 1 to Node 1 */}
      <circle r="3" fill={sparkColor} filter={`url(#mob-glow-${variant})`}>
        <animateMotion
          dur="2.4s"
          repeatCount="indefinite"
          path={pathNode1}
        />
      </circle>

      {/* Pulse 2: Down Axon 2 to Node 2 */}
      <circle r="3" fill={sparkColor} filter={`url(#mob-glow-${variant})`}>
        <animateMotion
          dur="2.6s"
          begin="0.6s"
          repeatCount="indefinite"
          path={pathNode2}
        />
      </circle>

      {/* Pulse 3: Down Axon 3 to Node 3 */}
      <circle r="2.5" fill={sparkColor} filter={`url(#mob-glow-${variant})`}>
        <animateMotion
          dur="3.0s"
          begin="1.2s"
          repeatCount="indefinite"
          path={pathNode3}
        />
      </circle>

      {/* Pulse 4: Down Axon 4 to Node 4 */}
      <circle r="2.5" fill={sparkColor} filter={`url(#mob-glow-${variant})`}>
        <animateMotion
          dur="2.8s"
          begin="1.8s"
          repeatCount="indefinite"
          path={pathNode4}
        />
      </circle>

      {/* Pulse 5: Across Bridge 1 -> 2 */}
      <circle r="2" fill={sparkColor}>
        <animateMotion
          dur="3.5s"
          begin="0.3s"
          repeatCount="indefinite"
          path={pathBridge12}
        />
      </circle>
    </svg>
  );
};
