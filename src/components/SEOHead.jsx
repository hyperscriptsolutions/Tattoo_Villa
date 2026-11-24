import React, { useEffect } from 'react';
import { SITE_DATA } from '../data/siteData';

export default function SEOHead({
  title,
  description,
  canonicalUrl,
  ogImage = '/images/studio/IMG_9200-1024x768.jpg',
  faqs = [],
  breadcrumbs = [],
  type = 'website'
}) {
  const fullTitle = title.includes('Tattoo Villa') ? title : `${title} | Tattoo Villa Delhi`;
  const fullCanonical = canonicalUrl ? `https://tattooartistindelhi.com${canonicalUrl}` : 'https://tattooartistindelhi.com/';

  useEffect(() => {
    // Set document title
    document.title = fullTitle;

    // Update meta tags
    const updateMeta = (name, content, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement('meta');
        if (isProperty) tag.setAttribute('property', name);
        else tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', description, true);
    updateMeta('og:url', fullCanonical, true);
    updateMeta('og:image', ogImage.startsWith('http') ? ogImage : `https://tattooartistindelhi.com${ogImage}`, true);
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage.startsWith('http') ? ogImage : `https://tattooartistindelhi.com${ogImage}`);

    // Update canonical link
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', fullCanonical);

    // Inject JSON-LD Schema
    const schemaId = 'dynamic-seo-schema';
    let scriptTag = document.getElementById(schemaId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const schemas = [
      {
        "@context": "https://schema.org",
        "@type": "TattooParlor",
        "@id": "https://tattooartistindelhi.com/#tattooparlor",
        "name": SITE_DATA.brand.name,
        "image": "https://tattooartistindelhi.com/images/branding/tattoo-villa-logo.png",
        "url": "https://tattooartistindelhi.com",
        "telephone": SITE_DATA.contact.delhi.phones[0].raw,
        "email": SITE_DATA.contact.delhi.email,
        "priceRange": "₹₹₹",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": SITE_DATA.contact.delhi.address,
          "addressLocality": "Lajpat Nagar II, New Delhi",
          "addressRegion": "Delhi",
          "postalCode": SITE_DATA.contact.delhi.postalCode,
          "addressCountry": "IN"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 28.577478,
          "longitude": 77.241088
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "11:00",
            "closes": "21:30"
          }
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1776",
          "bestRating": "5",
          "worstRating": "1"
        }
      }
    ];

    if (breadcrumbs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": crumb.name,
          "item": `https://tattooartistindelhi.com${crumb.path}`
        }))
      });
    }

    if (faqs.length > 0) {
      schemas.push({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      });
    }

    scriptTag.text = JSON.stringify(schemas);

    // Scroll to top on route change only if no hash anchor is present
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [fullTitle, description, fullCanonical, ogImage, JSON.stringify(faqs), JSON.stringify(breadcrumbs)]);

  return null;
}
