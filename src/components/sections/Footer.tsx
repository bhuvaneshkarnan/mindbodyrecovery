"use client";

import React from "react";
import { clinicData } from "@/data/clinicData";
import { Instagram, Facebook, Youtube } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#12140D] text-[#F6F1E4]/80 border-t border-[#F6F1E4]/15 pt-20 pb-12 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-[#F6F1E4]/10">
          {/* Brand Column (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="inline-block focus:outline-none" aria-label="Mind Body Recovery">
              <img
                src="/assets/brand/logo-trimmed.webp"
                alt="Mind Body Recovery"
                loading="lazy"
                decoding="async"
                className="h-12 sm:h-14 w-auto object-contain mb-2"
              />
            </a>

            <p className="text-xs sm:text-sm text-[#F6F1E4]/70 font-sans leading-relaxed max-w-sm">
              An integrative sanctuary combining therapeutic bodywork, somatic inquiry, and immersive recovery retreats.
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-[#F6F1E4]/20 flex items-center justify-center text-[#F6F1E4]/70 hover:text-[#C79A45] hover:border-[#C79A45] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={15} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-[#F6F1E4]/20 flex items-center justify-center text-[#F6F1E4]/70 hover:text-[#C79A45] hover:border-[#C79A45] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={15} />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-full border border-[#F6F1E4]/20 flex items-center justify-center text-[#F6F1E4]/70 hover:text-[#C79A45] hover:border-[#C79A45] transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={15} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C79A45] font-semibold">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans">
              <li>
                <a href="#about" className="hover:text-[#C79A45] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#purpose" className="hover:text-[#C79A45] transition-colors">
                  Our Approach
                </a>
              </li>
              <li>
                <a href="#relax" className="hover:text-[#C79A45] transition-colors">
                  Therapies
                </a>
              </li>
              <li>
                <a href="#rebuild" className="hover:text-[#C79A45] transition-colors">
                  2-Day Reset Retreat
                </a>
              </li>
              <li>
                <a href="#stories" className="hover:text-[#C79A45] transition-colors">
                  Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Therapies */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C79A45] font-semibold">
              Therapies
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans">
              {clinicData.therapiesList.map((t) => (
                <li key={t.name}>
                  <a href="#relax" className="hover:text-[#C79A45] transition-colors">
                    {t.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Retreat & Academy */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-[#C79A45] font-semibold">
              The Retreat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm font-sans">
              {clinicData.retreatHighlights.map((r) => (
                <li key={r}>
                  <a href="#rebuild" className="hover:text-[#C79A45] transition-colors">
                    {r}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar with Single Unified Year 2026 */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F6F1E4]/50">
          <p>
            &copy; 2026 Mind Body Recovery. All Rights Reserved.
          </p>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-[#F6F1E4] transition-colors">
              Privacy Policy
            </a>
            <span>&middot;</span>
            <a href="#" className="hover:text-[#F6F1E4] transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
