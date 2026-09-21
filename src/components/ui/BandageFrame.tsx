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

interface BandageStripProps {
  variant?: "dark" | "light" | "gold" | "parchment";
  className?: string;
}

/**
 * Authentic medical adhesive bandage (plaster)
 * Featuring breathable micropore perforated wings and a sterile cushioned center gauze pad.
 */
const BandageStrip: React.FC<BandageStripProps> = ({
  variant = "gold",
  className = "",
}) => {
  const isDark = variant === "dark";
  const isGold = variant === "gold";

  // Warm honey-tan medical plaster tones
  const plasterBg = isGold
    ? "bg-gradient-to-r from-[#C79A45] via-[#DEB86A] to-[#C79A45] border-t border-b border-[#F5DC9A]/75"
    : isDark
    ? "bg-gradient-to-r from-[#A77B28] via-[#BF933B] to-[#976C20] border-t border-b border-[#DDB35A]/50"
    : "bg-gradient-to-r from-[#D4A752] via-[#E2BE70] to-[#C79A45] border-t border-b border-[#FDF0D0]/80";

  return (
    <div
      className={clsx(
        "relative flex items-center justify-center select-none",
        "w-[94px] sm:w-[112px] h-[26px] sm:h-[30px] rounded-[5px]",
        "shadow-[0_4px_12px_rgba(0,0,0,0.22),0_1px_3px_rgba(0,0,0,0.12)]",
        "transition-transform duration-300 group-hover:scale-105",
        plasterBg,
        className
      )}
      aria-hidden="true"
    >
      {/* Breathable micropore perforated dots on adhesive wings */}
      <div
        className="absolute inset-0 opacity-20 rounded-[5px] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 0.8px, transparent 0.8px)",
          backgroundSize: "4.5px 4.5px",
        }}
      />

      {/* Central Cushioned Gauze Pad - Unmistakable Medical Plaster Feature */}
      <div
        className="relative z-10 w-[34px] sm:w-[42px] h-[18px] sm:h-[22px] rounded-[2px] bg-[#FAF5E9]/95 border border-[#C79A45]/40 flex items-center justify-center overflow-hidden pointer-events-none"
        style={{
          boxShadow: "inset 0 1px 2px rgba(0,0,0,0.12), 0 1px 2px rgba(255,255,255,0.4)",
        }}
      >
        {/* Sterile gauze cross-weave texture */}
        <div
          className="w-full h-full opacity-25"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #8C5B41 25%, transparent 25%), linear-gradient(-45deg, #8C5B41 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #8C5B41 75%), linear-gradient(-45deg, transparent 75%, #8C5B41 75%)",
            backgroundSize: "4px 4px",
            backgroundPosition: "0 0, 0 2px, 2px -2px, -2px 0px",
          }}
        />
        {/* Subtle center sterile fold */}
        <div className="absolute inset-y-0 w-px bg-[#8C5B41]/25" />
      </div>

      {/* Subtle end seams */}
      <div className="absolute left-1.5 top-0 bottom-0 w-px bg-black/10" />
      <div className="absolute right-1.5 top-0 bottom-0 w-px bg-black/10" />
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

  // Compute effective diagonal angle across 90-deg corners (~42 degrees)
  const computeCornerAngle = (angleOverride?: number): number => {
    if (angleOverride === undefined) return 42;
    if (Math.abs(angleOverride) >= 20) return Math.abs(angleOverride);
    // If a small angle (e.g. 3 or -3) was passed, interpret it as a subtle variation around 42°
    return 42 + angleOverride;
  };

  const cornerAngle = computeCornerAngle(tapeAngle);
  const centerAngle = tapeAngle !== undefined && Math.abs(tapeAngle) < 20 ? tapeAngle : 1;

  return (
    <figure
      onClick={onClick}
      className={clsx(
        "relative group inline-block transition-all duration-300",
        onClick && "cursor-pointer hover:brightness-105",
        className
      )}
    >
      {/* Top-Left Diagonal Corner Bandage */}
      {(tapePosition === "top-left-bottom-right" || tapePosition === "all-four") && (
        <div
          className="absolute z-30 pointer-events-none"
          style={{
            top: "14px",
            left: "14px",
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
            top: "14px",
            right: "14px",
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
            top: "-8px",
            left: "50%",
            transform: `translateX(-50%) rotate(${centerAngle}deg)`,
          }}
        >
          <BandageStrip variant={variant} />
        </div>
      )}

      {/* 1px hairline border container */}
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

      {/* Bottom-Right Diagonal Corner Bandage */}
      {(tapePosition === "top-left-bottom-right" || tapePosition === "all-four") && (
        <div
          className="absolute z-30 pointer-events-none"
          style={{
            bottom: "14px",
            right: "14px",
            transform: `translate(50%, 50%) rotate(-${cornerAngle}deg)`,
          }}
        >
          <BandageStrip variant={variant} />
        </div>
      )}

      {/* Bottom-Left Diagonal Corner Bandage */}
      {(tapePosition === "top-right-bottom-left" || tapePosition === "all-four") && (
        <div
          className="absolute z-30 pointer-events-none"
          style={{
            bottom: "14px",
            left: "14px",
            transform: `translate(-50%, 50%) rotate(${cornerAngle}deg)`,
          }}
        >
          <BandageStrip variant={variant} />
        </div>
      )}

      {/* Optional Caption */}
      {caption && (
        <figcaption
          className={clsx(
            "mt-2 text-xs font-sans tracking-wide text-center",
            isLight ? "text-charcoal-ink/75" : "text-parchment-100/70"
          )}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
