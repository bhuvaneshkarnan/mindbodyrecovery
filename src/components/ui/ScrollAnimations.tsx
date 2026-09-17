"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";

// Luxury Awwwards Easing Curves
const EASE_SMOOTH = [0.16, 1, 0.3, 1]; // Ultra-smooth deceleration curve (Apple / Awwwards standard)
const EASE_CINEMATIC = [0.25, 1, 0.5, 1]; // Soft cinematic breathing curve

/* ─── 1. FADE UP REVEAL (Subtle, organic vertical float) ──────────── */
interface FadeUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  distance?: number;
}
export const FadeUp: React.FC<FadeUpProps> = ({
  children,
  delay = 0,
  duration = 0.85,
  className = "",
  once = true,
  distance = 24,
}) => (
  <motion.div
    initial={{ opacity: 0, y: distance }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once, margin: "-40px" }}
    transition={{ duration, delay, ease: EASE_SMOOTH }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── 2. STAGGERED CHILDREN (Cascade reveal with soft easing) ─────── */
interface StaggerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  className?: string;
}
export const StaggerReveal: React.FC<StaggerProps> = ({
  children,
  staggerDelay = 0.08,
  className = "",
}) => {
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: staggerDelay },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE_SMOOTH } },
  };
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-40px" }}
      className={className}
    >
      {React.Children.map(children, (child) => (
        <motion.div variants={itemVariants}>{child}</motion.div>
      ))}
    </motion.div>
  );
};

/* ─── 3. CLIP-PATH REVEAL (Curtain wipe effect) ───────────────────── */
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
  duration = 1.1,
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
      initial={{ clipPath: clips[direction].hidden, opacity: 0.2 }}
      whileInView={{ clipPath: clips[direction].show, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease: EASE_SMOOTH }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/* ─── 4. PARALLAX WRAPPER (Scroll-driven depth layer) ────────────── */
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

/* ─── 5. ZOOM REVEAL (Cinematic scale & opacity blend) ────────────── */
interface ZoomRevealProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}
export const ZoomReveal: React.FC<ZoomRevealProps> = ({
  children,
  delay = 0,
  duration = 1.2,
  className = "",
}) => (
  <div className={`overflow-hidden ${className}`}>
    <motion.div
      initial={{ scale: 1.08, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration, delay, ease: EASE_SMOOTH }}
    >
      {children}
    </motion.div>
  </div>
);

/* ─── 6. SPLIT TEXT REVEAL (Word-by-word with 3D rotation) ────────── */
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
  stagger = 0.035,
  as: Tag = "h2",
}) => {
  const words = text.split(" ");
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word = {
    hidden: { opacity: 0, y: "30%", rotateX: -10 },
    show: {
      opacity: 1,
      y: "0%",
      rotateX: 0,
      transition: { duration: 0.7, ease: EASE_SMOOTH },
    },
  };
  return (
    <Tag className={className} style={{ perspective: "800px" }}>
      <motion.span
        style={{ display: "flex", flexWrap: "wrap", gap: "0.25em" }}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-40px" }}
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

/* ─── 7. COUNT UP NUMBER (Smooth cubic easing) ────────────────────── */
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
  const isInView = useInView(ref, { once: true, margin: "-30px" });
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

/* ─── 8. SLIDE IN FROM SIDE (Soft lateral drift) ─────────────────── */
interface SlideInProps {
  children: React.ReactNode;
  from?: "left" | "right";
  delay?: number;
  duration?: number;
  className?: string;
  distance?: number;
}
export const SlideIn: React.FC<SlideInProps> = ({
  children,
  from = "left",
  delay = 0,
  duration = 0.95,
  className = "",
  distance = 32,
}) => (
  <motion.div
    initial={{ opacity: 0, x: from === "left" ? -distance : distance }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration, delay, ease: EASE_SMOOTH }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── 9. TILT & HOVER CARDS (Soft micro-interactions) ─────────────── */
interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
}
export const TiltCard: React.FC<TiltCardProps> = ({ children, className = "" }) => (
  <motion.div
    whileHover={{ y: -4, transition: { duration: 0.35, ease: "easeOut" } }}
    whileTap={{ scale: 0.985 }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ─── 10. SCROLL PROGRESS BAR (Silky spring interpolation) ────────── */
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
