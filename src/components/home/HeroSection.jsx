import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, Eye, Star, ShieldCheck, Award, MapPin, 
  Play, Pause, Volume2, VolumeX, Sparkles, Film, X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SITE_DATA } from '../../data/siteData';

export default function HeroSection({ onOpenAppointmentModal }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isReelModalOpen, setIsReelModalOpen] = useState(false);

  // Auto-play safely with graceful fallback
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        setIsPlaying(false);
      });
    }
  }, []);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-charcoal-950 pt-24 sm:pt-32 md:pt-36 pb-16 sm:pb-24">
      {/* =========================================================================
          CRYSTAL-CLEAR CINEMATIC HERO VIDEO BACKGROUND
          ========================================================================= */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Real HTML5 Video - Crisp, Bright & Sharp */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          preload="auto"
          onLoadedData={() => setIsVideoLoaded(true)}
          className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
            isVideoLoaded ? 'opacity-100' : 'opacity-80'
          }`}
        >
          <source src="/videos/hero-tattoo-reel-hd.mp4" type="video/mp4" />
          <source src="/videos/hero-tattoo-reel.mp4" type="video/mp4" />
        </video>

        {/* Clean, minimal top & bottom edge blend only */}
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/85 via-black/25 to-charcoal-950/90 pointer-events-none"></div>
      </div>

      {/* =========================================================================
          HERO CONTENT LAYER (100% FULLY TRANSPARENT - NO BOX)
          ========================================================================= */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center my-auto">
        
        {/* Fully transparent content wrapper with generous top clearance */}
        <div className="w-full flex flex-col items-center">
          
          {/* Top Trust & Location Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-charcoal-950/90 border border-gold-500/40 text-gold-400 text-xs sm:text-sm font-semibold tracking-wide mb-5 shadow-xl backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
            </span>
            <Award className="w-3.5 h-3.5 text-gold-400" />
            <span>Award-Winning Custom Studio Delhi</span>
            <span className="text-zinc-500 hidden sm:inline">•</span>
            <span className="text-zinc-200 hidden sm:inline flex items-center gap-1 font-medium">
              <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" /> 4.9★ (380+ Verified Reviews)
            </span>
          </motion.div>

          {/* Hero Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight text-white max-w-4xl mx-auto leading-[1.12] mb-5 drop-shadow-[0_4px_20px_rgba(0,0,0,0.95)]"
          >
            Your Story. <br className="hidden sm:inline" />
            Our Art. <br className="sm:hidden" />
            <span className="text-gold-gradient italic font-serif">Permanent Expression.</span>
          </motion.h1>

          {/* Supporting Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm sm:text-base md:text-lg text-zinc-100 max-w-2xl mx-auto leading-relaxed mb-8 font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
          >
            Welcome to <strong className="text-white font-semibold">Tattoo Villa</strong>, New Delhi's premier sanctuary for custom photorealism, micro-fine line, and devotional tattoo artistry. Led by master inker Harminder Singh in Central Market, Lajpat Nagar II.
          </motion.p>

          {/* Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto"
          >
            <button
              onClick={() => onOpenAppointmentModal()}
              className="w-full sm:w-auto py-3.5 px-8 rounded-xl bg-gold-metallic text-black font-extrabold text-sm uppercase tracking-wider shadow-2xl hover:shadow-gold-500/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Free Consultation
            </button>

            <Link
              to="/gallery"
              className="w-full sm:w-auto py-3.5 px-7 rounded-xl bg-charcoal-900/90 hover:bg-charcoal-900 text-white font-bold text-sm uppercase tracking-wider border border-zinc-600/80 active:scale-95 transition-all flex items-center justify-center gap-2 shadow-xl"
            >
              <Eye className="w-4 h-4 text-gold-400" />
              Explore Portfolio
            </Link>
          </motion.div>

          {/* Studio Film Action */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-5"
          >
            <button
              onClick={() => setIsReelModalOpen(true)}
              className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-200 hover:text-gold-400 transition-colors py-2 px-4 rounded-full bg-black/60 hover:bg-black/80 border border-white/20 backdrop-blur-md cursor-pointer group shadow-lg"
            >
              <span className="w-5 h-5 rounded-full bg-gold-500/30 text-gold-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </span>
              <span>Watch Studio Showreel (HD Video)</span>
            </button>
          </motion.div>
        </div>

        {/* Credibility Counter Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 pt-6 border-t border-white/10 max-w-4xl mx-auto w-full grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-charcoal-950/90 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0 shadow-lg">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white text-xs font-bold">100% Sterile</p>
              <p className="text-[11px] text-zinc-300">Single-use needles</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-charcoal-950/90 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0 shadow-lg">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white text-xs font-bold">Awarded Studio</p>
              <p className="text-[11px] text-zinc-300">National Tattoo Awards</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-charcoal-950/90 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0 shadow-lg">
              <Star className="w-5 h-5 fill-gold-400" />
            </div>
            <div>
              <p className="text-white text-xs font-bold">4.9★ Google</p>
              <p className="text-[11px] text-zinc-300">380+ Authentic reviews</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-charcoal-950/90 border border-gold-500/30 flex items-center justify-center text-gold-400 shrink-0 shadow-lg">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <p className="text-white text-xs font-bold">Lajpat Nagar II</p>
              <p className="text-[11px] text-zinc-300">Near Metro Station</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* =========================================================================
          HERO VIDEO AMBIENT CONTROLS (Discreet Lower Right HUD)
          ========================================================================= */}
      <div className="absolute bottom-5 right-5 z-20 hidden md:flex items-center gap-2 bg-charcoal-950/90 backdrop-blur-md p-1.5 rounded-xl border border-zinc-700 text-xs text-zinc-300 shadow-xl">
        <button
          onClick={togglePlay}
          className="p-2 rounded-lg hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
          title={isPlaying ? "Pause background video" : "Play background video"}
          aria-label={isPlaying ? "Pause background video" : "Play background video"}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
        </button>

        <button
          onClick={toggleMute}
          className="p-2 rounded-lg hover:bg-zinc-800 hover:text-white transition-colors cursor-pointer"
          title={isMuted ? "Unmute video audio" : "Mute audio"}
          aria-label={isMuted ? "Unmute video audio" : "Mute audio"}
        >
          {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-gold-400" />}
        </button>

        <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-mono pr-2 pl-1">
          {isPlaying ? 'Video Live' : 'Paused'}
        </span>
      </div>

      {/* =========================================================================
          FULL-SCREEN CINEMATIC SHOWREEL MODAL
          ========================================================================= */}
      <AnimatePresence>
        {isReelModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setIsReelModalOpen(false)}
          >
            <button
              onClick={() => setIsReelModalOpen(false)}
              className="absolute top-5 right-5 p-3 rounded-full bg-zinc-900 text-zinc-400 hover:text-white hover:bg-zinc-800 border border-zinc-700 transition-colors z-50 cursor-pointer"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full aspect-video rounded-2xl overflow-hidden border border-gold-500/40 shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src="/videos/hero-tattoo-reel-hd.mp4"
                controls
                autoPlay
                className="w-full h-full object-cover"
              ></video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
