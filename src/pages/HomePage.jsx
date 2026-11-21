import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import GoogleReviewsSection from '../components/GoogleReviewsSection';
import ServicesSection from '../components/ServicesSection';
import GlowCalculator from '../components/GlowCalculator';
import BridalStudio from '../components/BridalStudio';
import BeforeAfterGallery from '../components/BeforeAfterGallery';
import FounderStory from '../components/FounderStory';
import InstagramFeed from '../components/InstagramFeed';
import LocationHours from '../components/LocationHours';
import FAQSection from '../components/FAQSection';
import { Sparkles, ArrowRight, Heart, Crown, Star } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';

export default function HomePage({ onOpenBooking }) {
  return (
    <div className="space-y-0">
      {/* Hero Section */}
      <Hero onOpenBooking={() => onOpenBooking()} />

      {/* 4.9★ Google Reviews Section */}
      <GoogleReviewsSection />

      {/* Services Menu Section */}
      <ServicesSection onSelectService={(service) => onOpenBooking(service)} />

      {/* Dedicated Bridal Studio Section */}
      <BridalStudio onOpenBooking={(serviceName) => onOpenBooking(serviceName)} />

      {/* Interactive Custom Pamper Day Builder */}
      <GlowCalculator onOpenBookingWithCustom={(summary, price) => onOpenBooking(summary, price)} />

      {/* Before & After Transformations */}
      <BeforeAfterGallery onOpenBooking={() => onOpenBooking()} />

      {/* Founder Story - Personal note from Riya */}
      <FounderStory onOpenBooking={() => onOpenBooking()} />

      {/* Instagram Lookbook Preview */}
      <InstagramFeed />

      {/* Location, Google Maps & Live Hours */}
      <LocationHours />

      {/* FAQs */}
      <FAQSection />
    </div>
  );
}
