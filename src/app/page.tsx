"use client";

import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import { ScrollProgressBar } from "@/components/ui/ScrollAnimations";
import { SynapticScrollSpine } from "@/components/ui/SynapticScrollSpine";
import { AssessmentModal } from "@/components/ui/AssessmentModal";
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

export default function HomePage() {
  const [assessmentModalOpen, setAssessmentModalOpen] = useState(false);
  const [initialConcern, setInitialConcern] = useState("");

  // Initialize Lenis smooth scroll with luxurious fluid momentum
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -14 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.4,
      infinite: false,
    });

    // Make lenis globally accessible for smooth anchor scrolling
    (window as unknown as { lenis: Lenis }).lenis = lenis;

    // Handle all internal anchor clicks through Lenis
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (href && href.startsWith("#") && href.length > 1) {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element as HTMLElement, { offset: -60, duration: 1.4 });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  const handleOpenAssessment = (concern: string = "") => {
    setInitialConcern(concern);
    setAssessmentModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-ink-950 text-parchment-50 selection:bg-gold-500/30 overflow-x-hidden">
      {/* Continuous Scroll-Driven Neuron Synaptic Spine (Flows from Top to End) */}
      <SynapticScrollSpine />

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

      {/* Section 9: Meet Dr. Sameer */}
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
