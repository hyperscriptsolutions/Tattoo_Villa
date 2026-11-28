import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle2, ArrowRight, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../../data/siteData';
import { fadeInUp, scaleUp } from '../../utils/animations';

export default function ArtistsSection({ onOpenAppointmentModal }) {
  return (
    <section className="py-20 sm:py-28 bg-charcoal-900 border-t border-zinc-800/80 overflow-hidden scroll-mt-24 sm:scroll-mt-32" id="artists">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            The Master Inkers
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Meet Our Resident Artists
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            At Tattoo Villa, your skin is only entrusted to seasoned master artists with over 25 years of combined experience across portrait realism, sacred geometry, and fine-line discipline.
          </p>
        </motion.div>

        {/* Artist Profiles Grid: Side-by-side with 100% full uncropped square photos & smooth reveals */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_DATA.artists.filter(artist => artist.role !== 'Founder').map((artist, idx) => (
            <motion.div
              key={artist.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={scaleUp}
              custom={idx}
              whileHover={{ y: -8, transition: { duration: 0.35 } }}
              className="glass-panel rounded-3xl overflow-hidden border border-zinc-800/80 hover:border-gold-500/40 transition-colors duration-300 flex flex-col group shadow-2xl"
            >
              {/* Photo: Exact 1:1 Aspect Ratio Matching Original 768x768 Dimensions with Smooth Zoom */}
              <div className="w-full relative aspect-square overflow-hidden bg-charcoal-950">
                <img
                  src={artist.image}
                  alt={`${artist.name} - ${artist.role} at Tattoo Villa New Delhi`}
                  loading="lazy"
                  className={`w-full h-full object-cover ${artist.id === 'harmeet-singh' ? 'object-top' : 'object-center'} group-hover:scale-108 transition-transform duration-700 ease-out filter contrast-105`}
                />
                
                {/* Subtle gradient vignette at bottom of image for contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-transparent to-transparent pointer-events-none"></div>

                {/* Experience Badge with subtle glow */}
                {artist.experience && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 + idx * 0.15 }}
                    className="absolute top-4 left-4 z-10"
                  >
                    <span className="px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-gold-500/40 text-xs font-bold text-gold-400 shadow-xl flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-gold-400" />
                      <span>{artist.experience}</span>
                    </span>
                  </motion.div>
                )}

                {/* Artist Name & Role Overlay at bottom edge of photo */}
                <div className="absolute bottom-4 left-6 right-6 z-10 pointer-events-none">
                  <span className="text-[11px] uppercase tracking-widest text-gold-400 font-bold block mb-1 drop-shadow-md">
                    {artist.role}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif font-black text-white drop-shadow-lg">
                    {artist.name}
                  </h3>
                </div>
              </div>

              {/* Bio & Details Below Photo */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-6">
                    {artist.bio}
                  </p>

                  <div className="mb-6">
                    <h5 className="text-[11px] uppercase tracking-wider text-gold-400/90 font-bold mb-3 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                      <span>Master Specializations:</span>
                    </h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                      {artist.specialties.slice(0, 4).map((spec, sIdx) => (
                        <li key={sIdx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <blockquote className="border-l-2 border-gold-500/60 pl-3.5 py-1.5 italic text-xs text-zinc-400 bg-charcoal-950/40 rounded-r-lg">
                    "{artist.quote}"
                  </blockquote>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between gap-4">
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => onOpenAppointmentModal(`Consultation with ${artist.name}`)}
                    className="py-3 px-5 rounded-xl bg-gold-metallic text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center gap-2 shadow-lg group/btn cursor-pointer"
                  >
                    <span>Book Appointment</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                  </motion.button>

                  <Link
                    to="/artists"
                    className="text-xs text-zinc-400 hover:text-gold-400 transition-colors font-medium"
                  >
                    View Full Profile →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
