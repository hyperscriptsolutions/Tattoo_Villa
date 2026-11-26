import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ArrowRight, Sparkles, Filter, Play, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_DATA } from '../../data/siteData';
import { fadeInUp } from '../../utils/animations';

export default function PortfolioMasonry({ onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [cardWidth, setCardWidth] = useState(280);

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

  const filteredItems = activeFilter === 'All'
    ? SITE_DATA.gallery
    : SITE_DATA.gallery.filter(item => item.category === activeFilter);

  // Take top items for homepage showcase
  const displayItems = filteredItems.slice(0, 10);

  // Responsive card width calculation for mobile side-scroll
  useEffect(() => {
    const updateSize = () => {
      if (typeof window !== 'undefined') {
        // ~78% of screen width so next card peeks into view
        const w = Math.min(window.innerWidth * 0.78, 300);
        setCardWidth(w + 16); // width + gap
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Reset index to 0 whenever filter changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [activeFilter]);

  // Hardware-accelerated auto-advance timer for mobile slider
  useEffect(() => {
    if (isPaused || displayItems.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % displayItems.length);
    }, 3400);

    return () => clearInterval(timer);
  }, [isPaused, displayItems.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + displayItems.length) % displayItems.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % displayItems.length);
  };

  return (
    <section className="py-20 sm:py-28 bg-charcoal-900 border-t border-zinc-800/80 overflow-hidden scroll-mt-24 sm:scroll-mt-32" id="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
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
              Every piece below is authentic custom tattoo artwork inked right here at Tattoo Villa Delhi by master artists Harminder Singh and Jaspreet Singh.
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
              <span>View Full Gallery (64+ Works)</span>
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
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none"
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
                  ? 'bg-gold-metallic text-black shadow-lg shadow-gold-500/10 font-bold'
                  : 'bg-charcoal-950 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </motion.div>

        {/* Mobile View Header & Status Bar */}
        <div className="flex md:hidden items-center justify-between text-xs text-zinc-400 mb-4 px-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
            <span className="font-semibold text-zinc-300">
              Swipe to explore ({currentIndex + 1} of {displayItems.length})
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <button
              onClick={handlePrev}
              aria-label="Previous artwork"
              className="w-8 h-8 rounded-full bg-zinc-800/90 text-zinc-300 hover:text-white border border-zinc-700/80 flex items-center justify-center transition-colors active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              aria-label="Next artwork"
              className="w-8 h-8 rounded-full bg-zinc-800/90 text-zinc-300 hover:text-white border border-zinc-700/80 flex items-center justify-center transition-colors active:scale-95"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW: Hardware-Accelerated Auto Side-Scrolling Carousel */}
        {/* ============================================================== */}
        <div
          className="md:hidden relative overflow-hidden -mx-4 px-4 pb-4 select-none"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            setTimeout(() => setIsPaused(false), 2500);
          }}
        >
          <motion.div
            className="flex gap-4 cursor-grab active:cursor-grabbing will-change-transform"
            drag="x"
            dragConstraints={{
              left: -Math.max(0, (displayItems.length - 1) * cardWidth),
              right: 0
            }}
            dragElastic={0.15}
            animate={{ x: -currentIndex * cardWidth }}
            transition={{
              type: "spring",
              stiffness: 240,
              damping: 26,
              mass: 0.8
            }}
            onDragStart={() => setIsPaused(true)}
            onDragEnd={(_, info) => {
              setTimeout(() => setIsPaused(false), 2500);
              const swipeThreshold = 35;
              if (info.offset.x < -swipeThreshold && currentIndex < displayItems.length - 1) {
                setCurrentIndex((c) => c + 1);
              } else if (info.offset.x > swipeThreshold && currentIndex > 0) {
                setCurrentIndex((c) => c - 1);
              }
            }}
          >
            {displayItems.map((item, index) => (
              <div
                key={item.id}
                style={{ width: `${Math.max(260, cardWidth - 16)}px` }}
                onClick={() => onOpenLightbox(displayItems, index)}
                className="shrink-0 relative rounded-2xl overflow-hidden bg-charcoal-950 border border-zinc-800/90 shadow-2xl group cursor-pointer active:scale-[0.99] transition-transform"
              >
                {/* Visual Image / Poster Container */}
                <div className="relative aspect-[9/13] overflow-hidden bg-charcoal-950">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    draggable={false}
                    className="w-full h-full object-cover object-center filter contrast-105"
                  />

                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 z-10 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[10px] font-semibold text-gold-400 uppercase tracking-wider shadow-md">
                    {item.category}
                  </span>

                  {/* Center Play Button for Videos */}
                  {item.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                      <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-gold-400/80 shadow-[0_0_25px_rgba(212,175,55,0.45)] flex items-center justify-center text-gold-400 transition-transform active:scale-90">
                        <Play className="w-6 h-6 fill-gold-400 text-gold-400 ml-0.5" />
                      </div>
                    </div>
                  )}

                  {/* Always-Visible Attractive Mobile Bottom Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 via-60% to-transparent pointer-events-none flex flex-col justify-end p-4">
                    <h4 className="text-white font-serif font-bold text-base leading-snug line-clamp-1 drop-shadow-md">
                      {item.title}
                    </h4>
                    <div className="flex items-center justify-between text-xs text-zinc-300 mt-1.5">
                      <span className="text-zinc-400 text-[11px]">By {item.artist}</span>
                      {item.isVideo ? (
                        <span className="text-gold-400 font-bold flex items-center gap-1 text-[11px] bg-gold-500/15 px-2 py-0.5 rounded border border-gold-500/30">
                          <Play className="w-3 h-3 fill-gold-400" /> Watch Video
                        </span>
                      ) : (
                        <span className="text-gold-400 font-bold flex items-center gap-1 text-[11px]">
                          <Eye className="w-3 h-3" /> View Art
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Mobile Dot Indicators */}
          <div className="flex items-center justify-center gap-1.5 mt-4">
            {displayItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Jump to artwork ${idx + 1}`}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx
                    ? 'w-6 h-1.5 bg-gold-400 shadow-md shadow-gold-500/30'
                    : 'w-1.5 h-1.5 bg-zinc-700 hover:bg-zinc-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP VIEW: High-Impact 4-Column Luxury Grid                 */}
        {/* ============================================================== */}
        <motion.div
          layout
          className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {displayItems.slice(0, 8).map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, transition: { duration: 0.25 } }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                onClick={() => onOpenLightbox(displayItems, index)}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="group relative rounded-2xl overflow-hidden bg-charcoal-950 border border-zinc-800/80 hover:border-gold-500/50 transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-2xl hover:shadow-gold-500/10"
              >
                {/* Image Container with Aspect Ratio */}
                <div className="aspect-[3/4] overflow-hidden bg-charcoal-900 relative">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out filter contrast-105"
                  />
                  {item.isVideo && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-black/50 backdrop-blur-sm border border-gold-400/60 flex items-center justify-center text-gold-400 group-hover:scale-110 transition-transform shadow-lg">
                        <Play className="w-5 h-5 fill-gold-400 ml-0.5" />
                      </div>
                    </div>
                  )}
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
                    {item.isVideo ? (
                      <>
                        <Play className="w-3.5 h-3.5 fill-gold-400" />
                        <span>Click to watch process video</span>
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
            <span>Explore All 64+ Masterpieces</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
