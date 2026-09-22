"use client";

import React from "react";
import { clinicData } from "@/data/clinicData";
import { Users, Award, Heart } from "lucide-react";
import { ZoomReveal, SlideIn, FadeUp, BlurReveal } from "@/components/ui/ScrollAnimations";
import { BandageFrame } from "@/components/ui/BandageFrame";

export const ProofStats: React.FC = () => {
  return (
    <section id="about" className="relative py-28 bg-[#12140D] text-[#F6F1E4] border-b border-[#F6F1E4]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Top Header Split: Headline & Narrative (No Quotes) */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-8 border-b border-[#F6F1E4]/10">
          <SlideIn from="left" className="max-w-2xl relative">
            <BlurReveal delay={0.05}>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#F6F1E4] font-semibold tracking-tight leading-[1.08]">
                {clinicData.proofStats.headline}
              </h2>
            </BlurReveal>
          </SlideIn>

          <SlideIn from="right" delay={0.15} className="max-w-md">
            <p className="text-sm sm:text-base text-[#F6F1E4]/80 font-sans leading-relaxed">
              {clinicData.proofStats.subhead}
            </p>
          </SlideIn>
        </div>

        {/* Central Panoramic Team Photo — ZoomReveal on scroll enter with authentic medical bandages */}
        <FadeUp className="relative mb-6">
          <BandageFrame
            variant="gold"
            tapePosition="top-left-bottom-right"
            className="w-full shadow-2xl block"
            innerClassName="border border-[#C79A45]/40 overflow-hidden rounded-xl bg-[#12140D]"
          >
            <ZoomReveal>
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#12140D]">
                <img
                  src={clinicData.proofStats.teamPhoto}
                  alt="Mind Body Recovery Team"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover filter saturate-90 contrast-110"
                />
              </div>
            </ZoomReveal>
          </BandageFrame>
        </FadeUp>

        {/* Biological Neural Synapse Connector (From Team Photo to 3 Stats) - Desktop */}
        <div className="relative w-full h-12 hidden md:block overflow-visible pointer-events-none">
          <svg className="w-full h-12 overflow-visible" viewBox="0 0 1200 48" fill="none">
            <defs>
              <linearGradient id="proof-neuron-grad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#C79A45" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#93A579" stopOpacity="0.7" />
              </linearGradient>
              <filter id="proof-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="2" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Axon 1 (To Stat 1) */}
            <path
              d="M 600 0 C 600 20, 200 10, 200 48"
              stroke="url(#proof-neuron-grad)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#proof-glow)"
            />
            {/* Axon 2 (To Stat 2) */}
            <path
              d="M 600 0 C 600 24, 600 28, 600 48"
              stroke="url(#proof-neuron-grad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#proof-glow)"
            />
            {/* Axon 3 (To Stat 3) */}
            <path
              d="M 600 0 C 600 20, 1000 10, 1000 48"
              stroke="url(#proof-neuron-grad)"
              strokeWidth="2"
              strokeLinecap="round"
              filter="url(#proof-glow)"
            />

            {/* Synaptic Terminal Boutons */}
            <circle cx="200" cy="48" r="4" fill="#C79A45" />
            <circle cx="600" cy="48" r="4" fill="#C79A45" />
            <circle cx="1000" cy="48" r="4" fill="#C79A45" />

            {/* Animated Action Potential Firing Pulses */}
            <circle r="3" fill="#FFFFFF" filter="url(#proof-glow)">
              <animateMotion
                dur="2.2s"
                repeatCount="indefinite"
                path="M 600 0 C 600 20, 200 10, 200 48"
              />
            </circle>
            <circle r="3.5" fill="#FFFFFF" filter="url(#proof-glow)">
              <animateMotion
                dur="1.8s"
                repeatCount="indefinite"
                path="M 600 0 C 600 24, 600 28, 600 48"
              />
            </circle>
            <circle r="3" fill="#FFFFFF" filter="url(#proof-glow)">
              <animateMotion
                dur="2.4s"
                repeatCount="indefinite"
                path="M 600 0 C 600 20, 1000 10, 1000 48"
              />
            </circle>
          </svg>
        </div>

        {/* Biological Neural Synapse Connector (From Team Photo to Stats) - Mobile */}
        <div className="relative w-full h-10 md:hidden overflow-visible pointer-events-none mb-4 -mt-6">
          <svg className="w-full h-10 overflow-visible" viewBox="0 0 360 40" fill="none">
            {/* Center descending wavy axon */}
            <path
              d="M 180 0 C 180 12, 180 28, 180 40"
              stroke="url(#proof-neuron-grad)"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#proof-glow)"
            />
            {/* Fine dendritic branch left */}
            <path
              d="M 180 18 C 160 20, 135 15, 110 24"
              stroke="#C79A45"
              strokeWidth="1.2"
              strokeOpacity="0.6"
              strokeLinecap="round"
            />
            {/* Fine dendritic branch right */}
            <path
              d="M 180 18 C 200 20, 225 15, 250 24"
              stroke="#C79A45"
              strokeWidth="1.2"
              strokeOpacity="0.6"
              strokeLinecap="round"
            />

            {/* Synaptic Terminal Bouton */}
            <circle cx="180" cy="40" r="4" fill="#C79A45" filter="url(#proof-glow)" />
            <circle cx="180" cy="40" r="2" fill="#FFFFFF" />

            {/* Action potential firing pulse */}
            <circle r="3" fill="#FFFFFF" filter="url(#proof-glow)">
              <animateMotion
                dur="1.6s"
                repeatCount="indefinite"
                path="M 180 0 C 180 12, 180 28, 180 40"
              />
            </circle>
          </svg>
        </div>

        {/* 3 Metric Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
          {/* Mobile Vertical Neural Filament Linking the 3 Stacked Cards */}
          <div className="absolute top-6 bottom-6 left-1/2 -translate-x-1/2 w-4 md:hidden pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 16 400" preserveAspectRatio="none" fill="none">
              <path
                d="M 8 0 C 14 60, 2 120, 8 180 C 14 240, 2 300, 8 400"
                stroke="url(#proof-neuron-grad)"
                strokeWidth="2"
                strokeDasharray="4 3"
                vectorEffect="non-scaling-stroke"
                strokeOpacity="0.6"
              />
              <circle r="2.5" fill="#FFFFFF">
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  path="M 8 0 C 14 60, 2 120, 8 180 C 14 240, 2 300, 8 400"
                />
              </circle>
            </svg>
          </div>
          {clinicData.proofStats.stats.map((stat, idx) => (
            <BlurReveal
              key={stat.label}
              delay={idx * 0.12}
              blur={14}
              y={24}
              className="p-6 bg-[#1B1E15] rounded-lg border-l-2 border-[#C79A45] border-t border-r border-b border-[#F6F1E4]/15 flex items-center justify-between group hover:bg-[#1B1E15]/80 transition-colors shadow-lg"
            >
              <div>
                <span className="font-display text-4xl sm:text-5xl text-[#C79A45] font-semibold tracking-tight block mb-1">
                  {stat.value}
                </span>
                <h3 className="font-display text-lg text-[#F6F1E4] font-medium">
                  {stat.label}
                </h3>
                <p className="text-xs text-[#F6F1E4]/70 font-sans">
                  {stat.sublabel}
                </p>
              </div>

              <div className="w-10 h-10 rounded-full bg-[#12140D] border border-[#F6F1E4]/20 flex items-center justify-center text-[#C79A45] shrink-0">
                {idx === 0 ? <Users size={18} /> : idx === 1 ? <Award size={18} /> : <Heart size={18} />}
              </div>
            </BlurReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
