"use client";

import React from "react";
import { clinicData } from "@/data/clinicData";
import { BandageFrame } from "@/components/ui/BandageFrame";
import { Calendar } from "lucide-react";
import { FadeUp, BlurReveal, SlideIn } from "@/components/ui/ScrollAnimations";

interface MeetDoctorProps {
  onOpenAssessment: () => void;
}

export const MeetDoctor: React.FC<MeetDoctorProps> = ({ onOpenAssessment }) => {
  return (
    <section id="doctor" className="relative py-32 bg-[#FAFAFA] text-[#231F19] overflow-hidden border-b border-[#E5E7EB]">
      <div id="about-sameer" className="absolute -top-24 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Portrait & Sourced Quote (5 cols) */}
          <FadeUp delay={0.1} className="lg:col-span-5 flex flex-col items-center lg:items-start relative z-20">
            <BandageFrame
              variant="gold"
              tapePosition="top-left-bottom-right"
              className="w-full max-w-md"
              innerClassName="p-1.5 bg-white border border-[#C79A45]/80 rounded-2xl shadow-2xl"
            >
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full overflow-hidden rounded-xl bg-[#1A1F16]">
                <img
                  src={clinicData.doctor.portrait}
                  alt={clinicData.doctor.name}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-[50%_15%] filter saturate-95 contrast-105"
                />
              </div>
            </BandageFrame>
          </FadeUp>

          {/* Right Column: Sourced Narrative Bio (7 cols) */}
          <SlideIn
            from="right"
            delay={0.15}
            className="lg:col-span-7 space-y-6 relative z-20"
          >
            <BlurReveal delay={0.1}>
              <h2 className="font-display text-4xl sm:text-5xl text-[#231F19] font-semibold tracking-tight leading-tight">
                Meet the Founder
              </h2>

              {/* Curly Script Name with Clean & Minimal Underline */}
              <div className="inline-flex flex-col items-start mt-1 sm:mt-2 mb-2">
                <span className="font-script text-5xl sm:text-6xl text-[#C79A45] font-bold tracking-wide select-none leading-none">
                  Sameer
                </span>
                <svg
                  className="w-36 sm:w-44 h-2.5 text-[#C79A45]/80 overflow-visible mt-1"
                  viewBox="0 0 100 8"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M 2 5 C 28 1.5, 68 2, 98 5"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </BlurReveal>

            {/* Concise Impactful Description */}
            <div className="max-w-lg pt-1">
              <p className="font-serif italic text-xl sm:text-2xl text-[#231F19]/90 font-light leading-relaxed">
                &ldquo;Where tired bodies and overloaded minds come to recover.&rdquo;
              </p>
            </div>

            {/* CTA in Gold */}
            <div className="pt-4">
              <button
                onClick={onOpenAssessment}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#C79A45] hover:bg-[#D4A752] text-[#12140D] font-semibold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md active:scale-95 group"
              >
                <Calendar size={15} className="transition-transform duration-300 group-hover:scale-110" />
                <span>Book Your Assessment</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
              </button>
            </div>
          </SlideIn>

        </div>

      </div>
    </section>
  );
};
