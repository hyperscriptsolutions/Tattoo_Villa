import React from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Navigation, Sparkles } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AppointmentForm from '../components/AppointmentForm';
import { SITE_DATA } from '../data/siteData';
import { trackPhoneCall, trackWhatsAppClick, trackEmailClick } from '../utils/analytics';

export default function ContactPage({ onOpenAppointmentModal }) {
  const delhi = SITE_DATA.contact.delhi;
  const melbourne = SITE_DATA.contact.melbourne;

  return (
    <div className="py-12 sm:py-20 bg-charcoal-950">
      <SEOHead
        title="Contact Us & Location | Tattoo Villa Studio New Delhi"
        description="Get in touch with Tattoo Villa Delhi. Address: K100 B, 2nd Floor, Central Market, Lajpat Nagar II, New Delhi 110024. Phone: +91 98181 90412. Open 7 days."
        canonicalUrl="/contact"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact Us", path: "/contact" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            Connect With Us
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-black text-white tracking-tight mb-4">
            Visit Our Delhi Studio
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Have questions about an upcoming tattoo, need advice on a cover-up, or want to schedule a 1-on-1 design consultation? We are here for you 7 days a week.
          </p>
        </div>

        {/* Form and Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-start">
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-panel p-7 sm:p-8 rounded-3xl border border-gold-500/30 space-y-6 shadow-xl">
              <div>
                <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-1">
                  Delhi Flagship Studio
                </span>
                <h2 className="text-2xl font-serif font-bold text-white">
                  Tattoo Villa Delhi
                </h2>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">
                    Studio Address
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
                    className="inline-flex items-center gap-1.5 text-xs text-gold-400 hover:underline font-semibold mt-2"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    Open in Google Maps / Directions
                  </a>
                </div>
              </div>

              {/* Phone Contacts */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">
                    Phone Numbers
                  </h4>
                  <div className="space-y-1">
                    {delhi.phones.map((phone) => (
                      <div key={phone.raw} className="flex items-center gap-2">
                        <a
                          href={`tel:${phone.raw}`}
                          onClick={() => trackPhoneCall(phone.raw, 'contact_page')}
                          className="text-sm font-bold text-white hover:text-gold-400 transition-colors"
                        >
                          {phone.display}
                        </a>
                        {phone.isWhatsApp && (
                          <span className="text-[10px] text-emerald-400 font-bold px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30">
                            WhatsApp
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">
                    Direct Email
                  </h4>
                  <a
                    href={`mailto:${delhi.email}`}
                    onClick={() => trackEmailClick(delhi.email)}
                    className="text-sm text-zinc-200 hover:text-gold-400 transition-colors"
                  >
                    {delhi.email}
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-wider text-zinc-400 font-bold mb-1">
                    Opening Hours
                  </h4>
                  <p className="text-sm text-zinc-200 font-medium">{delhi.businessHours.openDays}</p>
                  <p className="text-xs text-zinc-400">{delhi.businessHours.weekdays}</p>
                </div>
              </div>

              {/* Direct WhatsApp Button */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${delhi.whatsappNumber}?text=Hi%20Tattoo%20Villa%2C%20I%20would%20like%20to%20inquire%20about%20a%20tattoo.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackWhatsAppClick(delhi.whatsappNumber, 'contact_page')}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider transition-all shadow-lg"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat Directly on WhatsApp
                </a>
              </div>
            </div>

            {/* Australia Location Box (Clearly Demarcated) */}
            <div className="glass-panel p-6 rounded-2xl border border-zinc-800 text-xs text-zinc-400">
              <span className="text-gold-400 font-bold block mb-1 uppercase tracking-wider">
                {melbourne.title}
              </span>
              <p className="text-zinc-300">{melbourne.address}</p>
              <p className="text-zinc-400 mt-1">Phone: {melbourne.phone}</p>
              <p className="text-[11px] text-zinc-500 mt-1 italic">{melbourne.note}</p>
            </div>
          </div>

          {/* Right: Online Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-7 sm:p-10 rounded-3xl border border-zinc-800 shadow-2xl">
              <div className="border-b border-zinc-800 pb-4 mb-6">
                <h3 className="text-2xl font-serif font-bold text-white">
                  Send Direct Consultation Inquiry
                </h3>
                <p className="text-xs text-zinc-400 mt-1">
                  Fill in your preferred date and design details. Our senior artist will review your request within 2 hours.
                </p>
              </div>

              <AppointmentForm initialCategory="Custom Tattoos & Cover-ups" />
            </div>
          </div>
        </div>

        {/* Embedded Interactive Map */}
        <div className="glass-panel p-4 rounded-3xl border border-zinc-800 shadow-2xl h-[450px] overflow-hidden">
          <iframe
            title="Tattoo Villa Delhi Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.743283294719!2d77.24108877549887!3d28.57747807569476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce32204555555%3A0x6b815ef98a96e95!2sTattoo%20Villa!5e0!3m2!1sen!2sin!4v1740000000000!5m2!1sen!2sin"
            className="w-full h-full rounded-2xl border-0 filter invert-[0.9] hue-rotate-180 contrast-125"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
