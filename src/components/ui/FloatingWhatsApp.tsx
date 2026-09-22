"use client";

import React from "react";

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  defaultMessage?: string;
  className?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = "916374367559",
  defaultMessage = "Hello! I came from the website and would like to know more about treatments and assessments.",
  className = "",
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <aside
      aria-label="Direct WhatsApp contact"
      className={`fixed bottom-[70px] right-5 sm:bottom-[76px] sm:right-6 z-40 select-none pointer-events-auto ${className}`}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp (Opens in new tab)"
        title="Chat with our team on WhatsApp"
        className="group relative flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#25D366] hover:bg-[#20ba59] active:scale-95 text-white font-sans transition-all duration-300 shadow-[0_4px_18px_rgba(37,211,102,0.38)] hover:shadow-[0_6px_24px_rgba(37,211,102,0.55)] border border-white/25 backdrop-blur-sm"
      >
        {/* Pulsing Live Presence Dot */}
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
        </span>

        {/* WhatsApp Brand SVG Icon */}
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="currentColor"
          aria-hidden="true"
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:scale-110 flex-shrink-0"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>

        {/* Text Label */}
        <span className="text-[11px] sm:text-xs font-medium tracking-wide">
          Chat with us
        </span>
      </a>
    </aside>
  );
};
