import React from 'react';
import { ShieldCheck, Palette, Award, Users, CheckCircle, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInUp, scaleUp } from '../../utils/animations';

export default function WhyChooseUs({ onOpenAppointmentModal }) {
  const points = [
    {
      icon: Palette,
      title: "100% Original Custom Art",
      desc: "Every design is created specifically for your anatomy and personal narrative. No generic internet copies or repeated templates."
    },
    {
      icon: ShieldCheck,
      title: "Hospital-Grade Autoclave Sterility",
      desc: "All needles are factory-sealed single-use cartridges opened before you. Workstations undergo surgical-grade disinfection between sessions."
    },
    {
      icon: Award,
      title: "15+ Years Master Experience",
      desc: "Headed by award-winning artists Harminder Singh and Jaspreet Singh, ensuring micro-precision needle depth and zero ink blowouts."
    },
    {
      icon: Users,
      title: "Private, Ergonomic Suites",
      desc: "Inking is an intimate experience. Relax in private climate-controlled rooms with hydraulic memory-foam beds designed for maximum comfort."
    },
    {
      icon: Sparkles,
      title: "Certified Non-Toxic Vegan Inks",
      desc: "We exclusively import European & FDA compliant heavy-metal-free pigments that heal with vibrant longevity and zero skin reactivity."
    },
    {
      icon: CheckCircle,
      title: "Free In-Depth Consultation",
      desc: "Transparent upfront pricing with zero hidden fees. We review your concept, size, and skin flow thoroughly before you commit."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-charcoal-950 border-t border-zinc-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            The Tattoo Villa Standard
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Why Delhi Chooses Tattoo Villa
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Discover what sets our studio apart: absolute artistic dedication, world-class medical hygiene, and an unwavering commitment to your personal comfort.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={scaleUp}
                custom={idx % 3}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="glass-panel p-7 sm:p-8 rounded-2xl border border-zinc-800/80 hover:border-gold-500/40 transition-colors duration-300 group shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-gold-500 group-hover:text-black transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2 group-hover:text-gold-300 transition-colors">
                  {pt.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                  {pt.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
