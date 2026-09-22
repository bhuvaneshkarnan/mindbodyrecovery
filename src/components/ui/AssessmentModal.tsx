"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialConcern?: string;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-ink-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.4 }}
          className="relative w-full max-w-[660px] bg-[#141A10] border border-[#C79A45]/40 rounded-2xl p-4 sm:p-6 text-[#F6F1E4] shadow-2xl z-10 my-6"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 p-2 text-[#F6F1E4]/70 hover:text-white transition-colors focus:outline-none rounded-full bg-black/50 hover:bg-black/80"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="mb-4 pr-10">
            <span className="text-[10px] uppercase tracking-widest text-[#C79A45] font-semibold block mb-1">
              Mind Body Recovery &middot; Sameer
            </span>
            <h3 className="font-display text-2xl sm:text-3xl text-[#F6F1E4] tracking-tight">
              Book Your Appointment
            </h3>
            <p className="text-xs sm:text-sm text-[#F6F1E4]/70 font-sans mt-1">
              Select your preferred date, time, and service at Shanta Ayurveda Hospital, Chennai.
            </p>
          </div>

          {/* Boldlabs CRM Appointment Booking Form Embed */}
          <div className="w-full flex justify-center rounded-xl overflow-hidden bg-white">
            <iframe
              src="https://crm.goboldlabs.com/mindbodyrecovery/book?mode=steps&source=website_modal&hide_header=true"
              width="100%"
              height="620"
              frameBorder="0"
              style={{
                border: "none",
                borderRadius: "12px",
                maxWidth: "620px",
                width: "100%",
                minHeight: "580px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                background: "#FFFFFF",
              }}
              title="Book Appointment"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
