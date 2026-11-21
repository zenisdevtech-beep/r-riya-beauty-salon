import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AnnouncementBanner from './components/AnnouncementBanner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import MobileBottomBar from './components/MobileBottomBar';
import ScrollToTop from './components/ScrollToTop';

// Multi-Page Routes
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BridalPage from './pages/BridalPage';
import ReviewsPage from './pages/ReviewsPage';
import BuilderPage from './pages/BuilderPage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import { MessageCircle, Sparkles } from 'lucide-react';
import { SALON_DATA } from './data/salonData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [customPrice, setCustomPrice] = useState(null);

  const handleOpenBooking = (service = null, price = null) => {
    setSelectedService(service);
    setCustomPrice(price);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(null);
    setCustomPrice(null);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FFFDFE] text-berry-950 font-sans selection:bg-blush-200 selection:text-berry-900">
        
        {/* Top Announcement Alert Bar */}
        <AnnouncementBanner onOpenBooking={() => handleOpenBooking('Special Pamper Offer - Hair Botox & Hydra Facial')} />

        {/* Clean, Fixed Single-Line Navbar */}
        <Navbar onOpenBooking={() => handleOpenBooking()} />

        {/* Multi-Page Routes */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
            <Route path="/services" element={<ServicesPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/bridal" element={<BridalPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/builder" element={<BuilderPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/gallery" element={<GalleryPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/about" element={<AboutPage onOpenBooking={handleOpenBooking} />} />
            <Route path="/contact" element={<ContactPage onOpenBooking={handleOpenBooking} />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage onOpenBooking={handleOpenBooking} />} />
          </Routes>
        </main>

        {/* Footer */}
        <Footer onOpenBooking={() => handleOpenBooking()} />

        {/* Floating Quick Action Buttons (Desktop) */}
        <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
          <a
            href={`https://wa.me/${SALON_DATA.whatsapp}?text=Hi%20Riya!%20I%20would%20like%20to%20inquire%20about%20salon%20services.`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-105 transition-all group relative"
            aria-label="WhatsApp with Riya"
          >
            <MessageCircle className="w-7 h-7 fill-white" />
            <span className="absolute right-16 bg-white text-berry-950 font-bold text-xs px-3 py-1.5 rounded-full shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-blush-100 pointer-events-none">
              Chat on WhatsApp 💕
            </span>
          </a>

          <button
            onClick={() => handleOpenBooking()}
            className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-blush-600 to-pink-500 hover:from-blush-700 hover:to-pink-600 text-white flex items-center justify-center shadow-pink-soft hover:shadow-pink-glow hover:scale-105 transition-all group relative cursor-pointer"
            aria-label="Book appointment"
          >
            <Sparkles className="w-6 h-6 animate-pulse" />
            <span className="absolute right-16 bg-white text-berry-950 font-bold text-xs px-3 py-1.5 rounded-full shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-blush-100 pointer-events-none">
              Book Pamper Session ✨
            </span>
          </button>
        </div>

        {/* Sticky Mobile Bottom Quick Bar */}
        <MobileBottomBar onOpenBooking={() => handleOpenBooking()} />

        {/* Multi-Step Booking Modal */}
        <BookingModal
          isOpen={isBookingOpen}
          onClose={handleCloseBooking}
          initialService={selectedService}
          initialPrice={customPrice}
        />

      </div>
    </BrowserRouter>
  );
}
