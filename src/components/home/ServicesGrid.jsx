import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../../data/siteData';
import { fadeInUp, scaleUp } from '../../utils/animations';

export default function ServicesGrid({ onOpenAppointmentModal }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const services = SITE_DATA.services;

  // Auto-scroll timer on mobile
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused, services.length]);

  // Smooth scroll to target card whenever currentIndex changes
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const targetCard = container.children[currentIndex];
    if (targetCard) {
      const targetLeft = targetCard.offsetLeft - (container.clientWidth - targetCard.clientWidth) / 2;
      container.scrollTo({
        left: Math.max(0, targetLeft),
        behavior: 'smooth'
      });
    }
  }, [currentIndex]);

  // Sync index on manual finger swipe
  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollLeft = container.scrollLeft;
    const cardWidth = container.children[0]?.clientWidth || 280;
    const gap = 16;
    const index = Math.round(scrollLeft / (cardWidth + gap));
    if (index >= 0 && index < services.length && index !== currentIndex) {
      setCurrentIndex(index);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  return (
    <section className="py-20 sm:py-28 bg-charcoal-950 relative overflow-hidden scroll-mt-24 sm:scroll-mt-32" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Master Specialties
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Curated Tattoo Disciplines
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            From photorealistic memorial portraits and delicate single-needle script to sacred devotional iconography and full anatomical sleeves, explore our dedicated services.
          </p>
        </motion.div>

        {/* Mobile View: Full-Image Auto Side-Scrolling Carousel */}
        <div
          className="md:hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            setTimeout(() => setIsPaused(false), 2200);
          }}
        >
          {/* Scrollable Track */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto pb-4 pt-1 px-4 -mx-4 scrollbar-none snap-x snap-mandatory scroll-smooth"
            style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
          >
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="w-[82vw] max-w-[310px] shrink-0 snap-center glass-panel rounded-2xl overflow-hidden border border-zinc-800/90 shadow-xl flex flex-col bg-charcoal-900/80"
              >
                {/* Full Image like before */}
                <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-center filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent"></div>

                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-gold-400 shadow-md">
                    0{idx + 1} • Specialty
                  </span>
                </div>

                {/* Card Content like before */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-serif font-bold text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                      {service.shortDesc}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-zinc-800/80 flex items-center justify-between">
                    <Link
                      to={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      <span>Explore Designs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => onOpenAppointmentModal(service.title)}
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gold-500/15 text-gold-300 border border-gold-500/30 hover:bg-gold-500 hover:text-black transition-all cursor-pointer"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Carousel Controls & Progress Dots */}
          <div className="flex items-center justify-between mt-3 px-1">
            <div className="flex items-center gap-1.5">
              {services.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === dotIdx
                      ? 'w-6 bg-gold-400 shadow-sm shadow-gold-500/50'
                      : 'w-1.5 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                  aria-label={`Slide ${dotIdx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700/80 text-zinc-300 flex items-center justify-center hover:text-white hover:border-gold-500/50 transition-colors cursor-pointer"
                aria-label="Previous Specialty"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700/80 text-zinc-300 flex items-center justify-center hover:text-white hover:border-gold-500/50 transition-colors cursor-pointer"
                aria-label="Next Specialty"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop View: 4-Column Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={scaleUp}
              custom={idx % 4}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group glass-panel rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-gold-500/50 transition-colors duration-300 flex flex-col shadow-lg hover:shadow-2xl hover:shadow-gold-500/5"
            >
              {/* Image Preview with Smooth Zoom */}
              <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-900">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent"></div>

                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-medium text-gold-400 shadow-md">
                  Specialty
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 hover:text-gold-300 transition-colors group/link"
                  >
                    <span>Explore Designs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                  </Link>

                  <button
                    onClick={() => onOpenAppointmentModal(service.title)}
                    className="text-[11px] text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
