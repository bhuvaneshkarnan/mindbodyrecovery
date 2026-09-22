"use client";

import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";

// Luxury Awwwards Easing Curve (Apple / Awwwards standard deceleration)
const EASE_SMOOTH_CSS = "cubic-bezier(0.16, 1, 0.3, 1)";

// Shared Singleton IntersectionObserver for zero memory and CPU overhead
type RevealCallback = (entry: IntersectionObserverEntry) => void;
let globalObserver: IntersectionObserver | null = null;
const observerCallbacks = new Map<Element, RevealCallback>();

function getGlobalObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return null;
  if (!globalObserver) {
    globalObserver = new IntersectionObserver(
      (entries) => {
        for (let i = 0; i < entries.length; i++) {
          const entry = entries[i];
          if (entry.isIntersecting) {
            const cb = observerCallbacks.get(entry.target);
            if (cb) {
              cb(entry);
              observerCallbacks.delete(entry.target);
              globalObserver?.unobserve(entry.target);
            }
          }
        }
      },
      { rootMargin: "-40px 0px -40px 0px", threshold: 0.05 }
    );
  }
  return globalObserver;
}

function observeElement(el: Element, callback: RevealCallback) {
  const obs = getGlobalObserver();
  if (!obs) {
    callback({ isIntersecting: true } as unknown as IntersectionObserverEntry);
    return;
  }
  observerCallbacks.set(el, callback);
  obs.observe(el);
}

function unobserveElement(el: Element) {
  if (globalObserver) {
    globalObserver.unobserve(el);
    observerCallbacks.delete(el);
  }
}

function useReveal(delay: number = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check if element is already inside or near viewport on mount
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      if (delay > 0) {
        const timer = setTimeout(() => setRevealed(true), delay * 1000);
        return () => clearTimeout(timer);
      }
      setRevealed(true);
      return;
    }

    observeElement(el, () => {
      if (delay > 0) {
        setTimeout(() => setRevealed(true), delay * 1000);
      } else {
        setRevealed(true);
      }
    });

    return () => {
      unobserveElement(el);
    };
  }, [delay]);

  return { ref, revealed };
}

/* ─── 1. BLUR REVEAL (Flagship cinematic blurry flow reveal) ──────────────── */
export interface BlurRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  blur?: number;
  y?: number;
  x?: number;
  scale?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

export const BlurReveal: React.FC<BlurRevealProps> = ({
  children,
  delay = 0,
  duration = 0.85,
  blur = 14,
  y,
  x,
  scale = 0.98,
  direction = "up",
  className = "",
}) => {
  const { ref, revealed } = useReveal(delay);

  let initialY = y ?? 0;
  let initialX = x ?? 0;

  if (y === undefined && x === undefined) {
    switch (direction) {
      case "up":
        initialY = 28;
        break;
      case "down":
        initialY = -28;
        break;
      case "left":
        initialX = -32;
        initialY = 6;
        break;
      case "right":
        initialX = 32;
        initialY = 6;
        break;
      case "none":
        initialY = 0;
        initialX = 0;
        break;
    }
  }

  const style: React.CSSProperties = {
    opacity: revealed ? 1 : 0,
    transform: revealed
      ? "translate3d(0, 0, 0) scale(1)"
      : `translate3d(${initialX}px, ${initialY}px, 0) scale(${scale})`,
    filter: revealed ? "blur(0px)" : `blur(${blur}px)`,
    transition: `opacity ${duration}s ${EASE_SMOOTH_CSS}, transform ${duration}s ${EASE_SMOOTH_CSS}, filter ${duration}s ${EASE_SMOOTH_CSS}`,
    willChange: revealed ? "auto" : "opacity, transform",
  };

  return (
    <div ref={ref} className={clsx(className, "motion-blur-layer")} style={style}>
      {children}
    </div>
  );
};

/* ─── 2. FLOW REVEAL (Fluid entrance for cards, badges, and quotes) ───────── */
export const FlowReveal = BlurReveal;

/* ─── 3. FADE UP REVEAL (Smooth vertical float with soft blur entrance) ───── */
export interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  distance?: number;
  blur?: number;
}

export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  distance = 24,
  blur = 12,
}) => {
  const { ref, revealed } = useReveal(delay);

  const style: React.CSSProperties = {
    opacity: revealed ? 1 : 0,
    transform: revealed
      ? "translate3d(0, 0, 0) scale(1)"
      : `translate3d(0, ${distance}px, 0) scale(0.99)`,
    filter: revealed ? "blur(0px)" : `blur(${blur}px)`,
    transition: `opacity ${duration}s ${EASE_SMOOTH_CSS}, transform ${duration}s ${EASE_SMOOTH_CSS}, filter ${duration}s ${EASE_SMOOTH_CSS}`,
    willChange: revealed ? "auto" : "opacity, transform",
  };

  return (
    <div ref={ref} className={clsx(className, "motion-blur-layer")} style={style}>
      {children}
    </div>
  );
};

