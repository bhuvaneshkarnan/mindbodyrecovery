"use client";

import React from "react";
import clsx from "clsx";

export type NodeShape = "arch" | "circle" | "capsule" | "squircle";

interface ShapedImageNodeProps {
  shape: NodeShape;
  imageSrc: string;
  imageAlt: string;
  label: string;
  variant?: "dark" | "light";
  className?: string;
  containerClassName?: string;
  objectPosition?: string;
  isMobile?: boolean;
}

export const ShapedImageNode: React.FC<ShapedImageNodeProps> = ({
  shape,
  imageSrc,
  imageAlt,
  label,
  variant = "dark",
  className = "",
  containerClassName = "",
  objectPosition = "object-center",
  isMobile = false,
}) => {
  const isDark = variant === "dark";

  // Shape-specific styling for desktop vs mobile
  const shapeClasses = isMobile
    ? {
        arch: "w-[130px] h-[125px] rounded-t-full rounded-b-xl mx-auto",
        circle: "w-[125px] h-[125px] rounded-full aspect-square mx-auto",
        capsule: "w-[120px] h-[135px] rounded-full mx-auto",
        squircle: "w-[125px] h-[125px] rounded-[28px] mx-auto",
      }[shape]
    : {
        arch: "w-[156px] h-[142px] rounded-t-full rounded-b-2xl",
        circle: "w-[146px] h-[146px] rounded-full aspect-square",
        capsule: "w-[136px] h-[170px] rounded-full",
        squircle: "w-[140px] h-[142px] rounded-[38px]",
      }[shape];

  return (
    <div className={clsx("relative group transition-all duration-300 hover:scale-105", className)}>
      {/* Shaped Image Container */}
      <div
        className={clsx(
          "relative overflow-hidden border-2 transition-all duration-300",
          shapeClasses,
          containerClassName,
          isDark
            ? "border-[#C79A45]/70 group-hover:border-[#C79A45] bg-[#12180E] shadow-xl shadow-black/50 group-hover:shadow-[0_0_24px_rgba(199,154,69,0.35)]"
            : "border-[#C79A45]/70 group-hover:border-[#C79A45] bg-white shadow-xl shadow-stone-300/40 group-hover:shadow-[0_0_20px_rgba(199,154,69,0.25)]"
        )}
      >
        <img
          src={imageSrc}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          className={clsx(
            "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105",
            objectPosition
          )}
        />
      </div>

      {/* Floating Synaptic Label Pill */}
      <div
        className={clsx(
          "absolute -bottom-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full border shadow-md whitespace-nowrap z-20 pointer-events-none transition-all duration-300",
          isDark
            ? "bg-[#141A10]/95 border-[#C79A45]/60 group-hover:border-[#C79A45] text-[#F6F1E4]"
            : "bg-white/95 border-[#C79A45]/60 group-hover:border-[#C79A45] text-[#231F19]"
        )}
      >
        <span className="font-display text-[11px] font-medium tracking-wide block leading-tight">
          {label}
        </span>
      </div>
    </div>
  );
};
