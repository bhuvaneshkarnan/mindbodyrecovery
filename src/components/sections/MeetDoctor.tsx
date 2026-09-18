"use client";

import React from "react";
import { clinicData } from "@/data/clinicData";
import { Calendar, ArrowRight } from "lucide-react";
import { BlurReveal, FadeUp } from "@/components/ui/ScrollAnimations";

interface MeetDoctorProps {
  onOpenAssessment: () => void;
}

export const MeetDoctor: React.FC<MeetDoctorProps> = ({ onOpenAssessment }) => {
  return (
    <section id="doctor" className="relative py-20 sm:py-28 lg:py-32 bg-[#F7FED5] text-[#12140D] overflow-hidden border-b border-[#12140D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* 1. Panoramic 4-Panel Photographic Collage Banner (Matching Mockup) */}
        <BlurReveal delay={0.05} className="w-full mb-12 sm:mb-16 lg:mb-20">
          <div className="relative w-full rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-[#12140D]/10 bg-[#12140D] group">
            <img
              src="/assets/doctor/sameer-banner@2x.webp"
              alt="Dr. Sameer - Mind-Body Recovery Specialist"
              width={1602}
              height={884}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-cover select-none transition-transform duration-700 group-hover:scale-[1.01]"
            />

            {/* Interactive Clickable Hotspot on 'Explore my services' Pill Button */}
            <a
              href="#relax"
              className="absolute bottom-[4%] sm:bottom-[5%] left-[2%] sm:left-[3%] w-[28%] sm:w-[25%] md:w-[22%] h-[12%] sm:h-[13%] rounded-full cursor-pointer transition-all duration-300 hover:ring-2 hover:ring-[#12140D]/40 active:scale-95 focus:outline-none"
              aria-label="Explore my services"
            >
              <span className="sr-only">Explore my services</span>
            </a>
          </div>
        </BlurReveal>

        {/* 2. Editorial Profile Narrative (Two-Column Layout Matching Mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-14 sm:mb-20">
          
          {/* Left Column: Meet Sameer Title */}
          <div className="lg:col-span-5">
            <FadeUp delay={0.1}>
              <h2 className="font-serif font-display text-5xl sm:text-6xl lg:text-7xl text-[#12140D] font-normal tracking-tight leading-[1.05]">
                Meet <br />
                Sameer
              </h2>
            </FadeUp>
          </div>

          {/* Right Column: Narrative Biography */}
          <div className="lg:col-span-7 space-y-6">
            <FadeUp delay={0.15}>
              <p className="font-sans text-base sm:text-lg lg:text-xl text-[#12140D]/85 leading-relaxed font-light">
                {clinicData.doctor.bioText}
              </p>

              {/* Action Buttons */}
              <div className="pt-6 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={onOpenAssessment}
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-[#12140D] hover:bg-[#2A2E22] text-[#F7FED5] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95 group"
                >
                  <Calendar size={15} className="text-[#F7FED5] transition-transform duration-300 group-hover:scale-110" />
                  <span>Book Your Assessment</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </button>

                <a
                  href="#relax"
                  className="inline-flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl border border-[#12140D]/25 hover:border-[#12140D]/60 text-[#12140D] text-xs sm:text-sm uppercase tracking-wider font-semibold transition-all duration-300 hover:bg-[#12140D]/5 active:scale-95"
                >
                  <span>Explore Therapies</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </FadeUp>
          </div>

        </div>

        {/* 3. Full-Width Signature Tagline Matching Mockup */}
        <div className="border-t border-[#12140D]/15 pt-10 sm:pt-14">
          <FadeUp delay={0.2}>
            <p className="font-serif font-display italic text-2xl sm:text-3xl lg:text-4xl text-[#12140D] tracking-tight font-light leading-snug">
              &ldquo;{clinicData.doctor.tagline}&rdquo;
            </p>
          </FadeUp>
        </div>

      </div>
    </section>
  );
};
