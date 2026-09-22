"use client";

import React from "react";
import clsx from "clsx";

export interface PinClipProps {
  className?: string;
  variant?: "gold" | "silver" | "bronze";
}

/**
 * Authentic metallic stationery pin clip (paperclip fastener)
 * Crafted with warm gold/brass metallic gradients, cast shadow, and specular wire highlight.
 */
export const PinClip: React.FC<PinClipProps> = ({
  className = "",
  variant = "gold",
}) => {
  const isSilver = variant === "silver";
  const isBronze = variant === "bronze";

  const gradId = `pin-clip-grad-${variant}`;
  const highlightId = `pin-clip-highlight-${variant}`;

  return (
    <div
      className={clsx(
        "relative select-none pointer-events-none w-[20px] sm:w-[24px] h-[36px] sm:h-[44px]",
        className
      )}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 36 68"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-[0_2px_3px_rgba(20,15,5,0.3)]"
      >
        <defs>
          <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
            {isSilver ? (
              <>
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="30%" stopColor="#D1D5DB" />
                <stop offset="70%" stopColor="#E5E7EB" />
                <stop offset="100%" stopColor="#9CA3AF" />
              </>
            ) : isBronze ? (
              <>
                <stop offset="0%" stopColor="#E8C4A2" />
                <stop offset="30%" stopColor="#B87333" />
                <stop offset="70%" stopColor="#C98A4E" />
                <stop offset="100%" stopColor="#7A4214" />
              </>
            ) : (
              <>
                <stop offset="0%" stopColor="#FDF2D0" />
                <stop offset="25%" stopColor="#D4A752" />
                <stop offset="50%" stopColor="#EBCB82" />
                <stop offset="75%" stopColor="#A57A2C" />
                <stop offset="100%" stopColor="#6E4D15" />
              </>
            )}
          </linearGradient>

          <linearGradient id={highlightId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Outer loop drop shadow */}
        <path
          d="M 11 18 V 10 C 11 4.5 16 2 21 2 C 26 2 31 4.5 31 10 V 44 C 31 52 25 58 17 58 C 9 58 3 52 3 44 V 20"
          stroke="rgba(0,0,0,0.2)"
          strokeWidth="2.8"
          strokeLinecap="round"
          transform="translate(1, 1.5)"
        />

        {/* Main outer wire loop (wrapping behind and over top edge) */}
        <path
          d="M 11 18 V 10 C 11 4.5 16 2 21 2 C 26 2 31 4.5 31 10 V 44 C 31 52 25 58 17 58 C 9 58 3 52 3 44 V 20"
          stroke={`url(#${gradId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Inner wire loop (clipping down over the front of the paper) */}
        <path
          d="M 11 18 V 38 C 11 43 14 46 18 46 C 22 46 25 43 25 38 V 14"
          stroke={`url(#${gradId})`}
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Specular metallic highlight on front wire */}
        <path
          d="M 11 20 V 37 C 11 41 13.5 44 18 44"
          stroke={`url(#${highlightId})`}
          strokeWidth="0.8"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
