"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export const GrowingNeuronSpine: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    restDelta: 0.001,
  });

  // Track viewport width for responsive SVG path scaling
  const [docHeight, setDocHeight] = useState(10000);

  useEffect(() => {
    const updateHeight = () => {
      if (typeof document !== "undefined") {
        setDocHeight(document.documentElement.scrollHeight || 10000);
      }
    };
    updateHeight();
    window.addEventListener("resize", updateHeight);
    const timer = setTimeout(updateHeight, 1500); // Re-measure after images load
    return () => {
      window.removeEventListener("resize", updateHeight);
      clearTimeout(timer);
    };
  }, []);

  // Main continuous neural trunk path weaving from Hero down to Contact
  // Designed in a 1440px wide coordinate system spanning full height
  const mainNeuronPath = `
    M 720 350
    C 720 600, 380 750, 320 1050
    C 280 1250, 680 1450, 720 1750
    C 760 2050, 1080 2200, 1100 2500
    C 1120 2800, 360 3100, 340 3400
    C 320 3700, 720 3950, 720 4300
    C 720 4650, 1120 4900, 1100 5300
    C 1080 5700, 360 5950, 340 6350
    C 320 6750, 720 7050, 720 7450
    C 720 7850, 1080 8150, 1080 8550
    C 1080 8950, 480 9250, 520 9650
    C 540 9850, 720 10050, 720 10400
  `;

  return (
    <div
      className="absolute inset-0 w-full pointer-events-none overflow-hidden z-10"
      style={{ height: docHeight }}
      aria-hidden="true"
    >
      <svg
        className="w-full h-full"
        viewBox={`0 0 1440 ${docHeight}`}
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Main Growing Neural Axon Gradient */}
          <linearGradient id="growing-neuron-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C79A45" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#93A579" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#C79A45" stopOpacity="0.95" />
            <stop offset="75%" stopColor="#8C5B41" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#C79A45" stopOpacity="1" />
          </linearGradient>

          {/* Faint Path Gradient */}
          <linearGradient id="faint-neuron-grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#C79A45" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#93A579" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#C79A45" stopOpacity="0.1" />
          </linearGradient>

          {/* Intense Neural Glow Filter */}
          <filter id="neuron-growth-glow" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Action Potential Spark Halo */}
          <radialGradient id="spark-halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="40%" stopColor="#C79A45" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#C79A45" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 1. FAINT UNGROWN NEURAL PATHWAY GUIDE */}
        <path
          d={mainNeuronPath}
          stroke="url(#faint-neuron-grad)"
          strokeWidth="2"
          strokeDasharray="6 8"
          strokeLinecap="round"
        />

        {/* 2. DYNAMICALLY GROWING GLOWING NEURAL AXON */}
        <motion.path
          d={mainNeuronPath}
          stroke="url(#growing-neuron-grad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#neuron-growth-glow)"
          style={{
            pathLength: smoothProgress,
          }}
        />

        {/* Inner Core Bright Filament */}
        <motion.path
          d={mainNeuronPath}
          stroke="#FFFFFF"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeOpacity="0.75"
          style={{
            pathLength: smoothProgress,
          }}
        />

        {/* 3. SECTION-BY-SECTION POINTING DENDRITIC BRANCHES */}
        
        {/* Branch 1: Pointing to Stories Header */}
        <g className="opacity-70">
          <path
            d="M 320 1050 C 260 1020, 200 1040, 150 1030"
            stroke="#C79A45"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          <circle cx="150" cy="1030" r="4" fill="#C79A45" filter="url(#neuron-growth-glow)" />
          <circle cx="150" cy="1030" r="1.5" fill="#FFFFFF" />
        </g>

        {/* Branch 2: Pointing to Team Proof Stats */}
        <g className="opacity-70">
          <path
            d="M 720 1750 C 820 1720, 940 1750, 1020 1730"
            stroke="#C79A45"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          <circle cx="1020" cy="1730" r="4" fill="#C79A45" filter="url(#neuron-growth-glow)" />
          <circle cx="1020" cy="1730" r="1.5" fill="#FFFFFF" />
        </g>

        {/* Branch 3: Pointing to Purpose Teaching Academy */}
        <g className="opacity-70">
          <path
            d="M 1100 2500 C 1180 2480, 1260 2520, 1320 2500"
            stroke="#C79A45"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          <circle cx="1320" cy="2500" r="4" fill="#C79A45" filter="url(#neuron-growth-glow)" />
          <circle cx="1320" cy="2500" r="1.5" fill="#FFFFFF" />
        </g>

        {/* Branch 4: Pointing to Step 01 Relax Center */}
        <g className="opacity-70">
          <path
            d="M 340 3400 C 440 3380, 560 3410, 640 3390"
            stroke="#C79A45"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          <circle cx="640" cy="3390" r="4" fill="#C79A45" filter="url(#neuron-growth-glow)" />
          <circle cx="640" cy="3390" r="1.5" fill="#FFFFFF" />
        </g>

        {/* Branch 5: Pointing to Step 02 Rethink Center */}
        <g className="opacity-70">
          <path
            d="M 720 4300 C 820 4270, 940 4310, 1020 4290"
            stroke="#C79A45"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          <circle cx="1020" cy="4290" r="4" fill="#C79A45" filter="url(#neuron-growth-glow)" />
          <circle cx="1020" cy="4290" r="1.5" fill="#FFFFFF" />
        </g>

        {/* Branch 6: Pointing to Concern Cards */}
        <g className="opacity-70">
          <path
            d="M 1100 5300 C 1000 5270, 880 5310, 800 5290"
            stroke="#C79A45"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          <circle cx="800" cy="5290" r="4" fill="#C79A45" filter="url(#neuron-growth-glow)" />
          <circle cx="800" cy="5290" r="1.5" fill="#FFFFFF" />
        </g>

        {/* Branch 7: Pointing to Step 03 Rebuild Retreat */}
        <g className="opacity-70">
          <path
            d="M 340 6350 C 440 6320, 560 6360, 640 6340"
            stroke="#C79A45"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          <circle cx="640" cy="6340" r="4" fill="#C79A45" filter="url(#neuron-growth-glow)" />
          <circle cx="640" cy="6340" r="1.5" fill="#FFFFFF" />
        </g>

        {/* Branch 8: Pointing to Meet Doctor Sameer */}
        <g className="opacity-70">
          <path
            d="M 720 7450 C 600 7420, 480 7460, 380 7440"
            stroke="#C79A45"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          <circle cx="380" cy="7440" r="4" fill="#C79A45" filter="url(#neuron-growth-glow)" />
          <circle cx="380" cy="7440" r="1.5" fill="#FFFFFF" />
        </g>

        {/* Branch 9: Pointing to Contact Intake Booking Form */}
        <g className="opacity-70">
          <path
            d="M 1080 8550 C 960 8520, 840 8560, 740 8540"
            stroke="#C79A45"
            strokeWidth="2"
            strokeDasharray="4 4"
            strokeLinecap="round"
          />
          <circle cx="740" cy="8540" r="5" fill="#C79A45" filter="url(#neuron-growth-glow)" />
          <circle cx="740" cy="8540" r="2" fill="#FFFFFF" />
        </g>
      </svg>
    </div>
  );
};
