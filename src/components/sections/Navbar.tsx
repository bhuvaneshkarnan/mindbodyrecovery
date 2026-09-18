"use client";

import React, { useState, useEffect } from "react";
import { Calendar, Menu, X, Phone } from "lucide-react";
import { clinicData } from "@/data/clinicData";
import clsx from "clsx";

interface NavbarProps {
  onOpenAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAssessment }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Approach", href: "#purpose" },
    { label: "Therapies", href: "#relax" },
    { label: "Retreat", href: "#rebuild" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-[#12140D]/95 backdrop-blur-md border-b border-[#F6F1E4]/15 py-3 shadow-lg"
          : "bg-gradient-to-b from-[#12140D]/90 via-[#12140D]/50 to-transparent py-4 sm:py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center space-x-3 group focus:outline-none"
          aria-label="Mind Body Recovery Home"
        >
          <img
            src="/assets/brand/logo-trimmed.webp"
            alt="Mind Body Recovery"
            width={125}
            height={48}
            decoding="async"
            className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          />
        </a>

        {/* Desktop Navigation - High Contrast Frosted Pill Capsule */}
        <nav className="hidden md:flex items-center space-x-1 bg-[#12140D]/75 border border-[#F6F1E4]/20 backdrop-blur-md px-3.5 py-1.5 rounded-full shadow-lg">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#F6F1E4] hover:text-[#C79A45] font-sans text-xs uppercase tracking-wider font-semibold transition-all px-3 py-1.5 rounded-full hover:bg-white/10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Primary CTA & Phone Contact */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            href={`tel:${clinicData.phone}`}
            className="text-xs text-[#F6F1E4] hover:text-[#C79A45] flex items-center space-x-2 transition-all bg-[#12140D]/75 border border-[#F6F1E4]/20 backdrop-blur-md px-3.5 py-2 rounded-xl shadow-md font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]"
          >
            <Phone size={13} className="text-[#C79A45]" />
            <span className="tracking-wide font-sans">{clinicData.phoneDisplay}</span>
          </a>

          <button
            onClick={onOpenAssessment}
            className="px-4 py-2 bg-white hover:bg-[#F6F1E4] text-[#12140D] text-xs uppercase tracking-wider font-semibold transition-all duration-300 flex items-center gap-2 rounded-xl shadow-lg hover:shadow-xl active:scale-95 group border border-white"
          >
            <Calendar size={14} className="text-[#12140D] transition-transform duration-300 group-hover:scale-110" />
            <span>Book Assessment</span>
            <span className="font-sans text-xs transition-transform duration-300 group-hover:translate-x-0.5">&rarr;</span>
          </button>
        </div>

        {/* Mobile Menu Trigger */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={onOpenAssessment}
            className="px-3 py-1.5 bg-white text-[#12140D] text-[11px] uppercase tracking-wider font-semibold rounded-lg shadow-sm active:scale-95 border border-white inline-flex items-center gap-1"
          >
            <span>Assess</span>
            <span className="text-[10px]">&rarr;</span>
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#F6F1E4] hover:text-[#C79A45] focus:outline-none bg-[#12140D]/80 border border-[#F6F1E4]/20 rounded-xl backdrop-blur-md shadow-md"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#12140D] border-b border-[#F6F1E4]/15 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base text-[#F6F1E4]/90 hover:text-[#C79A45] py-1 border-b border-[#F6F1E4]/5 font-display"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-4 flex flex-col space-y-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssessment();
              }}
              className="w-full py-3 bg-white hover:bg-[#F6F1E4] text-[#12140D] text-xs uppercase tracking-wider font-semibold text-center flex items-center justify-center gap-2 rounded-xl shadow-md active:scale-95 border border-white group"
            >
              <Calendar size={15} />
              <span>Book Your Assessment</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
            </button>
            <a
              href={`tel:${clinicData.phone}`}
              className="text-center text-xs text-[#F6F1E4]/70 hover:text-[#C79A45] py-1"
            >
              Call Clinic: {clinicData.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
