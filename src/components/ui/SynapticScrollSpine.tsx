"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface SectionDefinition {
  id: string;
  theme: "dark" | "light";
  headingSelector: string;
  bodySelector: string;
  fallbackHeadingX: number;
  fallbackBodyX: number;
}

const SECTIONS: SectionDefinition[] = [
  {
    id: "stories",
    theme: "light",
    headingSelector: "h2",
    bodySelector: "iframe, .max-w-sm",
    fallbackHeadingX: 0.45,
    fallbackBodyX: 0.55,
  },
  {
    id: "about",
    theme: "dark",
    headingSelector: "h2",
    bodySelector: ".relative.mb-6",
    fallbackHeadingX: 0.43,
    fallbackBodyX: 0.57,
  },
  {
    id: "purpose",
    theme: "light",
    headingSelector: "h2",
    bodySelector: ".grid",
    fallbackHeadingX: 0.47,
    fallbackBodyX: 0.53,
  },
  {
    id: "relax",
    theme: "dark",
    headingSelector: "h2",
    bodySelector: ".max-w-\\[840px\\], .relative.w-full",
    fallbackHeadingX: 0.44,
    fallbackBodyX: 0.56,
  },
  {
    id: "rethink",
    theme: "light",
    headingSelector: "h2",
    bodySelector: ".relative.w-full, img",
    fallbackHeadingX: 0.55,
    fallbackBodyX: 0.45,
  },
  {
    id: "concerns",
    theme: "light",
    headingSelector: "h2",
    bodySelector: ".grid",
    fallbackHeadingX: 0.48,
    fallbackBodyX: 0.52,
  },
  {
    id: "rebuild",
    theme: "dark",
    headingSelector: "h2",
    bodySelector: ".max-w-\\[840px\\], .relative.w-full",
    fallbackHeadingX: 0.43,
    fallbackBodyX: 0.57,
  },
  {
    id: "doctor",
    theme: "light",
    headingSelector: "h2",
    bodySelector: "img, .max-w-md",
    fallbackHeadingX: 0.54,
    fallbackBodyX: 0.46,
  },
  {
    id: "contact",
    theme: "dark",
    headingSelector: "h2",
    bodySelector: "form, .max-w-7xl",
    fallbackHeadingX: 0.48,
    fallbackBodyX: 0.50,
  },
];

interface Waypoint {
  x: number;
  y: number;
  theme: "dark" | "light";
  label: string;
}

interface NodeData {
  id: string;
  x: number;
  y: number;
  r: number;
}

interface PathSample {
  l: number;
  y: number;
}

