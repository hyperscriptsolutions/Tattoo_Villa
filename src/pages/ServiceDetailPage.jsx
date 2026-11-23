import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Sparkles, CheckCircle2, ShieldCheck, Calendar, ArrowRight, Eye, Phone, MessageSquare } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AppointmentForm from '../components/AppointmentForm';
import { SITE_DATA } from '../data/siteData';
import { trackPhoneCall, trackWhatsAppClick } from '../utils/analytics';

export default function ServiceDetailPage({ onOpenAppointmentModal, onOpenLightbox }) {
  const { categorySlug } = useParams();

  // Find service
  const service = SITE_DATA.services.find(
    s => s.slug === categorySlug || s.id === categorySlug
  );

  if (!service) {
    return <Navigate to="/#services" replace />;
  }

  // Filter gallery items for this service
  const relatedGallery = SITE_DATA.gallery.filter(item => {
    const cat = item.category.toLowerCase();
    const sTitle = service.title.toLowerCase();
    return sTitle.includes(cat) || cat.includes(service.id.split('-')[0]);
  });

  const matchingGallery = relatedGallery.length > 0 ? relatedGallery : SITE_DATA.gallery.slice(0, 4);

  return (
    <div className="py-12 sm:py-20 bg-charcoal-950">
      <SEOHead
        title={`${service.title} in Delhi | Custom Artistry at Tattoo Villa`}
        description={`${service.shortDesc} Inked by master artists Harminder & Jaspreet Singh in Central Market, Lajpat Nagar II, New Delhi. Free consultation.`}
        canonicalUrl={`/services/${service.slug}`}
        faqs={service.faqs}
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/#services" },
          { name: service.title, path: `/services/${service.slug}` }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb nav */}
        <div className="flex items-center gap-2 text-xs text-zinc-400 mb-8">
          <Link to="/" className="hover:text-gold-400">Home</Link>
          <span>/</span>
          <Link to="/#services" className="hover:text-gold-400">Services</Link>
          <span>/</span>
          <span className="text-gold-400 font-medium">{service.title}</span>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-20">
          <div className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Specialist Tattoo Discipline
            </span>

            <h1 className="text-4xl sm:text-6xl font-serif font-black text-white tracking-tight leading-tight">
              {service.title} in Delhi
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed font-normal">
              {service.shortDesc}
            </p>

            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              {service.fullDesc}
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {service.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onOpenAppointmentModal(service.title)}
                className="py-4 px-8 rounded-xl bg-gold-metallic text-black font-extrabold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book {service.title} Consultation</span>
              </button>

              <a
                href={`https://wa.me/${SITE_DATA.contact.delhi.whatsappNumber}?text=Hi%20Tattoo%20Villa%2C%20I%20am%20interested%20in%20${encodeURIComponent(service.title)}.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackWhatsAppClick(SITE_DATA.contact.delhi.whatsappNumber, `service_${service.slug}`)}
                className="py-4 px-6 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp Artist</span>
              </a>
            </div>
          </div>

          {/* Hero Feature Image */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative aspect-[4/5] bg-charcoal-900 group">
              <img
                src={service.image}
                alt={`${service.title} by Tattoo Villa Delhi`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-gold-500/40 text-[11px] font-bold text-gold-400">
                  Custom Artwork
                </span>
                <p className="text-white font-serif text-lg font-bold mt-2">
                  100% Bespoke Anatomical Inking
                </p>
                <p className="text-xs text-zinc-300">Central Market Studio, Lajpat Nagar II</p>
              </div>
            </div>
          </div>
        </div>

        {/* Category Specific Portfolio Showcase */}
        <div className="mb-20">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-1">
                Recent Masterworks
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white">
                {service.title} Showcase
              </h2>
            </div>

            <Link
              to="/gallery"
              className="text-xs font-bold text-gold-400 hover:underline flex items-center gap-1.5 self-start sm:self-auto"
            >
              <span>Explore All Gallery Items</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {matchingGallery.map((item, idx) => (
              <div
                key={item.id}
                onClick={() => onOpenLightbox(matchingGallery, idx)}
                className="group relative rounded-2xl overflow-hidden bg-charcoal-900 border border-zinc-800 hover:border-gold-500/40 transition-all cursor-pointer shadow-lg"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 bg-charcoal-950 border-t border-zinc-800">
                  <p className="text-xs font-bold text-white truncate">{item.title}</p>
                  <p className="text-[11px] text-zinc-400 mt-0.5">Artist: {item.artist}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* FAQs for Service */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="mb-20 bg-charcoal-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-1">
                Helpful Advice
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Frequently Asked Questions about {service.title}
              </h3>
            </div>

            <div className="space-y-6">
              {service.faqs.map((faq, fIdx) => (
                <div key={fIdx} className="border-b border-zinc-800/80 pb-6 last:border-b-0 last:pb-0">
                  <h4 className="text-base font-serif font-bold text-white mb-2">
                    {faq.q}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Booking Consultation Card */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-gold-500/30 max-w-3xl mx-auto shadow-2xl">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-1">
              Direct Artist Booking
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Schedule Your {service.title} Consultation
            </h3>
            <p className="text-xs text-zinc-400 mt-1 max-w-md mx-auto">
              Meet our senior artists in Central Market, Lajpat Nagar II to design your custom piece.
            </p>
          </div>

          <AppointmentForm initialCategory={service.title} compact={true} />
        </div>
      </div>
    </div>
  );
}
