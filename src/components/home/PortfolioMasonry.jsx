import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ArrowRight, Sparkles, Filter } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_DATA } from '../../data/siteData';
import { fadeInUp, scaleUp } from '../../utils/animations';

export default function PortfolioMasonry({ onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = [
    'All',
    'Realism',
    'Portrait',
    'Sleeve',
    'Animal',
    'Religious',
    'Minimal',
    'Calligraphy',
    'Custom'
  ];

  const filteredItems = activeFilter === 'All'
    ? SITE_DATA.gallery
    : SITE_DATA.gallery.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 sm:py-28 bg-charcoal-900 border-t border-zinc-800/80 overflow-hidden scroll-mt-24 sm:scroll-mt-32" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Living Canvas
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
              Featured Portfolio
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              Every photograph below is genuine custom tattoo artwork created right here at Tattoo Villa Delhi by Harminder Singh and Jaspreet Singh.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs uppercase tracking-wider border border-zinc-700 hover:border-gold-500/30 transition-all shrink-0 self-start md:self-auto group shadow-md"
            >
              <span>View Full Gallery (56+ Works)</span>
              <ArrowRight className="w-4 h-4 text-gold-400 group-hover:translate-x-1.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Filter Pills with Spring Interactions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none"
        >
          <Filter className="w-4 h-4 text-zinc-500 shrink-0 ml-1 mr-2 hidden sm:block" />
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className={`py-2 px-4 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-gold-metallic text-black shadow-lg shadow-gold-500/10'
                  : 'bg-charcoal-950 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Animated Filtering Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.slice(0, 8).map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.25 } }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => onOpenLightbox(filteredItems, index)}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl overflow-hidden bg-charcoal-950 border border-zinc-800/80 hover:border-gold-500/50 transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-gold-500/5"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="aspect-[3/4] overflow-hidden bg-charcoal-900">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out filter contrast-105"
                  />
                </div>

                {/* Hover Overlay with Smooth Backdrop Fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-5 backdrop-blur-[2px]">
                  <span className="px-2.5 py-0.5 rounded-full bg-gold-500/25 text-gold-300 border border-gold-500/40 text-[10px] font-semibold uppercase tracking-wider self-start mb-2 shadow-sm">
                    {item.category}
                  </span>
                  <h4 className="text-white font-serif font-bold text-base leading-snug transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-400 mt-1">Artist: {item.artist}</p>

                  <div className="mt-3 flex items-center gap-1.5 text-xs text-gold-400 font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    <Eye className="w-3.5 h-3.5" />
                    <span>Tap to view full resolution</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 py-3 px-8 rounded-xl bg-gold-metallic text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-lg hover:shadow-gold-500/20 group cursor-pointer"
          >
            <span>Explore All 56+ Masterpieces</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
