import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Sparkles, Star, MapPin, Phone, ArrowUp, MessageCircle } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { SALON_DATA } from '../data/salonData';

export default function Footer({ onOpenBooking }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-white via-blush-50/50 to-[#FFF0F4] border-t border-blush-200 pt-16 pb-28 sm:pb-24 md:pb-12 text-berry-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blush-200/80">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blush-500 via-pink-400 to-roseGold-400 flex items-center justify-center text-white font-serif font-bold text-xl italic shadow-pink-soft">
                R
              </div>
              <div>
                <span className="font-serif font-bold text-2xl text-berry-950 block leading-tight">
                  R'riya <span className="font-sans font-light text-blush-500 text-lg">Beauty Salon</span>
                </span>
                <span className="text-[10px] text-roseGold-700 font-bold uppercase tracking-widest">
                  Ladies Pamper Studio • Nizampura
                </span>
              </div>
            </div>

            <p className="text-berry-900/75 text-xs sm:text-sm leading-relaxed">
              Vadodara’s highest-rated <strong>4.9 ★ ladies-only beauty parlour & bridal studio</strong>. 
              Specializing in viral rich brunette balayage, liquid-silk hair botox, 7-step clinical hydra facials, and timeless royal bridal glam.
            </p>

            {/* Google Rating Pill */}
            <div className="inline-flex items-center gap-2 p-2 px-3 rounded-2xl bg-white border border-amber-200 shadow-sm text-xs">
              <span className="text-blue-500 font-bold">G</span>
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <span className="font-bold text-berry-950">4.9 / 5.0</span>
              <span className="text-berry-900/60 text-[11px]">(2,939+ Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif font-bold text-sm text-berry-950 uppercase tracking-wider">
              Popular Pamper
            </h4>
            <ul className="space-y-2 text-xs text-berry-900/80">
              <li>
                <Link to="/services" className="hover:text-blush-600 transition-colors">
                  Hair Botox & Keratin
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blush-600 transition-colors">
                  Rich Brunette Balayage
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-blush-600 transition-colors">
                  7-Step Hydra Facial
                </Link>
              </li>
              <li>
                <Link to="/bridal" className="hover:text-blush-600 transition-colors">
                  Royal HD Bridal Makeover
                </Link>
              </li>
              <li>
                <Link to="/builder" className="hover:text-blush-600 transition-colors">
                  Custom Pamper Builder
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-blush-600 transition-colors">
                  Transformations Lookbook
                </Link>
              </li>
            </ul>
          </div>

          {/* Salon Highlights */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-berry-950 uppercase tracking-wider">
              Why Vadodara Loves Us
            </h4>
            <ul className="space-y-2 text-xs text-berry-900/80">
              <li className="flex items-center gap-1.5">
                <span className="text-blush-600 font-bold">✓</span>
                <span>100% Exclusive Ladies Only Space</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-blush-600 font-bold">✓</span>
                <span>Near Mehsana Nagar Garba Ground</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-blush-600 font-bold">✓</span>
                <span>Minimal Wait Times & Educated Staff</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-blush-600 font-bold">✓</span>
                <span>Nashi Argan (Italy) & Olaplex Care</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-blush-600 font-bold">✓</span>
                <span>Hassle-Free Ground Floor Parking</span>
              </li>
            </ul>
          </div>

          {/* Visit & Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif font-bold text-sm text-berry-950 uppercase tracking-wider">
              Visit Salon
            </h4>
            <div className="space-y-2 text-xs text-berry-900/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-blush-600 shrink-0 mt-0.5" />
                <span>
                  Ground Floor, Shop No. 1, 2, 3, 4 Crossroads, Near Mehsana Nagar Circle, Nizampura, Vadodara 390002
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-blush-600 shrink-0" />
                <a href={`tel:${SALON_DATA.phoneFormatted.replace(/\s+/g, '')}`} className="hover:text-blush-600 font-bold">
                  {SALON_DATA.phoneFormatted}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-blush-600 shrink-0" />
                <a href={SALON_DATA.instagramUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blush-600">
                  @rriyabeautysalon (11K+)
                </a>
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-2.5 px-4 rounded-xl bg-blush-600 hover:bg-blush-700 text-white font-bold text-xs shadow-pink-soft transition-colors cursor-pointer"
                >
                  Book Appointment Now
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar - Clean Vertical Stack on Mobile */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-berry-900/60 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-1 sm:gap-1.5 leading-relaxed">
            <span>© {new Date().getFullYear()} R Riya Beauty Salon.</span>
            <span className="hidden sm:inline text-blush-300">•</span>
            <span className="inline-flex items-center justify-center gap-1">
              <span>Crafted with</span>
              <Heart className="w-3.5 h-3.5 text-blush-600 fill-blush-600 shrink-0 mx-0.5" />
              <span>for the beautiful women of Vadodara.</span>
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full hover:bg-blush-100 text-berry-900 font-medium transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blush-600" />
          </button>
        </div>

      </div>
    </footer>
  );
}
