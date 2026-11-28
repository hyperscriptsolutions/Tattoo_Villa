import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle2, AlertCircle, Sparkles, Send, MessageSquare, PhoneCall, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_DATA } from '../data/siteData';
import { trackAppointmentSubmit, trackAppointmentConfirmed, trackWhatsAppClick, getStoredUtmParameters } from '../utils/analytics';

export default function AppointmentForm({ 
  initialCategory = "Custom Designs & Cover-ups", 
  onSuccessCallback,
  compact = false 
}) {
  const categories = [
    "Portrait Tattoos",
    "Realism Tattoos",
    "Animal & Wildlife Tattoos",
    "Religious & Spiritual Tattoos",
    "Calligraphy & Script Tattoos",
    "Minimal & Fine-Line Tattoos",
    "Full / Half Sleeve Projects",
    "Custom Designs & Cover-ups",
    "Tattoo Training Institute Inquiry",
    "Other"
  ];

  const getMatchedCategory = (cat) => {
    if (!cat) return "Custom Designs & Cover-ups";
    const found = categories.find(c => c.toLowerCase() === cat.toLowerCase());
    if (found) return found;
    if (cat.toLowerCase().includes('custom') || cat.toLowerCase().includes('cover')) {
      return "Custom Designs & Cover-ups";
    }
    if (cat.toLowerCase().includes('sleeve')) {
      return "Full / Half Sleeve Projects";
    }
    return "Other";
  };

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: 'Delhi Studio',
    tattooType: getMatchedCategory(initialCategory),
    date: '',
    placement: '',
    description: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState(null);

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
      newErrors.name = 'Please enter your full name (minimum 2 characters).';
    }

    const cleanPhone = formData.phone.replace(/[\s-+()]/g, '');
    if (!formData.phone.trim() || cleanPhone.length < 8) {
      newErrors.phone = 'Please enter a valid mobile number (e.g. +91 98181 90412 or +61 478 311 912).';
    }

    if (!formData.date) {
      newErrors.date = 'Please select your preferred consultation date.';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Date cannot be in the past.';
      }
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
      const bookingId = `TV-DEL-${Math.floor(100000 + Math.random() * 900000)}`;

      const bookingRecord = {
        bookingId,
        ...formData,
        submittedAt: new Date().toISOString(),
        utmParams: utms
      };

      // Store in localStorage for persistence
      try {
        const existing = JSON.parse(localStorage.getItem('tattoo_villa_bookings') || '[]');
        existing.push(bookingRecord);
        localStorage.setItem('tattoo_villa_bookings', JSON.stringify(existing));
      } catch (err) {
        console.error('Storage error:', err);
      }

      // Track Google Ads / Analytics Conversion
      try {
        trackAppointmentSubmit(formData);
        trackAppointmentConfirmed(bookingId, {
          tattoo_category: formData.tattooType,
          customer_name: formData.name
        });
      } catch (err) {
        console.error('Analytics error:', err);
      }

      // Directly send booking info to studio email tattoovilla1@gmail.com
      try {
        await fetch("https://formsubmit.co/ajax/tattoovilla1@gmail.com", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            _subject: `New Tattoo Consultation Booking: ${bookingRecord.name} (${bookingId})`,
            _template: 'table',
            "Booking Reference": bookingId,
            "Client Name": bookingRecord.name,
            "Mobile Phone": bookingRecord.phone,
            "Studio Location": bookingRecord.location,
            "Tattoo Category": bookingRecord.tattooType,
            "Preferred Date": bookingRecord.date,
            "Placement Area": bookingRecord.placement || 'Not specified',
            "Tattoo Idea & Details": bookingRecord.description || 'Not specified',
            "Submission Time": new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
          })
        });
      } catch (emailErr) {
        console.warn('Direct email dispatch note:', emailErr);
      }

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#c59b27', '#ffffff', '#e2b467', '#333333']
      });

      setSubmittedBooking(bookingRecord);
      if (onSuccessCallback) onSuccessCallback(bookingRecord);
    } catch (err) {
      console.error('Booking submission error:', err);
      setErrors(prev => ({ ...prev, form: 'Submission failed. Please call or WhatsApp us directly.' }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const getWhatsAppDirectLink = (record = submittedBooking) => {
    const waTarget = '919818190412';
    if (!record) return `https://wa.me/${waTarget}`;
    
    const text = `*New Tattoo Consultation Inquiry - Tattoo Villa*
• *Booking ID:* ${record.bookingId}
• *Name:* ${record.name}
• *Phone:* ${record.phone}
• *Studio Location:* ${record.location}
• *Tattoo Category:* ${record.tattooType}
• *Preferred Date:* ${record.date}
${record.placement ? `• *Placement Area:* ${record.placement}\n` : ''}${record.description ? `• *Tattoo Idea & Details:* ${record.description}\n` : ''}Hi Tattoo Villa, I just scheduled an appointment request on your website. Please confirm artist availability!`;

    const encoded = encodeURIComponent(text);
    const isMobile = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);

    // On mobile, directly trigger the native WhatsApp app scheme to skip Meta's "Open app / Continue to Web" intermediate page
    if (isMobile) {
      return `whatsapp://send?phone=${waTarget}&text=${encoded}`;
    }
    // On desktop browsers, open WhatsApp Web chat directly without showing the preview landing screen
    return `https://web.whatsapp.com/send?phone=${waTarget}&text=${encoded}`;
  };

  if (submittedBooking) {
    const isAustralia = submittedBooking.location === 'Australia Studio';
    const locationDisplay = isAustralia 
      ? '13 Ornament Ave Tarneit VIC 3029, Melbourne Australia' 
      : 'Central Market, Lajpat Nagar II, New Delhi';
    const phoneDisplay = isAustralia ? '+61-478311912' : SITE_DATA.contact.delhi.phones[0].display;
    const phoneRaw = isAustralia ? '+61478311912' : SITE_DATA.contact.delhi.phones[0].raw;

    return (
      <div className="glass-panel-gold rounded-2xl p-6 sm:p-8 text-center text-zinc-100 max-w-xl mx-auto border border-gold-500/40 shadow-2xl">
        <div className="w-16 h-16 rounded-full bg-gold-500/10 text-gold-400 mx-auto flex items-center justify-center mb-4 border border-gold-500/30">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        
        <span className="text-xs uppercase tracking-widest text-gold-400 font-semibold">Enquiry Successfully Received</span>
        <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1 mb-2">
          Consultation Request Confirmed
        </h3>
        <p className="text-zinc-300 text-sm leading-relaxed mb-6">
          Thank you, <strong className="text-white">{submittedBooking.name}</strong>! Your appointment inquiry has been registered under reference:
          <span className="block text-gold-400 font-mono text-lg font-bold mt-1">{submittedBooking.bookingId}</span>
        </p>

        <div className="bg-charcoal-900/90 rounded-xl p-4 text-left text-xs sm:text-sm space-y-2 mb-6 border border-zinc-800">
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-400">Studio Location:</span>
            <span className="text-gold-400 font-medium text-right ml-2">{locationDisplay}</span>
          </div>
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-400">Tattoo Category:</span>
            <span className="text-zinc-200 font-medium">{submittedBooking.tattooType}</span>
          </div>
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-400">Preferred Date:</span>
            <span className="text-zinc-200 font-medium">{submittedBooking.date}</span>
          </div>
          <div className="flex justify-between pt-1">
            <span className="text-zinc-400">Consultation Fee:</span>
            <span className="text-emerald-400 font-semibold">FREE (No Obligation)</span>
          </div>
        </div>

        <div className="space-y-3">
          <a
            href={getWhatsAppDirectLink()}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackWhatsAppClick('919818190412', 'post_appointment_confirmation')}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-lg hover:shadow-emerald-600/30 text-sm"
          >
            <MessageSquare className="w-5 h-5" />
            Chat with Artist on WhatsApp (+91 98181 90412)
          </a>

          <a
            href={`tel:${phoneRaw}`}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium transition-all text-sm border border-zinc-700"
          >
            <PhoneCall className="w-4 h-4 text-gold-400" />
            Call Studio Directly: {phoneDisplay}
          </a>
        </div>

        <p className="text-[11px] text-zinc-400 mt-5">
          ✓ Your booking details have been sent directly to the studio (tattoovilla1@gmail.com). Our team will call/WhatsApp you shortly to confirm artist timing.
        </p>

        <p className="text-[11px] text-zinc-500 mt-5">
          Our studio manager will also call you back within 2-4 business hours to confirm your time slot and artist assignment.
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
            placeholder="e.g. Rohit Sharma"
            className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border ${
              errors.name ? 'border-rose-500' : 'border-zinc-700/80 focus:border-gold-500'
            } text-white placeholder-zinc-500 text-sm outline-none transition-colors`}
          />
          {errors.name && <p className="text-rose-400 text-xs mt-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1.5">
            Phone Number <span className="text-gold-400">*</span>
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

      {/* Studio Location & Tattoo Category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1.5">
            Studio Location <span className="text-gold-400">*</span>
          </label>
          <select
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-zinc-700/80 focus:border-gold-500 text-white text-sm outline-none transition-colors cursor-pointer"
          >
            <option value="Delhi Studio">🇮🇳 Delhi (Lajpat Nagar II)</option>
            <option value="Australia Studio">🇦🇺 Australia (Melbourne VIC)</option>
          </select>
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1.5">
            Tattoo Category <span className="text-gold-400">*</span>
          </label>
          <select
            name="tattooType"
            value={formData.tattooType}
            onChange={handleInputChange}
            className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-zinc-700/80 focus:border-gold-500 text-white text-sm outline-none transition-colors cursor-pointer"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat} className="bg-charcoal-900 text-white">
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Preferred Date & Placement Area */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1.5">
            Preferred Date <span className="text-gold-400">*</span>
          </label>
          <div className="relative">
            <input
              type="date"
              name="date"
              value={formData.date}
              min={new Date().toISOString().split('T')[0]}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border ${
                errors.date ? 'border-rose-500' : 'border-zinc-700/80 focus:border-gold-500'
              } text-white text-sm outline-none transition-colors cursor-pointer`}
            />
          </div>
          {errors.date && <p className="text-rose-400 text-xs mt-1">{errors.date}</p>}
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1.5">
            Placement Area (Optional)
          </label>
          <input
            type="text"
            name="placement"
            value={formData.placement}
            onChange={handleInputChange}
            placeholder="e.g. Forearm, Collarbone, Back, Calf"
            className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-zinc-700/80 focus:border-gold-500 text-white placeholder-zinc-500 text-sm outline-none transition-colors"
          />
        </div>
      </div>

      {/* Tattoo Description (Optional) */}
      <div>
        <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1.5">
          Tattoo Idea & Details (Optional)
        </label>
        <textarea
          name="description"
          rows={compact ? 2 : 3}
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Describe your design vision, approximate dimensions, or whether this is a cover-up (optional)..."
          className="w-full px-4 py-3 rounded-xl bg-charcoal-900 border border-zinc-700/80 focus:border-gold-500 text-white placeholder-zinc-500 text-sm outline-none transition-colors resize-none"
        ></textarea>
      </div>

      {/* Trust & Guarantee note */}
      <div className="flex items-center gap-2 text-xs text-zinc-400 pt-1">
        <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
        <span>Free consultation • Zero spam • 100% Hospital sterilized studio</span>
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
            Securing Your Time Slot...
          </>
        ) : (
          <>
            <Sparkles className="w-4 h-4" />
            Book Free Consultation Slot
          </>
        )}
      </button>
    </form>
  );
}
