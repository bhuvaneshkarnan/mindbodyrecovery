"use client";

import React from "react";
import clsx from "clsx";

// 10 distinct, highly asymmetrical organic lasso shapes (every single image has a completely unique contour)
export const LASSO_SHAPES = [
  // 0. Organic River Pebble (tilted asymmetrical curve)
  "74% 26% 62% 38% / 38% 72% 28% 62%",
  // 1. Fluid Teardrop Contour (high pointed curve, wide belly)
  "28% 72% 42% 58% / 72% 32% 68% 28%",
  // 2. Asymmetric Mineral Slice (slanted flat cut with rounded bottom)
  "62% 38% 28% 72% / 74% 34% 66% 26%",
  // 3. Freehand Organic Kidney
  "42% 58% 74% 26% / 28% 68% 32% 72%",
  // 4. Slanted Botanical Drop
  "32% 68% 36% 64% / 66% 38% 62% 34%",
  // 5. Undulating River Stone
  "68% 32% 58% 42% / 44% 66% 34% 56%",
  // 6. Asymmetrical Fluid Pebble
  "38% 62% 72% 28% / 58% 36% 64% 42%",
  // 7. Organic Amoeba Slice
  "60% 40% 38% 62% / 68% 32% 68% 32%",
  // 8. Angled Organic Contour
  "46% 54% 28% 72% / 36% 64% 36% 64%",
  // 9. Natural Sea Pebble
  "66% 34% 62% 38% / 44% 62% 38% 56%",
];

interface LassoImageNodeProps {
  imageSrc: string;
  imageAlt: string;
  shapeIndex?: number;
  width?: number | string;
  height?: number | string;
  tiltDeg?: number;
  className?: string;
  containerClassName?: string;
  objectPosition?: string;
}

export const LassoImageNode: React.FC<LassoImageNodeProps> = ({
  imageSrc,
  imageAlt,
  shapeIndex = 0,
  width = 145,
  height = 145,
  tiltDeg = 0,
  className = "",
  containerClassName = "",
  objectPosition = "object-center",
}) => {
  const borderRadius = LASSO_SHAPES[shapeIndex % LASSO_SHAPES.length];

  return (
    <div
      className={clsx(
        "relative group transition-transform duration-500 ease-out hover:scale-108 hover:rotate-0 hover:z-40 cursor-pointer select-none",
        className
      )}
      style={{
        transform: tiltDeg ? `rotate(${tiltDeg}deg)` : undefined,
      }}
    >
      {/* Ambient Radial Golden Glow on hover */}
      <div
        className="absolute -inset-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl -z-10"
        style={{
          borderRadius,
          background: "radial-gradient(circle, rgba(199,154,69,0.4) 0%, rgba(147,165,121,0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Lasso-Cropped Image Container */}
      <div
        className={clsx(
          "relative overflow-hidden transition-all duration-500",
          "border-2 border-[#C79A45]/70 group-hover:border-[#C79A45]",
          "bg-[#12180E] shadow-xl shadow-black/60 group-hover:shadow-[0_0_26px_rgba(199,154,69,0.35)]",
          containerClassName
        )}
        style={{
          width,
          height,
          borderRadius,
        }}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          className={clsx(
            "w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 filter saturate-95 contrast-105",
            objectPosition
          )}
        />
        {/* Subtle inner vignette overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-40 pointer-events-none"
          aria-hidden="true"
        />
      </div>
    </div>
  );
};