function getLengthForY(targetY: number, samples: PathSample[], totalLen: number): number {
  if (samples.length === 0) return 0;
  if (targetY <= samples[0].y) return 0;
  if (targetY >= samples[samples.length - 1].y) return totalLen;

  let low = 0;
  let high = samples.length - 1;
  while (low <= high) {
    const mid = (low + high) >> 1;
    if (samples[mid].y < targetY) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  const s0 = samples[Math.max(0, low - 1)];
  const s1 = samples[Math.min(samples.length - 1, low)];
  if (s1.y <= s0.y) return s0.l;
  const t = Math.max(0, Math.min(1, (targetY - s0.y) / (s1.y - s0.y)));
  return s0.l + t * (s1.l - s0.l);
}

export const SynapticScrollSpine: React.FC = () => {
  const containerRef = useRef<SVGSVGElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);
  const path3Ref = useRef<SVGPathElement>(null);

  const [paths, setPaths] = useState<{ p1: string; p2: string; p3: string }>({ p1: "", p2: "", p3: "" });
  const [nodes, setNodes] = useState<NodeData[]>([]);
  const [svgHeight, setSvgHeight] = useState<number>(7500);
  const [svgWidth, setSvgWidth] = useState<number>(1440);

  // Cached path geometry samples for 120fps instant lookup
  const pathDataRef = useRef<{
    p1: { len: number; samples: PathSample[] };
    p2: { len: number; samples: PathSample[] };
    p3: { len: number; samples: PathSample[] };
  }>({
    p1: { len: 0, samples: [] },
    p2: { len: 0, samples: [] },
    p3: { len: 0, samples: [] },
  });

  const nodesRef = useRef<NodeData[]>([]);

  // ── 1. BUILD WAYPOINTS & SMOOTH BÉZIER SPLINES ──
  const buildNeuralNetwork = useCallback(() => {
    if (typeof document === "undefined" || !containerRef.current) return;

    const mainEl = containerRef.current.parentElement;
    if (!mainEl) return;

    const mainRect = mainEl.getBoundingClientRect();
    const docWidth = window.innerWidth;
    const docHeight = mainEl.scrollHeight || mainRect.height;

    setSvgWidth(docWidth);
    setSvgHeight(docHeight);

    const isMobile = docWidth < 768;

    // Origin: starts right at the bottom edge of the hero section
    const heroEl = document.getElementById("hero");
    let originY = 680;
    if (heroEl) {
      const heroRect = heroEl.getBoundingClientRect();
      originY = Math.round(heroRect.bottom - mainRect.top);
    }
    const originX = Math.round(docWidth * (isMobile ? 0.48 : 0.46));

    const waypoints: Waypoint[] = [
      { x: originX, y: originY, theme: "dark", label: "hero-end" },
    ];
    const generatedNodes: NodeData[] = [];

    for (const sec of SECTIONS) {
      const secEl = document.getElementById(sec.id);
      if (!secEl) continue;

      const secRect = secEl.getBoundingClientRect();
      const secTop = secRect.top - mainRect.top;

      let headX: number;
      let headY: number;
      let bodyX: number;
      let bodyY: number;

      if (isMobile) {
        // Mobile single-column flow:
        // Follows the graceful central spinal corridor of the page (between 42% and 58% width).
        // Never squished into the 16px screen bezel!
        headX = Math.round(docWidth * (sec.fallbackHeadingX || 0.48));
        headY = Math.round(secTop + Math.min(secRect.height * 0.12, 100));

        bodyX = Math.round(docWidth * (sec.fallbackBodyX || 0.52));
        bodyY = Math.round(secTop + secRect.height * 0.65);
      } else {
        // Desktop multi-column flow:
        const hEl = secEl.querySelector(sec.headingSelector);
        if (hEl) {
          const hRect = hEl.getBoundingClientRect();
          const isCentered = Math.abs((hRect.left + hRect.width * 0.5) - (mainRect.left + docWidth * 0.5)) < 100;
          if (isCentered) {
            headX = Math.round(hRect.left - mainRect.left - 36);
            headY = Math.round(hRect.top - mainRect.top + hRect.height * 0.45);
          } else {
            headX = Math.round(hRect.left - mainRect.left - 30);
            headY = Math.round(hRect.top - mainRect.top + hRect.height * 0.5);
          }
        } else {
          headX = Math.round(docWidth * sec.fallbackHeadingX);
          headY = Math.round(secTop + secRect.height * 0.18);
        }

        headX = Math.max(40, Math.min(docWidth - 40, headX));

        const bodyEl = secEl.querySelector(sec.bodySelector);
        if (bodyEl) {
          const bRect = bodyEl.getBoundingClientRect();
          bodyX = Math.round(bRect.left - mainRect.left + bRect.width * 0.55);
          bodyY = Math.round(bRect.top - mainRect.top + bRect.height * 0.5);
        } else {
          bodyX = Math.round(docWidth * sec.fallbackBodyX);
          bodyY = Math.round(secTop + secRect.height * 0.65);
        }

        bodyX = Math.max(60, Math.min(docWidth - 60, bodyX));
      }

      waypoints.push({ x: headX, y: headY, theme: sec.theme, label: `${sec.id}-head` });
      generatedNodes.push({
        id: `node-${sec.id}-head`,
        x: headX,
        y: headY,
        r: isMobile ? 3.5 : 5.5,
      });

      // Intermediate gentle waypoints for tall sections (PurposeHub) to preserve natural meander
      if (sec.id === "purpose" && secRect.height > 1200) {
        const midY1 = Math.round(secTop + secRect.height * 0.36);
        const midX1 = Math.round(docWidth * (isMobile ? 0.44 : 0.40));
        waypoints.push({ x: midX1, y: midY1, theme: sec.theme, label: `${sec.id}-mid1` });

        const midY2 = Math.round(secTop + secRect.height * 0.68);
        const midX2 = Math.round(docWidth * (isMobile ? 0.56 : 0.62));
        waypoints.push({ x: midX2, y: midY2, theme: sec.theme, label: `${sec.id}-mid2` });
      }

      waypoints.push({ x: bodyX, y: bodyY, theme: sec.theme, label: `${sec.id}-body` });
      generatedNodes.push({
        id: `node-${sec.id}-body`,
        x: bodyX,
        y: bodyY,
        r: isMobile ? 3.0 : 4.8,
      });
    }

    // Terminal point at bottom
    waypoints.push({
      x: Math.round(docWidth * 0.5),
      y: docHeight,
      theme: "dark",
      label: "terminal",
    });

    if (waypoints.length < 3) return;

    // Generate smooth sinusoidal cubic Bézier splines
    const generateSpline = (offsetFn: (i: number, c: number, total: number) => number) => {
      let d = "";

      for (let i = 0; i < waypoints.length - 1; i++) {
        const p1 = waypoints[i];
        const p2 = waypoints[i + 1];

        const dx = p2.x - p1.x;
        const dy = p2.y - p1.y;
        const dist = Math.hypot(dx, dy);

        const cycles = Math.max(2, Math.round(dist / (isMobile ? 160 : 180)));
        const segH = dy / (cycles * 2);

        for (let c = 0; c < cycles * 2; c++) {
          const frac1 = c / (cycles * 2);
          const frac2 = (c + 1) / (cycles * 2);

          const curBaseX = p1.x + dx * frac1;
          const curBaseY = p1.y + dy * frac1;
          const nxtBaseX = p1.x + dx * frac2;
          const nxtBaseY = p1.y + dy * frac2;

          const clampX = (val: number) => Math.max(isMobile ? 36 : 24, Math.min(docWidth - (isMobile ? 36 : 24), val));

          const off1 = offsetFn(i, c, cycles * 2);
          const off2 = offsetFn(i, c + 1, cycles * 2);

          const curX = clampX(curBaseX + off1);
          const curY = curBaseY;
          const nxtX = clampX(nxtBaseX + off2);
          const nxtY = nxtBaseY;

          const sign = c % 2 === 0 ? 1 : -1;
          const bowAmp = isMobile ? 8 : 14;

          const cp1x = clampX(curX + (nxtX - curX) * 0.25 + sign * bowAmp);
          const cp1y = curY + segH * 0.45;
          const cp2x = clampX(nxtX - (nxtX - curX) * 0.25 + sign * bowAmp);
          const cp2y = nxtY - segH * 0.45;

          if (i === 0 && c === 0) {
            d += `M ${Math.round(curX)} ${Math.round(curY)}`;
          }

          d += ` C ${Math.round(cp1x)} ${Math.round(cp1y)}, ${Math.round(cp2x)} ${Math.round(
            cp2y
          )}, ${Math.round(nxtX)} ${Math.round(nxtY)}`;
        }
      }

      return d;
    };

    const p1 = generateSpline(() => 0);
    const p2 = generateSpline((i, c) => (isMobile ? 6 : 12) + Math.sin((i * 2.5 + c) * 0.8) * (isMobile ? 3 : 4));
    const p3 = generateSpline((i, c) => -((isMobile ? 8 : 22) + Math.sin((i * 1.5 + c * 0.4)) * (isMobile ? 3 : 6)));

    setPaths({ p1, p2, p3 });
    setNodes(generatedNodes);
    nodesRef.current = generatedNodes;
  }, []);

  // ── 2. SAMPLE PATHS ONCE THEY ARE MOUNTED IN DOM ──
  const sampleAllPaths = useCallback(() => {
    const sample = (pathEl: SVGPathElement | null) => {
      if (!pathEl) return { len: 0, samples: [] };
      const len = pathEl.getTotalLength();
      if (!len || len <= 0) return { len: 0, samples: [] };

      const samples: PathSample[] = [];
      const step = 20; // Sample every 20px for high-precision interpolation
      for (let l = 0; l <= len; l += step) {
        const pt = pathEl.getPointAtLength(l);
        samples.push({ l, y: pt.y });
      }
      if (samples.length === 0 || samples[samples.length - 1].l < len) {
        const pt = pathEl.getPointAtLength(len);
        samples.push({ l: len, y: pt.y });
      }

      // Initialize path stroke dash
      pathEl.style.strokeDasharray = `${len} ${len}`;
      pathEl.style.strokeDashoffset = `${len}px`;

      return { len, samples };
    };

    pathDataRef.current = {
      p1: sample(path1Ref.current),
      p2: sample(path2Ref.current),
      p3: sample(path3Ref.current),
    };
  }, []);

  // ── 3. UPDATE SCROLL POSITION IN REAL-TIME (120 FPS, ZERO LAG) ──
  const updateScroll = useCallback(() => {
    const sy = window.scrollY || document.documentElement.scrollTop || 0;
    const vh = window.innerHeight;

    const { p1, p2, p3 } = pathDataRef.current;
    if (p1.len === 0) return;

    // Lead Line 1: focal point at 72% down viewport (leads)
    const targetY1 = sy + vh * 0.72;
    // Follow Line 2: focal point at 64% down viewport (follows second)
    const targetY2 = sy + vh * 0.64;
    // Follow Line 3: focal point at 56% down viewport (follows third)
    const targetY3 = sy + vh * 0.56;

    const l1 = getLengthForY(targetY1, p1.samples, p1.len);
    const l2 = getLengthForY(targetY2, p2.samples, p2.len);
    const l3 = getLengthForY(targetY3, p3.samples, p3.len);

    if (path1Ref.current) {
      path1Ref.current.style.strokeDashoffset = `${Math.max(0, p1.len - l1)}px`;
    }
    if (path2Ref.current) {
      path2Ref.current.style.strokeDashoffset = `${Math.max(0, p2.len - l2)}px`;
    }
    if (path3Ref.current) {
      path3Ref.current.style.strokeDashoffset = `${Math.max(0, p3.len - l3)}px`;
    }

    // Update synaptic bouton nodes
    const currentNodes = nodesRef.current;
    for (let i = 0; i < currentNodes.length; i++) {
      const node = currentNodes[i];
      const el = document.getElementById(`bouton-${node.id}`);
      if (!el) continue;

      const delta = targetY1 - node.y;
      if (delta < -80) {
        el.style.opacity = "0";
        el.style.transform = "scale(0.3)";
      } else if (delta >= 40) {
        el.style.opacity = "0.85";
        el.style.transform = "scale(1)";
      } else {
        const p = (delta + 80) / 120;
        el.style.opacity = String(0.85 * p);
        el.style.transform = `scale(${0.3 + 0.7 * p})`;
      }
    }
  }, []);

  useEffect(() => {
    buildNeuralNetwork();

    const handleResize = () => {
      buildNeuralNetwork();
      setTimeout(() => {
        sampleAllPaths();
        updateScroll();
      }, 50);
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Sample paths when ready
    const t1 = setTimeout(() => {
      buildNeuralNetwork();
      sampleAllPaths();
      updateScroll();
    }, 150);

    const t2 = setTimeout(() => {
      sampleAllPaths();
      updateScroll();
    }, 600);

    // Scroll listener: native window scroll + mobile touch
    const onScroll = () => {
      requestAnimationFrame(updateScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("touchmove", onScroll, { passive: true });

    // Sync with Lenis smooth scroll if active
    let lenisUnsub: (() => void) | null = null;
    const checkLenis = setInterval(() => {
      const lenis = (window as unknown as { lenis?: { on: (event: string, cb: () => void) => () => void } }).lenis;
      if (lenis && lenis.on) {
        lenisUnsub = lenis.on("scroll", () => {
          requestAnimationFrame(updateScroll);
        });
        clearInterval(checkLenis);
      }
    }, 100);

    const stopLenisCheck = setTimeout(() => clearInterval(checkLenis), 3000);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("touchmove", onScroll);
      if (lenisUnsub) lenisUnsub();
      clearInterval(checkLenis);
      clearTimeout(stopLenisCheck);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [buildNeuralNetwork, sampleAllPaths, updateScroll]);

  // When paths change, sample them and update scroll
  useEffect(() => {
    if (paths.p1) {
      sampleAllPaths();
      updateScroll();
    }
  }, [paths, sampleAllPaths, updateScroll]);

  if (!paths.p1) {
    return (
      <svg
        ref={containerRef}
        className="absolute inset-0 w-full pointer-events-none z-[5]"
        aria-hidden="true"
      />
    );
  }

  return (
    <svg
      ref={containerRef}
      // z-[5] positions safely BELOW all content & image cards (which sit at z-10/z-20)
      className="absolute inset-0 w-full pointer-events-none z-[5] overflow-visible"
      style={{ height: `${svgHeight}px`, width: `${svgWidth}px` }}
      aria-hidden="true"
    >
      <defs>
        {/* Soft Bioluminescent Glow Filter */}
        <filter id="spine-axon-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.0" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Primary Gold Axon Gradient */}
        <linearGradient id="spine-gold-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#93A579" stopOpacity="0.80" />
          <stop offset="25%" stopColor="#C79A45" stopOpacity="0.88" />
          <stop offset="50%" stopColor="#E5B842" stopOpacity="0.90" />
          <stop offset="75%" stopColor="#B37B2E" stopOpacity="0.82" />
          <stop offset="100%" stopColor="#C79A45" stopOpacity="0.85" />
        </linearGradient>

        {/* Secondary Filament Gradient */}
        <linearGradient id="spine-sage-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C79A45" stopOpacity="0.75" />
          <stop offset="50%" stopColor="#93A579" stopOpacity="0.80" />
          <stop offset="100%" stopColor="#8C5B41" stopOpacity="0.70" />
        </linearGradient>

        {/* Satellite Filament Gradient */}
        <linearGradient id="spine-amber-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B37B2E" stopOpacity="0.70" />
          <stop offset="50%" stopColor="#E5B842" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#C79A45" stopOpacity="0.70" />
        </linearGradient>
      </defs>

      {/* ── 1. FAINT MYELIN GUIDE LINE (Desktop only) ── */}
      <path
        d={paths.p1}
        stroke="rgba(199, 154, 69, 0.08)"
        strokeWidth="1.0"
        strokeDasharray="4 12"
        fill="none"
        className="hidden md:block"
      />

      {/* ── 2. UNEVEN LINES (Direct 1:1 Pixel Scroll Synchronization) ── */}

      {/* Line 3: Satellite Filament (Desktop only) */}
      <path
        ref={path3Ref}
        d={paths.p3}
        stroke="url(#spine-amber-grad)"
        strokeWidth={1.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="hidden md:block"
        style={{
          opacity: 0.48,
          transition: "none",
        }}
      />

      {/* Line 2: Paired Companion Axon (Desktop only) */}
      <path
        ref={path2Ref}
        d={paths.p2}
        stroke="url(#spine-sage-grad)"
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        className="hidden md:block"
        filter="url(#spine-axon-glow)"
        style={{
          opacity: 0.60,
          transition: "none",
        }}
      />

      {/* Line 1: Primary Gold Axon (Single, refined, luminous living axon on mobile; lead axon on desktop) */}
      <path
        ref={path1Ref}
        d={paths.p1}
        stroke="url(#spine-gold-grad)"
        strokeWidth={svgWidth < 768 ? 1.8 : 2.6}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter="url(#spine-axon-glow)"
        style={{
          opacity: svgWidth < 768 ? 0.65 : 0.74,
          transition: "none",
        }}
      />

      {/* ── 3. DELICATE SYNAPTIC BOUTONS (Reveal in sync with lead axon) ── */}
      {nodes.map((node) => (
        <g
          key={node.id}
          id={`bouton-${node.id}`}
          style={{
            opacity: 0,
            transform: "scale(0.3)",
            transformOrigin: `${node.x}px ${node.y}px`,
            transition: "opacity 0.15s ease-out, transform 0.15s ease-out",
          }}
        >
          <circle
            cx={node.x}
            cy={node.y}
            r={node.r}
            fill="#C79A45"
            filter="url(#spine-axon-glow)"
          />
          <circle
            cx={node.x}
            cy={node.y}
            r={Math.max(1.5, node.r * 0.45)}
            fill="#FFFFFF"
          />
        </g>
      ))}
    </svg>
  );
};

