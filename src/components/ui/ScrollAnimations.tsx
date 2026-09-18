"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";
import clsx from "clsx";

// Luxury Awwwards Easing Curves
const EASE_SMOOTH = [0.16, 1, 0.3, 1]; // Ultra-smooth deceleration curve (Apple / Awwwards standard)
const EASE_CINEMATIC = [0.25, 1, 0.5, 1]; // Soft cinematic breathing curve

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
  once = true,
}) => {
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

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: `blur(${blur}px)`,
        y: initialY,
        x: initialX,
        scale,
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        x: 0,
        scale: 1,
      }}
      viewport={{ once, margin: "-40px 0px -40px 0px" }}
      transition={{
        duration,
        delay,
        ease: EASE_SMOOTH,
      }}
      className={clsx(className, "motion-blur-layer")}
      style={{
        willChange: "opacity, transform",
        transform: "translateZ(0)",
      }}
    >
      {children}
    </motion.div>
  );
};

/* ─── 2. FLOW REVEAL (Fluid entrance for cards, badges, and quotes) ───────── */
export const FlowReveal = BlurReveal;

/* ─── 3. FADE UP REVEAL (Smooth vertical float with soft blur entrance) ───── */
interface FadeUpProps {
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
  once = true,
  distance = 24,
  blur = 12,
}) => (
  <motion.div
    initial={{
      opacity: 0,
      filter: `blur(${blur}px)`,
      y: distance,
      scale: 0.99,
    }}
    whileInView={{
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      scale: 1,
    }}
    viewport={{ once, margin: "-40px 0px -40px 0px" }}
    transition={{
      duration,
      delay,
      ease: EASE_SMOOTH,
    }}
    className={clsx(className, "motion-blur-layer")}
    style={{
      willChange: "opacity, transform",
      transform: "translateZ(0)",
    }}
  >
    {children}
  </motion.div>
);

/* ─── 4. STAGGERED CHILDREN (Cascading blurry flow for grids and lists) ───── */
interface StaggerProps {
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
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      filter: `blur(${blur}px)`,
      y,
      scale: 0.98,
    },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: EASE_SMOOTH,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px 0px -40px 0px" }}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div
          variants={itemVariants}
          className="motion-blur-layer"
          style={{
            willChange: "opacity, transform",
            transform: "translateZ(0)",
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

/* ─── 5. SLIDE IN FROM SIDE (Soft lateral drift with blur reveal) ─────────── */
interface SlideInProps {
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
}) => (
  <motion.div
    initial={{
      opacity: 0,
      filter: `blur(${blur}px)`,
      x: from === "left" ? -distance : distance,
      y: 10,
    }}
    whileInView={{
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      y: 0,
    }}
    viewport={{ once: true, margin: "-40px 0px -40px 0px" }}
    transition={{
      duration,
      delay,
      ease: EASE_SMOOTH,
    }}
    className={clsx(className, "motion-blur-layer")}
    style={{
      willChange: "opacity, transform",
      transform: "translateZ(0)",
    }}
  >
    {children}
  </motion.div>
);

/* ─── 6. ZOOM REVEAL (Cinematic scale & dreamy blur blend) ─────────────────── */
interface ZoomRevealProps {
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
}) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      initial={{
        scale,
        opacity: 0,
        filter: `blur(${blur}px)`,
      }}
      whileInView={{
        scale: 1,
        opacity: 1,
        filter: "blur(0px)",
      }}
      viewport={{ once: true, margin: "-40px 0px -40px 0px" }}
      transition={{
        duration,
        delay,
        ease: EASE_SMOOTH,
      }}
      className="motion-blur-layer"
      style={{
        willChange: "opacity, transform",
        transform: "translateZ(0)",
      }}
    >
      {children}
    </motion.div>
  </div>
);

/* ─── 7. CLIP-PATH REVEAL (Curtain wipe effect) ────────────────────────────── */
interface ClipRevealProps {
  children: React.ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
}

