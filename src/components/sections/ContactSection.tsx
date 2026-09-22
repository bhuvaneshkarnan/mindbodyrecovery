"use client";

import React, { useState } from "react";
import { clinicData } from "@/data/clinicData";
import { Phone, Mail, MapPin, CheckCircle2, Navigation } from "lucide-react";
import { SlideIn, FadeUp, BlurReveal } from "@/components/ui/ScrollAnimations";

interface ContactSectionProps {
  onOpenAssessment?: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    concern: "Sleep Problems",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative border-b border-[#F6F1E4]/10 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
        
        {/* Left Half: Intake Form (6 cols) */}
        <div className="lg:col-span-6 relative p-8 sm:p-14 lg:p-20 flex flex-col justify-between">
          {/* Base background layer behind neural spine */}
          <div className="absolute inset-0 bg-[#FAFAFA] pointer-events-none" />

          {/* Intake Form Content in front of neural spine (z-10) */}
          <SlideIn from="left" className="relative z-10 flex flex-col justify-between h-full text-[#231F19]">
            <div>
              <BlurReveal delay={0.08}>
                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#231F19] font-semibold tracking-tight mb-4 leading-[1.1]">
                  Ready to begin?
                </h2>
              </BlurReveal>

              <p className="text-sm sm:text-base text-[#231F19]/80 font-sans mb-8 leading-relaxed font-light">
                Schedule your assessment with Sameer&apos;s team in Chennai.
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} data-webmcp-form="assessment-intake" aria-label="Clinical Assessment Inquiry Form" className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name-input" className="block text-xs uppercase tracking-wider text-[#231F19]/80 font-medium mb-1">
                        Your Name
                      </label>
                      <input
                        id="name-input"
                        name="name"
                        autoComplete="name"
                        type="text"
                        required
                        data-webmcp-input="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Aditi Sharma"
                        className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#E5E7EB] text-[#231F19] text-sm rounded-md focus:outline-none focus:border-[#C79A45] transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone-input" className="block text-xs uppercase tracking-wider text-[#231F19]/80 font-medium mb-1">
                        Phone Number
                      </label>
                      <input
                        id="phone-input"
                        name="phone"
                        autoComplete="tel"
                        type="tel"
                        required
                        data-webmcp-input="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#E5E7EB] text-[#231F19] text-sm rounded-md focus:outline-none focus:border-[#C79A45] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="concern-select" className="block text-xs uppercase tracking-wider text-[#231F19]/80 font-medium mb-1">
                      Primary Area of Concern
                    </label>
                    <select
                      id="concern-select"
                      name="concern"
                      aria-label="Primary Area of Concern"
                      data-webmcp-input="concern"
                      value={formData.concern}
                      onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                      className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#E5E7EB] text-[#231F19] text-sm rounded-md focus:outline-none focus:border-[#C79A45] transition-colors"
                    >
                      <option value="Sleep Problems">Sleep Problems</option>
                      <option value="Stress & Overthinking">Stress &amp; Overthinking</option>
                      <option value="Mental Fatigue & Low Energy">Mental Fatigue &amp; Low Energy</option>
                      <option value="Pain & Body Tension">Pain &amp; Body Tension</option>
                      <option value="2-Day Rebuild Reset Retreat">2-Day Rebuild Reset Retreat</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message-input" className="block text-xs uppercase tracking-wider text-[#231F19]/80 font-medium mb-1">
                      Brief Note (Optional)
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      rows={3}
                      data-webmcp-input="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us what you're experiencing or looking to resolve..."
                      className="w-full px-4 py-3 bg-[#FFFFFF] border border-[#E5E7EB] text-[#231F19] text-sm rounded-md focus:outline-none focus:border-[#C79A45] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#C79A45] hover:bg-[#D4A752] text-[#12140D] font-semibold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 shadow-md active:scale-95 inline-flex items-center justify-center gap-2 group"
                  >
                    <span>Submit Inquiry</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">&rarr;</span>
                  </button>
                </form>
              ) : (
                <div className="p-6 bg-[#EAE1CB] border border-[#E5E7EB] rounded-md space-y-3 text-center">
                  <CheckCircle2 size={36} className="text-[#C79A45] mx-auto" />
                  <h4 className="font-display text-xl text-[#231F19]">
                    Thank You, {formData.name}
                  </h4>
                  <p className="text-xs text-[#231F19]/80 font-sans">
                    We will get in touch shortly to confirm your assessment.
                  </p>
                </div>
              )}
            </div>

            <div className="pt-8 border-t border-[#231F19]/15 flex items-center justify-between text-xs text-[#231F19]/70">
              <span>Shanta Ayurveda Hospital &middot; T. Nagar, Chennai</span>
            </div>
          </SlideIn>
        </div>

        {/* Right Half: Direct Details (6 cols) */}
        <div className="lg:col-span-6 relative p-8 sm:p-14 lg:p-20 flex flex-col justify-between overflow-hidden">
          {/* Base background layer behind neural spine */}
          <div className="absolute inset-0 bg-[#12140D] pointer-events-none" />

          <SlideIn from="right" delay={0.15} className="relative z-10 text-[#F6F1E4] flex flex-col justify-between h-full">
            <div>
            {/* Live Location Map */}
            <div className="mb-8 space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-[11px] uppercase tracking-widest text-[#C79A45] font-medium font-sans">
                    Live Clinic Location
                  </span>
                </div>
                <span className="text-[11px] text-[#F6F1E4]/50 font-sans">T. Nagar, Chennai</span>
              </div>

              <div className="relative w-full h-[200px] sm:h-[220px] rounded-xl overflow-hidden border border-[#F6F1E4]/15 shadow-xl bg-[#1B1E15]">
                <iframe
                  title="Mind Body Recovery Location - Shanta Ayurveda Hospital, T. Nagar, Chennai"
                  src={clinicData.embedMapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-md bg-[#1B1E15] border border-[#F6F1E4]/10 text-[#C79A45] shrink-0 mt-0.5">
                  <Phone size={18} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#F6F1E4]/60 font-medium block">
                    Phone
                  </span>
                  <a
                    href={`tel:${clinicData.phone}`}
                    className="font-display text-xl text-[#F6F1E4] hover:text-[#C79A45] transition-colors"
                  >
                    {clinicData.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-md bg-[#1B1E15] border border-[#F6F1E4]/10 text-[#C79A45] shrink-0 mt-0.5">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#F6F1E4]/60 font-medium block">
                    Email
                  </span>
                  <a
                    href={`mailto:${clinicData.email}`}
                    className="font-sans text-sm text-[#F6F1E4] hover:text-[#C79A45] transition-colors"
                  >
                    {clinicData.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2.5 rounded-md bg-[#1B1E15] border border-[#F6F1E4]/10 text-[#C79A45] shrink-0 mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <span className="text-xs uppercase tracking-wider text-[#F6F1E4]/60 font-medium block">
                    Location
                  </span>
                  <p className="font-sans text-sm text-[#F6F1E4]/80 leading-relaxed max-w-sm">
                    {clinicData.address}
                    {clinicData.addressPlaceholder ? (
                      <>
                        <br />
                        <span className="text-xs text-[#F6F1E4]/50 italic">
                          {clinicData.addressPlaceholder}
                        </span>
                      </>
                    ) : null}
                  </p>
                  <a
                    href={clinicData.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-1 text-xs text-[#C79A45] hover:underline mt-2"
                  >
                    <Navigation size={12} />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-[#F6F1E4]/10 flex items-center justify-between text-xs text-[#F6F1E4]/60 relative z-10">
            <span>&copy; 2026 Mind Body Recovery</span>
            <span>All sessions by prior booking</span>
          </div>
        </SlideIn>
      </div>

      </div>
    </section>
  );
};
