/**
 * Google Ads & Analytics Tracking Layer for Tattoo Villa
 * Compatible with Google Tag Manager, GA4, and Google Ads Conversion Tracking.
 */

// Tracking IDs Configuration (Client can replace with their actual production IDs)
export const TRACKING_CONFIG = {
  GTM_ID: 'GTM-TATT00V1',               // Replace with Google Tag Manager container ID
  GA4_ID: 'G-TATT00VILLA',              // Replace with GA4 Measurement ID
  GOOGLE_ADS_ID: 'AW-1122334455',       // Replace with Google Ads Account ID
  ADS_CONVERSION_LABEL_APPOINTMENT: 'abcXYZ_Appointment', // Conversion Action Label
  ADS_CONVERSION_LABEL_PHONE: 'abcXYZ_PhoneCall',
  ADS_CONVERSION_LABEL_WHATSAPP: 'abcXYZ_WhatsApp',
};

// Capture and persist UTM & GCLID parameters
export const captureUtmParameters = () => {
  if (typeof window === 'undefined') return {};
  
  try {
    const urlParams = new URLSearchParams(window.location.search);
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];
    const currentUtms = {};
    let found = false;

    utmKeys.forEach(key => {
      const val = urlParams.get(key);
      if (val) {
        currentUtms[key] = val;
        found = true;
      }
    });

    if (found) {
      sessionStorage.setItem('tattoo_villa_utm', JSON.stringify(currentUtms));
      return currentUtms;
    } else {
      const saved = sessionStorage.getItem('tattoo_villa_utm');
      return saved ? JSON.parse(saved) : {};
    }
  } catch (e) {
    console.warn('Could not access storage for UTM parameters', e);
    return {};
  }
};

export const getStoredUtmParameters = () => {
  try {
    const saved = sessionStorage.getItem('tattoo_villa_utm');
    return saved ? JSON.parse(saved) : {};
  } catch {
    return {};
  }
};

/**
 * Dispatch event to window.dataLayer for GTM / GA4 / Google Ads
 */
export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window === 'undefined') return;

  const utms = getStoredUtmParameters();
  const payload = {
    event: eventName,
    page_location: window.location.href,
    page_path: window.location.pathname,
    timestamp: new Date().toISOString(),
    ...utms,
    ...eventParams
  };

  // Push to GTM dataLayer
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  // If gtag is available directly on window
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, eventParams);
  }

  // Developer feedback in development mode
  if (process.env.NODE_ENV !== 'production') {
    console.log(`[Google Ads / Analytics Track]: ${eventName}`, payload);
  }
};

// Convenience helpers
export const trackPhoneCall = (phoneNumber, locationLabel = 'general') => {
  trackEvent('phone_click', {
    phone_number: phoneNumber,
    click_location: locationLabel,
    send_to: `${TRACKING_CONFIG.GOOGLE_ADS_ID}/${TRACKING_CONFIG.ADS_CONVERSION_LABEL_PHONE}`
  });
};

export const trackWhatsAppClick = (phoneNumber, intent = 'general_enquiry') => {
  trackEvent('whatsapp_click', {
    phone_number: phoneNumber,
    chat_intent: intent,
    send_to: `${TRACKING_CONFIG.GOOGLE_ADS_ID}/${TRACKING_CONFIG.ADS_CONVERSION_LABEL_WHATSAPP}`
  });
};

export const trackAppointmentSubmit = (formData) => {
  trackEvent('appointment_form_submit', {
    tattoo_category: formData.tattooType,
    preferred_date: formData.date,
    has_reference_image: !!formData.imageName,
    lead_name: formData.name,
    lead_phone: formData.phone
  });
};

export const trackAppointmentConfirmed = (bookingId, details = {}) => {
  trackEvent('conversion', {
    send_to: `${TRACKING_CONFIG.GOOGLE_ADS_ID}/${TRACKING_CONFIG.ADS_CONVERSION_LABEL_APPOINTMENT}`,
    transaction_id: bookingId,
    value: 500.0, // Typical initial consultation value attribution
    currency: 'INR',
    ...details
  });
};

export const trackEmailClick = (email) => {
  trackEvent('email_click', { email_address: email });
};
