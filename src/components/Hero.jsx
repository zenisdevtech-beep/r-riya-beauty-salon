import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Star, Heart, ShieldCheck, MapPin, ArrowRight, CheckCircle2, MessageCircle, Phone } from 'lucide-react';
import { SALON_DATA, HIGHLIGHT_STATS } from '../data/salonData';

export default function Hero({ onOpenBooking }) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#FFF5F8] via-[#FFFDFE] to-white">
      {/* Soft aesthetic background glowing circles */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-blush-200/40 rounded-full blur-3xl pointer-events-none -z-10 animate-float" />
      <div className="absolute top-40 right-10 w-80 h-80 bg-roseGold-200/30 rounded-full blur-3xl pointer-events-none -z-10 animate-float-delayed" />
      <div className="absolute -bottom-10 left-10 w-72 h-72 bg-pink-100/50 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Girl-Centric Copy & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-blush-200 shadow-card-soft text-xs sm:text-sm font-semibold text-berry-900 mx-auto lg:mx-0">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blush-100 text-blush-600">
                <Heart className="w-3 h-3 fill-current" />
              </span>
              <span>Vadodara's Exclusive Ladies-Only Sanctuary</span>
              <span className="hidden xs:inline-block w-1.5 h-1.5 rounded-full bg-blush-400"></span>
              <span className="hidden xs:inline-block text-roseGold-600 font-bold">Nizampura</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-berry-950 tracking-tight leading-[1.15]">
                Beautifying <span className="italic font-serif text-gradient-pink relative">
                  YOU
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-blush-300" viewBox="0 0 100 20" preserveAspectRatio="none">
                    <path d="M0,15 Q50,0 100,15" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                </span>
                <br />
                The Way You Love.
              </h1>
              <p className="font-script text-2xl sm:text-3xl text-blush-600 pt-1">
                Where elegance meets effortless luxury ✨
              </p>
            </div>

            {/* Subtitle */}
            <p className="text-berry-900/80 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Step into Vadodara’s highest-rated <strong className="font-semibold text-berry-950">4.9★ ladies beauty salon</strong>. 
              From viral rich brunette balayage and liquid-silk hair Botox to glass-skin Hydra facials and royal bridal glam—crafted by women, for women.
            </p>

            {/* Micro Highlights Pill Row */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-xs font-medium text-berry-900/90 pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blush-50/80 border border-blush-200/70">
                <ShieldCheck className="w-3.5 h-3.5 text-blush-600" />
                <span>100% Private Ladies Lounge</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blush-50/80 border border-blush-200/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-blush-600" />
                <span>Nashi Argan & Olaplex Care</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blush-50/80 border border-blush-200/70">
                <CheckCircle2 className="w-3.5 h-3.5 text-blush-600" />
                <span>Zero Pushy Upselling</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blush-600 via-pink-500 to-roseGold-500 text-white font-bold text-base shadow-pink-soft hover:shadow-pink-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 group cursor-pointer"
              >
                <Sparkles className="w-5 h-5 text-pink-200 group-hover:rotate-12 transition-transform" />
                <span>Book Pamper Session</span>
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${SALON_DATA.whatsapp}?text=Hi%20Riya!%20I%20would%20like%20to%20know%20more%20about%20your%20salon%20packages%20and%20book%20an%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-4 rounded-full bg-white hover:bg-blush-50/70 border border-blush-200 text-berry-900 font-semibold text-base shadow-card-soft transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                <MessageCircle className="w-5 h-5 text-emerald-600" />
                <span>WhatsApp Riya Directly</span>
              </a>
            </div>

            {/* Google Rating Trust Badge Callout */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-berry-900/70">
              <Link 
                to="/reviews"
                className="flex items-center gap-2 p-2 rounded-xl bg-white border border-blush-100 shadow-sm hover:border-blush-300 transition-colors"
                title="View 2,939+ Customer Reviews"
              >
                {/* Google "G" representation */}
                <div className="w-7 h-7 rounded-full bg-white border border-gray-100 shadow-xs flex items-center justify-center font-bold text-sm">
                  <span className="text-blue-500">G</span>
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1">
                    <span className="font-bold text-berry-950 text-sm">4.9</span>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-current" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[11px] text-berry-900/60 font-medium">2,939+ Google Reviews &rarr;</span>
                </div>
              </Link>

              <Link to="/contact" className="flex items-center gap-2 text-left pl-2 border-l border-blush-200 hover:text-blush-600 transition-colors">
                <MapPin className="w-4 h-4 text-blush-600 shrink-0" />
                <div>
                  <p className="font-semibold text-berry-950 text-xs">Crossroads, Nizampura</p>
                  <p className="text-[11px] text-berry-900/60">Near Mehsana Nagar Garba Ground</p>
                </div>
              </Link>
            </div>

          </div>

          {/* Right Column: Aesthetic Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-blush-300/40 via-pink-200/30 to-roseGold-300/40 rounded-[2.5rem] blur-xl" />
              
              {/* Main Photo Card */}
              <div className="relative rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-white">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=900"
                  alt="R Riya Beauty Salon Experience"
                  className="w-full h-[460px] sm:h-[500px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-berry-950/70 via-transparent to-transparent" />
                
                {/* Photo caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white p-3 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20">
                  <p className="font-serif font-bold text-lg leading-tight">R'riya Luxury Hair & Bridal Lounge</p>
                  <p className="text-xs text-pink-100 flex items-center justify-between mt-1">
                    <span>Nizampura, Vadodara</span>
                    <span className="font-semibold text-amber-300">★ 4.9 Rated</span>
                  </p>
                </div>
              </div>

              {/* Floating Badge 1: Rich Brunette Highlight */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-card-soft border border-blush-100 flex items-center gap-3 animate-float">
                <div className="w-10 h-10 rounded-xl bg-blush-100 text-blush-600 flex items-center justify-center font-bold text-lg">
                  ✂️
                </div>
                <div>
                  <p className="text-xs font-bold text-berry-950">Viral Hair Botox & Balayage</p>
                  <p className="text-[10px] text-blush-600 font-semibold">Liquid Silk Shine</p>
                </div>
              </div>

              {/* Floating Badge 2: Google Verified Reviewer Snippet */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-card-soft border border-blush-100 max-w-[240px] animate-float-delayed">
                <div className="flex items-center gap-1.5 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-current" />
                  ))}
                  <span className="text-[11px] font-bold text-berry-950 ml-1">5.0</span>
                </div>
                <p className="text-[11px] text-berry-900 font-medium italic line-clamp-2">
                  "Best haircut i have ever got in vadodara great price!"
                </p>
                <p className="text-[10px] text-blush-600 font-bold mt-1">— Pooja P. (Google Review)</p>
              </div>

            </div>
          </div>

        </div>

        {/* Highlight Stats Bar */}
        <div className="mt-14 pt-8 border-t border-blush-100/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {HIGHLIGHT_STATS.map((stat, idx) => (
              <div 
                key={idx}
                className="bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-blush-100 text-center shadow-card-soft hover:border-blush-300 transition-all hover:-translate-y-1"
              >
                <div className="font-serif font-bold text-2xl sm:text-3xl text-gradient-pink">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-berry-950 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-berry-900/60 mt-0.5">
                  {stat.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
