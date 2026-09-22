"use client";

import React, { useEffect, useRef } from "react";

interface CrmBookingWidgetProps {
  source?: string;
  className?: string;
}

export const CrmBookingWidget: React.FC<CrmBookingWidgetProps> = ({
  source = "website_form",
  className = "",
}) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Listen for postMessage height resize events from the CRM iframe
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data && e.data.type === "CRM_FRAME_RESIZE") {
        if (iframeRef.current && e.data.height) {
          iframeRef.current.style.height = `${e.data.height}px`;
        }
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className={`w-full flex justify-center ${className}`}>
      <iframe
        ref={iframeRef}
        id="crm-booking-widget"
        src={`https://crm.goboldlabs.com/mindbodyrecovery/book?mode=steps&source=${source}&hide_header=true`}
        width="100%"
        height="380"
        frameBorder="0"
        style={{
          border: "none",
          borderRadius: "12px",
          maxWidth: "580px",
          width: "100%",
          transition: "height 0.25s ease",
        }}
        title="Book Appointment"
        loading="lazy"
      />
    </div>
  );
};
