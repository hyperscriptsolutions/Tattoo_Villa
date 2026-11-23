# Tattoo Villa — Complete Website Redesign & Lead Generation Engine

> **Award-Winning Creative Web Redesign for Tattoo Villa**  
> **Original Website:** [tattooartistindelhi.com](https://tattooartistindelhi.com/)  
> **Business:** Tattoo Villa (Central Market, Lajpat Nagar II, New Delhi)  
> **Aesthetic:** Dark Luxury, Editorial Typography, Hospital-Grade Clinical Trust, High-Converting Google Ads Infrastructure.

---

## 1. Overview of the Redesign

This project represents a complete, ground-up architectural and visual redesign of **Tattoo Villa**, transforming it from an outdated generic layout into an international-caliber, dark-luxury tattoo brand. 

Every single piece of genuine business data from the original site was retained and elevated:
- **Founders & Master Artists:** Harminder Singh (15+ Years) & Jaspreet Singh (10+ Years)
- **Authentic Google Reviews:** 4.9★ rating with verified customer testimonials and Google Maps contributor profiles (Mohan Tiwari, Suneha Rajput, shubham khatter, Shrishti Yadav, Arpana Arora, Nishant Kumar Sawhney, Maanya Arora, Faizy Siddiqui)
- **Verified Studio Awards:** Global Tattoo Convention (2020), National Tattoo Awards (2021), International Body Art Guild (2022)
- **Genuine Photography:** Over 56+ authentic studio tattoo images, real artist photography, and on-location studio interior shots downloaded and integrated locally into `/public/images/`.
- **Delhi Studio Address:** K100 B, 2nd Floor, Opposite Domino's Pizza, Central Market, Lajpat Nagar II, New Delhi 110024.
- **Melbourne Partner Branch:** Clearly separated and noted for international inquiries.

---

## 2. Key Pages & Routes Built

### Core Website Pages
- **Homepage (`/`)**:
  - Full-screen cinematic hero ("Your Story. Our Art. Permanent Expression.")
  - Trust & Experience counter (15+ Years, 4.9★ Google Rating, 18,000+ Tattoos, 100% Sterile)
  - Curated Tattoo Disciplines grid (8 core categories with individual links)
  - Featured Living Canvas portfolio masonry with filter pills and interactive Lightbox modal
  - The Tattoo Villa Story & Founders introduction
  - Meet Our Resident Master Artists with verified bios and quotes
  - Why Delhi Chooses Tattoo Villa (Hygiene, vegan inks, custom design, private suites)
  - Verified Google Reviews showcase with 4.9★ badge
  - Studio Experience with authentic interior photography (autoclave station, private rooms)
  - High-conversion inline appointment booking section with live validation and WhatsApp sync
  - Location, Google Maps embed, phone numbers, and business hours
- **About Us (`/about`)**: Full brand history, philosophy of sacred ink, founders' journey, milestones, and safety standards.
- **Our Artists (`/artists`)**: Dedicated master inker profiles for Harminder Singh & Jaspreet Singh, specializations, verified experience, quotes, and direct booking actions.
- **Portfolio Gallery (`/gallery`)**: Full filterable masonry catalog with 50+ genuine tattoo works, categories (Realism, Portrait, Sleeve, Animal, Religious, Minimal, Calligraphy, Custom), and Lightbox modal.
- **The Studio (`/studio`)**: Walkthrough of the Central Market facility, private consultation suites, and clinical sterilization manifesto.
- **Awards & Recognitions (`/awards`)**: Verified national and global convention achievements.
- **Tattoo Training Institute (`/training`)**: Comprehensive syllabus, modules (1 to 5), equipment starter kit, hands-on apprenticeship, and batch inquiry form.
- **Contact Us (`/contact`)**: Studio address, GPS map embed, metro walking directions, telephone contacts, WhatsApp button, opening hours, and consultation form.
- **Dedicated Service Pages (`/services/:categorySlug`)**:
  - `/services/portrait-tattoos`
  - `/services/realism-tattoos`
  - `/services/animal-tattoos`
  - `/services/religious-tattoos`
  - `/services/calligraphy-tattoos`
  - `/services/minimal-tattoos`
  - `/services/sleeve-tattoos`
  - `/services/custom-tattoos`
  - Each featuring high-res imagery, feature lists, category-specific gallery, FAQs with FAQ schema, and direct booking forms.

---

## 3. Google Ads Optimization (P0 Priority)

The website is engineered from the ground up as a **high-converting lead generation engine**:

### Dedicated Campaign Landing Hubs:
1. **`/landing/tattoo-artist-in-delhi`**: For queries searching for experienced/best tattoo artists in Delhi.
2. **`/landing/tattoo-studio-in-delhi`**: Focused on luxury studio environment, private rooms, and clinical sterility.
3. **`/landing/custom-tattoo-designs-delhi`**: For bespoke illustration, cover-up solutions, and 1-on-1 consultations.
4. **`/landing/portrait-tattoo-artist-delhi`**: Focused on photorealistic memorial portraits and family portraits.
5. **`/landing/minimal-fine-line-tattoos-delhi`**: For low-pain, single-needle (1RL), delicate botanical, and script tattoos.
6. **`/landing/religious-tattoos-delhi`**: For Shiva Trishul, Mahakal, Waheguru, and grammatically verified Sanskrit mantras.

### High-Conversion Elements:
- **Distraction-Free Funnel:** Dedicated landing pages remove dense navigation bars, keeping focus on the conversion headline, proof, and booking form.
- **Click-to-Call Phone Tracking:** Every `tel:` link dispatches a `phone_click` conversion event to Google Tag Manager and Google Ads.
- **WhatsApp Fast-Track:** Generates pre-formatted WhatsApp messages including the user's booking ID, selected category, name, and date.
- **Mobile Sticky Action Bar:** Persistent bottom action bar on mobile devices (<768px) with instant "Call Now", "WhatsApp", and "Book Slot" actions.
- **UTM Parameter Preservation:** `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, and `gclid` are automatically captured on landing, persisted across session navigation, and attached to lead submissions.

---

## 4. Google Ads & Analytics Tracking Setup

File: [`src/utils/analytics.js`](file:///p:/hyperscript%20work/Tattoo_Villa/src/utils/analytics.js)

```javascript
export const TRACKING_CONFIG = {
  GTM_ID: 'GTM-TATT00V1',               // Client GTM Container ID
  GA4_ID: 'G-TATT00VILLA',              // Client GA4 Measurement ID
  GOOGLE_ADS_ID: 'AW-1122334455',       // Client Google Ads Account ID
  ADS_CONVERSION_LABEL_APPOINTMENT: 'abcXYZ_Appointment',
  ADS_CONVERSION_LABEL_PHONE: 'abcXYZ_PhoneCall',
  ADS_CONVERSION_LABEL_WHATSAPP: 'abcXYZ_WhatsApp',
};
```

### Pre-Configured Trackable Events:
- `phone_click` — Fired when any phone link is clicked.
- `whatsapp_click` — Fired when WhatsApp CTA buttons are clicked.
- `appointment_form_submit` — Fired when the consultation form passes validation and is submitted.
- `conversion` — Google Ads transaction event with initial lead value attribution.
- `email_click` — Fired when studio email is clicked.

---

## 5. Technical SEO & Schema Verification

- **Dynamic Meta & Social Cards:** Managed via `SEOHead.jsx` across all routes.
- **JSON-LD Structured Data:**
  - `TattooParlor` / `LocalBusiness` schema with exact coordinates (`28.577478, 77.241088`), address in Lajpat Nagar II, telephone, price range, opening hours, and authentic 4.9★ rating.
  - `BreadcrumbList` schema on all secondary and service routes.
  - `FAQPage` schema on all pages containing FAQs.
- **Sitemap & Robots:**
  - `public/sitemap.xml` generated with all 21 clean URLs.
  - `public/robots.txt` configured with sitemap declaration.

---

## 6. How to Run Locally & Build

```bash
# 1. Install dependencies
npm install

# 2. Run local development server (Vite)
npm run dev

# 3. Build for production (optimized chunks with code splitting)
npm run build

# 4. Preview the production build
npm run preview
```
