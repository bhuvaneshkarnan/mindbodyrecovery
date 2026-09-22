"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import clsx from "clsx";

export function BackgroundAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // Enabled and ON by default as requested
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Initialize and attempt low-volume ambient playback immediately on mount
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    // Standard low volume for ambient relaxation (18%)
    audio.volume = 0.18;

    const userMutedPref = sessionStorage.getItem("mbr_audio_user_muted");
    if (userMutedPref === "true") {
      setIsPlaying(false);
      audio.pause();
      return;
    }

    setIsPlaying(true);

    const startPlayback = () => {
      const currentPref = sessionStorage.getItem("mbr_audio_user_muted");
      if (currentPref === "true" || !audioRef.current) return;

      audioRef.current.volume = 0.18;
      const promise = audioRef.current.play();
      if (promise !== undefined) {
        promise
          .then(() => {
            setIsPlaying(true);
            cleanupListeners();
          })
          .catch(() => {});
      }
    };

    const cleanupListeners = () => {
      window.removeEventListener("pointerdown", startPlayback);
      window.removeEventListener("touchstart", startPlayback);
      window.removeEventListener("scroll", startPlayback);
      window.removeEventListener("wheel", startPlayback);
      window.removeEventListener("click", startPlayback);
      window.removeEventListener("keydown", startPlayback);
    };

    // Attempt direct autoplay
    const initialPlay = audio.play();
    if (initialPlay !== undefined) {
      initialPlay
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          // Modern browsers block unmuted audio until first user gesture (touch, scroll, click)
          // Keep UI ON and trigger instant playback on the very first gesture without delay
          window.addEventListener("pointerdown", startPlayback, { once: true, passive: true });
          window.addEventListener("touchstart", startPlayback, { once: true, passive: true });
          window.addEventListener("scroll", startPlayback, { once: true, passive: true });
          window.addEventListener("wheel", startPlayback, { once: true, passive: true });
          window.addEventListener("click", startPlayback, { once: true, passive: true });
          window.addEventListener("keydown", startPlayback, { once: true, passive: true });
        });
    }

    return () => {
      cleanupListeners();
    };
  }, []);

  const togglePlayback = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      sessionStorage.setItem("mbr_audio_user_muted", "true");
    } else {
      audio.volume = 0.18;
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          sessionStorage.removeItem("mbr_audio_user_muted");
        })
        .catch((err) => {
          console.warn("Audio playback prevented:", err);
        });
    }
  }, [isPlaying]);

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="metadata"
        className="hidden"
      >
        <source src="/audio/bg-audio.webm" type="audio/webm" />
        <source src="/audio/bg-audio.mp3" type="audio/mpeg" />
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
