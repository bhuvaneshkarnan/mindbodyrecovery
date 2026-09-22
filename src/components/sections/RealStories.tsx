"use client";

import React, { useState } from "react";
import { clinicData } from "@/data/clinicData";
import { FadeUp, SlideIn, ZoomReveal, BlurReveal } from "@/components/ui/ScrollAnimations";
import { ReviewNeurons } from "@/components/ui/ReviewNeurons";
import { BandageStrip } from "@/components/ui/BandageFrame";
import clsx from "clsx";

const YOUTUBE_SHORTS_ID = "Sye2NYdx6rk";

/**
 * Small authentic Polaroid snapshot with corner adhesive tape
 */
interface PhotoPolaroidProps {
  src: string;
  alt: string;
  caption: string;
  tilt?: number;
  className?: string;
  tapeCorner?: "top-left" | "top-right" | "top-center";
}

const PhotoPolaroid: React.FC<PhotoPolaroidProps> = ({
  src,
  alt,
  caption,
  tilt = 0,
  className = "",
  tapeCorner = "top-left",
}) => {
  return (
    <div
      className={clsx(
        "relative p-2 bg-white rounded-xl shadow-md hover:shadow-xl border border-[#E5E7EB] transition-all duration-300 hover:scale-105 group select-none",
        className
      )}
      style={{
        transform: `rotate(${tilt}deg)`,
      }}
    >
      {/* Tape Plaster Accent */}
      {tapeCorner === "top-left" && (
        <div className="absolute -top-2.5 -left-3 z-30 -rotate-45 pointer-events-none scale-65">
          <BandageStrip variant="gold" />
        </div>
      )}
      {tapeCorner === "top-right" && (
        <div className="absolute -top-2.5 -right-3 z-30 rotate-45 pointer-events-none scale-65">
          <BandageStrip variant="gold" />
        </div>
      )}
      {tapeCorner === "top-center" && (
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-30 pointer-events-none scale-65">
          <BandageStrip variant="gold" />
        </div>
      )}

      {/* Photo Frame - Square 1:1 framing displays full faces edge-to-edge with zero cut-off */}
      <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-[#F0ECE1]">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-center filter saturate-95 group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Polaroid Caption */}
      <div className="pt-1.5 pb-0.5 text-center">
        <span className="font-serif italic text-[11px] text-[#4A5D45] tracking-tight block">
          {caption}
        </span>
      </div>
    </div>
  );
};

/**
 * Small compact review note card with quote mark and signature
 */
interface ReviewNoteProps {
  quote: string;
  author: string;
  location?: string;
  tagline?: string;
  tilt?: number;
  className?: string;
  variant?: "white" | "parchment";
  tapeCorner?: "top-left" | "top-right";
}

const ReviewNote: React.FC<ReviewNoteProps> = ({
  quote,
  author,
  location,
  tagline,
  tilt = 0,
  className = "",
  variant = "white",
  tapeCorner,
}) => {
  const isParchment = variant === "parchment";

  return (
    <div
      className={clsx(
        "relative p-3.5 sm:p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-102 group select-none",
        isParchment
          ? "bg-[#FAF7F2] border border-[#E4DEC9]"
          : "bg-white/95 backdrop-blur-sm border border-[#E5E7EB]",
        className
      )}
      style={{
        transform: `rotate(${tilt}deg)`,
      }}
    >
      {/* Optional Tape Plaster */}
      {tapeCorner === "top-left" && (
        <div className="absolute -top-2 -left-2.5 z-30 -rotate-45 pointer-events-none scale-60">
          <BandageStrip variant="gold" />
        </div>
      )}
      {tapeCorner === "top-right" && (
        <div className="absolute -top-2 -right-2.5 z-30 rotate-45 pointer-events-none scale-60">
          <BandageStrip variant="gold" />
        </div>
      )}

      {/* Quote Mark & Location Pill */}
      <div className="flex items-center justify-between mb-2">
        <div className="w-5 h-5 rounded-full bg-[#3E5336] text-white flex items-center justify-center shadow-xs">
          <svg className="w-2.5 h-2.5 fill-current" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {location && (
          <span className="text-[10px] text-[#5A6855] font-sans font-medium px-2 py-0.5 rounded-full bg-[#EBF2E8]">
            {location}
          </span>
        )}
      </div>

      {/* Quote text */}
      <p className="text-[11.5px] leading-relaxed text-[#2C3028] font-sans">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Divider */}
      <div className="w-6 h-0.5 bg-[#3E5336]/20 my-2" />

      {/* Author and Tagline */}
      <div className="flex items-end justify-between">
        <div>
          <h5 className="font-display font-semibold text-xs text-[#1A2218] tracking-tight">
            {author}
          </h5>
        </div>
        {tagline && (
          <span className="font-serif italic text-[10.5px] text-[#3E5336] tracking-wide select-none">
            {tagline}
          </span>
        )}
      </div>
    </div>
  );
};

