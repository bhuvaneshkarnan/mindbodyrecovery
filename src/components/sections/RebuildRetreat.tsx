"use client";

import React from "react";
import { BandageFrame } from "@/components/ui/BandageFrame";
import { NeuronSynapseGraph } from "@/components/ui/NeuronSynapseGraph";
import { NeuronMobileSynapseGraph } from "@/components/ui/NeuronMobileSynapseGraph";
import { NeuronHeadingConnector } from "@/components/ui/NeuronHeadingConnector";
import { ShapedImageNode } from "@/components/ui/ShapedImageNode";
import { clinicData } from "@/data/clinicData";
import { FadeUp, SlideIn, ZoomReveal } from "@/components/ui/ScrollAnimations";

interface RebuildRetreatProps {
  onOpenAssessment: () => void;
}

export const RebuildRetreat: React.FC<RebuildRetreatProps> = ({ onOpenAssessment }) => {
  return (
    <section
      id="rebuild"
      className="relative py-24 lg:py-32 bg-[#0D120A] text-[#F6F1E4] overflow-hidden border-t border-[#F6F1E4]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Top Step Header */}
        <div className="flex items-center space-x-4 mb-10 lg:mb-14">
          <div className="flex items-center space-x-2.5">
            <span className="w-7 h-7 rounded-full border border-[#C79A45]/60 bg-[#C79A45]/10 text-[#C79A45] flex items-center justify-center text-xs font-display font-medium">
              03
            </span>
            <span className="text-xs uppercase tracking-widest text-[#F6F1E4] font-medium">
              REBUILD
            </span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-[#C79A45]/40 via-[#C79A45]/10 to-transparent" />
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative">
          {/* Dynamic Synaptic Wave Connector from Center Neuron Soma to Heading */}
          <NeuronHeadingConnector
            headingId="rebuild-heading-node"
            somaId="rebuild-soma"
            variant="dark"
            className="hidden md:block"
          />
          
          {/* Left Column: Narrative */}
          <SlideIn from="left" className="lg:col-span-4 space-y-6">
            <FadeUp delay={0.05}>
              <div>
                <div className="flex items-center gap-3.5 mb-2 relative">
                  <h2 className="font-display text-5xl sm:text-6xl text-[#F6F1E4] font-semibold tracking-tight leading-[0.95]">
                    REBUILD
                  </h2>
                  {/* Synaptic Terminal Bouton Anchor */}
                  <span
                    id="rebuild-heading-node"
                    className="relative flex items-center justify-center w-6 h-6 shrink-0"
                    title="Neural Synapse Terminal"
                  >
                    <span className="w-3.5 h-3.5 rounded-full bg-[#C79A45] shadow-[0_0_12px_#C79A45] animate-pulse" />
                    <span className="absolute w-1.5 h-1.5 rounded-full bg-white" />
                    <span className="absolute w-6 h-6 rounded-full border border-[#C79A45]/30 animate-ping opacity-75" />
                  </span>
                </div>
                <p className="font-sans text-2xl sm:text-3xl text-[#F6F1E4] font-light leading-snug">
                  {clinicData.retreat.headline}
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-sm sm:text-base text-[#F6F1E4]/85 font-sans leading-relaxed max-w-sm">
                {clinicData.retreat.body}
              </p>
            </FadeUp>

            {/* 3 Metric Markers - Compact & Clean */}
            <FadeUp delay={0.2}>
              <div className="grid grid-cols-3 gap-2 max-w-sm py-2.5 px-3.5 rounded-lg bg-[#141A10]/90 border border-[#C79A45]/30">
                {clinicData.retreat.featureMarkers.map((marker, i) => (
                  <div key={i} className={`text-left ${i > 0 ? "border-l border-[#F6F1E4]/15 pl-2.5" : ""}`}>
                    <span className="font-display text-sm font-semibold text-[#F6F1E4] block leading-tight">
                      {marker.highlight}
                    </span>
                    <span className="text-[10px] text-[#C79A45] font-sans tracking-wide">
                      {marker.text}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.25}>
              <div>
                <button
                  onClick={onOpenAssessment}
                  className="px-6 py-3 rounded-lg bg-[#C79A45] hover:bg-[#D4A752] text-[#12140D] text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-lg active:scale-95"
                >
                  {clinicData.retreat.cta}
                </button>
              </div>
            </FadeUp>
          </SlideIn>

          {/* Right Column: Expanded Synapse Orbit Stage with Visibly Bigger Images */}
          <FadeUp delay={0.2} className="lg:col-span-8 relative">
            
            {/* Desktop Stage (840x640) */}
            <div className="relative w-full h-[640px] max-w-[840px] mx-auto hidden md:block">
              
              {/* Biological Neuron Dendritic Synapse Graph with Action Potential Animation */}
              <NeuronSynapseGraph variant="dark" />

              {/* VISIBLY BIGGER CENTER PHOTO: Sanctuary Facility (Hero Rectangular Frame) */}
              <div id="rebuild-soma" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] z-20 flex flex-col items-center">
                <ZoomReveal delay={0.35}>
                  <BandageFrame
                    variant="gold"
                    tapeAngle={3}
                    tapePosition="top-left-bottom-right"
                    className="w-full shadow-2xl"
                    innerClassName="p-1.5 bg-[#141A10] rounded-lg border border-[#C79A45] rounded-xl"
                  >
                    <div className="relative w-full h-[230px] overflow-hidden bg-black flex items-center justify-center rounded-lg">
                      <img
                        src={clinicData.retreat.centerImage}
                        alt="Sanctuary Living"
                        loading="lazy"
                        decoding="async"
                        className="max-w-full max-h-full object-contain filter saturate-95 contrast-105"
                      />
                      {/* Integrated Center Caption Badge */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#141A10]/90 backdrop-blur-sm border border-[#C79A45]/40 text-center max-w-[92%] shadow-md">
                        <span className="text-[10.5px] text-[#F6F1E4]/90 font-sans truncate block">
                          {clinicData.retreat.centerCaption}
                        </span>
                      </div>
                    </div>
                  </BandageFrame>
                </ZoomReveal>
              </div>

              {/* SURROUNDING PILLAR NODES WITH DISTINCT HARMONIC SHAPES */}

              {/* 1. TOP: Therapies (Sanctuary Arch Shape) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
                <ShapedImageNode
                  shape="arch"
                  imageSrc="/assets/rebuild/therapies.webp"
                  imageAlt="Therapies"
                  label="Therapies"
                  variant="dark"
                  objectPosition="object-center"
                />
              </div>

              {/* 2. TOP LEFT: Rejuvenate */}
              <div className="absolute top-2 left-6 z-30">
                <div className="w-[145px] p-2.5 rounded-lg bg-[#141A10]/95 border border-[#C79A45]/30 text-left space-y-0.5 shadow-md">
                  <p className="text-[11px] text-[#F6F1E4]/90 font-sans leading-tight">
                    Daily herbal bodywork & detox.
                  </p>
                </div>
              </div>

              {/* 3. TOP RIGHT: Balance */}
              <div className="absolute top-2 right-6 z-30">
                <div className="w-[145px] p-2.5 rounded-lg bg-[#141A10]/95 border border-[#C79A45]/30 text-left shadow-md">
                  <p className="font-sans text-[11px] text-[#F6F1E4] leading-tight">
                    Balance & energize vitality.
                  </p>
                </div>
              </div>

              {/* 4. LEFT: Peaceful Stay (Circular Harmonic Lens Shape) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[22px] z-30">
                <ShapedImageNode
                  shape="circle"
                  imageSrc="/assets/rebuild/peaceful-stay.webp"
                  imageAlt="Peaceful Stay"
                  label="Peaceful Stay"
                  variant="dark"
                  objectPosition="object-center"
                />
              </div>

              {/* 5. RIGHT: Yoga & Breath (Vertical Elongated Capsule Shape) */}
              <div className="absolute top-1/2 -translate-y-1/2 right-[32px] z-30">
                <ShapedImageNode
                  shape="capsule"
                  imageSrc="/assets/rebuild/yoga-breath.webp"
                  imageAlt="Yoga & Breathwork"
                  label="Yoga & Breath"
                  variant="dark"
                  objectPosition="object-center"
                />
              </div>

              {/* 6. BOTTOM: Sattvic Meals (Organic Rounded Squircle Shape) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30">
                <ShapedImageNode
                  shape="squircle"
                  imageSrc="/assets/rebuild/sattvic-meals.webp"
                  imageAlt="Sattvic Meals"
                  label="Sattvic Meals"
                  variant="dark"
                  objectPosition="object-center"
                />
              </div>

              {/* 7. BOTTOM LEFT: Cleanse */}
              <div className="absolute bottom-2 left-6 z-30">
                <div className="w-[145px] p-2.5 rounded-lg bg-[#141A10]/95 border border-[#C79A45]/30 text-left shadow-md">
                  <p className="font-sans text-[11px] text-[#F6F1E4] leading-tight">
                    Cleanse gut & ignite vitality.
                  </p>
                </div>
              </div>

              {/* 8. BOTTOM RIGHT: Return Stronger */}
              <div className="absolute bottom-2 right-6 z-30">
                <div className="w-[145px] p-2.5 rounded-lg bg-[#141A10]/95 border border-[#C79A45]/30 text-left shadow-md">
                  <p className="font-sans text-[11px] text-[#F6F1E4] leading-tight">
                    Return stronger to your life.
                  </p>
                </div>
              </div>

            </div>

            {/* Mobile / Tablet View with Distinct Harmonic Shapes and Biological Synapse Graph */}
            <div className="md:hidden space-y-6 relative py-4">
              <NeuronMobileSynapseGraph variant="dark" />

              <div id="rebuild-soma-mobile" className="w-[280px] sm:w-[320px] mx-auto relative z-10">
                <BandageFrame variant="gold" className="w-full" caption={clinicData.retreat.centerCaption}>
                  <div className="w-full h-[200px] overflow-hidden bg-black flex items-center justify-center rounded-lg">
                    <img
                      src={clinicData.retreat.centerImage}
                      alt="Sanctuary"
                      loading="lazy"
                      decoding="async"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                </BandageFrame>
              </div>

              <div className="grid grid-cols-2 gap-4 place-items-center relative z-10">
                <ShapedImageNode
                  shape="arch"
                  imageSrc="/assets/rebuild/therapies.webp"
                  imageAlt="Therapies"
                  label="Therapies"
                  variant="dark"
                  isMobile
                />
                <ShapedImageNode
                  shape="circle"
                  imageSrc="/assets/rebuild/peaceful-stay.webp"
                  imageAlt="Peaceful Stay"
                  label="Peaceful Stay"
                  variant="dark"
                  isMobile
                />
                <ShapedImageNode
                  shape="capsule"
                  imageSrc="/assets/rebuild/yoga-breath.webp"
                  imageAlt="Yoga & Breath"
                  label="Yoga & Breath"
                  variant="dark"
                  isMobile
                />
                <ShapedImageNode
                  shape="squircle"
                  imageSrc="/assets/rebuild/sattvic-meals.webp"
                  imageAlt="Sattvic Meals"
                  label="Sattvic Meals"
                  variant="dark"
                  isMobile
                />
              </div>
            </div>

          </FadeUp>

        </div>

      </div>
    </section>
  );
};
