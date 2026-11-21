import React from 'react';
import { Heart, Sparkles, Shield, Award, Smile, Coffee } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export default function FounderStory({ onOpenBooking }) {
  return (
    <section id="story" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blush-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="glass-card rounded-[2.5rem] p-6 sm:p-10 lg:p-14 border border-blush-200 shadow-card-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Photo & Signature Card */}
            <div className="lg:col-span-5 text-center">
              <div className="relative mx-auto max-w-xs sm:max-w-sm">
                
                {/* Decorative border frame */}
                <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-tr from-blush-400 via-pink-300 to-roseGold-400 opacity-60 blur-md" />
                
                <div className="relative rounded-[1.8rem] overflow-hidden border-4 border-white shadow-xl bg-blush-50">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                    alt="Riya - Founder of R Riya Beauty Salon"
                    className="w-full h-80 sm:h-96 object-cover object-top"
                  />
                  
                  <div className="p-4 bg-white text-center border-t border-blush-100">
                    <p className="font-serif font-bold text-xl text-berry-950">Riya</p>
                    <p className="text-xs text-blush-600 font-semibold">Founder, Lead Stylist & Bridal Director</p>
                    <p className="text-[11px] text-berry-900/50 mt-0.5">R Riya Beauty Salon • Nizampura</p>
                  </div>
                </div>

                {/* Floating Girl Boss Badge */}
                <div className="absolute -bottom-3 -right-2 bg-blush-600 text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5 animate-bounce">
                  <span>💕</span>
                  <span>Girl-Owned & Operated</span>
                </div>
              </div>
            </div>

            {/* Right Story & Pillars */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blush-50 text-blush-700 text-xs font-bold uppercase tracking-wider">
                  <Heart className="w-3.5 h-3.5 fill-current" />
                  <span>A Letter to Every Beautiful Woman</span>
                </div>
                
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-berry-950 leading-tight">
                  "I Built A Space Where You Can Truly Let Your Hair Down."
                </h2>
              </div>

              <div className="space-y-3.5 text-berry-900/80 text-sm leading-relaxed">
                <p>
                  Hey beautiful! I’m <strong>Riya</strong>. As a young woman living in Vadodara, I always felt that walking into a salon should feel like visiting a best friend's house—warm, welcoming, completely private, and full of positive energy.
                </p>
                <p>
                  Too many salons rush through your haircut, push unnecessary high-priced treatments, or make you feel judged. When I opened <strong>R Riya Beauty Salon</strong> at Crossroads, Nizampura, my dream was simple:
                </p>
                <blockquote className="p-4 rounded-2xl bg-[#FFF5F8] border-l-4 border-blush-500 font-serif italic text-berry-950 text-base">
                  "Every girl who walks into our salon should walk out feeling confident, radiant, and deeply valued. Because luxury self-care isn't a privilege—it's your right."
                </blockquote>
              </div>

              {/* 4 Pillars of R Riya */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-blush-100 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-blush-100 text-blush-700 flex items-center justify-center shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-berry-950">100% Ladies Privacy</h4>
                    <p className="text-[11px] text-berry-900/65">A safe, comfortable space where you can unwind completely.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-blush-100 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-roseGold-100 text-roseGold-700 flex items-center justify-center shrink-0">
                    <Smile className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-berry-950">Zero Pushy Sales</h4>
                    <p className="text-[11px] text-berry-900/65">Honest recommendations. We only suggest what your hair and skin truly need.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-blush-100 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-pink-100 text-pink-700 flex items-center justify-center shrink-0">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-berry-950">Italian & World Brands</h4>
                    <p className="text-[11px] text-berry-900/65">Nashi Argan (Italy), Olaplex, O3+ and Rica wax for zero damage.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 rounded-2xl bg-white border border-blush-100 shadow-xs">
                  <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                    <Coffee className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-berry-950">Warm Hospitality</h4>
                    <p className="text-[11px] text-berry-900/65">Complimentary rose green tea, relaxing music, and polite educated staff.</p>
                  </div>
                </div>
              </div>

              {/* Founder Sign-off */}
              <div className="pt-2 flex items-center justify-between">
                <div>
                  <p className="font-script text-3xl text-blush-600 leading-none">Riya Patel</p>
                  <p className="text-[11px] text-berry-900/50 mt-1">Founder, R Riya Beauty Salon</p>
                </div>

                <button
                  onClick={() => onOpenBooking()}
                  className="px-5 py-2.5 rounded-full bg-blush-600 hover:bg-blush-700 text-white font-bold text-xs shadow-pink-soft transition-all cursor-pointer"
                >
                  Book with Riya's Team &rarr;
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
