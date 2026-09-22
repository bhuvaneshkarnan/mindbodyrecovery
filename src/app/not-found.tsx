import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, Phone } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#12140D] text-[#F6F1E4] flex flex-col justify-between selection:bg-[#C79A45]/30">
      {/* Top Brand Header */}
      <header className="border-b border-[#F6F1E4]/10 py-6 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="inline-block">
            <img
              src="/assets/brand/logo-trimmed.webp"
              alt="Mind Body Recovery"
              width={130}
              height={50}
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>
          <a
            href="tel:+919042561651"
            className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#C79A45] hover:text-[#D4A752] transition-colors"
          >
            <Phone size={14} />
            <span>+91 90425 61651</span>
          </a>
        </div>
      </header>

      {/* Main 404 Centerpiece */}
      <main className="flex-1 flex items-center justify-center px-4 py-16 text-center">
        <div className="max-w-lg mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C79A45]/10 border border-[#C79A45]/30">
            <Compass size={14} className="text-[#C79A45] animate-spin" style={{ animationDuration: "10s" }} />
            <span className="text-[11px] uppercase tracking-widest text-[#C79A45] font-medium font-sans">
              404 &middot; Quiet Space
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl text-[#F6F1E4] font-semibold tracking-tight leading-none">
            A gentle pause.
          </h1>

          <p className="text-sm sm:text-base text-[#F6F1E4]/70 font-sans max-w-md mx-auto leading-relaxed">
            The page you are looking for does not exist or has been relocated. Like taking a deep restorative breath, let us return to center.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C79A45] hover:bg-[#D4A752] text-[#12140D] font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg active:scale-95"
            >
              <ArrowLeft size={16} />
              <span>Return to Homepage</span>
            </Link>

            <Link
              href="/#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#1B1E15] hover:bg-[#1B1E15]/80 text-[#F6F1E4] border border-[#F6F1E4]/20 font-semibold text-xs uppercase tracking-wider rounded-xl transition-all"
            >
              <span>Contact Clinic</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#F6F1E4]/10 py-6 text-center text-xs text-[#F6F1E4]/50">
        <p>&copy; 2026 Mind Body Recovery &middot; Shanta Ayurveda Hospital, T. Nagar, Chennai</p>
      </footer>
    </div>
  );
}
