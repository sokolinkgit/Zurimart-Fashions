import React from 'react';
import { Star, CheckCircle, MessageCircle, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/testimonials';
import { CONTACT_INFO } from '../data/stores';

export default function CustomerReviews() {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1 text-amber-500 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            Loved by Fashionistas Across Kenya
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-2">
            Hear from our wonderful customers who visit our shops in Kawangware & Murang’a, or order for countrywide parcel delivery.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAF8F5] p-6 rounded-3xl border border-stone-200/90 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-stone-300" />
                </div>

                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed italic mb-4">
                  "{t.text}"
                </p>
              </div>

              <div className="pt-3 border-t border-stone-200/60">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-xs text-stone-900 flex items-center gap-1">
                      <span>{t.name}</span>
                      {t.verified && <CheckCircle className="w-3 h-3 text-emerald-600" />}
                    </h4>
                    <span className="text-[11px] text-stone-500">{t.role}</span>
                  </div>
                </div>
                <div className="text-[10px] text-rose-700 font-semibold mt-1">
                  📍 {t.location}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Review via WhatsApp Banner */}
        <div className="mt-12 text-center">
          <a
            href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Zurimart Fashions! I would like to leave feedback / review on my recent purchase.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 px-5 py-2.5 rounded-full text-xs font-bold transition-all border border-stone-200"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600 fill-current" />
            <span>Bought from us? Share your review on WhatsApp: 0724 293 125</span>
          </a>
        </div>

      </div>
    </section>
  );
}
