"use client";

import React from "react";
import { BandageFrame } from "@/components/ui/BandageFrame";
import { NeuronSynapseGraph } from "@/components/ui/NeuronSynapseGraph";
import { NeuronMobileSynapseGraph } from "@/components/ui/NeuronMobileSynapseGraph";
import { NeuronHeadingConnector } from "@/components/ui/NeuronHeadingConnector";
import { ShapedImageNode } from "@/components/ui/ShapedImageNode";
import { clinicData } from "@/data/clinicData";
import { FadeUp, SlideIn, ZoomReveal } from "@/components/ui/ScrollAnimations";

export const RethinkStep: React.FC = () => {
  return (
    <section
      id="rethink"
      className="relative py-24 lg:py-32 bg-[#FAFAFA] text-[#231F19] overflow-hidden border-t border-[#E5E7EB]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Top Step Header */}
        <div className="flex items-center space-x-4 mb-10 lg:mb-14">
          <div className="flex items-center space-x-2.5">
            <span className="w-7 h-7 rounded-full border border-[#C79A45]/80 bg-[#C79A45]/20 text-[#8C5B41] flex items-center justify-center text-xs font-display font-semibold">
              02
            </span>
            <span className="text-xs uppercase tracking-widest text-[#231F19] font-semibold">
              RETHINK
            </span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-[#C79A45]/50 via-[#C79A45]/20 to-transparent" />
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative">
          {/* Dynamic Synaptic Wave Connector from Center Neuron Soma to Heading */}
          <NeuronHeadingConnector
            headingId="rethink-heading-node"
            somaId="rethink-soma"
            variant="light"
            className="hidden md:block"
          />
          
          {/* Left Column: Narrative */}
          <SlideIn from="left" className="lg:col-span-4 space-y-6">
            <FadeUp delay={0.05}>
              <div>
                <div className="flex items-center gap-3.5 mb-2 relative">
                  <h2 className="font-display text-5xl sm:text-6xl text-[#231F19] font-semibold tracking-tight leading-[0.95]">
                    RETHINK
                  </h2>
                  {/* Synaptic Terminal Bouton Anchor */}
                  <span
                    id="rethink-heading-node"
                    className="relative flex items-center justify-center w-6 h-6 shrink-0"
                    title="Neural Synapse Terminal"
                  >
                    <span className="w-3.5 h-3.5 rounded-full bg-[#8C5B41] shadow-[0_0_12px_#8C5B41] animate-pulse" />
                    <span className="absolute w-1.5 h-1.5 rounded-full bg-white" />
                    <span className="absolute w-6 h-6 rounded-full border border-[#8C5B41]/30 animate-ping opacity-75" />
                  </span>
                </div>
                <p className="font-sans text-2xl sm:text-3xl text-[#231F19] font-light leading-snug">
                  {clinicData.rethink.headline}
                </p>
              </div>
            </FadeUp>

            <FadeUp delay={0.15}>
              <p className="text-sm sm:text-base text-[#231F19]/85 font-sans leading-relaxed max-w-sm">
                {clinicData.rethink.subhead}
              </p>
            </FadeUp>

            <FadeUp delay={0.22}>
              <div>
                <a
                  href="#concerns"
                  className="inline-block px-6 py-3 rounded-lg bg-[#C79A45] hover:bg-[#D4A752] text-[#12140D] text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md active:scale-95"
                >
                  {clinicData.rethink.cta}
                </a>
              </div>
            </FadeUp>

            {/* Restorative Quote Card */}
            <FadeUp delay={0.3} className="pt-4 max-w-xs">
              <div className="p-5 rounded-xl border border-[#C79A45]/40 bg-[#FFFFFF] shadow-sm relative overflow-hidden">
                <p className="font-sans text-sm sm:text-base text-[#231F19] leading-relaxed relative z-10 font-medium">
                  Rise Stronger Tomorrow. <br />
                  A journey inward. <br />
                  A life forward.
                </p>
              </div>
            </FadeUp>
          </SlideIn>

          {/* Right Column: Expanded Synapse Orbit Stage with Visibly Bigger Images */}
          <FadeUp delay={0.2} className="lg:col-span-8 relative">
            
            {/* Desktop Stage (840x640) */}
            <div className="relative w-full h-[640px] max-w-[840px] mx-auto hidden md:block">
              
              {/* Biological Neuron Dendritic Synapse Graph with Action Potential Animation */}
              <NeuronSynapseGraph variant="light" />

              {/* VISIBLY BIGGER CENTER PHOTO: Consultation (Hero Rectangular Frame) */}
              <div id="rethink-soma" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] z-20 flex flex-col items-center">
                <ZoomReveal delay={0.35}>
                  <BandageFrame
                    variant="light"
                    tapeAngle={-3}
                    tapePosition="top-right-bottom-left"
                    className="w-full shadow-xl"
                    innerClassName="p-1.5 bg-[#FFFFFF] border border-[#C79A45]"
                  >
                    <div className="relative w-full h-[230px] overflow-hidden bg-[#181C14] flex items-center justify-center rounded-lg">
                      <img
                        src={clinicData.rethink.centerImage}
                        alt="Consultation"
                        loading="lazy"
                        decoding="async"
                        className="max-w-full max-h-full object-contain filter saturate-95"
                      />
                      {/* Integrated Center Caption Badge */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm border border-[#C79A45]/50 text-center max-w-[92%] shadow-md">
                        <span className="text-[10.5px] text-[#231F19] font-sans truncate block font-medium">
                          {clinicData.rethink.centerCaption}
                        </span>
                      </div>
                    </div>
                  </BandageFrame>
                </ZoomReveal>
              </div>

              {/* SURROUNDING PILLAR NODES WITH DISTINCT HARMONIC SHAPES */}

              {/* 1. TOP: Reconnect (Sanctuary Arch Shape) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
                <ShapedImageNode
                  shape="arch"
                  imageSrc="/assets/rethink/reconnect.webp"
                  imageAlt="Reconnect"
                  label="Reconnect"
                  variant="light"
                  objectPosition="object-center"
                />
              </div>

              {/* 2. TOP LEFT: Quote */}
              <div className="absolute top-2 left-6 z-30">
                <div className="w-[145px] p-2.5 rounded-lg bg-[#FFFFFF] border border-[#C79A45]/40 text-left space-y-0.5 shadow-sm">
                  <p className="text-[11px] text-[#231F19]/90 font-sans leading-tight font-medium">
                    Make space for what heals you.
                  </p>
                </div>
              </div>

              {/* 3. TOP RIGHT: Quote */}
              <div className="absolute top-2 right-6 z-30">
                <div className="w-[145px] p-2.5 rounded-lg bg-[#FFFFFF] border border-[#C79A45]/40 text-left shadow-sm">
                  <p className="font-sans text-[11px] text-[#231F19] leading-tight font-medium">
                    Awareness is the first step.
                  </p>
                </div>
              </div>

              {/* 4. LEFT: Live Mindfully (Circular Harmonic Lens Shape) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[22px] z-30">
                <ShapedImageNode
                  shape="circle"
                  imageSrc="/assets/rethink/live-mindfully.webp"
                  imageAlt="Live Mindfully"
                  label="Live Mindfully"
                  variant="light"
                  objectPosition="object-center"
                />
              </div>

              {/* 5. RIGHT: Deeper Mind (Vertical Elongated Capsule Shape) */}
              <div className="absolute top-1/2 -translate-y-1/2 right-[32px] z-30">
                <ShapedImageNode
                  shape="capsule"
                  imageSrc="/assets/rethink/deeper-mind.webp"
                  imageAlt="Deeper Mind"
                  label="Deeper Mind"
                  variant="light"
                  objectPosition="object-center"
                />
              </div>

              {/* 6. BOTTOM: New Habits (Organic Rounded Squircle Shape) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30">
                <ShapedImageNode
                  shape="squircle"
                  imageSrc="/assets/rethink/new-habits.webp"
                  imageAlt="New Habits"
                  label="New Habits"
                  variant="light"
                  objectPosition="object-center"
                />
              </div>

              {/* 7. BOTTOM LEFT: Quote */}
              <div className="absolute bottom-2 left-6 z-30">
                <div className="w-[145px] p-2.5 rounded-lg bg-[#FFFFFF] border border-[#C79A45]/40 text-left shadow-sm">
                  <p className="font-sans text-[11px] text-[#231F19] leading-tight font-medium">
                    You are becoming.
                  </p>
                </div>
              </div>

              {/* 8. BOTTOM RIGHT: Quote */}
              <div className="absolute bottom-2 right-6 z-30">
                <div className="w-[145px] p-2.5 rounded-lg bg-[#FFFFFF] border border-[#C79A45]/40 text-left shadow-sm">
                  <p className="font-sans text-[11px] text-[#231F19] leading-tight font-medium">
                    Small shifts create big shifts.
                  </p>
                </div>
              </div>

            </div>

            {/* Mobile / Tablet View with Distinct Harmonic Shapes and Biological Synapse Graph */}
            <div className="md:hidden space-y-6 relative py-4">
              <NeuronMobileSynapseGraph variant="light" />

              <div id="rethink-soma-mobile" className="w-[280px] sm:w-[320px] mx-auto relative z-10">
                <BandageFrame variant="light" className="w-full" caption={clinicData.rethink.centerCaption}>
                  <div className="w-full h-[200px] overflow-hidden bg-[#181C14] flex items-center justify-center rounded-lg">
                    <img
                      src={clinicData.rethink.centerImage}
                      alt="Dr. Sameer Consultation"
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
                  imageSrc="/assets/rethink/reconnect.webp"
                  imageAlt="Reconnect"
                  label="Reconnect"
                  variant="light"
                  isMobile
                />
                <ShapedImageNode
                  shape="circle"
                  imageSrc="/assets/rethink/live-mindfully.webp"
                  imageAlt="Live Mindfully"
                  label="Live Mindfully"
                  variant="light"
                  isMobile
                />
                <ShapedImageNode
                  shape="capsule"
                  imageSrc="/assets/rethink/deeper-mind.webp"
                  imageAlt="Deeper Mind"
                  label="Deeper Mind"
                  variant="light"
                  isMobile
                />
                <ShapedImageNode
                  shape="squircle"
                  imageSrc="/assets/rethink/new-habits.webp"
                  imageAlt="New Habits"
                  label="New Habits"
                  variant="light"
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
