import React, { useEffect } from 'react';
import { X, Sparkles, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AppointmentForm from './AppointmentForm';
import CourseApplicationForm from './CourseApplicationForm';

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

  const isCourseApplication = 
    typeof initialCategory === 'string' && (
      initialCategory.toLowerCase().includes('course') || 
      initialCategory.toLowerCase().includes('training') || 
      initialCategory.toLowerCase().includes('academy') ||
      initialCategory.toLowerCase().includes('institute')
    );

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-4 sm:p-6 md:p-8"
        onClick={onClose}
      >
        <div className="min-h-full flex flex-col items-center justify-start pt-8 pb-12 sm:pt-12 sm:pb-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-2xl bg-charcoal-950 border border-gold-500/40 rounded-2xl p-6 sm:p-8 shadow-2xl my-auto text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2 rounded-full bg-zinc-900/90 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-700/80 cursor-pointer shadow-lg z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6 pt-1 sm:pt-2 pr-8 sm:pr-0">
              {isCourseApplication ? (
                <>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-2">
                    <GraduationCap className="w-3.5 h-3.5" />
                    Academy Admission • Limited Batch (4 Students)
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                    Apply for Tattoo Training Course
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1 max-w-md mx-auto">
                    Submit your application for our certified hands-on courses under master artists Harminder & Jaspreet Singh in Central Market, Lajpat Nagar II.
                  </p>
                </>
              ) : (
                <>
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
                </>
              )}
            </div>

            {/* Form */}
            {isCourseApplication ? (
              <CourseApplicationForm 
                initialCourse={initialCategory} 
                onSuccessCallback={() => {}}
              />
            ) : (
              <AppointmentForm 
                initialCategory={initialCategory} 
                onSuccessCallback={() => {}}
              />
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
