import React, { useState, useEffect } from 'react';
import { Star, ExternalLink, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { SITE_DATA } from '../../data/siteData';
import { fadeInUp, scaleUp } from '../../utils/animations';

export default function ReviewsSection() {
  const reviews = [...SITE_DATA.reviews].sort((a, b) => new Date(b.date) - new Date(a.date));
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth < 768 : false
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const defaultLimit = isMobile ? 4 : 6;
  const visibleReviews = isExpanded ? reviews : reviews.slice(0, defaultLimit);
  const hasMore = visibleReviews.length < reviews.length;
  const remainingCount = reviews.length - visibleReviews.length;
  const googleMapsUrl = SITE_DATA.contact.delhi.mapDirectLink || "https://www.google.com/maps/search/?api=1&query=Tattoo+Villa+Central+Market+Lajpat+Nagar+II+New+Delhi+Delhi+110024";

  const handleShowMore = () => {
    setIsExpanded(true);
  };

  const handleShowLess = () => {
    setIsExpanded(false);
    document.getElementById('reviews')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 sm:py-28 bg-charcoal-900 border-t border-zinc-800/80 overflow-hidden scroll-mt-24 sm:scroll-mt-32" id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Google Rating Badge */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Real Client Stories
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
              Loved by Over 18,000 Inked Souls
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              Authentic feedback from clients who trusted Tattoo Villa with their first tattoos, custom memorials, and full sleeve projects.
            </p>
          </motion.div>

          {/* Google Reviews Live Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4, transition: { duration: 0.25 } }}
            className="glass-panel p-5 sm:p-6 rounded-2xl border border-gold-500/30 flex items-center gap-4 shrink-0 shadow-xl"
          >
            <div className="w-14 h-14 rounded-full bg-zinc-900 flex items-center justify-center p-2 border border-zinc-700 shadow-inner">
              {/* Google G Icon */}
              <svg viewBox="0 0 24 24" className="w-8 h-8">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-black text-white">4.9</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-zinc-300 font-medium">Based on 1,776+ Verified Google Reviews</p>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-gold-400 hover:underline flex items-center gap-1 mt-0.5 cursor-pointer"
              >
                <span>Read verified reviews on Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Most Recent Verified Reviews Indicator */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-zinc-800/60">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
              Most Recent Google Reviews
            </span>
          </div>
          <span className="text-xs text-zinc-400 font-medium">
            Chronological • Newest First
          </span>
        </div>

        {/* Reviews Grid (Show 6 Initially) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visibleReviews.map((rev, idx) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: (idx % 3) * 0.08 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass-panel p-6 sm:p-7 rounded-2xl border border-zinc-800/80 hover:border-gold-500/40 transition-colors flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-zinc-800 text-[10px] font-semibold text-zinc-400">
                      {rev.tag}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6 italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <div>
                    {rev.profileLink ? (
                      <a
                        href={rev.profileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-bold text-white group-hover:text-gold-300 transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{rev.name}</span>
                        <ExternalLink className="w-3 h-3 text-zinc-500 group-hover:text-gold-400" />
                      </a>
                    ) : (
                      <h4 className="text-sm font-bold text-white group-hover:text-gold-300 transition-colors">
                        {rev.name}
                      </h4>
                    )}
                    <p className="text-[11px] text-zinc-500">{rev.date}</p>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-bold" title="Verified Google Customer Review">
                    <span>✓</span>
                    <span className="hidden sm:inline">Google Verified</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Action Controls: Show More / Show Less & Read on Google Maps */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          {hasMore ? (
            <button
              onClick={handleShowMore}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl bg-charcoal-950 hover:bg-zinc-800 border border-gold-500/40 hover:border-gold-500 text-gold-400 hover:text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg cursor-pointer group"
            >
              <span>Show More Reviews ({remainingCount} More)</span>
              <ChevronDown className="w-4 h-4 text-gold-400 group-hover:translate-y-0.5 transition-transform" />
            </button>
          ) : (
            reviews.length > defaultLimit && (
              <button
                onClick={handleShowLess}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-charcoal-950 hover:bg-zinc-800 border border-zinc-700 text-zinc-400 hover:text-white font-semibold text-xs tracking-wider transition-all cursor-pointer"
              >
                <span>Show Less</span>
                <ChevronUp className="w-4 h-4" />
              </button>
            )
          )}

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white hover:text-gold-300 font-bold text-xs uppercase tracking-wider border border-zinc-700 hover:border-gold-500/40 transition-all shadow-lg group cursor-pointer"
          >
            <span>Read All 1,776+ Google Reviews on Maps</span>
            <ExternalLink className="w-3.5 h-3.5 text-gold-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
