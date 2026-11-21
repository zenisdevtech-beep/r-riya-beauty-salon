import React, { useState } from 'react';
import { Sparkles, Clock, Check, ArrowRight, Heart, Tag } from 'lucide-react';
import { SERVICES, SERVICE_CATEGORIES, SALON_DATA } from '../data/salonData';

export default function ServicesSection({ onSelectService }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? SERVICES
    : SERVICES.filter(s => s.category === activeCategory);

  return (
    <section id="services" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-50 border border-blush-200 text-blush-700 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5 text-blush-500" />
            <span>Curated Self-Care Menu</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-berry-950 tracking-tight">
            Indulge In <span className="text-gradient-pink italic font-serif">Luxury Treatments</span>
          </h2>

          <p className="text-berry-900/75 text-base sm:text-lg">
            Transparent pricing, zero hidden charges, and premier international salon products for your hair, skin, and nails.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-10 justify-start md:justify-center">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-blush-600 to-pink-500 text-white shadow-pink-soft scale-105'
                  : 'bg-blush-50/60 border border-blush-200/70 text-berry-900/80 hover:bg-blush-100 hover:text-blush-700'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`rounded-3xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between relative group ${
                service.popular
                  ? 'bg-gradient-to-b from-[#FFF9FB] to-white border-blush-300 shadow-card-soft hover:shadow-pink-soft hover:border-blush-400'
                  : 'bg-white border-blush-100 hover:border-blush-300 hover:shadow-card-soft'
              }`}
            >
              {/* Top Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blush-100 text-blush-800 border border-blush-200">
                  {service.badge}
                </span>

                <span className="flex items-center gap-1 text-xs text-berry-900/60 font-medium">
                  <Clock className="w-3.5 h-3.5 text-blush-500" />
                  {service.duration}
                </span>
              </div>

              {/* Service Info */}
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
                    Package Includes:
                  </p>
                  {service.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-berry-900/85">
                      <Check className="w-3.5 h-3.5 text-blush-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Price & Booking Action */}
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
                  onClick={() => onSelectService(service)}
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

        {/* Custom inquiry note */}
        <div className="mt-12 text-center bg-blush-50/70 p-6 rounded-3xl border border-blush-200 max-w-2xl mx-auto space-y-2">
          <p className="font-serif font-bold text-berry-950 text-lg">
            Have a custom look in mind from Instagram or Pinterest?
          </p>
          <p className="text-xs text-berry-900/70 max-w-md mx-auto">
            Show us your dream haircut or hair color inspiration photo. Riya and our senior stylists will customize the exact blend for your face contour and skin tone.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${SALON_DATA.whatsapp}?text=Hi%20Riya!%20I%20have%20an%20inspo%20photo%20from%20Pinterest/Instagram%20for%20my%20hair/bridal%20look.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blush-700 hover:text-blush-800 underline underline-offset-4"
            >
              <span>Share Inspo on WhatsApp &rarr;</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
