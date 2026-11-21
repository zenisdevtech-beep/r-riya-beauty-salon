import React from 'react';
import { Heart, MessageCircle, ExternalLink, Play } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { INSTAGRAM_POSTS, SALON_DATA } from '../data/salonData';

export default function InstagramFeed() {
  return (
    <section className="py-16 lg:py-20 bg-[#FFFDFE] border-t border-blush-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 text-center sm:text-left">
          <div className="space-y-1">
            <div className="flex items-center gap-2 justify-center sm:justify-start text-xs font-bold text-blush-600 uppercase tracking-widest">
              <InstagramIcon className="w-4 h-4" />
              <span>@rriyabeautysalon</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-berry-950">
              Join Our 11K+ <span className="text-gradient-pink italic font-serif">Girl Community</span>
            </h2>
          </div>

          <a
            href={SALON_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 text-white font-bold text-xs sm:text-sm shadow-sm hover:shadow-pink-soft transition-all"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Follow on Instagram</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Instagram Grid */}
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
                alt="Instagram look by R Riya Beauty Salon"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-berry-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-3 text-center">
                <div className="flex items-center gap-4 mb-2">
                  <span className="flex items-center gap-1 font-bold text-xs">
                    <Heart className="w-3.5 h-3.5 fill-current text-pink-400" />
                    {post.likes}
                  </span>
                  <span className="flex items-center gap-1 font-bold text-xs">
                    <MessageCircle className="w-3.5 h-3.5 fill-current text-white" />
                    {post.comments}
                  </span>
                </div>
                <p className="text-[11px] text-pink-100 line-clamp-2 italic">
                  "{post.caption}"
                </p>
                <span className="text-[10px] text-blush-300 font-semibold mt-2 underline">
                  View on Instagram &rarr;
                </span>
              </div>

              {/* Instagram badge icon */}
              <div className="absolute top-2.5 right-2.5 w-6 h-6 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white text-xs group-hover:opacity-0 transition-opacity">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}
