"use client";

import React from "react";

export const ReviewNeurons: React.FC = () => {
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    if (window.innerWidth >= 768) {
      setIsDesktop(true);
    }
  }, []);

  if (!isDesktop) return null;

  return (
    <>
      {/* ─── LEFT NEURON ARBORIZATION (Multiple uneven curly lines with dynamic neural impulses) ─── */}
      <div
        className="absolute left-0 lg:left-2 top-1/2 -translate-y-1/2 w-[280px] md:w-[320px] lg:w-[420px] h-[540px] pointer-events-none z-10 select-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 420 540"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Soft Soma Halo Gradient */}
            <radialGradient id="left-soma-halo-v2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C79A45" stopOpacity="0.18" />
              <stop offset="45%" stopColor="#8C5B41" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#C79A45" stopOpacity="0" />
            </radialGradient>

            {/* Neural Axon Gradient */}
            <linearGradient id="left-axon-grad-v2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8C5B41" stopOpacity="0.30" />
              <stop offset="50%" stopColor="#C79A45" stopOpacity="0.40" />
              <stop offset="100%" stopColor="#D4A752" stopOpacity="0.25" />
            </linearGradient>

            {/* Action Potential Glow */}
            <filter id="left-glow-v2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. Central Soma (Cell Body) at (160, 260) */}
          <circle cx="160" cy="260" r="76" fill="url(#left-soma-halo-v2)" />

          {/* Bio-Rhythm Concentric Resonance Rings */}
          <circle
            cx="160"
            cy="260"
            r="46"
            stroke="#C79A45"
            strokeWidth="0.8"
            strokeDasharray="3 5"
            strokeOpacity="0.22"
          >
            <animate
              attributeName="r"
              values="42;49;42"
              dur="6s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              values="0.14;0.28;0.14"
              dur="6s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx="160"
            cy="260"
            r="26"
            stroke="#C79A45"
            strokeWidth="1"
            strokeOpacity="0.32"
          />

          {/* Soma Core Nucleus */}
          <circle cx="160" cy="260" r="9" fill="#C79A45" fillOpacity="0.35">
            <animate
              attributeName="fill-opacity"
              values="0.25;0.48;0.25"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>

          {/* ─── 2. MULTIPLE UNEVEN CURLY LINES: APICAL CANOPY (TOP-LEFT) ─── */}
          {/* Main Curly Apical Trunk - Undulating wavy S-curves */}
          <path
            id="left-curly-apical-1"
            d="M 160 238 C 146 205, 174 185, 148 155 C 126 128, 154 105, 122 75 C 96 48, 118 28, 78 12 C 54 -2, 34 14, 10 6"
            stroke="url(#left-axon-grad-v2)"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          {/* Companion Uneven Curly Line 2 (Braided wavy filament, differing phase) */}
          <path
            id="left-curly-apical-2"
            d="M 166 242 C 178 214, 152 194, 170 166 C 185 140, 160 118, 142 92 C 124 68, 140 52, 118 32 C 102 18, 86 24, 68 12"
            stroke="#C79A45"
            strokeWidth="1.1"
            strokeOpacity="0.32"
            strokeLinecap="round"
          />

          {/* Companion Uneven Curly Line 3 (Outward curling tendril) */}
          <path
            id="left-curly-apical-3"
            d="M 154 235 C 132 210, 152 186, 128 160 C 108 135, 130 112, 102 85 C 78 62, 58 74, 36 48 C 20 32, 28 16, 14 8"
            stroke="#8C5B41"
            strokeWidth="0.9"
            strokeOpacity="0.26"
            strokeLinecap="round"
          />

          {/* Pulsing Animated Bio-Flow on Dashed Curly Line */}
          <path
            d="M 162 239 C 148 207, 172 187, 148 157 C 128 130, 152 107, 124 77 C 98 50, 116 30, 78 14"
            stroke="#D4A752"
            strokeWidth="0.8"
            strokeDasharray="5 10"
            strokeOpacity="0.45"
            strokeLinecap="round"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-120"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </path>

          {/* Apical Curly Branchlets (Shooting off from the wave peaks) */}
          <path
            d="M 148 155 C 172 138, 192 150, 220 132 C 242 118, 258 126, 282 110"
            stroke="#C79A45"
            strokeWidth="1.1"
            strokeOpacity="0.30"
            strokeLinecap="round"
          />
          <path
            d="M 170 166 C 194 150, 212 160, 238 145 C 258 132, 274 138, 294 126"
            stroke="#8C5B41"
            strokeWidth="0.85"
            strokeOpacity="0.25"
            strokeLinecap="round"
          />
          <path
            d="M 122 75 C 142 60, 162 72, 188 54 C 208 40, 222 48, 244 32"
            stroke="#C79A45"
            strokeWidth="0.9"
            strokeOpacity="0.28"
            strokeLinecap="round"
          />
          <path
            d="M 102 85 C 82 102, 65 92, 44 110 C 28 122, 18 116, 4 128"
            stroke="#8C5B41"
            strokeWidth="0.9"
            strokeOpacity="0.24"
            strokeLinecap="round"
          />
          <path
            d="M 128 160 C 106 176, 88 166, 66 182 C 48 195, 34 188, 14 202"
            stroke="#C79A45"
            strokeWidth="0.85"
            strokeOpacity="0.25"
            strokeLinecap="round"
          />

          {/* ─── 3. MULTIPLE UNEVEN CURLY LINES: INWARD AXON (TOWARD REVIEW VIDEO) ─── */}
          {/* Main Curly Axon 1 - Undulating wavy S-curves reaching inward */}
          <path
            id="left-curly-axon-1"
            d="M 176 252 C 206 238, 228 264, 260 248 C 292 234, 316 262, 348 246 C 378 232, 398 252, 420 240"
            stroke="url(#left-axon-grad-v2)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Companion Uneven Curly Axon 2 (Interlaced below) */}
          <path
            id="left-curly-axon-2"
            d="M 174 258 C 202 272, 224 246, 254 262 C 282 278, 306 250, 336 266 C 364 282, 386 258, 412 272"
            stroke="#C79A45"
            strokeWidth="1.2"
            strokeOpacity="0.32"
            strokeLinecap="round"
          />

          {/* Companion Uneven Curly Axon 3 (Interlaced above, curls upward) */}
          <path
            id="left-curly-axon-3"
            d="M 175 246 C 210 228, 236 248, 270 230 C 300 214, 324 234, 358 218 C 384 204, 404 220, 424 208"
            stroke="#8C5B41"
            strokeWidth="0.95"
            strokeOpacity="0.26"
            strokeLinecap="round"
          />

          {/* Pulsing Bio-Electric Current on Inward Axon */}
          <path
            d="M 176 252 C 206 238, 228 264, 260 248 C 292 234, 316 262, 348 246 C 378 232, 398 252, 420 240"
            stroke="#D4A752"
            strokeWidth="0.8"
            strokeDasharray="6 14"
            strokeOpacity="0.5"
            strokeLinecap="round"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-160"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>

          {/* Axon Terminal Curly Collaterals */}
          <path
            d="M 348 246 C 370 222, 392 234, 418 220"
            stroke="#C79A45"
            strokeWidth="1.1"
            strokeOpacity="0.30"
            strokeLinecap="round"
          />
          <path
            d="M 336 266 C 360 295, 382 282, 410 306"
            stroke="#8C5B41"
            strokeWidth="1.0"
            strokeOpacity="0.26"
            strokeLinecap="round"
          />
          <path
            d="M 260 248 C 278 224, 298 232, 320 212"
            stroke="#C79A45"
            strokeWidth="0.85"
            strokeOpacity="0.24"
            strokeLinecap="round"
          />
          <path
            d="M 254 262 C 274 288, 294 280, 316 302"
            stroke="#8C5B41"
            strokeWidth="0.85"
            strokeOpacity="0.22"
            strokeLinecap="round"
          />

          {/* ─── 4. MULTIPLE UNEVEN CURLY LINES: BASAL ARBOR (BOTTOM-LEFT) ─── */}
          {/* Main Curly Basal Trunk - Undulating wavy S-curves cascading down */}
          <path
            id="left-curly-basal-1"
            d="M 154 270 C 142 300, 168 320, 146 352 C 126 382, 152 402, 126 434 C 100 464, 122 484, 86 510 C 62 526, 42 514, 18 532"
            stroke="url(#left-axon-grad-v2)"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          {/* Companion Uneven Curly Line 2 (Trailing alongside with differing phase) */}
          <path
            id="left-curly-basal-2"
            d="M 160 268 C 174 294, 150 318, 170 346 C 185 374, 160 396, 178 426 C 192 452, 172 474, 152 500 C 136 518, 116 512, 94 528"
            stroke="#C79A45"
            strokeWidth="1.1"
            strokeOpacity="0.32"
            strokeLinecap="round"
          />

          {/* Companion Uneven Curly Line 3 (Cascading outward) */}
          <path
            id="left-curly-basal-3"
            d="M 148 272 C 132 302, 154 324, 134 356 C 114 384, 136 406, 112 438 C 90 466, 70 454, 46 482 C 28 502, 34 516, 14 530"
            stroke="#8C5B41"
            strokeWidth="0.9"
            strokeOpacity="0.26"
            strokeLinecap="round"
          />

          {/* Pulsing Bio-Flow on Basal Dashed Curly Line */}
          <path
            d="M 154 270 C 142 300, 168 320, 146 352 C 126 382, 152 402, 126 434 C 100 464, 122 484, 86 510"
            stroke="#D4A752"
            strokeWidth="0.8"
            strokeDasharray="5 11"
            strokeOpacity="0.45"
            strokeLinecap="round"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-130"
              dur="5s"
              repeatCount="indefinite"
            />
          </path>

          {/* Basal Curly Branchlets */}
          <path
            d="M 146 352 C 170 370, 188 358, 214 378 C 234 395, 248 388, 272 406"
            stroke="#C79A45"
            strokeWidth="1.0"
            strokeOpacity="0.28"
            strokeLinecap="round"
          />
          <path
            d="M 126 434 C 150 452, 168 444, 194 462 C 214 476, 226 472, 250 486"
            stroke="#8C5B41"
            strokeWidth="0.85"
            strokeOpacity="0.24"
            strokeLinecap="round"
          />
          <path
            d="M 134 356 C 112 342, 94 352, 72 336 C 54 324, 40 332, 18 318"
            stroke="#C79A45"
            strokeWidth="0.85"
            strokeOpacity="0.24"
            strokeLinecap="round"
          />
          <path
            d="M 112 438 C 92 424, 76 434, 54 418 C 36 406, 24 414, 6 402"
            stroke="#8C5B41"
            strokeWidth="0.85"
            strokeOpacity="0.22"
            strokeLinecap="round"
          />

          {/* ─── 5. MULTIPLE UNEVEN CURLY LINES: LATERAL OUTWARD (LEFT MARGIN) ─── */}
          <path
            id="left-curly-lateral-1"
            d="M 142 256 C 108 244, 88 270, 54 256 C 30 244, 16 260, 2 254"
            stroke="url(#left-axon-grad-v2)"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="M 144 264 C 116 278, 96 254, 70 272 C 46 288, 28 274, 4 290"
            stroke="#8C5B41"
            strokeWidth="0.9"
            strokeOpacity="0.25"
            strokeLinecap="round"
          />
          <path
            d="M 146 248 C 120 234, 100 252, 74 238 C 50 224, 34 240, 10 230"
            stroke="#C79A45"
            strokeWidth="0.85"
            strokeOpacity="0.24"
            strokeLinecap="round"
          />

          {/* ─── 6. SYNAPTIC BOUTONS (Uneven Terminal Nodes with breathing pulse) ─── */}
          <g fill="#C79A45">
            {/* Top branch terminals */}
            <circle cx="10" cy="6" r="3.2" fillOpacity="0.5">
              <animate attributeName="r" values="2.4;4;2.4" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" values="0.35;0.7;0.35" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="68" cy="12" r="2.8" fillOpacity="0.4" />
            <circle cx="14" cy="8" r="2.4" fillOpacity="0.35" />
            <circle cx="282" cy="110" r="3" fillOpacity="0.45" />
            <circle cx="294" cy="126" r="2.6" fillOpacity="0.35" />
            <circle cx="244" cy="32" r="2.8" fillOpacity="0.4" />
            <circle cx="4" cy="128" r="2.5" fillOpacity="0.35" />
            <circle cx="14" cy="202" r="2.6" fillOpacity="0.35" />

            {/* Inward axon terminals (near review card) */}
            <circle cx="420" cy="240" r="3.8" fillOpacity="0.6">
              <animate attributeName="r" values="3;4.8;3" dur="2.8s" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" values="0.4;0.8;0.4" dur="2.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="412" cy="272" r="3.2" fillOpacity="0.5" />
            <circle cx="424" cy="208" r="3" fillOpacity="0.45" />
            <circle cx="418" cy="220" r="3" fillOpacity="0.45" />
            <circle cx="410" cy="306" r="3" fillOpacity="0.45" />
            <circle cx="320" cy="212" r="2.5" fillOpacity="0.35" />
            <circle cx="316" cy="302" r="2.5" fillOpacity="0.35" />

            {/* Bottom branch terminals */}
            <circle cx="18" cy="532" r="3.2" fillOpacity="0.5">
              <animate attributeName="r" values="2.4;4;2.4" dur="3.8s" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" values="0.35;0.7;0.35" dur="3.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="94" cy="528" r="2.8" fillOpacity="0.4" />
            <circle cx="14" cy="530" r="2.4" fillOpacity="0.35" />
            <circle cx="272" cy="406" r="2.8" fillOpacity="0.4" />
            <circle cx="250" cy="486" r="2.6" fillOpacity="0.35" />
            <circle cx="18" cy="318" r="2.5" fillOpacity="0.35" />
            <circle cx="6" cy="402" r="2.4" fillOpacity="0.3" />

            {/* Lateral terminals */}
            <circle cx="2" cy="254" r="2.8" fillOpacity="0.4" />
            <circle cx="4" cy="290" r="2.5" fillOpacity="0.35" />
            <circle cx="10" cy="230" r="2.4" fillOpacity="0.35" />
          </g>

          {/* ─── 7. ANIMATED ACTION POTENTIAL SPARKS FOLLOWING THE CURLY S-CURVES ─── */}
          {/* Spark 1: Gliding along Curly Inward Axon toward Review Card */}
          <circle r="3" fill="#D4A752" filter="url(#left-glow-v2)" opacity="0.8">
            <animateMotion
              dur="5.5s"
              repeatCount="indefinite"
              path="M 160 260 C 206 238, 228 264, 260 248 C 292 234, 316 262, 348 246 C 378 232, 398 252, 420 240"
            />
          </circle>

          {/* Spark 2: Gliding along Secondary Inward Curly Axon */}
          <circle r="2.5" fill="#C79A45" filter="url(#left-glow-v2)" opacity="0.7">
            <animateMotion
              dur="6.2s"
              repeatCount="indefinite"
              begin="1.8s"
              path="M 160 260 C 202 272, 224 246, 254 262 C 282 278, 306 250, 336 266 C 364 282, 386 258, 412 272"
            />
          </circle>

          {/* Spark 3: Gliding along Curly Apical Canopy Line 1 */}
          <circle r="2.6" fill="#D4A752" filter="url(#left-glow-v2)" opacity="0.75">
            <animateMotion
              dur="7.0s"
              repeatCount="indefinite"
              begin="0.5s"
              path="M 160 260 C 146 205, 174 185, 148 155 C 126 128, 154 105, 122 75 C 96 48, 118 28, 78 12 C 54 -2, 34 14, 10 6"
            />
          </circle>

          {/* Spark 4: Gliding along Curly Apical Line 2 */}
          <circle r="2.2" fill="#8C5B41" filter="url(#left-glow-v2)" opacity="0.65">
            <animateMotion
              dur="6.4s"
              repeatCount="indefinite"
              begin="2.5s"
              path="M 160 260 C 178 214, 152 194, 170 166 C 185 140, 160 118, 142 92 C 124 68, 140 52, 118 32 C 102 18, 86 24, 68 12"
            />
          </circle>

          {/* Spark 5: Gliding along Curly Basal Line 1 */}
          <circle r="2.6" fill="#D4A752" filter="url(#left-glow-v2)" opacity="0.72">
            <animateMotion
              dur="7.4s"
              repeatCount="indefinite"
              begin="1.2s"
              path="M 160 260 C 142 300, 168 320, 146 352 C 126 382, 152 402, 126 434 C 100 464, 122 484, 86 510 C 62 526, 42 514, 18 532"
            />
          </circle>

          {/* Spark 6: Gliding along Curly Basal Line 2 */}
          <circle r="2.2" fill="#8C5B41" filter="url(#left-glow-v2)" opacity="0.65">
            <animateMotion
              dur="6.8s"
              repeatCount="indefinite"
              begin="3.4s"
              path="M 160 260 C 174 294, 150 318, 170 346 C 185 374, 160 396, 178 426 C 192 452, 172 474, 152 500 C 136 518, 116 512, 94 528"
            />
          </circle>

          {/* Spark 7: Gliding along Curly Lateral Line */}
          <circle r="2.2" fill="#C79A45" filter="url(#left-glow-v2)" opacity="0.65">
            <animateMotion
              dur="5.0s"
              repeatCount="indefinite"
              begin="2.0s"
              path="M 160 260 C 108 244, 88 270, 54 256 C 30 244, 16 260, 2 254"
            />
          </circle>
        </svg>
      </div>

      {/* ─── RIGHT NEURON ARBORIZATION (Multiple uneven curly lines, complementary arbor) ─── */}
      <div
        className="hidden md:block absolute right-0 lg:right-2 top-1/2 -translate-y-1/2 w-[280px] md:w-[320px] lg:w-[420px] h-[540px] pointer-events-none z-10 select-none"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 420 540"
          className="w-full h-full overflow-visible"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient id="right-soma-halo-v2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#C79A45" stopOpacity="0.18" />
              <stop offset="45%" stopColor="#8C5B41" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#C79A45" stopOpacity="0" />
            </radialGradient>

            <linearGradient id="right-axon-grad-v2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8C5B41" stopOpacity="0.30" />
              <stop offset="50%" stopColor="#C79A45" stopOpacity="0.40" />
              <stop offset="100%" stopColor="#D4A752" stopOpacity="0.25" />
            </linearGradient>

            <filter id="right-glow-v2" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* 1. Central Soma at (260, 260) */}
          <circle cx="260" cy="260" r="76" fill="url(#right-soma-halo-v2)" />

          {/* Bio-Rhythm Concentric Resonance Rings */}
          <circle
            cx="260"
            cy="260"
            r="46"
            stroke="#C79A45"
            strokeWidth="0.8"
            strokeDasharray="3 5"
            strokeOpacity="0.22"
          >
            <animate
              attributeName="r"
              values="42;49;42"
              dur="6.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-opacity"
              values="0.14;0.28;0.14"
              dur="6.5s"
              repeatCount="indefinite"
            />
          </circle>

          <circle
            cx="260"
            cy="260"
            r="26"
            stroke="#C79A45"
            strokeWidth="1"
            strokeOpacity="0.32"
          />

          {/* Soma Core Nucleus */}
          <circle cx="260" cy="260" r="9" fill="#C79A45" fillOpacity="0.35">
            <animate
              attributeName="fill-opacity"
              values="0.25;0.48;0.25"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </circle>

          {/* ─── 2. MULTIPLE UNEVEN CURLY LINES: APICAL CANOPY (TOP-RIGHT) ─── */}
          {/* Main Curly Apical Trunk */}
          <path
            id="right-curly-apical-1"
            d="M 260 238 C 274 205, 246 185, 272 155 C 294 128, 266 105, 298 75 C 324 48, 302 28, 342 12 C 366 -2, 386 14, 410 6"
            stroke="url(#right-axon-grad-v2)"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          {/* Companion Uneven Curly Line 2 */}
          <path
            id="right-curly-apical-2"
            d="M 254 242 C 242 214, 268 194, 250 166 C 235 140, 260 118, 278 92 C 296 68, 280 52, 302 32 C 318 18, 334 24, 352 12"
            stroke="#C79A45"
            strokeWidth="1.1"
            strokeOpacity="0.32"
            strokeLinecap="round"
          />

          {/* Companion Uneven Curly Line 3 */}
          <path
            id="right-curly-apical-3"
            d="M 266 235 C 288 210, 268 186, 292 160 C 312 135, 290 112, 318 85 C 342 62, 362 74, 384 48 C 400 32, 392 16, 406 8"
            stroke="#8C5B41"
            strokeWidth="0.9"
            strokeOpacity="0.26"
            strokeLinecap="round"
          />

          {/* Pulsing Bio-Flow on Right Apical Dashed Curly Line */}
          <path
            d="M 258 239 C 272 207, 248 187, 272 157 C 292 130, 268 107, 296 77 C 322 50, 304 30, 342 14"
            stroke="#D4A752"
            strokeWidth="0.8"
            strokeDasharray="5 10"
            strokeOpacity="0.45"
            strokeLinecap="round"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-120"
              dur="4.5s"
              repeatCount="indefinite"
            />
          </path>

          {/* Right Apical Curly Branchlets */}
          <path
            d="M 272 155 C 248 138, 228 150, 200 132 C 178 118, 162 126, 138 110"
            stroke="#C79A45"
            strokeWidth="1.1"
            strokeOpacity="0.30"
            strokeLinecap="round"
          />
          <path
            d="M 250 166 C 226 150, 208 160, 182 145 C 162 132, 146 138, 126 126"
            stroke="#8C5B41"
            strokeWidth="0.85"
            strokeOpacity="0.25"
            strokeLinecap="round"
          />
          <path
            d="M 298 75 C 278 60, 258 72, 232 54 C 212 40, 198 48, 176 32"
            stroke="#C79A45"
            strokeWidth="0.9"
            strokeOpacity="0.28"
            strokeLinecap="round"
          />
          <path
            d="M 318 85 C 338 102, 355 92, 376 110 C 392 122, 402 116, 416 128"
            stroke="#8C5B41"
            strokeWidth="0.9"
            strokeOpacity="0.24"
            strokeLinecap="round"
          />
          <path
            d="M 292 160 C 314 176, 332 166, 354 182 C 372 195, 386 188, 406 202"
            stroke="#C79A45"
            strokeWidth="0.85"
            strokeOpacity="0.25"
            strokeLinecap="round"
          />

          {/* ─── 3. MULTIPLE UNEVEN CURLY LINES: INWARD AXON (TOWARD REVIEW VIDEO) ─── */}
          {/* Main Curly Axon 1 reaching inward */}
          <path
            id="right-curly-axon-1"
            d="M 244 252 C 214 238, 192 264, 160 248 C 128 234, 104 262, 72 246 C 42 232, 22 252, 0 240"
            stroke="url(#right-axon-grad-v2)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Companion Uneven Curly Axon 2 */}
          <path
            id="right-curly-axon-2"
            d="M 246 258 C 218 272, 196 246, 166 262 C 138 278, 114 250, 84 266 C 56 282, 34 258, 8 272"
            stroke="#C79A45"
            strokeWidth="1.2"
            strokeOpacity="0.32"
            strokeLinecap="round"
          />

          {/* Companion Uneven Curly Axon 3 */}
          <path
            id="right-curly-axon-3"
            d="M 245 246 C 210 228, 184 248, 150 230 C 120 214, 96 234, 62 218 C 36 204, 16 220, 0 208"
            stroke="#8C5B41"
            strokeWidth="0.95"
            strokeOpacity="0.26"
            strokeLinecap="round"
          />

          {/* Pulsing Bio-Electric Current on Right Inward Axon */}
          <path
            d="M 244 252 C 214 238, 192 264, 160 248 C 128 234, 104 262, 72 246 C 42 232, 22 252, 0 240"
            stroke="#D4A752"
            strokeWidth="0.8"
            strokeDasharray="6 14"
            strokeOpacity="0.5"
            strokeLinecap="round"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-160"
              dur="4s"
              repeatCount="indefinite"
            />
          </path>

          {/* Right Axon Terminal Curly Collaterals */}
          <path
            d="M 72 246 C 50 222, 28 234, 2 220"
            stroke="#C79A45"
            strokeWidth="1.1"
            strokeOpacity="0.30"
            strokeLinecap="round"
          />
          <path
            d="M 84 266 C 60 295, 38 282, 10 306"
            stroke="#8C5B41"
            strokeWidth="1.0"
            strokeOpacity="0.26"
            strokeLinecap="round"
          />
          <path
            d="M 160 248 C 142 224, 122 232, 100 212"
            stroke="#C79A45"
            strokeWidth="0.85"
            strokeOpacity="0.24"
            strokeLinecap="round"
          />
          <path
            d="M 166 262 C 146 288, 126 280, 104 302"
            stroke="#8C5B41"
            strokeWidth="0.85"
            strokeOpacity="0.22"
            strokeLinecap="round"
          />

          {/* ─── 4. MULTIPLE UNEVEN CURLY LINES: BASAL ARBOR (BOTTOM-RIGHT) ─── */}
          {/* Main Curly Basal Trunk */}
          <path
            id="right-curly-basal-1"
            d="M 266 270 C 278 300, 252 320, 274 352 C 294 382, 268 402, 294 434 C 320 464, 298 484, 334 510 C 358 526, 378 514, 402 532"
            stroke="url(#right-axon-grad-v2)"
            strokeWidth="1.7"
            strokeLinecap="round"
          />

          {/* Companion Uneven Curly Line 2 */}
          <path
            id="right-curly-basal-2"
            d="M 260 268 C 246 294, 270 318, 250 346 C 235 374, 260 396, 242 426 C 228 452, 248 474, 268 500 C 284 518, 304 512, 326 528"
            stroke="#C79A45"
            strokeWidth="1.1"
            strokeOpacity="0.32"
            strokeLinecap="round"
          />

          {/* Companion Uneven Curly Line 3 */}
          <path
            id="right-curly-basal-3"
            d="M 272 272 C 288 302, 266 324, 286 356 C 306 384, 284 406, 308 438 C 330 466, 350 454, 374 482 C 392 502, 386 516, 406 530"
            stroke="#8C5B41"
            strokeWidth="0.9"
            strokeOpacity="0.26"
            strokeLinecap="round"
          />

          {/* Pulsing Bio-Flow on Right Basal Dashed Curly Line */}
          <path
            d="M 266 270 C 278 300, 252 320, 274 352 C 294 382, 268 402, 294 434 C 320 464, 298 484, 334 510"
            stroke="#D4A752"
            strokeWidth="0.8"
            strokeDasharray="5 11"
            strokeOpacity="0.45"
            strokeLinecap="round"
          >
            <animate
              attributeName="stroke-dashoffset"
              values="0;-130"
              dur="5s"
              repeatCount="indefinite"
            />
          </path>

          {/* Right Basal Curly Branchlets */}
          <path
            d="M 274 352 C 250 370, 232 358, 206 378 C 186 395, 172 388, 148 406"
            stroke="#C79A45"
            strokeWidth="1.0"
            strokeOpacity="0.28"
            strokeLinecap="round"
          />
          <path
            d="M 294 434 C 270 452, 252 444, 226 462 C 206 476, 194 472, 170 486"
            stroke="#8C5B41"
            strokeWidth="0.85"
            strokeOpacity="0.24"
            strokeLinecap="round"
          />
          <path
            d="M 286 356 C 308 342, 326 352, 348 336 C 366 324, 380 332, 402 318"
            stroke="#C79A45"
            strokeWidth="0.85"
            strokeOpacity="0.24"
            strokeLinecap="round"
          />
          <path
            d="M 308 438 C 328 424, 344 434, 366 418 C 384 406, 396 414, 414 402"
            stroke="#8C5B41"
            strokeWidth="0.85"
            strokeOpacity="0.22"
            strokeLinecap="round"
          />

          {/* ─── 5. MULTIPLE UNEVEN CURLY LINES: LATERAL OUTWARD (RIGHT MARGIN) ─── */}
          <path
            id="right-curly-lateral-1"
            d="M 278 256 C 312 244, 332 270, 366 256 C 390 244, 404 260, 418 254"
            stroke="url(#right-axon-grad-v2)"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <path
            d="M 276 264 C 304 278, 324 254, 350 272 C 374 288, 392 274, 416 290"
            stroke="#8C5B41"
            strokeWidth="0.9"
            strokeOpacity="0.25"
            strokeLinecap="round"
          />
          <path
            d="M 274 248 C 300 234, 320 252, 346 238 C 370 224, 386 240, 410 230"
            stroke="#C79A45"
            strokeWidth="0.85"
            strokeOpacity="0.24"
            strokeLinecap="round"
          />

          {/* ─── 6. SYNAPTIC BOUTONS (Uneven Terminal Nodes with breathing pulse) ─── */}
          <g fill="#C79A45">
            {/* Top branch terminals */}
            <circle cx="410" cy="6" r="3.2" fillOpacity="0.5">
              <animate attributeName="r" values="2.4;4;2.4" dur="3.5s" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" values="0.35;0.7;0.35" dur="3.5s" repeatCount="indefinite" />
            </circle>
            <circle cx="352" cy="12" r="2.8" fillOpacity="0.4" />
            <circle cx="406" cy="8" r="2.4" fillOpacity="0.35" />
            <circle cx="138" cy="110" r="3" fillOpacity="0.45" />
            <circle cx="126" cy="126" r="2.6" fillOpacity="0.35" />
            <circle cx="176" cy="32" r="2.8" fillOpacity="0.4" />
            <circle cx="416" cy="128" r="2.5" fillOpacity="0.35" />
            <circle cx="406" cy="202" r="2.6" fillOpacity="0.35" />

            {/* Inward axon terminals (near review card) */}
            <circle cx="0" cy="240" r="3.8" fillOpacity="0.6">
              <animate attributeName="r" values="3;4.8;3" dur="2.8s" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" values="0.4;0.8;0.4" dur="2.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="8" cy="272" r="3.2" fillOpacity="0.5" />
            <circle cx="0" cy="208" r="3" fillOpacity="0.45" />
            <circle cx="2" cy="220" r="3" fillOpacity="0.45" />
            <circle cx="10" cy="306" r="3" fillOpacity="0.45" />
            <circle cx="100" cy="212" r="2.5" fillOpacity="0.35" />
            <circle cx="104" cy="302" r="2.5" fillOpacity="0.35" />

            {/* Bottom branch terminals */}
            <circle cx="402" cy="532" r="3.2" fillOpacity="0.5">
              <animate attributeName="r" values="2.4;4;2.4" dur="3.8s" repeatCount="indefinite" />
              <animate attributeName="fill-opacity" values="0.35;0.7;0.35" dur="3.8s" repeatCount="indefinite" />
            </circle>
            <circle cx="326" cy="528" r="2.8" fillOpacity="0.4" />
            <circle cx="406" cy="530" r="2.4" fillOpacity="0.35" />
            <circle cx="148" cy="406" r="2.8" fillOpacity="0.4" />
            <circle cx="170" cy="486" r="2.6" fillOpacity="0.35" />
            <circle cx="402" cy="318" r="2.5" fillOpacity="0.35" />
            <circle cx="414" cy="402" r="2.4" fillOpacity="0.3" />

            {/* Lateral terminals */}
            <circle cx="418" cy="254" r="2.8" fillOpacity="0.4" />
            <circle cx="416" cy="290" r="2.5" fillOpacity="0.35" />
            <circle cx="410" cy="230" r="2.4" fillOpacity="0.35" />
          </g>

          {/* ─── 7. ANIMATED ACTION POTENTIAL SPARKS FOLLOWING THE CURLY S-CURVES ─── */}
          {/* Spark 1: Gliding along Curly Inward Axon toward Review Card */}
          <circle r="3" fill="#D4A752" filter="url(#right-glow-v2)" opacity="0.8">
            <animateMotion
              dur="5.8s"
              repeatCount="indefinite"
              begin="0.8s"
              path="M 260 260 C 214 238, 192 264, 160 248 C 128 234, 104 262, 72 246 C 42 232, 22 252, 0 240"
            />
          </circle>

          {/* Spark 2: Gliding along Secondary Inward Curly Axon */}
          <circle r="2.5" fill="#C79A45" filter="url(#right-glow-v2)" opacity="0.7">
            <animateMotion
              dur="6.5s"
              repeatCount="indefinite"
              begin="2.2s"
              path="M 260 260 C 218 272, 196 246, 166 262 C 138 278, 114 250, 84 266 C 56 282, 34 258, 8 272"
            />
          </circle>

          {/* Spark 3: Gliding along Curly Apical Canopy Line 1 */}
          <circle r="2.6" fill="#D4A752" filter="url(#right-glow-v2)" opacity="0.75">
            <animateMotion
              dur="7.2s"
              repeatCount="indefinite"
              begin="1.0s"
              path="M 260 260 C 274 205, 246 185, 272 155 C 294 128, 266 105, 298 75 C 324 48, 302 28, 342 12 C 366 -2, 386 14, 410 6"
            />
          </circle>

          {/* Spark 4: Gliding along Curly Apical Line 2 */}
          <circle r="2.2" fill="#8C5B41" filter="url(#right-glow-v2)" opacity="0.65">
            <animateMotion
              dur="6.6s"
              repeatCount="indefinite"
              begin="3.0s"
              path="M 260 260 C 242 214, 268 194, 250 166 C 235 140, 260 118, 278 92 C 296 68, 280 52, 302 32 C 318 18, 334 24, 352 12"
            />
          </circle>

          {/* Spark 5: Gliding along Curly Basal Line 1 */}
          <circle r="2.6" fill="#D4A752" filter="url(#right-glow-v2)" opacity="0.72">
            <animateMotion
              dur="7.6s"
              repeatCount="indefinite"
              begin="1.6s"
              path="M 260 260 C 278 300, 252 320, 274 352 C 294 382, 268 402, 294 434 C 320 464, 298 484, 334 510 C 358 526, 378 514, 402 532"
            />
          </circle>

          {/* Spark 6: Gliding along Curly Basal Line 2 */}
          <circle r="2.2" fill="#8C5B41" filter="url(#right-glow-v2)" opacity="0.65">
            <animateMotion
              dur="7.0s"
              repeatCount="indefinite"
              begin="3.8s"
              path="M 260 260 C 246 294, 270 318, 250 346 C 235 374, 260 396, 242 426 C 228 452, 248 474, 268 500 C 284 518, 304 512, 326 528"
            />
          </circle>

          {/* Spark 7: Gliding along Curly Lateral Line */}
          <circle r="2.2" fill="#C79A45" filter="url(#right-glow-v2)" opacity="0.65">
            <animateMotion
              dur="5.2s"
              repeatCount="indefinite"
              begin="2.4s"
              path="M 260 260 C 312 244, 332 270, 366 256 C 390 244, 404 260, 418 254"
            />
          </circle>
        </svg>
      </div>
    </>
  );
};
