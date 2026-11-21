import React from 'react';
import { Crown, Sparkles, Check, Heart, Calendar, Phone, MessageCircle } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export default function BridalStudio({ onOpenBooking }) {
  const bridalFeatures = [
    "High-Definition & Airbrush sweat-proof bridal makeup",
    "Traditional Gujarati Panetar & modern reception saree draping",
    "Custom 3D mink eyelashes & hair extensions integration",
    "Exclusive private bridal suite for you & your bridesmaids",
    "Free lehenga & jewelry palette consultation with Riya",
    "Pre-bridal skin glow and hair botox packages available"
  ];

  return (
    <section id="bridal" className="py-16 lg:py-24 bg-gradient-to-b from-[#FFF5F8] via-[#FDF0F4] to-white relative overflow-hidden">
      
      {/* Decorative floral/golden background touches */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-roseGold-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blush-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white border border-roseGold-300 text-roseGold-800 text-xs font-bold tracking-wide uppercase shadow-sm">
            <Crown className="w-4 h-4 text-roseGold-500" />
            <span>R'riya Bridal Studio • Nizampura</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-berry-950 tracking-tight">
            Your Dream <span className="text-gradient-pink italic font-serif">Bridal Makeover</span>
          </h2>

          <p className="text-berry-900/75 text-base sm:text-lg">
            Because your wedding day deserves nothing less than royal perfection. Crafted with precision, love, and timeless grace.
          </p>
        </div>

        {/* Bridal Showcase Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-roseGold-200 shadow-xl overflow-hidden relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-roseGold-200 shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=900"
                  alt="Bridal Makeup by Riya"
                  className="w-full h-[420px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-berry-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded-md bg-roseGold-500 text-white font-bold text-[10px] uppercase">
                      Signature Bride
                    </span>
                    <span className="text-xs text-roseGold-200">Vadodara Wedding Edition</span>
                  </div>
                  <p className="font-serif font-bold text-lg">Royal Gujarati HD Bridal Glam</p>
                </div>
              </div>

              {/* Floating review card */}
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-2xl shadow-md border border-roseGold-100 max-w-[200px] hidden sm:block">
                <p className="text-[11px] font-serif italic text-berry-900">
                  "Everyone in the mandap was complementing my glow!"
                </p>
                <p className="text-[10px] text-blush-600 font-bold mt-1">— Krupa J. (Vadodara Bride)</p>
              </div>
            </div>

            {/* Right Bridal Offer Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-roseGold-700 uppercase tracking-widest block">
                  The Complete Royal Experience
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-berry-950">
                  Designed for the Modern, Confident Indian Bride
                </h3>
                <p className="text-berry-900/75 text-sm leading-relaxed">
                  Every bride has a unique vision for her wedding day. Whether you dream of a radiant glass-skin dewy finish, dramatic smoky eyes, or classic royal gold shimmer, Riya personally works with you to design your signature look.
                </p>
              </div>

              {/* Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {bridalFeatures.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-berry-900/85">
                    <div className="w-4 h-4 rounded-full bg-roseGold-100 text-roseGold-700 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 stroke-[3]" />
                    </div>
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Pricing Cards row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-white/90 rounded-2xl border border-blush-100 text-center">
                  <p className="text-xs text-berry-900/60 font-medium">Engagement Glam</p>
                  <p className="font-serif font-bold text-lg text-berry-950">₹4,999</p>
                  <p className="text-[10px] text-blush-600">Soft Glam Shimmer</p>
                </div>

                <div className="p-3 bg-blush-50/80 rounded-2xl border border-blush-300 text-center relative ring-1 ring-blush-300">
                  <span className="absolute -top-2 left-1/2 -translate-x-1/2 px-2 py-0.2 rounded-full bg-blush-600 text-white text-[9px] font-bold">
                    Most Popular
                  </span>
                  <p className="text-xs text-berry-900/70 font-medium">Royal HD Bridal</p>
                  <p className="font-serif font-bold text-lg text-blush-800">₹11,999</p>
                  <p className="text-[10px] text-blush-700">Full Head-to-Toe</p>
                </div>

                <div className="p-3 bg-white/90 rounded-2xl border border-blush-100 text-center">
                  <p className="text-xs text-berry-900/60 font-medium">30-Day Pre-Bridal</p>
                  <p className="font-serif font-bold text-lg text-berry-950">₹9,999</p>
                  <p className="text-[10px] text-blush-600">3 Sessions Package</p>
                </div>
              </div>

              {/* Bridal CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 pt-3">
                <button
                  onClick={() => onOpenBooking('Signature Royal HD Bridal Package')}
                  className="px-6 py-3.5 rounded-full bg-gradient-to-r from-roseGold-600 via-blush-600 to-pink-600 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Book Bridal Consultation</span>
                </button>

                <a
                  href={`https://wa.me/${SALON_DATA.whatsapp}?text=Hi%20Riya!%20I%20am%20getting%20married%20in%20Vadodara%20and%20would%20love%20to%20consult%20about%20my%20bridal%20makeup%20package.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-full bg-white border border-roseGold-300 text-berry-900 font-semibold text-sm hover:bg-roseGold-50/50 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Chat with Bridal Team</span>
                </a>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
