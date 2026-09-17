"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionNeuralWebProps {
  variant?: "top-center" | "top-left" | "top-right" | "between-content";
  className?: string;
  theme?: "dark" | "light";
}

export const SectionNeuralWeb: React.FC<SectionNeuralWebProps> = ({
  variant = "top-center",
  className = "",
  theme = "light",
}) => {
  const isDark = theme === "dark";
  const goldColor = "#C79A45";
  const sageColor = isDark ? "#93A579" : "#8C5B41";
  const lineColor = isDark ? "rgba(199, 154, 69, 0.45)" : "rgba(199, 154, 69, 0.35)";
  const sparkColor = "#FFFFFF";

  if (variant === "top-center") {
    return (
      <div className={`w-full max-w-lg mx-auto h-16 pointer-events-none relative overflow-visible -mb-2 ${className}`}>
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 400 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main central spider-web anchor line dropping onto the title */}
          <motion.path
            d="M 200 0 C 200 20, 200 40, 200 58"
            stroke={goldColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />

          {/* Left spider-web filament branches */}
          <motion.path
            d="M 200 20 C 170 15, 120 25, 80 45 C 60 55, 45 58, 30 60"
            stroke={lineColor}
            strokeWidth="1"
            strokeDasharray="3 3"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          />
          <motion.path
            d="M 200 35 C 160 30, 130 45, 100 58"
            stroke={lineColor}
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />

          {/* Right spider-web filament branches */}
          <motion.path
            d="M 200 20 C 230 15, 280 25, 320 45 C 340 55, 355 58, 370 60"
            stroke={lineColor}
            strokeWidth="1"
            strokeDasharray="3 3"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          />
          <motion.path
            d="M 200 35 C 240 30, 270 45, 300 58"
            stroke={lineColor}
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />

          {/* Concentric spider-web connecting web arcs */}
          <motion.path
            d="M 120 28 Q 200 40, 280 28"
            stroke={lineColor}
            strokeWidth="0.8"
            strokeDasharray="2 3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.path
            d="M 70 47 Q 200 65, 330 47"
            stroke={lineColor}
            strokeWidth="0.8"
            strokeDasharray="2 3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          />

          {/* Anchor Bouton Nodes on the Title Border */}
          <circle cx="200" cy="58" r="3.5" fill={goldColor} className="drop-shadow-[0_0_6px_rgba(199,154,69,0.8)]" />
          <circle cx="200" cy="58" r="1.5" fill={sparkColor} />

          <circle cx="100" cy="58" r="2.5" fill={sageColor} />
          <circle cx="300" cy="58" r="2.5" fill={sageColor} />
          <circle cx="30" cy="60" r="2" fill={goldColor} opacity="0.6" />
          <circle cx="370" cy="60" r="2" fill={goldColor} opacity="0.6" />
        </svg>
      </div>
    );
  }

  if (variant === "top-left") {
    return (
      <div className={`w-full max-w-sm h-14 pointer-events-none relative overflow-visible -mb-1 ${className}`}>
        <svg
          className="w-full h-full overflow-visible"
          viewBox="0 0 300 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Main Anchor Filament */}
          <motion.path
            d="M 40 0 C 40 20, 50 35, 60 48"
            stroke={goldColor}
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
          {/* Lateral Spreading Web Filaments */}
          <motion.path
            d="M 40 15 C 80 12, 140 25, 190 38 C 230 46, 260 48, 280 50"
            stroke={lineColor}
            strokeWidth="1"
            strokeDasharray="3 3"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.8 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
          />
          <motion.path
            d="M 45 28 C 90 25, 130 38, 160 48"
            stroke={lineColor}
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.9 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          />
          {/* Web Arch */}
          <motion.path
            d="M 40 18 Q 110 32, 180 36"
            stroke={lineColor}
            strokeWidth="0.8"
            strokeDasharray="2 3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />

          {/* Anchor Nodes on Title */}
          <circle cx="60" cy="48" r="3.5" fill={goldColor} className="drop-shadow-[0_0_6px_rgba(199,154,69,0.8)]" />
          <circle cx="60" cy="48" r="1.5" fill={sparkColor} />
          <circle cx="160" cy="48" r="2.5" fill={sageColor} />
          <circle cx="280" cy="50" r="2" fill={goldColor} opacity="0.6" />
        </svg>
      </div>
    );
  }

  return null;
};
