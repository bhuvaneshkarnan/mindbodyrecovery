"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { ScrollProgressBar } from "@/components/ui/ScrollAnimations";
// Page sections & components (bundled in unified payload to eliminate network chunk waterfalls)
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { RealStories } from "@/components/sections/RealStories";
import { ProofStats } from "@/components/sections/ProofStats";
import { PurposeHub } from "@/components/sections/PurposeHub";
import { RelaxStep } from "@/components/sections/RelaxStep";
import { RethinkStep } from "@/components/sections/RethinkStep";
import { ConcernPicker } from "@/components/sections/ConcernPicker";
import { RebuildRetreat } from "@/components/sections/RebuildRetreat";
import { MeetDoctor } from "@/components/sections/MeetDoctor";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/sections/Footer";
import { SynapticScrollSpine } from "@/components/ui/SynapticScrollSpine";
import { BackgroundAudio } from "@/components/ui/BackgroundAudio";

// Modal is kept client-only dynamic since it opens on user interaction
const AssessmentModal = dynamic(
  () => import("@/components/ui/AssessmentModal").then((mod) => mod.AssessmentModal),
  { ssr: false }
);

export default function HomePage() {
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  const [initialConcern, setInitialConcern] = useState("");

  // Native frictionless scrolling with instant 0ms responsiveness
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          const targetY = element.getBoundingClientRect().top + window.scrollY - 70;
          window.scrollTo({ top: targetY, behavior: "smooth" });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  const handleOpenAssessment = (concern: string = "") => {
    setInitialConcern(concern);
    setAssessmentModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-ink-950 text-parchment-50 selection:bg-gold-500/30 overflow-x-hidden">
      {/* Continuous Scroll-Driven Neuron Synaptic Spine (Flows from Top to End) */}
      <SynapticScrollSpine />

      {/* Ambient Low-Volume Background Audio with Floating Controls */}
      <BackgroundAudio />

      {/* Gold scroll progress bar across top */}
      <ScrollProgressBar />

      {/* Global Navigation */}
      <Navbar onOpenAssessment={() => handleOpenAssessment()} />

      {/* Section 1: Hero */}
      <Hero onOpenAssessment={() => handleOpenAssessment()} />

      {/* Section 2: Real Stories (Social Proof) */}
      <RealStories />

      {/* Section 3: Proof Stats & Full Team Photography */}
      <ProofStats />

      {/* Section 4: Purpose Hub - The hands that treat you also train hands */}
      <PurposeHub />

      {/* Section 5: Step 01 - RELAX */}
      <RelaxStep onOpenAssessment={() => handleOpenAssessment("Relaxation & Pain Relief")} />

      {/* Section 6: Step 02 - RETHINK */}
      <RethinkStep />

      {/* Section 7: Concern Picker - "We work with both" */}
      <ConcernPicker onSelectConcern={(concern) => handleOpenAssessment(concern)} />

      {/* Section 8: Step 03 - REBUILD (The 2-Day Retreat) */}
      <RebuildRetreat onOpenAssessment={() => handleOpenAssessment("2-Day Reset Retreat")} />

      {/* Section 9: Meet Sameer */}
      <MeetDoctor onOpenAssessment={() => handleOpenAssessment()} />

      {/* Section 11: Contact & Location */}
      <ContactSection onOpenAssessment={() => handleOpenAssessment()} />

      {/* Section 12: Footer */}
      <Footer />

      {/* Interactive Assessment Booking Modal */}
      <AssessmentModal
        isOpen={assessmentModalOpen}
        onClose={() => setAssessmentModalOpen(false)}
        initialConcern={initialConcern}
      />
    </main>
  );
}
