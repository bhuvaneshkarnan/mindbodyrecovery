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
  // 0. Half Cut Dome (Straight flat bottom edge, semicircular arch dome top - 88% area)
  {
    type: "border-radius",
    borderRadius: "60px 60px 8px 8px",
    name: "Half Cut Dome",
  },
  // 1. Crescent Moon Cut (Wide lunar arc with gentle concave inner scoop - 80% area for full visibility)
  {
    type: "clip-path",
    clipPathId: "lasso-moon-crescent",
    strokeD: "M 50 3 C 88 3, 98 25, 98 50 C 98 75, 88 97, 50 97 C 30 78, 22 65, 22 50 C 22 35, 30 22, 50 3 Z",
    name: "Crescent Moon Cut",
  },
  // 2. Vertical Half Cut (Straight flat vertical left edge, semicircular arch dome right - 88% area)
  {
    type: "border-radius",
    borderRadius: "8px 65px 65px 8px",
    name: "Vertical Half Cut",
  },
  // 3. Teardrop Cut (Softened apex corner, wide bulbous droplet base - 90% area)
  {
    type: "border-radius",
    borderRadius: "14px 65px 65px 65px",
    name: "Teardrop Cut",
  },
  // 4. Botanical Leaf / Eye Lens (Gentle pointed tips, wide curved convex arcs - 85% area)
  {
    type: "border-radius",
    borderRadius: "20px 75px 20px 75px",
    name: "Botanical Leaf Cut",
  },
  // 5. Cathedral Arch Window (Semicircular top, parallel straight vertical sides, flat bottom - 88% area)
  {
    type: "border-radius",
    borderRadius: "65px 65px 12px 12px",
    name: "Arch Window Cut",
  },
  // 6. Diagonal Sliced Wedge (Sharp flat diagonal cut at top-right, rounded base - 88% area)
  {
    type: "border-radius",
    borderRadius: "60px 8px 60px 40px",
    name: "Diagonal Wedge Cut",
  },
  // 7. Waning Moon Pebble (Gentle concave scoop on right, wide convex lunar belly left - 80% area)
  {
    type: "clip-path",
    clipPathId: "lasso-moon-gibbous",
    strokeD: "M 50 3 C 70 22, 78 35, 78 50 C 78 65, 70 78, 50 97 C 12 97, 2 75, 2 50 C 2 25, 12 3, 50 3 Z",
    name: "Waning Moon Cut",
  },
  // 8. Quarter-Circle Fan (Softened 90-degree corner, wide sweeping circular arc - 86% area)
  {
    type: "border-radius",
    borderRadius: "75px 14px 14px 75px",
    name: "Quarter Fan Cut",
  },
  // 9. Inverted Half Cut Dome (Straight flat horizontal top edge, round bowl bottom - 88% area)
  {
    type: "border-radius",
    borderRadius: "8px 8px 65px 65px",
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
