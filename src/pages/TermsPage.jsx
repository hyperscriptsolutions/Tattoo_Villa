import React from 'react';
import SEOHead from '../components/SEOHead';

export default function TermsPage() {
  return (
    <div className="py-12 sm:py-20 bg-charcoal-950 text-zinc-300">
      <SEOHead
        title="Terms & Conditions | Tattoo Villa Delhi"
        description="Studio terms of service, age requirements, and client consent policies for Tattoo Villa Delhi."
        canonicalUrl="/terms-and-conditions"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-5xl font-serif font-black text-white mb-6">
          Terms & Conditions
        </h1>
        <p className="text-xs text-zinc-500 mb-8">Last Updated: February 2025</p>

        <div className="space-y-6 text-sm leading-relaxed text-zinc-400">
          <section>
            <h2 className="text-lg font-bold text-white mb-2">1. Age Requirement</h2>
            <p>
              In accordance with ethical tattooing practices, clients must be at least 18 years of age to receive a permanent tattoo. A valid government photo ID (Aadhaar, Passport, or Driver's License) may be requested prior to inking. Minors (16+) require written consent and physical presence of a parent or legal guardian.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">2. Health & Medical Disclosure</h2>
            <p>
              Clients must disclose any relevant medical conditions, including but not limited to blood disorders, diabetes, epilepsy, skin conditions (eczema, psoriasis at the site), allergies (latex, pigment), or pregnancy/nursing. Our artists reserve the right to decline or postpone service if inking poses health risks.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">3. Custom Design Ownership</h2>
            <p>
              All original tattoo sketches, digital stencils, and artwork created by Tattoo Villa artists remain the intellectual property of Tattoo Villa and the respective artist. Custom artwork is tailored uniquely for the client and will not be replicated on other clients.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">4. Aftercare Compliance</h2>
            <p>
              The ultimate longevity, crispness, and healing outcome of your tattoo depend significantly on following our provided aftercare regimen. Tattoo Villa is not liable for healing issues arising from swimming, direct sun exposure, peeling, or non-compliance with instructions.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-white mb-2">5. Appointments & Rescheduling</h2>
            <p>
              We appreciate at least 24 hours advance notice if you need to reschedule your appointment slot so that other clients on our waitlist may be accommodated.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
