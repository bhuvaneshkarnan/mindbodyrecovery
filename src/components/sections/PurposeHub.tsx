"use client";

import React from "react";
import { motion } from "framer-motion";
import { BandageFrame } from "@/components/ui/BandageFrame";
import { FadeUp, BlurReveal } from "@/components/ui/ScrollAnimations";

// Center Featured Hero Photo: Dr. Sameer teaching at the whiteboard (media_1789555688592)
const CENTER_HERO = {
  id: "hero-center",
  image: "/assets/purpose/rsw_1300h_800-3-1.webp",
  alt: "Dr. Sameer Mentorship & Hands-on Clinical Training",
};

// 9 Surrounding Photos scattered unevenly around the center image
const TOP_PHOTOS = [
  {
    id: "top-left",
    image: "/assets/purpose/rsw_1300h_800-1.webp",
    alt: "Mind Body Recovery Mentorship & Training",
    rotation: -3.5,
    tapePosition: "top-left-bottom-right" as const,
    tapeAngle: 4.5,
    offsetClass: "lg:translate-y-2 lg:translate-x-12",
    widthClass: "max-w-[310px] sm:max-w-[330px]",
  },
  {
    id: "top-right",
    image: "/assets/purpose/rsw_1300h_800-10.webp",
    alt: "Hands-on Therapy Workshop & Certification",
    rotation: 3.2,
    tapePosition: "top-right-bottom-left" as const,
    tapeAngle: 3.8,
    offsetClass: "lg:translate-y-5 lg:-translate-x-12",
    widthClass: "max-w-[300px] sm:max-w-[320px]",
  },
];

const LEFT_PHOTOS = [
  {
    id: "left-top",
    image: "/assets/purpose/rsw_1300h_800-13.webp",
    alt: "Therapists Community Mentorship",
    rotation: 2.4,
    tapePosition: "top-center" as const,
    tapeAngle: 3.2,
    offsetClass: "lg:-translate-x-3 lg:-translate-y-2",
    widthClass: "max-w-[280px] sm:max-w-[300px]",
  },
  {
    id: "left-bottom",
    image: "/assets/purpose/rsw_1300h_800-21.webp",
    alt: "Community Health Outreach Mentorship",
    rotation: -2.8,
    tapePosition: "top-left-bottom-right" as const,
    tapeAngle: 4.0,
    offsetClass: "lg:translate-x-4 lg:translate-y-4",
    widthClass: "max-w-[290px] sm:max-w-[310px]",
  },
];

const RIGHT_PHOTOS = [
  {
    id: "right-top",
    image: "/assets/purpose/rsw_1300h_800-14.webp",
    alt: "Practical Bodywork Demonstration",
    rotation: -2.2,
    tapePosition: "top-right-bottom-left" as const,
    tapeAngle: 3.6,
    offsetClass: "lg:translate-x-3 lg:-translate-y-4",
    widthClass: "max-w-[280px] sm:max-w-[300px]",
  },
  {
    id: "right-bottom",
    image: "/assets/purpose/rsw_1300h_800-16.webp",
    alt: "Holistic Science Teaching & Graduation",
    rotation: 3.4,
    tapePosition: "top-left-bottom-right" as const,
    tapeAngle: 3.5,
    offsetClass: "lg:-translate-x-4 lg:translate-y-3",
    widthClass: "max-w-[290px] sm:max-w-[310px]",
  },
];

const BOTTOM_PHOTOS = [
  {
    id: "bottom-left",
    image: "/assets/purpose/rsw_1300h_800-17.webp",
    alt: "Academy Graduation & Certification",
    rotation: -3.0,
    tapePosition: "top-left-bottom-right" as const,
    tapeAngle: 4.2,
    offsetClass: "lg:translate-y-4 lg:translate-x-8",
    widthClass: "max-w-[300px] sm:max-w-[320px]",
  },
  {
    id: "bottom-center",
    image: "/assets/purpose/rsw_1300h_800-6-1.webp",
    alt: "Hands-on Practical Demonstration",
    rotation: 1.6,
    tapePosition: "top-center" as const,
    tapeAngle: 2.8,
    offsetClass: "lg:-translate-y-6",
    widthClass: "max-w-[320px] sm:max-w-[340px]",
  },
  {
    id: "bottom-right",
    image: "/assets/purpose/rsw_1300h_800-11.webp",
    alt: "Therapists Lineage & Clinical Standards",
    rotation: -2.5,
    tapePosition: "top-right-bottom-left" as const,
    tapeAngle: 3.8,
    offsetClass: "lg:translate-y-6 lg:-translate-x-6",
    widthClass: "max-w-[300px] sm:max-w-[320px]",
  },
];

