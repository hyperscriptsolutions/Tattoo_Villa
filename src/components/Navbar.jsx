import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MessageSquare, Calendar, Menu, X, ChevronDown, Award, Star } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';
import { trackPhoneCall, trackWhatsAppClick } from '../utils/analytics';

function InstagramIcon({ className = "w-3.5 h-3.5" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

export default function Navbar({ onOpenAppointmentModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavLinkClick = (e, path) => {
    if (path.includes('#')) {
      const hash = path.split('#')[1];
      if (location.pathname === '/' || location.pathname === '') {
        e.preventDefault();
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          window.history.pushState(null, '', `#${hash}`);
        }
      }
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    {
      name: 'Services',
      path: '/services',
      hasDropdown: true,
      dropdownItems: SITE_DATA.services.map(s => ({
        name: s.title,
        path: `/services/${s.slug}`
      }))
    },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Artists', path: '/artists' },
    { name: 'Studio', path: '/studio' },
    { name: 'Awards', path: '/awards' },
    { name: 'Training', path: '/training' },
    { name: 'Reviews', path: '/#reviews' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <>
      {/* Top micro banner for trust & direct call */}
      <div className="bg-charcoal-900 border-b border-zinc-800/80 text-zinc-300 text-xs py-2 px-4 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-gold-400 font-medium">
              <Star className="w-3.5 h-3.5 fill-gold-400 text-gold-400" />
              4.9★ Rated on Google (1,776+ Verified Reviews)
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-zinc-400">
              Central Market, Lajpat Nagar II, New Delhi (Opp. Domino's)
            </span>
          </div>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${SITE_DATA.contact.delhi.phones[0].raw}`}
              onClick={() => trackPhoneCall(SITE_DATA.contact.delhi.phones[0].raw, 'top_nav_bar')}
              className="flex items-center gap-1.5 text-zinc-300 hover:text-gold-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span>Call Studio: {SITE_DATA.contact.delhi.phones[0].display}</span>
            </a>

            <a
              href={`https://wa.me/${SITE_DATA.contact.delhi.whatsappNumber}?text=Hi%20Tattoo%20Villa%2C%20I%20would%20like%20to%20inquire%20about%20a%20tattoo.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(SITE_DATA.contact.delhi.whatsappNumber, 'top_nav_bar')}
              className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href="https://www.instagram.com/tattoo_villa/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-zinc-300 hover:text-pink-400 transition-colors group"
              title="Follow Tattoo Villa on Instagram @tattoo_villa"
            >
              <InstagramIcon className="w-3.5 h-3.5 text-pink-400 group-hover:scale-110 transition-transform" />
              <span className="font-medium">tattoo_villa</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
            ? 'bg-charcoal-950/95 backdrop-blur-md border-b border-zinc-800 shadow-xl py-2.5'
            : 'bg-charcoal-950/95 backdrop-blur-md border-b border-zinc-800/60 py-3.5'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group py-1" aria-label="Tattoo Villa Homepage">
            <img
              src="/images/branding/tattoo-villa-logo.png"
              alt="Tattoo Villa - Master Tattoo Studio New Delhi"
              className="h-10 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-md"
            />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-lg tracking-wider text-white group-hover:text-gold-400 transition-colors leading-none">
                TATTOO VILLA
              </span>
              <span className="text-[10px] tracking-widest uppercase text-gold-400 font-semibold mt-1">
                New Delhi • Est. 2010
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${location.pathname.startsWith('/services')
                          ? 'text-gold-400 font-semibold'
                          : 'text-zinc-300 hover:text-white hover:bg-zinc-800/40'
                        }`}
                    >
                      {link.name}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform group-hover:rotate-180" />
                    </button>

                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 w-64 pt-2 hidden group-hover:block transition-all">
                      <div className="bg-charcoal-900 border border-zinc-700/80 rounded-xl p-2 shadow-2xl backdrop-blur-xl">
                        <div className="px-3 py-1.5 text-[10px] uppercase tracking-wider text-gold-400 font-bold border-b border-zinc-800 mb-1">
                          Tattoo Categories
                        </div>
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className="block px-3 py-2 rounded-lg text-xs text-zinc-300 hover:text-gold-300 hover:bg-zinc-800/80 transition-colors"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={(e) => handleNavLinkClick(e, link.path)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${isActive
                      ? 'text-gold-400 font-semibold'
                      : 'text-zinc-300 hover:text-white hover:bg-zinc-800/40'
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenAppointmentModal()}
              className="py-2.5 px-5 rounded-xl bg-gold-metallic text-black font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-gold-500/20 hover:brightness-110 active:scale-95 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </div>

          {/* Mobile Menu & Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden">
            {/* Mobile Instagram Action */}
            <a
              href="https://www.instagram.com/tattoo_villa/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl bg-charcoal-900 border border-zinc-800 hover:border-pink-500/50 text-pink-400 hover:text-pink-300 transition-all flex items-center justify-center shadow-md active:scale-95 group"
              aria-label="Follow Tattoo Villa on Instagram @tattoo_villa"
              title="Instagram @tattoo_villa"
            >
              <InstagramIcon className="w-5 h-5 text-pink-400 group-hover:scale-110 transition-transform" />
            </a>

            <button
              onClick={() => onOpenAppointmentModal()}
              className="py-2 px-3 rounded-lg bg-gold-metallic text-black font-bold text-xs uppercase tracking-wider shadow-md flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-charcoal-900 text-zinc-300 hover:text-white border border-zinc-800 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer with Smooth Viewport-Bounded Scrolling */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-charcoal-950/98 backdrop-blur-xl border-b border-zinc-800 px-4 pt-3 pb-36 space-y-3 max-h-[calc(100dvh-4rem)] max-h-[calc(100vh-4rem)] overflow-y-auto overscroll-contain shadow-2xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                if (link.hasDropdown) {
                  return (
                    <div key={link.name} className="space-y-1">
                      <div className="px-3 py-2 text-xs uppercase tracking-wider font-bold text-gold-400">
                        {link.name}
                      </div>
                      <div className="pl-3 space-y-1 border-l border-zinc-800 ml-3">
                        {link.dropdownItems.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-3 py-1.5 text-sm text-zinc-300 hover:text-gold-400"
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={(e) => {
                      setIsMobileMenuOpen(false);
                      handleNavLinkClick(e, link.path);
                    }}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-medium ${location.pathname === link.path
                        ? 'bg-zinc-800/80 text-gold-400 font-semibold'
                        : 'text-zinc-300 hover:text-white'
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </div>

            {/* Mobile Contact Quick Actions inside drawer */}
            <div className="pt-4 border-t border-zinc-800 space-y-2">
              <a
                href={`tel:${SITE_DATA.contact.delhi.phones[0].raw}`}
                onClick={() => trackPhoneCall(SITE_DATA.contact.delhi.phones[0].raw, 'mobile_menu')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-zinc-800 text-white text-xs font-semibold"
              >
                <Phone className="w-4 h-4 text-gold-400" />
                Call Studio: {SITE_DATA.contact.delhi.phones[0].display}
              </a>

              <a
                href={`https://wa.me/${SITE_DATA.contact.delhi.whatsappNumber}?text=Hi%20Tattoo%20Villa%2C%20I%20would%20like%20to%20inquire%20about%20a%20tattoo.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(SITE_DATA.contact.delhi.whatsappNumber, 'mobile_menu')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white text-xs font-semibold"
              >
                <MessageSquare className="w-4 h-4" />
                Chat on WhatsApp
              </a>

              <a
                href="https://www.instagram.com/tattoo_villa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-amber-900/40 border border-pink-500/30 text-white text-xs font-semibold hover:border-pink-500/60 transition-colors"
              >
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                Instagram: @tattoo_villa
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
