import React from 'react';
import { Award, CheckCircle2, Calendar, Star, Sparkles, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SITE_DATA } from '../data/siteData';

export default function ArtistsPage({ onOpenAppointmentModal, onOpenLightbox }) {
  return (
    <div className="py-12 sm:py-20 bg-charcoal-950">
      <SEOHead
        title="Our Artists | Master Inkers Harminder, Jaspreet & Harmeet Singh"
        description="Meet resident tattoo artists Harminder Singh, Jaspreet Singh, and Harmeet Singh at Tattoo Villa Delhi. Custom realism, fine-line, Japanese, and illustrative tattoos."
        canonicalUrl="/artists"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Our Artists", path: "/artists" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            29+ Years Combined Mastery
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-black text-white tracking-tight mb-4">
            Master Artists of Tattoo Villa
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            At Tattoo Villa, inking is not treated as a mechanical job. Our resident artists are dedicated fine art practitioners who bring distinct disciplines, anatomical awareness, and patient mentorship to every single design.
          </p>
        </div>

        {/* Individual Artist Deep Dives */}
        <div className="space-y-20">
          {SITE_DATA.artists.map((artist, idx) => (
            <div
              key={artist.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Photo Card - 1:1 Aspect Ratio to ensure zero cropping */}
              <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative aspect-square bg-charcoal-900 group">
                  <img
                    src={artist.image}
                    alt={`${artist.name} - ${artist.role} Tattoo Villa`}
                    className={`w-full h-full object-cover ${artist.id === 'harmeet-singh' ? 'object-top' : 'object-center'} group-hover:scale-105 transition-transform duration-700 filter contrast-105`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/20 to-transparent pointer-events-none"></div>
                  {artist.experience && (
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-gold-500/40 text-xs font-bold text-gold-400">
                        {artist.experience}
                      </span>
                    </div>
                  )}
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-xs uppercase tracking-widest text-gold-400 font-bold">
                      {artist.role}
                    </p>
                    <h3 className="text-3xl font-serif font-bold text-white mt-1">
                      {artist.name}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Text & Specialties */}
              <div className={`lg:col-span-7 space-y-6 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="border-b border-zinc-800 pb-4">
                  <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-1">
                    Resident Inker Profile
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
                    {artist.name}
                  </h2>
                  <p className="text-xs text-zinc-400 mt-1">
                    {artist.role} • Central Market Lajpat Nagar Studio
                  </p>
                </div>

                <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                  {artist.bio}
                </p>

                <div className="bg-charcoal-900 rounded-2xl p-6 border border-zinc-800">
                  <h4 className="text-xs uppercase tracking-wider text-gold-400 font-bold mb-3">
                    Core Disciplines & Specialties:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-zinc-200">
                    {artist.specialties.map((spec, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <blockquote className="border-l-2 border-gold-500 pl-4 py-1 italic text-zinc-300 text-sm">
                  "{artist.quote}"
                </blockquote>

                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenAppointmentModal(`Priority session with ${artist.name}`)}
                    className="py-3.5 px-8 rounded-xl bg-gold-metallic text-black font-extrabold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Appointment</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
