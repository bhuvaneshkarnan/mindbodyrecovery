"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface WebBridge {
  fromId: string;
  toId: string;
  fromAnchor: { xPct: number; yPct: number }; // Relative position on element
  toAnchor: { xPct: number; yPct: number };
  curvature: number; // -1 for left curve, +1 for right curve
}

const SECTION_BRIDGES: WebBridge[] = [
  { fromId: "hero",     toId: "stories",  fromAnchor: { xPct: 0.5, yPct: 0.95 }, toAnchor: { xPct: 0.5, yPct: 0.1 }, curvature: -0.6 },
  { fromId: "stories",  toId: "about",    fromAnchor: { xPct: 0.5, yPct: 0.95 }, toAnchor: { xPct: 0.45, yPct: 0.1 }, curvature: 0.7 },
  { fromId: "about",    toId: "purpose",  fromAnchor: { xPct: 0.5, yPct: 0.95 }, toAnchor: { xPct: 0.5, yPct: 0.1 }, curvature: -0.8 },
  { fromId: "purpose",  toId: "relax",    fromAnchor: { xPct: 0.5, yPct: 0.95 }, toAnchor: { xPct: 0.5, yPct: 0.1 }, curvature: 0.6 },
  { fromId: "relax",    toId: "rethink",  fromAnchor: { xPct: 0.5, yPct: 0.95 }, toAnchor: { xPct: 0.5, yPct: 0.1 }, curvature: -0.7 },
  { fromId: "rethink",  toId: "concerns", fromAnchor: { xPct: 0.5, yPct: 0.95 }, toAnchor: { xPct: 0.5, yPct: 0.1 }, curvature: 0.6 },
  { fromId: "concerns", toId: "rebuild",  fromAnchor: { xPct: 0.5, yPct: 0.95 }, toAnchor: { xPct: 0.5, yPct: 0.1 }, curvature: -0.6 },
  { fromId: "rebuild",  toId: "doctor",   fromAnchor: { xPct: 0.5, yPct: 0.95 }, toAnchor: { xPct: 0.35, yPct: 0.1 }, curvature: 0.8 },
  { fromId: "doctor",   toId: "contact",  fromAnchor: { xPct: 0.5, yPct: 0.95 }, toAnchor: { xPct: 0.5, yPct: 0.1 }, curvature: -0.5 },
];

