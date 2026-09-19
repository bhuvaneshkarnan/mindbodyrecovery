"use client";

import React from "react";
import clsx from "clsx";

// 7 distinct organic lasso shapes (8-value border-radius pebbles / fluid contours)
export const LASSO_SHAPES = [
  // 0. Organic River Stone / Oval pebble
  "60% 40% 55% 45% / 45% 60% 40% 55%",
  // 1. Asymmetric Botanical Leaf / Droplet
  "40% 60% 35% 65% / 65% 35% 65% 35%",
  // 2. Flowing Fluid Pebble
  "65% 35% 50% 50% / 35% 65% 35% 65%",
  // 3. Freehand Organic Contour
  "35% 65% 60% 40% / 55% 35% 65% 45%",
  // 4. Soft Mineral Slice
  "68% 32% 45% 55% / 55% 45% 55% 45%",
  // 5. Undulating Blob
  "48% 52% 65% 35% / 40% 60% 40% 60%",
  // 6. Natural Curved Pebble
  "55% 45% 35% 65% / 62% 38% 62% 38%",
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
