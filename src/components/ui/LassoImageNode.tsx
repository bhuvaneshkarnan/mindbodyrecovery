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

// 10 distinct, organic cuts with generous surface area (88-94%) to ensure people's faces, gestures, and treatments remain completely visible:
export const LASSO_SHAPE_DEFS: ShapeDefinition[] = [
  // 0. Half Cut Arch Dome (Semicircular arch dome top, flat rounded base - 92% area)
  {
    type: "border-radius",
    borderRadius: "50% 50% 12% 12%",
    name: "Half Cut Dome",
  },
  // 1. Sculpted Lunar Pebble (Soft organic pebble with generous lunar curvature - 94% area)
  {
    type: "border-radius",
    borderRadius: "45% 55% 55% 45% / 55% 45% 45% 55%",
    name: "Sculpted Lunar Pebble",
  },
  // 2. Vertical Half Cut (Straight vertical left edge, smooth dome curve right - 92% area)
  {
    type: "border-radius",
    borderRadius: "14% 50% 50% 14%",
    name: "Vertical Half Cut",
  },
  // 3. Soft Teardrop Cut (Rounded apex corner, bulbous droplet body - 93% area)
  {
    type: "border-radius",
    borderRadius: "22% 50% 50% 50%",
    name: "Teardrop Cut",
  },
  // 4. Botanical Leaf / Eye Lens (Pointed tips, wide curved convex arcs - 88% area)
  {
    type: "border-radius",
    borderRadius: "50% 20% 50% 20% / 20% 50% 20% 50%",
    name: "Botanical Leaf Cut",
  },
  // 5. Cathedral Arch Window (Dome top, vertical straight sides, flat base - 92% area)
  {
    type: "border-radius",
    borderRadius: "50% 50% 16% 16%",
    name: "Arch Window Cut",
  },
  // 6. Diagonal Sliced Wedge (Sculpted diagonal facet with soft corners - 91% area)
  {
    type: "border-radius",
    borderRadius: "50% 18% 50% 40% / 40% 50% 18% 50%",
    name: "Diagonal Wedge Cut",
  },
  // 7. Sculpted Organic Oval (Smooth asymmetrical contour, 94% area)
  {
    type: "border-radius",
    borderRadius: "55% 45% 40% 60% / 50% 55% 45% 50%",
    name: "Sculpted Organic Oval",
  },
  // 8. Quarter-Circle Fan (Soft 90-degree corner, wide circular fan sweep - 90% area)
  {
    type: "border-radius",
    borderRadius: "50% 16% 16% 50%",
    name: "Quarter Fan Cut",
  },
  // 9. Inverted Half Cut Dome (Straight flat top, rounded bowl bottom - 92% area)
  {
    type: "border-radius",
    borderRadius: "14% 14% 50% 50%",
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
