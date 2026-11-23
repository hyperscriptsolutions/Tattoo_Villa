import React from 'react';
import { Award, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SITE_DATA } from '../data/siteData';

export default function AwardsPage({ onOpenAppointmentModal }) {
  return (
    <div className="py-12 sm:py-20 bg-charcoal-950">
      <SEOHead
        title="Our Awards & Recognitions | Tattoo Villa Delhi"
        description="Celebrate our journey of tattoo artistry excellence. Honored at the Global Tattoo Convention, National Tattoo Awards, and International Body Art Guild."
        canonicalUrl="/awards"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Our Awards", path: "/awards" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            Excellence Celebrated
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-black text-white tracking-tight mb-4">
            Awards & Recognitions
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            Our commitment to original artistry, clinical hygiene standards, and customer happiness has been honored across major industry stages.
          </p>
        </div>

        {/* Awards Detailed Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {SITE_DATA.awards.map((award, idx) => (
            <div
              key={idx}
              className="glass-panel p-8 rounded-3xl border border-zinc-800 hover:border-gold-500/40 transition-all shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-gold-500/10 text-gold-400 border border-gold-500/20 flex items-center justify-center mb-6">
                  <Award className="w-7 h-7" />
                </div>
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block mb-2">
                  Year {award.year}
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  {award.title}
                </h3>
                <p className="text-xs text-gold-300/80 font-medium mb-4">
                  {award.organization}
                </p>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  {award.description}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-zinc-800/80 flex items-center gap-2 text-xs text-emerald-400">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Verified Studio Achievement</span>
              </div>
            </div>
          ))}
        </div>

        {/* Studio Philosophy Banner */}
        <div className="glass-panel-gold rounded-3xl p-8 sm:p-12 text-center border border-gold-500/30 max-w-3xl mx-auto shadow-2xl">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
            Experience Award-Winning Inking Yourself
          </h2>
          <p className="text-xs sm:text-sm text-zinc-300 mb-6">
            Consult directly with Harminder Singh and Jaspreet Singh at our Central Market Lajpat Nagar studio.
          </p>
          <button
            onClick={() => onOpenAppointmentModal('Award-winning artist consultation')}
            className="py-3.5 px-8 rounded-xl bg-gold-metallic text-black font-extrabold text-xs uppercase tracking-wider shadow-lg hover:brightness-110 transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>Book Consultation Slot</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
