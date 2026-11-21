import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Check, Copy, MessageCircle, Mail, Send, Sparkles } from 'lucide-react';
import InstagramIcon from '../components/InstagramIcon';
import { SALON_DATA } from '../data/salonData';
import { getSalonCurrentStatus } from '../utils/timeHelper';

export default function ContactPage({ onOpenBooking }) {
  const [copied, setCopied] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [inquiry, setInquiry] = useState({ name: '', phone: '', message: '' });
  const status = getSalonCurrentStatus();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SALON_DATA.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendInquiry = (e) => {
    e.preventDefault();
    setMessageSent(true);
    const text = `Hi Riya! I have an inquiry from your website:%0A%0A*Name:* ${inquiry.name}%0A*Phone:* ${inquiry.phone}%0A*Message:* ${inquiry.message}`;
    setTimeout(() => {
      window.open(`https://wa.me/${SALON_DATA.whatsapp}?text=${text}`, '_blank');
    }, 800);
  };

  return (
    <div className="py-10 sm:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-100 border border-blush-200 text-blush-800 text-xs font-bold tracking-wide uppercase">
            <MapPin className="w-3.5 h-3.5 text-blush-600" />
            <span>Nizampura, Vadodara</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-berry-950 tracking-tight">
            Visit & <span className="text-gradient-pink italic font-serif">Contact Us</span>
          </h1>

          <p className="text-berry-900/75 text-sm sm:text-base leading-relaxed">
            We are situated right at Ground Floor Crossroads in Nizampura, near Mehsana Nagar Garba Ground. Walk-ins and appointments are always welcome.
          </p>
        </div>

        {/* Live Status & Hours Card */}
        <div className="bg-blush-50/60 p-6 rounded-3xl border border-blush-200 max-w-3xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-berry-900/60">
                Salon Status Right Now
              </span>
              <p className="font-bold text-base text-berry-950 flex items-center gap-2 justify-center sm:justify-start">
                <span className={`w-2.5 h-2.5 rounded-full ${status.isOpen ? 'bg-emerald-500 animate-ping' : 'bg-pink-500'}`} />
                <span>{status.statusText}</span>
              </p>
              <p className="text-xs text-berry-900/60">
                Daily Hours: 10:00 AM – 08:00 PM • Peak Busy: 2:00 PM – 8:00 PM
              </p>
            </div>

            <button
              onClick={() => onOpenBooking()}
              className="px-6 py-2.5 rounded-full bg-blush-600 hover:bg-blush-700 text-white font-bold text-xs shadow-pink-soft transition-all shrink-0 cursor-pointer"
            >
              Book an Appointment
            </button>
          </div>
        </div>

        {/* 2-Column Grid: Contact Info + Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Address Card */}
            <div className="bg-white p-6 rounded-3xl border border-blush-200 shadow-card-soft space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-2xl bg-blush-100 text-blush-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg text-berry-950">
                    Salon Address
                  </h3>
                  <p className="text-xs sm:text-sm text-berry-900/80 mt-1 leading-relaxed">
                    {SALON_DATA.address}
                  </p>
                  <p className="text-xs text-roseGold-700 font-semibold mt-1">
                    Landmark: {SALON_DATA.landmark}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2 border-t border-blush-100">
                <a
                  href={SALON_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-blush-600 hover:bg-blush-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Driving Directions (Google Maps)</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="p-2.5 rounded-xl border border-blush-200 hover:bg-blush-50 text-berry-900 text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer"
                  title="Copy address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-blush-600" />}
                </button>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${SALON_DATA.phoneFormatted.replace(/\s+/g, '')}`}
                className="p-5 rounded-3xl bg-white border border-blush-200 shadow-card-soft hover:border-blush-300 transition-all flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-berry-900/60 font-semibold uppercase block">Call Us</span>
                  <span className="font-bold text-sm text-berry-950">{SALON_DATA.phoneFormatted}</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${SALON_DATA.whatsapp}?text=Hi%20Riya!%20I%20would%20like%20to%20inquire%20about%20salon%20appointments.`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-3xl bg-white border border-emerald-200 shadow-card-soft hover:bg-emerald-50/50 transition-all flex items-center gap-3"
              >
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-emerald-800 font-semibold uppercase block">WhatsApp Chat</span>
                  <span className="font-bold text-sm text-emerald-900">Instant Reply</span>
                </div>
              </a>
            </div>

            {/* Instagram Social Card */}
            <div className="p-5 rounded-3xl bg-white border border-blush-200 shadow-card-soft flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-pink-100 text-pink-600 flex items-center justify-center">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-berry-900/60 font-semibold uppercase block">Instagram</span>
                  <span className="font-bold text-sm text-berry-950">@rriyabeautysalon (11K+)</span>
                </div>
              </div>

              <a
                href={SALON_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl bg-blush-50 hover:bg-blush-100 text-blush-700 text-xs font-bold transition-colors"
              >
                Follow &rarr;
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps Embed & Quick Message */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Map Embed */}
            <div className="bg-white rounded-3xl overflow-hidden border border-blush-200 shadow-card-soft h-64 sm:h-80 relative">
              <iframe
                title="R Riya Beauty Salon Location Map"
                src="https://maps.google.com/maps?q=R%20Riya%20Beauty%20Salon%20Nizampura%20Vadodara&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>

            {/* Quick Inquiry Form */}
            <div className="bg-white p-6 rounded-3xl border border-blush-200 shadow-card-soft space-y-4">
              <h3 className="font-serif font-bold text-lg text-berry-950">
                Send a Quick Note to Riya
              </h3>

              {messageSent ? (
                <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-200 text-xs text-emerald-800 text-center font-medium">
                  Opening WhatsApp to deliver your note directly to Riya! 💕
                </div>
              ) : (
                <form onSubmit={handleSendInquiry} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={inquiry.name}
                      onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                      className="px-3.5 py-2.5 rounded-xl border border-blush-200 bg-blush-50/40 text-xs text-berry-950 focus:outline-none focus:ring-2 focus:ring-blush-400"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Your Phone / WhatsApp"
                      value={inquiry.phone}
                      onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                      className="px-3.5 py-2.5 rounded-xl border border-blush-200 bg-blush-50/40 text-xs text-berry-950 focus:outline-none focus:ring-2 focus:ring-blush-400"
                    />
                  </div>

                  <textarea
                    rows="2"
                    required
                    placeholder="What would you like to ask or book?"
                    value={inquiry.message}
                    onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-blush-200 bg-blush-50/40 text-xs text-berry-950 focus:outline-none focus:ring-2 focus:ring-blush-400"
                  />

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl bg-blush-600 hover:bg-blush-700 text-white font-bold text-xs shadow-pink-soft flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message on WhatsApp</span>
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
