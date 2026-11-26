const fs = require('fs');
const path = require('path');

const siteDataPath = path.join(__dirname, '..', 'src', 'data', 'siteData.js');
let content = fs.readFileSync(siteDataPath, 'utf8');

// 1. Replace service images
const serviceImageReplacements = [
  {
    from: `      id: "portrait-tattoos",
      title: "Portrait Tattoos",
      shortDesc: "Hyper-realistic portraits capturing emotional depth, authentic facial textures, and lifelike eye details of loved ones, icons, or deities.",
      fullDesc: "Portrait tattooing requires master-level anatomic understanding and flawless needle control. At Tattoo Villa, Harminder Singh utilizes specialized grey-wash gradients, micro-needle stippling, and contrast mapping to recreate portraits that look photo-real on your skin and age gracefully over decades.",
      image: "/images/tattoos/IMG_2584-2-768x1024.jpeg",
      bannerImage: "/images/tattoos/IMG_2588-768x1024.jpeg",`,
    to: `      id: "portrait-tattoos",
      title: "Portrait Tattoos",
      shortDesc: "Hyper-realistic portraits capturing emotional depth, authentic facial textures, and lifelike eye details of loved ones, icons, or deities.",
      fullDesc: "Portrait tattooing requires master-level anatomic understanding and flawless needle control. At Tattoo Villa, Harminder Singh utilizes specialized grey-wash gradients, micro-needle stippling, and contrast mapping to recreate portraits that look photo-real on your skin and age gracefully over decades.",
      image: "/images/cloudinary_tattoos/IMG_0955.jpg",
      bannerImage: "/images/cloudinary_tattoos/IMG_2099.jpg",`
  },
  {
    from: `      id: "realism-tattoos",
      title: "Realism Tattoos",
      shortDesc: "3D depth, dynamic light-and-shadow rendering, and photorealistic textures in monochromatic black & grey and rich saturated tones.",
      fullDesc: "Our realism tattoos push the boundaries of modern ink. From realistic statues and mythological icons to mechanical biometrics, our artists employ layered tones and soft edge transitions that turn human skin into a living canvas.",
      image: "/images/tattoos/1000001334-768x1024.jpeg",
      bannerImage: "/images/tattoos/1000001335-768x1024.jpeg",`,
    to: `      id: "realism-tattoos",
      title: "Realism Tattoos",
      shortDesc: "3D depth, dynamic light-and-shadow rendering, and photorealistic textures in monochromatic black & grey and rich saturated tones.",
      fullDesc: "Our realism tattoos push the boundaries of modern ink. From realistic statues and mythological icons to mechanical biometrics, our artists employ layered tones and soft edge transitions that turn human skin into a living canvas.",
      image: "/images/cloudinary_tattoos/IMG_0973.jpg",
      bannerImage: "/images/cloudinary_tattoos/IMG_0187.jpg",`
  },
  {
    from: `      id: "animal-tattoos",
      title: "Animal & Wildlife Tattoos",
      shortDesc: "Fierce lions, majestic tigers, wolves, birds of prey, and domestic companions rendered with hair-by-hair texture and piercing gaze.",
      fullDesc: "Capture strength, loyalty, courage, and spirit with our hyper-detailed wildlife tattoos. Our artists specialize in hyper-detailed fur textures, whiskers, realistic canine teeth, and glowing eye reflections that evoke undeniable presence.",
      image: "/images/tattoos/IMG_2641-768x1024.jpeg",
      bannerImage: "/images/tattoos/IMG_2641-2-768x1024.jpeg",`,
    to: `      id: "animal-tattoos",
      title: "Animal & Wildlife Tattoos",
      shortDesc: "Fierce lions, majestic tigers, wolves, birds of prey, and domestic companions rendered with hair-by-hair texture and piercing gaze.",
      fullDesc: "Capture strength, loyalty, courage, and spirit with our hyper-detailed wildlife tattoos. Our artists specialize in hyper-detailed fur textures, whiskers, realistic canine teeth, and glowing eye reflections that evoke undeniable presence.",
      image: "/images/cloudinary_tattoos/IMG_2603.jpg",
      bannerImage: "/images/cloudinary_tattoos/IMG_0145.jpg",`
  },
  {
    from: `      id: "religious-tattoos",
      title: "Religious & Spiritual Tattoos",
      shortDesc: "Lord Shiva, Trishul, Mahakal, Buddha, Ganesha, Gurmukhi hymns, and sacred geometry crafted with deep devotion and cultural sanctity.",
      fullDesc: "Religious tattoos hold sacred significance. We treat every spiritual piece with reverence and artistic authenticity, crafting intricate iconography like Trishul with Damru, Shiva Meditations, Omkara, Buddha Serenity, and sacred Mantras that resonate with personal faith.",
      image: "/images/tattoos/IMG_2582-768x1024.jpeg",
      bannerImage: "/images/tattoos/IMG_2450-768x1024.jpeg",`,
    to: `      id: "religious-tattoos",
      title: "Religious & Spiritual Tattoos",
      shortDesc: "Lord Shiva, Trishul, Mahakal, Buddha, Ganesha, Gurmukhi hymns, and sacred geometry crafted with deep devotion and cultural sanctity.",
      fullDesc: "Religious tattoos hold sacred significance. We treat every spiritual piece with reverence and artistic authenticity, crafting intricate iconography like Trishul with Damru, Shiva Meditations, Omkara, Buddha Serenity, and sacred Mantras that resonate with personal faith.",
      image: "/images/cloudinary_tattoos/IMG_0191-1.jpg",
      bannerImage: "/images/cloudinary_tattoos/IMG_2524.jpg",`
  },
  {
    from: `      id: "calligraphy-tattoos",
      title: "Calligraphy & Script Tattoos",
      shortDesc: "Elegant cursive, bold gothic lettering, minimalist Roman numerals, and flowing Sanskrit scripts designed exclusively for your anatomy.",
      fullDesc: "Words carry power. Rather than using generic computer fonts, we custom draw lettering that contours naturally across your collarbone, forearm, ribs, or wrist. From delicate handwritten verses to bold Chicano lettering, every curve is deliberate.",
      image: "/images/tattoos/IMG_2453-768x1024.jpeg",
      bannerImage: "/images/tattoos/IMG_2463-768x1024.jpeg",`,
    to: `      id: "calligraphy-tattoos",
      title: "Calligraphy & Script Tattoos",
      shortDesc: "Elegant cursive, bold gothic lettering, minimalist Roman numerals, and flowing Sanskrit scripts designed exclusively for your anatomy.",
      fullDesc: "Words carry power. Rather than using generic computer fonts, we custom draw lettering that contours naturally across your collarbone, forearm, ribs, or wrist. From delicate handwritten verses to bold Chicano lettering, every curve is deliberate.",
      image: "/images/cloudinary_tattoos/IMG_0177.jpg",
      bannerImage: "/images/cloudinary_tattoos/IMG_9727.jpg",`
  },
  {
    from: `      id: "minimal-tattoos",
      title: "Minimal & Fine-Line Tattoos",
      shortDesc: "Understated elegance, micro single-needle motifs, celestial symbols, and subtle personal reminders crafted with delicate precision.",
      fullDesc: "Minimalism is the art of expressing maximum meaning with the fewest possible lines. Perfect for first-timers and subtle aesthetic lovers, our fine-line artists use single-needle configurations (1RL / 3RL) to produce gossamer-fine lines that feel light, airy, and sophisticated.",
      image: "/images/tattoos/IMG_2644-768x1024.jpeg",
      bannerImage: "/images/tattoos/IMG_2645-768x1024.jpeg",`,
    to: `      id: "minimal-tattoos",
      title: "Minimal & Fine-Line Tattoos",
      shortDesc: "Understated elegance, micro single-needle motifs, celestial symbols, and subtle personal reminders crafted with delicate precision.",
      fullDesc: "Minimalism is the art of expressing maximum meaning with the fewest possible lines. Perfect for first-timers and subtle aesthetic lovers, our fine-line artists use single-needle configurations (1RL / 3RL) to produce gossamer-fine lines that feel light, airy, and sophisticated.",
      image: "/images/cloudinary_tattoos/IMG_0752.jpg",
      bannerImage: "/images/cloudinary_tattoos/IMG_0749.jpg",`
  },
  {
    from: `      id: "sleeve-tattoos",
      title: "Full & Half Sleeve Projects",
      shortDesc: "Comprehensive cohesive masterworks that seamlessly flow over arm, leg, chest, or back musculature with consistent thematic harmony.",
      fullDesc: "A sleeve is a major artistic commitment. At Tattoo Villa, we don't just glue random stickers together; we map out full 360-degree flows, taking into account muscle flex, joint movement, and contrast balances to design an awe-inspiring cohesive masterpiece.",
      image: "/images/tattoos/1000017690-768x1024.jpeg",
      bannerImage: "/images/tattoos/1000017696-768x1024.jpeg",`,
    to: `      id: "sleeve-tattoos",
      title: "Full & Half Sleeve Projects",
      shortDesc: "Comprehensive cohesive masterworks that seamlessly flow over arm, leg, chest, or back musculature with consistent thematic harmony.",
      fullDesc: "A sleeve is a major artistic commitment. At Tattoo Villa, we don't just glue random stickers together; we map out full 360-degree flows, taking into account muscle flex, joint movement, and contrast balances to design an awe-inspiring cohesive masterpiece.",
      image: "/images/cloudinary_tattoos/IMG_1020.jpg",
      bannerImage: "/images/cloudinary_tattoos/IMG_2663.jpg",`
  },
  {
    from: `      id: "custom-tattoos",
      title: "Custom Designs & Cover-Ups",
      shortDesc: "Bespoke illustrations engineered from your ideas, plus complete artistic transformation of old, faded, or unwanted tattoos.",
      fullDesc: "Don't settle for Pinterest copies. Our senior artists sit with you in private consultation to sketch and render a one-of-a-kind design that represents your personal journey. For cover-ups, we use intelligent color theory, strategic dark anchors, and optical redirection so the old ink vanishes completely.",
      image: "/images/tattoos/IMG_2499-768x1024.jpeg",
      bannerImage: "/images/tattoos/IMG_2502-768x1024.jpeg",`,
    to: `      id: "custom-tattoos",
      title: "Custom Designs & Cover-Ups",
      shortDesc: "Bespoke illustrations engineered from your ideas, plus complete artistic transformation of old, faded, or unwanted tattoos.",
      fullDesc: "Don't settle for Pinterest copies. Our senior artists sit with you in private consultation to sketch and render a one-of-a-kind design that represents your personal journey. For cover-ups, we use intelligent color theory, strategic dark anchors, and optical redirection so the old ink vanishes completely.",
      image: "/images/cloudinary_tattoos/IMG_2264.jpg",
      bannerImage: "/images/cloudinary_tattoos/IMG_0736.jpg",`
  }
];

