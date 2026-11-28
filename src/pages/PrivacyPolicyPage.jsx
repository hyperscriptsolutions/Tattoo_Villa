import React from 'react';
import SEOHead from '../components/SEOHead';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 sm:py-20 bg-charcoal-950 text-zinc-300">
      <SEOHead
        title="Privacy Policy | Tattoo Villa Delhi"
        description="Privacy policy and data protection guidelines for Tattoo Villa Delhi studio clients."
        canonicalUrl="/privacy-policy"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl font-serif font-black text-white mb-6">
          Privacy Policy
        </h1>
        <p className="text-xs text-zinc-500 mb-8">Last Updated: February 2025</p>

        <div className="space-y-6 text-sm leading-relaxed text-zinc-400">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">1. Information We Collect</h2>
            <p>
              When you submit an appointment consultation request via our website, telephone, or WhatsApp, we collect information such as your name, mobile phone number, email address, preferred appointment date, tattoo concept details, and reference images.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">2. How We Use Your Information</h2>
            <p>
              Your contact details are strictly used to schedule consultations, review design feasibility, confirm availability with our artists (Harminder Singh or Jaspreet Singh), and deliver aftercare guidance. We do not sell, rent, or trade your personal information with third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">3. Photography & Portfolio Consent</h2>
            <p>
              Tattoo Villa takes immense pride in original artwork. With your voluntary verbal or written consent, healed or freshly completed tattoos may be photographed for our website portfolio or official social media channels. We strictly blur or crop any identifying facial or personal markers if requested.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">4. Analytics & Google Ads Tracking</h2>
            <p>
              Our website uses privacy-conscious cookies and tracking tags (such as Google Tag Manager, Google Analytics 4, and Google Ads Conversion Tracking) to understand website traffic, measure campaign performance, and improve user experience.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">5. Contact Us</h2>
            <p>
              If you have any questions regarding your data privacy, please reach out to us at:
              <br />
              <strong className="text-white">Email:</strong> tattoovilla1@gmail.com
              <br />
              <strong className="text-white">Address:</strong> K100 B, 2nd Floor, Central Market, Lajpat Nagar II, New Delhi 110024
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
