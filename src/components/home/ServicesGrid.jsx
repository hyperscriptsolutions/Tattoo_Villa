import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../../data/siteData';
import { fadeInUp, scaleUp } from '../../utils/animations';

export default function ServicesGrid({ onOpenAppointmentModal, onOpenLightbox }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const [containerWidth, setContainerWidth] = useState(360);
  const [cardWidth, setCardWidth] = useState(280);
  const cardGap = 16;
  const isDraggingRef = useRef(false);
  const dragDistanceRef = useRef(0);
  const services = SITE_DATA.services;

  // Responsive calculation for centered card positioning and peek ratios
  useEffect(() => {
    const updateSize = () => {
      if (typeof window !== 'undefined') {
        const winWidth = window.innerWidth;
        setContainerWidth(winWidth);

        // Mobile (<640px): ~76% width so left/right neighbors peek in naturally
        // Tablet (640px - 1024px): 320px
        if (winWidth < 640) {
          setCardWidth(Math.min(winWidth * 0.76, 290));
        } else if (winWidth < 1024) {
          setCardWidth(320);
        } else {
          setCardWidth(310);
        }
      }
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  // Hardware-accelerated auto-advance timer (pauses on interaction)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [isPaused, services.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  // Center the active card in the carousel viewport
  const centerOffset = Math.max(0, (containerWidth - cardWidth) / 2);
  const trackX = centerOffset - currentIndex * (cardWidth + cardGap);

  // Gallery items for high-res Lightbox modal
  const serviceGalleryItems = services.map((s) => ({
    src: s.image,
    title: s.title,
    category: 'Curated Discipline',
    artist: 'Tattoo Villa Master Inkers',
    description: s.shortDesc
  }));

  const handleCardClick = (idx, e) => {
    if (isDraggingRef.current || dragDistanceRef.current > 12) return;
    if (idx !== currentIndex) {
      // Tap on neighboring card brings it to center
      setCurrentIndex(idx);
    } else if (onOpenLightbox) {
      onOpenLightbox(serviceGalleryItems, idx);
    }
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
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-14"
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

        {/* ============================================================== */}
        {/* MOBILE & TABLET: Active Card Switching Carousel                */}
        {/* ============================================================== */}
        <div
          ref={containerRef}
          className="lg:hidden relative overflow-hidden -mx-4 px-4 pb-4 pt-2"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => {
            setTimeout(() => setIsPaused(false), 3000);
          }}
        >
          {/* Framer Motion GPU Sliding Track */}
          <motion.div
            className="flex cursor-grab active:cursor-grabbing will-change-transform py-4"
            style={{ gap: `${cardGap}px` }}
            drag="x"
            dragConstraints={{
              left: centerOffset - (services.length - 1) * (cardWidth + cardGap) - 50,
              right: centerOffset + 50
            }}
            dragElastic={0.2}
            animate={{ x: trackX }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1] // 600ms cubic-bezier transition
            }}
            onDragStart={() => {
              isDraggingRef.current = true;
              setIsPaused(true);
            }}
            onDrag={(_, info) => {
              dragDistanceRef.current = Math.hypot(info.offset.x, info.offset.y);
            }}
            onDragEnd={(_, info) => {
              setTimeout(() => {
                isDraggingRef.current = false;
                dragDistanceRef.current = 0;
              }, 120);

              const swipeThreshold = 35;
              const velocityThreshold = 240;

              if ((info.offset.x < -swipeThreshold || info.velocity.x < -velocityThreshold) && currentIndex < services.length - 1) {
                setCurrentIndex((c) => c + 1);
              } else if ((info.offset.x > swipeThreshold || info.velocity.x > velocityThreshold) && currentIndex > 0) {
                setCurrentIndex((c) => c - 1);
              }
            }}
          >
            {services.map((service, idx) => {
              const isActive = idx === currentIndex;
              const isNeighbor = Math.abs(idx - currentIndex) === 1;

              return (
                <motion.div
                  key={service.id}
                  style={{ width: `${cardWidth}px` }}
                  animate={{
                    scale: isActive ? 1.0 : 0.88,
                    opacity: isActive ? 1.0 : isNeighbor ? 0.65 : 0.35,
                    y: isActive ? 0 : 8
                  }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  onClick={(e) => handleCardClick(idx, e)}
                  className={`shrink-0 rounded-2xl overflow-hidden border flex flex-col bg-charcoal-900/95 select-none transition-shadow duration-500 will-change-transform ${
                    isActive
                      ? 'border-gold-500/75 shadow-[0_20px_50px_-10px_rgba(212,175,55,0.35)] ring-1 ring-gold-500/40 z-20 cursor-default'
                      : 'border-zinc-800/80 shadow-md hover:border-zinc-700/80 z-10 cursor-pointer'
                  }`}
                >
                  {/* Full Image Container */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      if (isActive) {
                        if (onOpenLightbox) onOpenLightbox(serviceGalleryItems, idx);
                      } else {
                        setCurrentIndex(idx);
                      }
                    }}
                    onPointerUp={(e) => {
                      if (!isDraggingRef.current && dragDistanceRef.current < 10) {
                        if (isActive && onOpenLightbox) {
                          onOpenLightbox(serviceGalleryItems, idx);
                        }
                      }
                    }}
                    className="relative aspect-[4/5] overflow-hidden bg-charcoal-950 cursor-pointer group/cardImg"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      draggable={false}
                      className={`w-full h-full object-cover object-center filter contrast-[1.05] brightness-[1.02] transition-transform duration-700 ease-out ${
                        isActive ? 'scale-105' : 'scale-100'
                      }`}
                    />

                    {/* Gradient Overlay only at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent pointer-events-none"></div>

                    {/* Specialty Number Badge */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/85 backdrop-blur-md border border-white/10 text-[11px] font-semibold text-gold-400 shadow-md z-10">
                      0{idx + 1} • Specialty
                    </span>

                    {/* Zoom / Lightbox Trigger Pill Button (Active Card only) */}
                    {isActive && (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onOpenLightbox) onOpenLightbox(serviceGalleryItems, idx);
                        }}
                        className="absolute bottom-3 right-3 z-30 px-3 py-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-gold-400/60 text-[11px] font-bold text-gold-300 flex items-center gap-1.5 shadow-[0_4px_15px_rgba(0,0,0,0.7)] active:scale-90 transition-transform cursor-pointer pointer-events-auto"
                      >
                        <Eye className="w-3.5 h-3.5 text-gold-400 animate-pulse" />
                        <span>Tap to Zoom</span>
                      </button>
                    )}
                  </div>

                  {/* Card Content */}
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className={`font-serif font-bold text-white mb-2 transition-colors duration-300 ${
                        isActive ? 'text-lg text-gold-200' : 'text-base text-zinc-300'
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                        {service.shortDesc}
                      </p>
                    </div>

                    <div className="pt-3.5 border-t border-zinc-800/80 flex items-center justify-between">
                      <Link
                        to={`/services/${service.slug}`}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 hover:text-gold-300 transition-colors"
                      >
                        <span>Explore Designs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenAppointmentModal(service.title);
                        }}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gold-500/15 text-gold-300 border border-gold-500/30 hover:bg-gold-500 hover:text-black transition-all cursor-pointer active:scale-95"
                      >
                        Inquire
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Progress Dots & Navigation Arrows */}
          <div className="flex items-center justify-between mt-3 px-2">
            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {services.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setCurrentIndex(dotIdx)}
                  className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                    currentIndex === dotIdx
                      ? 'w-7 bg-gold-400 shadow-sm shadow-gold-500/50'
                      : 'w-1.5 bg-zinc-700 hover:bg-zinc-500'
                  }`}
                  aria-label={`Go to specialty ${dotIdx + 1}`}
                />
              ))}
            </div>

            {/* Prev / Next Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700/80 text-zinc-300 flex items-center justify-center hover:text-white hover:border-gold-500/50 transition-colors cursor-pointer active:scale-95"
                aria-label="Previous Specialty"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-700/80 text-zinc-300 flex items-center justify-center hover:text-white hover:border-gold-500/50 transition-colors cursor-pointer active:scale-95"
                aria-label="Next Specialty"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP VIEW: High-Impact 4-Column Luxury Grid                 */}
        {/* ============================================================== */}
        <div className="hidden lg:grid lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={scaleUp}
              custom={idx % 4}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.3 } }}
              className="group glass-panel rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-gold-500/60 transition-all duration-300 flex flex-col shadow-lg hover:shadow-[0_20px_40px_-15px_rgba(212,175,55,0.25)]"
            >
              {/* Image Preview with Smooth Zoom */}
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  if (onOpenLightbox) onOpenLightbox(serviceGalleryItems, idx);
                }}
                className="relative aspect-[4/5] overflow-hidden bg-charcoal-950 cursor-pointer group/img"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out filter contrast-[1.05] brightness-[1.02]"
                />
                {/* Subtle dark bottom vignette only */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent pointer-events-none"></div>

                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-medium text-gold-400 shadow-md z-10">
                  Specialty
                </span>

                {/* Pop-up Quick View badge on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/img:opacity-100 transition-all duration-300 z-10">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onOpenLightbox) onOpenLightbox(serviceGalleryItems, idx);
                    }}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-black/85 backdrop-blur-md border border-gold-400/60 text-gold-300 text-xs font-semibold shadow-2xl scale-90 group-hover/img:scale-100 transition-all duration-300 hover:bg-gold-500 hover:text-black hover:border-gold-400 cursor-pointer active:scale-95 pointer-events-auto"
                  >
                    <Eye className="w-3.5 h-3.5 text-gold-400" />
                    <span>View Art Popup</span>
                  </button>
                </div>
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
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-gold-500/15 text-gold-300 border border-gold-500/30 hover:bg-gold-500 hover:text-black transition-all cursor-pointer"
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
