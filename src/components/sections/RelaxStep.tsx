"use client";

import React from "react";
import { BandageFrame } from "@/components/ui/BandageFrame";
import { RelaxSynapseWeb } from "@/components/ui/RelaxSynapseWeb";
import { NeuronMobileSynapseGraph } from "@/components/ui/NeuronMobileSynapseGraph";
import { NeuronHeadingConnector } from "@/components/ui/NeuronHeadingConnector";
import { LassoImageNode } from "@/components/ui/LassoImageNode";
import { clinicData } from "@/data/clinicData";
import { FadeUp, SlideIn, ZoomReveal, BlurReveal, StaggerReveal } from "@/components/ui/ScrollAnimations";
import clsx from "clsx";

const RELAX_NODES = [
  // 1. Shirodhara (Top-center: nestled above center frame - cy = 170)
  // HERO LARGE (150x135) - captures brass vessel, cascading oil stream, client forehead
  {
    imageSrc: "/assets/relax/nodes/node-shirodhara.webp",
    alt: "Ayurvedic Shirodhara Oil Cascade",
    shapeIndex: 0,
    width: 150,
    height: 135,
    tilt: 0,
    desktopPos: "top-[102px] left-[335px]",
    mobileSize: 120,
    objectPosition: "object-center",
  },
  // 2. Pulse Diagnosis (Upper-right: outer edge - cy = 218)
  // HERO LARGE (150x150) - Sameer head, clipboard, hands taking wrist pulse 100% visible
  {
    imageSrc: "/assets/relax/nodes/node-pulse.webp",
    alt: "Pulse Assessment & Nadi Pariksha",
    shapeIndex: 1,
    width: 150,
    height: 150,
    tilt: -4,
    desktopPos: "top-[145px] right-[5px]",
    mobileSize: 115,
    objectPosition: "object-center",
  },
  // 3. Podikizhi (Lower-left: under center frame - cy = 495)
  // HERO LARGE (145x140) - therapist head, Sameer, and scalp oil massage
  {
    imageSrc: "/assets/relax/nodes/node-podikizhi.webp",
    alt: "Podikizhi Herbal Scalp & Oil Therapy",
    shapeIndex: 2,
    width: 145,
    height: 140,
    tilt: 3,
    desktopPos: "top-[425px] left-[140px]",
    mobileSize: 115,
    objectPosition: "object-center",
  },
  // 4. Cupping Therapy (Mid-left: pulled inward - cy = 325)
  // Medium (135x135) - therapist in white shirt applying suction pump with cups on back
  {
    imageSrc: "/assets/relax/nodes/node-cupping.webp",
    alt: "Cupping Suction Decompression",
    shapeIndex: 3,
    width: 135,
    height: 135,
    tilt: -6,
    desktopPos: "top-[258px] left-[68px]",
    mobileSize: 110,
    objectPosition: "object-center",
  },
  // 5. Craniosacral Somatic Therapy (Lower-mid right - cy = 405)
  // Medium (130x130) - gentle craniosacral touch and resting face
  {
    imageSrc: "/assets/relax/nodes/node-craniosacral.webp",
    alt: "Craniosacral Somatic Release",
    shapeIndex: 4,
    width: 130,
    height: 130,
    tilt: 5,
    desktopPos: "top-[340px] right-[75px]",
    mobileSize: 110,
    objectPosition: "object-center",
  },
  // 6. Somatic Mat Movement (Bottom-center lowest point - cy = 680)
  // Medium-Wide (150x115) - wide aspect ratio frames instructor and client on mat
  {
    imageSrc: "/assets/relax/nodes/node-somatic.webp",
    alt: "Somatic Inquiry & Mat Movement",
    shapeIndex: 5,
    width: 150,
    height: 115,
    tilt: -2,
    desktopPos: "bottom-[12px] left-[378px]",
    mobileSize: 115,
    objectPosition: "object-center",
  },
  // 7. Clinical Facial Care & Therapies (Far top-left - cy = 123)
  // Compact (115x115) - Sameer, therapist, and client on table safely framed
  {
    imageSrc: "/assets/relax/nodes/node-acupuncture.webp",
    alt: "Clinical Facial & Restorative Care",
    shapeIndex: 6,
    width: 115,
    height: 115,
    tilt: 6,
    desktopPos: "top-[65px] left-[25px]",
    mobileSize: 100,
    objectPosition: "object-center",
  },
  // 8. Osteopathic Joint Mobilization (Top-right highest point - cy = 73)
  // Medium (125x125) - Sameer performing joint mobilization safely framed
  {
    imageSrc: "/assets/relax/nodes/node-joint-mobilization.webp",
    alt: "Sameer Joint & Articular Mobilization",
    shapeIndex: 9,
    width: 125,
    height: 125,
    tilt: 4,
    desktopPos: "top-[10px] right-[95px]",
    mobileSize: 105,
    objectPosition: "object-center",
  },
  // 9. Restorative Breathwork & Pranayama (Bottom-right - cy = 610)
  // Medium (120x120) - Nadi Shodhana breathwork
  {
    imageSrc: "/assets/relax/nodes/node-yoga-breath.webp",
    alt: "Restorative Pranayama & Breathwork",
    shapeIndex: 7,
    width: 120,
    height: 120,
    tilt: 3,
    desktopPos: "bottom-[80px] right-[30px]",
    mobileSize: 105,
    objectPosition: "object-center",
  },
];

interface RelaxStepProps {
  onOpenAssessment: () => void;
}

