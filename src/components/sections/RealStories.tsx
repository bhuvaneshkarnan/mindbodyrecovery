"use client";

import React, { useState } from "react";
import { clinicData } from "@/data/clinicData";
import { FadeUp, SlideIn, ZoomReveal, BlurReveal } from "@/components/ui/ScrollAnimations";
import { ReviewNeurons } from "@/components/ui/ReviewNeurons";
import { BandageStrip } from "@/components/ui/BandageFrame";

const YOUTUBE_SHORTS_ID = "Sye2NYdx6rk";

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
      <div className="absolute -top-2 -left-3 z-20 -rotate-12 pointer-events-none scale-90">
        <BandageStrip variant="gold" />
      </div>
      <div className="absolute -bottom-2 -right-3 z-20 -rotate-12 pointer-events-none scale-90">
        <BandageStrip variant="gold" />
      </div>

      {/* Brand Play Button */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#C79A45]/90 text-white flex items-center justify-center shadow-2xl group-hover:bg-[#C79A45] group-hover:scale-110 transition-all duration-300 border-2 border-white/80">
          <svg
            className="w-7 h-7 sm:w-8 sm:h-8 ml-1 fill-white"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        </div>
      </div>

      <div className="absolute bottom-4 left-4 right-4 text-center pointer-events-none space-y-1.5">
        <span className="inline-block text-xs uppercase tracking-wider font-semibold text-white/95 bg-black/60 px-3.5 py-1.5 rounded-full backdrop-blur-md border border-white/20 shadow-lg">
          Watch Patient Video Review
        </span>
        <p className="text-[11px] text-[#F6F1E4]/80 font-sans">
          Sunitha Vinod • Verified Patient Story
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

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-20">

        {/* Section Header */}
        <BlurReveal className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 relative" blur={10}>
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#C79A45]/10 border border-[#C79A45]/30 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C79A45] animate-pulse" />
            <span className="text-[11px] uppercase tracking-widest text-[#8C5B41] font-medium font-sans">
              Real Patient Stories & Transformations
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#231F19] font-semibold tracking-tight leading-[1.12]">
            {clinicData.stories.headline}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5A6351] font-sans max-w-xl mx-auto">
            Honest reflections from patients across the world who found relief, clarity, and renewal through our integrative care.
          </p>
        </BlurReveal>

        {/* 3-Column Asymmetric Constellation Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-10 items-start">
          
          {/* ───────────────── LEFT COLUMN: Collage 1 (Tala Rashid + Emotional Recovery Story) ───────────────── */}
          <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col space-y-7 relative z-20">
            
            {/* Card 1: Tala Rashid (Oman) */}
            <SlideIn from="left" delay={0.1}>
              <div className="relative group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E7E5E0] overflow-hidden transform lg:-rotate-1 hover:rotate-0">
                {/* Bandage Plaster Corner */}
                <div className="absolute top-2 -left-4 z-30 -rotate-45 pointer-events-none scale-75 sm:scale-90">
                  <BandageStrip variant="gold" />
                </div>

                {/* Patient Photo Header */}
                <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-[#F0ECE1]">
                  <img
                    src="/assets/reviews/review-tala.webp"
                    alt="Sameer with Tala Rashid"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top filter saturate-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Review Body */}
                <div className="p-5 sm:p-6 relative">
                  {/* Olive Quote Pill */}
                  <div className="absolute -top-5 right-5 w-10 h-10 rounded-full bg-[#3E5336] text-white flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <div className="space-y-2.5 text-[13px] sm:text-[13.5px] leading-relaxed text-[#2C3028] font-sans">
                    <p>
                      &ldquo;I&apos;m from Oman. I was going through a very stressful phase and was also struggling with infertility. It was an emotional and exhausting time for me.&rdquo;
                    </p>
                    <p>
                      &ldquo;After consulting Sameer and following his suggestions, my stress levels reduced. With his support and guidance, our IVF treatment was successful.&rdquo;
                    </p>
                    <p className="font-medium text-[#1A2218]">
                      &ldquo;I&apos;m really grateful for his help.&rdquo;
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-10 h-0.5 bg-[#3E5336]/25 my-3.5" />

                  {/* Author & Signature Accent */}
                  <div className="flex items-end justify-between">
                    <div>
                      <h4 className="font-display font-semibold text-base text-[#1A2218] tracking-tight">
                        Tala Rashid
                      </h4>
                      <p className="text-xs text-[#5A6855] font-sans">
                        Oman
                      </p>
                    </div>
                    <span className="font-serif italic text-xs sm:text-sm text-[#3E5336] tracking-wide transform -rotate-3 select-none">
                      Healing is possible.
                    </span>
                  </div>
                </div>
              </div>
            </SlideIn>

            {/* Card 2: Deep Emotional Recovery / Chennai Visit */}
            <SlideIn from="left" delay={0.25}>
              <div className="relative group bg-[#FAF7F2] rounded-2xl p-6 sm:p-7 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E4DEC9] overflow-hidden transform lg:rotate-1 hover:rotate-0">
                {/* Bandage Plaster Corner */}
                <div className="absolute -top-1.5 -right-3 z-30 rotate-12 pointer-events-none scale-75 sm:scale-85">
                  <BandageStrip variant="gold" />
                </div>

                <div className="space-y-3 text-[13px] sm:text-[13.5px] leading-relaxed text-[#2C3028] font-sans">
                  <p>
                    &ldquo;After my divorce, I found myself carrying a lot of emotional stress. I wasn&apos;t sleeping well, my mind never seemed to slow down, and I constantly felt exhausted.&rdquo;
                  </p>
                  <p>
                    &ldquo;During my visit to Chennai, someone recommended Mind Body Recovery Center, and I&apos;m so grateful they did.&rdquo;
                  </p>

                  {/* Leaf Divider */}
                  <div className="flex items-center justify-center py-1 space-x-2 opacity-70">
                    <div className="h-px w-8 bg-[#3E5336]/30" />
                    <svg className="w-3.5 h-3.5 text-[#3E5336]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
                    </svg>
                    <div className="h-px w-8 bg-[#3E5336]/30" />
                  </div>

                  <p>
                    &ldquo;What made their approach different was that they didn&apos;t rush into treatment. They first listened to my story, understood what I was going through, and then recommended a personalised wellness plan. Every session left me feeling calmer, lighter, and more at peace.&rdquo;
                  </p>

                  {/* Leaf Divider */}
                  <div className="flex items-center justify-center py-1 space-x-2 opacity-70">
                    <div className="h-px w-8 bg-[#3E5336]/30" />
                    <svg className="w-3.5 h-3.5 text-[#3E5336]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/>
                    </svg>
                    <div className="h-px w-8 bg-[#3E5336]/30" />
                  </div>

                  <p className="font-medium text-[#1A2218]">
                    &ldquo;If you&apos;re looking for someone who genuinely cares about your well-being, I highly recommend Mind Body Recovery Center.&rdquo;
                  </p>
                </div>

                {/* Footer Attribution */}
                <div className="mt-4 pt-3 border-t border-[#3E5336]/15 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-semibold text-sm text-[#1A2218]">
                      Verified Client
                    </h4>
                    <p className="text-xs text-[#5A6855] font-sans">
                      Emotional Stress & Sleep Recovery • Chennai Visit
                    </p>
                  </div>
                  <span className="font-serif text-2xl text-[#3E5336]/60 leading-none">
                    &rdquo;
                  </span>
                </div>
              </div>
            </SlideIn>

          </div>

          {/* ───────────────── CENTER COLUMN: Featured Video Review (Sunitha Vinod) ───────────────── */}
          <div className="order-1 lg:order-2 lg:col-span-4 flex flex-col items-center justify-center relative z-20">
            <ZoomReveal delay={0.15} className="w-full max-w-[360px] mx-auto">
              <YouTubeFacade />
            </ZoomReveal>
          </div>

          {/* ───────────────── RIGHT COLUMN: Collage 2 (Choi + Wright) ───────────────── */}
          <div className="order-3 lg:order-3 lg:col-span-4 flex flex-col space-y-7 relative z-20">
            
            {/* Card 3: Choi (Seoul, Korea) */}
            <SlideIn from="right" delay={0.1}>
              <div className="relative group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E7E5E0] overflow-hidden transform lg:rotate-1.5 hover:rotate-0">
                {/* Bandage Plaster Corner */}
                <div className="absolute top-2 -right-4 z-30 rotate-45 pointer-events-none scale-75 sm:scale-90">
                  <BandageStrip variant="gold" />
                </div>

                {/* Patient Photo Header */}
                <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-[#F0ECE1]">
                  <img
                    src="/assets/reviews/review-choi.webp"
                    alt="Sameer with Choi from Seoul, Korea"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top filter saturate-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Review Body */}
                <div className="p-5 sm:p-6 relative">
                  {/* Olive Quote Pill */}
                  <div className="absolute -top-5 right-5 w-10 h-10 rounded-full bg-[#3E5336] text-white flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <div className="space-y-2.5 text-[13px] sm:text-[13.5px] leading-relaxed text-[#2C3028] font-sans">
                    <p>
                      &ldquo;I had been dealing with a lot of neck and shoulder stiffness from long hours of work, along with stress and tiredness.&rdquo;
                    </p>
                    <p>
                      &ldquo;I decided to try the treatment here, and the experience was very comfortable. The team took the time to understand my concerns and explained everything clearly.&rdquo;
                    </p>
                    <p className="font-medium text-[#1A2218]">
                      &ldquo;I felt much more relaxed after the sessions and would definitely recommend this place.&rdquo;
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-10 h-0.5 bg-[#3E5336]/25 my-3.5" />

                  {/* Author & Signature Accent */}
                  <div className="flex items-end justify-between">
                    <div>
                      <h4 className="font-display font-semibold text-base text-[#1A2218] tracking-tight">
                        Choi
                      </h4>
                      <p className="text-xs text-[#5A6855] font-sans">
                        Seoul, Korea
                      </p>
                    </div>
                    <span className="font-serif italic text-xs sm:text-sm text-[#3E5336] tracking-wide transform -rotate-3 select-none">
                      Health Has No Borders.
                    </span>
                  </div>
                </div>
              </div>
            </SlideIn>

            {/* Card 4: Wright */}
            <SlideIn from="right" delay={0.25}>
              <div className="relative group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E7E5E0] overflow-hidden transform lg:-rotate-1 hover:rotate-0">
                {/* Bandage Plaster Corner */}
                <div className="absolute top-2 -left-4 z-30 -rotate-45 pointer-events-none scale-75 sm:scale-90">
                  <BandageStrip variant="gold" />
                </div>

                {/* Patient Photo Header */}
                <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-[#F0ECE1]">
                  <img
                    src="/assets/reviews/review-wright.webp"
                    alt="Sameer with Wright"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top filter saturate-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Review Body */}
                <div className="p-5 sm:p-6 relative">
                  {/* Olive Quote Pill */}
                  <div className="absolute -top-5 right-5 w-10 h-10 rounded-full bg-[#3E5336] text-white flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <div className="space-y-2.5 text-[13px] sm:text-[13.5px] leading-relaxed text-[#2C3028] font-sans">
                    <p>
                      &ldquo;I was feeling quite stressed and mentally tired when I visited. Sameer took the time to understand what I was going through.&rdquo;
                    </p>
                    <p>
                      &ldquo;The sessions were very calming, and I left feeling much more relaxed.&rdquo;
                    </p>
                    <p className="font-medium text-[#1A2218]">
                      &ldquo;I really appreciated the personal care.&rdquo;
                    </p>
                  </div>

                  {/* Divider */}
                  <div className="w-10 h-0.5 bg-[#3E5336]/25 my-3.5" />

                  {/* Author & Signature Accent */}
                  <div className="flex items-end justify-between">
                    <div>
                      <h4 className="font-display font-semibold text-base text-[#1A2218] tracking-tight">
                        Wright
                      </h4>
                      <p className="text-xs text-[#5A6855] font-sans">
                        Restorative Care Patient
                      </p>
                    </div>
                    <span className="font-serif italic text-xs sm:text-sm text-[#3E5336] tracking-wide transform -rotate-3 select-none">
                      People. Progress. Wellness.
                    </span>
                  </div>
                </div>
              </div>
            </SlideIn>

          </div>

        </div>

      </div>
    </section>
  );
};
