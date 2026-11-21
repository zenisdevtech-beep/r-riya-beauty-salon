import React, { useState } from 'react';
import { Sparkles, Heart, Eye, ArrowRight, MessageCircle } from 'lucide-react';
import { BEFORE_AFTER_GALLERY, SALON_DATA } from '../data/salonData';

export default function BeforeAfterGallery({ onOpenBooking }) {
  const [likes, setLikes] = useState({ 0: false, 1: true, 2: false, 3: true });

  const toggleLike = (index) => {
    setLikes(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Real Client Transformations</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-berry-950 tracking-tight">
            The <span className="text-gradient-pink italic font-serif">R'riya Glow</span> Experience
          </h2>

          <p className="text-berry-900/75 text-base sm:text-lg">
            See the breathtaking results crafted daily at our salon. Unfiltered, authentic beauty transformations.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BEFORE_AFTER_GALLERY.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-blush-100 shadow-card-soft hover:shadow-pink-soft hover:border-blush-300 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container with Badges */}
              <div className="relative h-72 overflow-hidden bg-blush-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-berry-950/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Category Pill */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-berry-950 shadow-sm">
                  {item.category}
                </div>

                {/* Like Button */}
                <button
                  onClick={() => toggleLike(idx)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-rose-500 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  aria-label="Like transformation"
                >
                  <Heart className={`w-4 h-4 ${likes[idx] ? 'fill-rose-500' : ''}`} />
                </button>

                {/* Bottom Overlay Title */}
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-serif font-bold text-base leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>

              {/* Transformation Details */}
              <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between">
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-rose-600 shrink-0">Before:</span>
                    <span className="text-berry-900/70">{item.beforeText}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="font-bold text-emerald-600 shrink-0">After:</span>
                    <span className="text-berry-950 font-medium">{item.afterText}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-blush-50 flex items-center justify-between">
                  <button
                    onClick={() => onOpenBooking()}
                    className="text-xs font-bold text-blush-600 hover:text-blush-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    <span>Get this look</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${SALON_DATA.whatsapp}?text=Hi%20Riya!%20I%20saw%20the%20${encodeURIComponent(item.title)}%20look%20on%20your%20website%20and%20want%20to%20know%20more.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full hover:bg-blush-50 text-emerald-600 transition-colors"
                    title="Ask on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Instagram Follow Callout */}
        <div className="mt-12 text-center">
          <p className="text-xs font-medium text-berry-900/70">
            Want to see daily stories & client video reveals? 
            <a 
              href={SALON_DATA.instagramUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-blush-600 font-bold ml-1 hover:underline"
            >
              Follow @rriyabeautysalon on Instagram ({SALON_DATA.instagramFollowers})
            </a>
          </p>
        </div>

      </div>
    </section>
  );
}
