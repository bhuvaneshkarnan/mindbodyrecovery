"use client";

import React, { useRef, useState, useEffect } from "react";
import { Calendar } from "lucide-react";
import { clinicData } from "@/data/clinicData";

interface HeroProps {
  onOpenAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAssessment }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Guarantee immediate autoplay across mobile Safari, iOS Low Power Mode, and Android Chrome
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    video.defaultMuted = true;
    video.playsInline = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "true");

    const handlePlaySuccess = () => {
      setVideoLoaded(true);
    };

    const tryPlay = () => {
      if (!video) return;
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(handlePlaySuccess).catch(() => {
          // If initially blocked by mobile browser (e.g. Low Power Mode), wait for first touch/scroll
        });
      }
    };

    // Ensure source media query is evaluated and loaded by mobile WebKit
    video.load();
    tryPlay();

    // User gesture fallback for mobile devices that restrict initial auto-execution
    const onUserInteraction = () => {
      tryPlay();
      cleanupListeners();
    };

    const cleanupListeners = () => {
      window.removeEventListener("touchstart", onUserInteraction);
      window.removeEventListener("pointerdown", onUserInteraction);
      window.removeEventListener("scroll", onUserInteraction);
      window.removeEventListener("click", onUserInteraction);
    };

    window.addEventListener("touchstart", onUserInteraction, { passive: true, once: true });
    window.addEventListener("pointerdown", onUserInteraction, { passive: true, once: true });
    window.addEventListener("scroll", onUserInteraction, { passive: true, once: true });
    window.addEventListener("click", onUserInteraction, { passive: true, once: true });

    return () => {
      cleanupListeners();
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] min-h-screen flex items-center justify-start overflow-hidden bg-[#12140D] text-[#F6F1E4] pt-24 pb-16"
    >
      {/* 1. Instant High-Priority Poster (Critical LCP Image - Paints in < 200ms) */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/hero/hero-poster.webp"
          alt="Mind Body Recovery Sanctuary"
          fetchPriority="high"
          decoding="sync"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-90 filter saturate-100 contrast-105"
        />

        {/* 2. Instant Background Video Montage (Mobile + FastStart Desktop) */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          onLoadedData={() => setVideoLoaded(true)}
          onCanPlay={() => setVideoLoaded(true)}
          onPlaying={() => setVideoLoaded(true)}
          onTimeUpdate={() => setVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover filter saturate-100 contrast-105 transition-opacity duration-500 ${
            videoLoaded ? "opacity-90" : "opacity-0"
          }`}
        >
          <source src="/assets/hero/hero-mobile.mp4" media="(max-width: 768px)" type="video/mp4" />
          <source src="/assets/hero/hero-main-opt.mp4" type="video/mp4" />
          <track kind="captions" srcLang="en" label="English" default={false} />
        </video>

        {/* Dedicated Top Gradient Scrim to guarantee crystal-clear header visibility */}
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-[#12140D]/95 via-[#12140D]/60 to-transparent pointer-events-none z-10" />

        {/* Directional Vignettes for Hero Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#12140D]/85 via-[#12140D]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12140D]/75 via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Main Content - Left Aligned (Pure CSS animations, zero hydration layout shift) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start text-left">
        <div className="max-w-3xl">
          {/* Headline: Relax · Rethink · Rebuild */}
          <h1 className="hero-title font-display text-4xl sm:text-6xl md:text-7xl lg:text-7xl text-[#F6F1E4] font-semibold italic tracking-tight leading-[1.05] mb-5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            Relax &middot; Rethink <br />
            Rebuild
          </h1>

          {/* Subhead with Real Attributed Quote */}
          <p className="hero-subtitle font-sans text-base sm:text-lg md:text-xl text-[#F6F1E4]/90 max-w-2xl leading-relaxed mb-8 font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            &ldquo;{clinicData.hero.subhead}&rdquo;
          </p>

          {/* Primary CTA Buttons (Clean, Compact, Rounded-xl style matching mockup) */}
          <div className="hero-cta-group flex flex-row flex-wrap items-center justify-start gap-3 sm:gap-4">
            <button
              onClick={onOpenAssessment}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 bg-white hover:bg-[#F6F1E4] text-[#12140D] font-semibold text-xs sm:text-sm uppercase tracking-wider rounded-xl transition-all duration-300 shadow-xl hover:shadow-[0_8px_24px_rgba(255,255,255,0.22)] active:scale-[0.97] group border border-white"
            >
              <Calendar size={15} className="text-[#12140D] transition-transform duration-300 group-hover:scale-110 shrink-0" />
              <span>{clinicData.hero.cta}</span>
              <span className="font-sans text-sm transition-transform duration-300 group-hover:translate-x-1 shrink-0">&rarr;</span>
            </button>

            <a
              href="#purpose"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl border border-[#F6F1E4]/25 hover:border-white/60 bg-white/5 hover:bg-white/10 text-[#F6F1E4] hover:text-white text-xs sm:text-sm uppercase tracking-wider font-medium transition-all duration-300 backdrop-blur-md active:scale-[0.97] group"
            >
              <span>Explore Philosophy</span>
              <span className="text-xs transition-transform duration-300 group-hover:translate-x-1 opacity-70">&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
