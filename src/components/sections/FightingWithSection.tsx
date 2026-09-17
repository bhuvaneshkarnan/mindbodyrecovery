"use client";

import React from "react";
import { clinicData } from "@/data/clinicData";
import { FadeUp, ClipReveal } from "@/components/ui/ScrollAnimations";

export const FightingWithSection: React.FC = () => {
  return (
    <section className="relative py-28 bg-[#FAFAFA] text-[#231F19] overflow-hidden border-b border-[#E5E7EB]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center space-y-6">
        
        <FadeUp>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#231F19] font-semibold tracking-tight">
            {clinicData.mindfulReflection.headline}
          </h2>
        </FadeUp>

        {/* Explicit Sourced Placeholder Notice */}
        <ClipReveal direction="up" delay={0.15}>
          <div className="p-8 rounded-xl bg-[#FFFFFF] border border-[#231F19]/20">
            <p className="font-sans text-sm sm:text-base text-[#231F19]/70 italic leading-relaxed">
              {clinicData.mindfulReflection.placeholderNotice}
            </p>
          </div>
        </ClipReveal>

      </div>
    </section>
  );
};
