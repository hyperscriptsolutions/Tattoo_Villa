import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation } from 'lucide-react';
import { motion } from 'framer-motion';
import { SITE_DATA } from '../../data/siteData';
import { trackPhoneCall, trackWhatsAppClick, trackEmailClick } from '../../utils/analytics';
import { fadeInLeft, fadeInRight, fadeInUp } from '../../utils/animations';

export default function ContactSection() {
  const delhi = SITE_DATA.contact.delhi;
  const melbourne = SITE_DATA.contact.melbourne;

  return (
    <section className="py-20 sm:py-28 bg-charcoal-950 border-t border-zinc-800/80 overflow-hidden scroll-mt-24 sm:scroll-mt-32" id="contact">
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
            <MapPin className="w-3.5 h-3.5" />
            Studio Location & Connect
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-white tracking-tight mb-4">
            Visit Our Delhi Sanctuary
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
            Conveniently situated in Central Market, Lajpat Nagar II. Easy metro connectivity from across Delhi, Gurgaon, and Noida.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Contact Details Card with Slide Left */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInLeft}
            className="lg:col-span-5 space-y-6"
          >
            {/* Delhi Studio Box */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold-500/30 space-y-6 shadow-xl">
              <div className="border-b border-zinc-800 pb-4">
                <span className="text-[11px] uppercase tracking-widest text-gold-400 font-bold">
                  Primary Studio • New Delhi
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mt-1">
                  Tattoo Villa Delhi
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">
                    Address & Landmark
                  </h4>
                  <p className="text-sm text-zinc-200 font-medium leading-relaxed">
                    {delhi.address}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    {delhi.landmark}
                  </p>
                  <a
                    href={delhi.mapDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:underline font-semibold mt-2 group"
                  >
                    <Navigation className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                    Open in Google Maps / Get Directions
                  </a>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">
                    Telephone Contacts
                  </h4>
                  <div className="space-y-1">
                    {delhi.phones.map((p, idx) => (
                      <a
                        key={idx}
                        href={`tel:${p.raw}`}
                        onClick={() => trackPhoneCall(p.raw, 'contact_section')}
                        className="block text-sm text-zinc-200 hover:text-gold-400 font-semibold transition-colors"
                      >
                        {p.display} {idx === 0 && <span className="text-[10px] text-zinc-400 font-normal">(Primary Studio)</span>}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* WhatsApp Fast Track */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-400 border border-green-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">
                    Instant WhatsApp Consultation
                  </h4>
                  <a
                    href={delhi.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackWhatsAppClick('contact_section')}
                    className="text-sm text-green-400 hover:underline font-semibold flex items-center gap-1"
                  >
                    Chat with Master Artist on WhatsApp →
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">
                    Email Correspondence
                  </h4>
                  <a
                    href={`mailto:${delhi.email}`}
                    onClick={() => trackEmailClick(delhi.email, 'contact_section')}
                    className="text-sm text-zinc-300 hover:text-gold-400 transition-colors"
                  >
                    {delhi.email}
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">
                    Studio Working Hours
                  </h4>
                  <p className="text-xs text-zinc-300 font-medium">
                    {delhi.hours}
                  </p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">
                    Tuesday – Sunday (Monday Closed) • Appointments recommended
                  </p>
                </div>
              </div>
            </div>

            {/* Australia Location Box */}
            <div className="glass-panel p-6 sm:p-7 rounded-3xl border border-gold-500/30 space-y-4 shadow-xl">
              <div className="border-b border-zinc-800 pb-3 flex items-center justify-between">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-gold-400 font-bold block mb-0.5">
                    International Branch • Victoria
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xl">🇦🇺</span>
                    <h3 className="text-xl font-serif font-bold text-white">
                      Australia Location
                    </h3>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-[10px] font-bold text-gold-400 uppercase tracking-wider">
                  Melbourne
                </span>
              </div>

              {/* Australia Address */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-0.5">
                    Studio Address
                  </h4>
                  <p className="text-sm text-zinc-200 font-medium leading-relaxed">
                    13 Ornament Ave Tarneit VIC 3029, Melbourne Australia
                  </p>
                  <a
                    href={melbourne.mapDirectLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:underline font-semibold mt-1 group"
                  >
                    <Navigation className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform" />
                    Open in Google Maps / Directions
                  </a>
                </div>
              </div>

              {/* Australia Phone */}
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-0.5">
                    Phone Number
                  </h4>
                  <a
                    href={`tel:${melbourne.phoneRaw}`}
                    className="text-sm text-zinc-200 hover:text-gold-400 font-semibold transition-colors block"
                  >
                    {melbourne.phone}
                  </a>
                </div>
              </div>

              {/* Direct WhatsApp for Australia */}
              <div className="pt-1">
                <a
                  href={melbourne.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-400 font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat With Australia Branch on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Embedded Google Maps & Interactive Direction Card with Slide Right */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeInRight}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-panel p-2 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl relative aspect-[16/11] sm:aspect-[16/10]">
              <iframe
                title="Tattoo Villa Delhi Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.7431181673894!2d77.2407521!3d28.5774786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b29c990fe5%3A0xe54d6fa70f865f37!2sTattoo%20Villa!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full rounded-2xl"
              ></iframe>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={delhi.mapDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl bg-gold-metallic text-black font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:brightness-110 transition-all shadow-lg"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Google Maps Route</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={delhi.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick('contact_section_route')}
                className="p-4 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs uppercase tracking-wider border border-zinc-700 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-green-400" />
                <span>Ask Reception for Landmarks</span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
