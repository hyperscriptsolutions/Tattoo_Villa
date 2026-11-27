import React from 'react';
import { Link } from 'react-router-dom';
import { Award, ShieldCheck, Heart, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SITE_DATA } from '../data/siteData';

export default function AboutPage({ onOpenAppointmentModal }) {
  return (
    <div className="py-12 sm:py-20 bg-charcoal-950">
      <SEOHead
        title="About Us | Our Story & Artists | Tattoo Villa Delhi"
        description="Learn about Tattoo Villa Delhi's 15-year journey. Master artists Harminder Singh (15+ yrs) and Jaspreet Singh (7+ yrs) in Central Market, Lajpat Nagar II."
        canonicalUrl="/about"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "About Us", path: "/about" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            15+ Years of Dedicated Mastery
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-black text-white tracking-tight mb-6">
            The Story Behind Tattoo Villa
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 leading-relaxed">
            Founded with an uncompromising belief that tattoos are intimate, lifelong expressions of personal identity, Tattoo Villa has grown into one of New Delhi's most respected custom body art studios.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div className="rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl relative aspect-square bg-charcoal-900">
            <img
              src="https://res.cloudinary.com/ozrdoi7q/image/upload/f_auto,q_auto/v1795692843/IMG_3462.heic"
              alt="Anand Singh - Founder at Tattoo Villa"
              className="w-full h-full object-cover object-center filter contrast-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <span className="px-3 py-1 rounded-full bg-gold-500/20 text-gold-400 text-xs font-bold border border-gold-500/30">
                Founder
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-2">
                Anand Singh
              </h3>
              <p className="text-xs text-zinc-300">Founder & Visionary</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white">
              Turning Passion Into a Living Legacy
            </h2>
            <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
              Our journey began 15 years ago when founder Anand Singh set out to transform a deep passion for body art into an elite custom tattoo sanctuary. Recognizing a lack of true custom illustration and strict sterile environments in the local market, Tattoo Villa was established in the vibrant heart of Central Market, Lajpat Nagar II.
            </p>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
              Joined by master tattoo artist Harminder Singh and lead artist Jaspreet Singh (7+ yrs), the studio established a reputation for pushing technical boundaries: complex photo-realism, fine-line single needle precision, intricate dotwork mandalas, and culturally reverent spiritual compositions.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-300">
                  <strong>Zero Catalog Clutter:</strong> Every piece is custom sketched to align with client anatomy and aesthetic vision.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-300">
                  <strong>Clinical Hygiene Discipline:</strong> Autoclave sterilization, sealed single-use needles, and hospital-grade virucidal barrier preparations.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-zinc-300">
                  <strong>Lifetime Client Relationship:</strong> We guide you through comprehensive healing and offer dedicated follow-ups.
                </span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenAppointmentModal()}
                className="py-3.5 px-8 rounded-xl bg-gold-metallic text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Book Consultation with Founders</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Awards Overview */}
        <div className="bg-charcoal-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Studio Achievements & Milestones
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 mt-2">
              Our commitment to creativity, hygiene, and client trust has earned prestigious honors across national and international tattoo forums.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {SITE_DATA.awards.map((award, idx) => (
              <div key={idx} className="glass-panel p-6 rounded-2xl border border-zinc-800 hover:border-gold-500/30 transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-gold-400 block mb-1">Year {award.year}</span>
                  <h4 className="text-lg font-serif font-bold text-white mb-1">{award.title}</h4>
                  <p className="text-xs text-zinc-400 font-medium mb-3">{award.organization}</p>
                  <p className="text-xs text-zinc-400 leading-relaxed">{award.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-2">
            <Link
              to="/awards"
              className="inline-flex items-center gap-2 py-3 px-6 rounded-xl bg-gold-metallic text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 transition-all shadow-md"
            >
              <span>Explore All 24+ Convention Trophies & Certificates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
