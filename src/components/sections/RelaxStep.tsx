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
  // 1. Shirodhara (Very close top-left: nestled snug right above the center frame)
  // Shape: Half Cut Dome (flat bottom, rounded arch dome)
  {
    imageSrc: "/assets/relax/shirodhara.webp",
    alt: "Ayurvedic Shirodhara Oil Cascade",
    shapeIndex: 0,
    width: 110,
    height: 100,
    tilt: 0,
    desktopPos: "top-[140px] left-[325px]",
    mobileSize: 105,
  },
  // 2. Pulse Diagnosis (Very close top-right: nestled snug at upper-right corner of center frame)
  // Shape: Crescent Moon Cut (concave inner lunar curve)
  {
    imageSrc: "/assets/relax/pulse.webp",
    alt: "Pulse Assessment & Nadi Pariksha",
    shapeIndex: 1,
    width: 100,
    height: 105,
    tilt: -8,
    desktopPos: "top-[215px] left-[635px]",
    mobileSize: 100,
  },
  // 3. Podikizhi (Very close lower-left: nestled snug at lower-left corner of center frame)
  // Shape: Vertical Half Cut (flat vertical left edge, dome right)
  {
    imageSrc: "/assets/relax/Podikizhi.webp",
    alt: "Podikizhi Herbal Pouch Therapy",
    shapeIndex: 2,
    width: 105,
    height: 100,
    tilt: 3,
    desktopPos: "top-[440px] left-[170px]",
    mobileSize: 100,
  },
  // 4. Cupping Therapy (Medium distance: mid-left)
  // Shape: Teardrop Cut (pointed corner apex, bulbous droplet body)
  {
    imageSrc: "/assets/relax/cupping.webp",
    alt: "Cupping Suction Decompression",
    shapeIndex: 3,
    width: 112,
    height: 112,
    tilt: -12,
    desktopPos: "top-[315px] left-[55px]",
    mobileSize: 105,
  },
  // 5. Foot Reflexology (Medium distance: mid-lower-right)
  // Shape: Botanical Leaf / Lens (two pointed opposite tips, two sweeping convex arcs)
  {
    imageSrc: "/assets/relax/foot-reflexology.webp",
    alt: "Foot Reflexology Acupressure",
    shapeIndex: 4,
    width: 108,
    height: 115,
    tilt: 15,
    desktopPos: "top-[410px] right-[45px]",
    mobileSize: 100,
  },
  // 6. Somatic Mat Movement (Medium distance: below center frame)
  // Shape: Cathedral Arch Window (dome top, straight vertical sides, flat bottom)
  {
    imageSrc: "/assets/relax/somatic-movement.webp",
    alt: "Somatic Inquiry & Mat Movement",
    shapeIndex: 5,
    width: 115,
    height: 100,
    tilt: -2,
    desktopPos: "bottom-[40px] left-[415px]",
    mobileSize: 105,
  },
  // 7. Clinical Facial Acupuncture (Far orbit: high upper-left)
  // Shape: Diagonal Sliced Wedge (sharp flat diagonal cut at top-right, rounded base)
  {
    imageSrc: "/assets/relax/file_0000000045d47206848bda62b98c5512.webp",
    alt: "Clinical Facial Acupuncture Care",
    shapeIndex: 6,
    width: 100,
    height: 105,
    tilt: 10,
    desktopPos: "top-[30px] left-[50px]",
    mobileSize: 95,
  },
  // 8. Osteopathic Joint Mobilization (Far orbit: high upper-right)
  // Shape: Waxing Gibbous Moon (curved crescent indent on left, wide convex belly right)
  {
    imageSrc: "/assets/relax/joint-mobilization.webp",
    alt: "Dr. Sameer Joint & Articular Mobilization",
    shapeIndex: 7,
    width: 100,
    height: 105,
    tilt: 6,
    desktopPos: "top-[35px] right-[35px]",
    mobileSize: 95,
  },
  // 9. Craniosacral Somatic Release (Far orbit: deep bottom-left)
  // Shape: Quarter Fan Cut (one sharp 90-degree corner, wide circular fan arc)
  {
    imageSrc: "/assets/relax/craniosacral.webp",
    alt: "Craniosacral Somatic Release",
    shapeIndex: 8,
    width: 100,
    height: 100,
    tilt: -10,
    desktopPos: "bottom-[35px] left-[35px]",
    mobileSize: 95,
  },
  // 10. Breathwork & Pranayama (Far orbit: deep bottom-right)
  // Shape: Inverted Half Cut Dome (flat top horizontal edge, round dome bottom)
  {
    imageSrc: "/assets/rebuild/yoga-breath.webp",
    alt: "Restorative Pranayama & Breathwork",
    shapeIndex: 9,
    width: 95,
    height: 95,
    tilt: 4,
    desktopPos: "bottom-[30px] right-[30px]",
    mobileSize: 95,
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
      {/* Global SVG Clip-Path Definitions for Moon & Gibbous Lasso Shapes */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <clipPath id="lasso-moon-crescent" clipPathUnits="objectBoundingBox">
            <path d="M 0.65,0.03 C 0.12,0.18 0.12,0.82 0.65,0.97 C 0.32,0.75 0.32,0.25 0.65,0.03 Z" />
          </clipPath>
          <clipPath id="lasso-moon-gibbous" clipPathUnits="objectBoundingBox">
            <path d="M 0.50,0.03 C 0.90,0.03 0.98,0.25 0.98,0.50 C 0.98,0.75 0.90,0.97 0.50,0.97 C 0.28,0.80 0.18,0.65 0.18,0.50 C 0.18,0.35 0.28,0.20 0.50,0.03 Z" />
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

              {/* CENTER PHOTO: Dr. Sameer (Hero Rectangular Frame, NO Top/Bottom Black Space, Natural 16:9 Aspect) */}
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
                        alt="Dr. Sameer"
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
                  />
                </div>
              ))}

              {/* Quiet Floating Quote Accents in Open Constellation Pockets */}
              <div className="absolute top-8 left-[175px] z-30 pointer-events-none">
                <div className="w-[125px] p-2 rounded-lg bg-[#141A10]/95 border border-[#C79A45]/30 text-left shadow-md">
                  <span className="text-[9px] text-[#93A579] font-medium block">Breathe In</span>
                  <p className="text-[10px] text-[#F6F1E4]/90 font-sans leading-tight">
                    Let go of what you can&apos;t control.
                  </p>
                </div>
              </div>

              <div className="absolute top-8 left-[495px] z-30 pointer-events-none">
                <div className="w-[130px] p-2 rounded-lg bg-[#141A10]/95 border border-[#C79A45]/30 text-left shadow-md">
                  <p className="font-sans text-[10px] text-[#F6F1E4] leading-tight">
                    Your body knows the way.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-8 left-[255px] z-30 pointer-events-none">
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
                        alt="Dr. Sameer"
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