const YouTubeFacade: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  if (isPlaying) {
    return (
      <div className="relative w-full bg-black rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: "9 / 16" }}>
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
      className="relative w-full bg-black group cursor-pointer overflow-hidden rounded-2xl shadow-2xl border border-[#C79A45]/30"
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
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30 pointer-events-none" />

      {/* Band Plaster Corner Accents on Featured Video */}
      <div className="absolute -top-2 -left-3 z-20 -rotate-12 pointer-events-none scale-85">
        <BandageStrip variant="gold" />
      </div>
      <div className="absolute -bottom-2 -right-3 z-20 -rotate-12 pointer-events-none scale-85">
        <BandageStrip variant="gold" />
      </div>

      {/* Brand Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#C79A45]/90 text-white flex items-center justify-center shadow-2xl group-hover:bg-[#C79A45] group-hover:scale-110 transition-all duration-300 border-2 border-white/80">
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 ml-1 fill-white"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-3 left-3 right-3 text-center pointer-events-none space-y-1">
        <span className="inline-block text-[11px] uppercase tracking-wider font-semibold text-white/95 bg-black/60 px-3 py-1 rounded-full backdrop-blur-md border border-white/20 shadow-md">
          Watch Patient Video
        </span>
        <p className="text-[10px] text-[#F6F1E4]/80 font-sans">
          Sunitha Vinod • Verified Story
        </p>
      </div>
    </div>
  );
};

export const RealStories: React.FC = () => {
  return (
    <section
      id="stories"
      className="relative py-20 lg:py-28 bg-[#FAFAFA] text-[#231F19] overflow-hidden border-t border-b border-[#E5E7EB]"
    >
      {/* Animated low-opacity neurons on left and right whitespace */}
      <ReviewNeurons />

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Section Header */}
        <BlurReveal className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 relative" blur={10}>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#C79A45]/10 border border-[#C79A45]/30 mb-2.5">
            <span className="w-2 h-2 rounded-full bg-[#C79A45] animate-pulse" />
            <span className="text-[10.5px] uppercase tracking-widest text-[#8C5B41] font-medium font-sans">
              Real Patient Stories & Transformations
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#231F19] font-semibold tracking-tight leading-[1.12]">
            {clinicData.stories.headline}
          </h2>
          <p className="mt-2.5 text-xs sm:text-sm text-[#5A6351] font-sans max-w-lg mx-auto">
            Honest reflections from patients who found relief, clarity, and renewal through our integrative care.
          </p>
        </BlurReveal>

        {/* ───────────────── DESKTOP SCATTERED STAGE (Same / Lower Height Than Video Review) ───────────────── */}
        <div className="relative w-full h-[540px] max-w-[1200px] mx-auto hidden lg:block">

          {/* CENTER VIDEO REVIEW (w=280px, h=498px — Anchors the stage) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] z-20">
            <ZoomReveal delay={0.15}>
              <YouTubeFacade />
            </ZoomReveal>
          </div>

          {/* ─── LEFT SCATTERED ELEMENTS (Small, uneven, separate photos & review notes with zero overlap) ─── */}
          
          {/* L1: Tala & Sameer Polaroid Photo (Mauritius) */}
          <div className="absolute top-[15px] left-[15px] w-[140px] z-20 hover:z-30">
            <SlideIn from="left" delay={0.1}>
              <PhotoPolaroid
                src="/assets/reviews/review-tala.webp"
                alt="Sameer with patient from Mauritius"
                caption="Mauritius"
                tilt={-4}
                tapeCorner="top-left"
              />
            </SlideIn>
          </div>

          {/* L2: Tala Rashid Review Note (Mauritius) */}
          <div className="absolute top-[40px] left-[180px] w-[215px] z-20">
            <SlideIn from="left" delay={0.2}>
              <ReviewNote
                quote="I was going through a very stressful phase and struggling with infertility. After consulting Sameer, my stress levels reduced. With his guidance, our IVF treatment was successful. Really grateful for his help."
                author="Tala Rashid"
                location="Mauritius"
                tagline="Healing is possible."
                tilt={2}
              />
            </SlideIn>
          </div>

          {/* L3: Japan Patient & Sameer Polaroid Photo (Japan) */}
          <div className="absolute top-[305px] left-[20px] w-[140px] z-20 hover:z-30">
            <SlideIn from="left" delay={0.3}>
              <PhotoPolaroid
                src="/assets/reviews/review-japan.webp"
                alt="Sameer with patient from Japan"
                caption="Japan"
                tilt={3}
                tapeCorner="top-right"
              />
            </SlideIn>
          </div>

          {/* L4: Personal Emotional Recovery Story Note (Chennai) */}
          <div className="absolute top-[260px] left-[180px] w-[225px] z-20">
            <SlideIn from="left" delay={0.35}>
              <ReviewNote
                quote="After my divorce, I found myself carrying emotional stress and couldn't sleep. Mind Body Recovery Center didn't rush—they listened and gave me a personalised plan. Every session left me calmer, lighter, and at peace."
                author="Verified Client"
                location="Chennai"
                tagline="Calmer & lighter"
                tilt={-2}
                variant="parchment"
                tapeCorner="top-right"
              />
            </SlideIn>
          </div>

          {/* ─── RIGHT SCATTERED ELEMENTS (Small, uneven, separate photos & review notes with zero overlap) ─── */}

          {/* R1: Choi & Sameer Polaroid Photo (Hong Kong) */}
          <div className="absolute top-[15px] right-[245px] w-[145px] z-20 hover:z-30">
            <SlideIn from="right" delay={0.1}>
              <PhotoPolaroid
                src="/assets/reviews/review-choi.webp"
                alt="Sameer with Choi from Hong Kong"
                caption="Hong Kong"
                tilt={4}
                tapeCorner="top-right"
              />
            </SlideIn>
          </div>

          {/* R2: Choi Review Note (Hong Kong) */}
          <div className="absolute top-[40px] right-[12px] w-[215px] z-20">
            <SlideIn from="right" delay={0.2}>
              <ReviewNote
                quote="Dealing with neck and shoulder stiffness from long hours. The team took time to understand and explained clearly. I felt much more relaxed after sessions and definitely recommend."
                author="Choi"
                location="Hong Kong"
                tagline="Health Has No Borders."
                tilt={-2}
              />
            </SlideIn>
          </div>

          {/* R3: Wright Review Note (Singapore) */}
          <div className="absolute top-[260px] right-[225px] w-[210px] z-20">
            <SlideIn from="right" delay={0.25}>
              <ReviewNote
                quote="I was feeling quite stressed and mentally tired. Sameer took the time to understand what I was going through. The sessions were very calming, and I left feeling much more relaxed."
                author="Wright"
                location="Singapore"
                tagline="People. Progress. Wellness."
                tilt={2.5}
                tapeCorner="top-left"
              />
            </SlideIn>
          </div>

          {/* R4: Wright & Sameer Polaroid Photo (Singapore) */}
          <div className="absolute top-[305px] right-[25px] w-[140px] z-20 hover:z-30">
            <SlideIn from="right" delay={0.3}>
              <PhotoPolaroid
                src="/assets/reviews/review-wright.webp"
                alt="Sameer with Wright from Singapore"
                caption="Singapore"
                tilt={-3.5}
                tapeCorner="top-left"
              />
            </SlideIn>
          </div>

        </div>

        {/* ───────────────── MOBILE & TABLET LAYOUT (< lg) ───────────────── */}
        <div className="block lg:hidden space-y-8">
          
          {/* Top Video Review */}
          <div className="max-w-[280px] sm:max-w-[320px] mx-auto">
            <ZoomReveal delay={0.1}>
              <YouTubeFacade />
            </ZoomReveal>
          </div>

          {/* Scattered Mobile Grid of Small Photos & Reviews */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl mx-auto px-2">
            
            <FadeUp delay={0.15}>
              <PhotoPolaroid
                src="/assets/reviews/review-tala.webp"
                alt="Sameer with patient from Mauritius"
                caption="Mauritius"
                tilt={-2}
                tapeCorner="top-left"
                className="max-w-[180px] mx-auto"
              />
            </FadeUp>

            <FadeUp delay={0.2}>
              <ReviewNote
                quote="After consulting Sameer, my stress levels reduced. With his guidance, our IVF treatment was successful. Really grateful for his help."
                author="Tala Rashid"
                location="Mauritius"
                tagline="Healing is possible."
                tilt={1.5}
              />
            </FadeUp>

            <FadeUp delay={0.25}>
              <PhotoPolaroid
                src="/assets/reviews/review-japan.webp"
                alt="Sameer with patient from Japan"
                caption="Japan"
                tilt={2}
                tapeCorner="top-right"
                className="max-w-[180px] mx-auto"
              />
            </FadeUp>

            <FadeUp delay={0.3}>
              <ReviewNote
                quote="After my divorce, I found myself carrying emotional stress and couldn't sleep. Mind Body Recovery Center didn't rush—they listened and gave me a personalised plan. Every session left me calmer, lighter, and at peace."
                author="Verified Client"
                location="Chennai"
                tagline="Calmer & lighter"
                tilt={-1.5}
                variant="parchment"
                tapeCorner="top-right"
              />
            </FadeUp>

            <FadeUp delay={0.35}>
              <PhotoPolaroid
                src="/assets/reviews/review-choi.webp"
                alt="Sameer with Choi from Hong Kong"
                caption="Hong Kong"
                tilt={2.5}
                tapeCorner="top-right"
                className="max-w-[180px] mx-auto"
              />
            </FadeUp>

            <FadeUp delay={0.4}>
              <ReviewNote
                quote="Dealing with neck and shoulder stiffness from long hours. The team took time to understand and explained clearly. I felt much more relaxed after sessions."
                author="Choi"
                location="Hong Kong"
                tagline="Health Has No Borders."
                tilt={-2}
              />
            </FadeUp>

            <FadeUp delay={0.45}>
              <PhotoPolaroid
                src="/assets/reviews/review-wright.webp"
                alt="Sameer with Wright from Singapore"
                caption="Singapore"
                tilt={-2.5}
                tapeCorner="top-left"
                className="max-w-[180px] mx-auto"
              />
            </FadeUp>

            <FadeUp delay={0.5}>
              <ReviewNote
                quote="I was feeling quite stressed and mentally tired. Sameer took the time to understand what I was going through. The sessions were very calming."
                author="Wright"
                location="Singapore"
                tagline="People. Progress. Wellness."
                tilt={2}
              />
            </FadeUp>

          </div>

        </div>

      </div>
    </section>
  );
};
