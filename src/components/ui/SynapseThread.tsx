"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const SynapseThread: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const strokeDashoffset = useTransform(smoothProgress, [0, 1], [3000, 0]);
  const pulseY = useTransform(smoothProgress, [0, 1], ["2%", "98%"]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-10 overflow-hidden hidden lg:block"
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox="0 0 1440 3600"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="synapse-continuous-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C79A45" stopOpacity="0.8" />
            <stop offset="30%" stopColor="#C79A45" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#93A579" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#C79A45" stopOpacity="0.85" />
          </linearGradient>
          <filter id="synapse-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Faint Background Guide Path */}
        <path
          d="M 280 200 C 280 600, 720 900, 720 1300 C 720 1700, 950 2000, 950 2400 C 950 2800, 480 3000, 480 3400"
          stroke="#C79A45"
          strokeWidth="1"
          strokeDasharray="4 6"
          strokeOpacity="0.12"
        />

        {/* Continuous Scroll-Drawn Glowing Path */}
        <motion.path
          d="M 280 200 C 280 600, 720 900, 720 1300 C 720 1700, 950 2000, 950 2400 C 950 2800, 480 3000, 480 3400"
          stroke="url(#synapse-continuous-grad)"
          strokeWidth="2"
          strokeDasharray="3000"
          style={{ strokeDashoffset }}
          filter="url(#synapse-glow)"
          strokeLinecap="round"
        />
      </svg>

      {/* Traveling Pulsing Light Spark along Drawn Portion */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[#C79A45] synapse-pulse-dot"
        style={{
          top: pulseY,
        }}
      />
    </div>
  );
};