export const RelaxStep: React.FC<RelaxStepProps> = ({ onOpenAssessment }) => {
  return (
    <section
      id="relax"
      className="relative py-24 lg:py-32 bg-[#0B0F07] text-[#F6F1E4] overflow-hidden border-t border-[#F6F1E4]/10"
    >
      {/* Global SVG Clip-Path Definitions for Moon & Gibbous Lasso Shapes (Generous 80% viewing area) */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="lasso-moon-crescent" clipPathUnits="objectBoundingBox">
            <path d="M 0.50,0.03 C 0.88,0.03 0.98,0.25 0.98,0.50 C 0.98,0.75 0.88,0.97 0.50,0.97 C 0.30,0.78 0.22,0.65 0.22,0.50 C 0.22,0.35 0.30,0.22 0.50,0.03 Z" />
          </clipPath>
          <clipPath id="lasso-moon-gibbous" clipPathUnits="objectBoundingBox">
            <path d="M 0.50,0.03 C 0.70,0.22 0.78,0.35 0.78,0.50 C 0.78,0.65 0.70,0.78 0.50,0.97 C 0.12,0.97 0.02,0.75 0.02,0.50 C 0.02,0.25 0.12,0.03 0.50,0.03 Z" />
          </clipPath>
        </defs>
      </svg>
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
            
            {/* Desktop Stage (860x750): Uneven Scattered Constellation */}
            <div className="relative w-full h-[750px] max-w-[860px] mx-auto hidden md:block">
              
              {/* Biological Neuron Dendritic Synapse Graph connecting to all 10 scattered nodes */}
              <RelaxSynapseWeb />

              {/* CENTER PHOTO: Sameer (Hero Rectangular Frame, NO Top/Bottom Black Space, Natural 16:9 Aspect) */}
              <div id="relax-soma" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[360px] z-20 flex flex-col items-center">
                <ZoomReveal delay={0.35}>
                  <BandageFrame
                    variant="gold"
                    tapeAngle={3}
                    tapePosition="top-left-bottom-right"
                    className="w-full shadow-2xl"
                    innerClassName="p-1.5 bg-[#12180E] border border-[#C79A45] rounded-xl"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                      <img
                        src={clinicData.relax.centerImage}
                        alt="Sameer"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover filter saturate-95 contrast-105"
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

              {/* 10 UNEVEN SCATTERED THERAPY NODES WITH ORGANIC LASSO CROP (NO NAME LABELS) */}
              {RELAX_NODES.map((node) => (
                <div key={node.imageSrc} className={`absolute ${node.desktopPos} z-30`}>
                  <LassoImageNode
                    imageSrc={node.imageSrc}
                    imageAlt={node.alt}
                    shapeIndex={node.shapeIndex}
                    width={node.width}
                    height={node.height}
                    tiltDeg={node.tilt}
                    objectPosition={node.objectPosition}
                  />
                </div>
              ))}

              {/* Quiet Floating Quote Accents in Open Constellation Pockets - STAGGERED */}
              <div className="absolute top-[20px] left-[175px] z-30 pointer-events-none">
                <div className="w-[125px] p-2 rounded-lg bg-[#141A10]/95 border border-[#C79A45]/30 text-left shadow-md">
                  <span className="text-[9px] text-[#93A579] font-medium block">Breathe In</span>
                  <p className="text-[10px] text-[#F6F1E4]/90 font-sans leading-tight">
                    Let go of what you can&apos;t control.
                  </p>
                </div>
              </div>

              <div className="absolute top-[70px] left-[475px] z-30 pointer-events-none">
                <div className="w-[130px] p-2 rounded-lg bg-[#141A10]/95 border border-[#C79A45]/30 text-left shadow-md">
                  <p className="font-sans text-[10px] text-[#F6F1E4] leading-tight">
                    Your body knows the way.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-[40px] left-[225px] z-30 pointer-events-none">
                <div className="w-[135px] p-2 rounded-lg bg-[#141A10]/95 border border-[#C79A45]/30 text-left shadow-md">
                  <p className="font-sans text-[10px] text-[#F6F1E4] leading-tight">
                    Relaxation is the foundation of healing.
                  </p>
                </div>
              </div>

            </div>

            {/* Mobile / Tablet View: Scattered Organic Constellation with Lasso Crop */}
            <div className="md:hidden space-y-8 relative py-4">
              <div id="relax-soma-mobile" className="w-[280px] sm:w-[320px] mx-auto relative z-10">
                <ZoomReveal delay={0.08} blur={12}>
                  <BandageFrame variant="gold" className="w-full" caption={clinicData.relax.centerCaption}>
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
                      <img
                        src={clinicData.relax.centerImage}
                        alt="Sameer"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover filter saturate-95 contrast-105"
                      />
                    </div>
                  </BandageFrame>
                </ZoomReveal>
              </div>

              <StaggerReveal staggerDelay={0.05} className="grid grid-cols-2 sm:grid-cols-3 gap-4 place-items-center relative z-10 px-2 pt-2">
                {RELAX_NODES.map((node, i) => (
                  <div
                    key={node.imageSrc}
                    className={clsx(
                      "transition-transform duration-300",
                      i % 2 === 1 ? "translate-y-2.5" : "-translate-y-1"
                    )}
                  >
                    <LassoImageNode
                      imageSrc={node.imageSrc}
                      imageAlt={node.alt}
                      shapeIndex={node.shapeIndex}
                      width={node.mobileSize || 95}
                      height={node.mobileSize || 95}
                      tiltDeg={node.tilt}
                      objectPosition={node.objectPosition}
                    />
                  </div>
                ))}
              </StaggerReveal>
            </div>

          </FadeUp>

        </div>

      </div>
    </section>
  );
};
