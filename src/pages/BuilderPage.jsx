import React from 'react';
import GlowCalculator from '../components/GlowCalculator';
import { Gift, Sparkles, Heart } from 'lucide-react';

export default function BuilderPage({ onOpenBooking }) {
  return (
    <div className="py-10 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-100 border border-blush-200 text-blush-800 text-xs font-bold tracking-wide uppercase">
            <Gift className="w-3.5 h-3.5 text-blush-600" />
            <span>Interactive Custom Package Tool</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-berry-950 tracking-tight">
            Design Your <span className="text-gradient-pink italic font-serif">Dream Salon Day</span>
          </h1>

          <p className="text-berry-900/75 text-sm sm:text-base leading-relaxed">
            Customize your own pamper combination. Mix haircut, hair botox, hydra facial, nails, and wax to unlock up to <strong>15% bundle discounts</strong> and complimentary scalp massages!
          </p>
        </div>

        {/* Glow Calculator Component */}
        <GlowCalculator onOpenBookingWithCustom={(summary, price) => onOpenBooking(summary, price)} />

      </div>
    </div>
  );
}
