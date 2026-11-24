import React from 'react';
import { Star, ExternalLink, Sparkles, MessageSquare, CheckCircle2, Award, ShieldCheck } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import ReviewsSection from '../components/home/ReviewsSection';
import AppointmentForm from '../components/AppointmentForm';
import { SITE_DATA } from '../data/siteData';

export default function ReviewsPage({ onOpenAppointmentModal }) {
  const reviews = SITE_DATA.reviews;

  return (
    <div className="bg-charcoal-950 text-zinc-100 min-h-screen">
      <SEOHead
        title="1,776+ Verified Client Reviews | Tattoo Villa Delhi (4.9★ on Google)"
        description="Read authentic Google reviews and client stories for Tattoo Villa Delhi. 4.9★ rating based on 1,776+ verified reviews in Central Market, Lajpat Nagar II."
        canonicalUrl="/reviews"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Client Reviews", path: "/reviews" }
        ]}
      />

      {/* Hero Header */}
      <div className="relative py-16 sm:py-24 border-b border-zinc-800 bg-gradient-to-b from-charcoal-900 to-charcoal-950 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Star className="w-4 h-4 fill-gold-400" />
            1,776+ Verified Google Reviews
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-black text-white tracking-tight uppercase">
            Client Reviews & Stories
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 mt-4 max-w-2xl mx-auto leading-relaxed font-light">
            Read authentic feedback from collectors, first-timers, and international clients who trusted Tattoo Villa with their permanent body art.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={SITE_DATA.contact.delhi.mapDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-charcoal-900 hover:bg-charcoal-800 border border-gold-500/40 text-gold-400 font-bold text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg transition-all"
            >
              <span>View On Google Business Profile</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenAppointmentModal()}
              className="px-6 py-3.5 rounded-xl bg-gold-metallic text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 shadow-lg transition-all cursor-pointer"
            >
              Book Your Free Consultation
            </button>
          </div>
        </div>
      </div>

      {/* Embed the rich ReviewsSection */}
      <div className="py-8">
        <ReviewsSection />
      </div>

      {/* Bottom Consultation Form Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="glass-panel p-8 sm:p-12 rounded-3xl border border-zinc-800 max-w-3xl mx-auto text-center shadow-2xl">
          <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-2">
            Ready to Start Your Journey?
          </span>
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-4">
            Schedule a 1-on-1 Consultation
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 mb-8 max-w-md mx-auto">
            Discuss your ideas, sizing, and pricing directly with master artists Harminder & Jaspreet Singh in Central Market, Lajpat Nagar II.
          </p>
          <AppointmentForm compact={true} />
        </div>
      </div>
    </div>
  );
}
