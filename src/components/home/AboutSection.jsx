import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeInLeft, fadeInRight, fadeInUp, clipPathReveal } from '../../utils/animations';

export default function AboutSection({ onOpenAppointmentModal }) {
  const checklist = [
    {
      title: "Personalized 1-on-1 Design Consultations:",
      desc: "You collaborate directly with master artists before ink touches skin."
    },
    {
      title: "Uncompromising Hygiene Standards:",
      desc: "Autoclave sterilization, factory-sealed single-use needles, and sterile field protocol."
    },
    {
      title: "Permanent Relationship & Free Aftercare:",
      desc: "Comprehensive healing supervision and lifetime touch-up assurances."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-charcoal-950 relative overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Collage of Authentic Images with Clip-Path Reveal */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInLeft}
            className="relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary Image: Harminder Singh with Smooth Zoom & Clip Reveal */}
              <motion.div
                variants={clipPathReveal}
                className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative z-10 aspect-square bg-charcoal-900 group"
              >
                <img
                  src="/images/artists/harminder-singh.jpg"
                  alt="Founder Harminder Singh at Tattoo Villa Delhi"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
                
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30 text-xs font-semibold uppercase tracking-wider backdrop-blur-sm">
                    Founder & Master Inker
                  </span>
                  <h4 className="text-white font-serif text-xl sm:text-2xl font-bold mt-2">
                    Harminder Singh
                  </h4>
                  <p className="text-xs text-zinc-300">15+ Years Crafting Living Art in New Delhi</p>
                </div>
              </motion.div>

              {/* Secondary Floating Card: Studio Shot with Gentle Parallax Hover */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.25 }}
                whileHover={{ y: -6, transition: { duration: 0.3 } }}
                className="hidden sm:block absolute -bottom-8 -right-8 w-60 rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl z-20 glass-panel p-2 group cursor-default"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src="/images/studio/IMG_9200-1024x768.jpg"
                    alt="Tattoo Villa Private Studio Suite"
                    className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-2 text-left">
                  <p className="text-white text-xs font-bold">Private Suite Inking</p>
                  <p className="text-[11px] text-zinc-400">Hospital-grade clean environment</p>
                </div>
              </motion.div>

              {/* Decorative Gold Accent ring */}
              <div className="absolute -top-6 -left-6 w-32 h-32 border border-gold-500/20 rounded-full -z-0 pointer-events-none animate-pulse"></div>
            </div>
          </motion.div>

          {/* Right: Authentic Story & Philosophy with Progressive Reveals */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInRight}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              The Tattoo Villa Journey
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">
              Art That Resonates for a Lifetime.
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              At <strong className="text-white font-semibold">Tattoo Villa</strong>, our journey began over 15 years ago when founder Harminder Singh turned his lifelong passion for fine arts and human anatomy into a world-class tattooing sanctuary in New Delhi.
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              We reject the factory mindset of mass-produced tattoos. To us, every client brings a distinct chapter of their life — a triumph, a memorial, a personal symbol of courage, or spiritual devotion. Our mission is to translate those intimate emotions into permanent, museum-quality body art that heals cleanly and holds its crisp contrast over decades.
            </p>

            {/* Checklist with staggered entrance */}
            <div className="space-y-3 pt-2">
              {checklist.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-zinc-300">
                    <strong className="text-white">{item.title}</strong> {item.desc}
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => onOpenAppointmentModal()}
                className="py-3.5 px-7 rounded-xl bg-gold-metallic text-black font-extrabold text-xs uppercase tracking-wider shadow-lg hover:shadow-gold-500/20 hover:brightness-110 transition-all flex items-center gap-2 group cursor-pointer"
              >
                <span>Book Studio Visit</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
              </motion.button>

              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Link
                  to="/about"
                  className="inline-block py-3.5 px-6 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 hover:text-white font-bold text-xs uppercase tracking-wider border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  Read Full Story
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