export const ClipReveal: React.FC<ClipRevealProps> = ({
  children,
  direction = "up",
  delay = 0,
  duration = 0.75,
  className = "",
}) => {
  const clips: Record<string, { hidden: string; show: string }> = {
    up: {
      hidden: "inset(100% 0% 0% 0%)",
      show: "inset(0% 0% 0% 0%)",
    },
    left: {
      hidden: "inset(0% 100% 0% 0%)",
      show: "inset(0% 0% 0% 0%)",
    },
    right: {
      hidden: "inset(0% 0% 0% 100%)",
      show: "inset(0% 0% 0% 0%)",
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, clipPath: clips[direction].hidden, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, clipPath: clips[direction].show, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-40px 0px -40px 0px" }}
      transition={{
        duration,
        delay,
        ease: EASE_SMOOTH,
      }}
      className={clsx(className, "motion-blur-layer")}
      style={{ willChange: "clip-path, opacity" }}
    >
      {children}
    </motion.div>
  );
};

/* ─── 8. PARALLAX WRAPPER (Scroll-driven depth layer) ─────────────────────── */
interface ParallaxProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export const ParallaxLayer: React.FC<ParallaxProps> = ({
  children,
  speed = -0.15,
  className = "",
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 25 });
  const y = useTransform(smoothProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
};

/* ─── 9. SPLIT TEXT REVEAL (Word-by-word with blur & float) ───────────────── */
interface SplitTextProps {
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
  wordClassName = "",
  delay = 0,
  stagger = 0.04,
  as: Tag = "h2",
}) => {
  const words = text.split(" ");
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word = {
    hidden: { opacity: 0, filter: "blur(8px)", y: "30%", rotateX: -8 },
    show: {
      opacity: 1,
      filter: "blur(0px)",
      y: "0%",
      rotateX: 0,
      transition: { duration: 0.75, ease: EASE_SMOOTH },
    },
  };

  return (
    <Tag className={className} style={{ perspective: "800px" }}>
      <motion.span
        style={{ display: "flex", flexWrap: "wrap", gap: "0.25em" }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px 0px" }}
      >
        {words.map((w, i) => (
          <motion.span
            key={i}
            variants={word}
            className={`inline-block overflow-hidden ${wordClassName}`}
            style={{ transformOrigin: "bottom center" }}
          >
            {w}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
};

/* ─── 10. COUNT UP NUMBER (Smooth quartic cubic easing) ───────────────────── */
interface CountUpProps {
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
  const isInView = useInView(ref, { once: true, margin: "-30px 0px" });
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!isInView) return;
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
  }, [isInView, end, duration, delay]);

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  );
};

/* ─── 11. TILT & HOVER CARDS (Soft micro-interactions) ────────────────────── */
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -5, transition: { duration: 0.35, ease: "easeOut" } }}
    whileTap={{ scale: 0.985 }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── 12. SCROLL PROGRESS BAR (Silky spring interpolation) ───────────────── */
export const ScrollProgressBar: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 25, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2.5px] z-[100] origin-left bg-gradient-to-r from-[#C79A45] via-[#93A579] to-[#C79A45] shadow-[0_0_8px_rgba(199,154,69,0.6)]"
      style={{ scaleX }}
    />
  );
};

/* ─── 13. INTERACTIVE 3D TILT CARD (Awwwards-grade subtle magnetic depth) ─── */
interface InteractiveTiltProps {
  children: React.ReactNode;
  className?: string;
}

export const InteractiveTilt: React.FC<InteractiveTiltProps> = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -6, scale: 1.015, transition: { duration: 0.35, ease: EASE_SMOOTH } }}
    whileTap={{ scale: 0.98 }}
    className={`transition-shadow duration-500 hover:shadow-[0_12px_32px_rgba(199,154,69,0.18)] ${className}`}
  >
    {children}
  </motion.div>
);

/* ─── 14. PULSE AURA (Gentle bioluminescent energetic breathing ring) ─────── */
interface PulseAuraProps {
  children: React.ReactNode;
  className?: string;
}

export const PulseAura: React.FC<PulseAuraProps> = ({ children, className = "" }) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#C79A45]/30 to-[#93A579]/30 blur-md opacity-40 group-hover:opacity-100 group-hover:blur-lg transition-all duration-700 animate-pulse pointer-events-none" />
    <div className="relative">{children}</div>
  </div>
);
