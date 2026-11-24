import React from 'react';
import { Calendar, Clock, MapPin, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import AppointmentForm from '../AppointmentForm';
import { SITE_DATA } from '../../data/siteData';
import { fadeInLeft, fadeInRight } from '../../utils/animations';

export default function AppointmentSection() {
  const trustPoints = [
    {
      icon: CheckCircle2,
      title: "Free Digital Concept Previews",
      desc: "See how your tattoo looks contoured on your actual body before making any permanent decision."
    },
    {
      icon: Clock,
      title: "Fast-Track WhatsApp Confirmation",
      desc: "After submitting your request, our studio manager confirms your date and sends artist design ideas via WhatsApp."
    },
    {
      icon: MapPin,
      title: "Easily Accessible in South Delhi",
      desc: "Central Market, Lajpat Nagar II, New Delhi. 3 minutes walk from Lajpat Nagar Metro interchange station."
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-charcoal-900 border-t border-zinc-800/80 relative overflow-hidden scroll-mt-24 sm:scroll-mt-32" id="book-appointment">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Persuasive Booking Information with Gentle Slide In */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInLeft}
            className="lg:col-span-5 space-y-6"
          >
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider">
              <Calendar className="w-3.5 h-3.5" />
              Priority Booking
            </span>

            <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight leading-tight">
              Begin Your Custom Tattoo Journey
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Consult directly with master artists <strong className="text-white">Harminder Singh</strong> or <strong className="text-white">Jaspreet Singh</strong> at our Central Market studio. We offer free design consultations with zero obligation.
            </p>

            <div className="space-y-4 pt-4 border-t border-zinc-800">
              {trustPoints.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.15 + idx * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-gold-500/10 text-gold-400 flex items-center justify-center shrink-0 border border-gold-500/20 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{pt.title}</h4>
                      <p className="text-xs text-zinc-400">{pt.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Emergency / Walk-in note */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="p-4 rounded-xl bg-charcoal-950 border border-zinc-800 text-xs text-zinc-400 shadow-inner"
            >
              <span className="text-gold-400 font-bold block mb-1">Need an urgent slot or same-day walk-in?</span>
              Call our reception desk directly at{' '}
              <a href={`tel:${SITE_DATA.contact.delhi.phones[0].raw}`} className="text-white font-bold underline hover:text-gold-400 transition-colors">
                {SITE_DATA.contact.delhi.phones[0].display}
              </a>
            </motion.div>
          </motion.div>

          {/* Right: The High-Conversion Form with Slide from Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInRight}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-zinc-800 shadow-2xl relative">
              <div className="border-b border-zinc-800 pb-4 mb-6">
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                  Schedule Free Consultation
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Share your idea or upload references. Our master artists will evaluate sizing, skin flow, and estimated session duration.
                </p>
              </div>

              <AppointmentForm />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
