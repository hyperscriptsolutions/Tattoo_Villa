import React from 'react';
import { ShieldCheck, Sparkles, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../../data/siteData';
import { fadeInUp, scaleUp } from '../../utils/animations';

export default function StudioExperience({ onOpenLightbox }) {
  const images = SITE_DATA.studioImages;

  return (
    <section className="py-20 sm:py-28 bg-charcoal-950 border-t border-zinc-800/80 overflow-hidden" id="studio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInUp}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              Inside the Studio
            </span>
            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight">
              A Sanctuary of Clinical Artistry
            </h2>
            <p className="text-sm sm:text-base text-zinc-400 mt-2">
              Located on the 2nd floor of Central Market, Lajpat Nagar II, our studio blends a luxury dark lounge aesthetic with hospital-grade sterilization protocols.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-xs text-zinc-400"
          >
            <MapPin className="w-4 h-4 text-gold-400 shrink-0 animate-bounce" />
            <span>Opposite Domino's Pizza, Central Market, New Delhi</span>
          </motion.div>
        </div>

        {/* Real Studio Images Grid with Smooth Zoom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={scaleUp}
              custom={idx}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onClick={() => onOpenLightbox(images, idx)}
              className="group glass-panel rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-gold-500/40 transition-colors duration-300 cursor-pointer shadow-lg hover:shadow-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden bg-charcoal-900">
                <img
                  src={img.src}
                  alt={img.caption}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out filter contrast-105"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-zinc-300 font-medium leading-snug group-hover:text-gold-300 transition-colors">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hygiene Highlights Callout */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-panel p-6 sm:p-8 rounded-2xl border border-gold-500/30 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-xl"
        >
          <div className="flex items-start gap-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">Medical Autoclave</h4>
              <p className="text-xs text-zinc-400">Pressurized steam sterilization for all non-disposable precision grips and instruments.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">Single-Use Sealed Needles</h4>
              <p className="text-xs text-zinc-400">Blister packs opened directly in front of you and discarded in certified bio-waste bins.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5 group">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/20 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1 group-hover:text-gold-300 transition-colors">Virucidal Barrier Prep</h4>
              <p className="text-xs text-zinc-400">Work surfaces, armrests, and clip cords are wrapped in single-use medical barrier film.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
