"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Calendar, Phone, Clock, ArrowLeft } from "lucide-react";

interface AssessmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialConcern?: string;
}

export const AssessmentModal: React.FC<AssessmentModalProps> = ({
  isOpen,
  onClose,
  initialConcern,
}) => {
  const [step, setStep] = useState(1);
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>(
    initialConcern ? [initialConcern] : ["Sleep Problems"]
  );
  const [selectedDuration, setSelectedDuration] = useState("1–3 Months");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (initialConcern) {
      setSelectedConcerns((prev) =>
        prev.includes(initialConcern) ? prev : [initialConcern, ...prev]
      );
    }
  }, [initialConcern]);

  const toggleConcern = (item: string) => {
    setSelectedConcerns((prev) => {
      if (prev.includes(item)) {
        return prev.filter((c) => c !== item);
      } else {
        return [...prev, item];
      }
    });
  };

  const concernsList = [
    "Sleep Problems",
    "Stress & Overthinking",
    "Mental Fatigue & Low Energy",
    "Pain & Body Tension",
    "2-Day Reset Retreat",
  ];

  const durationOptions = [
    "A few weeks",
    "1–3 Months",
    "6+ Months",
    "Over a year",
  ];

  const handleNext = () => {
    if (step === 1 && selectedConcerns.length === 0) return;
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone) return;
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setStep(1);
    setSelectedConcerns(initialConcern ? [initialConcern] : ["Sleep Problems"]);
    setFullName("");
    setPhone("");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 bg-ink-950/85 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-lg bg-[#1B1E15] border border-[#C79A45]/40 rounded-2xl p-6 sm:p-8 text-[#F6F1E4] shadow-2xl z-10 my-8"
        >
          {/* Close Button */}
          <button
            onClick={handleResetAndClose}
            className="absolute top-4 right-4 p-2 text-[#F6F1E4]/60 hover:text-[#F6F1E4] transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>

          {!submitted ? (
            <div>
              {/* Header */}
              <div className="mb-6">
                <span className="text-[10px] uppercase tracking-widest text-[#C79A45] font-semibold block mb-1">
                  Step 0{step} of 03 &middot; Assessment
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-[#F6F1E4] tracking-tight">
                  Book Your Assessment
                </h3>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-1 bg-[#12140D] rounded-full mb-8 overflow-hidden">
                <motion.div
                  className="h-full bg-[#C79A45]"
                  initial={{ width: "33%" }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* STEP 1: Concern Selection (Multi-select) */}
              {step === 1 && (
                <div className="space-y-4">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-[#F6F1E4]/70 font-medium">
                      What is the primary concern you want to address?
                    </p>
                    <p className="text-[11px] text-[#C79A45]/80 font-sans mt-1">
                      (Select one or more concerns)
                    </p>
                  </div>
                  <div className="space-y-2">
                    {concernsList.map((item) => {
                      const isSelected = selectedConcerns.includes(item);
                      return (
                        <button
                          key={item}
                          type="button"
                          onClick={() => toggleConcern(item)}
                          className={`w-full p-3.5 rounded-xl text-left text-sm font-sans flex items-center justify-between border transition-all ${
                            isSelected
                              ? "bg-[#12140D] border-[#C79A45] text-[#C79A45] font-medium shadow-[0_0_12px_rgba(199,154,69,0.12)]"
                              : "bg-[#12140D]/60 border-[#F6F1E4]/10 text-[#F6F1E4]/80 hover:bg-[#12140D]"
                          }`}
                        >
                          <span>{item}</span>
                          {isSelected && <Check size={16} className="text-[#C79A45] shrink-0" />}
                        </button>
                      );
                    })}
                  </div>

                  <div className="pt-6">
                    <button
                      onClick={handleNext}
                      disabled={selectedConcerns.length === 0}
                      className="group w-full py-3 bg-[#C79A45] hover:bg-[#D4A752] disabled:opacity-40 disabled:cursor-not-allowed text-[#12140D] text-xs uppercase tracking-widest font-semibold rounded-xl transition-all shadow-md active:scale-[0.98] flex items-center justify-center space-x-2"
                    >
                      <span>Continue</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </button>
                    {selectedConcerns.length === 0 && (
                      <p className="text-center text-[11px] text-[#C79A45]/70 mt-2">
                        Please select at least one concern
                      </p>
                    )}
                  </div>
                </div>
              )}

              {/* STEP 2: Duration Experience */}
              {step === 2 && (
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-widest text-[#F6F1E4]/70 font-medium">
                    How long has your body carried this?
                  </p>
                  <div className="space-y-2">
                    {durationOptions.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setSelectedDuration(opt)}
                        className={`w-full p-3.5 rounded-xl text-left text-sm font-sans flex items-center justify-between border transition-all ${
                          selectedDuration === opt
                            ? "bg-[#12140D] border-[#C79A45] text-[#C79A45] font-medium"
                            : "bg-[#12140D]/60 border-[#F6F1E4]/10 text-[#F6F1E4]/80 hover:bg-[#12140D]"
                        }`}
                      >
                        <span>{opt}</span>
                        {selectedDuration === opt && <Check size={16} />}
                      </button>
                    ))}
                  </div>

                  <div className="pt-6 flex items-center space-x-3">
                    <button
                      onClick={handleBack}
                      className="px-4 py-3 border border-[#F6F1E4]/20 text-[#F6F1E4]/70 hover:text-[#F6F1E4] text-xs uppercase tracking-widest font-medium rounded-xl flex items-center space-x-1 transition-colors"
                    >
                      <ArrowLeft size={14} />
                      <span>Back</span>
                    </button>
                    <button
                      onClick={handleNext}
                      className="group flex-1 py-3 bg-[#C79A45] hover:bg-[#D4A752] text-[#12140D] text-xs uppercase tracking-widest font-semibold rounded-xl transition-all shadow-md active:scale-[0.98] flex items-center justify-center space-x-2"
                    >
                      <span>Continue</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact & Booking */}
              {step === 3 && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <p className="text-xs uppercase tracking-widest text-[#F6F1E4]/70 font-medium mb-1">
                    Where should we confirm your appointment?
                  </p>

                  <div className="p-3.5 bg-[#12140D] border border-[#F6F1E4]/10 rounded-xl text-xs text-[#F6F1E4]/70 space-y-1 mb-2">
                    <p><span className="text-[#C79A45] font-medium">{selectedConcerns.length > 1 ? "Concerns:" : "Concern:"}</span> {selectedConcerns.join(", ")}</p>
                    <p><span className="text-[#C79A45] font-medium">Duration:</span> {selectedDuration}</p>
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#F6F1E4]/70 mb-1 font-medium">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Ramesh Krishnan"
                      className="w-full px-3.5 py-2.5 bg-[#12140D] border border-[#F6F1E4]/20 text-[#F6F1E4] text-sm rounded-xl focus:outline-none focus:border-[#C79A45]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#F6F1E4]/70 mb-1 font-medium">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 bg-[#12140D] border border-[#F6F1E4]/20 text-[#F6F1E4] text-sm rounded-xl focus:outline-none focus:border-[#C79A45]"
                    />
                  </div>

                  <div className="pt-4 flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-4 py-3 border border-[#F6F1E4]/20 text-[#F6F1E4]/70 hover:text-[#F6F1E4] text-xs uppercase tracking-widest font-medium rounded-xl flex items-center space-x-1 transition-colors"
                    >
                      <ArrowLeft size={14} />
                      <span>Back</span>
                    </button>
                    <button
                      type="submit"
                      className="group flex-1 py-3 bg-[#C79A45] hover:bg-[#D4A752] text-[#12140D] text-xs uppercase tracking-widest font-semibold rounded-xl transition-all shadow-md active:scale-[0.98] flex items-center justify-center space-x-2"
                    >
                      <Calendar size={14} />
                      <span>Confirm Assessment</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            /* Submission Success Monograph */
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-[#C79A45]/15 border border-[#C79A45] rounded-full flex items-center justify-center mx-auto text-[#C79A45]">
                <Check size={28} />
              </div>

              <h3 className="font-display text-2xl sm:text-3xl text-[#F6F1E4]">
                Assessment Requested
              </h3>

              <p className="text-sm text-[#F6F1E4]/80 font-sans max-w-sm mx-auto leading-relaxed">
                Thank you, <span className="text-[#C79A45] font-medium">{fullName}</span>. We will reach out to <span className="text-[#F6F1E4] font-medium">{phone}</span> to confirm your quiet consultation slot.
              </p>

              <div className="pt-4">
                <button
                  onClick={handleResetAndClose}
                  className="px-6 py-2.5 border border-[#C79A45]/50 text-[#C79A45] hover:bg-[#C79A45] hover:text-[#12140D] text-xs uppercase tracking-widest font-medium transition-colors rounded-xl"
                >
                  Close Window
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
