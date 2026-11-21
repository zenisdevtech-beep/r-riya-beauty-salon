import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../data/salonData';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-16 lg:py-20 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blush-50 border border-blush-200 text-blush-700 text-xs font-bold tracking-wide uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions? We've Got Answers</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-berry-950">
            Frequently Asked <span className="text-gradient-pink italic font-serif">Questions</span>
          </h2>
          
          <p className="text-berry-900/70 text-sm sm:text-base">
            Everything you need to know before visiting R Riya Beauty Salon.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? 'bg-blush-50/70 border-blush-300 shadow-sm' 
                    : 'bg-white border-blush-100 hover:border-blush-200'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className={`font-serif font-bold text-sm sm:text-base transition-colors ${
                    isOpen ? 'text-blush-700' : 'text-berry-950'
                  }`}>
                    {faq.q}
                  </span>
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-blush-600 text-white' : 'bg-blush-100 text-blush-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-berry-900/80 leading-relaxed border-t border-blush-100/60 pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