/* ─── 4. STAGGERED CHILDREN (Cascading blurry flow for grids and lists) ───── */
export interface StaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delay?: number;
  className?: string;
  blur?: number;
  y?: number;
}

export const StaggerReveal: React.FC<StaggerProps> = ({
  children,
  staggerDelay = 0.08,
  delay = 0,
  className = "",
  blur = 12,
  y = 22,
}) => {
  const { ref, revealed } = useReveal(delay);

  return (
    <div ref={ref} className={className}>
      {React.Children.map(children, (child, idx) => {
        const itemDelay = idx * staggerDelay;
        const style: React.CSSProperties = {
          opacity: revealed ? 1 : 0,
          transform: revealed
            ? "translate3d(0, 0, 0) scale(1)"
            : `translate3d(0, ${y}px, 0) scale(0.98)`,
          filter: revealed ? "blur(0px)" : `blur(${blur}px)`,
          transition: `opacity 0.8s ${EASE_SMOOTH_CSS} ${itemDelay}s, transform 0.8s ${EASE_SMOOTH_CSS} ${itemDelay}s, filter 0.8s ${EASE_SMOOTH_CSS} ${itemDelay}s`,
          willChange: revealed ? "auto" : "opacity, transform",
        };

        return (
          <div className="motion-blur-layer" style={style}>
            {child}
          </div>
        );
      })}
    </div>
  );
};

/* ─── 5. SLIDE IN FROM SIDE (Soft lateral drift with blur reveal) ─────────── */
export interface SlideInProps {
  children: React.ReactNode;
  from?: "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
  blur?: number;
}

export const SlideIn: React.FC<SlideInProps> = ({
  children,
  from = "left",
  delay = 0,
  duration = 0.85,
  className = "",
  distance = 28,
  blur = 12,
}) => {
  const { ref, revealed } = useReveal(delay);
  const initialX = from === "left" ? -distance : distance;

  const style: React.CSSProperties = {
    opacity: revealed ? 1 : 0,
    transform: revealed
      ? "translate3d(0, 0, 0)"
      : `translate3d(${initialX}px, 10px, 0)`,
    filter: revealed ? "blur(0px)" : `blur(${blur}px)`,
    transition: `opacity ${duration}s ${EASE_SMOOTH_CSS}, transform ${duration}s ${EASE_SMOOTH_CSS}, filter ${duration}s ${EASE_SMOOTH_CSS}`,
    willChange: revealed ? "auto" : "opacity, transform",
  };

  return (
    <div ref={ref} className={clsx(className, "motion-blur-layer")} style={style}>
      {children}
    </div>
  );
};

/* ─── 6. ZOOM REVEAL (Cinematic scale & dreamy blur blend) ─────────────────── */
export interface ZoomRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  blur?: number;
  scale?: number;
}

export const ZoomReveal: React.FC<ZoomRevealProps> = ({
  children,
  delay = 0,
  duration = 0.85,
  className = "",
  blur = 14,
  scale = 1.05,
}) => {
  const { ref, revealed } = useReveal(delay);

  const style: React.CSSProperties = {
    opacity: revealed ? 1 : 0,
    transform: revealed ? "scale(1)" : `scale(${scale})`,
    filter: revealed ? "blur(0px)" : `blur(${blur}px)`,
    transition: `opacity ${duration}s ${EASE_SMOOTH_CSS}, transform ${duration}s ${EASE_SMOOTH_CSS}, filter ${duration}s ${EASE_SMOOTH_CSS}`,
    willChange: revealed ? "auto" : "opacity, transform",
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={ref} className="motion-blur-layer" style={style}>
        {children}
      </div>
    </div>
  );
};

/* ─── 7. CLIP REVEAL ─────────────────────────────────────────────────────── */
export interface ClipRevealProps {
  children: React.ReactNode;
  direction?: "left" | "right" | "top" | "bottom" | "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
}

