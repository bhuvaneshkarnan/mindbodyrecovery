"use client";

import React from "react";
import clsx from "clsx";

export interface ShapeDefinition {
  type: "border-radius" | "clip-path";
  borderRadius?: string;
  clipPathId?: string;
  strokeD?: string;
  name: string;
}

// 10 distinct, dramatic cuts specifically matching the user's explicit request:
// Half cuts (dome, vertical, inverted), moon cut (crescent), teardrop, leaf, arch window, diagonal wedge, gibbous moon, fan
export const LASSO_SHAPE_DEFS: ShapeDefinition[] = [
  // 0. Half Cut Dome (Straight flat bottom edge, semicircular arch dome top)
  {
    type: "border-radius",
    borderRadius: "9999px 9999px 0 0",
    name: "Half Cut Dome",
  },
  // 1. Crescent Moon Cut (Dramatic lunar arc with inner concave scoop)
  {
    type: "clip-path",
    clipPathId: "lasso-moon-crescent",
    strokeD: "M 65 3 C 12 18, 12 82, 65 97 C 32 75, 32 25, 65 3 Z",
    name: "Crescent Moon Cut",
  },
  // 2. Vertical Half Cut (Straight flat vertical left edge, semicircular arch dome right)
  {
    type: "border-radius",
    borderRadius: "0 9999px 9999px 0",
    name: "Vertical Half Cut",
  },
  // 3. Teardrop Cut (Sharp pointed apex corner, wide bulbous droplet base)
  {
    type: "border-radius",
    borderRadius: "0 62% 62% 62%",
    name: "Teardrop Cut",
  },
  // 4. Botanical Leaf / Eye Lens (Two sharp pointed opposite tips, two sweeping convex arcs)
  {
    type: "border-radius",
    borderRadius: "0 100% 0 100%",
    name: "Botanical Leaf Cut",
  },
  // 5. Cathedral Arch Window (Semicircular top, parallel straight vertical sides, flat bottom)
  {
    type: "border-radius",
    borderRadius: "9999px 9999px 12px 12px",
    name: "Arch Window Cut",
  },
  // 6. Diagonal Sliced Wedge (Sharp flat diagonal cut at top-right, rounded base)
  {
    type: "border-radius",
    borderRadius: "60px 4px 60px 60px",
    name: "Diagonal Wedge Cut",
  },
  // 7. Waxing Gibbous Moon (Curved crescent indent on left, wide convex lunar belly right)
  {
    type: "clip-path",
    clipPathId: "lasso-moon-gibbous",
    strokeD: "M 50 3 C 90 3, 98 25, 98 50 C 98 75, 90 97, 50 97 C 28 80, 18 65, 18 50 C 18 35, 28 20, 50 3 Z",
    name: "Gibbous Moon Cut",
  },
  // 8. Quarter-Circle Fan (One sharp 90-degree corner, wide sweeping circular arc)
  {
    type: "border-radius",
    borderRadius: "100% 0 0 0",
    name: "Quarter Fan Cut",
  },
  // 9. Inverted Half Cut Dome (Straight flat horizontal top edge, semicircular round dome bottom)
  {
    type: "border-radius",
    borderRadius: "0 0 9999px 9999px",
    name: "Inverted Half Cut",
  },
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
  width = 110,
  height = 110,
  tiltDeg = 0,
  className = "",
  containerClassName = "",
  objectPosition = "object-center",
}) => {
  const shape = LASSO_SHAPE_DEFS[shapeIndex % LASSO_SHAPE_DEFS.length];

  return (
    <div
      className={clsx(
        "relative group transition-transform duration-500 ease-out hover:scale-110 hover:rotate-0 hover:z-40 cursor-pointer select-none",
        className
      )}
      style={{
        transform: tiltDeg ? `rotate(${tiltDeg}deg)` : undefined,
      }}
    >
      {/* Golden Halo Glow on hover */}
      <div
        className="absolute -inset-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-xl -z-10"
        style={{
          borderRadius: shape.type === "border-radius" ? shape.borderRadius : "50%",
          background: "radial-gradient(circle, rgba(199,154,69,0.5) 0%, rgba(147,165,121,0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Lasso-Cropped Image Container */}
      <div
        className={clsx(
          "relative overflow-hidden transition-all duration-500 bg-[#12180E] shadow-2xl shadow-black/70 group-hover:shadow-[0_0_30px_rgba(199,154,69,0.45)]",
          shape.type === "border-radius" && "border-2 border-[#C79A45]/80 group-hover:border-[#F6D075]",
          containerClassName
        )}
        style={{
          width,
          height,
          borderRadius: shape.type === "border-radius" ? shape.borderRadius : undefined,
          clipPath: shape.type === "clip-path" ? `url(#${shape.clipPathId})` : undefined,
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
        {/* Inner vignette overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-40 pointer-events-none"
          aria-hidden="true"
        />
      </div>

      {/* SVG Golden Border Overlay for Clip-Path Shapes (Crescent Moon & Gibbous Moon) */}
      {shape.type === "clip-path" && shape.strokeD && (
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none overflow-visible z-10"
          aria-hidden="true"
        >
          <path
            d={shape.strokeD}
            fill="none"
            stroke="#C79A45"
            strokeWidth="2.5"
            strokeLinejoin="round"
            className="transition-colors duration-300 group-hover:stroke-[#F6D075] filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          />
        </svg>
      )}
    </div>
  );
};
