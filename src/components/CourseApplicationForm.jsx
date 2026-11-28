import React, { useState } from 'react';
import { GraduationCap, CheckCircle2, AlertCircle, Sparkles, Send, MessageSquare, PhoneCall, ShieldCheck, BookOpen, Clock, Calendar } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_DATA } from '../data/siteData';
import { trackAppointmentSubmit, trackAppointmentConfirmed, trackWhatsAppClick, getStoredUtmParameters } from '../utils/analytics';

export default function CourseApplicationForm({ 
  initialCourse = "Advanced Tattoo Course", 
  onSuccessCallback,
  compact = false 
}) {
  const getPreselectedCourse = (val) => {
    if (typeof val !== 'string') return "Advanced Tattoo Course (Mastery & Certification)";
    if (val.toLowerCase().includes('basic')) return "Basic Tattoo Course (Foundation Level)";
    if (val.toLowerCase().includes('diploma') || val.toLowerCase().includes('master')) return "Master Diploma (Complete Studio Apprenticeship)";
    return "Advanced Tattoo Course (Mastery & Certification)";
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    selectedCourse: getPreselectedCourse(initialCourse),
    experienceLevel: 'Complete Beginner (No prior drawing experience)',
    preferredBatch: 'Immediate Upcoming Batch',
    notes: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedApplication, setSubmittedApplication] = useState(null);

  const courseOptions = [
    "Advanced Tattoo Course (Mastery & Certification)",
    "Basic Tattoo Course (Foundation Level)",
    "Master Diploma (Complete Studio Apprenticeship)"
  ];

  const experienceOptions = [
    "Complete Beginner (No prior drawing experience)",
    "Hobbyist / Sketcher (Basic drawing skills)",
    "Fine Arts / Digital Illustrator",
    "Practicing Tattooist (Upgrading to Realism & Hygiene)"
  ];

  const batchOptions = [
    "Immediate Upcoming Batch",
    "Next Month Batch",
    "Weekend Only Batches",
    "Flexible 1-on-1 Schedule"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name.';
    }

    const cleanPhone = formData.phone.replace(/[\s-+()]/g, '');
    if (!formData.phone.trim() || cleanPhone.length < 8) {
      newErrors.phone = 'Please enter a valid mobile number (+91).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const utms = getStoredUtmParameters();
      const applicationId = `TV-ACAD-${Math.floor(100000 + Math.random() * 900000)}`;

      const record = {
        applicationId,
        ...formData,
        submittedAt: new Date().toISOString(),
        utmParams: utms
      };

      // Store in localStorage
      try {
        const existing = JSON.parse(localStorage.getItem('tattoo_villa_course_applications') || '[]');
        existing.push(record);
        localStorage.setItem('tattoo_villa_course_applications', JSON.stringify(existing));
      } catch (err) {
        console.error('Storage error:', err);
      }

      // Track analytics
      try {
        trackAppointmentSubmit(formData);
        trackAppointmentConfirmed(applicationId, {
          course_name: formData.selectedCourse,
          applicant_name: formData.name
        });
      } catch (err) {
        console.error('Analytics error:', err);
      }

      // Directly send course application to studio email tattoovilla1@gmail.com
      try {
        await fetch("https://formsubmit.co/ajax/tattoovilla1@gmail.com", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `New Tattoo Academy Application: ${record.name} (${applicationId})`,
            _template: 'table',
            "Application ID": applicationId,
            "Applicant Name": record.name,
            "Mobile Phone": record.phone,
            "Email Address": record.email || 'Not provided',
            "Selected Course": record.selectedCourse,
            "Experience Level": record.experienceLevel,
            "Preferred Batch": record.preferredBatch,
            "Notes / Questions": record.notes || 'None',
            "Submission Time": new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
          })
        });
      } catch (emailErr) {
        console.warn('Course email dispatch note:', emailErr);
      }

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#c59b27', '#ffffff', '#e2b467', '#333333']
      });

      setSubmittedApplication(record);
      if (onSuccessCallback) onSuccessCallback(record);
    } catch (err) {
      console.error('Course application error:', err);
      setErrors(prev => ({ ...prev, form: 'Submission failed. Please call or WhatsApp our academy coordinator directly.' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppLink = (record = submittedApplication) => {
    const waTarget = '919818190412';
    if (!record) return `https://wa.me/${waTarget}`;

    const text = `*New Tattoo Training Course Application - Tattoo Villa Academy*
• *Application ID:* ${record.applicationId}
• *Applicant Name:* ${record.name}
• *Phone:* ${record.phone}
${record.email ? `• *Email:* ${record.email}\n` : ''}• *Selected Course:* ${record.selectedCourse}
• *Artistic Background:* ${record.experienceLevel}
• *Preferred Batch:* ${record.preferredBatch}
${record.notes ? `• *Questions/Notes:* ${record.notes}\n` : ''}
Hi Tattoo Villa Academy, I just submitted an application for your tattoo training course. Please share the complete syllabus brochure and fee structure!`;

    const encoded = encodeURIComponent(text);
    const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

    // On mobile, directly trigger the native WhatsApp app scheme to skip Meta's "Open app / Continue to Web" intermediate page
    if (isMobile) {
      return `whatsapp://send?phone=${waTarget}&text=${encoded}`;
    }
    // On desktop browsers, open WhatsApp Web chat directly without showing the preview landing screen
    return `https://web.whatsapp.com/send?phone=${waTarget}&text=${encoded}`;
  };

  if (submittedApplication) {
    return (
      <div className="glass-panel-gold rounded-2xl p-6 sm:p-8 text-center text-zinc-100 max-w-xl mx-auto border border-gold-500/40 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-gold-500/10 text-gold-400 mx-auto flex items-center justify-center mb-4 border border-gold-500/30">
          <GraduationCap className="w-9 h-9" />
        </div>
        
        <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Academy Admission Inquiry</span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1 mb-2">
          Course Application Received
        </h3>
        <p className="text-zinc-300 text-sm leading-relaxed mb-6">
          Thank you, <strong className="text-white">{submittedApplication.name}</strong>! Your application for the Tattoo Training Institute has been logged under reference:
          <span className="block text-gold-400 font-mono text-lg font-bold mt-1">{submittedApplication.applicationId}</span>
        </p>

        <div className="bg-charcoal-900/90 rounded-xl p-4 text-left text-xs sm:text-sm space-y-2 mb-6 border border-zinc-800">
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-400">Selected Course:</span>
            <span className="text-gold-400 font-medium text-right ml-2">{submittedApplication.selectedCourse}</span>
          </div>
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-400">Artistic Background:</span>
            <span className="text-zinc-200 font-medium text-right ml-2">{submittedApplication.experienceLevel}</span>
          </div>
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-400">Batch Timing:</span>
            <span className="text-zinc-200 font-medium">{submittedApplication.preferredBatch}</span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-zinc-400">Studio Campus:</span>
            <span className="text-zinc-200 font-medium">Central Market, Lajpat Nagar II, Delhi</span>
          </div>
        </div>

        <div className="space-y-3">
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('919818190412', 'post_course_application')}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-lg hover:shadow-emerald-600/30 text-sm"
          >
            <MessageSquare className="w-5 h-5" />
            Chat with Academy Coordinator on WhatsApp (+91 98181 90412)
          </a>

          <a
            href={`tel:${SITE_DATA.contact.delhi.phones[0].raw}`}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium transition-all text-sm border border-zinc-700"
          >
            <PhoneCall className="w-4 h-4 text-gold-400" />
            Call Academy Coordinator: {SITE_DATA.contact.delhi.phones[0].display}
          </a>
        </div>

        <p className="text-[11px] text-zinc-400 mt-5">
          ✓ Application sent directly to tattoovilla1@gmail.com. We will email/WhatsApp you the syllabus brochure and fee structure shortly.
        </p>

        <p className="text-[11px] text-zinc-500 mt-5">
          Our senior mentor will review your application and get in touch within 2-4 business hours to discuss batch availability and syllabus details.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5 text-left" noValidate>
      {errors.form && (
        <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs sm:text-sm flex items-center gap-2">
          <AlertCircle className="w-5 h-5 shrink-0" />
          <span>{errors.form}</span>
        </div>
      )}

      {/* Full Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1.5">
            Full Name <span className="text-gold-400">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="e.g. Aman Verma"
            className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border ${
              errors.name ? 'border-rose-500' : 'border-zinc-700/80 focus:border-gold-500'
            } text-white placeholder-zinc-500 text-sm outline-none transition-colors`}
          />
          {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1.5">
            Phone / WhatsApp Number <span className="text-gold-400">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="e.g. 98181 90412"
            className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border ${
              errors.phone ? 'border-rose-500' : 'border-zinc-700/80 focus:border-gold-500'
            } text-white placeholder-zinc-500 text-sm outline-none transition-colors`}
          />
          {errors.phone && <p className="text-rose-400 text-xs mt-1">{errors.phone}</p>}
        </div>
      </div>

      {/* Email Address & Course Selection */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1.5">
            Email Address <span className="text-gold-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="e.g. aman@gmail.com"
            className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border ${
              errors.email ? 'border-rose-500' : 'border-zinc-700/80 focus:border-gold-500'
            } text-white placeholder-zinc-500 text-sm outline-none transition-colors`}
          />
          {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1.5">
            Select Course <span className="text-gold-400">*</span>
          </label>
          <select
            name="selectedCourse"
            value={formData.selectedCourse}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-zinc-700/80 focus:border-gold-500 text-white text-sm outline-none transition-colors cursor-pointer"
          >
            {courseOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-charcoal-900 text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Artistic Background & Preferred Batch */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1.5">
            Artistic / Drawing Background
          </label>
          <select
            name="experienceLevel"
            value={formData.experienceLevel}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-zinc-700/80 focus:border-gold-500 text-white text-sm outline-none transition-colors cursor-pointer"
          >
            {experienceOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-charcoal-900 text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1.5">
            Preferred Batch Timing
          </label>
          <select
            name="preferredBatch"
            value={formData.preferredBatch}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-zinc-700/80 focus:border-gold-500 text-white text-sm outline-none transition-colors cursor-pointer"
          >
            {batchOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-charcoal-900 text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Questions or Career Goals */}
      <div>
        <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1.5">
          Career Goals or Questions (Optional)
        </label>
        <textarea
          name="notes"
          rows={compact ? 2 : 3}
          value={formData.notes}
          onChange={handleInputChange}
          placeholder="Tell us what inspired you to learn tattooing or any specific questions you have about the syllabus or studio visits..."
          className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-zinc-700/80 focus:border-gold-500 text-white placeholder-zinc-500 text-sm outline-none transition-colors resize-none"
        ></textarea>
      </div>

      {/* Academy Perks Note */}
      <div className="flex items-center gap-2 text-xs text-zinc-400 pt-1">
        <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
        <span>Official Certification • 1-on-1 Studio Mentorship (Max 4 students) • Equipment Provided</span>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full py-4 px-6 rounded-xl bg-gold-metallic text-black font-bold text-sm uppercase tracking-wider shadow-lg hover:shadow-gold-500/20 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
            Registering Application...
          </>
        ) : (
          <>
            <GraduationCap className="w-4 h-4" />
            Submit Course Application & Get Brochure
          </>
        )}
      </button>
    </form>
  );
}
