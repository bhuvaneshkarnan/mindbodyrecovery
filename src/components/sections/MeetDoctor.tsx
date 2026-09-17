"use client";

import React from "react";
import { motion } from "framer-motion";
import { clinicData } from "@/data/clinicData";
import { BandageFrame } from "@/components/ui/BandageFrame";
import { Calendar } from "lucide-react";
import { ClipReveal, FadeUp, StaggerReveal } from "@/components/ui/ScrollAnimations";

interface MeetDoctorProps {
  onOpenAssessment: () => void;
}

export const MeetDoctor: React.FC<MeetDoctorProps> = ({ onOpenAssessment }) => {
  return (
    <section id="doctor" className="relative py-32 bg-[#FAFAFA] text-[#231F19] overflow-hidden border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Column: Portrait & Sourced Quote (5 cols) */}
          <ClipReveal direction="left" delay={0.1} className="lg:col-span-5 flex flex-col items-center lg:items-start relative z-20">
            <BandageFrame
              variant="light"
              tapeAngle={3.5}
              tapePosition="top-left-bottom-right"
              className="w-full max-w-md"
              innerClassName="p-3 bg-white border border-[#C79A45]/60 shadow-lg"
              caption="Dr. Sameer — Founder & Lead Practitioner"
            >
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-white shadow-inner flex items-center justify-center">
                <img
                  src={clinicData.doctor.portrait}
                  alt={clinicData.doctor.name}
                  className="max-w-full max-h-full object-contain filter saturate-95 contrast-105"
                />
              </div>
            </BandageFrame>
          </ClipReveal>

          {/* Right Column: Sourced Narrative Bio (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 relative z-20"
          >
            <div>
              <h2 className="font-display text-4xl sm:text-5xl text-[#231F19] font-semibold tracking-tight mb-2">
                {clinicData.doctor.name}
              </h2>
              <span className="text-xs uppercase tracking-widest text-[#8C5B41] font-semibold block">
                {clinicData.doctor.title}
              </span>
            </div>

            {/* Sourced Bio Paragraphs */}
            <div className="space-y-4 text-base sm:text-lg text-[#231F19]/85 font-sans leading-relaxed">
              {clinicData.doctor.bio.map((paragraph, i) => (
                <p key={i}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* CTA in Gold */}
            <div className="pt-4">
              <button
                onClick={onOpenAssessment}
                className="px-8 py-4 bg-[#C79A45] hover:bg-[#D4A752] text-[#12140D] font-semibold text-xs uppercase tracking-widest rounded-lg transition-all duration-300 flex items-center space-x-2.5 shadow-md active:scale-95"
              >
                <Calendar size={16} />
                <span>Book Your Assessment</span>
              </button>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
