import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Sparkles, Menu, X, Phone, Heart, Star, MapPin, Calendar, Clock } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import { getSalonCurrentStatus } from '../utils/timeHelper';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const salonStatus = getSalonCurrentStatus();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Bridal', path: '/bridal', badge: '👰' },
    { name: 'Reviews', path: '/reviews', badge: '4.9★' },
    { name: 'Glow Builder', path: '/builder' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled 
        ? 'glass-nav shadow-sm py-2 sm:py-2.5' 
        : 'bg-[#FFFDFE]/95 backdrop-blur-md py-2.5 sm:py-3 border-b border-blush-100'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 xl:gap-4">
          
          {/* Brand Logo - Compact & Chic */}
          <Link to="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-tr from-blush-500 via-pink-400 to-roseGold-400 flex items-center justify-center text-white shadow-pink-soft group-hover:scale-105 transition-transform shrink-0">
              <span className="font-serif font-bold text-lg sm:text-xl italic">R</span>
              <span className="absolute -top-1 -right-1 text-[9px] sm:text-[10px] animate-bounce">✨</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg sm:text-xl text-berry-950 tracking-tight leading-none group-hover:text-blush-600 transition-colors whitespace-nowrap">
                R'riya <span className="font-sans font-light text-blush-500 text-base sm:text-lg">Salon</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-roseGold-600 font-bold tracking-widest uppercase mt-0.5 whitespace-nowrap">
                Ladies Studio • Vadodara
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - Single line, No wrapping, Elegant active state */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2 2xl:gap-3 text-xs xl:text-sm font-medium text-berry-900/80">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  px-2.5 xl:px-3 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 flex items-center gap-1 cursor-pointer
                  ${isActive 
                    ? 'bg-blush-100/90 text-blush-700 font-bold shadow-xs' 
                    : 'text-berry-900/75 hover:text-blush-600 hover:bg-blush-50/70 font-medium'
                  }
                `}
              >
                <span>{link.name}</span>
                {link.badge && (
                  <span className="text-[10px] px-1 py-0.2 rounded bg-white/80 border border-blush-200 text-blush-600 font-bold leading-none">
                    {link.badge}
                  </span>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Items */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Google Rating Pill - Compact */}
            <Link 
              to="/reviews"
              className="hidden md:flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 rounded-full bg-amber-50/80 border border-amber-200/70 text-xs font-semibold text-amber-900 hover:bg-amber-100/70 transition-colors shrink-0"
              title="Verified 4.9★ from 2,939+ Reviews"
            >
              <div className="flex text-amber-400">
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
              <span className="font-bold text-amber-950">4.9 ★</span>
              <span className="text-amber-800 text-[11px] font-normal hidden xl:inline">(2.9K+)</span>
            </Link>

            {/* Book Now Button */}
            <button
              onClick={() => onOpenBooking()}
              className="relative group overflow-hidden px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-blush-500 via-pink-500 to-blush-600 text-white font-bold text-xs sm:text-sm shadow-pink-soft hover:shadow-pink-glow transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
            >
              <Sparkles className="w-3.5 h-3.5 text-pink-200 group-hover:rotate-12 transition-transform" />
              <span>Book Pamper</span>
            </button>
          </div>

          {/* Mobile Menu Trigger & Book Button */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={() => onOpenBooking()}
              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-blush-500 to-pink-500 text-white font-semibold text-xs flex items-center gap-1 shadow-sm sm:hidden"
            >
              <Sparkles className="w-3 h-3" />
              <span>Book</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-berry-900 hover:bg-blush-50 border border-blush-200 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-blush-600" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-blush-100 bg-[#FFFDFE] px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-4 duration-300">
          <div className="grid grid-cols-2 gap-2 py-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `
                  py-2.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors
                  ${isActive 
                    ? 'bg-blush-100 text-blush-800 font-bold border border-blush-200' 
                    : 'text-berry-900 hover:bg-blush-50 hover:text-blush-600 bg-white border border-blush-100/60'
                  }
                `}
              >
                <span>{link.name}</span>
                {link.badge ? (
                  <span className="text-[10px] text-blush-600 font-bold">{link.badge}</span>
                ) : (
                  <span className="text-blush-400 text-xs">&rarr;</span>
                )}
              </NavLink>
            ))}
          </div>

          <div className="mt-4 pt-4 border-t border-blush-100 space-y-3">
            {/* Live Hours Alert */}
            <div className="flex items-center justify-between text-xs px-3 py-2 bg-blush-50/70 rounded-xl border border-blush-100">
              <span className="text-berry-900/70">Vadodara Hours:</span>
              <span className="font-semibold text-berry-900">10:00 AM – 8:00 PM (Daily)</span>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${SALON_DATA.phoneFormatted.replace(/\s+/g, '')}`}
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white border border-blush-200 text-berry-900 font-semibold text-xs shadow-sm hover:bg-blush-50"
              >
                <Phone className="w-3.5 h-3.5 text-blush-600" />
                <span>Call Salon</span>
              </a>

              <a
                href={`https://wa.me/${SALON_DATA.whatsapp}?text=Hi%20Riya!%20I%20would%20like%20to%20inquire%20about%20services%20at%20Nizampura.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 font-semibold text-xs shadow-sm hover:bg-emerald-100/70"
              >
                <span>💬 WhatsApp</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blush-500 to-pink-500 text-white font-bold text-xs sm:text-sm shadow-pink-soft flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Appointment with Riya</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
