"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";

interface NeuronHeadingConnectorProps {
  headingId: string;
  somaId: string;
  variant?: "dark" | "light";
  className?: string;
  amplitude?: number;
  cycles?: number;
}

export const NeuronHeadingConnector: React.FC<NeuronHeadingConnectorProps> = ({
  headingId,
  somaId,
  variant = "dark",
  className = "",
  amplitude = 22,
  cycles = 3,
}) => {
  const containerRef = useRef<SVGSVGElement>(null);
  const [pathData, setPathData] = useState<{
    d: string;
    xStart: number;
    yStart: number;
    xEnd: number;
    yEnd: number;
  } | null>(null);

  const isDark = variant === "dark";
  const mainColor = "#C79A45";
  const secondaryColor = isDark ? "#93A579" : "#8C5B41";
  const sparkColor = "#FFFFFF";

  const calculateWave = useCallback(() => {
    if (!containerRef.current || typeof document === "undefined") return;

    // Disable on mobile/tablet viewports (< 768px):
    // In mobile single-column layout, heading, paragraph, CTA button, and photo are stacked vertically.
    // Drawing an axon between heading and photo slices directly through the CTA button and text.
    if (window.innerWidth < 768) {
      setPathData(null);
      return;
    }

    const headingEl = document.getElementById(headingId);
    const somaEl = document.getElementById(somaId);

    if (!headingEl || !somaEl) return;

    const svgRect = containerRef.current.getBoundingClientRect();
    const headRect = headingEl.getBoundingClientRect();
    const somaRect = somaEl.getBoundingClientRect();

    // End point: right at the heading node
    const xEnd = headRect.left + headRect.width / 2 - svgRect.left;
    const yEnd = headRect.top + headRect.height / 2 - svgRect.top;

    // Start point: from the central neuron soma / photo card
    const xStart = somaRect.left + somaRect.width / 2 - svgRect.left;
    const yStart = somaRect.top + somaRect.height / 2 - svgRect.top;

    const dx = xEnd - xStart;
    const dy = yEnd - yStart;
    const len = Math.hypot(dx, dy);

    if (len < 20) return;

    const isMobile = window.innerWidth < 768;
    const effAmplitude = isMobile ? Math.min(amplitude, 14) : amplitude;

    const ux = dx / len;
    const uy = dy / len;
    // Perpendicular vector for wave oscillation
    const px = -uy;
    const py = ux;

    const numHalfCycles = Math.max(2, cycles * 2);
    const segLen = len / numHalfCycles;

    let d = `M ${Math.round(xStart)} ${Math.round(yStart)}`;

    for (let i = 0; i < numHalfCycles; i++) {
      const sign = i % 2 === 0 ? 1 : -1;
      const startDist = i * segLen;
      const endDist = (i + 1) * segLen;

      // Cubic Bezier control points along wavy path
      const cp1Dist = startDist + segLen * 0.36;
      const cp1Offset = sign * effAmplitude;
      const cp1x = xStart + ux * cp1Dist + px * cp1Offset;
      const cp1y = yStart + uy * cp1Dist + py * cp1Offset;

      const cp2Dist = endDist - segLen * 0.36;
      const cp2Offset = sign * effAmplitude;
      const cp2x = xStart + ux * cp2Dist + px * cp2Offset;
      const cp2y = yStart + uy * cp2Dist + py * cp2Offset;

      const segEndX = xStart + ux * endDist;
      const segEndY = yStart + uy * endDist;

      d += ` C ${Math.round(cp1x)} ${Math.round(cp1y)}, ${Math.round(cp2x)} ${Math.round(cp2y)}, ${Math.round(segEndX)} ${Math.round(segEndY)}`;
    }

    setPathData({ d, xStart, yStart, xEnd, yEnd });
  }, [headingId, somaId, amplitude, cycles]);

  useEffect(() => {
    calculateWave();

    const handleResize = () => calculateWave();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleResize, { passive: true });

    let observer: ResizeObserver | null = null;
    if (typeof ResizeObserver !== "undefined" && containerRef.current?.parentElement) {
      observer = new ResizeObserver(() => calculateWave());
      observer.observe(containerRef.current.parentElement);
    }

    // Small delay to recalculate after layout animations settle
    const timer = setTimeout(calculateWave, 350);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleResize);
      if (observer) observer.disconnect();
      clearTimeout(timer);
    };
  }, [calculateWave]);

  if (!pathData) {
    return (
      <svg
        ref={containerRef}
        className={`absolute inset-0 w-full h-full pointer-events-none z-10 ${className}`}
        aria-hidden="true"
      />
    );
  }

  const gradId = `heading-wave-grad-${headingId}-${variant}`;
  const glowId = `heading-wave-glow-${headingId}-${variant}`;

  return (
    <svg
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-10 transition-opacity duration-500 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={secondaryColor} stopOpacity="0.8" />
          <stop offset="50%" stopColor={mainColor} stopOpacity="1" />
          <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.8" />
        </linearGradient>

        <filter id={glowId} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation={isDark ? "3" : "2"} result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Main Curly Wave Axon connecting Center Neuron Soma to Heading */}
      <path
        d={pathData.d}
        stroke={`url(#${gradId})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        filter={`url(#${glowId})`}
      />

      {/* Lighter core line for bioluminescent energy aesthetic */}
      <path
        d={pathData.d}
        stroke={sparkColor}
        strokeWidth="1"
        strokeOpacity={isDark ? "0.6" : "0.4"}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Animated Action Potential Spark travelling along wave into Heading */}
      <circle r="3.5" fill={sparkColor} filter={`url(#${glowId})`}>
        <animateMotion
          dur="2.8s"
          repeatCount="indefinite"
          path={pathData.d}
        />
      </circle>

      {/* Synaptic Terminal Bouton at Heading Anchor */}
      <circle
        cx={pathData.xEnd}
        cy={pathData.yEnd}
        r="6"
        fill={mainColor}
        filter={`url(#${glowId})`}
      />
      <circle cx={pathData.xEnd} cy={pathData.yEnd} r="2.5" fill="#FFFFFF" />
    </svg>
  );
};
