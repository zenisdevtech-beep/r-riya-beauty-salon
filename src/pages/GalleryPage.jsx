import React, { useState } from 'react';
import { Sparkles, Heart, ArrowRight, MessageCircle } from 'lucide-react';
import InstagramIcon from '../components/InstagramIcon';
import { BEFORE_AFTER_GALLERY, INSTAGRAM_POSTS, SALON_DATA } from '../data/salonData';

export default function GalleryPage({ onOpenBooking }) {
  const [likes, setLikes] = useState({ 0: false, 1: true, 2: false, 3: true });

  const toggleLike = (index) => {
    setLikes(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="py-10 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-50 border border-pink-200 text-pink-700 text-xs font-bold tracking-wide uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Unfiltered Transformations</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-berry-950 tracking-tight">
            The <span className="text-gradient-pink italic font-serif">R'riya Lookbook</span>
          </h1>

          <p className="text-berry-900/75 text-sm sm:text-base leading-relaxed">
            Real clients, real hair, and real skin transformations. Explore our viral balayage blends, bridal makeovers, and glass skin facials.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {BEFORE_AFTER_GALLERY.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl overflow-hidden border border-blush-100 shadow-card-soft hover:shadow-pink-soft hover:border-blush-300 transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-72 overflow-hidden bg-blush-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-berry-950/70 via-transparent to-transparent opacity-80" />

                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold text-berry-950 shadow-sm">
                  {item.category}
                </div>

                <button
                  onClick={() => toggleLike(idx)}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-rose-500 shadow-sm hover:scale-110 active:scale-95 transition-all cursor-pointer"
                  aria-label="Like"
                >
                  <Heart className={`w-4 h-4 ${likes[idx] ? 'fill-rose-500' : ''}`} />
                </button>

                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="font-serif font-bold text-base leading-snug">
                    {item.title}
                  </p>
                </div>
              </div>

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
                    onClick={() => onOpenBooking(item.title)}
                    className="text-xs font-bold text-blush-600 hover:text-blush-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform cursor-pointer"
                  >
                    <span>Get this look</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={`https://wa.me/${SALON_DATA.whatsapp}?text=Hi%20Riya!%20I%20love%20the%20${encodeURIComponent(item.title)}%20look%20on%20your%20website.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-full hover:bg-blush-50 text-emerald-600 transition-colors"
                    title="Inquire on WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Inspo Photo Upload Prompt */}
        <div className="bg-gradient-to-r from-blush-50 via-pink-50 to-roseGold-50 p-8 rounded-3xl border border-blush-200 text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="text-2xl">📸</span>
          <h3 className="font-serif font-bold text-2xl text-berry-950">
            Have an Instagram or Pinterest Inspo Picture?
          </h3>
          <p className="text-xs sm:text-sm text-berry-900/75 max-w-lg mx-auto">
            Send us a screenshot of your dream hairstyle or bridal makeup look. Riya and our stylists will evaluate your hair texture and tone for free.
          </p>
          <div className="pt-2">
            <a
              href={`https://wa.me/${SALON_DATA.whatsapp}?text=Hi%20Riya!%20I%20have%20an%20inspo%20photo%20to%20show%20you.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blush-600 hover:bg-blush-700 text-white font-bold text-xs shadow-pink-soft transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Share Inspo on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Instagram Grid */}
        <div className="border-t border-blush-100 pt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="font-serif font-bold text-2xl text-berry-950">
                Instagram Feed <span className="text-blush-600 font-sans text-base font-normal">(@rriyabeautysalon)</span>
              </h3>
              <p className="text-xs text-berry-900/60 mt-0.5">Over 11K+ beauty enthusiasts follow our daily stories</p>
            </div>

            <a
              href={SALON_DATA.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold text-xs shadow-sm hover:shadow-pink-soft transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Follow @rriyabeautysalon</span>
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {INSTAGRAM_POSTS.map((post) => (
              <a
                key={post.id}
                href={SALON_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden aspect-square bg-blush-100 shadow-sm border border-blush-100 block"
              >
                <img
                  src={post.image}
                  alt="Instagram post"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-berry-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-3 text-center">
                  <p className="text-[11px] text-pink-100 line-clamp-2 italic">
                    "{post.caption}"
                  </p>
                  <span className="text-[10px] text-blush-300 font-semibold mt-2 underline">
                    View on Instagram &rarr;
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
