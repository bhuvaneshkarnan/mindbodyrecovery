"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Volume2, VolumeX } from "lucide-react";
import { clinicData } from "@/data/clinicData";

interface HeroProps {
  onOpenAssessment: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenAssessment }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-start overflow-hidden bg-[#12140D] text-[#F6F1E4] pt-24 pb-16">
      {/* Background Video Montage with Clean, Lightweight Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={clinicData.hero.poster}
          className="w-full h-full object-cover opacity-90 filter saturate-100 contrast-105"
        >
          <source src={clinicData.hero.videoMontage} type="video/mp4" />
          <source src="/assets/hero/20260722_191757_1.mp4" type="video/mp4" />
        </video>

        {/* Minimal Directional Vignette for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#12140D]/80 via-[#12140D]/35 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#12140D]/65 via-transparent to-[#12140D]/20" />
      </div>

      {/* Main Content - Left Aligned */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start text-left">
        <div className="max-w-3xl">
          {/* Headline: Relax · Rethink · Rebuild (Title Case & Bigger) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-7xl text-[#F6F1E4] font-semibold italic tracking-tight leading-[1.05] mb-5 drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
          >
            Relax &middot; Rethink <br />
            Rebuild
          </motion.h1>

          {/* Subhead with Real Attributed Quote (Reduced size) */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="font-sans text-base sm:text-lg md:text-xl text-[#F6F1E4]/90 max-w-2xl leading-relaxed mb-8 font-light drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            &ldquo;{clinicData.hero.subhead}&rdquo;
          </motion.p>

          {/* Primary CTA Buttons (No Arrow on Primary CTA) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4 sm:gap-6"
          >
            <button
              onClick={onOpenAssessment}
              className="px-8 py-4 bg-[#C79A45] hover:bg-[#D4A752] text-[#12140D] font-semibold text-sm sm:text-base tracking-wide rounded-[1px] transition-all duration-300 flex items-center justify-center space-x-2.5 shadow-2xl active:scale-[0.98]"
            >
              <Calendar size={18} />
              <span>{clinicData.hero.cta}</span>
            </button>

            <a
              href="#purpose"
              className="text-xs uppercase tracking-widest text-[#F6F1E4] hover:text-[#C79A45] py-3 px-4 transition-colors text-center sm:text-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              Explore The Philosophy
            </a>
          </motion.div>
        </div>
      </div>

      {/* Video Audio Control */}
      <div className="absolute bottom-6 right-6 z-20 hidden sm:block">
        <button
          onClick={toggleSound}
          className="p-2.5 rounded-full bg-[#1B1E15]/80 border border-[#F6F1E4]/30 text-[#F6F1E4] hover:text-[#C79A45] transition-colors shadow-2xl backdrop-blur-md"
          aria-label={isMuted ? "Unmute video montage" : "Mute video"}
        >
          {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
        </button>
      </div>
    </section>
  );
};
