import React, { useState } from 'react';
import { Eye, Calendar, Sparkles, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { SITE_DATA } from '../data/siteData';
import { fadeInUp } from '../utils/animations';

export default function GalleryPage({ onOpenAppointmentModal, onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    'Videos',
    'Realism',
    'Portrait',
    'Sleeve',
    'Animal',
    'Religious',
    'Minimal',
    'Calligraphy',
    'Custom'
  ];

  const allWorks = SITE_DATA.gallery;

  const filteredItems = activeFilter === 'All'
    ? allWorks
    : allWorks.filter(item => item.category === activeFilter);

  return (
    <div className="py-12 sm:py-20 bg-charcoal-950 overflow-hidden">
      <SEOHead
        title="Tattoo Portfolio Gallery | Master Artworks Inked in Delhi"
        description="Browse 64+ authentic tattoo masterpieces and fresh process wipe reels created at Tattoo Villa Delhi. Explore realism, portraits, sleeves, fine-line, religious, and custom artwork."
        canonicalUrl="/gallery"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Portfolio Gallery", path: "/gallery" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Authentic Ink Catalog
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-black text-white tracking-tight mb-4">
            Living Tattoo Portfolio
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Every piece displayed in this gallery is 100% genuine custom body art executed at Tattoo Villa Delhi. Filter by style to explore our breadth of technique.
          </p>
        </motion.div>

        {/* Filter Pills with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-12 scrollbar-none"
        >
          {categories.map((cat) => (
            <motion.button
              key={cat}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(cat)}
              className={`py-2 px-5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gold-metallic text-black shadow-lg font-bold'
                  : 'bg-charcoal-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Animated Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.25 } }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => onOpenLightbox(filteredItems, index)}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl overflow-hidden bg-charcoal-900 border border-zinc-800 hover:border-gold-500/50 transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
              >
                <div className="aspect-[3/4] overflow-hidden relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out filter contrast-105"
                  />
                  {item.isVideo && (
                    <div className="absolute top-3 right-3 z-10 px-2.5 py-1 rounded-full bg-black/80 border border-gold-500/40 text-gold-300 text-[10px] font-bold flex items-center gap-1.5 backdrop-blur-sm shadow-md">
                      <Play className="w-3 h-3 fill-gold-400 text-gold-400" />
                      <span>Reel</span>
                    </div>
                  )}
                </div>

                {/* Overlay with Smooth Backdrop Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5 backdrop-blur-[2px]">
                  <span className="px-2.5 py-0.5 rounded-full bg-gold-500/25 text-gold-300 border border-gold-500/40 text-[10px] font-bold uppercase tracking-wider self-start mb-2 shadow-sm">
                    {item.category}
                  </span>
                  <h3 className="text-white font-serif font-bold text-base leading-snug transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">Inked by {item.artist}</p>
                  
                  <div className="mt-3 flex items-center gap-1.5 text-xs text-gold-400 font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.isVideo ? (
                      <>
                        <Play className="w-3.5 h-3.5 fill-gold-400" />
                        <span>Click to watch process reel</span>
                      </>
                    ) : (
                      <>
                        <Eye className="w-3.5 h-3.5" />
                        <span>Click to view full resolution</span>
                      </>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom Booking Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel-gold rounded-3xl p-8 sm:p-12 text-center border border-gold-500/30 max-w-4xl mx-auto shadow-2xl"
        >
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-3">
            Inspired by One of These Masterpieces?
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 max-w-xl mx-auto mb-6">
            Share the screenshot or description with our artists. We will create an original, custom concept crafted exclusively for your body anatomy.
          </p>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => onOpenAppointmentModal(`Custom design inquiry inspired by gallery`)}
            className="py-4 px-8 rounded-xl bg-gold-metallic text-black font-extrabold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all inline-flex items-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Free Design Consultation</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
