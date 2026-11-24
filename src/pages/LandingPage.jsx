import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Phone, MessageSquare, Star, ShieldCheck, CheckCircle2, Award, MapPin, Sparkles, Calendar, ChevronRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AppointmentForm from '../components/AppointmentForm';
import { LANDING_PAGES_DATA } from '../data/landingPagesData';
import { SITE_DATA } from '../data/siteData';
import { trackPhoneCall, trackWhatsAppClick } from '../utils/analytics';

export default function LandingPage({ onOpenAppointmentModal, onOpenLightbox }) {
  const { campaignSlug } = useParams();
  const data = LANDING_PAGES_DATA[campaignSlug];

  if (!data) {
    return <Navigate to="/" replace />;
  }

  const primaryPhone = SITE_DATA.contact.delhi.phones[0];

  return (
    <div className="bg-charcoal-950 text-zinc-100 min-h-screen">
      <SEOHead
        title={`${data.heroHeadline} | Tattoo Villa Delhi`}
        description={`${data.subheadline} Located in Central Market, Lajpat Nagar II. 4.9★ Rated on Google. Book your free consultation slot.`}
        canonicalUrl={`/landing/${data.slug}`}
        faqs={data.faqs}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: data.targetKeyword, path: `/landing/${data.slug}` }
        ]}
      />

      {/* Conversion-Focused Minimal Top Bar */}
      <header className="bg-charcoal-900 border-b border-zinc-800 py-3 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group py-1" aria-label="Tattoo Villa Homepage">
            <img
              src="/images/branding/tattoo-villa-logo.png"
              alt="Tattoo Villa Delhi"
              className="h-10 sm:h-12 w-auto object-contain filter drop-shadow-md"
            />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-lg tracking-wider text-white leading-none">
                TATTOO VILLA
              </span>
              <span className="text-[10px] tracking-widest uppercase text-gold-400 font-semibold mt-1">
                Central Market, Lajpat Nagar II
              </span>
            </div>
          </Link>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href={`tel:${primaryPhone.raw}`}
              onClick={() => trackPhoneCall(primaryPhone.raw, `landing_header_${data.slug}`)}
              className="flex items-center gap-1.5 py-2 px-3 sm:px-4 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-bold border border-zinc-700 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400" />
              <span className="hidden sm:inline">Call:</span> {primaryPhone.display}
            </a>

            <a
              href={`https://wa.me/${SITE_DATA.contact.delhi.whatsappNumber}?text=Hi%20Tattoo%20Villa%2C%20I%20am%20inquiring%20about%20${encodeURIComponent(data.targetKeyword)}.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(SITE_DATA.contact.delhi.whatsappNumber, `landing_header_${data.slug}`)}
              className="flex items-center gap-1.5 py-2 px-3 sm:px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* High-Impact Hero Section */}
      <section className="relative py-10 sm:py-16 overflow-hidden bg-radial-gradient-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-gold-400" />
            <span>{data.badge}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Content */}
            <div className="lg:col-span-6 space-y-5">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-black text-white tracking-tight leading-[1.12]">
                {data.heroHeadline}
              </h1>

              <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
                {data.subheadline}
              </p>

              <div className="p-4 rounded-2xl bg-charcoal-900 border border-zinc-800 text-xs sm:text-sm text-zinc-300 space-y-2">
                <p className="text-gold-400 font-bold flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  {data.callout}
                </p>
                <p className="text-zinc-400 text-xs">
                  We don't do assembly-line tattoos. You speak directly with Harminder Singh & Jaspreet Singh to refine your custom stencil.
                </p>
              </div>

              {/* Showcase Image */}
              <div className="rounded-2xl overflow-hidden border border-zinc-800 relative aspect-[16/10] bg-charcoal-900 group">
                <img
                  src={data.heroImage}
                  alt={data.targetKeyword}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 text-xs text-zinc-200">
                  <span className="font-bold text-white block">Tattoo Villa Delhi Real Client Work</span>
                  <span className="text-[11px] text-zinc-400">100% Sterile Medical Standard • Central Market Studio</span>
                </div>
              </div>

              {/* Quick Trust Highlights */}
              <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
                <div className="glass-panel p-3 rounded-xl border border-zinc-800">
                  <ShieldCheck className="w-5 h-5 text-gold-400 mx-auto mb-1" />
                  <span className="font-bold text-white block">100% Sterile</span>
                  <span className="text-[10px] text-zinc-400">Disposable needles</span>
                </div>
                <div className="glass-panel p-3 rounded-xl border border-zinc-800">
                  <Award className="w-5 h-5 text-gold-400 mx-auto mb-1" />
                  <span className="font-bold text-white block">15+ Years</span>
                  <span className="text-[10px] text-zinc-400">Master inking</span>
                </div>
                <div className="glass-panel p-3 rounded-xl border border-zinc-800">
                  <Star className="w-5 h-5 fill-gold-400 text-gold-400 mx-auto mb-1" />
                  <span className="font-bold text-white block">4.9★ Google</span>
                  <span className="text-[10px] text-zinc-400">1,776+ reviews</span>
                </div>
              </div>
            </div>

            {/* Right: Direct High-Conversion Form */}
            <div className="lg:col-span-6">
              <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-gold-500/40 shadow-2xl relative">
                <div className="border-b border-zinc-800 pb-3 mb-5">
                  <span className="text-[10px] uppercase tracking-widest text-gold-400 font-bold block">
                    Special Offer • Free Studio Consultation
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                    Book Your Appointment Slot
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1">
                    Zero spam. We respect your privacy and will confirm your slot within 2 hours.
                  </p>
                </div>

                <AppointmentForm initialCategory="Custom Tattoos" compact={true} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for this Specific Campaign */}
      <section className="py-16 bg-charcoal-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-1">
              The Tattoo Villa Advantage
            </span>
            <h2 className="text-3xl font-serif font-bold text-white">
              {data.whyChooseHeadline}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.benefits.map((b, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-zinc-800 hover:border-gold-500/30 transition-all">
                <div className="w-9 h-9 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20 flex items-center justify-center mb-3">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-serif font-bold text-white mb-1.5">{b.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Relevant Proof Showcase Gallery */}
      <section className="py-16 bg-charcoal-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-1">
                Authentic Portfolio
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                Recent Work Done in Delhi Studio
              </h2>
            </div>
            <Link to="/gallery" className="text-xs font-bold text-gold-400 hover:underline">
              View All 50+ Portfolio Works →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.showcaseImages.map((img, idx) => (
              <div
                key={idx}
                onClick={() => onOpenLightbox(data.showcaseImages, idx)}
                className="group relative rounded-2xl overflow-hidden bg-charcoal-900 border border-zinc-800 hover:border-gold-500/40 transition-all cursor-pointer shadow-lg"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-charcoal-950 border-t border-zinc-800">
                  <p className="text-xs font-medium text-zinc-200">{img.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Testimonials */}
      <section className="py-16 bg-charcoal-900 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-1">
              Verified Social Proof
            </span>
            <h2 className="text-3xl font-serif font-bold text-white">
              Real Reviews from Real Delhi Clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SITE_DATA.reviews.slice(0, 3).map((rev) => (
              <div key={rev.id} className="glass-panel p-6 rounded-2xl border border-zinc-800">
                <div className="flex text-amber-400 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4 italic">
                  "{rev.comment}"
                </p>
                <div className="border-t border-zinc-800 pt-3">
                  <p className="text-xs font-bold text-white">{rev.name}</p>
                  <p className="text-[11px] text-zinc-500">Google Verified Review • {rev.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign FAQs */}
      <section className="py-16 bg-charcoal-950 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-1">
              Got Questions?
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {data.faqs.map((faq, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-zinc-800">
                <h4 className="text-base font-serif font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Persistent Bottom Callout */}
      <section className="py-12 bg-charcoal-900 border-t border-zinc-800 text-center">
        <div className="max-w-xl mx-auto px-4">
          <h3 className="text-2xl font-serif font-bold text-white mb-2">
            Ready to Speak with Our Senior Inkers?
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mb-6">
            Central Market, Lajpat Nagar II, New Delhi. Open Tuesday to Sunday from 11:30 AM to 9:30 PM (Monday Closed).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={`tel:${primaryPhone.raw}`}
              onClick={() => trackPhoneCall(primaryPhone.raw, `landing_bottom_${data.slug}`)}
              className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-gold-metallic text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call Studio Directly ({primaryPhone.display})
            </a>
            <a
              href={`https://wa.me/${SITE_DATA.contact.delhi.whatsappNumber}?text=Hi%20Tattoo%20Villa%2C%20I%20am%20interested%20in%20${encodeURIComponent(data.targetKeyword)}.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(SITE_DATA.contact.delhi.whatsappNumber, `landing_bottom_${data.slug}`)}
              className="w-full sm:w-auto py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
