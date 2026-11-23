import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Star, Globe, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';
import { trackPhoneCall, trackEmailClick } from '../utils/analytics';

export default function Footer({ onOpenAppointmentModal }) {
  const delhi = SITE_DATA.contact.delhi;
  const melbourne = SITE_DATA.contact.melbourne;

  return (
    <footer className="bg-charcoal-950 border-t border-zinc-800 text-zinc-400 text-sm pt-16 pb-24 md:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-zinc-800/80">
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <Link to="/" className="inline-block group mb-3" aria-label="Tattoo Villa Homepage">
              <img
                src="/images/branding/tattoo-villa-logo.jpg"
                alt="Tattoo Villa Delhi Logo"
                className="h-14 sm:h-16 w-auto object-contain mix-blend-screen transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Tattoo Villa is an award-winning custom tattoo studio in South Delhi. Guided by founders Harminder Singh & Jaspreet Singh, we blend master realism, intricate fine-line craftsmanship, and strict hospital-level autoclave sterilization.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs text-gold-400 font-medium">
              <Star className="w-4 h-4 fill-gold-400 text-gold-400" />
              <span>4.9 / 5.0 Rating based on 380+ Google Reviews</span>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-gold-400 transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 flex items-center justify-center text-zinc-300 hover:text-gold-400 transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
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

          {/* Column 3: Quick Links & Google Ads Landing Hubs */}
          <div>
            <h4 className="text-white font-serif text-base font-semibold tracking-wide mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              Explore Studio
            </h4>
            <ul className="space-y-2 text-xs mb-6">
              <li><Link to="/about" className="hover:text-gold-400 transition-colors">About Our Journey & Founders</Link></li>
              <li><Link to="/artists" className="hover:text-gold-400 transition-colors">Meet Harminder & Jaspreet Singh</Link></li>
              <li><Link to="/gallery" className="hover:text-gold-400 transition-colors">Full Portfolio Masonry Gallery</Link></li>
              <li><Link to="/studio" className="hover:text-gold-400 transition-colors">Studio Hygiene & Autoclave Tour</Link></li>
              <li><Link to="/awards" className="hover:text-gold-400 transition-colors">National & Global Studio Awards</Link></li>
              <li><Link to="/contact" className="hover:text-gold-400 transition-colors">Contact & Metro Directions</Link></li>
            </ul>

            <h5 className="text-[11px] uppercase tracking-wider text-zinc-500 font-semibold mb-2">
              Google Ads Campaign Hubs
            </h5>
            <ul className="space-y-1.5 text-[11px]">
              <li><Link to="/landing/tattoo-artist-in-delhi" className="hover:text-gold-300">Tattoo Artist in Delhi</Link></li>
              <li><Link to="/landing/tattoo-studio-in-delhi" className="hover:text-gold-300">Tattoo Studio in Delhi</Link></li>
              <li><Link to="/landing/custom-tattoo-designs-delhi" className="hover:text-gold-300">Custom Tattoo Designs Delhi</Link></li>
              <li><Link to="/landing/portrait-tattoo-artist-delhi" className="hover:text-gold-300">Portrait Tattoo Artist Delhi</Link></li>
              <li><Link to="/landing/minimal-fine-line-tattoos-delhi" className="hover:text-gold-300">Minimal & Fine-Line Delhi</Link></li>
              <li><Link to="/landing/religious-tattoos-delhi" className="hover:text-gold-300">Religious Tattoos Delhi</Link></li>
            </ul>
          </div>

          {/* Column 4: Delhi Studio Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-white font-serif text-base font-semibold tracking-wide mb-4 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
              Delhi Studio Location
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-zinc-200 font-medium">{delhi.address}</p>
                  <p className="text-[11px] text-zinc-500 mt-0.5">Near Lajpat Nagar Metro Station (Violet & Pink lines)</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  {delhi.phones.map((phone) => (
                    <a
                      key={phone.raw}
                      href={`tel:${phone.raw}`}
                      onClick={() => trackPhoneCall(phone.raw, 'footer')}
                      className="block text-zinc-200 hover:text-gold-400 transition-colors font-medium"
                    >
                      {phone.display} {phone.isWhatsApp && <span className="text-[10px] text-emerald-400 ml-1">(WhatsApp)</span>}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-400 shrink-0" />
                <a
                  href={`mailto:${delhi.email}`}
                  onClick={() => trackEmailClick(delhi.email)}
                  className="text-zinc-200 hover:text-gold-400 transition-colors"
                >
                  {delhi.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-zinc-300 font-medium">{delhi.businessHours.openDays}</p>
                  <p className="text-[11px] text-zinc-500">{delhi.businessHours.weekdays}</p>
                </div>
              </div>
            </div>

            {/* International Branch Notice (Separate) */}
            <div className="p-3 rounded-xl bg-charcoal-900 border border-zinc-800 text-[11px] space-y-1">
              <span className="text-zinc-400 font-medium block">{melbourne.title}</span>
              <p className="text-zinc-500">{melbourne.address}</p>
              <a href={`tel:${melbourne.phoneRaw}`} className="text-gold-400 hover:underline block">
                {melbourne.phone}
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
            <a href="https://tattooartistindelhi.com/sitemap.xml" className="hover:text-zinc-300 transition-colors">XML Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
