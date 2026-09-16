import React from 'react';
import { 
  MapPin, 
  Clock, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  Navigation, 
  Sparkles,
  Store,
  ShieldCheck
} from 'lucide-react';
import { STORES, CONTACT_INFO } from '../data/stores';

export default function StoresSection() {
  const getWhatsAppStoreLink = (storeName) => {
    const text = `Hello Zurimart Fashions! I want to visit your ${storeName}. Could you please send me the exact live location / directions?`;
    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="stores" className="py-16 md:py-24 bg-[#F5EFE6]/60 border-y border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-200 text-amber-900 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Store className="w-3.5 h-3.5 text-amber-700" />
            <span>Visit Us In-Person</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Our 2 Physical Shop Locations
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            Experience our premium fabrics first-hand, try on designs in private fitting rooms, or pick up your online order directly at our branches in <strong className="text-stone-900">Kawangware (Nairobi)</strong> and <strong className="text-stone-900">Murang’a Town CBD</strong>.
          </p>
        </div>

        {/* The Two Stores Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {STORES.map((st) => (
            <div 
              key={st.id}
              className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Store Header Banner */}
                <div className="p-6 md:p-8 bg-linear-to-br from-stone-900 to-stone-800 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-rose-500/10 rounded-full blur-2xl" />
                  
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="inline-flex items-center gap-1.5 bg-rose-600/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                      Shop #{st.number}
                    </span>
                    <span className="text-xs bg-white/10 text-stone-200 px-2.5 py-0.5 rounded-full border border-white/20">
                      {st.badge}
                    </span>
                  </div>

                  <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white mb-1">
                    {st.name}
                  </h3>
                  <div className="flex items-center gap-2 text-stone-300 text-xs sm:text-sm">
                    <MapPin className="w-4 h-4 text-rose-400 shrink-0" />
                    <span>{st.address}</span>
                  </div>
                </div>

                {/* Store Body Details */}
                <div className="p-6 md:p-8 space-y-6">
                  
                  {/* Landmark note */}
                  <div className="p-3.5 bg-amber-50/70 border border-amber-200/80 rounded-2xl flex items-start gap-3">
                    <Navigation className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                    <div className="text-xs">
                      <strong className="text-amber-900 block font-semibold">Landmark & Getting There:</strong>
                      <span className="text-amber-800 leading-relaxed">{st.landmark}</span>
                      <p className="text-[11px] text-stone-500 mt-1 italic">{st.mapNote}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-stone-800 uppercase tracking-wider">
                      <Clock className="w-4 h-4 text-stone-500" />
                      <span>Opening Hours</span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-xs text-stone-600 bg-stone-50 p-3.5 rounded-2xl border border-stone-200/80">
                      <div>
                        <span className="text-stone-400 block text-[10px] font-bold uppercase">Monday – Saturday</span>
                        <strong className="text-stone-900 font-semibold">{st.hours.weekdays}</strong>
                      </div>
                      <div>
                        <span className="text-stone-400 block text-[10px] font-bold uppercase">Sunday</span>
                        <strong className="text-stone-900 font-semibold">{st.hours.sunday}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Services & In-store Perks */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-stone-800 uppercase tracking-wider">
                      <Sparkles className="w-4 h-4 text-rose-600" />
                      <span>In-Store Services</span>
                    </div>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-stone-600">
                      {st.features.map((feat, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>

              {/* Bottom CTAs */}
              <div className="p-6 md:p-8 pt-0 border-t border-stone-100 mt-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                  <a
                    href={getWhatsAppStoreLink(st.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-4 rounded-xl text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>WhatsApp Live Location</span>
                  </a>

                  <a
                    href="tel:0724293125"
                    className="flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 py-3 px-4 rounded-xl text-xs font-bold transition-all active:scale-95"
                  >
                    <Phone className="w-4 h-4 text-stone-600" />
                    <span>Call: {st.phone}</span>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Store Atmosphere Highlight Strip */}
        <div className="mt-12 bg-white rounded-3xl p-6 md:p-8 border border-stone-200 shadow-sm flex flex-col md:flex-row items-center gap-8">
          <img
            src="/images/shops/store-rack.jpg"
            alt="Zurimart Fashions store rack interior"
            className="w-full md:w-80 h-48 rounded-2xl object-cover shrink-0 shadow-md"
          />
          <div className="space-y-3 text-center md:text-left">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-widest">
              Walk-in Experience
            </span>
            <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
              Personalized Kenyan Fashion Styling
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
              Whether you are preparing for a church service, wedding, corporate presentation, or weekend outing, our boutique attendants at both Kawangware and Murang’a are ready to help you discover the exact cut and fit for your body shape.
            </p>
            <div className="pt-1 flex flex-wrap items-center justify-center md:justify-start gap-3">
              <span className="text-xs font-bold text-stone-900 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
                👗 500+ Curated Pieces in Racks
              </span>
              <span className="text-xs font-bold text-stone-900 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
                ✨ Custom Alterations on Request
              </span>
              <span className="text-xs font-bold text-stone-900 bg-stone-100 px-3 py-1.5 rounded-lg border border-stone-200">
                💳 M-Pesa Buy Goods Till Instant Pay
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
