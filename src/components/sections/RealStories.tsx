"use client";

import React, { useState } from "react";
import { clinicData } from "@/data/clinicData";
import { FadeUp, SlideIn, ZoomReveal, BlurReveal } from "@/components/ui/ScrollAnimations";
import { ReviewNeurons } from "@/components/ui/ReviewNeurons";
import { PinClip } from "@/components/ui/PinClip";
import clsx from "clsx";

const YOUTUBE_SHORTS_ID = "Sye2NYdx6rk";

/**
 * Small authentic Polaroid snapshot with metallic gold pin clip
 */
interface PhotoPolaroidProps {
  src: string;
  alt: string;
  caption: string;
  tilt?: number;
  className?: string;
  clipPosition?: "top-left" | "top-right" | "top-center";
}

const PhotoPolaroid: React.FC<PhotoPolaroidProps> = ({
  src,
  alt,
  caption,
  tilt = 0,
  className = "",
  clipPosition = "top-left",
}) => {
  return (
    <div
      className={clsx(
        "relative p-1.5 pb-1 bg-white rounded-xl shadow-md hover:shadow-xl border border-[#E5E7EB] transition-all duration-300 hover:scale-105 group select-none",
        className
      )}
      style={{
        transform: `rotate(${tilt}deg)`,
      }}
    >
      {/* Metallic Gold Pin Clip Accent */}
      {clipPosition === "top-left" && (
        <div className="absolute -top-3.5 left-2.5 z-30 -rotate-6 pointer-events-none">
          <PinClip variant="gold" />
        </div>
      )}
      {clipPosition === "top-right" && (
        <div className="absolute -top-3.5 right-2.5 z-30 rotate-6 pointer-events-none">
          <PinClip variant="gold" />
        </div>
      )}
      {clipPosition === "top-center" && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
          <PinClip variant="gold" />
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
      <div className="pt-1 text-center">
        <span className="font-serif italic text-[10px] text-[#4A5D45] tracking-tight block font-medium">
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
  clipPosition?: "top-left" | "top-right";
}

const ReviewNote: React.FC<ReviewNoteProps> = ({
  quote,
  author,
  location,
  tagline,
  tilt = 0,
  className = "",
  variant = "white",
  clipPosition,
}) => {
  const isParchment = variant === "parchment";

  return (
    <div
      className={clsx(
        "relative p-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:scale-102 group select-none",
        isParchment
          ? "bg-[#FAF7F2] border border-[#E4DEC9]"
          : "bg-white/95 backdrop-blur-sm border border-[#E5E7EB]",
        className
      )}
      style={{
        transform: `rotate(${tilt}deg)`,
      }}
    >
      {/* Metallic Gold Pin Clip Accent */}
      {clipPosition === "top-left" && (
        <div className="absolute -top-3.5 left-3.5 z-30 -rotate-6 pointer-events-none">
          <PinClip variant="gold" />
        </div>
      )}
      {clipPosition === "top-right" && (
        <div className="absolute -top-3.5 right-3.5 z-30 rotate-6 pointer-events-none">
          <PinClip variant="gold" />
        </div>
      )}

      {/* Quote Mark & Location Pill */}
      <div className="flex items-center justify-between mb-1.5">
        <div className="w-4 h-4 rounded-full bg-[#3E5336] text-white flex items-center justify-center shadow-xs">
          <svg className="w-2 h-2 fill-current" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {location && (
          <span className="text-[9.5px] text-[#5A6855] font-sans font-medium px-2 py-0.5 rounded-full bg-[#EBF2E8]">
            {location}
          </span>
        )}
      </div>

      {/* Quote text */}
      <p className="text-[11px] leading-[1.45] text-[#2C3028] font-sans">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Divider */}
      <div className="w-5 h-0.5 bg-[#3E5336]/20 my-1.5" />

      {/* Author and Tagline */}
      <div className="flex items-end justify-between">
        <div>
          <p className="font-display font-semibold text-[11px] text-[#1A2218] tracking-tight">
            {author}
          </p>
        </div>
        {tagline && (
          <span className="font-serif italic text-[10px] text-[#3E5336] tracking-wide select-none">
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

      {/* Metallic Gold Pin Clip Accent on Featured Video */}
      <div className="absolute -top-3.5 left-6 z-20 -rotate-6 pointer-events-none">
        <PinClip variant="gold" />
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
        <div className="relative w-full h-[620px] max-w-[1260px] mx-auto hidden lg:block">

          {/* CENTER VIDEO REVIEW (w=270px, h=480px — Anchors the stage) */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[270px] z-20">
            <ZoomReveal delay={0.15}>
              <YouTubeFacade />
            </ZoomReveal>
          </div>

          {/* ─── LEFT SCATTERED ELEMENTS (Small, uneven, separate photos & review notes with zero overlap) ─── */}
          
          {/* L1: Tala & Sameer Polaroid Photo (Mauritius) */}
          <div className="absolute top-[15px] left-[15px] w-[115px] z-20 hover:z-30">
            <SlideIn from="left" delay={0.1}>
              <PhotoPolaroid
                src="/assets/reviews/review-tala.webp"
                alt="Sameer with patient from Mauritius"
                caption="Mauritius"
                tilt={-4}
                clipPosition="top-left"
              />
            </SlideIn>
          </div>

          {/* L2: Tala Rashid Review Note (Oman) */}
          <div className="absolute top-[20px] left-[145px] w-[195px] z-20">
            <SlideIn from="left" delay={0.18}>
              <ReviewNote
                quote="Preparing for IVF was overwhelming. Working with Sameer helped reduce my stress and support my body naturally through the journey. So grateful for his guidance."
                author="Tala Rashid"
                location="Oman"
                tagline="Holistic support"
                tilt={2}
                clipPosition="top-right"
              />
            </SlideIn>
          </div>

          {/* L3: Nihaza Review Note (Sri Lanka) */}
          <div className="absolute top-[205px] left-[15px] w-[200px] z-20">
            <SlideIn from="left" delay={0.25}>
              <ReviewNote
                quote="I struggled with mood swings and insomnia for years. After foot reflexology sessions with Sameer, I saw a remarkable improvement in my symptoms. Truly grateful!"
                author="Nihaza"
                location="Sri Lanka"
                tagline="Remarkable improvement"
                tilt={-2}
                clipPosition="top-left"
              />
            </SlideIn>
          </div>

          {/* L4: Saradha Arjun Review Note (Karaikudi) */}
          <div className="absolute top-[215px] left-[230px] w-[210px] z-20">
            <SlideIn from="left" delay={0.3}>
              <ReviewNote
                quote="With severe knee pain and liver concerns, Sameer's integrative bodywork brought incredible relief. My mobility returned, and under my doctor's guidance, my liver medications were safely tapered!"
                author="Saradha Arjun"
                location="Karaikudi"
                tagline="Restored mobility"
                tilt={2.5}
                variant="parchment"
                clipPosition="top-right"
              />
            </SlideIn>
          </div>

          {/* L5: Japan Patient & Sameer Polaroid Photo (Japan) */}
          <div className="absolute top-[415px] left-[20px] w-[115px] z-20 hover:z-30">
            <SlideIn from="left" delay={0.35}>
              <PhotoPolaroid
                src="/assets/reviews/review-japan.webp"
                alt="Sameer with patient from Japan"
                caption="Japan"
                tilt={3}
                clipPosition="top-right"
              />
            </SlideIn>
          </div>

          {/* L6: IT Professional Review Note (Chennai) */}
          <div className="absolute top-[410px] left-[150px] w-[220px] z-20">
            <SlideIn from="left" delay={0.4}>
              <ReviewNote
                quote="Struggled with stress, insomnia, and leg pain from long hours at my IT company. Tension eased and sleep became deeply restful. Made a world of difference!"
                author="Verified Client"
                location="Chennai • IT"
                tagline="Deeply restful sleep"
                tilt={-1.5}
                clipPosition="top-left"
              />
            </SlideIn>
          </div>

          {/* ─── RIGHT SCATTERED ELEMENTS (Small, uneven, separate photos & review notes with zero overlap) ─── */}

          {/* R1: Choi & Sameer Polaroid Photo (Hong Kong) */}
          <div className="absolute top-[15px] right-[215px] w-[115px] z-20 hover:z-30">
            <SlideIn from="right" delay={0.1}>
              <PhotoPolaroid
                src="/assets/reviews/review-choi.webp"
                alt="Sameer with Choi from Hong Kong"
                caption="Hong Kong"
                tilt={4}
                clipPosition="top-right"
              />
            </SlideIn>
          </div>

          {/* R2: Choi Review Note (Taiwan) */}
          <div className="absolute top-[20px] right-[12px] w-[190px] z-20">
            <SlideIn from="right" delay={0.18}>
              <ReviewNote
                quote="Dealing with neck and shoulder stiffness from long hours. The team took time to understand and explained clearly. I felt much more relaxed after sessions."
                author="Choi"
                location="Taiwan"
                tagline="Health Has No Borders."
                tilt={-2}
                clipPosition="top-left"
              />
            </SlideIn>
          </div>

          {/* R3: Dilija Review Note (Chennai) */}
          <div className="absolute top-[210px] right-[235px] w-[195px] z-20">
            <SlideIn from="right" delay={0.25}>
              <ReviewNote
                quote="Such a peaceful place! I felt relaxed the moment I walked in. The personalised care and calming environment made a real difference. Highly recommend!"
                author="Dilija"
                location="Chennai"
                tagline="Peaceful & calming"
                tilt={-2.5}
                variant="parchment"
                clipPosition="top-left"
              />
            </SlideIn>
          </div>

          {/* R4: Diabetes HbA1c Review Note (Tamil Nadu) */}
          <div className="absolute top-[200px] right-[15px] w-[205px] z-20">
            <SlideIn from="right" delay={0.3}>
              <ReviewNote
                quote="Managing chronic stress and diabetes for years left me exhausted. With Sameer’s reflexology and lifestyle guidance, my energy returned and my HbA1c showed consistent, positive progress."
                author="Verified Client"
                location="Tamil Nadu"
                tagline="Vitality restored"
                tilt={2.5}
                clipPosition="top-right"
              />
            </SlideIn>
          </div>

          {/* R5: Wright Review Note (America) */}
          <div className="absolute top-[410px] right-[155px] w-[205px] z-20">
            <SlideIn from="right" delay={0.35}>
              <ReviewNote
                quote="I was feeling quite stressed and mentally tired. Sameer took the time to understand what I was going through. The sessions were very calming, and I left feeling relaxed."
                author="Wright"
                location="America"
                tagline="People. Progress. Wellness."
                tilt={-2}
                clipPosition="top-left"
              />
            </SlideIn>
          </div>

          {/* R6: Wright & Sameer Polaroid Photo (Singapore) */}
          <div className="absolute top-[415px] right-[25px] w-[115px] z-20 hover:z-30">
            <SlideIn from="right" delay={0.4}>
              <PhotoPolaroid
                src="/assets/reviews/review-wright.webp"
                alt="Sameer with Wright from Singapore"
                caption="Singapore"
                tilt={3.5}
                clipPosition="top-left"
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto px-2">
            
            <FadeUp delay={0.12}>
              <PhotoPolaroid
                src="/assets/reviews/review-tala.webp"
                alt="Sameer with patient from Mauritius"
                caption="Mauritius"
                tilt={-2}
                clipPosition="top-left"
                className="max-w-[150px] mx-auto"
              />
            </FadeUp>

            <FadeUp delay={0.16}>
              <ReviewNote
                quote="Preparing for IVF was overwhelming. Working with Sameer helped reduce my stress and support my body naturally through the journey. So grateful for his guidance."
                author="Tala Rashid"
                location="Oman"
                tagline="Holistic support"
                tilt={1.5}
                clipPosition="top-right"
              />
            </FadeUp>

            <FadeUp delay={0.2}>
              <ReviewNote
                quote="I struggled with mood swings and insomnia for years. After foot reflexology sessions with Sameer, I saw a remarkable improvement in my symptoms. Truly grateful!"
                author="Nihaza"
                location="Sri Lanka"
                tagline="Remarkable improvement"
                tilt={-1.5}
                clipPosition="top-left"
              />
            </FadeUp>

            <FadeUp delay={0.24}>
              <PhotoPolaroid
                src="/assets/reviews/review-japan.webp"
                alt="Sameer with patient from Japan"
                caption="Japan"
                tilt={2}
                clipPosition="top-right"
                className="max-w-[150px] mx-auto"
              />
            </FadeUp>

            <FadeUp delay={0.28}>
              <ReviewNote
                quote="With severe knee pain and liver concerns, Sameer's integrative bodywork brought incredible relief. My mobility returned, and under my doctor's guidance, my liver medications were safely tapered!"
                author="Saradha Arjun"
                location="Karaikudi"
                tagline="Restored mobility"
                tilt={1.5}
                variant="parchment"
                clipPosition="top-right"
              />
            </FadeUp>

            <FadeUp delay={0.32}>
              <ReviewNote
                quote="Struggled with stress, insomnia, and leg pain from long hours at my IT company. Tension eased and sleep became deeply restful. Made a world of difference!"
                author="Verified Client"
                location="Chennai • IT"
                tagline="Deeply restful sleep"
                tilt={-1.5}
                clipPosition="top-left"
              />
            </FadeUp>

            <FadeUp delay={0.36}>
              <PhotoPolaroid
                src="/assets/reviews/review-choi.webp"
                alt="Sameer with Choi from Hong Kong"
                caption="Hong Kong"
                tilt={2.5}
                clipPosition="top-right"
                className="max-w-[150px] mx-auto"
              />
            </FadeUp>

            <FadeUp delay={0.4}>
              <ReviewNote
                quote="Dealing with neck and shoulder stiffness from long hours. The team took time to understand and explained clearly. I felt much more relaxed after sessions."
                author="Choi"
                location="Taiwan"
                tagline="Health Has No Borders."
                tilt={-2}
                clipPosition="top-left"
              />
            </FadeUp>

            <FadeUp delay={0.44}>
              <ReviewNote
                quote="Such a peaceful place! I felt relaxed the moment I walked in. The personalised care and calming environment made a real difference. Highly recommend!"
                author="Dilija"
                location="Chennai"
                tagline="Peaceful & calming"
                tilt={2}
                variant="parchment"
                clipPosition="top-left"
              />
            </FadeUp>

            <FadeUp delay={0.48}>
              <ReviewNote
                quote="Managing chronic stress and diabetes for years left me exhausted. With Sameer’s reflexology and lifestyle guidance, my energy returned and my HbA1c showed consistent, positive progress."
                author="Verified Client"
                location="Tamil Nadu"
                tagline="Vitality restored"
                tilt={-1.5}
                clipPosition="top-right"
              />
            </FadeUp>

            <FadeUp delay={0.52}>
              <PhotoPolaroid
                src="/assets/reviews/review-wright.webp"
                alt="Sameer with Wright from Singapore"
                caption="Singapore"
                tilt={-2.5}
                clipPosition="top-left"
                className="max-w-[150px] mx-auto"
              />
            </FadeUp>

            <FadeUp delay={0.56}>
              <ReviewNote
                quote="I was feeling quite stressed and mentally tired. Sameer took the time to understand what I was going through. The sessions were very calming, and I left feeling relaxed."
                author="Wright"
                location="America"
                tagline="People. Progress. Wellness."
                tilt={2}
                clipPosition="top-left"
              />
            </FadeUp>

          </div>

        </div>

        {/* Clinical Wellness & Health Outcomes Disclaimer */}
        <FadeUp delay={0.2} className="mt-12 sm:mt-16 max-w-4xl mx-auto p-4 sm:p-5 rounded-2xl bg-white/90 border border-[#E5E7EB] text-center space-y-1.5 shadow-sm">
          <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#8C5B41]">
            Clinical Wellness Disclaimer
          </p>
          <p className="text-[10.5px] sm:text-[11.5px] text-[#5A6351] font-sans leading-relaxed">
            Testimonials and patient reflections represent individual journeys; outcomes vary according to personal physiology, health history, and adherence. Mind Body Recovery provides complementary integrative therapies (acupuncture, cupping, reflexology, and Ayurvedic bodywork) to support natural vitality and bodily relaxation alongside conventional healthcare. These modalities do not replace medical diagnosis, prescription medications, or physician care. Always consult your medical doctor regarding medical conditions or medication alterations.
          </p>
        </FadeUp>

      </div>
    </section>
  );
};
