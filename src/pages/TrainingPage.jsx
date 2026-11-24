import React from 'react';
import { Sparkles, CheckCircle2, GraduationCap, ShieldCheck, Award, MessageSquare, Phone, BookOpen, Layers, HelpCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import CourseApplicationForm from '../components/CourseApplicationForm';
import { SITE_DATA } from '../data/siteData';
import { trackWhatsAppClick } from '../utils/analytics';

export default function TrainingPage({ onOpenAppointmentModal }) {
  const training = SITE_DATA.trainingInstitute;

  return (
    <div className="bg-charcoal-950 text-zinc-100 min-h-screen">
      <SEOHead
        title="Tattoo Training Institute in Delhi | Professional Basic & Advanced Tattoo Courses"
        description="Join Delhi's premier Tattoo Training Institute. Master basic drawing, machine assembly, needle types, hygiene protocols, realism, portraiture, and color tattoos. Get certified."
        canonicalUrl="/training"
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Tattoo Training Institute", path: "/training" }
        ]}
      />

      {/* Hero Banner with Tattooing Arm Image */}
      <div className="relative py-20 sm:py-28 overflow-hidden border-b border-zinc-800">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/artists/jaspreet-singh.jpg"
            alt="Tattoo Training Institute in Delhi"
            className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950/80 via-charcoal-950/60 to-charcoal-950"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-widest mb-4">
            <GraduationCap className="w-4 h-4" />
            Academy of Body Art & Ink Mastery
          </span>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-white tracking-tight uppercase max-w-4xl mx-auto">
            Tattoo Training Institute In Delhi
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 max-w-2xl mx-auto mt-4 leading-relaxed font-light">
            Master the art and science of professional tattooing. From fundamental drawing and machine mechanics to photorealism, hygiene certification, and studio entrepreneurship.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        {/* Institute Overview & Welcome */}
        <section className="glass-panel p-8 sm:p-12 lg:p-16 rounded-3xl border border-gold-500/30 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none"></div>

          <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-2">
            Professional Certification Program
          </span>
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white tracking-wide uppercase mb-6">
            Tattoo Training Institute In Delhi
          </h2>

          <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed text-justify sm:text-center max-w-3xl mx-auto font-normal">
            <p>
              Welcome to our Tattoo Training Institute in Delhi! We offer a complete, immersive learning experience for aspiring tattoo artists. Our structured curriculum teaches everything from basic sketch composition to advanced tattooing techniques, color theory, precision machine operation, and hospital-grade sterilization protocols.
            </p>
            <p>
              Guided step-by-step by master artists Harminder Singh and Jaspreet Singh, you learn both the delicate artistry and technical science of needle mechanics. Our modern studio setup gives you the realistic experience of working in an elite tattoo sanctuary, coupled with vital guidance on client management and studio entrepreneurship.
            </p>
            <p className="text-gold-300 font-medium">
              Upon course completion, students receive an official certificate verifying their hands-on training, hygiene credentials, and professional readiness to launch their tattooing career.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenAppointmentModal('Tattoo Training Institute Inquiry')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-700 via-amber-600 to-amber-800 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-xs uppercase tracking-widest shadow-xl hover:shadow-amber-600/25 transition-all transform hover:-translate-y-0.5 cursor-pointer"
            >
              Book Appointment
            </button>

            <a
              href={`https://wa.me/${SITE_DATA.contact.delhi.whatsappNumber}?text=Hi%20Tattoo%20Villa%2C%20I%20am%20interested%20in%20the%20Tattoo%20Training%20Institute%20courses.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsAppClick(SITE_DATA.contact.delhi.whatsappNumber, 'training_page_cta')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-xs font-semibold tracking-wider transition-colors flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              Chat on WhatsApp for Fees & Syllabus
            </a>
          </div>
        </section>

        {/* OUR COURSES SECTION */}
        <section id="courses" className="space-y-8 scroll-mt-28">
          {/* Section Black Banner Header (Matching User Reference) */}
          <div className="bg-black border border-zinc-800 py-4 px-6 text-center rounded-xl shadow-lg">
            <h2 className="text-xl sm:text-2xl font-serif font-extrabold tracking-widest text-white uppercase">
              Our Courses
            </h2>
          </div>

          {/* 2 Courses Grid: Basic vs Advanced */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            {/* Basic Tattoo Course */}
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-zinc-800 hover:border-gold-500/40 transition-all flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-zinc-800">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-gold-400 font-bold block mb-1">
                      Foundation Level
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase">
                      Basic Tattoo Course
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-gold-500/10 border border-gold-500/20 text-gold-400 flex items-center justify-center shrink-0">
                    <BookOpen className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                  Tailored for beginners with little or no machine experience. Build strong creative habits, understand proper needle selections, and gain confidence through guided skinpad practice.
                </p>

                <h4 className="text-xs uppercase tracking-wider text-zinc-300 font-bold mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                  Syllabus Curriculum:
                </h4>

                <ul className="space-y-3 text-xs sm:text-sm text-zinc-200">
                  {training.courses[0].topics.map((topic, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-8 border-t border-zinc-800/80">
                <button
                  onClick={() => onOpenAppointmentModal('Basic Tattoo Course Inquiry')}
                  className="w-full py-3.5 px-6 rounded-xl bg-zinc-900 hover:bg-gold-500 hover:text-black border border-gold-500/30 text-gold-400 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Inquire for Basic Course</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Advanced Tattoo Course */}
            <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-gold-500/40 hover:border-gold-500/70 transition-all flex flex-col justify-between shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1 rounded-bl-xl bg-gold-500 text-black text-[10px] font-extrabold uppercase tracking-widest shadow-md">
                Most Popular
              </div>

              <div>
                <div className="flex items-center justify-between gap-4 mb-4 pb-4 border-b border-zinc-800">
                  <div>
                    <span className="text-[11px] uppercase tracking-widest text-gold-400 font-bold block mb-1">
                      Professional Mastery
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white uppercase">
                      Advanced Tattoo Course
                    </h3>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-gold-500/15 border border-gold-500/30 text-gold-400 flex items-center justify-center shrink-0">
                    <Layers className="w-6 h-6" />
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                  Deep artistic immersion covering multi-pass realism, lifelike portraits, complex dotwork, solid color packing, and clinical hygiene for artists ready to tattoo commercially.
                </p>

                <h4 className="text-xs uppercase tracking-wider text-zinc-300 font-bold mb-3 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400"></span>
                  Syllabus Curriculum:
                </h4>

                <ul className="space-y-3 text-xs sm:text-sm text-zinc-200">
                  {training.courses[1].topics.map((topic, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 mt-8 border-t border-zinc-800/80">
                <button
                  onClick={() => onOpenAppointmentModal('Advanced Tattoo Course Inquiry')}
                  className="w-full py-3.5 px-6 rounded-xl bg-gold-metallic text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg"
                >
                  <span>Apply for Advanced Course</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS SECTION */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block mb-1">
              Clear Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-5 max-w-4xl mx-auto">
            {training.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800/80 hover:border-gold-500/30 transition-colors shadow-lg"
              >
                <div className="flex items-start gap-3.5 mb-3">
                  <HelpCircle className="w-5 h-5 text-gold-400 shrink-0 mt-0.5" />
                  <h3 className="text-base sm:text-lg font-serif font-bold text-white uppercase tracking-wide">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Mentorship & Registration Form */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start bg-charcoal-900 border border-zinc-800 rounded-3xl p-8 sm:p-12 shadow-2xl">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-gold-400 font-bold block">
              1-on-1 Studio Mentorship
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
              Learn Directly from Award-Winning Masters
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Unlike theoretical classrooms, our academy operates within our active Central Market, Lajpat Nagar II studio. You observe real client consultations, custom design creation, and skin challenges under master inker Harminder Singh.
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
              <span className="text-gold-400 font-bold block">Batch Size & Mentorship:</span>
              <p className="text-zinc-300 font-medium">Limited to 4 students per batch for personalized attention.</p>
              <p className="text-zinc-500 text-[11px]">Includes studio starter kit guidance and lifetime artistic support.</p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-zinc-800 shadow-xl">
              <h4 className="text-xl font-serif font-bold text-white mb-2">
                Inquire for the Next Academy Batch
              </h4>
              <p className="text-xs text-zinc-400 mb-6">
                Receive course fees, syllabus brochure, and schedule a studio visit with mentor Harminder Singh.
              </p>
              <CourseApplicationForm initialCourse="Advanced Tattoo Course" compact={true} />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
