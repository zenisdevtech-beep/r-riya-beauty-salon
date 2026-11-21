import React from 'react';
import { Crown, Sparkles, Check, Heart, Calendar, Phone, MessageCircle, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export default function BridalPage({ onOpenBooking }) {
  const bridalPackages = [
    {
      id: "royal-hd",
      title: "Royal HD Bridal Makeover",
      tagline: "Riya’s signature Gujarati & modern bridal look",
      price: "₹11,999",
      originalPrice: "₹16,000",
      badge: "Most Loved 👑",
      popular: true,
      features: [
        "High-Definition long-wear sweat-proof base",
        "Custom 3D mink eyelashes & contoured eye art",
        "Designer bridal updo with real floral setting",
        "Traditional Panetar/Gharchola or lehenga draping",
        "Jewelry setting, maang tikka & kamarbandh pinning",
        "Complimentary touch-up kit for reception night"
      ]
    },
    {
      id: "airbrush-celebrity",
      title: "Airbrush Celebrity Bridal Look",
      tagline: "Ultra-weightless, poreless, camera-ready bridal finish",
      price: "₹14,999",
      originalPrice: "₹19,000",
      badge: "Celebrity Touch 🌟",
      popular: false,
      features: [
        "Temptu International Airbrush silicone base",
        "16+ hour water-resistant & tear-proof longevity",
        "Intricate bridal hairstyle with luxury hair accessories",
        "Double dupatta draping & veil styling",
        "Full body collarbone & back luminescence shimmer",
        "Includes complimentary bridal trial session"
      ]
    },
    {
      id: "engagement-sangeet",
      title: "Engagement / Sangeet Glam",
      tagline: "Luminous glass skin, cut-crease shimmer & Hollywood waves",
      price: "₹4,999",
      originalPrice: "₹7,000",
      badge: "Party Glamour ✨",
      popular: false,
      features: [
        "Air-touch HD base with soft glam shimmer",
        "Smoky or rose-gold foil cut-crease eyes",
        "Hollywood waves, messy romantic bun, or textured braid",
        "Saree or lehenga draping assistance",
        "Custom eyelashes & lip contouring"
      ]
    },
    {
      id: "pre-bridal-glow",
      title: "30-Day Pre-Bridal Transformation",
      tagline: "Complete head-to-toe skin & hair rejuvenation",
      price: "₹9,999",
      originalPrice: "₹14,500",
      badge: "3-Sitting Plan 💍",
      popular: true,
      features: [
        "2x 7-Step Clinical Hydra Facials with cryo-dome",
        "1x Full Body Rica Brazilian Liposoluble waxing & polish",
        "Luxury Hair Botox or Keratin deep fiber seal",
        "Chrome Gel Nail Extensions with 3D nail art",
        "Champagne & Rose Petal deluxe foot pedicure"
      ]
    }
  ];

  return (
    <div className="py-10 sm:py-16 bg-gradient-to-b from-[#FFF5F8] via-[#FDF0F4] to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bridal Hero */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-roseGold-300 text-roseGold-800 text-xs font-bold tracking-wide uppercase shadow-sm">
            <Crown className="w-4 h-4 text-roseGold-500" />
            <span>R'riya Bridal Studio • Nizampura, Vadodara</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-berry-950 tracking-tight leading-tight">
            Your Fairytale <span className="text-gradient-pink italic font-serif">Bridal Makeover</span>
          </h1>

          <p className="text-berry-900/75 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From the sacred morning pheres to the glittering reception night, step into your special day with effortless royalty, grace, and confidence.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onOpenBooking('Royal HD Bridal Makeover')}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-roseGold-600 via-blush-600 to-pink-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Bridal Consultation</span>
            </button>

            <a
              href={`https://wa.me/${SALON_DATA.whatsapp}?text=Hi%20Riya!%20I%20am%20a%20bride-to-be%20in%20Vadodara%20and%20would%20love%20to%20consult%20about%20bridal%20dates.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white border border-roseGold-300 text-berry-900 font-semibold text-sm hover:bg-roseGold-50/50 transition-colors flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Bridal Team</span>
            </a>
          </div>
        </div>

        {/* 4 Pillars of R'riya Brides */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          <div className="p-5 rounded-3xl bg-white/90 border border-blush-200 shadow-card-soft text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-blush-100 text-blush-600 flex items-center justify-center mx-auto text-xl">
              👰
            </div>
            <h4 className="font-serif font-bold text-base text-berry-950">14-Hour Longevity</h4>
            <p className="text-xs text-berry-900/70">Sweat-proof, tear-resistant formulations designed for Gujarat mandap lights.</p>
          </div>

          <div className="p-5 rounded-3xl bg-white/90 border border-blush-200 shadow-card-soft text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-roseGold-100 text-roseGold-600 flex items-center justify-center mx-auto text-xl">
              🥻
            </div>
            <h4 className="font-serif font-bold text-base text-berry-950">Panetar Draping Masters</h4>
            <p className="text-xs text-berry-900/70">Flawless pleating, double dupatta setting, and lightweight jewelry pinning.</p>
          </div>

          <div className="p-5 rounded-3xl bg-white/90 border border-blush-200 shadow-card-soft text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center mx-auto text-xl">
              💎
            </div>
            <h4 className="font-serif font-bold text-base text-berry-950">Luxury Private Suite</h4>
            <p className="text-xs text-berry-900/70">Exclusive AC bridal dressing lounge for peaceful, unhurried dressing.</p>
          </div>

          <div className="p-5 rounded-3xl bg-white/90 border border-blush-200 shadow-card-soft text-center space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center mx-auto text-xl">
              🌟
            </div>
            <h4 className="font-serif font-bold text-base text-berry-950">Personal Trial with Riya</h4>
            <p className="text-xs text-berry-900/70">One-on-one pre-wedding consultation analyzing your outfit and skin tone.</p>
          </div>
        </div>

        {/* Bridal Packages Grid */}
        <div className="mb-16">
          <div className="text-center mb-10">
            <h2 className="font-serif text-3xl font-bold text-berry-950">
              Select Your <span className="text-gradient-pink italic font-serif">Bridal Package</span>
            </h2>
            <p className="text-xs sm:text-sm text-berry-900/70 mt-1">
              All bridal packages include full jewelry pinning, flower accessories setting, and lehenga styling.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bridalPackages.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-7 border transition-all duration-300 flex flex-col justify-between ${
                  pkg.popular
                    ? 'bg-white border-blush-400 shadow-card-soft ring-2 ring-blush-300/40'
                    : 'bg-white/80 border-blush-200 shadow-card-soft hover:border-blush-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-blush-100 text-blush-800 border border-blush-200">
                      {pkg.badge}
                    </span>
                    <span className="text-xs text-roseGold-700 font-semibold">
                      Vadodara Bridal Edition
                    </span>
                  </div>

                  <h3 className="font-serif font-bold text-2xl text-berry-950">
                    {pkg.title}
                  </h3>
                  
                  <p className="text-xs font-medium text-roseGold-600 mt-0.5">
                    {pkg.tagline}
                  </p>

                  <div className="flex items-baseline gap-3 my-4 pb-4 border-b border-blush-100">
                    <span className="font-serif font-black text-3xl text-berry-950">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-berry-900/40 line-through">
                      {pkg.originalPrice}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      Special Bridal Savings
                    </span>
                  </div>

                  <div className="space-y-2.5 mb-6">
                    <p className="text-xs font-bold text-berry-950 uppercase tracking-wider">
                      Package Inclusions:
                    </p>
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-berry-900/85">
                        <Check className="w-4 h-4 text-blush-600 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onOpenBooking(pkg.title)}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-blush-600 to-pink-500 hover:from-blush-700 hover:to-pink-600 text-white font-bold text-sm shadow-pink-soft flex items-center justify-center gap-2 group cursor-pointer transition-all"
                >
                  <Sparkles className="w-4 h-4 text-pink-200 group-hover:rotate-12 transition-transform" />
                  <span>Reserve This Bridal Package</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Real Bride Review Callout */}
        <div className="glass-card rounded-3xl p-8 border border-roseGold-200 text-center max-w-3xl mx-auto space-y-4">
          <div className="flex text-amber-400 justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-current" />
            ))}
          </div>
          <p className="font-serif italic text-lg sm:text-xl text-berry-950 leading-relaxed">
            "Riya did my bridal makeover for my wedding day in Vadodara, and I felt like an absolute royal princess! The makeup stayed sweat-proof and glowing for 14+ hours. Even the dupatta draping was so comfortable. Thank you R'riya team!"
          </p>
          <div>
            <p className="font-bold text-sm text-berry-950">Krupa Joshi</p>
            <p className="text-xs text-blush-600 font-semibold">Verified Google Review • Vadodara Bride</p>
          </div>
        </div>

      </div>
    </div>
  );
}
