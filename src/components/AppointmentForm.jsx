import React, { useState } from 'react';
import { Calendar, Clock, Upload, CheckCircle2, AlertCircle, Sparkles, Send, MessageSquare, PhoneCall, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SITE_DATA } from '../data/siteData';
import { trackAppointmentSubmit, trackAppointmentConfirmed, trackWhatsAppClick, getStoredUtmParameters } from '../utils/analytics';

export default function AppointmentForm({ 
  initialCategory = "Custom Tattoos", 
  onSuccessCallback,
  compact = false 
}) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    tattooType: initialCategory || 'Custom Tattoos',
    date: '',
    placement: '',
    description: '',
    imageFile: null,
    imagePreview: null,
    imageName: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState(null);

  const categories = [
    "Portrait Tattoos",
    "Realism Tattoos",
    "Animal & Wildlife Tattoos",
    "Religious & Spiritual Tattoos",
    "Calligraphy & Script Tattoos",
    "Minimal & Fine-Line Tattoos",
    "Full / Half Sleeve Projects",
    "Custom Tattoos & Cover-ups",
    "Tattoo Training Institute Inquiry"
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setErrors(prev => ({ ...prev, image: 'Please upload an image file (PNG, JPG, or WEBP).' }));
      return;
    }

    if (file.size > 10 * 1024 * 1024) {
      setErrors(prev => ({ ...prev, image: 'File size must be under 10MB.' }));
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({
        ...prev,
        imageFile: file,
        imagePreview: reader.result,
        imageName: file.name
      }));
      setErrors(prev => ({ ...prev, image: '' }));
    };
    reader.readAsDataURL(file);
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name (minimum 2 characters).';
    }

    const phoneRegex = /^(\+91[\s-]?)?[6789]\d{9}$/;
    const cleanPhone = formData.phone.replace(/[\s-]/g, '');
    if (!formData.phone.trim() || !phoneRegex.test(cleanPhone)) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number (+91).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
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

    if (!formData.description.trim() || formData.description.trim().length < 5) {
      newErrors.description = 'Please describe your tattoo idea or placement area (min 5 characters).';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Simulate real asynchronous submission to lead management / API
      await new Promise(resolve => setTimeout(resolve, 800));

      const utms = getStoredUtmParameters();
      const bookingId = `TV-DEL-${Math.floor(100000 + Math.random() * 900000)}`;

      const bookingRecord = {
        bookingId,
        ...formData,
        submittedAt: new Date().toISOString(),
        utmParams: utms
      };

      // Store in localStorage for persistence
      const existing = JSON.parse(localStorage.getItem('tattoo_villa_bookings') || '[]');
      existing.push(bookingRecord);
      localStorage.setItem('tattoo_villa_bookings', JSON.stringify(existing));

      // Track Google Ads / Analytics Conversion
      trackAppointmentSubmit(formData);
      trackAppointmentConfirmed(bookingId, {
        tattoo_category: formData.tattooType,
        customer_name: formData.name
      });

      // Trigger Celebration Confetti
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

  const getWhatsAppDirectLink = () => {
    if (!submittedBooking) return `https://wa.me/${SITE_DATA.contact.delhi.whatsappNumber}`;
    
    const text = `*New Tattoo Consultation Inquiry - Tattoo Villa Delhi*
• *Booking ID:* ${submittedBooking.bookingId}
• *Name:* ${submittedBooking.name}
• *Phone:* ${submittedBooking.phone}
• *Category:* ${submittedBooking.tattooType}
• *Preferred Date:* ${submittedBooking.date}
• *Idea/Placement:* ${submittedBooking.description}
${submittedBooking.imageName ? `• *Reference Attached:* ${submittedBooking.imageName}` : ''}

Hi Tattoo Villa, I just scheduled an appointment request on your website. Please confirm artist availability!`;

    return `https://wa.me/${SITE_DATA.contact.delhi.whatsappNumber}?text=${encodeURIComponent(text)}`;
  };

  if (submittedBooking) {
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
            <span className="text-zinc-400">Tattoo Category:</span>
            <span className="text-zinc-200 font-medium">{submittedBooking.tattooType}</span>
          </div>
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-400">Preferred Date:</span>
            <span className="text-zinc-200 font-medium">{submittedBooking.date}</span>
          </div>
          <div className="flex justify-between border-b border-zinc-800 pb-2">
            <span className="text-zinc-400">Studio Location:</span>
            <span className="text-zinc-200 font-medium">Central Market, Lajpat Nagar II, Delhi</span>
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
            onClick={() => trackWhatsAppClick(SITE_DATA.contact.delhi.whatsappNumber, 'post_appointment_confirmation')}
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold transition-all shadow-lg hover:shadow-emerald-600/30 text-sm"
          >
            <MessageSquare className="w-5 h-5" />
            Fast-Track & Chat on WhatsApp
          </a>

          <a
            href={`tel:${SITE_DATA.contact.delhi.phones[0].raw}`}
            className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium transition-all text-sm border border-zinc-700"
          >
            <PhoneCall className="w-4 h-4 text-gold-400" />
            Call Studio Directly: {SITE_DATA.contact.delhi.phones[0].display}
          </a>
        </div>

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

      {/* Email & Tattoo Category */}
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
            placeholder="e.g. rohit@gmail.com"
            className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border ${
              errors.email ? 'border-rose-500' : 'border-zinc-700/80 focus:border-gold-500'
            } text-white placeholder-zinc-500 text-sm outline-none transition-colors`}
          />
          {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
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

      {/* Preferred Date & Placement */}
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

      {/* Tattoo Description */}
      <div>
        <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1.5">
          Tattoo Idea & Details <span className="text-gold-400">*</span>
        </label>
        <textarea
          name="description"
          rows={compact ? 2 : 3}
          value={formData.description}
          onChange={handleInputChange}
          placeholder="Describe your design vision, approximate dimensions, or whether this is a cover-up..."
          className={`w-full px-4 py-3 rounded-xl bg-charcoal-900 border ${
            errors.description ? 'border-rose-500' : 'border-zinc-700/80 focus:border-gold-500'
          } text-white placeholder-zinc-500 text-sm outline-none transition-colors resize-none`}
        ></textarea>
        {errors.description && <p className="text-rose-400 text-xs mt-1">{errors.description}</p>}
      </div>

      {/* Reference Image Upload */}
      <div>
        <label className="block text-xs uppercase tracking-wider text-zinc-300 font-semibold mb-1.5">
          Upload Reference Image (Optional)
        </label>
        <div className="relative border-2 border-dashed border-zinc-700/70 hover:border-gold-500/60 rounded-xl p-4 text-center cursor-pointer transition-colors bg-charcoal-900/50">
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          />
          {formData.imagePreview ? (
            <div className="flex items-center justify-center gap-3">
              <img
                src={formData.imagePreview}
                alt="Upload preview"
                className="w-12 h-12 object-cover rounded-lg border border-gold-500/50"
              />
              <div className="text-left">
                <p className="text-xs text-white font-medium truncate max-w-[200px]">{formData.imageName}</p>
                <span className="text-[11px] text-gold-400">Click to change image</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-1">
              <Upload className="w-6 h-6 text-zinc-400 mb-1" />
              <p className="text-xs text-zinc-300 font-medium">Click to select reference image or sketch</p>
              <p className="text-[11px] text-zinc-500">PNG, JPG, WEBP up to 10MB</p>
            </div>
          )}
        </div>
        {errors.image && <p className="text-rose-400 text-xs mt-1">{errors.image}</p>}
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
