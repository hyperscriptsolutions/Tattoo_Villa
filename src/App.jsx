import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';
import AppointmentModal from './components/AppointmentModal';
import LightboxModal from './components/LightboxModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ArtistsPage from './pages/ArtistsPage';
import GalleryPage from './pages/GalleryPage';
import StudioPage from './pages/StudioPage';
import AwardsPage from './pages/AwardsPage';
import TrainingPage from './pages/TrainingPage';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import LandingPage from './pages/LandingPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsPage from './pages/TermsPage';
import NotFoundPage from './pages/NotFoundPage';
import { captureUtmParameters } from './utils/analytics';

export default function App() {
  const [appointmentModal, setAppointmentModal] = useState({
    isOpen: false,
    category: 'Custom Tattoos'
  });

  const [lightbox, setLightbox] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0
  });

  const location = useLocation();

  // Capture Google Ads UTM and GCLID on first mount and URL change
  useEffect(() => {
    captureUtmParameters();
  }, [location.search]);

  // Handle smooth scroll when navigating with hash (e.g. /#reviews)
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.hash]);

  const handleOpenAppointmentModal = (category = 'Custom Tattoos') => {
    setAppointmentModal({
      isOpen: true,
      category
    });
  };

  const handleCloseAppointmentModal = () => {
    setAppointmentModal(prev => ({ ...prev, isOpen: false }));
  };

  const handleOpenLightbox = (images, index = 0) => {
    setLightbox({
      isOpen: true,
      images,
      currentIndex: index
    });
  };

  const handleCloseLightbox = () => {
    setLightbox(prev => ({ ...prev, isOpen: false }));
  };

  const handlePrevLightbox = () => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.images.length) % prev.images.length
    }));
  };

  const handleNextLightbox = () => {
    setLightbox(prev => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.images.length
    }));
  };

  // Google Ads landing pages use custom streamlined header/footer for conversion optimization
  const isLandingPage = location.pathname.startsWith('/landing/');

  return (
    <div className="flex flex-col min-h-screen bg-charcoal-950 text-zinc-100 selection:bg-gold-500 selection:text-black">
      {!isLandingPage && (
        <Navbar onOpenAppointmentModal={handleOpenAppointmentModal} />
      )}

      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onOpenAppointmentModal={handleOpenAppointmentModal}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/about"
            element={
              <AboutPage onOpenAppointmentModal={handleOpenAppointmentModal} />
            }
          />
          <Route
            path="/artists"
            element={
              <ArtistsPage
                onOpenAppointmentModal={handleOpenAppointmentModal}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/gallery"
            element={
              <GalleryPage
                onOpenAppointmentModal={handleOpenAppointmentModal}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/studio"
            element={
              <StudioPage
                onOpenAppointmentModal={handleOpenAppointmentModal}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/awards"
            element={
              <AwardsPage
                onOpenAppointmentModal={handleOpenAppointmentModal}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/training"
            element={
              <TrainingPage onOpenAppointmentModal={handleOpenAppointmentModal} />
            }
          />
          <Route
            path="/reviews"
            element={
              <ReviewsPage onOpenAppointmentModal={handleOpenAppointmentModal} />
            }
          />
          <Route
            path="/contact"
            element={
              <ContactPage onOpenAppointmentModal={handleOpenAppointmentModal} />
            }
          />
          <Route
            path="/services/:categorySlug"
            element={
              <ServiceDetailPage
                onOpenAppointmentModal={handleOpenAppointmentModal}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route
            path="/landing/:campaignSlug"
            element={
              <LandingPage
                onOpenAppointmentModal={handleOpenAppointmentModal}
                onOpenLightbox={handleOpenLightbox}
              />
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms-and-conditions" element={<TermsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      {!isLandingPage && (
        <Footer onOpenAppointmentModal={handleOpenAppointmentModal} />
      )}

      {/* Persistent Mobile Bottom Action Bar */}
      <StickyMobileBar onOpenAppointmentModal={handleOpenAppointmentModal} />

      {/* Global Interactive Modals */}
      <AppointmentModal
        isOpen={appointmentModal.isOpen}
        onClose={handleCloseAppointmentModal}
        initialCategory={appointmentModal.category}
      />

      <LightboxModal
        isOpen={lightbox.isOpen}
        images={lightbox.images}
        currentIndex={lightbox.currentIndex}
        onClose={handleCloseLightbox}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />
    </div>
  );
}