export const GsapSpiderWebConnector: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [paths, setPaths] = useState<{ id: string; d: string; x1: number; y1: number; x2: number; y2: number }[]>([]);
  const [docSize, setDocSize] = useState({ width: 1440, height: 10000 });

  useEffect(() => {
    // Integrate GSAP ScrollTrigger with Lenis
    if (typeof window !== "undefined") {
      const lenisInstance = (window as unknown as { lenis?: { on: (e: string, cb: () => void) => void } }).lenis;
      if (lenisInstance) {
        lenisInstance.on("scroll", ScrollTrigger.update);
        gsap.ticker.add((time) => {
          // Keep GSAP ticker in sync with Lenis
        });
      }
    }

    const calculateWebConnections = () => {
      if (typeof document === "undefined") return;

      const fullHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        10000
      );
      const fullWidth = document.documentElement.clientWidth || window.innerWidth;

      setDocSize({ width: fullWidth, height: fullHeight });

      const calculatedPaths: { id: string; d: string; x1: number; y1: number; x2: number; y2: number }[] = [];

      SECTION_BRIDGES.forEach((bridge, idx) => {
        const fromEl = document.getElementById(bridge.fromId);
        const toEl = document.getElementById(bridge.toId);

        if (fromEl && toEl) {
          const fromRect = fromEl.getBoundingClientRect();
          const toRect = toEl.getBoundingClientRect();

          const scrollY = window.scrollY;

          // Absolute coordinates on page
          const x1 = fromRect.left + fromRect.width * bridge.fromAnchor.xPct;
          const y1 = fromRect.top + scrollY + fromRect.height * bridge.fromAnchor.yPct;

          const x2 = toRect.left + toRect.width * bridge.toAnchor.xPct;
          const y2 = toRect.top + scrollY + toRect.height * bridge.toAnchor.yPct;

          // Distance and organic control points with ECG/spider-web wave curve
          const dy = y2 - y1;
          const cx1 = x1 + bridge.curvature * Math.min(240, fullWidth * 0.22);
          const cy1 = y1 + dy * 0.35;

          const cx2 = x2 - bridge.curvature * Math.min(240, fullWidth * 0.22);
          const cy2 = y1 + dy * 0.65;

          // Multi-point organic spider-web Bezier silk path
          const d = `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`;

          calculatedPaths.push({
            id: `web-bridge-${idx}`,
            d,
            x1,
            y1,
            x2,
            y2,
          });
        }
      });

      setPaths(calculatedPaths);
    };

    // Calculate on mount and after render settled
    calculateWebConnections();
    const timer = setTimeout(calculateWebConnections, 1200);
    window.addEventListener("resize", calculateWebConnections);

    return () => {
      window.removeEventListener("resize", calculateWebConnections);
      clearTimeout(timer);
    };
  }, []);

  // Initialize GSAP ScrollTrigger animations on the calculated paths
  useEffect(() => {
    if (paths.length === 0) return;

    const ctx = gsap.context(() => {
      paths.forEach((pathObj, idx) => {
        const pathEl = document.getElementById(`silk-path-${idx}`);
        const sparkEl = document.getElementById(`silk-spark-${idx}`);
        const endNodeEl = document.getElementById(`web-node-${idx}`);
        const endFanEl = document.getElementById(`web-fan-${idx}`);

        if (pathEl) {
          const svgPath = pathEl as unknown as SVGPathElement;
          const length = svgPath.getTotalLength ? svgPath.getTotalLength() : 1000;

          gsap.set(pathEl, {
            strokeDasharray: length,
            strokeDashoffset: length,
          });

          if (sparkEl) {
            gsap.set(sparkEl, { opacity: 0 });
          }
          if (endNodeEl) {
            gsap.set(endNodeEl, { scale: 0, opacity: 0 });
          }
          if (endFanEl) {
            gsap.set(endFanEl, { opacity: 0, scale: 0.5 });
          }

          const bridge = SECTION_BRIDGES[idx];
          const triggerEl = document.getElementById(bridge.fromId);

          if (triggerEl) {
            // Scrub growth smoothly across section scroll
            const tl = gsap.timeline({
              scrollTrigger: {
                trigger: triggerEl,
                start: "center center",
                endTrigger: `#${bridge.toId}`,
                end: "top 60%",
                scrub: 1.2,
                onUpdate: (self) => {
                  // Move spark along path
                  if (sparkEl && svgPath.getPointAtLength) {
                    const point = svgPath.getPointAtLength(self.progress * length);
                    gsap.set(sparkEl, {
                      x: point.x,
                      y: point.y,
                      opacity: self.progress > 0.02 && self.progress < 0.98 ? 1 : 0,
                    });
                  }
                },
              },
            });

            tl.to(pathEl, {
              strokeDashoffset: 0,
              ease: "none",
            });

            // When reaching destination section body: bloom spider-web anchor fan
            if (endNodeEl) {
              tl.to(
                endNodeEl,
                {
                  scale: 1,
                  opacity: 1,
                  duration: 0.2,
                  ease: "back.out(2)",
                },
                ">-0.2"
              );
            }

            if (endFanEl) {
              tl.to(
                endFanEl,
                {
                  scale: 1,
                  opacity: 0.85,
                  duration: 0.3,
                  ease: "power2.out",
                },
                ">-0.2"
              );
            }
          }
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, [paths]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 w-full pointer-events-none overflow-hidden z-10"
      style={{ height: docSize.height }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full overflow-visible"
        viewBox={`0 0 ${docSize.width} ${docSize.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Glowing Silk Thread Gradient */}
          <linearGradient id="silk-gold-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C79A45" stopOpacity="0.7" />
            <stop offset="50%" stopColor="#93A579" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C79A45" stopOpacity="0.95" />
          </linearGradient>

          {/* Faint Guide Line */}
          <linearGradient id="silk-guide-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C79A45" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#C79A45" stopOpacity="0.05" />
          </linearGradient>

          {/* Glowing Spark Filter */}
          <filter id="silk-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {paths.map((p, idx) => (
          <g key={p.id}>
            {/* 1. Faint dashed spider-web guide silk */}
            <path
              d={p.d}
              stroke="url(#silk-guide-gradient)"
              strokeWidth="1.5"
              strokeDasharray="4 6"
              strokeLinecap="round"
            />

            {/* 2. Interactive GSAP Growth Silk Thread */}
            <path
              id={`silk-path-${idx}`}
              d={p.d}
              stroke="url(#silk-gold-gradient)"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#silk-glow)"
            />

            {/* Inner fine core filament */}
            <path
              d={p.d}
              stroke="#FFFFFF"
              strokeWidth="0.8"
              strokeOpacity="0.4"
              strokeLinecap="round"
            />

            {/* 3. Origin Attachment Anchor Node */}
            <circle cx={p.x1} cy={p.y1} r="3" fill="#C79A45" filter="url(#silk-glow)" />
            <circle cx={p.x1} cy={p.y1} r="1.5" fill="#FFFFFF" />

            {/* 4. Destination Spider-Web Anchor Fan (Attaches to Section Body) */}
            <g id={`web-fan-${idx}`} style={{ transformOrigin: `${p.x2}px ${p.y2}px` }}>
              {/* Spider-Web Radiating Anchor Filaments */}
              <path
                d={`M ${p.x2} ${p.y2} L ${p.x2 - 45} ${p.y2 - 25} M ${p.x2} ${p.y2} L ${p.x2 + 45} ${p.y2 - 25} M ${p.x2} ${p.y2} L ${p.x2 - 30} ${p.y2 + 25} M ${p.x2} ${p.y2} L ${p.x2 + 30} ${p.y2 + 25}`}
                stroke="#C79A45"
                strokeWidth="1.2"
                strokeDasharray="3 3"
                strokeOpacity="0.75"
              />
              <path
                d={`M ${p.x2 - 35} ${p.y2 - 18} Q ${p.x2} ${p.y2 - 30}, ${p.x2 + 35} ${p.y2 - 18}`}
                stroke="#C79A45"
                strokeWidth="1"
                strokeOpacity="0.6"
              />
            </g>

            {/* Destination Bouton Node */}
            <g id={`web-node-${idx}`} style={{ transformOrigin: `${p.x2}px ${p.y2}px` }}>
              <circle cx={p.x2} cy={p.y2} r="5" fill="#C79A45" filter="url(#silk-glow)" />
              <circle cx={p.x2} cy={p.y2} r="2.5" fill="#FFFFFF" />
            </g>

            {/* 5. Traveling Silk Action Potential Spark */}
            <g id={`silk-spark-${idx}`}>
              <circle r="4" fill="#FFFFFF" filter="url(#silk-glow)" />
              <circle r="2" fill="#C79A45" />
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
};
