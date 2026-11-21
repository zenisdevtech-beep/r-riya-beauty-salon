import React, { useState } from 'react';
import { Star, CheckCircle, ExternalLink, ThumbsUp, Heart, Shield, MessageCircle } from 'lucide-react';
import { SALON_DATA, GOOGLE_REVIEWS } from '../data/salonData';

export default function ReviewsPage() {
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
    <div className="py-10 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold tracking-wide uppercase">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Vadodara's Highest-Rated Ladies Salon</span>
          </div>
          
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-berry-950 tracking-tight">
            Verified <span className="text-gradient-pink italic font-serif">Customer Reviews</span>
          </h1>
          
          <p className="text-berry-900/75 text-base sm:text-lg">
            Over <strong>2,939 verified reviews</strong> across Google & Justdial with a <strong>4.9 ★ average rating</strong>.
          </p>
        </div>

        {/* Master Scoreboard Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 mb-12 border border-blush-200/80 shadow-card-soft">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            
            {/* Google Rating Overview */}
            <div className="md:col-span-5 text-center md:text-left flex flex-col items-center md:items-start border-b md:border-b-0 md:border-r border-blush-100 pb-6 md:pb-0 md:pr-6">
              <div className="flex items-center gap-3">
                <span className="font-serif font-black text-6xl text-berry-950 leading-none">
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
                Calculated from <strong className="text-berry-950 font-bold">2,939 verified reviews</strong>. Over 98% 5-star ratings for haircut precision, courteous staff, and prompt service with minimal wait times.
              </p>

              <div className="mt-5 flex flex-wrap gap-2.5 justify-center md:justify-start">
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
                  <span>Write a Google Review</span>
                </a>
              </div>
            </div>

            {/* Rating Bars & Breakdown */}
            <div className="md:col-span-7 space-y-4">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-bold text-berry-950">5 Stars</span>
                  <div className="flex-1 h-3 rounded-full bg-blush-100 overflow-hidden">
                    <div className="h-full bg-blush-600 rounded-full w-[96%]" />
                  </div>
                  <span className="w-10 text-right text-berry-900/60 font-medium">96%</span>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-bold text-berry-950">4 Stars</span>
                  <div className="flex-1 h-3 rounded-full bg-blush-100 overflow-hidden">
                    <div className="h-full bg-blush-400 rounded-full w-[3.5%]" />
                  </div>
                  <span className="w-10 text-right text-berry-900/60 font-medium">3.5%</span>
                </div>

                <div className="flex items-center gap-3 text-xs">
                  <span className="w-12 font-bold text-berry-950">3 Stars</span>
                  <div className="flex-1 h-3 rounded-full bg-blush-100 overflow-hidden">
                    <div className="h-full bg-roseGold-400 rounded-full w-[0.5%]" />
                  </div>
                  <span className="w-10 text-right text-berry-900/60 font-medium">0.5%</span>
                </div>
              </div>

              {/* Verified Trust Quotes snippet */}
              <div className="bg-blush-50/70 p-4 rounded-2xl border border-blush-200/60 flex items-start gap-2.5">
                <Shield className="w-5 h-5 text-blush-600 shrink-0 mt-0.5" />
                <p className="text-xs text-berry-900/90 leading-relaxed">
                  <strong className="font-semibold text-berry-950">Strict Hygiene Guarantee:</strong> Single-use disposable salon sheets for waxing, UV-C tool sterilizers, imported cruelty-free organic products, and a calm, polite female crew.
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
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blush-200 to-pink-300 text-berry-900 font-bold flex items-center justify-center font-serif text-sm">
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

                <div className="inline-block px-2.5 py-1 rounded-md bg-blush-50 text-blush-700 text-[11px] font-semibold mb-3 border border-blush-100">
                  {review.service}
                </div>

                <p className="text-berry-900/80 text-sm leading-relaxed italic">
                  "{review.comment}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-blush-50 flex items-center justify-between text-[11px] text-berry-900/50">
                <span className="flex items-center gap-1 text-emerald-700 font-medium">
                  <CheckCircle className="w-3 h-3" />
                  Verified Google Customer
                </span>
                <span className="flex items-center gap-1 text-berry-900/60">
                  <ThumbsUp className="w-3 h-3" />
                  Helpful
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
