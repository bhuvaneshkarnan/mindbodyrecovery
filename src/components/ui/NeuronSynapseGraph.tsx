"use client";

import React from "react";

interface NeuronSynapseGraphProps {
  variant?: "dark" | "light";
  className?: string;
}

export const NeuronSynapseGraph: React.FC<NeuronSynapseGraphProps> = ({
  variant = "dark",
  className = "",
}) => {
  const isDark = variant === "dark";
  const mainColor = "#C79A45";
  const secondaryColor = isDark ? "#93A579" : "#8C5B41";
  const faintColor = isDark ? "rgba(199, 154, 69, 0.18)" : "rgba(140, 91, 65, 0.18)";
  const sparkColor = "#FFFFFF";

  // Curly Sinusoidal Wave Paths (Organic Neural Synapse Waves)
  // Top-Left: Smooth curly undulating wave to top-left quote card
  const pathTopLeft = "M 315 225 C 316 195, 305 183, 275 183 C 245 183, 234 172, 235 142 C 236 111, 225 100, 195 100 C 165 100, 154 88, 155 58";
  
  // Top-Right: Smooth curly undulating wave to top-right quote card
  const pathTopRight = "M 525 225 C 524 195, 535 183, 565 183 C 595 183, 606 172, 605 142 C 604 111, 615 100, 645 100 C 675 100, 686 88, 685 58";

  // Bottom-Left: Smooth curly undulating wave to bottom-left quote card
  const pathBottomLeft = "M 315 415 C 316 445, 305 457, 275 457 C 245 457, 234 468, 235 499 C 236 529, 225 540, 195 540 C 165 540, 154 552, 155 582";

  // Bottom-Right: Smooth curly undulating wave to bottom-right quote card
  const pathBottomRight = "M 525 415 C 524 445, 535 457, 565 457 C 595 457, 606 468, 605 499 C 604 529, 615 540, 645 540 C 675 540, 686 552, 685 582";

  // Cardinal Axons with Smooth Curly Wave Oscillations
  const pathTop = "M 420 260 C 440 249, 440 241, 420 231 C 400 220, 400 212, 420 201 C 440 190, 440 182, 420 172 C 400 161, 400 153, 420 142";
  const pathBottom = "M 420 380 C 440 391, 440 399, 420 410 C 400 420, 400 428, 420 439 C 440 450, 440 458, 420 469 C 400 479, 400 487, 420 498";
  const pathLeft = "M 325 320 C 311 300, 300 300, 286 320 C 272 340, 261 340, 247 320 C 232 300, 221 300, 207 320 C 193 340, 182 340, 168 320";
  const pathRight = "M 515 320 C 529 300, 540 300, 554 320 C 568 340, 579 340, 594 320 C 608 300, 619 300, 633 320 C 647 340, 658 340, 672 320";

  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none z-10 ${className}`}
      viewBox="0 0 840 640"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Main Neural Gradients */}
        <linearGradient id={`neuron-grad-v-${variant}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.85" />
          <stop offset="50%" stopColor={mainColor} stopOpacity="1" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.85" />
        </linearGradient>

        <linearGradient id={`neuron-grad-h-${variant}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.85" />
          <stop offset="50%" stopColor={mainColor} stopOpacity="1" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.85" />
        </linearGradient>

        {/* Glow Filters */}
        <filter id={`neuron-glow-${variant}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation={isDark ? "3" : "2"} result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        <radialGradient id={`soma-halo-${variant}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={mainColor} stopOpacity={isDark ? "0.22" : "0.14"} />
          <stop offset="60%" stopColor={secondaryColor} stopOpacity={isDark ? "0.09" : "0.05"} />
          <stop offset="100%" stopColor={mainColor} stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* 1. CENTRAL SOMA HALO */}
      <circle cx="420" cy="320" r="190" fill={`url(#soma-halo-${variant})`} />
      
      {/* Concentric Bio-Rhythm Rings */}
      <circle
        cx="420"
        cy="320"
        r="190"
        stroke={faintColor}
        strokeWidth="1"
        strokeDasharray="4 8"
      />
      <circle
        cx="420"
        cy="320"
        r="130"
        stroke={faintColor}
        strokeWidth="1"
        strokeDasharray="3 6"
      />

      {/* 2. HEART MONITOR / ECG WAVE AXONS TO 4 CARDINAL CARDS */}

      {/* --- TOP WAVE AXON --- */}
      <path
        id={`path-top-main-${variant}`}
        d={pathTop}
        stroke={`url(#neuron-grad-v-${variant})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#neuron-glow-${variant})`}
      />
      {/* Curly wave branch left */}
      <path
        d="M 420 172 C 409 154, 398 149, 378 154 C 357 158, 346 153, 335 135"
        stroke={mainColor}
        strokeWidth="1.5"
        strokeOpacity="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Curly wave branch right */}
      <path
        d="M 420 172 C 431 154, 442 149, 463 154 C 483 158, 494 153, 505 135"
        stroke={mainColor}
        strokeWidth="1.5"
        strokeOpacity="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* --- LEFT WAVE AXON --- */}
      <path
        id={`path-left-main-${variant}`}
        d={pathLeft}
        stroke={`url(#neuron-grad-h-${variant})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#neuron-glow-${variant})`}
      />
      {/* Curly wave branch up */}
      <path
        d="M 247 320 C 219 313, 205 300, 196 273 C 187 245, 173 232, 145 225"
        stroke={mainColor}
        strokeWidth="1.5"
        strokeOpacity="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Curly wave branch down */}
      <path
        d="M 247 320 C 219 327, 205 340, 196 368 C 187 395, 173 408, 145 415"
        stroke={mainColor}
        strokeWidth="1.5"
        strokeOpacity="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* --- RIGHT WAVE AXON --- */}
      <path
        id={`path-right-main-${variant}`}
        d={pathRight}
        stroke={`url(#neuron-grad-h-${variant})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#neuron-glow-${variant})`}
      />
      {/* Curly wave branch up */}
      <path
        d="M 594 320 C 622 313, 636 300, 645 273 C 653 245, 667 232, 695 225"
        stroke={mainColor}
        strokeWidth="1.5"
        strokeOpacity="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Curly wave branch down */}
      <path
        d="M 594 320 C 622 327, 636 340, 645 368 C 653 395, 667 408, 695 415"
        stroke={mainColor}
        strokeWidth="1.5"
        strokeOpacity="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* --- BOTTOM WAVE AXON --- */}
      <path
        id={`path-bottom-main-${variant}`}
        d={pathBottom}
        stroke={`url(#neuron-grad-v-${variant})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#neuron-glow-${variant})`}
      />
      {/* Curly wave branch left */}
      <path
        d="M 420 469 C 409 487, 397 492, 378 487 C 358 482, 346 487, 335 505"
        stroke={mainColor}
        strokeWidth="1.5"
        strokeOpacity="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Curly wave branch right */}
      <path
        d="M 420 469 C 431 487, 443 492, 463 487 C 482 482, 494 487, 505 505"
        stroke={mainColor}
        strokeWidth="1.5"
        strokeOpacity="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* 3. CURLY SYNAPTIC WAVE EXTENSIONS TO 4 FLOATING QUOTE CARDS */}
      
      {/* Top Left Quote Wave */}
      <path
        id={`path-top-left-${variant}`}
        d={pathTopLeft}
        stroke={mainColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#neuron-glow-${variant})`}
      />
      {/* Top Right Quote Wave */}
      <path
        id={`path-top-right-${variant}`}
        d={pathTopRight}
        stroke={mainColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#neuron-glow-${variant})`}
      />
      {/* Bottom Left Quote Wave */}
      <path
        id={`path-bottom-left-${variant}`}
        d={pathBottomLeft}
        stroke={mainColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#neuron-glow-${variant})`}
      />
      {/* Bottom Right Quote Wave */}
      <path
        id={`path-bottom-right-${variant}`}
        d={pathBottomRight}
        stroke={mainColor}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        filter={`url(#neuron-glow-${variant})`}
      />

      {/* 4. SYNAPTIC TERMINAL BOUTONS (Heartbeat Nodes) */}
      {/* 4 Cardinal Terminals */}
      <circle cx="420" cy="142" r="5" fill={mainColor} filter={`url(#neuron-glow-${variant})`} />
      <circle cx="420" cy="142" r="2.5" fill="#FFFFFF" />

      <circle cx="168" cy="320" r="5" fill={mainColor} filter={`url(#neuron-glow-${variant})`} />
      <circle cx="168" cy="320" r="2.5" fill="#FFFFFF" />

      <circle cx="672" cy="320" r="5" fill={mainColor} filter={`url(#neuron-glow-${variant})`} />
      <circle cx="672" cy="320" r="2.5" fill="#FFFFFF" />

      <circle cx="420" cy="498" r="5" fill={mainColor} filter={`url(#neuron-glow-${variant})`} />
      <circle cx="420" cy="498" r="2.5" fill="#FFFFFF" />

      {/* Dendrite Branch End Nodes */}
      <circle cx="335" cy="135" r="3.5" fill={secondaryColor} />
      <circle cx="505" cy="135" r="3.5" fill={secondaryColor} />
      <circle cx="145" cy="225" r="3.5" fill={secondaryColor} />
      <circle cx="145" cy="415" r="3.5" fill={secondaryColor} />
      <circle cx="695" cy="225" r="3.5" fill={secondaryColor} />
      <circle cx="695" cy="415" r="3.5" fill={secondaryColor} />
      <circle cx="335" cy="505" r="3.5" fill={secondaryColor} />
      <circle cx="505" cy="505" r="3.5" fill={secondaryColor} />

      {/* Quote Box Synaptic Nodes */}
      <circle cx="155" cy="58" r="5.5" fill={mainColor} filter={`url(#neuron-glow-${variant})`} />
      <circle cx="155" cy="58" r="2.5" fill="#FFFFFF" />

      <circle cx="685" cy="58" r="5.5" fill={mainColor} filter={`url(#neuron-glow-${variant})`} />
      <circle cx="685" cy="58" r="2.5" fill="#FFFFFF" />

      <circle cx="155" cy="582" r="5.5" fill={mainColor} filter={`url(#neuron-glow-${variant})`} />
      <circle cx="155" cy="582" r="2.5" fill="#FFFFFF" />

      <circle cx="685" cy="582" r="5.5" fill={mainColor} filter={`url(#neuron-glow-${variant})`} />
      <circle cx="685" cy="582" r="2.5" fill="#FFFFFF" />

      {/* 5. ANIMATED HEARTBEAT PULSES (Travelling precisely along ECG paths) */}
      
      {/* Cardinal Pulses */}
      <circle r="4" fill={sparkColor} filter={`url(#neuron-glow-${variant})`}>
        <animateMotion
          dur="2.2s"
          repeatCount="indefinite"
          path={pathTop}
        />
      </circle>

      <circle r="4" fill={sparkColor} filter={`url(#neuron-glow-${variant})`}>
        <animateMotion
          dur="2.4s"
          repeatCount="indefinite"
          path={pathLeft}
        />
      </circle>

      <circle r="4" fill={sparkColor} filter={`url(#neuron-glow-${variant})`}>
        <animateMotion
          dur="2.3s"
          repeatCount="indefinite"
          path={pathRight}
        />
      </circle>

      <circle r="4" fill={sparkColor} filter={`url(#neuron-glow-${variant})`}>
        <animateMotion
          dur="2.2s"
          repeatCount="indefinite"
          path={pathBottom}
        />
      </circle>

      {/* Curly Synaptic Wave Pulses travelling to Quote Boxes */}
      <circle r="3.5" fill={sparkColor} filter={`url(#neuron-glow-${variant})`}>
        <animateMotion
          dur="3.2s"
          repeatCount="indefinite"
          path={pathTopLeft}
        />
      </circle>
      <circle r="3.5" fill={sparkColor} filter={`url(#neuron-glow-${variant})`}>
        <animateMotion
          dur="3.4s"
          repeatCount="indefinite"
          path={pathTopRight}
        />
      </circle>
      <circle r="3.5" fill={sparkColor} filter={`url(#neuron-glow-${variant})`}>
        <animateMotion
          dur="3.0s"
          repeatCount="indefinite"
          path={pathBottomLeft}
        />
      </circle>
      <circle r="3.5" fill={sparkColor} filter={`url(#neuron-glow-${variant})`}>
        <animateMotion
          dur="3.6s"
          repeatCount="indefinite"
          path={pathBottomRight}
        />
      </circle>
    </svg>
  );
};
