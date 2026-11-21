import React from 'react';
import { Phone, MessageCircle, Sparkles, Navigation, Calendar } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export default function MobileBottomBar({ onOpenBooking }) {
  return (
    <aside aria-label="Quick Actions" className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-blush-200 py-2 px-3 sm:px-6 md:hidden shadow-[0_-4px_20px_rgba(236,72,153,0.15)]">
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        
        {/* Call Button */}
        <a
          href={`tel:${SALON_DATA.phoneFormatted.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center p-1.5 text-berry-900/80 hover:text-blush-600 transition-colors flex-1"
          aria-label="Call salon"
        >
          <div className="w-8 h-8 rounded-full bg-blush-50 flex items-center justify-center text-blush-600">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-semibold mt-0.5">Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={`https://wa.me/${SALON_DATA.whatsapp}?text=Hi%20Riya!%20I%20would%20like%20to%20book%20a%20salon%20appointment%20in%20Nizampura.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 text-berry-900/80 hover:text-emerald-600 transition-colors flex-1"
          aria-label="WhatsApp chat"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-semibold mt-0.5">WhatsApp</span>
        </a>

        {/* Primary Book Pamper Button */}
        <button
          onClick={onOpenBooking}
          className="flex-[2] py-2.5 px-3 rounded-full bg-gradient-to-r from-blush-600 to-pink-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-pink-soft animate-pulse-glow"
        >
          <Sparkles className="w-3.5 h-3.5 text-pink-200" />
          <span>Book Pamper</span>
        </button>

        {/* Directions Button */}
        <a
          href={SALON_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 text-berry-900/80 hover:text-blush-600 transition-colors flex-1"
          aria-label="Google Maps directions"
        >
          <div className="w-8 h-8 rounded-full bg-blush-50 flex items-center justify-center text-blush-600">
            <Navigation className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-semibold mt-0.5">Map</span>
        </a>

      </div>
    </aside>
  );
}
