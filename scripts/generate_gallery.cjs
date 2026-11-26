const fs = require('fs');

const gallery = [
  // Videos (9 Process & Wipe Reveal Reels)
  {
    id: 1,
    title: 'Creation of Adam & Sacred Heart Leg Piece Foam Wipe Reveal',
    category: 'Videos',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2525_poster.jpg',
    videoUrl: 'https://res.cloudinary.com/ozrdoi7q/video/upload/q_auto,f_mp4,vc_h264/v1795670731/IMG_2525.mp4',
    isVideo: true
  },
  {
    id: 2,
    title: 'Toronto Skyline & Canadian Rockies Forearm Sleeve Wipe Reveal',
    category: 'Videos',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2656_poster.jpg',
    videoUrl: 'https://res.cloudinary.com/ozrdoi7q/video/upload/q_auto,f_mp4,vc_h264/v1795670718/IMG_2656.mp4',
    isVideo: true
  },
  {
    id: 3,
    title: 'Japanese Crimson Dragon Shoulder Piece Clean Wipe Reveal',
    category: 'Videos',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2274_poster.jpg',
    videoUrl: 'https://res.cloudinary.com/ozrdoi7q/video/upload/q_auto,f_mp4,vc_h264/v1795670711/IMG_2274.mp4',
    isVideo: true
  },
  {
    id: 4,
    title: 'Cybernetic Biomechanical Octopus Fresh Ink Wipe Reveal',
    category: 'Videos',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2169_poster.jpg',
    videoUrl: 'https://res.cloudinary.com/ozrdoi7q/video/upload/q_auto,f_mp4,vc_h264/v1795670711/IMG_2169.mp4',
    isVideo: true
  },
  {
    id: 5,
    title: 'Poseidon Ocean God Forearm Realism Master Wipe Reveal',
    category: 'Videos',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2094_poster.jpg',
    videoUrl: 'https://res.cloudinary.com/ozrdoi7q/video/upload/q_auto,f_mp4,vc_h264/v1795670710/IMG_2094.mp4',
    isVideo: true
  },
  {
    id: 6,
    title: 'Biomechanical Kraken 360 Forearm Flow & Dimension',
    category: 'Videos',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2157_poster.jpg',
    videoUrl: 'https://res.cloudinary.com/ozrdoi7q/video/upload/q_auto,f_mp4,vc_h264/v1795670708/IMG_2157.mp4',
    isVideo: true
  },
  {
    id: 7,
    title: 'Blackwork Flame Neck Tattoo Studio Lighting Showcase',
    category: 'Videos',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2058_poster.jpg',
    videoUrl: 'https://res.cloudinary.com/ozrdoi7q/video/upload/q_auto,f_mp4,vc_h264/v1795670708/IMG_2058.mp4',
    isVideo: true
  },
  {
    id: 8,
    title: 'Ascending Fine-Line Phoenix Micro-Needle Arm Rotation',
    category: 'Videos',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_2329_poster.jpg',
    videoUrl: 'https://res.cloudinary.com/ozrdoi7q/video/upload/q_auto,f_mp4,vc_h264/v1795670707/IMG_2329.mp4',
    isVideo: true
  },
  {
    id: 9,
    title: 'African Lion Sunset Portrait Studio Reveal & Detail Pan',
    category: 'Videos',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2598_poster.jpg',
    videoUrl: 'https://res.cloudinary.com/ozrdoi7q/video/upload/q_auto,f_mp4,vc_h264/v1795670707/IMG_2598.mp4',
    isVideo: true
  },

  // Realism (11 Photos)
  {
    id: 10,
    title: 'Spartan Armor Warrior with Broadsword',
    category: 'Realism',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_0187.jpg'
  },
  {
    id: 11,
    title: 'Chrono Skull & Baroque Rose Realism Sleeve',
    category: 'Realism',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_0973.jpg'
  },
  {
    id: 12,
    title: "Gambler's Luck: Roman Clock & Ace Cards Realism",
    category: 'Realism',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_0609.jpg'
  },
  {
    id: 13,
    title: 'Crowned King Skull with Aces & Smoke',
    category: 'Realism',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_0408.jpg'
  },
  {
    id: 14,
    title: 'Ace of Spades, Compass & Eye of Providence',
    category: 'Realism',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_9728.jpg'
  },
  {
    id: 15,
    title: 'Steampunk Clockwork Skull & Piercing Eye',
    category: 'Realism',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_9533.jpg'
  },
  {
    id: 16,
    title: 'Peering Eyes Realistic Ripped Skin Sleeve',
    category: 'Realism',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_9304.jpg'
  },
  {
    id: 17,
    title: 'Spartan Gladiator Chest Piece Armor',
    category: 'Realism',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_9287.jpg'
  },
  {
    id: 18,
    title: 'Time & Vision: Realistic Eye with Baroque Rose',
    category: 'Realism',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_9269.jpg'
  },
  {
    id: 19,
    title: 'Spartan Helmet & Howling Wolf Moon Realism',
    category: 'Realism',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_9772.jpg'
  },
  {
    id: 20,
    title: 'Toronto Skyline & Canadian Rocky Mountains Sleeve',
    category: 'Realism',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2663.jpg'
  },

  // Portrait (6 Photos)
  {
    id: 21,
    title: 'Blindfolded Valkyrie Goddess with Dual Blades',
    category: 'Portrait',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_0955.jpg'
  },
  {
    id: 22,
    title: 'Mythological Poseidon Ocean God Forearm',
    category: 'Portrait',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2099.jpg'
  },
  {
    id: 23,
    title: 'Guardian Angel Protecting Child Memorial',
    category: 'Portrait',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2434.jpg'
  },
  {
    id: 24,
    title: 'Stairway to Heaven Memorial with Angelic Ribbons',
    category: 'Portrait',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_9295.jpg'
  },
  {
    id: 25,
    title: 'Crescent Moon Fairy with Starlight Glow',
    category: 'Portrait',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_9511.jpg'
  },
  {
    id: 26,
    title: 'Monogram Ski-Mask Hand Portrait',
    category: 'Portrait',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_9662.jpg'
  },

  // Animal & Wildlife (11 Photos)
  {
    id: 27,
    title: 'Roaring Bengal Tiger & Jungle Waterfall Full Sleeve',
    category: 'Animal',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_0145.jpg'
  },
  {
    id: 28,
    title: 'Pride of Africa: Realistic Lion Portrait at Sunset',
    category: 'Animal',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2603.jpg'
  },
  {
    id: 29,
    title: 'Majestic Lion Portrait & Sunset Silhouette',
    category: 'Animal',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2602.jpg'
  },
  {
    id: 30,
    title: 'Geometric Sketchwork Lion Head',
    category: 'Animal',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_1404.jpg'
  },
  {
    id: 31,
    title: 'Mystic Blue-Eyed Owl & Lioness Wildlife Thigh Piece',
    category: 'Animal',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_9924.jpg'
  },
  {
    id: 32,
    title: 'Graceful Leaping Wild Tiger Line Art',
    category: 'Animal',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_9277.jpg'
  },
  {
    id: 33,
    title: 'Regal Peacock & Serpent Memorial Story',
    category: 'Animal',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_9506.jpg'
  },
  {
    id: 34,
    title: 'Vibrant Color Emerald Peacock Thigh Artwork',
    category: 'Animal',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_8867.jpg'
  },
  {
    id: 35,
    title: 'Cybernetic Biomechanical Kraken with Red Geometry',
    category: 'Animal',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2167.jpg'
  },
  {
    id: 36,
    title: 'Ascending Mythical Phoenix Bird Fine-Line',
    category: 'Animal',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_2331.jpg'
  },
  {
    id: 37,
    title: 'Neo-Traditional Dagger & Mouse Allegory',
    category: 'Animal',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_2832.jpg'
  },

  // Religious & Spiritual (5 Photos)
  {
    id: 38,
    title: 'Sacred Mount Kailash, Ganga & Lord Shiva Spiritual Sleeve',
    category: 'Religious',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_0191-1.jpg'
  },
  {
    id: 39,
    title: 'Sacred Gurmukhi Insignia Shoulder Emblem',
    category: 'Religious',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_0177.jpg'
  },
  {
    id: 40,
    title: 'Divine Archangel Warrior with Sword of Light',
    category: 'Religious',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_0633.jpg'
  },
  {
    id: 41,
    title: 'Creation of Adam, Flaming Sacred Heart & Eye of God',
    category: 'Religious',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2524.jpg'
  },
  {
    id: 42,
    title: 'Geometric Sacred Heart & Radiant Sunburst',
    category: 'Religious',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_2522.jpg'
  },

  // Sleeve & Large Scale (5 Photos)
  {
    id: 43,
    title: 'Spartan Warrior & Polynesian Geometric Full Sleeve',
    category: 'Sleeve',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_1020.jpg'
  },
  {
    id: 44,
    title: 'Polynesian Tribal Geometric Blackwork Sleeve',
    category: 'Sleeve',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_9990.jpg'
  },
  {
    id: 45,
    title: 'Wanderlust Nautical Compass & Global Coordinates Sleeve',
    category: 'Sleeve',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_9727.jpg'
  },
  {
    id: 46,
    title: 'Biomechanical Forearm 360 Wrap Perspective',
    category: 'Sleeve',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2172.jpg'
  },
  {
    id: 47,
    title: 'Symmetrical Shoulder Rose Trio with Pearls',
    category: 'Sleeve',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_8941.jpg'
  },

  // Minimal & Fine-Line (4 Photos)
  {
    id: 48,
    title: 'Fine-Line Celestial Sun & Chandelier Pearls',
    category: 'Minimal',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_0752.jpg'
  },
  {
    id: 49,
    title: 'Crescent Moon Floral & Starburst Line Art',
    category: 'Minimal',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_0749.jpg'
  },
  {
    id: 50,
    title: 'Fine-Line Self-Love Angel Wings & Tiara',
    category: 'Minimal',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_0205.jpg'
  },
  {
    id: 51,
    title: 'Dual Shaded Roses & Monarch Butterflies',
    category: 'Minimal',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_0468.jpg'
  },

  // Calligraphy & Script (2 Photos)
  {
    id: 52,
    title: 'Dark Brush Calligraphic Blade Sigil',
    category: 'Calligraphy',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_1501.jpg'
  },
  {
    id: 53,
    title: 'Sacred Gurmukhi Calligraphy Emblem',
    category: 'Calligraphy',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_0177.jpg'
  },

  // Custom Designs & Creative Inking (11 Photos)
  {
    id: 54,
    title: 'Japanese Serpentine Dragon with Crimson Glow',
    category: 'Custom',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2264.jpg'
  },
  {
    id: 55,
    title: 'Symmetrical Blackwork Sacred Flame Neck Piece',
    category: 'Custom',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2055.jpg'
  },
  {
    id: 56,
    title: 'Vibrant Color Peony & Rose Forearm Bouquet',
    category: 'Custom',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_0736.jpg'
  },
  {
    id: 57,
    title: 'Cascading Lily Floral Thigh Vine',
    category: 'Custom',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_0653.jpg'
  },
  {
    id: 58,
    title: 'Negative Space Peony Hand Bloom',
    category: 'Custom',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_0039.jpg'
  },
  {
    id: 59,
    title: 'Japanese Peony & Dynamic Water Waves',
    category: 'Custom',
    artist: 'Jaspreet Singh',
    src: '/images/cloudinary_tattoos/IMG_0046.jpg'
  },
  {
    id: 60,
    title: 'Velvet Shaded Realism Hand Rose',
    category: 'Custom',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_0989.jpg'
  },
  {
    id: 61,
    title: 'Biomechanical Octopus Tentacle Flow Detail',
    category: 'Custom',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2165.jpg'
  },
  {
    id: 62,
    title: 'Biomechanical Kraken Head & Siphon Detail',
    category: 'Custom',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2170.jpg'
  },
  {
    id: 63,
    title: 'Octopus Suction Cups & Cyber Red Circuitry',
    category: 'Custom',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_2171.jpg'
  },
  {
    id: 64,
    title: 'Master Inking Session with Single-Use Precision Cartridge',
    category: 'Custom',
    artist: 'Harminder Singh',
    src: '/images/cloudinary_tattoos/IMG_0768.jpg'
  }
];

// Write this gallery to a js fragment we can inspect
fs.writeFileSync('scripts/gallery_export.json', JSON.stringify(gallery, null, 2));
console.log('Successfully written ' + gallery.length + ' gallery items to scripts/gallery_export.json');