serviceImageReplacements.forEach(({ from, to }) => {
  if (content.includes(from)) {
    content = content.replace(from, to);
    console.log('Replaced service image');
  } else {
    console.error('Failed to match service block');
  }
});

// 2. Replace gallery array
const galleryItems = JSON.parse(fs.readFileSync(path.join(__dirname, 'gallery_export.json'), 'utf8'));
const formattedGallery = '  gallery: ' + JSON.stringify(galleryItems, null, 4).replace(/^/gm, '  ').trimStart();

const oldGalleryRegex = /  gallery: \[\r?\n[\s\S]*?\r?\n  \],/;
if (oldGalleryRegex.test(content)) {
  content = content.replace(oldGalleryRegex, formattedGallery + ',');
  console.log('Replaced gallery with ' + galleryItems.length + ' items');
} else {
  console.error('Failed to find old gallery array in siteData.js');
}

// 3. Update studioImages
const oldStudioImages = `  studioImages: [
    { src: "/images/studio/IMG_9200-1024x768.jpg", caption: "Premium Private Tattoo Consultation & Inking Suite" },
    { src: "/images/studio/IMG_9201-1024x768.jpg", caption: "Autoclave Sterilization Station & Medical-Grade Cleanliness" },
    { src: "/images/studio/IMG_9202-1024x768.jpg", caption: "Lajpat Nagar Central Market Studio Waiting Lounge" },
    { src: "/images/studio/IMG_9206-1024x768.jpg", caption: "Precision Tattoo Workstation with Ergonomic Hydraulic Beds" }
  ],`;

const newStudioImages = `  studioImages: [
    { src: "/images/cloudinary_tattoos/IMG_0768.jpg", caption: "Master Artist Harminder Singh Inking Precision Client Session" },
    { src: "/images/cloudinary_tattoos/IMG_0769.jpg", caption: "Tattoo Villa Studio Inking Suite & Neon Atmosphere" },
    { src: "/images/studio/IMG_9200-1024x768.jpg", caption: "Premium Private Tattoo Consultation & Inking Suite" },
    { src: "/images/studio/IMG_9201-1024x768.jpg", caption: "Autoclave Sterilization Station & Medical-Grade Cleanliness" },
    { src: "/images/studio/IMG_9202-1024x768.jpg", caption: "Lajpat Nagar Central Market Studio Waiting Lounge" },
    { src: "/images/studio/IMG_9206-1024x768.jpg", caption: "Precision Tattoo Workstation with Ergonomic Hydraulic Beds" }
  ],`;

if (content.includes(oldStudioImages)) {
  content = content.replace(oldStudioImages, newStudioImages);
  console.log('Updated studioImages with authentic inking photos');
}

fs.writeFileSync(siteDataPath, content, 'utf8');
console.log('siteData.js successfully updated!');
