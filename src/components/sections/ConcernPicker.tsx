"use client";

import React, { useState } from "react";
import { clinicData } from "@/data/clinicData";
import { Moon, Brain, Zap, Activity } from "lucide-react";
import clsx from "clsx";
import { FadeUp, StaggerReveal } from "@/components/ui/ScrollAnimations";

interface ConcernPickerProps {
  onSelectConcern: (concernTitle: string) => void;
}

export const ConcernPicker: React.FC<ConcernPickerProps> = ({ onSelectConcern }) => {
  const [selectedId, setSelectedId] = useState<string>(clinicData.concerns.cards[0].id);

  const getConcernIcon = (id: string) => {
    switch (id) {
      case "sleep":
        return <Moon size={22} className="text-[#C79A45]" />;
      case "stress":
        return <Brain size={22} className="text-[#C79A45]" />;
      case "fatigue":
        return <Zap size={22} className="text-[#C79A45]" />;
      case "pain":
        return <Activity size={22} className="text-[#C79A45]" />;
      default:
        return <Moon size={22} className="text-[#C79A45]" />;
    }
  };

  const activeCard = clinicData.concerns.cards.find((c) => c.id === selectedId) || clinicData.concerns.cards[0];

  return (
    <section id="concerns" className="relative py-32 bg-[#F4F4F6] text-[#231F19] overflow-hidden border-b border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        
        {/* Section Header */}
        <FadeUp className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#231F19] font-semibold tracking-tight mb-4 leading-[1.1]">
            {clinicData.concerns.lead}
          </h2>
          <p className="font-sans text-xl sm:text-2xl text-[#231F19]/80 font-light">
            {clinicData.concerns.question}
          </p>
        </FadeUp>

        {/* 4 Concern Cards with Interconnecting Biological Synapse */}
        <div className="relative mb-12">
          
          {/* Horizontal Neural Axon Filament Linking Cards (Desktop) */}
          <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 h-8 hidden lg:block pointer-events-none z-0">
            <svg className="w-full h-8 overflow-visible" viewBox="0 0 1200 32" fill="none">
              <defs>
                <linearGradient id="concerns-neuron-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#C79A45" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#8C5B41" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#C79A45" stopOpacity="0.85" />
                </linearGradient>
              </defs>

              {/* Sinuous Axon path connecting cards */}
              <path
                d="M 150 16 C 250 28, 350 4, 450 16 C 550 28, 650 4, 750 16 C 850 28, 950 4, 1050 16"
                stroke="url(#concerns-neuron-grad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeOpacity="0.7"
              />

              {/* Synaptic Terminal Nodes */}
              <circle cx="150" cy="16" r="4.5" fill="#C79A45" />
              <circle cx="450" cy="16" r="4.5" fill="#C79A45" />
              <circle cx="750" cy="16" r="4.5" fill="#C79A45" />
              <circle cx="1050" cy="16" r="4.5" fill="#C79A45" />

              {/* Action Potential Firing Pulses */}
              <circle r="3.5" fill="#FFFFFF">
                <animateMotion
                  dur="3.2s"
                  repeatCount="indefinite"
                  path="M 150 16 C 250 28, 350 4, 450 16 C 550 28, 650 4, 750 16 C 850 28, 950 4, 1050 16"
                />
              </circle>
              <circle r="3.5" fill="#FFFFFF">
                <animateMotion
                  dur="3.2s"
                  begin="1.6s"
                  repeatCount="indefinite"
                  path="M 150 16 C 250 28, 350 4, 450 16 C 550 28, 650 4, 750 16 C 850 28, 950 4, 1050 16"
                />
              </circle>
            </svg>
          </div>

          {/* Vertical Neural Axon Filament Linking Cards (Mobile / Tablet) */}
          <div className="absolute top-10 bottom-10 left-6 sm:left-1/2 sm:-translate-x-1/2 w-6 lg:hidden pointer-events-none z-0">
            <svg className="w-full h-full" viewBox="0 0 24 600" preserveAspectRatio="none" fill="none">
              <defs>
                <linearGradient id="concerns-neuron-grad-mob" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#C79A45" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#8C5B41" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#C79A45" stopOpacity="0.85" />
                </linearGradient>
              </defs>

              {/* Sinuous Vertical Axon path connecting cards */}
              <path
                d="M 12 0 C 22 100, 2 200, 12 300 C 22 400, 2 500, 12 600"
                stroke="url(#concerns-neuron-grad-mob)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeOpacity="0.75"
                vectorEffect="non-scaling-stroke"
              />

              {/* Synaptic Terminal Nodes */}
              <circle cx="12" cy="50" r="4" fill="#C79A45" />
              <circle cx="12" cy="200" r="4" fill="#C79A45" />
              <circle cx="12" cy="350" r="4" fill="#C79A45" />
              <circle cx="12" cy="500" r="4" fill="#C79A45" />

              {/* Action Potential Firing Pulses */}
              <circle r="3" fill="#FFFFFF">
                <animateMotion
                  dur="3s"
                  repeatCount="indefinite"
                  path="M 12 0 C 22 100, 2 200, 12 300 C 22 400, 2 500, 12 600"
                />
              </circle>
              <circle r="3" fill="#FFFFFF">
                <animateMotion
                  dur="3s"
                  begin="1.5s"
                  repeatCount="indefinite"
                  path="M 12 0 C 22 100, 2 200, 12 300 C 22 400, 2 500, 12 600"
                />
              </circle>
            </svg>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {clinicData.concerns.cards.map((card, idx) => {
              const isSelected = card.id === selectedId;

              return (
                <button
                  key={card.id}
                  type="button"
                  onClick={() => setSelectedId(card.id)}
                  className={clsx(
                    "p-6 rounded-xl border text-left transition-all duration-300 relative flex flex-col justify-between min-h-[180px]",
                    isSelected
                      ? "bg-[#FFFFFF] border-[#C79A45] shadow-lg ring-1 ring-[#C79A45]/50 scale-[1.02]"
                      : "bg-[#FFFFFF]/90 border-[#E5E7EB] hover:border-[#231F19]/35 hover:bg-[#FFFFFF] shadow-sm"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between w-full mb-3">
                      <div className="p-2 rounded-xl bg-[#F4F4F6] border border-[#231F19]/10">
                        {getConcernIcon(card.id)}
                      </div>
                      <span className="text-xs font-display font-medium text-[#231F19]/50">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-semibold text-[#231F19] mb-2">
                      {card.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#231F19]/75 font-sans leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <FadeUp delay={0.2} className="flex flex-col items-center justify-center pt-4">
          <button
            onClick={() => onSelectConcern(activeCard.title)}
            className="px-8 py-4 bg-[#C79A45] hover:bg-[#D4A752] text-[#12140D] font-semibold text-xs uppercase tracking-widest rounded-lg transition-all duration-300 shadow-md active:scale-95"
          >
            {clinicData.concerns.cta}
          </button>
        </FadeUp>

      </div>
    </section>
  );
};
