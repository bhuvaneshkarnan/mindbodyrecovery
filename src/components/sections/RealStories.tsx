"use client";

import React from "react";
import { motion } from "framer-motion";
import { clinicData } from "@/data/clinicData";
import { FadeUp, ZoomReveal } from "@/components/ui/ScrollAnimations";

const YOUTUBE_SHORTS_ID = "Sye2NYdx6rk";

export const RealStories: React.FC = () => {
  return (
    <section
      id="stories"
      className="relative py-24 lg:py-32 bg-[#FAFAFA] text-[#231F19] overflow-hidden border-t border-b border-[#E5E7EB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Header */}
        <FadeUp className="text-center max-w-3xl mx-auto mb-16 space-y-3 relative">
          <span className="text-xs uppercase tracking-widest text-[#8C5B41] font-semibold block">
            {clinicData.stories.eyebrow}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#231F19] font-semibold tracking-tight leading-[1.08]">
            {clinicData.stories.headline}
          </h2>
          <p className="font-sans text-lg sm:text-xl text-[#231F19]/80 max-w-xl mx-auto font-light">
            {clinicData.stories.subhead}
          </p>
        </FadeUp>

        {/* YouTube Shorts Embed — centred, portrait 9:16 with ZoomReveal */}
        <div className="flex justify-center">
          <ZoomReveal className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-[#E5E7EB]">
            <div
              className="relative w-full bg-black"
              style={{ aspectRatio: "9 / 16" }}
            >
            <iframe
              src={`https://www.youtube.com/embed/${YOUTUBE_SHORTS_ID}?rel=0&modestbranding=1&playsinline=1`}
              title="Mind Body Recovery — Patient Review"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
              style={{ border: "none" }}
            />
            </div>
          </ZoomReveal>
        </div>

        {/* Caption beneath embed */}
        <p className="text-center text-xs text-[#231F19]/50 font-sans mt-6 tracking-wide">
          Real patient experience — Mind Body Recovery
        </p>

      </div>
    </section>
  );
};
