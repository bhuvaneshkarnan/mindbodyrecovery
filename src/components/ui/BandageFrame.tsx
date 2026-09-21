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

export const BandageFrame: React.FC<BandageFrameProps> = ({
  children,
  variant = "dark",
  tapePosition = "top-left-bottom-right",
  tapeAngle = 4,
  className = "",
  innerClassName = "",
  caption,
  onClick,
}) => {
  const isDark = variant === "dark";
  const isGold = variant === "gold";
  const isLight = variant === "light" || variant === "parchment";

  // Tape corner styles based on variant - golden washi tape / organic medical bandage style
  const tapeClass = isGold
    ? "bg-[#C79A45]/90 border border-[#E5B85C] shadow-md text-[#12140D]"
    : isDark
    ? "bg-[#C79A45]/70 border border-[#C79A45] shadow-sm text-[#12140D]"
    : "bg-[#C79A45]/85 border border-[#B88A35] shadow-md text-[#12140D]";

  return (
    <figure
      onClick={onClick}
      className={clsx(
        "relative group inline-block transition-all duration-300",
        onClick && "cursor-pointer hover:brightness-105",
        className
      )}
    >
      {/* Tape Strip 1 */}
      {(tapePosition === "top-left-bottom-right" || tapePosition === "all-four") && (
        <div
          className={clsx(
            "washi-tape-strip -top-3 -left-3 rounded-md border pointer-events-none transition-transform group-hover:rotate-0 duration-300",
            tapeClass
          )}
          style={{ transform: `rotate(-${tapeAngle}deg)` }}
          aria-hidden="true"
        >
          <div className="w-full h-full opacity-40 flex justify-around items-center px-1.5">
            <span className="w-px h-2.5 bg-black/40" />
            <span className="w-px h-2.5 bg-black/40" />
            <span className="w-px h-2.5 bg-black/40" />
          </div>
        </div>
      )}

      {tapePosition === "top-right-bottom-left" && (
        <div
          className={clsx(
            "washi-tape-strip -top-3 -right-3 rounded-md border pointer-events-none transition-transform group-hover:rotate-0 duration-300",
            tapeClass
          )}
          style={{ transform: `rotate(${tapeAngle}deg)` }}
          aria-hidden="true"
        >
          <div className="w-full h-full opacity-40 flex justify-around items-center px-1.5">
            <span className="w-px h-2.5 bg-black/40" />
            <span className="w-px h-2.5 bg-black/40" />
            <span className="w-px h-2.5 bg-black/40" />
          </div>
        </div>
      )}

      {tapePosition === "top-center" && (
        <div
          className={clsx(
            "washi-tape-strip -top-3 left-1/2 -translate-x-1/2 rounded-md border pointer-events-none transition-transform duration-300",
            tapeClass
          )}
          style={{ transform: `translateX(-50%) rotate(${tapeAngle}deg)` }}
          aria-hidden="true"
        >
          <div className="w-full h-full opacity-35 flex justify-around items-center px-1">
            <span className="w-px h-2 bg-current opacity-40" />
            <span className="w-px h-2 bg-current opacity-40" />
          </div>
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

      {/* Tape Strip 2 */}
      {(tapePosition === "top-left-bottom-right" || tapePosition === "all-four") && (
        <div
          className={clsx(
            "washi-tape-strip -bottom-3 -right-3 rounded-md border pointer-events-none transition-transform group-hover:rotate-0 duration-300",
            tapeClass
          )}
          style={{ transform: `rotate(-${tapeAngle}deg)` }}
          aria-hidden="true"
        >
          <div className="w-full h-full opacity-40 flex justify-around items-center px-1.5">
            <span className="w-px h-2.5 bg-black/40" />
            <span className="w-px h-2.5 bg-black/40" />
            <span className="w-px h-2.5 bg-black/40" />
          </div>
        </div>
      )}

      {tapePosition === "top-right-bottom-left" && (
        <div
          className={clsx(
            "washi-tape-strip -bottom-3 -left-3 rounded-md border pointer-events-none transition-transform group-hover:rotate-0 duration-300",
            tapeClass
          )}
          style={{ transform: `rotate(${tapeAngle}deg)` }}
          aria-hidden="true"
        >
          <div className="w-full h-full opacity-40 flex justify-around items-center px-1.5">
            <span className="w-px h-2.5 bg-black/40" />
            <span className="w-px h-2.5 bg-black/40" />
            <span className="w-px h-2.5 bg-black/40" />
          </div>
        </div>
      )}

      {/* Caption */}
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
