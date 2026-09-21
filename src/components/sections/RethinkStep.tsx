"use client";

import React from "react";
import { BandageFrame } from "@/components/ui/BandageFrame";
import { RethinkSynapseWeb } from "@/components/ui/RethinkSynapseWeb";
import { RethinkMobileSynapseWeb } from "@/components/ui/RethinkMobileSynapseWeb";
import { LassoImageNode } from "@/components/ui/LassoImageNode";
import { NeuronHeadingConnector } from "@/components/ui/NeuronHeadingConnector";
import { clinicData } from "@/data/clinicData";
import { FadeUp, SlideIn, ZoomReveal, BlurReveal, StaggerReveal } from "@/components/ui/ScrollAnimations";
import clsx from "clsx";

const RETHINK_NODES = [
  // 1. Cognitive Health Review (Top-Right: highest point on right - cy = 78)
  // HERO LARGE (150x140) - Sameer and client reviewing screen safely framed
  {
    imageSrc: "/assets/rethink/nodes/node-screen-review.webp",
    alt: "Sameer Cognitive Health & Data Review",
    shapeIndex: 0,
    width: 150,
    height: 140,
    tilt: 4,
    desktopPos: "top-[8px] right-[67px]",
    mobileSize: 120,
    objectPosition: "object-center",
  },
  // 2. Mindful Journaling & Reflection (Top-Left: dropped lower - cy = 118)
  // Compact (115x120) - mindful journaling safely framed
  {
    imageSrc: "/assets/rethink/nodes/node-journaling.webp",
    alt: "Personal Reflection & Mindful Inquiry",
    shapeIndex: 3,
    width: 115,
    height: 120,
    tilt: -6,
    desktopPos: "top-[58px] left-[30px]",
    mobileSize: 100,
    objectPosition: "object-center",
  },
  // 3. New Habits & Practice (Upper-Mid Right - cy = 223)
  // Medium (135x135) - handshake with yoga mat safely framed
  {
    imageSrc: "/assets/rethink/nodes/node-habits.webp",
    alt: "Building New Physical & Mindful Habits",
    shapeIndex: 1,
    width: 135,
    height: 135,
    tilt: -5,
    desktopPos: "top-[155px] right-[5px]",
    mobileSize: 110,
    objectPosition: "object-center",
  },
  // 5. Foot Reflexology Diagnostic (Mid-Left - cy = 330)
  // Medium-Tall (135x140) - reflexology diagnostic pressure point session
  {
    imageSrc: "/assets/rethink/nodes/node-reflexology.webp",
    alt: "Foot Reflexology Diagnostic Assessment",
    shapeIndex: 2,
    width: 135,
    height: 140,
    tilt: -7,
    desktopPos: "top-[260px] left-[62px]",
    mobileSize: 110,
    objectPosition: "object-center",
  },
  // 6. Craniosacral Somatic Release (Lower-Mid Right - cy = 405)
  // Medium (130x130) - craniosacral release safely framed
  {
    imageSrc: "/assets/rethink/nodes/node-craniosacral.webp",
    alt: "Craniosacral Somatic Alignment",
    shapeIndex: 4,
    width: 130,
    height: 130,
    tilt: 6,
    desktopPos: "top-[340px] right-[75px]",
    mobileSize: 110,
    objectPosition: "object-center",
  },
  // 7. Balcony Somatic Rest (Bottom-Left - cy = 565)
  // Compact-Medium (125x125) - Sameer crouching with client resting on balcony
  {
    imageSrc: "/assets/rethink/nodes/node-balcony-somatic.webp",
    alt: "Outdoor Somatic Inquiry & Rest",
    shapeIndex: 8,
    width: 125,
    height: 125,
    tilt: -6,
    desktopPos: "bottom-[122px] left-[12px]",
    mobileSize: 105,
    objectPosition: "object-center",
  },
  // 8. 1-on-1 Consultation Dialogue (Bottom-Right - cy = 625)
  // HERO LARGE (145x145) - Sameer 1-on-1 consultation desk dialogue
  {
    imageSrc: "/assets/rethink/nodes/node-consultation.webp",
    alt: "Sameer 1-on-1 Consultation Dialogue",
    shapeIndex: 7,
    width: 145,
    height: 145,
    tilt: 4,
    desktopPos: "bottom-[52px] right-[17px]",
    mobileSize: 115,
    objectPosition: "object-center",
  },
];

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
            <BlurReveal delay={0.05}>
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
            </BlurReveal>

            <FadeUp delay={0.15}>
              <p className="text-sm sm:text-base text-[#231F19]/85 font-sans leading-relaxed max-w-sm">
                {clinicData.rethink.subhead}
              </p>
            </FadeUp>

            <FadeUp delay={0.22}>
              <div>
                <a
                  href="#concerns"
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-[#C79A45] hover:bg-[#D4A752] text-[#12140D] text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-md active:scale-95 group"
                >
                  <span>{clinicData.rethink.cta}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
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
            
            {/* Desktop Stage (860x750): Uneven Scattered Constellation */}
            <div className="relative w-full h-[750px] max-w-[860px] mx-auto hidden md:block">
              
              {/* Biological Neuron Dendritic Synapse Graph connecting to all scattered nodes */}
              <RethinkSynapseWeb />

              {/* CENTER PHOTO: Consultation (Hero Rectangular Frame, NO Top/Bottom Black Space, Natural 16:9 Aspect) */}
              <div id="rethink-soma" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[360px] z-20 flex flex-col items-center">
                <BandageFrame
                  variant="light"
                  tapePosition="top-left-bottom-right"
                  className="w-full shadow-2xl"
                  innerClassName="p-1.5 bg-[#FFFFFF] border border-[#C79A45] rounded-xl"
                >
                  <ZoomReveal delay={0.35}>
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-[#181C14]">
                      <img
                        src="/assets/rethink/center-rethink-hero.webp"
                        alt="Sameer Consultation"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover filter saturate-95"
                      />
                      {/* Integrated Center Caption Badge */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-white/95 backdrop-blur-sm border border-[#C79A45]/50 text-center max-w-[92%] shadow-md">
                        <span className="text-[10.5px] text-[#231F19] font-sans truncate block font-medium">
                          Sameer guiding a 1-on-1 somatic inquiry session.
                        </span>
                      </div>
                    </div>
                  </ZoomReveal>
                </BandageFrame>
              </div>

              {/* 8 UNEVEN SCATTERED THERAPY NODES WITH ORGANIC LASSO CROP (NO NAME LABELS) */}
              {RETHINK_NODES.map((node) => (
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
                <div className="w-[145px] p-2.5 rounded-lg bg-[#FFFFFF] border border-[#C79A45]/40 text-left space-y-0.5 shadow-sm">
                  <p className="text-[10.5px] text-[#231F19]/90 font-sans leading-tight font-medium">
                    Make space for what heals you.
                  </p>
                </div>
              </div>

              <div className="absolute top-[70px] left-[475px] z-30 pointer-events-none">
                <div className="w-[145px] p-2.5 rounded-lg bg-[#FFFFFF] border border-[#C79A45]/40 text-left shadow-sm">
                  <p className="font-sans text-[10.5px] text-[#231F19] leading-tight font-medium">
                    Awareness is the first step.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-[40px] left-[225px] z-30 pointer-events-none">
                <div className="w-[145px] p-2.5 rounded-lg bg-[#FFFFFF] border border-[#C79A45]/40 text-left shadow-sm">
                  <p className="font-sans text-[10.5px] text-[#231F19] leading-tight font-medium">
                    Small shifts create big shifts.
                  </p>
                </div>
              </div>

            </div>

            {/* Mobile / Tablet View: Scattered Organic Constellation with Lasso Crop */}
            <div className="md:hidden relative py-4">
              {/* Biological Neuron Synapse Web for Mobile */}
              <RethinkMobileSynapseWeb />

              <div id="rethink-soma-mobile" className="w-[280px] sm:w-[320px] mx-auto relative z-20 mb-8">
                <BandageFrame
                  variant="light"
                  tapePosition="top-left-bottom-right"
                  className="w-full"
                  caption="Sameer guiding a 1-on-1 somatic inquiry session."
                >
                  <ZoomReveal delay={0.08} blur={12}>
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-[#181C14]">
                      <img
                        src="/assets/rethink/center-rethink-hero.webp"
                        alt="Sameer Consultation"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover filter saturate-95"
                      />
                    </div>
                  </ZoomReveal>
                </BandageFrame>
              </div>

              <StaggerReveal staggerDelay={0.05} className="grid grid-cols-2 sm:grid-cols-4 gap-4 place-items-center relative z-20 px-2 pt-2">
                {RETHINK_NODES.map((node, i) => (
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
