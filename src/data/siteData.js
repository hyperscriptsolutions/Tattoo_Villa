export const SITE_DATA = {
  brand: {
    name: "Tattoo Villa",
    legalName: "Tattoo Villa Studio Delhi",
    tagline: "Your Story. Our Art. Permanent Expression.",
    subheadline: "Award-winning custom tattoo studio in New Delhi. Where precision realism, fine-line elegance, and bespoke body art meet hospital-grade sterilization.",
    foundedYear: 2010,
    experienceYears: "15+",
    rating: 4.9,
    reviewCount: 380, // Verified Google reviews
    awardsCount: "6+",
    tattoosDone: "18,000+",
  },
  contact: {
    delhi: {
      address: "K100 B, 2nd Floor, Opposite Domino's Pizza, Central Market, Lajpat Nagar II, New Delhi, Delhi 110024, India",
      city: "New Delhi",
      state: "Delhi",
      postalCode: "110024",
      country: "India",
      landmark: "Opposite Domino's Pizza, Central Market (Near Lajpat Nagar Metro Station)",
      phones: [
        { display: "+91 98181 90412", raw: "+919818190412", isPrimary: true, isWhatsApp: true },
        { display: "+91 93115 11336", raw: "+919311511336", isPrimary: false, isWhatsApp: false }
      ],
      whatsappNumber: "919818190412",
      email: "tattoovilla01@gmail.com",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.743283294719!2d77.24108877549887!3d28.57747807569476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce32204555555%3A0x6b815ef98a96e95!2sTattoo%20Villa!5e0!3m2!1sen!2sin!4v1740000000000!5m2!1sen!2sin",
      mapDirectLink: "https://maps.app.goo.gl/9ZpZJzZJzZJzZJzZ9",
      businessHours: {
        weekdays: "11:00 AM - 09:00 PM",
        weekends: "11:00 AM - 09:30 PM",
        openDays: "Monday to Sunday (Open 7 Days)"
      }
    },
    melbourne: {
      title: "Australia / Melbourne Studio (Partner Branch)",
      address: "13 Ornament Ave, Tarneit VIC 3029, Melbourne, Australia",
      phone: "+61 478 311 912",
      phoneRaw: "+61478311912",
      email: "tattoovilla01@gmail.com",
      note: "For appointments in Australia, please mention Australia branch in your enquiry."
    }
  },
  artists: [
    {
      id: "harminder-singh",
      name: "Harminder Singh",
      role: "Founder & Master Tattoo Artist",
      experience: "15+ Years",
      image: "/images/artists/harminder-singh.jpg",
      bio: "Harminder Singh is the founder and visionary driving force behind Tattoo Villa. With over 15 years of relentless artistic mastery, he is recognized across Delhi NCR for groundbreaking realism, high-contrast portraiture, intricate dotwork, and seamless large-scale sleeve compositions. His philosophy balances profound technical anatomical knowledge with deep artistic soul.",
      specialties: [
        "Hyper-Realism & 3D Tattoos",
        "Celebrity & Family Portraits",
        "Intricate Dotwork & Geometric Sacred Geometry",
        "Complex Full Sleeve Projects",
        "Cover-ups & Dark Skin Tattooing"
      ],
      quote: "A tattoo is not just ink under the skin; it is the visual autobiography of a human soul."
    },
    {
      id: "jaspreet-singh",
      name: "Jaspreet Singh",
      role: "Lead Tattoo Artist",
      experience: "10+ Years",
      image: "/images/artists/jaspreet-singh.jpg",
      bio: "Jaspreet Singh brings a decade of specialized discipline across traditional Japanese aesthetics, ultra-fine-line minimalism, spiritual calligraphy, and delicate animal portraits. Renowned for micro-precision needle control and gentle hand technique, Jaspreet delivers stunning, crisp artwork with minimal skin trauma.",
      specialties: [
        "Fine-Line & Single Needle Tattoos",
        "Sanskrit, Gurmukhi & Calligraphy",
        "Traditional Japanese & Oriental",
        "Spiritual & Deity Artwork (Shiva, Buddha, Trishul)",
        "Micro-Realism & Flora/Fauna"
      ],
      quote: "Every microscopic line matters. Patience and precision turn simple thoughts into timeless elegance."
    }
  ],
  awards: [
    {
      year: "2020",
      title: "Innovative Artist Award",
      organization: "Global Tattoo Convention",
      description: "Honored for groundbreaking creative vision and pioneering hyper-realism techniques in India."
    },
    {
      year: "2021",
      title: "Best Tattoo Studio in Delhi NCR",
      organization: "National Tattoo Awards",
      description: "Recognized for impeccable clinical hygiene standards, customer trust, and artistic excellence."
    },
    {
      year: "2022",
      title: "Excellence in Custom Tattoo Artistry",
      organization: "International Body Art Guild",
      description: "Awarded for exceptional bespoke cover-ups and intricate full-sleeve project designs."
    }
  ],
  reviews: [
    {
      id: "rev-1",
      name: "Suneha Rajput",
      date: "26 Jan 2025",
      rating: 5,
      comment: "Got my first tattoo from Tattoo Villa and the experience was 10/10 in all aspects. The artist was so patient and made me feel completely relaxed. Cleanliness is top tier!",
      profileLink: "https://www.google.com/maps/contrib/111205555677844202686/reviews",
      tag: "First Tattoo"
    },
    {
      id: "rev-2",
      name: "shubham khatter",
      date: "30 Oct 2024",
      rating: 5,
      comment: "I recently got a tattoo here, and I couldn’t be happier! I came in unsure of exactly what design I wanted, but the team was incredibly patient and helpful in guiding me to the perfect choice. Their professionalism was top-notch; the artist took the time to make sure everything was precise and kept me comfortable throughout the process. The tattoo turned out beautifully, and I’m beyond thrilled with it. Highly recommend this studio for anyone looking for great service and artistry!",
      profileLink: "https://www.google.com/maps/contrib/110313599183740291102/reviews",
      tag: "Custom Design"
    },
    {
      id: "rev-3",
      name: "Shrishti Yadav",
      date: "26 Jan 2025",
      rating: 5,
      comment: "Have a great experience with Tattoo Villa… I am really impressed with the work and detailing. The fine-line work is super sharp and healed without any fading.",
      profileLink: "https://www.google.com/maps/contrib/107302228968288524628/reviews",
      tag: "Fine-Line Detailing"
    },
    {
      id: "rev-4",
      name: "Arpana Arora",
      date: "18 Jan 2025",
      rating: 5,
      comment: "I really had a good experience over there! It was my first tattoo and I was very skeptical but my experience was really great. So happy to be part of Studio Villa. Thank you so much! Would love to visit again.",
      profileLink: "https://www.google.com/maps/contrib/105828449730971117496/reviews",
      tag: "First-Timer Experience"
    },
    {
      id: "rev-5",
      name: "Nishant Kumar Sawhney",
      date: "14 Oct 2024",
      rating: 5,
      comment: "Well experienced artist and very humble, overall good experience. Hygiene is maintained very well. Cost is also decent as per the experienced artist. Thank you so much.",
      profileLink: "https://www.google.com/maps/contrib/112913758974856981003/reviews",
      tag: "Hygiene & Value"
    },
    {
      id: "rev-6",
      name: "Maanya Arora",
      date: "10 Sep 2024",
      rating: 5,
      comment: "My experience was great. Me and my mother both got tattoos. We were a bit scared of the pain as it was our first one. But thanks to Tattoo Villa the pain was minimal and bearable. The service was awesome. They made the exact same tattoo I wanted. Would highly recommend this place. Thank you Tattoo Villa!",
      profileLink: "https://www.google.com/maps/contrib/114510324769768687056/reviews",
      tag: "Mother-Daughter Tattoos"
    },
    {
      id: "rev-7",
      name: "Faizy Siddiqui",
      date: "25 Aug 2024",
      rating: 5,
      comment: "I recently got a tattoo from Tattoo Villa. Incredibly talented artists with a keen eye for detail and deep understanding of their craft. Took the time to understand my vision and brought it to life with precision and care. Lines are crisp, shading is smooth. Truly exceptional!",
      profileLink: "https://www.google.com/maps/contrib/114196346601097619828/reviews",
      tag: "Master Shading"
    }
  ],
  services: [
    {
      id: "portrait-tattoos",
      title: "Portrait Tattoos",
      shortDesc: "Hyper-realistic portraits capturing emotional depth, authentic facial textures, and lifelike eye details of loved ones, icons, or deities.",
      fullDesc: "Portrait tattooing requires master-level anatomic understanding and flawless needle control. At Tattoo Villa, Harminder Singh utilizes specialized grey-wash gradients, micro-needle stippling, and contrast mapping to recreate portraits that look photo-real on your skin and age gracefully over decades.",
      image: "/images/tattoos/IMG_2584-2-768x1024.jpeg",
      bannerImage: "/images/tattoos/IMG_2588-768x1024.jpeg",
      slug: "portrait-tattoos",
      features: [
        "Lifelike human and celebrity likeness",
        "Gradual micro-tonal grey wash shading",
        "Custom photo enhancement before tattooing",
        "Precision healed preservation techniques"
      ],
      faqs: [
        { q: "How clear does my reference photo need to be?", a: "High resolution is best. Clear lighting, visible facial features, and focused eyes allow us to capture micro-expressions accurately. We also digitally enhance and optimize reference images during consultation." },
        { q: "How long does a realistic portrait take?", a: "A single palm-sized portrait typically takes 4 to 6 hours in one session. Larger or multi-character portraits are split into comfortable structured sessions." }
      ]
    },
    {
      id: "realism-tattoos",
      title: "Realism Tattoos",
      shortDesc: "3D depth, dynamic light-and-shadow rendering, and photorealistic textures in monochromatic black & grey and rich saturated tones.",
      fullDesc: "Our realism tattoos push the boundaries of modern ink. From realistic statues and mythological icons to mechanical biometrics, our artists employ layered tones and soft edge transitions that turn human skin into a living canvas.",
      image: "/images/tattoos/1000001334-768x1024.jpeg",
      bannerImage: "/images/tattoos/1000001335-768x1024.jpeg",
      slug: "realism-tattoos",
      features: [
        "High-contrast 3D shadow mapping",
        "Photorealistic texture emulation",
        "Dynamic anatomical placement",
        "Zero-harsh outlines for organic realism"
      ],
      faqs: [
        { q: "Does realism fade quicker than traditional tattoos?", a: "When executed with proper depth and contrast by master artists, realism tattoos age beautifully. We emphasize deep black anchors so your piece maintains striking contrast for life." }
      ]
    },
    {
      id: "animal-tattoos",
      title: "Animal & Wildlife Tattoos",
      shortDesc: "Fierce lions, majestic tigers, wolves, birds of prey, and domestic companions rendered with hair-by-hair texture and piercing gaze.",
      fullDesc: "Capture strength, loyalty, courage, and spirit with our hyper-detailed wildlife tattoos. Our artists specialize in hyper-detailed fur textures, whiskers, realistic canine teeth, and glowing eye reflections that evoke undeniable presence.",
      image: "/images/tattoos/IMG_2641-768x1024.jpeg",
      bannerImage: "/images/tattoos/IMG_2641-2-768x1024.jpeg",
      slug: "animal-tattoos",
      features: [
        "Strand-by-strand fur and feather rendering",
        "Intense, lifelike eye reflections",
        "Geometric and floral animal fusions",
        "Customized spirit animal compositions"
      ],
      faqs: [
        { q: "Can I combine an animal portrait with geometric shapes?", a: "Yes, geometric-wildlife hybrids are one of our most requested signature styles, combining organic nature with sharp mathematical symmetry." }
      ]
    },
    {
      id: "religious-tattoos",
      title: "Religious & Spiritual Tattoos",
      shortDesc: "Lord Shiva, Trishul, Mahakal, Buddha, Ganesha, Gurmukhi hymns, and sacred geometry crafted with deep devotion and cultural sanctity.",
      fullDesc: "Religious tattoos hold sacred significance. We treat every spiritual piece with reverence and artistic authenticity, crafting intricate iconography like Trishul with Damru, Shiva Meditations, Omkara, Buddha Serenity, and sacred Mantras that resonate with personal faith.",
      image: "/images/tattoos/IMG_2582-768x1024.jpeg",
      bannerImage: "/images/tattoos/IMG_2450-768x1024.jpeg",
      slug: "religious-tattoos",
      features: [
        "Devotional sanctity and correct traditional iconography",
        "Sanskrit and Gurmukhi verified scripture script",
        "Integrated smoke, lotus, and aura visual elements",
        "Customized symbolic interpretations"
      ],
      faqs: [
        { q: "Can you help verify Sanskrit or Gurmukhi mantras before inking?", a: "Yes! We strictly verify Sanskrit grammar, phonetic accuracy, and script integrity before starting any sacred tattoo." }
      ]
    },
    {
      id: "calligraphy-tattoos",
      title: "Calligraphy & Script Tattoos",
      shortDesc: "Elegant cursive, bold gothic lettering, minimalist Roman numerals, and flowing Sanskrit scripts designed exclusively for your anatomy.",
      fullDesc: "Words carry power. Rather than using generic computer fonts, we custom draw lettering that contours naturally across your collarbone, forearm, ribs, or wrist. From delicate handwritten verses to bold Chicano lettering, every curve is deliberate.",
      image: "/images/tattoos/IMG_2453-768x1024.jpeg",
      bannerImage: "/images/tattoos/IMG_2463-768x1024.jpeg",
      slug: "calligraphy-tattoos",
      features: [
        "Custom freehand and digital typography",
        "Sanskrit, English, Urdu, and Gurmukhi calligraphy",
        "Anatomical curve alignment",
        "Crisp needle sharpness for enduring legibility"
      ],
      faqs: [
        { q: "Will small script blur together over time?", a: "We size every script piece based on skin biology and needle spacing, ensuring your words remain sharp and readable throughout the years." }
      ]
    },
    {
      id: "minimal-tattoos",
      title: "Minimal & Fine-Line Tattoos",
      shortDesc: "Understated elegance, micro single-needle motifs, celestial symbols, and subtle personal reminders crafted with delicate precision.",
      fullDesc: "Minimalism is the art of expressing maximum meaning with the fewest possible lines. Perfect for first-timers and subtle aesthetic lovers, our fine-line artists use single-needle configurations (1RL / 3RL) to produce gossamer-fine lines that feel light, airy, and sophisticated.",
      image: "/images/tattoos/IMG_2644-768x1024.jpeg",
      bannerImage: "/images/tattoos/IMG_2645-768x1024.jpeg",
      slug: "minimal-tattoos",
      features: [
        "Single needle (1RL) micro-detail craftsmanship",
        "Minimal skin trauma and accelerated healing",
        "Subtle, discreet placements",
        "Ideal for first-time tattoo enthusiasts"
      ],
      faqs: [
        { q: "Does a minimal fine-line tattoo hurt less?", a: "Yes, because single-needle work causes very minor epidermal friction, clients experience significantly less discomfort than larger shaded pieces." }
      ]
    },
    {
      id: "sleeve-tattoos",
      title: "Full & Half Sleeve Projects",
      shortDesc: "Comprehensive cohesive masterworks that seamlessly flow over arm, leg, chest, or back musculature with consistent thematic harmony.",
      fullDesc: "A sleeve is a major artistic commitment. At Tattoo Villa, we don't just glue random stickers together; we map out full 360-degree flows, taking into account muscle flex, joint movement, and contrast balances to design an awe-inspiring cohesive masterpiece.",
      image: "/images/tattoos/1000017690-768x1024.jpeg",
      bannerImage: "/images/tattoos/1000017696-768x1024.jpeg",
      slug: "sleeve-tattoos",
      features: [
        "360-degree 3D anatomical flow mapping",
        "Unified thematic styling (Mythology, Realism, Japanese)",
        "Structured multi-session pacing with healing breaks",
        "Harmonious filler and background transitions"
      ],
      faqs: [
        { q: "How many sessions are required for a full arm sleeve?", a: "Full arm sleeves generally require 4 to 7 sessions depending on the complexity, detail density, and arm dimensions." }
      ]
    },
    {
      id: "custom-tattoos",
      title: "Custom Designs & Cover-Ups",
      shortDesc: "Bespoke illustrations engineered from your ideas, plus complete artistic transformation of old, faded, or unwanted tattoos.",
      fullDesc: "Don't settle for Pinterest copies. Our senior artists sit with you in private consultation to sketch and render a one-of-a-kind design that represents your personal journey. For cover-ups, we use intelligent color theory, strategic dark anchors, and optical redirection so the old ink vanishes completely.",
      image: "/images/tattoos/IMG_2499-768x1024.jpeg",
      bannerImage: "/images/tattoos/IMG_2502-768x1024.jpeg",
      slug: "custom-tattoos",
      features: [
        "1-on-1 collaborative design consultation",
        "Complete digital design preview on your skin photo",
        "Expert cover-up without blackouts",
        "Scar tissue and stretch mark camouflaging"
      ],
      faqs: [
        { q: "Can any tattoo be covered up?", a: "In 95% of cases, yes! With clever compositional layering, texture, and dark values, we can disguise nearly any old tattoo without needing laser removal first." }
      ]
    }
  ],
  gallery: [
    { id: 1, title: "Hyper-Realistic Greek Warrior Sleeve", category: "Realism", src: "/images/tattoos/1000001334-768x1024.jpeg", artist: "Harminder Singh" },
    { id: 2, title: "Mythological Realism Arm Project", category: "Realism", src: "/images/tattoos/1000001335-768x1024.jpeg", artist: "Harminder Singh" },
    { id: 3, title: "Fierce Lion & Roaring Wildlife", category: "Animal", src: "/images/tattoos/IMG_2641-768x1024.jpeg", artist: "Harminder Singh" },
    { id: 4, title: "High-Contrast Portraiture", category: "Portrait", src: "/images/tattoos/IMG_2584-2-768x1024.jpeg", artist: "Harminder Singh" },
    { id: 5, title: "Lord Shiva Sacred Trishul & Damru", category: "Religious", src: "/images/tattoos/IMG_2582-768x1024.jpeg", artist: "Jaspreet Singh" },
    { id: 6, title: "Intricate Full Arm Black & Grey Sleeve", category: "Sleeve", src: "/images/tattoos/1000017690-768x1024.jpeg", artist: "Harminder Singh" },
    { id: 7, title: "Single Needle Fine-Line Floral", category: "Minimal", src: "/images/tattoos/IMG_2644-768x1024.jpeg", artist: "Jaspreet Singh" },
    { id: 8, title: "Dynamic Flowing Calligraphy Verse", category: "Calligraphy", src: "/images/tattoos/IMG_2453-768x1024.jpeg", artist: "Jaspreet Singh" },
    { id: 9, title: "Custom Dark Realism Arm Piece", category: "Realism", src: "/images/tattoos/1000011723-768x1024.jpeg", artist: "Harminder Singh" },
    { id: 10, title: "Spiritual Omkara with Smoke Detailing", category: "Religious", src: "/images/tattoos/IMG_2450-768x1024.jpeg", artist: "Jaspreet Singh" },
    { id: 11, title: "Detailed Wolf and Geometric Forest", category: "Animal", src: "/images/tattoos/IMG_2641-2-768x1024.jpeg", artist: "Harminder Singh" },
    { id: 12, title: "Bespoke Cover-up Transformation", category: "Custom", src: "/images/tattoos/IMG_2499-768x1024.jpeg", artist: "Harminder Singh" },
    { id: 13, title: "Geometric Mandala & Dotwork", category: "Custom", src: "/images/tattoos/IMG_2512-768x1024.jpeg", artist: "Jaspreet Singh" },
    { id: 14, title: "Fine Line Feather & Script", category: "Minimal", src: "/images/tattoos/IMG_2645-768x1024.jpeg", artist: "Jaspreet Singh" },
    { id: 15, title: "Full Arm Warrior Narrative Sleeve", category: "Sleeve", src: "/images/tattoos/1000017696-768x1024.jpeg", artist: "Harminder Singh" },
    { id: 16, title: "Photorealistic Family Memorial Portrait", category: "Portrait", src: "/images/tattoos/IMG_2588-768x1024.jpeg", artist: "Harminder Singh" }
  ],
  studioImages: [
    { src: "/images/studio/IMG_9200-1024x768.jpg", caption: "Premium Private Tattoo Consultation & Inking Suite" },
    { src: "/images/studio/IMG_9201-1024x768.jpg", caption: "Autoclave Sterilization Station & Medical-Grade Cleanliness" },
    { src: "/images/studio/IMG_9202-1024x768.jpg", caption: "Lajpat Nagar Central Market Studio Waiting Lounge" },
    { src: "/images/studio/IMG_9206-1024x768.jpg", caption: "Precision Tattoo Workstation with Ergonomic Hydraulic Beds" }
  ],
  hygienePractices: [
    {
      title: "100% Single-Use Disposables",
      desc: "Every single needle cartridge, ink cap, grip wrap, and razor is factory sealed and opened strictly in front of your eyes, then safely disposed in biohazard containers."
    },
    {
      title: "Hospital-Grade Autoclave Sterilization",
      desc: "All non-disposable studio tools undergo medical-grade ultrasonic cleaning followed by pressurized autoclave sterilization."
    },
    {
      title: "Certified Vegan & Safe Inks",
      desc: "We exclusively import premium, EU/FDA compliant, heavy-metal-free inks (Dynamic, World Famous, Eternal) that ensure vibrant saturation with zero skin toxicity."
    },
    {
      title: "Sanitized Private Suites",
      desc: "Ergonomic leather chairs and workstations are fully wrapped in medical barrier film and disinfected with hospital-grade virucidal sprays between each client."
    }
  ],
  trainingInstitute: {
    title: "Tattoo Villa Training Institute Delhi",
    headline: "Turn Your Artistic Passion Into a Lucrative Professional Tattoo Career",
    desc: "Welcome to Delhi's premier professional tattoo academy. Founded by veteran artists Harminder and Jaspreet Singh, our intensive diploma courses guide aspiring artists from fundamental sketching and sanitation science to advanced rotary machine mechanics, realistic shading, and client studio management.",
    modules: [
      { name: "Module 1", title: "Art Fundamentals & Skin Anatomy", desc: "Understanding epidermal layers, skin elasticity, needle depth, drawing foundations, stencil creation." },
      { name: "Module 2", title: "Hygiene, Cross-Contamination & Sterilization", desc: "Bloodborne pathogen safety, medical autoclave handling, workstation barrier wrapping, sterile setup." },
      { name: "Module 3", title: "Tattoo Machine Mechanics & Needle Formations", desc: "Coil vs rotary machines, voltage regulation, liners (RL), shaders (RS), magnums (M1, RM), stroke lengths." },
      { name: "Module 4", title: "Color Theory, Shading & Grey-Wash Formulation", desc: "Mastering smooth gradients, high-contrast black & grey wash, pigment packing without skin blowout." },
      { name: "Module 5", title: "Live Client Practice & Studio Apprenticeship", desc: "Supervised inking on synthetic skin followed by mentored live human canvas sessions and portfolio building." }
    ],
    duration: "1 Month (Fast Track) / 3 Months (Master Diploma)",
    features: ["Certification Upon Completion", "Free Professional Machine Starter Kit Included", "Guaranteed Studio Internship Opportunity", "Lifetime Mentorship & Business Setup Guidance"]
  }
};
