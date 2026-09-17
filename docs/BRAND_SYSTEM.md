# Mind Body Recovery — Brand System & Project Memory
### A trust-first, award-grade brand site for an integrative wellness clinic
*Source: Client's 11-page layout reference (`Notes_260828_235337.pdf`)*

---

## 1. Clinic Identity & Positioning
- **Clinic:** Mind Body Recovery
- **Lead Practitioner:** Dr. Sameer
- **Core Modalities:** Hands-on bodywork (acupuncture, cupping, foot reflexology, Ayurveda), mind/behaviour coaching, and an immersive 2-day retreat.
- **Teaching Arm:** "The hands that treat you also train the hands of others" (Therapist academy & community workshops).
- **Core Mission:** Trust-first, unhurried, clinical yet deeply human. Real people over stock photography, evidence over adjectives, restraint over hard-sell CTAs.

---

## 2. Design Tokens & Visual Architecture

### 2.1 Color Palette (Strictly 8 Named Tokens)
```css
:root {
  --ink-950: #12140D;        /* Primary dark background (warm charcoal-olive) */
  --ink-900: #1B1E15;        /* Dark surface/card */
  --parchment-50: #F6F1E4;   /* Primary light background (warm ivory) */
  --parchment-100: #EAE1CB;  /* Light surface/card */
  --gold-500: #C79A45;       /* Primary accent: CTAs, emblem, Synapse Thread */
  --sage-400: #93A579;       /* Secondary accent: step lettering, botanical marks */
  --clay-700: #8C5B41;       /* Tertiary accent: subtle highlights, hovers */
  --charcoal-ink: #231F19;   /* Body text on light backgrounds */
}
```

### 2.2 Typography
- **Display / Headlines:** `Fraunces` (Google Fonts, variable soft serif with distinct character)
- **Body / UI:** `Switzer` (Humanist grotesque) or high-grade humanist sans fallback
- **Hierarchy:** Generous line-height, unhurried pacing, body max-width ~75ch.

### 2.3 Key Visual Mechanics
1. **The Synapse Thread:** A continuous glowing gold SVG path threading through the entire page, drawing on scroll and branching into dendrite connectors in hub sections (Relax, Rethink, Purpose).
2. **The Bandage Corner Treatment:** Replaces box-shadows. 1px hairline border + physical washi tape / bandage strip SVG corners rotated 2–6°.
3. **No purple:** Purple elements in client sketches were Figma markup annotations, not brand colors.

---

## 3. Page Structure & Content Inventory

1. **Global Navigation:** Logo mark (Tree of life emblem), Links (About · Approach · Therapies · Retreat · Contact), Primary CTA: "Book Your Assessment".
2. **Hero:** Full-bleed video background montage with Dr. Sameer. Headline: `RELAX · RETHINK · REBUILD`. Subhead: *"I work with the mind, the body and the patterns connecting them."* CTA: "Book Your Assessment".
3. **Real Stories:** Eyebrow: `REAL STORIES`. Headline: *"You don't have to take **our word** for it."* Subhead: *"Hear it from the people who've experienced it."* Mix of vertical video testimonials and photo review cards with bandage frames.
4. **Proof Stats:** Headline: *"A Stronger Team. A Greater Impact."* Stats: 30+ Therapists, 10+ Experts, 10,000+ Lives changing. Real clinic team photo.
5. **Purpose Hub ("The hands that treat you..."):** Center portrait of Dr. Sameer + 5 radiating themes: Sharing Experience · Building Better Therapists · Creating A Ripple Of Change · Empowering Communities · Guiding With Purpose.
6. **Step 01: RELAX:** Headline: `RELAX` — *"First, you slow down."* Center treatment photo + radiating treatment nodes & restorative quotes.
7. **Step 02: RETHINK:** Headline: `Rethink to Realign` — *"A Pause. A Perspective. A New Path."* Center consultation photo + radiating mind-body themes.
8. **Concern Picker ("We work with both"):** *"When the mind is overwhelmed, the body often carries it. We work with both."* 4 active concerns: Sleep Problems, Stress & Overthinking, Mental Fatigue & Low Energy, Pain & Body Tension. CTA: "I want to feel better".
9. **Step 03: REBUILD (The Retreat):** Headline: `2 Days to Rebuild You.` — *"A RESET FOR YOUR BODY, MIND & LIFE"*. 3 feature markers (2 Days, Holistic, Lifetime) + 5 pillars + real facility photography.
10. **Mindful Reflection ("What are you fighting with?"):** Empathetic reframing of stress, tension, and fatigue without clinical pathologizing.
11. **Meet Dr. Sameer:** Personal clinician story and holistic care philosophy.
12. **Contact & Location:** Assessment booking, phone (`+91 90949 24694`), interactive Google Map location.
13. **Footer:** Emblem, navigation, therapies, retreat pillars, contact, copyright.

---

## 4. Open Decision Log (§6)
- **Concern Picker:** Excluded the 2 crossed-out cards (lifestyle/relationships, diabetic/BP) per §6.1.
- **Tag Cloud:** Transformed clinical tags into holistic, somatic concern exploration per §6.2.
- **WhatsApp vs Phone:** Primary contact is direct phone call and calendar assessment booking per §6.3.
