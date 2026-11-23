import React from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { SITE_DATA } from '../data/siteData';
import { trackPhoneCall, trackWhatsAppClick } from '../utils/analytics';

export default function StickyMobileBar({ onOpenAppointmentModal }) {
  const primaryPhone = SITE_DATA.contact.delhi.phones[0];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-charcoal-950/95 backdrop-blur-lg border-t border-zinc-800 px-3 py-2.5 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Direct Call Link */}
        <a
          href={`tel:${primaryPhone.raw}`}
          onClick={() => trackPhoneCall(primaryPhone.raw, 'sticky_mobile_bar')}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-200 active:scale-95 transition-all"
        >
          <Phone className="w-4 h-4 text-gold-400 mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight">Call Now</span>
        </a>

        {/* Direct WhatsApp Link */}
        <a
          href={`https://wa.me/${SITE_DATA.contact.delhi.whatsappNumber}?text=Hi%20Tattoo%20Villa%2C%20I%20am%20interested%20in%20getting%20a%20tattoo.%20Please%20share%20details.`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick(SITE_DATA.contact.delhi.whatsappNumber, 'sticky_mobile_bar')}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 active:scale-95 transition-all"
        >
          <MessageSquare className="w-4 h-4 text-emerald-400 mb-0.5" />
          <span className="text-[11px] font-semibold tracking-tight">WhatsApp</span>
        </a>

        {/* Book Consultation Modal Trigger */}
        <button
          onClick={() => onOpenAppointmentModal()}
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gold-metallic text-black active:scale-95 transition-all shadow-md"
        >
          <Calendar className="w-4 h-4 text-black mb-0.5" />
          <span className="text-[11px] font-bold tracking-tight">Book Slot</span>
        </button>
      </div>
    </div>
  );
}
