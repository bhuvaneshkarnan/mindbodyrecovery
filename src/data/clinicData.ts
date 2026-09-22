export interface ProofStat {
  value: string;
  label: string;
  sublabel: string;
}

export interface PurposeTheme {
  title: string;
  description: string;
  image: string;
  tag: string;
}

export interface RelaxNode {
  title: string;
  description: string;
  image: string;
  modality: string;
}

export interface RethinkTheme {
  title: string;
  description: string;
  image: string;
}

export interface ConcernCard {
  id: string;
  title: string;
  description: string;
}

export interface TestimonialMedia {
  id: string;
  type: "video" | "photo";
  thumbnail: string;
  videoSrc?: string;
  captionPlaceholder: string;
}

export interface RetreatPillar {
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

export const clinicData = {
  clinicName: "Mind Body Recovery",
  tagline: "Holistic Wellness. Personalised Care.",
  phone: "+919042561651",
  phoneDisplay: "+91 90425 61651",
  email: "tamilnadutherapist@gmail.com",
  address: "Shanta Ayurveda Hospital, 23A, N Boag Rd, Drivers Colony, T. Nagar, Chennai, Tamil Nadu 600017",
  addressPlaceholder: "",
  googleMapsUrl: "https://maps.google.com/?q=Shanta+Ayurveda+Hospital,+23A,+N+Boag+Rd,+Drivers+Colony,+T.+Nagar,+Chennai,+Tamil+Nadu+600017",
  embedMapsUrl: "https://maps.google.com/maps?q=Shanta+Ayurveda+Hospital,+23A,+N+Boag+Rd,+Drivers+Colony,+T.+Nagar,+Chennai,+Tamil+Nadu+600017&t=&z=16&ie=UTF8&iwloc=&output=embed",
  
  hero: {
    headline: ["Relax", "Rethink", "Rebuild"],
    subhead: "I work with the mind, the body and the patterns connecting them.",
    cta: "Book Your Assessment",
    videoMontage: "/assets/hero/hero-main.mp4",
    videoMobile: "/assets/hero/hero-mobile.mp4",
    poster: "/assets/hero/hero-poster.webp",
  },

  proofStats: {
    headline: "A Stronger Team. A Greater Impact.",
    subhead: "Grounding mastery in collective care and dedication.",
    stats: [
      {
        value: "30+",
        label: "Therapists",
        sublabel: "compassionate, trained hands",
      },
      {
        value: "10+",
        label: "Experts",
        sublabel: "experienced minds guiding care",
      },
      {
        value: "25,000+",
        label: "Lives changing",
        sublabel: "real transformations",
      },
    ] as ProofStat[],
    teamPhoto: "/assets/team/20260826_153026.webp",
    teamCaption: "The Mind Body Recovery team gathered at Chennai institute.",
  },

  purpose: {
    eyebrow: "OUR PURPOSE IN ACTION",
    headline: "Every Session, A Lesson.",
    subline: "Knowledge shared. Hands empowered. Lives transformed.",
    leadQuote: "The hands that treat you also train the hands of others",
    mission: "Healing is our service. Teaching is our responsibility. Transforming lives is our mission.",
    centerPortrait: "/assets/rethink/center-consultation.webp",
    themes: [
      {
        title: "Sharing Experience",
        description: "Decades of bodywork distilled into live mentorship.",
        image: "/assets/purpose/rsw_1300h_800-1.webp",
        tag: "Mentorship",
      },
      {
        title: "Building Better Therapists",
        description: "Hands-on standards in acupuncture, cupping, reflexology and ayurvedic sciences.",
        image: "/assets/purpose/rsw_1300h_800-10.webp",
        tag: "Academy",
      },
      {
        title: "Creating A Ripple Of Change",
        description: "When one therapist is empowered, hundreds of families receive better care.",
        image: "/assets/purpose/rsw_1300h_800-13.webp",
        tag: "Impact",
      },
      {
        title: "Empowering Communities",
        description: "Affordable community outreach workshops promoting holistic health literacy.",
        image: "/assets/purpose/rsw_1300h_800-21.webp",
        tag: "Community",
      },
      {
        title: "Guiding With Purpose",
        description: "Blending traditional Eastern therapeutic wisdom with bodily awareness.",
        image: "/assets/purpose/rsw_1300h_800-16.webp",
        tag: "Wisdom",
      },
    ] as PurposeTheme[],
  },

  relax: {
    stepNumber: "01",
    stepName: "RELAX",
    headline: "First, you slow down.",
    subhead: "A space to pause, release what you're carrying, and allow your mind and body to settle.",
    centerImage: "/assets/relax/dr-sameer.webp",
    centerCaption: "Sameer facilitating hands-on restorative care.",
    floatingQuotes: [
      "Breathe In — Let go of what you can't control.",
      "Your body knows the way.",
      "Release Tension.",
      "Calm The Mind.",
      "Relaxation is the foundation of healing.",
      "Slow down. Everything you need is within you.",
    ],
    nodes: [
      {
        title: "Shirodhara",
        description: "Rhythmic herbal oil pour for nervous system settling.",
        image: "/assets/relax/shirodhara.webp",
        modality: "Ayurveda",
      },
      {
        title: "Cupping",
        description: "Targeted fascial decompression and microvascular circulation.",
        image: "/assets/relax/cupping.webp",
        modality: "Bodywork",
      },
      {
        title: "Foot Reflexology",
        description: "Zonal nerve stimulation restoring organ balance.",
        image: "/assets/relax/foot-reflexology.webp",
        modality: "Reflexology",
      },
      {
        title: "Podikizhi",
        description: "Warm herbal poultice massage for deep muscular ease.",
        image: "/assets/relax/Podikizhi.webp",
        modality: "Ayurveda",
      },
    ] as RelaxNode[],
    cta: "Begin Your Journey",
  },

  rethink: {
    stepNumber: "02",
    stepName: "RETHINK",
    headline: "Rethink to Realign",
    subhead: "A Pause. A Perspective. A New Path.",
    centerImage: "/assets/rethink/center-consultation.webp",
    centerCaption: "One-on-one dialogue and somatic inquiry.",
    themes: [
      {
        title: "Reconnect With Yourself",
        description: "Make space for what heals you.",
        image: "/assets/rethink/reconnect.webp",
      },
      {
        title: "Understand Your Mind Deeper",
        description: "Awareness is the first step.",
        image: "/assets/rethink/deeper-mind.webp",
      },
      {
        title: "Build New Habits, Create New You",
        description: "Small shifts create big shifts in life.",
        image: "/assets/rethink/new-habits.webp",
      },
      {
        title: "Heal Holistically, Live Mindfully",
        description: "A journey inward. A life forward.",
        image: "/assets/rethink/live-mindfully.webp",
      },
    ] as RethinkTheme[],
    cta: "Explore The Philosophy",
  },

  concerns: {
    lead: "When the mind is overwhelmed, the body often carries it. We work with both.",
    question: "What are your major concerns?",
    cards: [
      {
        id: "sleep",
        title: "Sleep Problems",
        description: "Difficulty falling asleep, restless nights, or waking unrefreshed.",
      },
      {
        id: "stress",
        title: "Stress & Overthinking",
        description: "Persistent mental noise, feeling constantly on edge, or difficulty unwinding.",
      },
      {
        id: "fatigue",
        title: "Mental Fatigue & Low Energy",
        description: "Feeling drained, sluggishness, brain fog, and low vitality during the day.",
      },
      {
        id: "pain",
        title: "Pain & Body Tension",
        description: "Neck stiffness, shoulder knots, back discomfort, and holding tension in the body.",
      },
    ] as ConcernCard[],
    cta: "I want to feel better",
  },

  retreat: {
    stepNumber: "03",
    stepName: "REBUILD",
    headline: "2 Days to Rebuild You.",
    subhead: "A RESET FOR YOUR BODY, MIND & LIFE",
    body: "Step away from the noise. Reconnect with yourself, rejuvenate your body, renew your mind, and return stronger.",
    centerImage: "/assets/rebuild/center-sanctuary.webp",
    centerCaption: "Block A sanctuary facility for peaceful stay.",
    featureMarkers: [
      { highlight: "2 Days", text: "Immersive Experience" },
      { highlight: "Holistic", text: "Healing Approach" },
      { highlight: "Lifetime", text: "Transformation Begins Here" },
    ],
    pillars: [
      {
        title: "Traditional Therapies",
        subtitle: "Rejuvenate & Detox",
        description: "Daily hands-on therapies, bodywork, and restorative care.",
        image: "/assets/rebuild/therapies.webp",
      },
      {
        title: "Yoga & Breathwork",
        subtitle: "Balance & Energize",
        description: "Gentle restorative movement, breath awareness, and guided somatic stillness.",
        image: "/assets/rebuild/yoga-breath.webp",
      },
      {
        title: "Nourishing Food",
        subtitle: "Cleanse & Heal",
        description: "Freshly prepared sattvic meals designed for light digestion and clarity.",
        image: "/assets/rebuild/sattvic-meals.webp",
      },
      {
        title: "Peaceful Stay",
        subtitle: "Rest & Restore",
        description: "Quiet living spaces surrounded by nature for deep, undisturbed rest.",
        image: "/assets/rebuild/peaceful-stay.webp",
      },
    ] as RetreatPillar[],
    cta: "Inquire For Next Retreat",
  },

  mindfulReflection: {
    headline: "What are you fighting with?",
    placeholderNotice: "[TODO: awaiting final copy — see §6.2]",
  },

  doctor: {
    name: "Sameer",
    fullName: "Sameer",
    role: "Mind-Body Recovery Specialist",
    title: "Founder & Lead Integrative Practitioner",
    portraitBanner: "/assets/doctor/sameer-banner@2x.webp",
    portrait: "/assets/doctor/drsameer.webp",
    headline: "Meet the Founder",
    bioText: "Where tired bodies and overloaded minds come to recover.",
    tagline: "Where tired bodies and overloaded minds come to recover",
    bio: [
      "Where tired bodies and overloaded minds come to recover.",
    ],
  },

  stories: {
    eyebrow: "REAL STORIES",
    headline: "Hear from the people who've experienced it.",
    subhead: "Hear it from the people who've experienced it.",
    items: [
      {
        id: "media-1",
        type: "video",
        thumbnail: "/assets/relax/shirodhara.webp",
        videoSrc: "/assets/hero/nodding head Sunitha vinod_1.mp4",
        captionPlaceholder: "[TODO: real client quote / story to be confirmed]",
      },
      {
        id: "media-2",
        type: "photo",
        thumbnail: "/assets/rebuild/peaceful-stay.webp",
        captionPlaceholder: "[TODO: real client quote / story to be confirmed]",
      },
      {
        id: "media-3",
        type: "photo",
        thumbnail: "/assets/relax/cupping.webp",
        captionPlaceholder: "[TODO: real client quote / story to be confirmed]",
      },
      {
        id: "media-4",
        type: "video",
        thumbnail: "/assets/hero/hero-poster.webp",
        videoSrc: "/assets/hero/20260722_191757_1.mp4",
        captionPlaceholder: "[TODO: real client quote / story to be confirmed]",
      },
    ] as TestimonialMedia[],
  },

  therapiesList: [
    { name: "Foot Reflexology", desc: "Zonal nerve stimulation restoring organ balance" },
    { name: "Acupuncture", desc: "Micro-fine meridian therapy for energy and pain" },
    { name: "Cupping Therapy", desc: "Myofascial decompression and circulation" },
    { name: "Ayurveda & Marma", desc: "Constitutional vital point restoration and herbal oils" },
  ],

  retreatHighlights: [
    "About Retreat",
    "Retreat Program",
    "Stay & Food (Block A)",
    "Therapeutic Gallery",
    "Preparation & FAQ",
  ],
};
