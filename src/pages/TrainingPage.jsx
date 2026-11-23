import React from 'react';
import { Sparkles, CheckCircle2, GraduationCap, ShieldCheck, Award, MessageSquare, Phone } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import AppointmentForm from '../components/AppointmentForm';
import { SITE_DATA } from '../data/siteData';

export default function TrainingPage({ onOpenAppointmentModal }) {
  const training = SITE_DATA.trainingInstitute;

  return (
    <div className="py-12 sm:py-20 bg-charcoal-950">
      <SEOHead
        title="Tattoo Training Institute in Delhi | Professional Courses & Certification"
        description="Learn the art of professional tattooing from master artists Harminder & Jaspreet Singh at Tattoo Villa Academy Delhi. Full hands-on diploma courses with certification."
        canonicalUrl="/training"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Tattoo Training Institute", path: "/training" }
        ]}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-4 h-4" />
            Academy of Body Art
          </span>
          <h1 className="text-4xl sm:text-6xl font-serif font-black text-white tracking-tight mb-4">
            Tattoo Training Institute Delhi
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
            {training.desc}
          </p>
        </div>

        {/* Modules Breakdown */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-1">
              Curriculum Overview
            </span>
            <h2 className="text-3xl font-serif font-bold text-white">
              Structured Master Syllabus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {training.modules.map((mod, idx) => (
              <div
                key={idx}
                className="glass-panel p-7 rounded-2xl border border-zinc-800 hover:border-gold-500/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="px-2.5 py-1 rounded-lg bg-gold-500/10 text-gold-400 text-xs font-bold border border-gold-500/20 inline-block mb-3">
                    {mod.name}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white mb-2">
                    {mod.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Inclusions & Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-charcoal-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 mb-16">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block">
              Program Highlights
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Why Train at Tattoo Villa Delhi?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Unlike generic art centers, our academy operates inside a bustling high-end professional studio. You observe real client interactions, sterilization cycles, and skin challenges every day.
            </p>

            <div className="space-y-3 pt-2">
              {training.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-zinc-200">
                  <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-charcoal-950 border border-zinc-800 text-xs space-y-2">
              <span className="text-gold-400 font-bold block">Course Duration Options:</span>
              <p className="text-zinc-300 font-medium">{training.duration}</p>
              <p className="text-zinc-500 text-[11px]">Limited to 4 students per batch to ensure personalized 1-on-1 mentorship.</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800">
              <h4 className="text-xl font-serif font-bold text-white mb-2">
                Inquire for the Next Academy Batch
              </h4>
              <p className="text-xs text-zinc-400 mb-6">
                Receive course fees, syllabus brochure, and schedule a studio visit with mentor Harminder Singh.
              </p>
              <AppointmentForm initialCategory="Tattoo Training Institute Inquiry" compact={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
