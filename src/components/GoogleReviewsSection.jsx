import React, { useState } from 'react';
import { Star, CheckCircle, ExternalLink, ThumbsUp, MessageSquare, Heart, Shield } from 'lucide-react';
import { SALON_DATA, GOOGLE_REVIEWS } from '../data/salonData';

export default function GoogleReviewsSection() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filterCategories = [
    { id: 'all', label: 'All Reviews (2,939)' },
    { id: 'hair', label: '💇‍♀️ Hair Cuts & Botox' },
    { id: 'bridal', label: '👰 Bridal Makeover' },
    { id: 'skin', label: '🌸 Hydra Facial' },
    { id: 'staff', label: '✨ Staff & Timings' },
  ];

  const filteredReviews = activeFilter === 'all'
    ? GOOGLE_REVIEWS
    : GOOGLE_REVIEWS.filter(r => r.category === activeFilter);

  return (
    <section id="reviews" className="py-16 lg:py-24 bg-gradient-to-b from-white via-blush-50/40 to-white relative overflow-hidden">
      
      {/* Background soft glowing blur */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-pink-100/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-roseGold-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold tracking-wide uppercase">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Vadodara's Most Loved Ladies Salon</span>
          </div>
          
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-berry-950 tracking-tight">
            Real Reviews From <span className="text-gradient-pink italic font-serif">Real Beauties</span>
          </h2>
          
          <p className="text-berry-900/75 text-base sm:text-lg">
            With over <strong>2,939 verified reviews</strong> and a near-perfect <strong>4.9 ★ rating</strong>, 
            see why women and brides across Nizampura and Vadodara trust R'riya Beauty Salon.
          </p>
        </div>

        {/* Master Scoreboard Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 mb-10 border border-blush-200/80 shadow-card-soft">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Google Rating Overview */}
            <div className="md:col-span-5 text-center md:text-left flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-blush-100 pb-6 md:pb-0 md:pr-6">
              <div className="flex items-center gap-3">
                <span className="font-serif font-black text-5xl sm:text-6xl text-berry-950 leading-none">
                  4.9
                </span>
                <div>
                  <div className="flex text-amber-400 gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-berry-900/60 font-semibold mt-1">
                    Google & Justdial Verified
                  </p>
                </div>
              </div>

              <p className="text-xs text-berry-900/80 font-medium mt-3">
                Based on <strong className="text-berry-950 font-bold">2,939+ customer reviews</strong>. Over 98% 5-star ratings for haircut precision, polite staff behaviour, and prompt timings.
              </p>

              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                <a
                  href={SALON_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-blush-200 text-xs font-bold text-berry-900 hover:bg-blush-50 shadow-sm transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-blush-600" />
                  <span>Verify on Google Maps</span>
                </a>
                
                <a
                  href={SALON_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blush-600 text-white text-xs font-bold hover:bg-blush-700 shadow-sm transition-colors"
                >
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>Write a Review</span>
                </a>
              </div>
            </div>

            {/* Rating Breakdown & Highlights */}
            <div className="md:col-span-7 space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center sm:text-left">
                <div className="bg-white/80 p-3 rounded-2xl border border-blush-100">
                  <p className="text-xs text-berry-900/60 font-medium">Haircut & Styling</p>
                  <p className="font-bold text-berry-950 text-lg">99.2% Loved</p>
                  <p className="text-[11px] text-blush-600">"Educated staff"</p>
                </div>
                <div className="bg-white/80 p-3 rounded-2xl border border-blush-100">
                  <p className="text-xs text-berry-900/60 font-medium">Wait Time & Timing</p>
                  <p className="font-bold text-berry-950 text-lg">Minimal Wait</p>
                  <p className="text-[11px] text-blush-600">"Prompt appointments"</p>
                </div>
                <div className="bg-white/80 p-3 rounded-2xl border border-blush-100">
                  <p className="text-xs text-berry-900/60 font-medium">Staff Behaviour</p>
                  <p className="font-bold text-berry-950 text-lg">5.0 / 5.0</p>
                  <p className="text-[11px] text-blush-600">"Very kind & polite"</p>
                </div>
              </div>

              {/* Verified Trust Quotes snippet */}
              <div className="bg-blush-50/70 p-3.5 rounded-2xl border border-blush-200/60 flex items-start gap-2.5">
                <Shield className="w-5 h-5 text-blush-600 shrink-0 mt-0.5" />
                <p className="text-xs text-berry-900/90 leading-relaxed">
                  <strong className="font-semibold text-berry-950">Vadodara Ladies Trust Guarantee:</strong> Clean sterilized tools, single-use disposable sheets for waxing, cruelty-free imported beauty products, and a respectful, non-judgmental atmosphere for every client.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8 justify-start sm:justify-center">
          {filterCategories.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeFilter === filter.id
                  ? 'bg-blush-600 text-white shadow-pink-soft scale-105'
                  : 'bg-white border border-blush-200 text-berry-900/70 hover:bg-blush-50'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white p-6 rounded-3xl border border-blush-100 shadow-card-soft hover:shadow-pink-soft hover:border-blush-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Review Header: User & Rating */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blush-200 to-pink-300 text-berry-900 font-bold flex items-center justify-center font-serif text-sm shadow-xs">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="font-bold text-berry-950 text-sm">
                          {review.name}
                        </span>
                        <CheckCircle className="w-3.5 h-3.5 text-blush-500 fill-blush-100" />
                      </div>
                      <span className="text-[11px] text-berry-900/50">
                        {review.date}
                      </span>
                    </div>
                  </div>

                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>

                {/* Service Badge */}
                <div className="inline-block px-2.5 py-1 rounded-md bg-blush-50 text-blush-700 text-[11px] font-semibold mb-3 border border-blush-100">
                  {review.service}
                </div>

                {/* Comment Body */}
                <p className="text-berry-900/80 text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              {/* Review Footer */}
              <div className="mt-5 pt-3 border-t border-blush-50 flex items-center justify-between text-[11px] text-berry-900/50">
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <CheckCircle className="w-3 h-3" />
                  Verified Google Customer
                </span>
                <span className="flex items-center gap-1 text-berry-900/60 hover:text-blush-600 transition-colors">
                  <ThumbsUp className="w-3 h-3" />
                  Helpful
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View all prompt */}
        <div className="text-center mt-10">
          <a
            href={SALON_DATA.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold text-blush-600 hover:text-blush-700 underline underline-offset-4 transition-colors"
          >
            <span>Read all 2,939 reviews on Google Maps &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
