"use client";

import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";

const MILESTONES = [
  { id: "hero",     label: "00 · Begin Journey",        short: "Begin"     },
  { id: "stories",  label: "Social Proof · Real Story",  short: "Stories"   },
  { id: "about",    label: "30+ Therapists · Team",      short: "Team"      },
  { id: "purpose",  label: "Teaching Academy · Purpose", short: "Purpose"   },
  { id: "relax",    label: "01 · Relax (Shirodhara)",    short: "Relax"     },
  { id: "rethink",  label: "02 · Rethink (Somatic)",     short: "Rethink"   },
  { id: "concerns", label: "Mind & Body Concerns",       short: "Concerns"  },
  { id: "rebuild",  label: "03 · Rebuild (2-Day Reset)", short: "Rebuild"   },
  { id: "doctor",   label: "Sameer · Founder & Practitioner",   short: "Sameer"},
  { id: "contact",  label: "Begin Consultation",         short: "Inquire"   },
];

export const ScrollNeuronSpine: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 22, restDelta: 0.001 });

  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const threshold = window.scrollY + window.innerHeight * 0.45;
      let best = 0;
      MILESTONES.forEach((m, i) => {
        const el = m.id === "hero"
          ? document.body
          : document.getElementById(m.id);
        if (el && (el as HTMLElement).offsetTop <= threshold) best = i;
      });
      setActiveIdx(best);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll progress mapped from 0% to 100%
  const filledHeight = useTransform(smooth, [0, 1], ["0%", "100%"]);

  const currentMilestone = MILESTONES[activeIdx] || MILESTONES[0];

  return (
    <div
      className="fixed right-0 top-0 bottom-0 z-50 hidden md:flex flex-col items-center justify-center pointer-events-none"
      style={{ width: 44 }}
      aria-label="Section by section neuron scroll navigator"
    >
      {/* Background Track with Organic ECG Synaptic Spine */}
      <div className="relative h-[82vh] w-[3px] my-auto">
        {/* Faint Spine Track */}
        <div
          className="absolute inset-0 w-full rounded-full"
          style={{
            background: "linear-gradient(to bottom, rgba(199,154,69,0.15), rgba(147,165,121,0.15), rgba(199,154,69,0.15))",
          }}
        />

        {/* Scroll-Drawn Glowing Axon Line */}
        <motion.div
          className="absolute top-0 left-0 w-full rounded-full origin-top"
          style={{
            height: filledHeight,
            background: "linear-gradient(to bottom, #C79A45, #93A579, #C79A45)",
            boxShadow: "0 0 10px 2px rgba(199,154,69,0.7), 0 0 20px 4px rgba(199,154,69,0.3)",
          }}
        />

        {/* Milestone Node Dots Along Track */}
        {MILESTONES.map((m, i) => {
          const pct = i / (MILESTONES.length - 1);
          const isActive = i <= activeIdx;
          const isCurrent = i === activeIdx;

          return (
            <a
              key={m.id}
              href={m.id === "hero" ? "#hero" : `#${m.id}`}
              className="group absolute pointer-events-auto"
              style={{
                top: `${pct * 100}%`,
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 24,
                height: 24,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label={m.label}
            >
              {/* Outer Synaptic Bouton Ring */}
              <div
                className="transition-all duration-300 rounded-full flex items-center justify-center"
                style={{
                  width: isCurrent ? 14 : 8,
                  height: isCurrent ? 14 : 8,
                  background: isCurrent
                    ? "#C79A45"
                    : isActive
                    ? "rgba(199,154,69,0.7)"
                    : "rgba(255,255,255,0.2)",
                  boxShadow: isCurrent
                    ? "0 0 12px 3px rgba(199,154,69,0.85), 0 0 0 2px rgba(255,255,255,0.4)"
                    : "none",
                }}
              >
                {/* Core White Spark */}
                {isCurrent && (
                  <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                )}
              </div>

              {/* Hover Tooltip Label */}
              <div
                className="absolute right-7 top-1/2 -translate-y-1/2 
                            px-2.5 py-1 rounded-lg bg-[#12140D]/95 border border-[#C79A45]/40
                            text-[#F6F1E4] text-[11px] font-sans font-medium whitespace-nowrap
                            opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-xl pointer-events-none flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#C79A45]" />
                {m.label}
              </div>
            </a>
          );
        })}

        {/* --- TRAVELLING NEURON SOMA & POINTING SYNAPSE HEAD --- */}
        <motion.div
          className="absolute left-1/2 pointer-events-none"
          style={{
            top: filledHeight,
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Glowing Synaptic Soma Body */}
          <div className="relative flex items-center justify-center">
            {/* Pulsing Radial Halo */}
            <div className="absolute w-8 h-8 rounded-full bg-[#C79A45]/30 animate-ping" />
            <div className="absolute w-6 h-6 rounded-full bg-[#C79A45]/40 blur-sm" />

            {/* Neuron Core */}
            <div className="relative w-4 h-4 rounded-full bg-gradient-to-tr from-[#C79A45] to-[#FFFFFF] shadow-[0_0_12px_4px_#C79A45] border border-white/60 flex items-center justify-center">
              <div className="w-1.5 h-1.5 rounded-full bg-[#12140D]" />
            </div>

            {/* --- POINTING SYNAPTIC CONNECTOR & ECG WAVE (Points to active section on left) --- */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
              {/* Mini ECG Pulse Wave pointing left */}
              <svg width="36" height="20" viewBox="0 0 36 20" fill="none" className="overflow-visible">
                <path
                  d="M 36 10 L 26 10 L 22 2 L 16 18 L 12 6 L 8 12 L 0 10"
                  stroke="#C79A45"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="filter drop-shadow-[0_0_6px_rgba(199,154,69,0.9)]"
                />
                <circle cx="0" cy="10" r="3" fill="#FFFFFF" className="filter drop-shadow-[0_0_4px_#C79A45]" />
              </svg>

              {/* Live Active Section Pointer Badge */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentMilestone.id}
                  initial={{ opacity: 0, x: 8, scale: 0.95 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -8, scale: 0.95 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="mr-2 px-3 py-1.5 rounded-xl bg-[#12140D]/95 backdrop-blur-md border border-[#C79A45]/60 text-[#F6F1E4] shadow-[0_4px_20px_rgba(0,0,0,0.7)] whitespace-nowrap flex items-center gap-2"
                >
                  <span className="w-2 h-2 rounded-full bg-[#C79A45] animate-pulse" />
                  <span className="text-xs font-display font-semibold tracking-tight text-[#F6F1E4]">
                    {currentMilestone.label}
                  </span>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
