import React, { useState } from 'react';
import { Sparkles, Check, Gift, ArrowRight, Clock, Heart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { SALON_DATA } from '../data/salonData';

const PAMPER_ITEMS = [
  { id: 'cut', name: 'Advanced Layer Cut + Blowout', price: 699, duration: 45, icon: '✂️' },
  { id: 'botox', name: 'Luxury Hair Botox / Keratin', price: 3499, duration: 120, icon: '✨' },
  { id: 'hydra', name: '7-Step Clinical Hydra Facial', price: 2499, duration: 75, icon: '🧖‍♀️' },
  { id: 'argan', name: 'Nashi Argan Scalp Ritual', price: 1499, duration: 60, icon: '🌿' },
  { id: 'wax', name: 'Full Body Rica Brazilian Wax', price: 1999, duration: 60, icon: '🍯' },
  { id: 'nails', name: 'Gel Nails Extensions + Art', price: 1499, duration: 75, icon: '💅' },
  { id: 'pedi', name: 'Champagne Rose Pedicure', price: 899, duration: 50, icon: '🌸' },
  { id: 'thread', name: 'Painless Threading + Glow Peel', price: 299, duration: 25, icon: '🪞' },
];

export default function GlowCalculator({ onOpenBookingWithCustom }) {
  const [selectedIds, setSelectedIds] = useState(['cut', 'hydra']);

  const toggleItem = (id) => {
    setSelectedIds(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const selectedItems = PAMPER_ITEMS.filter(item => selectedIds.includes(item.id));
  const subtotal = selectedItems.reduce((acc, curr) => acc + curr.price, 0);
  const totalMinutes = selectedItems.reduce((acc, curr) => acc + curr.duration, 0);

  // Discount rule: 10% for 2 items, 15% for 3 or more
  let discountPercent = 0;
  if (selectedItems.length >= 3) {
    discountPercent = 15;
  } else if (selectedItems.length === 2) {
    discountPercent = 10;
  }

  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const finalTotal = subtotal - discountAmount;

  const handleBookPackage = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#EC4899', '#F472B6', '#E8BFA3', '#FBCFE8']
    });

    const itemNames = selectedItems.map(i => i.name).join(', ');
    const customSummary = `Custom Pamper Day (${selectedItems.length} items: ${itemNames}) for ₹${finalTotal}`;
    
    if (onOpenBookingWithCustom) {
      onOpenBookingWithCustom(customSummary, finalTotal);
    }
  };

  const handleWhatsAppBooking = () => {
    const itemNames = selectedItems.map(i => `• ${i.name} (₹${i.price})`).join('%0A');
    const text = `Hi Riya! 💕 I designed my custom pamper day on your website:%0A%0A${itemNames}%0A%0ASubtotal: ₹${subtotal}%0ADiscount (${discountPercent}% OFF): -₹${discountAmount}%0AFinal Estimated Total: ₹${finalTotal}%0A%0ACan I schedule this package for this week?`;
    window.open(`https://wa.me/${SALON_DATA.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 lg:py-24 bg-gradient-to-b from-white via-[#FFF5F8] to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-100 border border-blush-200 text-blush-800 text-xs font-bold tracking-wide uppercase">
            <Gift className="w-3.5 h-3.5 text-blush-600" />
            <span>Interactive Pamper Builder</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-berry-950 tracking-tight">
            Design Your <span className="text-gradient-pink italic font-serif">Dream Salon Day</span>
          </h2>

          <p className="text-berry-900/75 text-base sm:text-lg">
            Mix and match your favorite self-care rituals. Unlock combo discounts up to 15% OFF + complimentary VIP salon perks!
          </p>
        </div>

        {/* Builder Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Treatment Selection Grid */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between text-xs font-bold text-berry-900/60 uppercase tracking-wider px-1">
              <span>Select Your Treatments ({selectedIds.length} Selected)</span>
              <span>Tap to Toggle</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {PAMPER_ITEMS.map((item) => {
                const isSelected = selectedIds.includes(item.id);
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className={`p-4 rounded-2xl text-left border transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                      isSelected
                        ? 'bg-white border-blush-500 shadow-pink-soft ring-2 ring-blush-400/40'
                        : 'bg-white/70 border-blush-100 hover:border-blush-300 hover:bg-white'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span>
                      <div>
                        <p className={`font-serif font-bold text-sm leading-tight transition-colors ${
                          isSelected ? 'text-blush-700' : 'text-berry-950'
                        }`}>
                          {item.name}
                        </p>
                        <p className="text-[11px] text-berry-900/50 mt-0.5 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{item.duration} mins</span>
                        </p>
                      </div>
                    </div>

                    <div className="text-right pl-2">
                      <span className="font-bold text-berry-950 text-sm block">
                        ₹{item.price}
                      </span>
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-1 ml-auto border transition-all ${
                        isSelected 
                          ? 'bg-blush-600 border-blush-600 text-white' 
                          : 'border-blush-200 text-transparent'
                      }`}>
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-berry-900/60 italic px-1 pt-1">
              Tip: Select 2 treatments for 10% OFF, or 3+ treatments for 15% OFF + Free Gift!
            </p>
          </div>

          {/* Right Column: Dynamic Price Summary Card */}
          <div className="lg:col-span-5">
            <div className="glass-card rounded-3xl p-6 sm:p-7 border border-blush-200 shadow-card-soft space-y-5 sticky top-28">
              
              <div className="flex items-center justify-between border-b border-blush-100 pb-4">
                <div>
                  <h3 className="font-serif font-bold text-xl text-berry-950">
                    Your Pamper Summary
                  </h3>
                  <p className="text-xs text-berry-900/60">
                    Vadodara Ladies Pamper Lounge
                  </p>
                </div>
                <span className="text-2xl animate-heartbeat">💖</span>
              </div>

              {/* Selected List */}
              <div className="space-y-2.5 max-h-48 overflow-y-auto pr-1">
                {selectedItems.length === 0 ? (
                  <p className="text-xs text-berry-900/50 italic py-4 text-center">
                    Please select at least one treatment on the left to build your package!
                  </p>
                ) : (
                  selectedItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between text-xs py-1">
                      <span className="text-berry-950 font-medium">
                        {item.icon} {item.name}
                      </span>
                      <span className="font-bold text-berry-950">
                        ₹{item.price}
                      </span>
                    </div>
                  ))
                )}
              </div>

              {/* Perks Unlocked Callout */}
              {selectedItems.length >= 2 && (
                <div className="p-3 bg-blush-50 rounded-2xl border border-blush-200/80 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-blush-700">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Unlocked Complimentary Perks:</span>
                  </div>
                  <ul className="text-[11px] text-berry-900/80 space-y-0.5 pl-4 list-disc">
                    <li>Complimentary Rose Water Facial Mist</li>
                    {selectedItems.length >= 3 && (
                      <li className="font-semibold text-roseGold-700">
                        👑 Free Acupressure Head Massage (15 mins)
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Price Calculations */}
              <div className="border-t border-blush-100 pt-4 space-y-2 text-xs">
                <div className="flex justify-between text-berry-900/70">
                  <span>Subtotal ({selectedItems.length} items)</span>
                  <span>₹{subtotal.toLocaleString('en-IN')}</span>
                </div>

                <div className="flex justify-between text-berry-900/70">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-blush-500" />
                    <span>Estimated Salon Time</span>
                  </span>
                  <span>{Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m</span>
                </div>

                {discountAmount > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>Combo Savings ({discountPercent}% OFF)</span>
                    <span>-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex items-baseline justify-between pt-3 border-t border-blush-100 text-berry-950">
                  <div>
                    <span className="font-bold text-sm block">Total Estimated Fee</span>
                    <span className="text-[10px] text-berry-900/50">All taxes included</span>
                  </div>
                  <span className="font-serif font-black text-3xl text-gradient-pink">
                    ₹{finalTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="button"
                  disabled={selectedItems.length === 0}
                  onClick={handleBookPackage}
                  className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-blush-600 to-pink-500 hover:from-blush-700 hover:to-pink-600 disabled:opacity-50 text-white font-bold text-sm shadow-pink-soft transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-pink-200" />
                  <span>Reserve This Pamper Session</span>
                </button>

                <button
                  type="button"
                  disabled={selectedItems.length === 0}
                  onClick={handleWhatsAppBooking}
                  className="w-full py-2.5 px-4 rounded-2xl bg-white border border-emerald-300 hover:bg-emerald-50 text-emerald-800 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>💬 Send Custom Package on WhatsApp</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
