import React from 'react';
import { Award, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../../data/siteData';
import AnimatedCounter from '../common/AnimatedCounter';
import { fadeInUp, scaleUp } from '../../utils/animations';

export default function TrustSection() {
  const stats = [
    { value: SITE_DATA.brand.experienceYears, label: "Years Experience", subtext: "Serving Delhi NCR since 2010" },
    { value: "4.9★", label: "Google Rating", subtext: "Across 1,776+ verified reviews" },
    { value: SITE_DATA.brand.tattoosDone, label: "Custom Inked", subtext: "Masterpieces created" },
    { value: "100%", label: "Sterile Clinical", subtext: "Single-use needles & autoclave" }
  ];

  const pillars = [
    {
      icon: Sparkles,
      title: "100% Bespoke Artwork",
      desc: "We believe your skin deserves original art. Our senior artists sketch every piece from scratch to fit your exact muscle curves and personal story."
    },
    {
      icon: ShieldCheck,
      title: "Hospital-Grade Sterilization",
      desc: "Your health is sacred. We operate with sealed single-use medical needle cartridges, medical autoclave units, and certified hypoallergenic European inks."
    },
    {
      icon: Award,
      title: "Awarded Master Artists",
      desc: "Harminder Singh & Jaspreet Singh are recognized across the national tattoo circuit for groundbreaking realism, fine-line detailing, and sleeve mastery."
    }
  ];

  return (
    <section className="py-16 bg-charcoal-900 border-y border-zinc-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Statistics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mb-14">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={scaleUp}
              custom={idx}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-panel p-6 rounded-2xl text-center relative overflow-hidden group hover:border-gold-500/40 transition-colors shadow-lg"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-gold-gradient mb-2 tracking-tight">
                <AnimatedCounter value={stat.value} duration={1.6} />
              </div>
              <div className="text-sm font-bold text-white uppercase tracking-wider mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-zinc-400">
                {stat.subtext}
              </div>
              <motion.div
                initial={{ width: '3rem' }}
                whileHover={{ width: '6rem' }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gold-500/40 group-hover:bg-gold-500 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Studio Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeInUp}
                custom={idx}
                whileHover={{ y: -4, transition: { duration: 0.3 } }}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800 hover:border-gold-500/40 transition-colors flex items-start gap-4 shadow-lg group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-bold text-white mb-1.5 group-hover:text-gold-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
