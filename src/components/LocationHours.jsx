import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Check, Copy, Calendar, AlertCircle } from 'lucide-react';
import { SALON_DATA } from '../data/salonData';
import { getSalonCurrentStatus } from '../utils/timeHelper';

export default function LocationHours() {
  const [copied, setCopied] = useState(false);
  const status = getSalonCurrentStatus();

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SALON_DATA.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scheduleDays = [
    { day: "Monday", hours: "10:00 AM – 08:00 PM", status: "Open" },
    { day: "Tuesday", hours: "10:00 AM – 08:00 PM", status: "Open" },
    { day: "Wednesday", hours: "10:00 AM – 08:00 PM", status: "Open" },
    { day: "Thursday", hours: "10:00 AM – 08:00 PM", status: "Open" },
    { day: "Friday", hours: "10:00 AM – 08:00 PM", status: "Open" },
    { day: "Saturday", hours: "10:00 AM – 08:00 PM", status: "Peak Weekend" },
    { day: "Sunday", hours: "10:00 AM – 08:00 PM", status: "Peak Weekend" },
  ];

  return (
    <section id="location" className="py-16 lg:py-24 bg-gradient-to-b from-white via-blush-50/30 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-100 border border-blush-200 text-blush-800 text-xs font-bold tracking-wide uppercase">
            <MapPin className="w-3.5 h-3.5 text-blush-600" />
            <span>Nizampura, Vadodara</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-berry-950 tracking-tight">
            Find Us & <span className="text-gradient-pink italic font-serif">Salon Hours</span>
          </h2>

          <p className="text-berry-900/75 text-base sm:text-lg">
            Located conveniently on Ground Floor Crossroads in Nizampura, with ample parking and a serene ladies-only atmosphere.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Address, Live Hours & Contact */}
          <div className="lg:col-span-5 space-y-5 flex flex-col justify-between">
            
            {/* Live Status Card */}
            <div className="bg-white p-5 rounded-3xl border border-blush-200 shadow-card-soft">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-berry-900/60">
                  Salon Status Right Now
                </span>
                <span className="text-xs text-berry-900/50">
                  Vadodara Time: {status.istTimeString}
                </span>
              </div>

              <div className={`p-3.5 rounded-2xl border flex items-center gap-3 ${status.statusColor}`}>
                <span className={`w-3 h-3 rounded-full shrink-0 ${status.isOpen ? 'bg-emerald-500 animate-ping' : 'bg-pink-500'}`} />
                <span className="font-bold text-sm leading-tight">
                  {status.statusText}
                </span>
              </div>

              {/* Popular Times Insight from Google */}
              <div className="mt-3.5 pt-3.5 border-t border-blush-100 text-xs text-berry-900/70 space-y-1">
                <p className="font-bold text-berry-950 flex items-center gap-1">
                  <span>📈 Popular Visiting Hours:</span>
                  <span className="text-blush-600 font-semibold">{SALON_DATA.popularTimes}</span>
                </p>
                <p className="text-[11px] text-berry-900/60">
                  People typically spend <strong>30 min to 1.5 hr</strong> here. We recommend booking in advance for weekend afternoons!
                </p>
              </div>
            </div>

            {/* Address & Landmark Card */}
            <div className="bg-white p-6 rounded-3xl border border-blush-200 shadow-card-soft space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blush-100 text-blush-600 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-base text-berry-950">
                    Salon Location
                  </h4>
                  <p className="text-xs text-berry-900/80 mt-1 leading-relaxed">
                    {SALON_DATA.address}
                  </p>
                  <p className="text-[11px] text-roseGold-700 font-semibold mt-1">
                    Landmark: {SALON_DATA.landmark}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-2">
                <a
                  href={SALON_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-blush-600 hover:bg-blush-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-sm transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions (Google Maps)</span>
                </a>

                <button
                  onClick={handleCopyAddress}
                  className="p-2.5 rounded-xl border border-blush-200 hover:bg-blush-50 text-berry-900 text-xs font-semibold flex items-center justify-center transition-colors cursor-pointer"
                  title="Copy full address"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-blush-600" />}
                </button>
              </div>
            </div>

            {/* Phone & Direct Help */}
            <div className="bg-white p-5 rounded-3xl border border-blush-200 shadow-card-soft flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] text-berry-900/60 font-semibold uppercase tracking-wider block">
                    Call Reception
                  </span>
                  <a 
                    href={`tel:${SALON_DATA.phoneFormatted.replace(/\s+/g, '')}`} 
                    className="font-bold text-sm text-berry-950 hover:text-blush-600"
                  >
                    {SALON_DATA.phoneFormatted}
                  </a>
                </div>
              </div>

              <a
                href={`tel:${SALON_DATA.phoneFormatted.replace(/\s+/g, '')}`}
                className="px-4 py-2 rounded-xl bg-blush-50 text-blush-700 font-bold text-xs hover:bg-blush-100 transition-colors"
              >
                Call Now
              </a>
            </div>

          </div>

          {/* Right Column: Google Maps & Hours Table */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-5">
            
            {/* Interactive Map Embed */}
            <div className="bg-white rounded-3xl overflow-hidden border border-blush-200 shadow-card-soft h-64 sm:h-72 relative">
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
              <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-[10px] font-bold text-berry-950 shadow-sm border border-blush-200">
                📍 Ground Floor, Crossroads, Nizampura
              </div>
            </div>

            {/* Weekly Schedule Table */}
            <div className="bg-white p-5 sm:p-6 rounded-3xl border border-blush-200 shadow-card-soft">
              <div className="flex items-center gap-2 mb-3">
                <Clock className="w-4 h-4 text-blush-600" />
                <h4 className="font-serif font-bold text-sm text-berry-950">
                  Weekly Operating Schedule (10:00 AM – 08:00 PM)
                </h4>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {scheduleDays.map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex items-center justify-between py-1.5 px-3 rounded-xl bg-blush-50/50 border border-blush-100/60"
                  >
                    <span className="font-semibold text-berry-950">{item.day}</span>
                    <span className="text-berry-900/70">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
