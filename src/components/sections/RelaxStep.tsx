"use client";

import React from "react";
import { BandageFrame } from "@/components/ui/BandageFrame";
import { NeuronSynapseGraph } from "@/components/ui/NeuronSynapseGraph";
import { NeuronMobileSynapseGraph } from "@/components/ui/NeuronMobileSynapseGraph";
import { NeuronHeadingConnector } from "@/components/ui/NeuronHeadingConnector";
import { ShapedImageNode } from "@/components/ui/ShapedImageNode";
import { clinicData } from "@/data/clinicData";
import { FadeUp, SlideIn, ZoomReveal, BlurReveal, StaggerReveal } from "@/components/ui/ScrollAnimations";

interface RelaxStepProps {
  onOpenAssessment: () => void;
}

export const RelaxStep: React.FC<RelaxStepProps> = ({ onOpenAssessment }) => {
  return (
    <section
      id="relax"
      className="relative py-24 lg:py-32 bg-[#0B0F07] text-[#F6F1E4] overflow-hidden border-t border-[#F6F1E4]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Top Step Header */}
        <div className="flex items-center space-x-4 mb-10 lg:mb-14">
          <div className="flex items-center space-x-2.5">
            <span className="w-7 h-7 rounded-full border border-[#C79A45]/60 bg-[#C79A45]/10 text-[#C79A45] flex items-center justify-center text-xs font-display font-medium">
              01
            </span>
            <span className="text-xs uppercase tracking-widest text-[#F6F1E4] font-medium">
              RELAX
            </span>
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-[#C79A45]/40 via-[#C79A45]/10 to-transparent" />
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative">
          {/* Dynamic Synaptic Wave Connector from Center Neuron Soma to Heading */}
          <NeuronHeadingConnector
            headingId="relax-heading-node"
            somaId="relax-soma"
            variant="dark"
            className="hidden md:block"
          />
          
          {/* Left Column: Narrative */}
          <SlideIn from="left" className="lg:col-span-4 space-y-6">
            <div>
              <BlurReveal delay={0.05}>
                <div className="flex items-center gap-3.5 mb-2 relative">
                  <h2 className="font-display text-5xl sm:text-6xl text-[#F6F1E4] font-semibold tracking-tight leading-[0.95]">
                    RELAX
                  </h2>
                  {/* Synaptic Terminal Bouton Anchor */}
                  <span
                    id="relax-heading-node"
                    className="relative flex items-center justify-center w-6 h-6 shrink-0"
                    title="Neural Synapse Terminal"
                  >
                    <span className="w-3.5 h-3.5 rounded-full bg-[#C79A45] shadow-[0_0_12px_#C79A45] animate-pulse" />
                    <span className="absolute w-1.5 h-1.5 rounded-full bg-white" />
                    <span className="absolute w-6 h-6 rounded-full border border-[#C79A45]/30 animate-ping opacity-75" />
                  </span>
                </div>
                <p className="font-sans text-2xl sm:text-3xl text-[#F6F1E4] font-light leading-snug">
                  {clinicData.relax.headline}
                </p>
              </BlurReveal>
            </div>

            <FadeUp delay={0.15}>
              <p className="text-sm sm:text-base text-[#F6F1E4]/85 font-sans leading-relaxed max-w-sm">
                {clinicData.relax.subhead}
              </p>
            </FadeUp>

            <FadeUp delay={0.22}>
              <div>
                <button
                  onClick={onOpenAssessment}
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-[#C79A45] hover:bg-[#D4A752] text-[#12140D] text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-md active:scale-95 group"
                >
                  <span>{clinicData.relax.cta}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </button>
              </div>
            </FadeUp>

            {/* Restorative Quote Card */}
            <FadeUp delay={0.3} className="pt-4 max-w-xs">
              <div className="p-5 rounded-xl border border-[#C79A45]/30 bg-[#12180E]/90 backdrop-blur-sm relative overflow-hidden">
                <p className="font-sans text-sm sm:text-base text-[#F6F1E4] leading-relaxed relative z-10">
                  Slow down. <br />
                  Everything you need is within you.
                </p>
              </div>
            </FadeUp>
          </SlideIn>

          {/* Right Column: Expanded Synapse Orbit Stage with Visibly Bigger Images */}
          <FadeUp delay={0.2} className="lg:col-span-8 relative">
            
            {/* Desktop Stage (840x640) */}
            <div className="relative w-full h-[640px] max-w-[840px] mx-auto hidden md:block">
              
              {/* Biological Neuron Dendritic Synapse Graph with Action Potential Animation */}
              <NeuronSynapseGraph variant="dark" />

              {/* VISIBLY BIGGER CENTER PHOTO: Dr. Sameer (Hero Rectangular Frame) */}
              <div id="relax-soma" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] z-20 flex flex-col items-center">
                <ZoomReveal delay={0.35}>
                  <BandageFrame
                    variant="gold"
                    tapeAngle={3}
                    tapePosition="top-left-bottom-right"
                    className="w-full shadow-2xl"
                    innerClassName="p-1.5 bg-[#12180E] border border-[#C79A45] rounded-xl"
                  >
                    <div className="relative w-full h-[230px] overflow-hidden bg-black flex items-center justify-center rounded-lg">
                      <img
                        src={clinicData.relax.centerImage}
                        alt="Dr. Sameer"
                        loading="lazy"
                        decoding="async"
                        className="max-w-full max-h-full object-contain filter saturate-95 contrast-105"
                      />
                      {/* Integrated Center Caption Badge (no bottom collision) */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-[#12180E]/90 backdrop-blur-sm border border-[#C79A45]/40 text-center max-w-[92%] shadow-md">
                        <span className="text-[10.5px] text-[#F6F1E4]/90 font-sans truncate block">
                          {clinicData.relax.centerCaption}
                        </span>
                      </div>
                    </div>
                  </BandageFrame>
                </ZoomReveal>
              </div>

              {/* SURROUNDING THERAPY NODES WITH DISTINCT HARMONIC SHAPES */}

              {/* 1. TOP: Shirodhara (Sanctuary Arch Shape) */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 z-30">
                <ShapedImageNode
                  shape="arch"
                  imageSrc="/assets/relax/shirodhara.webp"
                  imageAlt="Shirodhara"
                  label="Shirodhara"
                  variant="dark"
                  objectPosition="object-center"
                />
              </div>

              {/* 2. TOP LEFT: Quote */}
              <div className="absolute top-2 left-6 z-30">
                <div className="w-[145px] p-2.5 rounded-lg bg-[#141A10]/95 border border-[#C79A45]/30 text-left space-y-0.5 shadow-md">
                  <span className="text-[10px] text-[#93A579] font-medium block">Breathe In</span>
                  <p className="text-[11px] text-[#F6F1E4]/90 font-sans leading-tight">
                    Let go of what you can&apos;t control.
                  </p>
                </div>
              </div>

              {/* 3. TOP RIGHT: Quote */}
              <div className="absolute top-2 right-6 z-30">
                <div className="w-[145px] p-2.5 rounded-lg bg-[#141A10]/95 border border-[#C79A45]/30 text-left shadow-md">
                  <p className="font-sans text-[11px] text-[#F6F1E4] leading-tight">
                    Your body knows the way.
                  </p>
                </div>
              </div>

              {/* 4. LEFT: Cupping (Circular Harmonic Lens Shape) */}
              <div className="absolute top-1/2 -translate-y-1/2 left-[22px] z-30">
                <ShapedImageNode
                  shape="circle"
                  imageSrc="/assets/relax/cupping.webp"
                  imageAlt="Cupping"
                  label="Cupping"
                  variant="dark"
                  objectPosition="object-center"
                />
              </div>

              {/* 5. RIGHT: Foot Reflexology (Vertical Elongated Capsule Shape) */}
              <div className="absolute top-1/2 -translate-y-1/2 right-[32px] z-30">
                <ShapedImageNode
                  shape="capsule"
                  imageSrc="/assets/relax/foot-reflexology.webp"
                  imageAlt="Foot Reflexology"
                  label="Reflexology"
                  variant="dark"
                  objectPosition="object-center"
                />
              </div>

              {/* 6. BOTTOM: Podikizhi (Organic Rounded Squircle Shape) */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30">
                <ShapedImageNode
                  shape="squircle"
                  imageSrc="/assets/relax/Podikizhi.webp"
                  imageAlt="Podikizhi"
                  label="Podikizhi"
                  variant="dark"
                  objectPosition="object-top"
                />
              </div>

              {/* 7. BOTTOM LEFT: Quote */}
              <div className="absolute bottom-2 left-6 z-30">
                <div className="w-[145px] p-2.5 rounded-lg bg-[#141A10]/95 border border-[#C79A45]/30 text-left shadow-md">
                  <p className="font-sans text-[11px] text-[#F6F1E4] leading-tight">
                    Slow down. Everything you need is within you.
                  </p>
                </div>
              </div>

              {/* 8. BOTTOM RIGHT: Quote */}
              <div className="absolute bottom-2 right-6 z-30">
                <div className="w-[145px] p-2.5 rounded-lg bg-[#141A10]/95 border border-[#C79A45]/30 text-left shadow-md">
                  <p className="font-sans text-[11px] text-[#F6F1E4] leading-tight">
                    Relaxation is the foundation of healing.
                  </p>
                </div>
              </div>

            </div>

            {/* Mobile / Tablet View with Distinct Harmonic Shapes and Biological Synapse Graph */}
            <div className="md:hidden space-y-6 relative py-4">
              <NeuronMobileSynapseGraph variant="dark" />

              <div id="relax-soma-mobile" className="w-[280px] sm:w-[320px] mx-auto relative z-10">
                <ZoomReveal delay={0.08} blur={12}>
                  <BandageFrame variant="gold" className="w-full" caption={clinicData.relax.centerCaption}>
                    <div className="w-full h-[200px] overflow-hidden bg-black flex items-center justify-center rounded-lg">
                      <img
                        src={clinicData.relax.centerImage}
                        alt="Dr. Sameer"
                        loading="lazy"
                        decoding="async"
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </BandageFrame>
                </ZoomReveal>
              </div>

              <StaggerReveal staggerDelay={0.08} className="grid grid-cols-2 gap-4 place-items-center relative z-10">
                <ShapedImageNode
                  shape="arch"
                  imageSrc="/assets/relax/shirodhara.webp"
                  imageAlt="Shirodhara"
                  label="Shirodhara"
                  variant="dark"
                  isMobile
                />
                <ShapedImageNode
                  shape="circle"
                  imageSrc="/assets/relax/cupping.webp"
                  imageAlt="Cupping"
                  label="Cupping"
                  variant="dark"
                  isMobile
                />
                <ShapedImageNode
                  shape="capsule"
                  imageSrc="/assets/relax/foot-reflexology.webp"
                  imageAlt="Foot Reflexology"
                  label="Reflexology"
                  variant="dark"
                  isMobile
                />
                <ShapedImageNode
                  shape="squircle"
                  imageSrc="/assets/relax/Podikizhi.webp"
                  imageAlt="Podikizhi"
                  label="Podikizhi"
                  variant="dark"
                  objectPosition="object-top"
                  isMobile
                />
              </StaggerReveal>
            </div>

          </FadeUp>

        </div>

      </div>
    </section>
  );
};
