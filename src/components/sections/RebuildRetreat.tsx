"use client";

import React from "react";
import { BandageFrame } from "@/components/ui/BandageFrame";
import { RebuildSynapseWeb } from "@/components/ui/RebuildSynapseWeb";
import { LassoImageNode } from "@/components/ui/LassoImageNode";
import { NeuronHeadingConnector } from "@/components/ui/NeuronHeadingConnector";
import { clinicData } from "@/data/clinicData";
import { FadeUp, SlideIn, ZoomReveal, BlurReveal, StaggerReveal } from "@/components/ui/ScrollAnimations";
import clsx from "clsx";

interface RebuildRetreatProps {
  onOpenAssessment: () => void;
}

const REBUILD_NODES = [
  // 1. Retreat Welcome / Block A (Top-Right - cy = 80)
  // Medium Tall Dome (125x135) - captures two guests walking into Block A
  {
    imageSrc: "/assets/rebuild/nodes/node-block-a.webp",
    alt: "Sanctuary Block A Living & Facility Welcome",
    shapeIndex: 0,
    width: 125,
    height: 135,
    tilt: 3,
    desktopPos: "top-[12px] right-[85px]",
    mobileSize: 110,
    objectPosition: "object-[48%_38%]",
  },
  // 2. Ayurvedic Retreat Bodywork (Top-Left - cy = 115)
  // HERO LARGE (155x150) - clearly shows therapist in white, therapist in red, and client's facial massage
  {
    imageSrc: "/assets/rebuild/nodes/node-therapies.webp",
    alt: "Retreat Herbal Oil Bodywork on Droni Table",
    shapeIndex: 7,
    width: 155,
    height: 150,
    tilt: -4,
    desktopPos: "top-[40px] left-[15px]",
    mobileSize: 120,
    objectPosition: "object-[45%_55%]",
  },
  // 3. Shirodhara Stream (Top-Center - cy = 150)
  // HERO LARGE (155x140) - captures hanging brass pot, cascading oil, therapist, and client's forehead
  {
    imageSrc: "/assets/rebuild/nodes/node-shirodhara.webp",
    alt: "Ayurvedic Shirodhara Oil Cascade",
    shapeIndex: 5,
    width: 155,
    height: 140,
    tilt: 0,
    desktopPos: "top-[80px] left-[345px]",
    mobileSize: 120,
    objectPosition: "object-[50%_35%]",
  },
  // 4. Pulse Assessment & Clinical Review (Upper-Mid Right - cy = 230)
  // HERO LARGE (150x150) - Sameer's face, focused eyes, clipboard writing, and wrist pulse diagnostic 100% visible
  {
    imageSrc: "/assets/rebuild/nodes/node-pulse-assessment.webp",
    alt: "Pulse Assessment & Clinical Diagnostic Review",
    shapeIndex: 1,
    width: 150,
    height: 150,
    tilt: -3,
    desktopPos: "top-[155px] right-[10px]",
    mobileSize: 115,
    objectPosition: "object-[50%_25%]",
  },
  // 5. Cupping Decompression (Mid-Left - cy = 328)
  // Medium (130x135) - therapist's focused face and cupping suction on back clearly framed
  {
    imageSrc: "/assets/rebuild/nodes/node-cupping.webp",
    alt: "Cupping Suction Decompression",
    shapeIndex: 3,
    width: 130,
    height: 135,
    tilt: -5,
    desktopPos: "top-[260px] left-[50px]",
    mobileSize: 110,
    objectPosition: "object-[55%_35%]",
  },
  // 6. Somatic Movement Alignment (Lower-Mid Right - cy = 418)
  // Medium Wide (145x115) - wide aspect ratio shows both instructor crouching and participant on red mat
  {
    imageSrc: "/assets/rebuild/nodes/node-somatic-mat.webp",
    alt: "Somatic Movement & Posture Alignment",
    shapeIndex: 4,
    width: 145,
    height: 115,
    tilt: 4,
    desktopPos: "top-[360px] right-[65px]",
    mobileSize: 110,
    objectPosition: "object-[45%_50%]",
  },
  // 7. Outdoor Somatic Rest Under Garden Trees (Bottom-Left - cy = 572)
  // Compact (115x115) - Sameer crouched guiding client resting peacefully on outdoor terrace
  {
    imageSrc: "/assets/rebuild/nodes/node-outdoor-terrace.webp",
    alt: "Sanctuary Outdoor Somatic Rest Under Garden Trees",
    shapeIndex: 8,
    width: 115,
    height: 115,
    tilt: -4,
    desktopPos: "bottom-[120px] left-[25px]",
    mobileSize: 100,
    objectPosition: "object-[35%_35%]",
  },
  // 8. Morning Pranayama & Breathwork (Bottom-Right - cy = 630)
  // Compact-Medium (120x120) - instructor demonstrating Nadi Shodhana with thumb on nostril clearly framed on left
  {
    imageSrc: "/assets/rebuild/nodes/node-yoga-breath.webp",
    alt: "Morning Pranayama & Restorative Breathwork",
    shapeIndex: 2,
    width: 120,
    height: 120,
    tilt: 3,
    desktopPos: "bottom-[60px] right-[40px]",
    mobileSize: 105,
    objectPosition: "object-[30%_30%]",
  },
];

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
            <BlurReveal delay={0.05}>
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
            </BlurReveal>

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
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-[#C79A45] hover:bg-[#D4A752] text-[#12140D] text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-lg active:scale-95 group"
                >
                  <span>{clinicData.retreat.cta}</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                </button>
              </div>
            </FadeUp>
          </SlideIn>

          {/* Right Column: Expanded Synapse Orbit Stage with Visibly Bigger Images */}
          <FadeUp delay={0.2} className="lg:col-span-8 relative">
            
            {/* Desktop Stage (860x750): Uneven Scattered Constellation */}
            <div className="relative w-full h-[750px] max-w-[860px] mx-auto hidden md:block">
              
              {/* Biological Neuron Dendritic Synapse Graph connecting to all scattered nodes */}
              <RebuildSynapseWeb />

              {/* CENTER PHOTO: Sanctuary Facility (Hero Rectangular Frame, NO Top/Bottom Black Space, Natural 16:9 Aspect) */}
              <div id="rebuild-soma" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[360px] z-20 flex flex-col items-center">
                <ZoomReveal delay={0.35}>
                  <BandageFrame
                    variant="gold"
                    tapeAngle={3}
                    tapePosition="top-left-bottom-right"
                    className="w-full shadow-2xl"
                    innerClassName="p-1.5 bg-[#141A10] border border-[#C79A45] rounded-xl"
                  >
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-black">
                      <img
                        src="/assets/rebuild/center-rebuild-hero.webp"
                        alt="Sanctuary Living"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover filter saturate-95 contrast-105"
                      />
                      {/* Integrated Center Caption Badge (Positioned over tree foliage to keep person unobstructed) */}
                      <div className="absolute bottom-2.5 left-3 px-3.5 py-0.5 rounded-full bg-[#141A10]/90 backdrop-blur-sm border border-[#C79A45]/40 text-left max-w-[70%] shadow-md">
                        <span className="text-[10.5px] text-[#F6F1E4]/90 font-sans truncate block">
                          The 2-Day Reset Sanctuary Retreat.
                        </span>
                      </div>
                    </div>
                  </BandageFrame>
                </ZoomReveal>
              </div>

              {/* 8 UNEVEN SCATTERED THERAPY NODES WITH ORGANIC LASSO CROP (NO NAME LABELS) */}
              {REBUILD_NODES.map((node) => (
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
              <div className="absolute top-[18px] left-[185px] z-30 pointer-events-none">
                <div className="w-[145px] p-2.5 rounded-lg bg-[#141A10]/95 border border-[#C79A45]/30 text-left space-y-0.5 shadow-md">
                  <p className="text-[10.5px] text-[#F6F1E4]/90 font-sans leading-tight">
                    Daily herbal bodywork & detox.
                  </p>
                </div>
              </div>

              <div className="absolute top-[65px] left-[520px] z-30 pointer-events-none">
                <div className="w-[145px] p-2.5 rounded-lg bg-[#141A10]/95 border border-[#C79A45]/30 text-left shadow-md">
                  <p className="font-sans text-[10.5px] text-[#F6F1E4] leading-tight">
                    Balance & energize vitality.
                  </p>
                </div>
              </div>

              <div className="absolute bottom-[35px] left-[260px] z-30 pointer-events-none">
                <div className="w-[145px] p-2.5 rounded-lg bg-[#141A10]/95 border border-[#C79A45]/30 text-left shadow-md">
                  <p className="font-sans text-[10.5px] text-[#F6F1E4] leading-tight">
                    Return stronger to your life.
                  </p>
                </div>
              </div>

            </div>

            {/* Mobile / Tablet View: Scattered Organic Constellation with Lasso Crop */}
            <div className="md:hidden space-y-8 relative py-4">
              <div id="rebuild-soma-mobile" className="w-[280px] sm:w-[320px] mx-auto relative z-10">
                <ZoomReveal delay={0.08} blur={12}>
                  <BandageFrame variant="gold" className="w-full" caption="The 2-Day Reset Sanctuary Retreat.">
                    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-black">
                      <img
                        src="/assets/rebuild/center-rebuild-hero.webp"
                        alt="Sanctuary"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </BandageFrame>
                </ZoomReveal>
              </div>

              <StaggerReveal staggerDelay={0.05} className="grid grid-cols-2 sm:grid-cols-4 gap-4 place-items-center relative z-10 px-2 pt-2">
                {REBUILD_NODES.map((node, i) => (
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
