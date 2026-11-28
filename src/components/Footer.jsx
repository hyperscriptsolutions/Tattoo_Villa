import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Star, Globe, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';
import { trackPhoneCall, trackEmailClick } from '../utils/analytics';

export default function Footer({ onOpenAppointmentModal }) {
  const delhi = SITE_DATA.contact.delhi;
  const melbourne = SITE_DATA.contact.melbourne;

  return (
    <footer className="bg-charcoal-950 border-t border-zinc-800 text-zinc-400 text-sm pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid: 3 Clean Balanced Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pb-12 border-b border-zinc-800/80">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group mb-4" aria-label="Tattoo Villa Homepage">
              <img
                src="/images/branding/tattoo-villa-logo.png"
                alt="Tattoo Villa Delhi Logo"
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-lg"
              />
              <div className="flex flex-col">
                <span className="font-vintage text-xl sm:text-2xl tracking-wider text-white group-hover:text-gold-400 transition-colors leading-tight">
                  TATTOO VILLA
                </span>
                <span className="text-[10px] tracking-widest uppercase text-gold-400 font-semibold mt-1">
                  New Delhi • Est. 2010
                </span>
              </div>
            </Link>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Tattoo Villa is an award-winning custom tattoo studio in South Delhi. Led by master tattoo artists Harminder Singh & Jaspreet Singh, we blend master realism, intricate fine-line craftsmanship, and strict hospital-level autoclave sterilization.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-gold-400 font-medium">
              <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
              <span>4.9 / 5.0 Rating based on 1,776+ Google Reviews</span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com/tattoo_villa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-gold-400 transition-colors"
                aria-label="Instagram @tattoo_villa"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href={delhi.mapDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-gold-400 transition-colors"
                aria-label="Google Maps Listing"
              >
                <MapPin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Tattoo Services */}
          <div>
            <h4 className="text-white font-serif text-base font-semibold tracking-wide mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              Tattoo Categories
            </h4>
            <ul className="space-y-2 text-xs">
              {SITE_DATA.services.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.slug}`}
                    className="hover:text-gold-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-zinc-600 group-hover:text-gold-500 transition-colors">›</span>
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/training"
                  className="text-gold-400 hover:underline flex items-center gap-1 font-medium pt-1"
                >
                  <span>Tattoo Training Institute Delhi</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h4 className="text-white font-serif text-base font-semibold tracking-wide mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              Explore Studio
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">About Our Journey & Founders</Link></li>
              <li><Link to="/artists" className="hover:text-gold-400 transition-colors">Meet Harminder & Jaspreet Singh</Link></li>
              <li><Link to="/gallery" className="hover:text-gold-400 transition-colors">Full Portfolio Masonry Gallery</Link></li>
              <li><Link to="/studio" className="hover:text-gold-400 transition-colors">Studio Hygiene & Autoclave Tour</Link></li>
              <li><Link to="/awards" className="hover:text-gold-400 transition-colors">National & Global Studio Awards</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400 transition-colors">Contact & Metro Directions</Link></li>
            </ul>
          </div>
        </div>

        {/* Global Locations Bar: Delhi, Australia, Email (Matching Original Website) */}
        <div className="py-8 my-8 border-y border-zinc-800/80 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* Delhi Location */}
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-charcoal-900/70 border border-zinc-800/80 hover:border-gold-500/30 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-gold-400 shrink-0 shadow-inner">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base">🇮🇳</span>
                <h5 className="text-xs uppercase tracking-widest text-white font-extrabold">
                  Delhi Location
                </h5>
              </div>
              <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                {delhi.address}
              </p>
              <div className="mt-2 space-y-0.5 text-xs">
                <a href="tel:+919818190412" className="block text-gold-400 hover:underline font-bold">+91 98181 90412</a>
                <a href="tel:+919311511336" className="block text-zinc-400 hover:text-white">+91 93115 11336</a>
              </div>
            </div>
          </div>

          {/* Australia Location (Circled in User Request) */}
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-charcoal-900/70 border border-gold-500/40 hover:border-gold-500/70 transition-colors shadow-xl shadow-gold-500/5">
            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-gold-500/40 flex items-center justify-center text-gold-400 shrink-0 shadow-inner">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base">🇦🇺</span>
                <h5 className="text-xs uppercase tracking-widest text-gold-400 font-extrabold">
                  Australia Location
                </h5>
              </div>
              <p className="text-xs text-zinc-200 leading-relaxed font-medium">
                13 Ornament Ave Tarneit VIC 3029, Melbourne Australia
              </p>
              <div className="mt-2 text-xs space-y-1">
                <a href="tel:+61478311912" className="text-gold-400 hover:underline font-bold block">
                  +61-478311912
                </a>
                <a 
                  href={melbourne.whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline text-[11px] font-semibold flex items-center gap-1"
                >
                  WhatsApp Australia Branch →
                </a>
              </div>
            </div>
          </div>

          {/* Email Us */}
          <div className="flex items-start gap-4 p-5 rounded-2xl bg-charcoal-900/70 border border-zinc-800/80 hover:border-gold-500/30 transition-colors shadow-lg">
            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-700/80 flex items-center justify-center text-gold-400 shrink-0 shadow-inner">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-widest text-white font-extrabold mb-1">
                Email - Us
              </h5>
              <p className="text-xs text-zinc-400 mb-2 leading-relaxed">
                Direct artist correspondence, custom stencils & global inquiries:
              </p>
              <a href="mailto:tattoovilla1@gmail.com" className="text-xs text-gold-400 hover:underline font-bold block">
                tattoovilla1@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 gap-4">
          <p>© {new Date().getFullYear()} Tattoo Villa. All rights reserved. Registered tattoo studio in Delhi.</p>

          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-zinc-300 transition-colors">Privacy Policy</Link>
            <Link to="/terms-and-conditions" className="hover:text-zinc-300 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