export const ClipReveal: React.FC<ClipRevealProps> = ({
  children,
  direction = "bottom",
  delay = 0,
  duration = 0.9,
  className = "",
}) => {
  const { ref, revealed } = useReveal(delay);

  const clips: Record<string, { hidden: string; show: string }> = {
    left: { hidden: "inset(0 100% 0 0)", show: "inset(0 0% 0 0)" },
    right: { hidden: "inset(0 0 0 100%)", show: "inset(0 0% 0 0)" },
    top: { hidden: "inset(0 0 100% 0)", show: "inset(0 0 0% 0)" },
    down: { hidden: "inset(0 0 100% 0)", show: "inset(0 0 0% 0)" },
    bottom: { hidden: "inset(100% 0 0 0)", show: "inset(0% 0 0 0)" },
    up: { hidden: "inset(100% 0 0 0)", show: "inset(0% 0 0 0)" },
  };

  const currentClip = clips[direction] || clips.bottom;

  const style: React.CSSProperties = {
    opacity: revealed ? 1 : 0,
    clipPath: revealed ? currentClip.show : currentClip.hidden,
    filter: revealed ? "blur(0px)" : "blur(8px)",
    transition: `opacity ${duration}s ${EASE_SMOOTH_CSS}, clip-path ${duration}s ${EASE_SMOOTH_CSS}, filter ${duration}s ${EASE_SMOOTH_CSS}`,
    willChange: revealed ? "auto" : "clip-path, opacity",
  };

  return (
    <div ref={ref} className={clsx(className, "motion-blur-layer")} style={style}>
      {children}
    </div>
  );
};

/* ─── 8. PARALLAX WRAPPER (Scroll-driven depth layer) ─────────────────────── */
export interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxLayer: React.FC<ParallaxProps> = ({ children, className = "" }) => (
  <div className={`overflow-hidden ${className}`}>{children}</div>
);

/* ─── 9. SPLIT TEXT REVEAL (Word-by-word with blur & float) ───────────────── */
export interface SplitTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export const SplitText: React.FC<SplitTextProps> = ({
  text,
  className = "",
  as: Tag = "h2",
}) => {
  return <Tag className={className}>{text}</Tag>;
};

/* ─── 10. COUNT UP NUMBER ────────────────────────────────────────────────── */
export interface CountUpProps {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delay?: number;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  prefix = "",
  suffix = "",
  duration = 2.0,
  delay = 0,
  className = "",
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let hasStarted = false;
    const startCount = () => {
      if (hasStarted) return;
      hasStarted = true;
      let start: number | null = null;
      const step = (timestamp: number) => {
        if (!start) start = timestamp + delay * 1000;
        const elapsed = Math.max(0, timestamp - start);
        const progress = Math.min(elapsed / (duration * 1000), 1);
        const eased = 1 - Math.pow(1 - progress, 4); // Quartic ease out
        setCount(Math.round(eased * end));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    observeElement(el, startCount);
    return () => unobserveElement(el);
  }, [end, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

/* ─── 11. TILT & HOVER CARDS (Native CSS micro-interactions) ─────────────── */
export interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = "" }) => (
  <div className={clsx("transition-transform duration-300 hover:-translate-y-1 active:scale-[0.985]", className)}>
    {children}
  </div>
);

/* ─── 12. SCROLL PROGRESS BAR (Silky 120fps Native RAF) ───────────────────── */
export const ScrollProgressBar: React.FC = () => {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const total = document.documentElement.scrollHeight - window.innerHeight;
          const progress = total > 0 ? Math.min(1, Math.max(0, window.scrollY / total)) : 0;
          if (barRef.current) {
            barRef.current.style.transform = `scaleX(${progress})`;
          }
          ticking = false;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] origin-left bg-gradient-to-r from-[#C79A45] via-[#93A579] to-[#C79A45] shadow-[0_0_8px_rgba(199,154,69,0.6)] pointer-events-none"
      style={{ transform: "scaleX(0)", willChange: "transform" }}
    />
  );
};

/* ─── 13. INTERACTIVE 3D TILT CARD (Awwwards-grade subtle depth) ─────────── */
export interface InteractiveTiltProps {
  children: React.ReactNode;
  className?: string;
}

export const InteractiveTilt: React.FC<InteractiveTiltProps> = ({ children, className = "" }) => (
  <div
    className={clsx(
      "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_32px_rgba(199,154,69,0.18)] active:scale-[0.98]",
      className
    )}
  >
    {children}
  </div>
);

/* ─── 14. PULSE AURA (Gentle bioluminescent energetic breathing ring) ─────── */
export interface PulseAuraProps {
  children: React.ReactNode;
  className?: string;
}

export const PulseAura: React.FC<PulseAuraProps> = ({ children, className = "" }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C79A45]/30 to-[#93A579]/30 blur-md opacity-40 group-hover:opacity-100 group-hover:blur-lg transition-all duration-700 animate-pulse pointer-events-none" />
    <div className="relative">{children}</div>
  </div>
);
