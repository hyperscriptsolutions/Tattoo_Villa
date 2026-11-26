import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';
import { trackWhatsAppClick } from '../utils/analytics';

export default function StickyWhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [showCallout, setShowCallout] = useState(false);
  const [calloutDismissed, setCalloutDismissed] = useState(false);

  const whatsappNumber = SITE_DATA.contact.delhi.whatsappNumber;
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Tattoo%20Villa%2C%20I%20have%20a%20tattoo%20idea%20and%20would%20love%20to%20discuss%20design%2C%20placement%2C%20and%20get%20a%20price%20estimate.`;

  // Show button after user scrolls slightly (80px), and trigger attractive prompt
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial scroll in case page refreshed mid-page
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Display engaging callout bubble after 2 seconds on the page
  useEffect(() => {
    if (calloutDismissed) return;

    const timer = setTimeout(() => {
      setShowCallout(true);
    }, 2200);

    // Auto-collapse callout bubble after 9 seconds if not interacted with
    const autoCollapseTimer = setTimeout(() => {
      setShowCallout(false);
    }, 11000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoCollapseTimer);
    };
  }, [calloutDismissed]);

  const handleClick = (placement = 'floating_whatsapp_icon') => {
    trackWhatsAppClick(whatsappNumber, placement);
  };

  const handleDismissCallout = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setShowCallout(false);
    setCalloutDismissed(true);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <aside
          aria-label="Contact on WhatsApp"
          className="fixed z-40 bottom-20 md:bottom-7 right-4 md:right-7 flex flex-col items-end pointer-events-auto"
        >
          {/* Engaging Floating Callout Bubble */}
          <AnimatePresence>
            {showCallout && (
              <motion.div
                initial={{ opacity: 0, y: 15, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mb-2.5 max-w-[270px] sm:max-w-[290px] p-3.5 rounded-2xl bg-zinc-900/95 backdrop-blur-md border border-emerald-500/40 text-white shadow-2xl relative group cursor-pointer"
                onClick={() => {
                  handleClick('floating_whatsapp_bubble');
                  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
                }}
              >
                {/* Dismiss X button */}
                <button
                  onClick={handleDismissCallout}
                  className="absolute -top-1.5 -left-1.5 w-5 h-5 rounded-full bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-700 flex items-center justify-center transition-colors"
                  aria-label="Dismiss message"
                >
                  <X className="w-3 h-3" />
                </button>

                {/* Online Status Bar */}
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                  </span>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400">
                    Online Now • Tattoo Villa
                  </span>
                </div>

                {/* Engaging Message Text */}
                <p className="text-xs text-zinc-200 leading-snug font-medium mb-2">
                  Have a tattoo idea or photo? Chat directly with master artists for instant design & price!
                </p>

                {/* CTA Link inside bubble */}
                <div className="flex items-center justify-between pt-1.5 border-t border-zinc-800/80 text-[11px] font-bold text-emerald-400">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-gold-400" />
                    <span>Free Consultation</span>
                  </span>
                  <span className="underline underline-offset-2">Chat Now ➔</span>
                </div>

                {/* Speech Bubble Arrow pointing to the WhatsApp button */}
                <div className="absolute -bottom-1.5 right-6 w-3 h-3 bg-zinc-900 border-r border-b border-emerald-500/40 rotate-45"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Glowing Floating WhatsApp Button with Micro-Wiggle */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              rotate: [0, -6, 6, -4, 4, 0]
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              scale: { duration: 0.35, ease: 'easeOut' },
              rotate: {
                delay: 2.5,
                duration: 1.2,
                repeat: Infinity,
                repeatDelay: 6.5,
                ease: 'easeInOut'
              }
            }}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.94 }}
            className="relative"
          >
            {/* Pulsing Emerald Radar Ring */}
            <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping opacity-75 pointer-events-none"></span>

            {/* Glowing Aura Ring */}
            <span className="absolute -inset-2 rounded-full bg-gradient-to-r from-emerald-500/30 to-green-500/30 blur-md pointer-events-none"></span>

            {/* WhatsApp Link Anchor */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick('floating_whatsapp_icon')}
              className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 via-green-500 to-emerald-400 flex items-center justify-center text-white shadow-[0_4px_25px_rgba(16,185,129,0.55)] hover:shadow-[0_6px_35px_rgba(16,185,129,0.85)] border-2 border-white/30 transition-all group"
              aria-label="Chat directly on WhatsApp with Tattoo Villa"
            >
              {/* Authentic Crisp WhatsApp SVG Icon */}
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-md group-hover:scale-110 transition-transform duration-300"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>

              {/* Notification Badge "1" */}
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 text-white font-black text-[10px] flex items-center justify-center border-2 border-black shadow-md animate-bounce">
                1
              </span>
            </a>
          </motion.div>
        </aside>
      )}
    </AnimatePresence>
  );
}
