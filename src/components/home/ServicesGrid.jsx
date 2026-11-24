import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../../data/siteData';
import { fadeInUp, scaleUp } from '../../utils/animations';

export default function ServicesGrid({ onOpenAppointmentModal }) {
  return (
    <section className="py-20 sm:py-28 bg-charcoal-950 relative overflow-hidden scroll-mt-24 sm:scroll-mt-32" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeInUp}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Master Specialties
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Curated Tattoo Disciplines
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            From photorealistic memorial portraits and delicate single-needle script to sacred devotional iconography and full anatomical sleeves, explore our dedicated services.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_DATA.services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={scaleUp}
              custom={idx % 4}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group glass-panel rounded-2xl overflow-hidden border border-zinc-800/80 hover:border-gold-500/50 transition-colors duration-300 flex flex-col shadow-lg hover:shadow-2xl hover:shadow-gold-500/5"
            >
              {/* Image Preview with Smooth Zoom */}
              <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-900">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent"></div>
                
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/10 text-[11px] font-medium text-gold-400 shadow-md">
                  Specialty
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-serif font-bold text-white group-hover:text-gold-300 transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed mb-4 line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 hover:text-gold-300 transition-colors group/link"
                  >
                    <span>Explore Designs</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1.5 transition-transform duration-300" />
                  </Link>

                  <button
                    onClick={() => onOpenAppointmentModal(service.title)}
                    className="text-[11px] text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    Inquire
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
