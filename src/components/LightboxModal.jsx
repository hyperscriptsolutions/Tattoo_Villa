import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LightboxModal({ isOpen, images, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  const current = (images && images[currentIndex]) || (images && images[0]) || null;

  return (
    <AnimatePresence>
      {isOpen && current && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          {/* Close Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={onClose}
            className="absolute top-4 right-4 z-50 p-2.5 rounded-full bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-700/60 shadow-lg cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </motion.button>

          {/* Counter */}
          <div className="absolute top-5 left-6 text-xs uppercase tracking-widest text-zinc-400 font-semibold px-3 py-1 rounded-full bg-zinc-900/80 border border-zinc-800">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Previous Button */}
          {images.length > 1 && (
            <motion.button
              whileHover={{ scale: 1.1, x: -2 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-3 sm:left-6 z-50 p-3 rounded-full bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-700/60 shadow-xl cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <motion.button
              whileHover={{ scale: 1.1, x: 2 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-3 sm:right-6 z-50 p-3 rounded-full bg-zinc-900/90 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors border border-zinc-700/60 shadow-xl cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>
          )}

          {/* Image Container with Smooth Scale & Fade */}
          <div
            className="relative max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait">
              {current.videoUrl ? (
                <motion.div
                  key={current.videoUrl}
                  initial={{ scale: 0.94, opacity: 0, y: 10 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.94, opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative max-h-[75vh] w-auto max-w-full rounded-xl overflow-hidden shadow-2xl border border-zinc-800/80 bg-black flex items-center justify-center"
                >
                  <video
                    key={current.videoUrl}
                    poster={current.src}
                    controls
                    autoPlay
                    muted
                    playsInline
                    loop
                    preload="auto"
                    className="max-h-[75vh] w-auto max-w-full object-contain"
                  >
                    <source src={current.videoUrl} type="video/mp4" />
                    {current.cloudinaryVideoUrl && (
                      <source src={current.cloudinaryVideoUrl} type="video/mp4" />
                    )}
                    Your browser does not support the video tag.
                  </video>
                </motion.div>
              ) : (
                <motion.img
                  key={current.src || current}
                  src={current.src || current}
                  alt={current.title || current.caption || "Tattoo Villa Artwork"}
                  initial={{ scale: 0.94, opacity: 0, y: 10 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={{ scale: 0.94, opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="max-h-[75vh] w-auto max-w-full object-contain rounded-xl shadow-2xl border border-zinc-800/80"
                />
              )}
            </AnimatePresence>

            {(current.title || current.caption || current.category) && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-4 text-center px-4"
              >
                <h4 className="text-white font-serif text-lg sm:text-xl font-medium tracking-wide">
                  {current.title || current.caption}
                </h4>
                <div className="flex items-center justify-center gap-3 mt-1.5 text-xs text-zinc-400">
                  {current.category && (
                    <span className="px-2.5 py-0.5 rounded-full bg-gold-500/15 text-gold-400 border border-gold-500/30 text-[11px] font-semibold uppercase tracking-wider">
                      {current.category}
                    </span>
                  )}
                  {current.artist && <span>Master Artist: {current.artist}</span>}
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
