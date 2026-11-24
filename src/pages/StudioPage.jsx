import React from 'react';
import { ShieldCheck, MapPin, Eye, Sparkles, CheckCircle2, Calendar } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SITE_DATA } from '../data/siteData';

export default function StudioPage({ onOpenAppointmentModal, onOpenLightbox }) {
  const images = SITE_DATA.studioImages;

  return (
    <div className="py-12 sm:py-20 bg-charcoal-950">
      <SEOHead
        title="Our Studio & Hygiene | Clinical Sterilization in South Delhi"
        description="Tour Tattoo Villa's state-of-the-art studio in Central Market, Lajpat Nagar II, New Delhi. Discover our hospital-grade autoclave sterilization, private suites, and luxury comfort."
        canonicalUrl="/studio"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Our Studio", path: "/studio" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Lajpat Nagar II Sanctuary
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-black text-white tracking-tight mb-4">
            The Studio Experience
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            We believe the physical environment where you receive permanent ink should inspire confidence, serenity, and absolute clinical peace of mind.
          </p>
        </div>

        {/* Studio Photo Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {images.map((img, idx) => (
            <div
              key={idx}
              onClick={() => onOpenLightbox(images, idx)}
              className="glass-panel rounded-3xl overflow-hidden border border-zinc-800 hover:border-gold-500/40 transition-all cursor-pointer group shadow-2xl"
            >
              <div className="aspect-[16/10] overflow-hidden bg-charcoal-900">
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white group-hover:text-gold-300 transition-colors">
                    {img.caption}
                  </h3>
                  <Eye className="w-4 h-4 text-gold-400 shrink-0" />
                </div>
                <p className="text-xs text-zinc-400 mt-2">
                  Shot on location at Tattoo Villa, Central Market, Lajpat Nagar II, New Delhi.
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical Sterilization Manifesto */}
        <div className="bg-charcoal-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 mb-20">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400 block mb-2">
              Our Safety Protocol
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Hospital-Grade Hygiene Standards
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Every procedure strictly adheres to international bloodborne pathogen and cross-contamination guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SITE_DATA.hygienePractices.map((practice, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-zinc-800/80">
                <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white mb-2">{practice.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{practice.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Location & Metro Access */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel p-8 sm:p-12 rounded-3xl border border-gold-500/30">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block">
              Easy Connectivity
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Visiting from NCR, Gurgaon, or Noida?
            </h3>
            <p className="text-sm text-zinc-300 leading-relaxed">
              Our studio is positioned centrally at <strong className="text-white">K100 B, 2nd Floor, Central Market, Lajpat Nagar II</strong>, directly opposite Domino's Pizza. We are only a 3-minute stroll from the Lajpat Nagar Metro Interchange (servicing both Violet and Pink Lines).
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-400 pt-2">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-gold-400" /> Dedicated Valet & Public Parking Nearby</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-gold-400" /> Wheelchair & Elevator Accessible Building</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-gold-400" /> Tue – Sun: 11:30 AM – 9:30 PM (Mon Closed)</span>
            </div>
          </div>

          <div className="lg:col-span-4 flex justify-end">
            <button
              onClick={() => onOpenAppointmentModal('Studio Visit')}
              className="w-full sm:w-auto py-4 px-8 rounded-xl bg-gold-metallic text-black font-extrabold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all cursor-pointer"
            >
              Book Studio Walk-in Slot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
