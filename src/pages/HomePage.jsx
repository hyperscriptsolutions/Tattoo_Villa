import React from 'react';
import SEOHead from '../components/SEOHead';
import HeroSection from '../components/home/HeroSection';
import TrustSection from '../components/home/TrustSection';
import ServicesGrid from '../components/home/ServicesGrid';
import PortfolioMasonry from '../components/home/PortfolioMasonry';
import AboutSection from '../components/home/AboutSection';
import ArtistsSection from '../components/home/ArtistsSection';
import WhyChooseUs from '../components/home/WhyChooseUs';
import ReviewsSection from '../components/home/ReviewsSection';
import StudioExperience from '../components/home/StudioExperience';
import AppointmentSection from '../components/home/AppointmentSection';
import ContactSection from '../components/home/ContactSection';
import { SITE_DATA } from '../data/siteData';

export default function HomePage({ onOpenAppointmentModal, onOpenLightbox }) {
  const homeFaqs = [
    {
      q: "Where is Tattoo Villa located in Delhi?",
      a: "Tattoo Villa is located at K100 B, 2nd Floor, Opposite Domino's Pizza, Central Market, Lajpat Nagar II, New Delhi. We are 3 minutes walking from Lajpat Nagar Metro Station."
    },
    {
      q: "Who are the head tattoo artists at Tattoo Villa?",
      a: "Our studio is led by master tattoo artists Harminder Singh (15+ years experience, realism & portraits) and Jaspreet Singh (7+ years experience, fine-line, Japanese & calligraphy)."
    },
    {
      q: "How does Tattoo Villa ensure safety and hygiene?",
      a: "We maintain hospital-grade sterilization standards: 100% single-use disposable needle cartridges opened before your eyes, medical autoclave sterilization, certified non-toxic vegan inks, and complete virucidal barrier wrapping."
    },
    {
      q: "Can I get a custom tattoo designed from my ideas?",
      a: "Yes! Every tattoo at Tattoo Villa is uniquely illustrated for your body flow. We provide 1-on-1 digital concept consultations and live previews on your skin."
    }
  ];

  return (
    <div>
      <SEOHead
        title="Tattoo Villa | Award-Winning Best Tattoo Studio & Artists in Delhi"
        description="Experience world-class custom tattooing at Tattoo Villa Delhi. 15+ years mastery, 4.9★ Google rating. Master artists Harminder & Jaspreet Singh in Central Market, Lajpat Nagar II. Book free consultation."
        canonicalUrl="/"
        faqs={homeFaqs}
      />

      <HeroSection onOpenAppointmentModal={onOpenAppointmentModal} />
      <TrustSection />
      <ServicesGrid
        onOpenAppointmentModal={onOpenAppointmentModal}
        onOpenLightbox={onOpenLightbox}
      />
      <PortfolioMasonry onOpenLightbox={onOpenLightbox} />
      <AboutSection onOpenAppointmentModal={onOpenAppointmentModal} />
      <ArtistsSection onOpenAppointmentModal={onOpenAppointmentModal} />
      <WhyChooseUs onOpenAppointmentModal={onOpenAppointmentModal} />
      <ReviewsSection />
      <StudioExperience onOpenLightbox={onOpenLightbox} />
      <AppointmentSection />
      <ContactSection />
    </div>
  );
}
