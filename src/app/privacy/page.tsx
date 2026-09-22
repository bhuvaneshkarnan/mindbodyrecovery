import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, Eye, FileText, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Mind Body Recovery",
  description:
    "Privacy Policy for Mind Body Recovery. Learn how we collect, handle, protect, and process your personal and health wellness information.",
  alternates: {
    canonical: "https://mindbodyrecovery.in/privacy",
  },
};

export default function PrivacyPolicyPage() {
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
            <Shield size={13} className="text-[#C79A45]" />
            <span className="text-[10.5px] uppercase tracking-widest text-[#C79A45] font-semibold">
              Data Protection &amp; Confidentiality
            </span>
          </div>
          <h1 className="font-display text-3xl sm:text-5xl text-[#F6F1E4] font-semibold tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-xs sm:text-sm text-[#F6F1E4]/60 font-sans">
            Effective Date: September 22, 2026 &middot; Mind Body Recovery, Chennai, India
          </p>
        </div>

        <div className="space-y-10 text-sm sm:text-base text-[#F6F1E4]/80 font-sans leading-relaxed font-light">
          {/* Section 1: Overview */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl text-[#F6F1E4] font-semibold flex items-center gap-2">
              <span className="text-xs font-mono text-[#C79A45]">01.</span>
              <span>Overview &amp; Scope</span>
            </h2>
            <p>
              Mind Body Recovery (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) operates the clinical wellness practice and educational programs hosted at Shanta Ayurveda Hospital, 23A, N Boag Rd, Drivers Colony, T. Nagar, Chennai, Tamil Nadu 600017, and the website <strong className="text-[#F6F1E4]">mindbodyrecovery.in</strong>.
            </p>
            <p>
              We are committed to respecting your privacy, protecting your personal health data, and ensuring transparent data governance in compliance with the Digital Personal Data Protection (DPDP) Act of India and applicable healthcare confidentiality norms.
            </p>
          </section>

          {/* Section 2: Data We Collect */}
          <section className="space-y-4">
            <h2 className="font-display text-xl sm:text-2xl text-[#F6F1E4] font-semibold flex items-center gap-2">
              <span className="text-xs font-mono text-[#C79A45]">02.</span>
              <span>Information We Collect</span>
            </h2>
            <p>
              We only collect information necessary to facilitate your clinical assessment, coordinate sessions, personalize retreat experiences, or respond to inquiries:
            </p>
            <ul className="space-y-2 list-disc list-inside pl-2 text-[#F6F1E4]/70">
              <li>
                <strong className="text-[#F6F1E4]">Contact Details:</strong> Full name, phone number, email address, and preferred times for appointments.
              </li>
              <li>
                <strong className="text-[#F6F1E4]">Wellness Inquiries:</strong> Self-reported areas of concern (e.g., sleep disturbances, musculoskeletal tension, stress levels, duration of symptoms) submitted through our assessment and booking forms.
              </li>
              <li>
                <strong className="text-[#F6F1E4]">Session Notes:</strong> Confidential therapeutic observations gathered during in-person consultations to safely deliver complementary bodywork.
              </li>
              <li>
                <strong className="text-[#F6F1E4]">Technical Data:</strong> Anonymized usage data, device type, browser information, and aggregated traffic analytics to improve website speed and accessibility.
              </li>
            </ul>
          </section>

          {/* Section 3: How We Use Your Information */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl text-[#F6F1E4] font-semibold flex items-center gap-2">
              <span className="text-xs font-mono text-[#C79A45]">03.</span>
              <span>How We Use Your Information</span>
            </h2>
            <p>
              We use your information exclusively for legitimate therapeutic, operational, and communication purposes:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-[#1B1E15] border border-[#F6F1E4]/10">
                <CheckCircle2 size={16} className="text-[#C79A45] mb-2" />
                <h3 className="font-semibold text-[#F6F1E4] text-xs uppercase tracking-wider mb-1">Appointment Coordination</h3>
                <p className="text-xs text-[#F6F1E4]/70">Contacting you via WhatsApp, SMS, or phone call to confirm consultation times and sanctuary retreat slots.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#1B1E15] border border-[#F6F1E4]/10">
                <CheckCircle2 size={16} className="text-[#C79A45] mb-2" />
                <h3 className="font-semibold text-[#F6F1E4] text-xs uppercase tracking-wider mb-1">Therapeutic Customization</h3>
                <p className="text-xs text-[#F6F1E4]/70">Tailoring hands-on therapies, bodywork modalities, and herbal formulations to your personal constitution.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#1B1E15] border border-[#F6F1E4]/10">
                <CheckCircle2 size={16} className="text-[#C79A45] mb-2" />
                <h3 className="font-semibold text-[#F6F1E4] text-xs uppercase tracking-wider mb-1">Safety &amp; Contraindications</h3>
                <p className="text-xs text-[#F6F1E4]/70">Screening for conditions where specific therapies (like cupping or acupuncture) may require physician clearance.</p>
              </div>
              <div className="p-4 rounded-xl bg-[#1B1E15] border border-[#F6F1E4]/10">
                <CheckCircle2 size={16} className="text-[#C79A45] mb-2" />
                <h3 className="font-semibold text-[#F6F1E4] text-xs uppercase tracking-wider mb-1">Zero Commercial Reselling</h3>
                <p className="text-xs text-[#F6F1E4]/70">We never sell, rent, monetize, or disclose your personal details to third-party advertisers or brokers.</p>
              </div>
            </div>
          </section>

          {/* Section 4: Confidentiality & Protection */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl text-[#F6F1E4] font-semibold flex items-center gap-2">
              <span className="text-xs font-mono text-[#C79A45]">04.</span>
              <span>Health Information Confidentiality</span>
            </h2>
            <p>
              Wellness notes and therapeutic records are treated with the highest degree of confidentiality. Only Sameer and directly assigned therapists involved in your care have access to relevant session notes. Records are stored securely and never shared publicly without express written consent.
            </p>
          </section>

          {/* Section 5: Cookies & Analytics */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl text-[#F6F1E4] font-semibold flex items-center gap-2">
              <span className="text-xs font-mono text-[#C79A45]">05.</span>
              <span>Cookies &amp; Tracking Technologies</span>
            </h2>
            <p>
              Our website uses minimal, privacy-preserving technical cookies strictly necessary for core functionality (such as remembering audio player preferences and modal states). We do not deploy invasive cross-site advertising trackers.
            </p>
          </section>

          {/* Section 6: Your Legal Rights */}
          <section className="space-y-3">
            <h2 className="font-display text-xl sm:text-2xl text-[#F6F1E4] font-semibold flex items-center gap-2">
              <span className="text-xs font-mono text-[#C79A45]">06.</span>
              <span>Your Rights</span>
            </h2>
            <p>
              Under Indian data protection laws, you retain the right to:
            </p>
            <ul className="space-y-1.5 list-disc list-inside pl-2 text-[#F6F1E4]/70">
              <li>Request a copy of the personal information we hold on your file.</li>
              <li>Request correction of inaccurate or outdated contact information.</li>
              <li>Request deletion or anonymization of your intake submissions.</li>
              <li>Withdraw consent for WhatsApp or email communications at any time.</li>
            </ul>
          </section>

          {/* Section 7: Contact for Privacy Queries */}
          <section className="space-y-3 p-6 rounded-2xl bg-[#1B1E15] border border-[#C79A45]/30">
            <h2 className="font-display text-lg sm:text-xl text-[#F6F1E4] font-semibold">
              Privacy Inquiries &amp; Data Officer
            </h2>
            <p className="text-xs sm:text-sm text-[#F6F1E4]/80">
              For any questions regarding this Privacy Policy or to exercise your rights, please reach out to us directly:
            </p>
            <div className="pt-2 text-xs sm:text-sm space-y-1 font-mono text-[#C79A45]">
              <p>Email: <a href="mailto:tamilnadutherapist@gmail.com" className="hover:underline">tamilnadutherapist@gmail.com</a></p>
              <p>Phone: <a href="tel:+919042561651" className="hover:underline">+91 90425 61651</a></p>
              <p className="text-[#F6F1E4]/60 font-sans text-xs pt-1">
                Mind Body Recovery &middot; Shanta Ayurveda Hospital, 23A, N Boag Rd, Drivers Colony, T. Nagar, Chennai, Tamil Nadu 600017
              </p>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#F6F1E4]/10 py-8 text-center text-xs text-[#F6F1E4]/50">
        <p>&copy; 2026 Mind Body Recovery. All Rights Reserved. &middot; <Link href="/terms" className="hover:text-[#C79A45] underline">Terms &amp; Conditions</Link></p>
      </footer>
    </div>
  );
}
