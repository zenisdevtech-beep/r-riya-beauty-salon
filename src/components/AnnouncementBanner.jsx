import React, { useState, useEffect } from 'react';
import { Sparkles, Phone, Clock, X, Heart } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import { getSalonCurrentStatus } from '../utils/timeHelper';

export default function AnnouncementBanner({ onOpenBooking }) {
  const [visible, setVisible] = useState(true);
  const [salonStatus, setSalonStatus] = useState(getSalonCurrentStatus());

  useEffect(() => {
    const timer = setInterval(() => {
      setSalonStatus(getSalonCurrentStatus());
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  if (!visible) return null;

  return (
    <aside aria-label="Special Offers and Salon Hours" className="relative bg-gradient-to-r from-blush-600 via-pink-500 to-roseGold-500 text-white text-xs sm:text-sm py-2 px-3 shadow-sm z-50 overflow-hidden">
      {/* Background sparkling micro-dots */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.25),transparent_50%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 relative z-10">
        {/* Left: Highlight message with Sparkles */}
        <div className="flex items-center gap-2 flex-1 justify-center sm:justify-start overflow-hidden">
          <span className="hidden sm:inline-flex items-center justify-center p-1 bg-white/20 rounded-full animate-heartbeat">
            <Heart className="w-3.5 h-3.5 fill-current text-white" />
          </span>
          <span className="font-medium truncate">
            <strong className="font-semibold text-white">Girls Pamper Week:</strong> Get Flat 20% OFF on Hair Botox & Hydra Facials!
          </span>
          <button 
            onClick={onOpenBooking}
            className="hidden md:inline-flex items-center gap-1 underline underline-offset-2 hover:text-blush-100 font-semibold cursor-pointer ml-1 transition-colors"
          >
            Claim Offer &rarr;
          </button>
        </div>

        {/* Right: Live Open Status + Call Link */}
        <div className="hidden lg:flex items-center gap-3 text-xs shrink-0">
          <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full text-white font-medium border border-white/20">
            <span className={`w-2 h-2 rounded-full ${salonStatus.isOpen ? 'bg-emerald-300 animate-pulse' : 'bg-amber-300'}`} />
            <span>{salonStatus.statusText.split('•')[0]}</span>
          </div>

          <a 
            href={`tel:${SALON_DATA.phoneFormatted.replace(/\s+/g, '')}`}
            className="flex items-center gap-1 bg-white text-berry-900 hover:bg-blush-50 px-2.5 py-1 rounded-full font-semibold transition-all shadow-sm"
          >
            <Phone className="w-3 h-3 text-blush-600" />
            <span>{SALON_DATA.phoneFormatted}</span>
          </a>
        </div>

        {/* Dismiss Button */}
        <button 
          onClick={() => setVisible(false)}
          className="p-1 hover:bg-white/20 rounded-full transition-colors text-white/80 hover:text-white shrink-0 ml-1"
          aria-label="Close banner"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </aside>
  );
}
