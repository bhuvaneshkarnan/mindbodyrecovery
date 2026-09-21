"use client";

import React from "react";
import clsx from "clsx";

interface BandageFrameProps {
  children: React.ReactNode;
  variant?: "dark" | "light" | "gold" | "parchment";
  tapePosition?: "top-left-bottom-right" | "top-right-bottom-left" | "all-four" | "top-center";
  tapeAngle?: number;
  className?: string;
  innerClassName?: string;
  caption?: string;
  onClick?: () => void;
}

export interface BandageStripProps {
  variant?: "dark" | "light" | "gold" | "parchment";
  className?: string;
}

/**
 * Authentic medical adhesive plaster
 * Refined proportion: cleanly straddles corner vertex with natural scale.
 */
export const BandageStrip: React.FC<BandageStripProps> = ({
  variant = "gold",
  className = "",
}) => {
  const isDark = variant === "dark";
  const isGold = variant === "gold";

  // Warm honey-tan/gold medical plaster tones
  const plasterBg = isGold
    ? "bg-gradient-to-r from-[#D4A752]/95 via-[#E6C57E] to-[#D4A752]/95 border-t border-b border-[#F7E1A6]/80"
    : isDark
    ? "bg-gradient-to-r from-[#B88A35]/95 via-[#C79A45] to-[#A77B28]/95 border-t border-b border-[#DDB35A]/60"
    : "bg-gradient-to-r from-[#D4A752]/92 via-[#E2BE70] to-[#C79A45]/92 border-t border-b border-[#FDF0D0]/80";

  return (
    <div
      className={clsx(
        "relative flex items-center justify-center select-none",
        "w-[66px] sm:w-[84px] h-[19px] sm:h-[24px] rounded-[3px]",
        "shadow-[0_2px_8px_rgba(0,0,0,0.22),0_1px_3px_rgba(0,0,0,0.12)]",
        "transition-transform duration-300 group-hover:scale-105",
        plasterBg,
        className
      )}
      aria-hidden="true"
    >
      {/* Breathable micropore perforated dots on adhesive wings */}
      <div
        className="absolute inset-0 opacity-20 rounded-[3px] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #2A1D0B 0.7px, transparent 0.7px)",
          backgroundSize: "4px 4px",
        }}
      />

      {/* Central Cushioned Gauze Pad */}
      <div
        className="relative z-10 w-[24px] sm:w-[30px] h-[13px] sm:h-[17px] rounded-[1.5px] bg-[#FFFDF7]/95 border border-[#C79A45]/40 flex items-center justify-center overflow-hidden pointer-events-none"
        style={{
          boxShadow: "inset 0 1px 2px rgba(0,0,0,0.08), 0 1px 1px rgba(255,255,255,0.5)",
        }}
      >
        {/* Subtle center sterile crease fold */}
        <div className="w-px h-full bg-[#8C5B41]/25" />
      </div>

      {/* Sealed end seams */}
      <div className="absolute left-1 top-0 bottom-0 w-px bg-black/10" />
      <div className="absolute right-1 top-0 bottom-0 w-px bg-black/10" />
    </div>
  );
};

export const BandageFrame: React.FC<BandageFrameProps> = ({
  children,
  variant = "dark",
  tapePosition = "top-left-bottom-right",
  tapeAngle,
  className = "",
  innerClassName = "",
  caption,
  onClick,
}) => {
  const isDark = variant === "dark";
  const isLight = variant === "light" || variant === "parchment";

  const computeCornerAngle = (angleOverride?: number): number => {
    if (angleOverride === undefined) return 42;
    if (Math.abs(angleOverride) >= 20) return Math.abs(angleOverride);
    return 42 + angleOverride;
  };

  const cornerAngle = computeCornerAngle(tapeAngle);
  const centerAngle = tapeAngle !== undefined && Math.abs(tapeAngle) < 20 ? tapeAngle : 1;

  return (
    <figure
      onClick={onClick}
      className={clsx(
        "group inline-block transition-all duration-300 w-full",
        onClick && "cursor-pointer hover:brightness-105",
        className
      )}
    >
      {/* 
        Dedicated Photo Frame Anchor Container:
        Guarantees that corner bandages are anchored directly to the corners of the photo frame,
        and never pushed down or offset by captions.
      */}
      <div className="relative w-full">
        {/* Top-Left Diagonal Corner Bandage */}
        {(tapePosition === "top-left-bottom-right" || tapePosition === "all-four") && (
          <div
            className="absolute z-30 pointer-events-none"
            style={{
              top: "8px",
              left: "8px",
              transform: `translate(-50%, -50%) rotate(-${cornerAngle}deg)`,
            }}
          >
            <BandageStrip variant={variant} />
          </div>
        )}

        {/* Top-Right Diagonal Corner Bandage */}
        {(tapePosition === "top-right-bottom-left" || tapePosition === "all-four") && (
          <div
            className="absolute z-30 pointer-events-none"
            style={{
              top: "8px",
              right: "8px",
              transform: `translate(50%, -50%) rotate(${cornerAngle}deg)`,
            }}
          >
            <BandageStrip variant={variant} />
          </div>
        )}

        {/* Top-Center Horizontal Bandage */}
        {tapePosition === "top-center" && (
          <div
            className="absolute z-30 pointer-events-none"
            style={{
              top: "-5px",
              left: "50%",
              transform: `translateX(-50%) rotate(${centerAngle}deg)`,
            }}
          >
            <BandageStrip variant={variant} />
          </div>
        )}

        {/* Hairline border container */}
        <div
          className={clsx(
            "relative overflow-hidden transition-all duration-300",
            isDark
              ? "border border-parchment-100/40 bg-ink-900"
              : isLight
              ? "border border-charcoal-ink/30 bg-white shadow-md"
              : "border border-gold-500/40 bg-ink-950",
            innerClassName
          )}
        >
          {children}
        </div>

        {/* Bottom-Right Diagonal Corner Bandage (Anchored strictly to photo bottom-right) */}
        {(tapePosition === "top-left-bottom-right" || tapePosition === "all-four") && (
          <div
            className="absolute z-30 pointer-events-none"
            style={{
              bottom: "8px",
              right: "8px",
              transform: `translate(50%, 50%) rotate(-${cornerAngle}deg)`,
            }}
          >
            <BandageStrip variant={variant} />
          </div>
        )}

        {/* Bottom-Left Diagonal Corner Bandage (Anchored strictly to photo bottom-left) */}
        {(tapePosition === "top-right-bottom-left" || tapePosition === "all-four") && (
          <div
            className="absolute z-30 pointer-events-none"
            style={{
              bottom: "8px",
              left: "8px",
              transform: `translate(-50%, 50%) rotate(${cornerAngle}deg)`,
            }}
          >
            <BandageStrip variant={variant} />
          </div>
        )}
      </div>

      {/* Caption cleanly rendered below photo without affecting bandage coordinates */}
      {caption && (
        <figcaption
          className={clsx(
            "mt-2.5 text-xs font-sans tracking-wide text-center px-2",
            isLight ? "text-charcoal-ink/75" : "text-parchment-100/70"
          )}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
