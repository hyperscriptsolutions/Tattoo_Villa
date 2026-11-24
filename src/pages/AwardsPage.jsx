import React, { useState } from 'react';
import { Award, Sparkles, CheckCircle2, ArrowRight, Trophy, Medal, Maximize2, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SEOHead from '../components/SEOHead';
import { SITE_DATA } from '../data/siteData';

export default function AwardsPage({ onOpenAppointmentModal, onOpenLightbox }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const narrative = SITE_DATA.awardsNarrative;
  const awards = SITE_DATA.awards;
  const gallery = SITE_DATA.awardGallery || [];

  const categories = ['All', 'Trophies', 'Certificates', 'Stage'];

  const filteredGallery = activeCategory === 'All'
    ? gallery
    : gallery.filter(item => item.category === activeCategory);

  const handleImageClick = (idx) => {
    if (onOpenLightbox) {
      const lightboxImages = filteredGallery.map(item => ({
        src: item.src,
        title: item.title,
        description: item.description
      }));
      onOpenLightbox(lightboxImages, idx);
    }
  };

  return (
    <div className="py-12 sm:py-20 bg-charcoal-950">
      <SEOHead
        title="Our Awards & Recognitions | Tattoo Villa Delhi"
        description="Celebrate Tattoo Villa's journey of artistry excellence. Honored at the Global Tattoo Convention, National Tattoo Awards, International Body Art Guild, and World Tattoo Summit."
        canonicalUrl="/awards"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Our Awards", path: "/awards" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Badge & Title */}
        <div className="text-center max-w-4xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Trophy className="w-4 h-4 text-gold-400" />
            15+ Years of Industry Recognition
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-white tracking-tight mb-6">
            OUR AWARDS
          </h1>
          <p className="text-base sm:text-lg text-gold-300/90 font-medium leading-relaxed max-w-3xl mx-auto mb-8">
            "{narrative?.intro || "Where we celebrate our journey of excellence in the world of tattoo artistry, marked by numerous awards and recognitions that reflect our commitment to creativity, quality, and customer satisfaction."}"
          </p>
        </div>

        {/* Narrative Journey Card - Authentic Story from Original Site */}
        <div className="glass-panel p-6 sm:p-10 lg:p-12 rounded-3xl border border-gold-500/30 shadow-2xl mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-4 text-gold-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>The Journey of Master Artistry</span>
            </div>
            
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-normal">
              {narrative?.story}
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed italic border-l-2 border-gold-500/40 pl-4 sm:pl-6">
              {narrative?.gratitude}
            </p>
          </div>
        </div>

        {/* Major Accolades Timeline Cards */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-2">
              Hall of Honors
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
              Milestone Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, idx) => (
              <div
                key={idx}
                className="glass-panel p-7 sm:p-8 rounded-3xl border border-zinc-800 hover:border-gold-500/40 transition-all shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gold-500/10 text-gold-400 border border-gold-500/20 flex items-center justify-center group-hover:bg-gold-500 group-hover:text-black transition-colors">
                      <Medal className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-zinc-900 border border-gold-500/30 text-gold-400 font-mono text-xs font-bold">
                      {award.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                    {award.title}
                  </h3>
                  <p className="text-xs text-gold-400/90 font-semibold uppercase tracking-wider mb-3">
                    {award.organization}
                  </p>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {award.description}
                  </p>
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-800/80 flex items-center gap-2 text-[11px] text-emerald-400 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span>Verified Studio Honor</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 24-Photo Trophy & Certificate Gallery (Matches Old Site Layout) */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
                <Trophy className="w-3.5 h-3.5" />
                Original Gallery
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Trophies, Stage Felicitations & Certificates
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Authentic documentation of awards won at national and international conventions. Click any image to view full size.
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-2 shrink-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-gold-500 text-black shadow-md'
                      : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {cat} {cat === 'All' ? `(${gallery.length})` : ''}
                </button>
              ))}
            </div>
          </div>

          {/* 4-Column Clean Photo Grid (No Text Overlays) */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
            <AnimatePresence>
              {filteredGallery.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  onClick={() => handleImageClick(idx)}
                  className="group relative rounded-xl sm:rounded-2xl overflow-hidden bg-charcoal-900 border border-zinc-800/80 hover:border-gold-500/60 shadow-lg cursor-pointer aspect-square sm:aspect-[4/5] transition-all duration-300"
                >
                  <img
                    src={item.src}
                    alt={item.title || "Tattoo Villa Award"}
                    loading="lazy"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Subtle hover backdrop with expand icon */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-black/75 backdrop-blur-md border border-gold-500/50 flex items-center justify-center text-gold-400 opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 shadow-xl">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Studio Consultation Banner */}
        <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 text-center border border-gold-500/30 max-w-3xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="w-16 h-16 rounded-2xl bg-gold-500/10 text-gold-400 border border-gold-500/30 flex items-center justify-center mx-auto mb-4">
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
            Experience Award-Winning Inking Yourself
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 mb-6 max-w-xl mx-auto leading-relaxed">
            Consult directly with master artists Harminder Singh and Jaspreet Singh at our Central Market Lajpat Nagar II studio. Every design is custom tailored for life.
          </p>
          <button
            onClick={() => onOpenAppointmentModal('Award-winning artist consultation')}
            className="py-3.5 px-8 rounded-xl bg-gold-metallic text-black font-extrabold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Book Consultation Slot</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
