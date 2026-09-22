"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import clsx from "clsx";

export function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // Default state is ON
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Pleasant soothing ambient volume level
    audio.volume = 0.26;
    audio.muted = false;

    const cleanupListeners = () => {
      window.removeEventListener("pointerdown", handleUserUnlock);
      window.removeEventListener("touchstart", handleUserUnlock);
      window.removeEventListener("touchend", handleUserUnlock);
      window.removeEventListener("click", handleUserUnlock);
      window.removeEventListener("keydown", handleUserUnlock);
      window.removeEventListener("scroll", handleUserUnlock);
      window.removeEventListener("wheel", handleUserUnlock);
    };

    const handleUserUnlock = () => {
      if (!audioRef.current) return;
      audioRef.current.muted = false;
      audioRef.current.volume = 0.26;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            cleanupListeners();
          })
          .catch(() => {
            // Still waiting for a qualifying user activation event
          });
      }
    };

    // 1. Attempt direct unmuted playback on load
    const initialPlay = audio.play();
    if (initialPlay !== undefined) {
      initialPlay
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Modern browsers restrict unmuted autoplay before the first user gesture.
          // Pre-start muted so the audio buffer is warm and playing in sync,
          // then instantly unmute on the very first gesture (touch, scroll, click, key).
          audio.muted = true;
          audio.play().catch(() => {});

          window.addEventListener("pointerdown", handleUserUnlock, { passive: true });
          window.addEventListener("touchstart", handleUserUnlock, { passive: true });
          window.addEventListener("touchend", handleUserUnlock, { passive: true });
          window.addEventListener("click", handleUserUnlock);
          window.addEventListener("keydown", handleUserUnlock);
          window.addEventListener("scroll", handleUserUnlock, { passive: true });
          window.addEventListener("wheel", handleUserUnlock, { passive: true });
        });
    }

    return () => {
      cleanupListeners();
    };
  }, []);

  const togglePlayback = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Check true underlying audio status rather than just state
    if (audio.paused || audio.muted) {
      audio.muted = false;
      audio.volume = 0.26;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.warn("Audio playback prevented:", err);
        });
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        autoPlay
        playsInline
        preload="auto"
        className="hidden"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src="/audio/bg-audio.mp3" type="audio/mpeg" />
        <source src="/audio/bg-audio.webm" type="audio/webm" />
      </audio>

      {/* Luxury Ambient Sound Floating Badge */}
      <aside
        aria-label="Ambient sound controller"
        className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 select-none pointer-events-auto"
      >
        <button
          onClick={togglePlayback}
          type="button"
          aria-label={isPlaying ? "Mute ambient audio" : "Play ambient audio"}
          title={isPlaying ? "Click to mute ambient sound" : "Click to play ambient sound"}
          className={clsx(
            "flex items-center gap-2.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full",
            "bg-[#141A10]/92 hover:bg-[#1A2215] active:scale-95",
            "backdrop-blur-md transition-all duration-300 shadow-xl",
            isPlaying
              ? "border border-[#C79A45]/50 shadow-[0_0_16px_rgba(199,154,69,0.22)]"
              : "border border-[#F6F1E4]/20 opacity-80 hover:opacity-100"
          )}
        >
          {/* Animated Equalizer Waveform Bars */}
          <div className="flex items-end gap-[2.5px] h-3.5 w-3.5 justify-center">
            <span
              className={clsx(
                "w-[2px] rounded-full bg-[#C79A45] transition-all duration-200",
                isPlaying ? "animate-[soundBar1_1s_ease-in-out_infinite]" : "h-1 opacity-50"
              )}
              style={isPlaying ? { animationDelay: "0ms" } : undefined}
            />
            <span
              className={clsx(
                "w-[2px] rounded-full bg-[#C79A45] transition-all duration-200",
                isPlaying ? "animate-[soundBar2_0.8s_ease-in-out_infinite]" : "h-1.5 opacity-50"
              )}
              style={isPlaying ? { animationDelay: "150ms" } : undefined}
            />
            <span
              className={clsx(
                "w-[2px] rounded-full bg-[#C79A45] transition-all duration-200",
                isPlaying ? "animate-[soundBar3_1.2s_ease-in-out_infinite]" : "h-1 opacity-50"
              )}
              style={isPlaying ? { animationDelay: "300ms" } : undefined}
            />
          </div>

          {/* Status Label */}
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-sans tracking-wide">
            <span className="text-[#F6F1E4]/90 font-medium">Ambient</span>
            <span
              className={clsx(
                "text-[9px] uppercase tracking-wider font-semibold px-1.5 py-0.5 rounded-full",
                isPlaying
                  ? "bg-[#C79A45]/20 text-[#D4A752] border border-[#C79A45]/30"
                  : "bg-white/10 text-[#F6F1E4]/50 border border-white/10"
              )}
            >
              {isPlaying ? "ON" : "OFF"}
            </span>
          </div>
        </button>
      </aside>

      {/* Global Soundbar Animation Keyframes */}
      <style jsx global>{`
        @keyframes soundBar1 {
          0%, 100% { height: 3px; }
          50% { height: 13px; }
        }
        @keyframes soundBar2 {
          0%, 100% { height: 14px; }
          50% { height: 4px; }
        }
        @keyframes soundBar3 {
          0%, 100% { height: 5px; }
          50% { height: 14px; }
        }
      `}</style>
    </>
  );
}