export const PurposeHub: React.FC = () => {
  return (
    <section
      id="purpose"
      className="relative py-24 lg:py-36 bg-[#FAFAFA] text-[#231F19] overflow-hidden border-b border-[#E5E7EB]"
    >
      {/* Subtle organic ambient glows */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#C79A45]/5 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#93A579]/5 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Editorial Section Header */}
        <BlurReveal className="text-center max-w-4xl mx-auto mb-16 lg:mb-20 space-y-4 relative" blur={10}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#C79A45]/30 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C79A45] animate-pulse" />
            <span className="text-xs uppercase tracking-widest text-[#8C5B41] font-semibold">
              OUR PURPOSE IN ACTION
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl text-[#231F19] font-semibold italic tracking-tight leading-[1.12]">
            &ldquo;The hands that treat you also train the hands of others&rdquo;
          </h2>

          <p className="font-sans text-base sm:text-lg text-[#231F19]/70 font-light max-w-xl mx-auto">
            Knowledge shared. Hands empowered. Lives transformed.
          </p>
        </BlurReveal>

        {/* Scattered Organic Constellation Layout */}
        <div className="relative w-full">
          {/* 1. Top Scattered Tier (2 photos flanking above center) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mb-6 lg:-mb-4 items-end">
            <div className="col-span-1 lg:col-span-4 lg:col-start-2 flex justify-center lg:justify-end">
              <BlurReveal
                direction="down"
                delay={0.06}
                blur={14}
                className={`w-full ${TOP_PHOTOS[0].widthClass} ${TOP_PHOTOS[0].offsetClass} group relative z-10 hover:z-30`}
              >
                <div
                  style={{ transform: `rotate(${TOP_PHOTOS[0].rotation}deg)` }}
                  className="w-full transition-transform duration-500 ease-out group-hover:rotate-0 flex items-center justify-center"
                >
                  <BandageFrame
                    variant="light"
                    tapeAngle={TOP_PHOTOS[0].tapeAngle}
                    tapePosition={TOP_PHOTOS[0].tapePosition}
                    className="w-full shadow-md group-hover:shadow-2xl transition-shadow duration-500"
                    innerClassName="p-2 sm:p-2.5 bg-white border border-[#E5E7EB] rounded-2xl"
                  >
                    <div className="relative w-full aspect-[13/8] overflow-hidden rounded-xl bg-white flex items-center justify-center">
                      <img
                        src={TOP_PHOTOS[0].image}
                        alt={TOP_PHOTOS[0].alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover filter saturate-95 contrast-105 block rounded-lg"
                      />
                    </div>
                  </BandageFrame>
                </div>
              </BlurReveal>
            </div>

            <div className="col-span-1 lg:col-span-4 lg:col-start-8 flex justify-center lg:justify-start">
              <BlurReveal
                direction="down"
                delay={0.14}
                blur={14}
                className={`w-full ${TOP_PHOTOS[1].widthClass} ${TOP_PHOTOS[1].offsetClass} group relative z-10 hover:z-30`}
              >
                <div
                  style={{ transform: `rotate(${TOP_PHOTOS[1].rotation}deg)` }}
                  className="w-full transition-transform duration-500 ease-out group-hover:rotate-0 flex items-center justify-center"
                >
                  <BandageFrame
                    variant="light"
                    tapeAngle={TOP_PHOTOS[1].tapeAngle}
                    tapePosition={TOP_PHOTOS[1].tapePosition}
                    className="w-full shadow-md group-hover:shadow-2xl transition-shadow duration-500"
                    innerClassName="p-2 sm:p-2.5 bg-white border border-[#E5E7EB] rounded-2xl"
                  >
                    <div className="relative w-full aspect-[13/8] overflow-hidden rounded-xl bg-white flex items-center justify-center">
                      <img
                        src={TOP_PHOTOS[1].image}
                        alt={TOP_PHOTOS[1].alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover filter saturate-95 contrast-105 block rounded-lg"
                      />
                    </div>
                  </BandageFrame>
                </div>
              </BlurReveal>
            </div>
          </div>

          {/* 2. Middle Tier: Left Flank | CENTER HERO (BIGGER) | Right Flank */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-6 lg:-mb-4">
            {/* Left Flank (2 photos stacked unevenly) */}
            <div className="col-span-1 lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-6 lg:gap-10 items-center justify-center order-2 lg:order-1">
              {LEFT_PHOTOS.map((item, idx) => (
                <BlurReveal
                  key={item.id}
                  direction="left"
                  delay={0.08 * (idx + 1)}
                  blur={14}
                  className={`w-full ${item.widthClass} ${item.offsetClass} group relative z-10 hover:z-30`}
                >
                  <div
                    style={{ transform: `rotate(${item.rotation}deg)` }}
                    className="w-full transition-transform duration-500 ease-out group-hover:rotate-0 flex items-center justify-center"
                  >
                    <BandageFrame
                      variant="light"
                      tapeAngle={item.tapeAngle}
                      tapePosition={item.tapePosition}
                      className="w-full shadow-md group-hover:shadow-2xl transition-shadow duration-500"
                      innerClassName="p-2 sm:p-2.5 bg-white border border-[#E5E7EB] rounded-2xl"
                    >
                      <div className="relative w-full aspect-[13/8] overflow-hidden rounded-xl bg-white flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.alt}
                          loading="lazy"
                        decoding="async"
                          className="w-full h-full object-cover filter saturate-95 contrast-105 block rounded-lg"
                        />
                      </div>
                    </BandageFrame>
                  </div>
                </BlurReveal>
              ))}
            </div>

            {/* THE CENTER HERO PHOTO (BIGGER & ELEVATED) */}
            <div className="col-span-1 lg:col-span-6 flex justify-center order-1 lg:order-2 my-4 lg:my-0">
              <BlurReveal
                direction="up"
                delay={0.05}
                blur={16}
                scale={0.96}
                duration={0.95}
                className="w-full max-w-[560px] sm:max-w-[620px] lg:max-w-[660px] group relative z-20 hover:z-30"
              >
                <div
                  style={{ transform: "rotate(-0.8deg)" }}
                  className="w-full transition-transform duration-500 ease-out group-hover:rotate-0 flex items-center justify-center"
                >
                  <BandageFrame
                    variant="gold"
                    tapeAngle={2.5}
                    tapePosition="all-four"
                    className="w-full shadow-2xl shadow-black/15 group-hover:shadow-2xl transition-shadow duration-500"
                    innerClassName="p-3 sm:p-4 bg-white border-2 border-[#C79A45]/50 rounded-2xl sm:rounded-3xl"
                  >
                    <div className="relative w-full aspect-[13/8] overflow-hidden rounded-xl sm:rounded-2xl bg-white flex items-center justify-center shadow-inner">
                      <img
                        src={CENTER_HERO.image}
                        alt={CENTER_HERO.alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover filter saturate-100 contrast-105 block rounded-lg sm:rounded-xl"
                      />
                    </div>
                  </BandageFrame>
                </div>
              </BlurReveal>
            </div>

            {/* Right Flank (2 photos stacked unevenly) */}
            <div className="col-span-1 lg:col-span-3 flex flex-col sm:flex-row lg:flex-col gap-6 lg:gap-10 items-center justify-center order-3 lg:order-3">
              {RIGHT_PHOTOS.map((item, idx) => (
                <BlurReveal
                  key={item.id}
                  direction="right"
                  delay={0.08 * (idx + 1)}
                  blur={14}
                  className={`w-full ${item.widthClass} ${item.offsetClass} group relative z-10 hover:z-30`}
                >
                  <div
                    style={{ transform: `rotate(${item.rotation}deg)` }}
                    className="w-full transition-transform duration-500 ease-out group-hover:rotate-0 flex items-center justify-center"
                  >
                    <BandageFrame
                      variant="light"
                      tapeAngle={item.tapeAngle}
                      tapePosition={item.tapePosition}
                      className="w-full shadow-md group-hover:shadow-2xl transition-shadow duration-500"
                      innerClassName="p-2 sm:p-2.5 bg-white border border-[#E5E7EB] rounded-2xl"
                    >
                      <div className="relative w-full aspect-[13/8] overflow-hidden rounded-xl bg-white flex items-center justify-center">
                        <img
                          src={item.image}
                          alt={item.alt}
                          loading="lazy"
                        decoding="async"
                          className="w-full h-full object-cover filter saturate-95 contrast-105 block rounded-lg"
                        />
                      </div>
                    </BandageFrame>
                  </div>
                </BlurReveal>
              ))}
            </div>
          </div>

          {/* 3. Bottom Scattered Tier (3 photos scattered unevenly below center) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
            <div className="col-span-1 sm:col-span-1 lg:col-span-4 flex justify-center lg:justify-start">
              <BlurReveal
                direction="up"
                delay={0.06}
                blur={14}
                className={`w-full ${BOTTOM_PHOTOS[0].widthClass} ${BOTTOM_PHOTOS[0].offsetClass} group relative z-10 hover:z-30`}
              >
                <div
                  style={{ transform: `rotate(${BOTTOM_PHOTOS[0].rotation}deg)` }}
                  className="w-full transition-transform duration-500 ease-out group-hover:rotate-0 flex items-center justify-center"
                >
                  <BandageFrame
                    variant="light"
                    tapeAngle={BOTTOM_PHOTOS[0].tapeAngle}
                    tapePosition={BOTTOM_PHOTOS[0].tapePosition}
                    className="w-full shadow-md group-hover:shadow-2xl transition-shadow duration-500"
                    innerClassName="p-2 sm:p-2.5 bg-white border border-[#E5E7EB] rounded-2xl"
                  >
                    <div className="relative w-full aspect-[13/8] overflow-hidden rounded-xl bg-white flex items-center justify-center">
                      <img
                        src={BOTTOM_PHOTOS[0].image}
                        alt={BOTTOM_PHOTOS[0].alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover filter saturate-95 contrast-105 block rounded-lg"
                      />
                    </div>
                  </BandageFrame>
                </div>
              </BlurReveal>
            </div>

            <div className="col-span-1 sm:col-span-1 lg:col-span-4 flex justify-center">
              <BlurReveal
                direction="up"
                delay={0.12}
                blur={14}
                className={`w-full ${BOTTOM_PHOTOS[1].widthClass} ${BOTTOM_PHOTOS[1].offsetClass} group relative z-10 hover:z-30`}
              >
                <div
                  style={{ transform: `rotate(${BOTTOM_PHOTOS[1].rotation}deg)` }}
                  className="w-full transition-transform duration-500 ease-out group-hover:rotate-0 flex items-center justify-center"
                >
                  <BandageFrame
                    variant="light"
                    tapeAngle={BOTTOM_PHOTOS[1].tapeAngle}
                    tapePosition={BOTTOM_PHOTOS[1].tapePosition}
                    className="w-full shadow-md group-hover:shadow-2xl transition-shadow duration-500"
                    innerClassName="p-2 sm:p-2.5 bg-white border border-[#E5E7EB] rounded-2xl"
                  >
                    <div className="relative w-full aspect-[13/8] overflow-hidden rounded-xl bg-white flex items-center justify-center">
                      <img
                        src={BOTTOM_PHOTOS[1].image}
                        alt={BOTTOM_PHOTOS[1].alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover filter saturate-95 contrast-105 block rounded-lg"
                      />
                    </div>
                  </BandageFrame>
                </div>
              </BlurReveal>
            </div>

            <div className="col-span-1 sm:col-span-2 lg:col-span-4 flex justify-center lg:justify-end">
              <BlurReveal
                direction="up"
                delay={0.18}
                blur={14}
                className={`w-full ${BOTTOM_PHOTOS[2].widthClass} ${BOTTOM_PHOTOS[2].offsetClass} group relative z-10 hover:z-30`}
              >
                <div
                  style={{ transform: `rotate(${BOTTOM_PHOTOS[2].rotation}deg)` }}
                  className="w-full transition-transform duration-500 ease-out group-hover:rotate-0 flex items-center justify-center"
                >
                  <BandageFrame
                    variant="light"
                    tapeAngle={BOTTOM_PHOTOS[2].tapeAngle}
                    tapePosition={BOTTOM_PHOTOS[2].tapePosition}
                    className="w-full shadow-md group-hover:shadow-2xl transition-shadow duration-500"
                    innerClassName="p-2 sm:p-2.5 bg-white border border-[#E5E7EB] rounded-2xl"
                  >
                    <div className="relative w-full aspect-[13/8] overflow-hidden rounded-xl bg-white flex items-center justify-center">
                      <img
                        src={BOTTOM_PHOTOS[2].image}
                        alt={BOTTOM_PHOTOS[2].alt}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover filter saturate-95 contrast-105 block rounded-lg"
                      />
                    </div>
                  </BandageFrame>
                </div>
              </BlurReveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
