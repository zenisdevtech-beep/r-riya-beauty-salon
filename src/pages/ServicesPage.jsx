import React, { useState } from 'react';
import { Sparkles, Clock, Check, ArrowRight, Search, Heart, Shield, MessageCircle } from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES, SALON_DATA } from '../data/salonData';
import GlowCalculator from '../components/GlowCalculator';

export default function ServicesPage({ onOpenBooking }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = SERVICES.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.tagline.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-10 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-100 border border-blush-200 text-blush-800 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blush-600" />
            <span>Full Pamper Catalog • Vadodara</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-berry-950 tracking-tight">
            Curated <span className="text-gradient-pink italic font-serif">Self-Care & Beauty</span> Menu
          </h1>

          <p className="text-berry-900/75 text-sm sm:text-base leading-relaxed">
            Every service at R'riya is customized for your individual hair texture, skin tone, and personal aesthetic. 100% private ladies' lounge with world-certified products.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="max-w-2xl mx-auto mb-10 space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-blush-500 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search treatments (e.g., Hair Botox, Hydra Facial, Balayage, Nails)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl border border-blush-200 bg-blush-50/50 text-sm text-berry-950 focus:outline-none focus:ring-2 focus:ring-blush-400 focus:bg-white transition-all placeholder:text-berry-900/40 shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-berry-900/40 hover:text-berry-900"
              >
                Clear
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gradient-to-r from-blush-600 to-pink-500 text-white shadow-pink-soft scale-105'
                    : 'bg-blush-50/70 border border-blush-200 text-berry-900/70 hover:bg-blush-100 hover:text-blush-700'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Services Results Count */}
        <div className="flex items-center justify-between text-xs text-berry-900/60 mb-6 px-1">
          <span>Showing {filteredServices.length} Treatments</span>
          <span>✨ Transparent Pricing (No Hidden Fees)</span>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group ${
                service.popular
                  ? 'bg-gradient-to-b from-[#FFF9FB] to-white border-blush-300 shadow-card-soft hover:shadow-pink-soft hover:border-blush-400'
                  : 'bg-white border-blush-100 hover:border-blush-300 hover:shadow-card-soft'
              }`}
            >
              {/* Top Badge & Duration */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blush-100 text-blush-800 border border-blush-200">
                  {service.badge}
                </span>

                <span className="flex items-center gap-1 text-xs text-berry-900/60 font-medium">
                  <Clock className="w-3.5 h-3.5 text-blush-500" />
                  {service.duration}
                </span>
              </div>

              {/* Service Details */}
              <div className="space-y-3">
                <h3 className="font-serif font-bold text-xl text-berry-950 group-hover:text-blush-600 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-xs font-semibold text-roseGold-600">
                  {service.tagline}
                </p>

                <p className="text-berry-900/75 text-xs sm:text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* What's included checklist */}
                <div className="pt-2 border-t border-blush-100/80 space-y-1.5">
                  <p className="text-[11px] font-bold text-berry-900/80 uppercase tracking-wider">
                    Treatment Steps:
                  </p>
                  {service.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-berry-900/85">
                      <Check className="w-3.5 h-3.5 text-blush-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Price & Booking Button */}
              <div className="mt-6 pt-4 border-t border-blush-100">
                <div className="flex items-baseline justify-between mb-4">
                  <div>
                    <span className="text-[11px] text-berry-900/50 block font-medium">
                      Pamper Fee
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif font-black text-2xl text-berry-950">
                        ₹{service.price.toLocaleString('en-IN')}
                      </span>
                      {service.originalPrice && (
                        <span className="text-xs text-berry-900/40 line-through">
                          ₹{service.originalPrice.toLocaleString('en-IN')}
                        </span>
                      )}
                    </div>
                  </div>

                  {service.originalPrice && (
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Save ₹{(service.originalPrice - service.price).toLocaleString('en-IN')}
                    </span>
                  )}
                </div>

                <button
                  onClick={() => onOpenBooking(service)}
                  className="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-blush-500 to-pink-500 hover:from-blush-600 hover:to-pink-600 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-pink-soft transition-all duration-200 flex items-center justify-center gap-2 group/btn cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-pink-100 group-hover/btn:rotate-12 transition-transform" />
                  <span>Book This Pamper</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Custom Pamper Day Builder embedded */}
        <div className="mt-20">
          <GlowCalculator onOpenBookingWithCustom={(summary, price) => onOpenBooking(summary, price)} />
        </div>

      </div>
    </div>
  );
}
