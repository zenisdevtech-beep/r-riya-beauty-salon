import React from 'react';
import { Heart, Sparkles, Shield, Award, Smile, Coffee, Check, Users, MapPin } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export default function AboutPage({ onOpenBooking }) {
  return (
    <div className="py-10 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-100 border border-blush-200 text-blush-800 text-xs font-bold tracking-wide uppercase">
            <Heart className="w-3.5 h-3.5 fill-current text-blush-600" />
            <span>Our Story & Philosophy</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-berry-950 tracking-tight">
            Meet Riya & The <span className="text-gradient-pink italic font-serif">R'riya Sanctuary</span>
          </h1>

          <p className="text-berry-900/75 text-sm sm:text-base leading-relaxed">
            Founded with love in Nizampura, Vadodara, to give every woman a luxurious, hygienic, and completely private space to recharge and shine.
          </p>
        </div>

        {/* Founder Story Big Card */}
        <div className="glass-card rounded-[2.5rem] p-6 sm:p-12 border border-blush-200 shadow-card-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Photo */}
            <div className="lg:col-span-5 text-center">
              <div className="relative mx-auto max-w-xs sm:max-w-sm">
                <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-blush-400 via-pink-300 to-roseGold-400 opacity-60 blur-md" />
                
                <div className="relative rounded-[1.8rem] overflow-hidden border-4 border-white shadow-xl bg-blush-50">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                    alt="Riya - Founder of R Riya Beauty Salon"
                    className="w-full h-80 sm:h-96 object-cover object-top"
                  />
                  
                  <div className="p-4 bg-white text-center border-t border-blush-100">
                    <p className="font-serif font-bold text-xl text-berry-950">Riya</p>
                    <p className="text-xs text-blush-600 font-semibold">Founder, Lead Stylist & Bridal Director</p>
                    <p className="text-[11px] text-berry-900/50 mt-0.5">R Riya Beauty Salon • Nizampura</p>
                  </div>
                </div>

                <div className="absolute -bottom-3 -right-2 bg-blush-600 text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5">
                  <span>💕</span>
                  <span>Girl-Owned & Operated</span>
                </div>
              </div>
            </div>

            {/* Right Story */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-berry-950 leading-tight">
                "Self-care isn't a luxury—it's an essential ritual for your confidence."
              </h2>

              <div className="space-y-3.5 text-berry-900/80 text-sm leading-relaxed">
                <p>
                  When I started <strong>R Riya Beauty Salon</strong> at Crossroads in Nizampura, I noticed a huge gap in Vadodara's salon scene. Many large commercial salons felt intimidating, rushed clients through treatments, or constantly pushed products you didn't need.
                </p>
                <p>
                  I wanted to build something different: an intimate, ladies-only sanctuary where you're greeted with a smile and a warm cup of herbal tea, where your stylist actually listens to your hair goals, and where hygiene is never compromised.
                </p>
                <p>
                  Today, seeing over <strong>25,000+ happy clients</strong> and holding a <strong>4.9 ★ rating from 2,939+ women</strong> is the greatest reward. Every day, my team and I pour our hearts into making you look and feel your absolute best.
                </p>
              </div>

              <div className="pt-2">
                <p className="font-script text-3xl text-blush-600 leading-none">Riya Patel</p>
                <p className="text-[11px] text-berry-900/50 mt-1">Founder, R Riya Beauty Salon</p>
              </div>
            </div>

          </div>
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-6 rounded-3xl bg-blush-50/60 border border-blush-200 text-center space-y-2.5">
            <div className="w-12 h-12 rounded-2xl bg-blush-100 text-blush-600 flex items-center justify-center mx-auto text-xl">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-base text-berry-950">100% Ladies Only</h3>
            <p className="text-xs text-berry-900/70 leading-relaxed">A strictly female-only staff and client space where you can relax completely without hesitation.</p>
          </div>

          <div className="p-6 rounded-3xl bg-roseGold-50/60 border border-roseGold-200 text-center space-y-2.5">
            <div className="w-12 h-12 rounded-2xl bg-roseGold-100 text-roseGold-600 flex items-center justify-center mx-auto text-xl">
              <Smile className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-base text-berry-950">Zero Pushy Sales</h3>
            <p className="text-xs text-berry-900/70 leading-relaxed">Honest recommendations. We only suggest treatments that truly benefit your hair and skin texture.</p>
          </div>

          <div className="p-6 rounded-3xl bg-pink-50/60 border border-pink-200 text-center space-y-2.5">
            <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mx-auto text-xl">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-base text-berry-950">World Brands Only</h3>
            <p className="text-xs text-berry-900/70 leading-relaxed">Imported Italian Nashi Argan, Olaplex, O3+ Professional, and Rica liposoluble waxing formulas.</p>
          </div>

          <div className="p-6 rounded-3xl bg-amber-50/60 border border-amber-200 text-center space-y-2.5">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto text-xl">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-base text-berry-950">Warm Hospitality</h3>
            <p className="text-xs text-berry-900/70 leading-relaxed">Complimentary rose green tea, relaxing background music, and educated, courteous therapists.</p>
          </div>
        </div>

        {/* Salon Amenities Checklist */}
        <div className="bg-[#FFFDFE] p-8 rounded-3xl border border-blush-200 shadow-card-soft">
          <h3 className="font-serif font-bold text-xl text-berry-950 mb-4 text-center">
            Salon Amenities & Comforts
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-berry-900/85">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blush-600" />
              <span>Full Air-Conditioned Comfort</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blush-600" />
              <span>Ground Floor Easy Access</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blush-600" />
              <span>Ample Free Parking</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blush-600" />
              <span>UV Sterilized Hair Tools</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blush-600" />
              <span>Private VIP Bridal Suite</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blush-600" />
              <span>Single-Use Waxing Sheets</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blush-600" />
              <span>High-Speed Guest Wi-Fi</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-blush-600" />
              <span>Fresh Herbal Refreshments</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
