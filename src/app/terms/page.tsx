import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Scale, AlertCircle, CalendarCheck, HeartHandshake, Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Mind Body Recovery",
  description:
    "Terms of Service, Clinical Wellness Consent, Retreat Booking & Cancellation Policies for Mind Body Recovery, Chennai.",
  alternates: {
    canonical: "https://mindbodyrecovery.in/terms",
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#12140D] text-[#F6F1E4] selection:bg-[#C79A45]/30">
      {/* Top Header Bar */}
      <header className="border-b border-[#F6F1E4]/10 bg-[#12140D]/90 backdrop-blur-md sticky top-0 z-30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#F6F1E4]/70 hover:text-[#C79A45] transition-colors"
          >
            <ArrowLeft size={16} />
            <span>Return to Home</span>
          </Link>
          <Link href="/" className="inline-block">
            <img
              src="/assets/brand/logo-trimmed.webp"
              alt="Mind Body Recovery"
              width={110}
              height={42}
              className="h-9 w-auto object-contain"
            />
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="mb-12 border-b border-[#F6F1E4]/10 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C79A45]/10 border border-[#C79A45]/30 mb-4">
            <Scale size={13} className="text-[#C79A45]" />
            <span className="text-[10.5px] uppercase tracking-widest text-[#C79A45] font-semibold">
              Clinical Wellness Terms &amp; Policies
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl text-[#F6F1E4] font-semibold tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[#F6F1E4]/60 font-sans">
            Last Updated: September 22, 2026 &middot; Mind Body Recovery, Chennai, India
          </p>
        </div>

        <div className="space-y-10 text-sm sm:text-base text-[#F6F1E4]/80 font-sans leading-relaxed font-light">
          {/* CRITICAL HEALTH DISCLAIMER BANNER */}
          <div className="p-6 rounded-2xl bg-[#1B1E15] border-l-4 border-[#C79A45] border-t border-r border-b border-[#F6F1E4]/10 space-y-2.5">
            <div className="flex items-center gap-2 text-[#C79A45] font-semibold text-sm uppercase tracking-wider">
              <AlertCircle size={18} />
              <span>Critical Medical &amp; Therapeutic Disclaimer</span>
            </div>
            <p className="text-xs sm:text-sm text-[#F6F1E4]/90 leading-relaxed font-normal">
              Mind Body Recovery provides holistic, integrative therapies (including acupuncture, cupping, foot reflexology, Ayurvedic bodywork, and somatic dialogue). These modalities are intended to promote natural balance, release somatic tension, and complement your lifestyle. 
              <strong> They are not a substitute for conventional medical diagnosis, allopathic medical care, emergency interventions, or psychiatric treatment.</strong>
            </p>
            <p className="text-xs text-[#F6F1E4]/70 leading-relaxed">
              We do not diagnose medical illnesses, prescribe pharmaceuticals, or instruct clients to discontinue or alter medications prescribed by licensed medical doctors. Always consult your primary physician regarding any pre-existing medical conditions or changes to prescribed treatments.
            </p>
          </div>

          {/* Section 1: Agreement */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl text-[#F6F1E4] font-semibold flex items-center gap-2">
              <span className="text-xs font-mono text-[#C79A45]">01.</span>
              <span>Acceptance of Terms</span>
            </h2>
            <p>
              By accessing <strong className="text-[#F6F1E4]">mindbodyrecovery.in</strong>, submitting booking forms, scheduling assessments, or attending sessions and retreats, you acknowledge and agree to be bound by these Terms &amp; Conditions. If you do not agree with any part of these terms, please refrain from using our services.
            </p>
          </section>

          {/* Section 2: Clinical Facility & Identity */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl text-[#F6F1E4] font-semibold flex items-center gap-2">
              <span className="text-xs font-mono text-[#C79A45]">02.</span>
              <span>Practice Location &amp; Facility Partnership</span>
            </h2>
            <p>
              Mind Body Recovery is an independent integrative therapy and training initiative founded by Sameer. In-person client consultations, therapeutic bodywork, and retreats are conducted at our clinical sanctuary partner location:
            </p>
            <div className="p-4 rounded-xl bg-[#1B1E15] border border-[#F6F1E4]/10 text-xs sm:text-sm">
              <p className="font-semibold text-[#F6F1E4]">Shanta Ayurveda Hospital</p>
              <p className="text-[#F6F1E4]/70">23A, N Boag Rd, Drivers Colony, T. Nagar, Chennai, Tamil Nadu 600017</p>
              <p className="text-[#C79A45] mt-1 text-xs">All sessions are scheduled strictly by prior appointment.</p>
            </div>
          </section>

          {/* Section 3: Informed Consent & Personal Responsibility */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl text-[#F6F1E4] font-semibold flex items-center gap-2">
              <span className="text-xs font-mono text-[#C79A45]">03.</span>
              <span>Informed Consent &amp; Health Disclosure</span>
            </h2>
            <p>
              Prior to commencing any therapy (including acupuncture, cupping, or shirodhara), you agree to provide complete and accurate disclosures regarding your health history, active medical conditions, medications, implants, cardiovascular concerns, pregnancy, or surgical history.
            </p>
            <p>
              You acknowledge that while integrative bodywork is gentle and restorative, individual physiological responses vary. You have the right to halt or request adjustments to any physical technique at any point during your session.
            </p>
          </section>

          {/* Section 4: Testimonials & Outcome Variations */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl text-[#F6F1E4] font-semibold flex items-center gap-2">
              <span className="text-xs font-mono text-[#C79A45]">04.</span>
              <span>Testimonials &amp; Individual Results</span>
            </h2>
            <p>
              Stories, reviews, and testimonials published on our website reflect the personal experiences and voluntary reflections of individual clients. They do not constitute scientific guarantees, statistical promises, or warranties of identical results for every individual.
            </p>
          </section>

          {/* Section 5: Appointment Booking & Cancellation */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl text-[#F6F1E4] font-semibold flex items-center gap-2">
              <span className="text-xs font-mono text-[#C79A45]">05.</span>
              <span>Appointments &amp; Cancellations</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#1B1E15] border border-[#F6F1E4]/10 space-y-1.5">
                <CalendarCheck size={18} className="text-[#C79A45]" />
                <h3 className="font-semibold text-sm text-[#F6F1E4]">Clinic Appointments</h3>
                <p className="text-xs text-[#F6F1E4]/70">
                  Please arrive 10 minutes prior to your scheduled time. If you need to reschedule or cancel, please provide at least <strong>24 hours advance notice</strong> via phone or WhatsApp.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-[#1B1E15] border border-[#F6F1E4]/10 space-y-1.5">
                <Compass size={18} className="text-[#C79A45]" />
                <h3 className="font-semibold text-sm text-[#F6F1E4]">2-Day Reset Retreat</h3>
                <p className="text-xs text-[#F6F1E4]/70">
                  Retreat bookings require confirmed pre-registration and intake review. Cancellations made at least <strong>7 days</strong> before retreat start are eligible for full rescheduling or refund less administrative processing fees.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Retreat Inclusions & Code of Conduct */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl text-[#F6F1E4] font-semibold flex items-center gap-2">
              <span className="text-xs font-mono text-[#C79A45]">06.</span>
              <span>Retreat Living &amp; Sanctuary Guidelines</span>
            </h2>
            <p>
              To maintain the peaceful, therapeutic healing atmosphere of Block A sanctuary:
            </p>
            <ul className="space-y-2 list-disc list-inside pl-2 text-[#F6F1E4]/70">
              <li>Guests are served pure sattvic, organic vegetarian meals designed to support digestive rest and clear vitality.</li>
              <li>Alcohol, tobacco, recreational substances, and disruptive noise are strictly prohibited within the sanctuary premises.</li>
              <li>Digital detox is strongly encouraged during the 2-day immersion to allow autonomic nervous system decompression.</li>
            </ul>
          </section>

          {/* Section 7: Intellectual Property */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl text-[#F6F1E4] font-semibold flex items-center gap-2">
              <span className="text-xs font-mono text-[#C79A45]">07.</span>
              <span>Intellectual Property</span>
            </h2>
            <p>
              All website content, custom diagrams, training curriculum materials, brand emblems, and photography on this site are the intellectual property of Mind Body Recovery and Sameer. Unauthorized reproduction, scraping, or commercial republishing is prohibited.
            </p>
          </section>

          {/* Section 8: Limitation of Liability */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl text-[#F6F1E4] font-semibold flex items-center gap-2">
              <span className="text-xs font-mono text-[#C79A45]">08.</span>
              <span>Limitation of Liability &amp; Governing Law</span>
            </h2>
            <p>
              To the fullest extent permitted by Indian law, Mind Body Recovery and its practitioners shall not be liable for any indirect, incidental, or consequential damages arising from website use or reliance on general wellness content.
            </p>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the Republic of India. Any disputes shall be subject to the exclusive jurisdiction of the competent courts in Chennai, Tamil Nadu.
            </p>
          </section>

          {/* Section 9: Contact */}
          <section className="space-y-3 p-6 rounded-2xl bg-[#1B1E15] border border-[#C79A45]/30">
            <h2 className="font-display text-lg sm:text-xl text-[#F6F1E4] font-semibold">
              Questions Regarding Terms
            </h2>
            <p className="text-xs sm:text-sm text-[#F6F1E4]/80">
              If you have any questions or require clarification about our clinical policies, please contact us:
            </p>
            <div className="pt-2 text-xs sm:text-sm space-y-1 font-mono text-[#C79A45]">
              <p>Email: <a href="mailto:tamilnadutherapist@gmail.com" className="hover:underline">tamilnadutherapist@gmail.com</a></p>
              <p>Phone: <a href="tel:+919042561651" className="hover:underline">+91 90425 61651</a></p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#F6F1E4]/10 py-8 text-center text-xs text-[#F6F1E4]/50">
        <p>&copy; 2026 Mind Body Recovery. All Rights Reserved. &middot; <Link href="/privacy" className="hover:text-[#C79A45] underline">Privacy Policy</Link></p>
      </footer>
    </div>
  );
}
