import React, { useState, useEffect } from 'react';
import { X, Sparkles, Calendar, Clock, User, Phone, CheckCircle, Heart, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SALON_DATA, SERVICES, TIME_SLOTS } from '../data/salonData';

export default function BookingModal({ isOpen, onClose, initialService, initialPrice }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService ? (typeof initialService === 'object' ? initialService.name : initialService) : SERVICES[0].name,
    date: new Date().toISOString().split('T')[0],
    time: '11:00 AM',
    notes: '',
    stylist: 'Any Senior Stylist'
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({
        ...prev,
        service: typeof initialService === 'object' ? initialService.name : initialService
      }));
    }
  }, [initialService]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger lovely confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#EC4899', '#F472B6', '#E8BFA3', '#FBCFE8', '#D89E7E']
    });

    setSubmitted(true);

    // Format WhatsApp message
    const message = `*🌸 New Pamper Appointment Booking - R Riya Salon*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Phone:* ${formData.phone}%0A` +
      `*Service:* ${formData.service}%0A` +
      `*Date:* ${formData.date}%0A` +
      `*Preferred Time:* ${formData.time}%0A` +
      `*Stylist:* ${formData.stylist}%0A` +
      (formData.notes ? `*Special Notes:* ${formData.notes}%0A` : '') +
      `%0A_Sent via R Riya Beauty Salon Web App_`;

    setTimeout(() => {
      window.open(`https://wa.me/${SALON_DATA.whatsapp}?text=${message}`, '_blank');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-berry-950/60 backdrop-blur-sm animate-in fade-in duration-200">
      
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-blush-200 overflow-hidden max-h-[90vh] flex flex-col animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header */}
        <div className="bg-gradient-to-r from-blush-600 via-pink-500 to-roseGold-500 p-5 text-white flex items-center justify-between shrink-0 relative">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-lg">
              ✨
            </div>
            <div>
              <h3 className="font-serif font-bold text-lg sm:text-xl leading-tight">
                Book Your Pamper Session
              </h3>
              <p className="text-xs text-pink-100 flex items-center gap-1 mt-0.5">
                <span>R Riya Beauty Salon</span>
                <span>•</span>
                <span>4.9 ★ Rating</span>
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors cursor-pointer"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          
          {submitted ? (
            <div className="py-8 text-center space-y-4 animate-in zoom-in-95">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto text-3xl">
                <CheckCircle className="w-10 h-10 stroke-[2.5]" />
              </div>

              <div className="space-y-1">
                <h4 className="font-serif font-bold text-2xl text-berry-950">
                  Appointment Request Sent! 💕
                </h4>
                <p className="text-sm text-berry-900/70 max-w-xs mx-auto">
                  Thank you, <strong>{formData.name}</strong>! Opening WhatsApp to instantly confirm your slot with Riya and team.
                </p>
              </div>

              <div className="p-4 bg-blush-50 rounded-2xl border border-blush-200 text-left text-xs space-y-1.5 max-w-sm mx-auto">
                <p><strong>Service:</strong> {formData.service}</p>
                <p><strong>Date & Time:</strong> {formData.date} at {formData.time}</p>
                <p><strong>Location:</strong> Ground Floor Crossroads, Nizampura</p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-6 py-2.5 rounded-full bg-blush-600 text-white font-bold text-xs shadow-sm"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Selected Service Selection */}
              <div>
                <label className="block text-xs font-bold text-berry-950 uppercase tracking-wider mb-1.5">
                  Treatment / Service
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-blush-200 bg-blush-50/40 text-sm text-berry-950 font-medium focus:outline-none focus:ring-2 focus:ring-blush-400"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} (₹{s.price})
                    </option>
                  ))}
                  <option value="Custom Pamper Package">
                    ✨ Custom Pamper Day / Hair + Skin
                  </option>
                  <option value="Royal HD Bridal Consultation">
                    👰 Royal Bridal Consultation with Riya
                  </option>
                </select>
              </div>

              {/* Date & Time Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-berry-950 uppercase tracking-wider mb-1.5">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      min={new Date().toISOString().split('T')[0]}
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-blush-200 bg-blush-50/40 text-sm text-berry-950 font-medium focus:outline-none focus:ring-2 focus:ring-blush-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-berry-950 uppercase tracking-wider mb-1.5">
                    Time Slot
                  </label>
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-blush-200 bg-blush-50/40 text-sm text-berry-950 font-medium focus:outline-none focus:ring-2 focus:ring-blush-400"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-berry-950 uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Pooja Patel"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-blush-200 bg-blush-50/40 text-sm text-berry-950 focus:outline-none focus:ring-2 focus:ring-blush-400 placeholder:text-berry-900/40"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-berry-950 uppercase tracking-wider mb-1.5">
                    WhatsApp / Phone
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-blush-200 bg-blush-50/40 text-sm text-berry-950 focus:outline-none focus:ring-2 focus:ring-blush-400 placeholder:text-berry-900/40"
                    />
                  </div>
                </div>
              </div>

              {/* Stylist Preference */}
              <div>
                <label className="block text-xs font-bold text-berry-950 uppercase tracking-wider mb-1.5">
                  Stylist Preference
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  {['Any Senior Stylist', 'Riya (Founder)', 'Skin Specialist'].map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setFormData({ ...formData, stylist: s })}
                      className={`p-2 rounded-xl border text-center transition-all ${
                        formData.stylist === s
                          ? 'bg-blush-100 border-blush-500 text-blush-800 font-bold'
                          : 'border-blush-200 text-berry-900/70 hover:bg-blush-50'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Notes */}
              <div>
                <label className="block text-xs font-bold text-berry-950 uppercase tracking-wider mb-1.5">
                  Special Request or Hair/Skin Notes (Optional)
                </label>
                <textarea
                  rows="2"
                  placeholder="e.g. I have sensitive skin, or looking for face-framing layers"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-blush-200 bg-blush-50/40 text-sm text-berry-950 focus:outline-none focus:ring-2 focus:ring-blush-400 placeholder:text-berry-900/40"
                />
              </div>

              {/* Privacy Notice */}
              <p className="text-[11px] text-berry-900/60 italic text-center">
                🔒 100% Ladies Only Environment • Zero booking fees required now • Pay after your pamper session.
              </p>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 px-5 rounded-2xl bg-gradient-to-r from-blush-600 via-pink-500 to-roseGold-500 hover:from-blush-700 hover:to-pink-600 text-white font-bold text-sm shadow-pink-soft flex items-center justify-center gap-2 group cursor-pointer transition-all"
              >
                <Sparkles className="w-4 h-4 text-pink-200 group-hover:rotate-12 transition-transform" />
                <span>Confirm & Open WhatsApp</span>
              </button>
            </form>
          )}

        </div>
      </div>

    </div>
  );
}
