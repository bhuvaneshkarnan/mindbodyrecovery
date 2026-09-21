"use client";

import React, { useState } from "react";
import { clinicData } from "@/data/clinicData";
import { FadeUp, ZoomReveal, BlurReveal } from "@/components/ui/ScrollAnimations";
import { ReviewNeurons } from "@/components/ui/ReviewNeurons";

const YOUTUBE_SHORTS_ID = "Sye2NYdx6rk";

const YouTubeFacade: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="relative w-full bg-black" style={{ aspectRatio: "9 / 16" }}>
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_SHORTS_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title="Mind Body Recovery — Patient Review"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
          style={{ border: "none" }}
        />
      </div>
    );
  }

  return (
    <div
      onClick={() => setIsPlaying(true)}
      className="relative w-full bg-black group cursor-pointer overflow-hidden"
      style={{ aspectRatio: "9 / 16" }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") setIsPlaying(true);
      }}
      aria-label="Play patient review video"
    >
      <img
        src="/assets/stories-thumb.jpg"
        alt="Mind Body Recovery Patient Review"
        width={384}
        height={682}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
        loading="lazy"
        decoding="async"
      />
      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

      {/* Brand Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-[#C79A45]/90 text-white flex items-center justify-center shadow-lg group-hover:bg-[#C79A45] group-hover:scale-110 transition-all duration-300 border-2 border-white/60">
          <svg
            className="w-7 h-7 ml-1 fill-white"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 text-center pointer-events-none">
        <span className="text-xs uppercase tracking-wider font-semibold text-white/90 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm">
          Watch Patient Review
        </span>
      </div>
    </div>
  );
};

export const RealStories: React.FC = () => {
  return (
    <section
      id="stories"
      className="relative py-24 lg:py-32 bg-[#FAFAFA] text-[#231F19] overflow-hidden border-t border-b border-[#E5E7EB]"
    >
      {/* Animated low-opacity neurons on left and right whitespace */}
      <ReviewNeurons />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Header */}
        <BlurReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 relative" blur={10}>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-[#231F19] font-semibold tracking-tight leading-[1.08]">
            {clinicData.stories.headline}
          </h2>
        </BlurReveal>

        {/* YouTube Shorts Embed — Centred portrait 9:16 with zero-network click-to-play Facade */}
        <div className="flex justify-center">
          <ZoomReveal className="w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border border-[#E5E7EB]">
            <YouTubeFacade />
          </ZoomReveal>
        </div>

      </div>
    </section>
  );
};
