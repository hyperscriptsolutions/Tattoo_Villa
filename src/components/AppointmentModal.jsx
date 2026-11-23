import React, { useEffect } from 'react';
import { X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AppointmentForm from './AppointmentForm';

export default function AppointmentModal({ isOpen, onClose, initialCategory = "Custom Tattoos" }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-charcoal-950 border border-gold-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl my-8"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-800"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Header */}
          <div className="text-center mb-6 pr-8 sm:pr-0">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              Priority Booking Slot
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Schedule Your Tattoo Consultation
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-md mx-auto">
              Discuss your custom design directly with master artists Harminder & Jaspreet Singh at our Central Market Lajpat Nagar II studio.
            </p>
          </div>

          {/* Form */}
          <AppointmentForm 
            initialCategory={initialCategory} 
            onSuccessCallback={() => {}}
          />
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
