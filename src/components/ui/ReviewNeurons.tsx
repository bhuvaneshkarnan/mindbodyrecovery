"use client";

import React from "react";

export const ReviewNeurons: React.FC = () => {
  return (
    <>
      {/* ─── LEFT NEURON ARBORIZATION (Subtle low-opacity animated neural cluster) ─── */}
      <div
        className="hidden md:block absolute left-0 lg:left-4 top-1/2 -translate-y-1/2 w-[260px] md:w-[300px] lg:w-[390px] h-[520px] pointer-events-none z-10 select-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 380 500"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft Soma Halo Gradient */}
            <radialGradient id="left-soma-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C79A45" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#8C5B41" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#C79A45" stopOpacity="0" />
            </radialGradient>

            {/* Neural Axon Gradient */}
            <linearGradient id="left-axon-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8C5B41" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#C79A45" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#D4A752" stopOpacity="0.20" />
            </linearGradient>

            {/* Action Potential Glow */}
            <filter id="left-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. Central Soma (Cell Body) at (150, 250) */}
          <circle cx="150" cy="250" r="72" fill="url(#left-soma-halo)" />
          
          {/* Bio-Rhythm Concentric Resonance Rings */}
          <circle
            cx="150"
            cy="250"
            r="44"
            stroke="#C79A45"
            strokeWidth="0.8"
            strokeDasharray="3 5"
            strokeOpacity="0.22"
          >
            <animate
              attributeName="r"
              values="40;46;40"
              dur="6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              values="0.15;0.28;0.15"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>
          
          <circle
            cx="150"
            cy="250"
            r="24"
            stroke="#C79A45"
            strokeWidth="1"
            strokeOpacity="0.35"
          />
          
          {/* Soma Core Nucleus */}
          <circle
            cx="150"
            cy="250"
            r="9"
            fill="#C79A45"
            fillOpacity="0.35"
          >
            <animate
              attributeName="fill-opacity"
              values="0.25;0.45;0.25"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>

          {/* 2. Branching Dendrites & Axons */}

          {/* Path 1: Apical Dendrite (Reaching Top-Left & Canopy) */}
          <path
            id="left-path-apical"
            d="M 150 226 C 145 180, 115 140, 85 110 C 65 90, 45 75, 20 50"
            stroke="url(#left-axon-grad)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Secondary Apical Sub-branches */}
          <path
            d="M 85 110 C 105 85, 130 65, 155 45"
            stroke="#C79A45"
            strokeWidth="1.1"
            strokeOpacity="0.25"
            strokeLinecap="round"
          />
          <path
            d="M 52 78 C 30 60, 22 42, 12 25"
            stroke="#8C5B41"
            strokeWidth="0.9"
            strokeOpacity="0.22"
            strokeLinecap="round"
          />
          <path
            d="M 115 140 C 145 125, 175 120, 195 95"
            stroke="#C79A45"
            strokeWidth="0.9"
            strokeOpacity="0.22"
            strokeLinecap="round"
          />

          {/* Path 2: Basal Dendrite (Reaching Bottom-Left Roots) */}
          <path
            id="left-path-basal"
            d="M 150 274 C 145 320, 115 365, 80 405 C 55 440, 38 455, 15 480"
            stroke="url(#left-axon-grad)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Secondary Basal Sub-branches */}
          <path
            d="M 80 405 C 105 430, 125 455, 140 475"
            stroke="#C79A45"
            strokeWidth="1.1"
            strokeOpacity="0.25"
            strokeLinecap="round"
          />
          <path
            d="M 50 425 C 28 445, 20 460, 10 475"
            stroke="#8C5B41"
            strokeWidth="0.9"
            strokeOpacity="0.20"
            strokeLinecap="round"
          />

          {/* Path 3: Lateral Dendrite (Reaching Left Margin) */}
          <path
            id="left-path-lateral"
            d="M 126 250 C 95 242, 65 258, 30 248 C 15 244, 8 250, 0 248"
            stroke="url(#left-axon-grad)"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="M 65 258 C 48 285, 30 305, 12 318"
            stroke="#8C5B41"
            strokeWidth="0.9"
            strokeOpacity="0.22"
            strokeLinecap="round"
          />

          {/* Path 4: Main Axon (Reaching Inward toward Review Card) */}
          <path
            id="left-path-axon"
            d="M 174 250 C 220 252, 260 238, 300 268 C 330 288, 355 280, 380 282"
            stroke="url(#left-axon-grad)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Axon Collaterals */}
          <path
            d="M 300 268 C 325 242, 348 232, 372 222"
            stroke="#C79A45"
            strokeWidth="1.1"
            strokeOpacity="0.28"
            strokeLinecap="round"
          />
          <path
            d="M 300 268 C 322 302, 344 322, 370 338"
            stroke="#8C5B41"
            strokeWidth="1.1"
            strokeOpacity="0.25"
            strokeLinecap="round"
          />

          {/* 3. Synaptic Boutons (Terminal Nodes with gentle pulsing) */}
          <g fill="#C79A45">
            {/* Top branch terminals */}
            <circle cx="20" cy="50" r="3" fillOpacity="0.45" />
            <circle cx="155" cy="45" r="2.5" fillOpacity="0.4" />
            <circle cx="12" cy="25" r="2.2" fillOpacity="0.35" />
            <circle cx="195" cy="95" r="2.5" fillOpacity="0.35" />

            {/* Bottom branch terminals */}
            <circle cx="15" cy="480" r="3" fillOpacity="0.45" />
            <circle cx="140" cy="475" r="2.5" fillOpacity="0.4" />
            <circle cx="10" cy="475" r="2" fillOpacity="0.3" />

            {/* Inward axon terminals (near review card) */}
            <circle cx="380" cy="282" r="3.5" fillOpacity="0.55" />
            <circle cx="372" cy="222" r="3" fillOpacity="0.45" />
            <circle cx="370" cy="338" r="3" fillOpacity="0.45" />
            <circle cx="0" cy="248" r="2.5" fillOpacity="0.35" />
          </g>

          {/* 4. Action Potential Impulses (Subtle low-opacity traveling sparks) */}
          {/* Pulse along Axon towards Review Card */}
          <circle r="2.8" fill="#D4A752" filter="url(#left-glow)" opacity="0.75">
            <animateMotion
              dur="6.5s"
              repeatCount="indefinite"
              path="M 150 250 C 220 252, 260 238, 300 268 C 330 288, 355 280, 380 282"
            />
          </circle>

          {/* Pulse along Apical Dendrite */}
          <circle r="2.2" fill="#C79A45" filter="url(#left-glow)" opacity="0.65">
            <animateMotion
              dur="8.2s"
              repeatCount="indefinite"
              path="M 150 250 C 145 180, 115 140, 85 110 C 65 90, 45 75, 20 50"
            />
          </circle>

          {/* Pulse along Basal Dendrite */}
          <circle r="2.2" fill="#8C5B41" filter="url(#left-glow)" opacity="0.60">
            <animateMotion
              dur="7.4s"
              repeatCount="indefinite"
              begin="2s"
              path="M 150 250 C 145 320, 115 365, 80 405 C 55 440, 38 455, 15 480"
            />
          </circle>
        </svg>
      </div>

      {/* ─── RIGHT NEURON ARBORIZATION (Symmetrical, complementary neural arbor) ─── */}
      <div
        className="hidden md:block absolute right-0 lg:right-4 top-1/2 -translate-y-1/2 w-[260px] md:w-[300px] lg:w-[390px] h-[520px] pointer-events-none z-10 select-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 380 500"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="right-soma-halo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C79A45" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#8C5B41" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#C79A45" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="right-axon-grad" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8C5B41" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#C79A45" stopOpacity="0.38" />
              <stop offset="100%" stopColor="#D4A752" stopOpacity="0.20" />
            </linearGradient>

            <filter id="right-glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. Central Soma at (230, 250) */}
          <circle cx="230" cy="250" r="72" fill="url(#right-soma-halo)" />

          {/* Bio-Rhythm Concentric Resonance Rings */}
          <circle
            cx="230"
            cy="250"
            r="44"
            stroke="#C79A45"
            strokeWidth="0.8"
            strokeDasharray="3 5"
            strokeOpacity="0.22"
          >
            <animate
              attributeName="r"
              values="40;46;40"
              dur="6.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              values="0.15;0.28;0.15"
              dur="6.5s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx="230"
            cy="250"
            r="24"
            stroke="#C79A45"
            strokeWidth="1"
            strokeOpacity="0.35"
          />

          {/* Soma Core Nucleus */}
          <circle
            cx="230"
            cy="250"
            r="9"
            fill="#C79A45"
            fillOpacity="0.35"
          >
            <animate
              attributeName="fill-opacity"
              values="0.25;0.45;0.25"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* 2. Branching Dendrites & Axons */}

          {/* Path 1: Apical Dendrite (Reaching Top-Right & Canopy) */}
          <path
            id="right-path-apical"
            d="M 230 226 C 235 180, 265 140, 295 110 C 315 90, 335 75, 360 50"
            stroke="url(#right-axon-grad)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Secondary Apical Sub-branches */}
          <path
            d="M 295 110 C 275 85, 250 65, 225 45"
            stroke="#C79A45"
            strokeWidth="1.1"
            strokeOpacity="0.25"
            strokeLinecap="round"
          />
          <path
            d="M 328 78 C 350 60, 358 42, 368 25"
            stroke="#8C5B41"
            strokeWidth="0.9"
            strokeOpacity="0.22"
            strokeLinecap="round"
          />
          <path
            d="M 265 140 C 235 125, 205 120, 185 95"
            stroke="#C79A45"
            strokeWidth="0.9"
            strokeOpacity="0.22"
            strokeLinecap="round"
          />

          {/* Path 2: Basal Dendrite (Reaching Bottom-Right Roots) */}
          <path
            id="right-path-basal"
            d="M 230 274 C 235 320, 265 365, 300 405 C 325 440, 342 455, 365 480"
            stroke="url(#right-axon-grad)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          {/* Secondary Basal Sub-branches */}
          <path
            d="M 300 405 C 275 430, 255 455, 240 475"
            stroke="#C79A45"
            strokeWidth="1.1"
            strokeOpacity="0.25"
            strokeLinecap="round"
          />
          <path
            d="M 330 425 C 352 445, 360 460, 370 475"
            stroke="#8C5B41"
            strokeWidth="0.9"
            strokeOpacity="0.20"
            strokeLinecap="round"
          />

          {/* Path 3: Lateral Dendrite (Reaching Right Margin) */}
          <path
            id="right-path-lateral"
            d="M 254 250 C 285 242, 315 258, 350 248 C 365 244, 372 250, 380 248"
            stroke="url(#right-axon-grad)"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="M 315 258 C 332 285, 350 305, 368 318"
            stroke="#8C5B41"
            strokeWidth="0.9"
            strokeOpacity="0.22"
            strokeLinecap="round"
          />

          {/* Path 4: Main Axon (Reaching Inward toward Review Card) */}
          <path
            id="right-path-axon"
            d="M 206 250 C 160 252, 120 238, 80 268 C 50 288, 25 280, 0 282"
            stroke="url(#right-axon-grad)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          {/* Axon Collaterals */}
          <path
            d="M 80 268 C 55 242, 32 232, 8 222"
            stroke="#C79A45"
            strokeWidth="1.1"
            strokeOpacity="0.28"
            strokeLinecap="round"
          />
          <path
            d="M 80 268 C 58 302, 36 322, 10 338"
            stroke="#8C5B41"
            strokeWidth="1.1"
            strokeOpacity="0.25"
            strokeLinecap="round"
          />

          {/* 3. Synaptic Boutons */}
          <g fill="#C79A45">
            {/* Top branch terminals */}
            <circle cx="360" cy="50" r="3" fillOpacity="0.45" />
            <circle cx="225" cy="45" r="2.5" fillOpacity="0.4" />
            <circle cx="368" cy="25" r="2.2" fillOpacity="0.35" />
            <circle cx="185" cy="95" r="2.5" fillOpacity="0.35" />

            {/* Bottom branch terminals */}
            <circle cx="365" cy="480" r="3" fillOpacity="0.45" />
            <circle cx="240" cy="475" r="2.5" fillOpacity="0.4" />
            <circle cx="370" cy="475" r="2" fillOpacity="0.3" />

            {/* Inward axon terminals (near review card) */}
            <circle cx="0" cy="282" r="3.5" fillOpacity="0.55" />
            <circle cx="8" cy="222" r="3" fillOpacity="0.45" />
            <circle cx="10" cy="338" r="3" fillOpacity="0.45" />
            <circle cx="380" cy="248" r="2.5" fillOpacity="0.35" />
          </g>

          {/* 4. Action Potential Impulses */}
          {/* Pulse along Axon towards Review Card */}
          <circle r="2.8" fill="#D4A752" filter="url(#right-glow)" opacity="0.75">
            <animateMotion
              dur="7.0s"
              repeatCount="indefinite"
              begin="1s"
              path="M 230 250 C 160 252, 120 238, 80 268 C 50 288, 25 280, 0 282"
            />
          </circle>

          {/* Pulse along Apical Dendrite */}
          <circle r="2.2" fill="#C79A45" filter="url(#right-glow)" opacity="0.65">
            <animateMotion
              dur="8.8s"
              repeatCount="indefinite"
              begin="0.5s"
              path="M 230 250 C 235 180, 265 140, 295 110 C 315 90, 335 75, 360 50"
            />
          </circle>

          {/* Pulse along Basal Dendrite */}
          <circle r="2.2" fill="#8C5B41" filter="url(#right-glow)" opacity="0.60">
            <animateMotion
              dur="7.8s"
              repeatCount="indefinite"
              begin="3s"
              path="M 230 250 C 235 320, 265 365, 300 405 C 325 440, 342 455, 365 480"
            />
          </circle>
        </svg>
      </div>
    </>
  );
};
