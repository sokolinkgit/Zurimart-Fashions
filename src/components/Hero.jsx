import React from 'react';
import { 
  Truck, 
  MapPin, 
  PhoneCall, 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  ShoppingBag,
  MessageCircle,
  Clock
} from 'lucide-react';
import { CONTACT_INFO } from '../data/stores';

export default function Hero({ setActiveGender, onOpenWhatsAppChat }) {
  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-linear-to-b from-[#FAF6F0] via-[#F5EFE6] to-[#FAF8F5] pt-6 pb-16 md:py-16">
      {/* Decorative subtle ambient lights */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-rose-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-amber-200/25 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text & Brand Presentation */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 bg-rose-100/80 border border-rose-200/80 px-3.5 py-1.5 rounded-full text-rose-800 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-rose-600 animate-ping" />
              <span>New Season Drop • Kenya’s Top Ladies Fashion Boutique</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-stone-900 leading-[1.12]">
              Elevate Your Grace with{' '}
              <span className="text-rose-700 italic">Zurimart Fashions</span>
            </h1>

            {/* Sub-headline description */}
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Specialists in exquisite <strong className="text-stone-900 font-semibold">ladies dresses, Ankara print fusion, corporate office wear, jumpsuits</strong> and chic casuals. Designed for the confident, elegant woman — with our freshly introduced <strong className="text-stone-900 font-semibold">scalable Men’s Section</strong> for complete wardrobe harmony.
            </p>

            {/* Quick Key Highlights: Delivery, Shops, WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white/80 backdrop-blur-xs border border-stone-200/80 p-3.5 rounded-xl shadow-xs text-left">
                <div className="flex items-center gap-2 text-rose-700 font-bold text-xs uppercase tracking-wider mb-1">
                  <Truck className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>Countrywide</span>
                </div>
                <p className="text-xs text-stone-600">
                  Delivery to all <strong className="text-stone-800">47 Counties</strong> in Kenya. Same-day Nairobi & Murang’a.
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-xs border border-stone-200/80 p-3.5 rounded-xl shadow-xs text-left">
                <div className="flex items-center gap-2 text-amber-700 font-bold text-xs uppercase tracking-wider mb-1">
                  <MapPin className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>2 Physical Shops</span>
                </div>
                <p className="text-xs text-stone-600">
                  <strong className="text-stone-800">1: Kawangware</strong> (Naivasha Rd) & <strong className="text-stone-800">2: Murang’a Town</strong> (CBD).
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-xs border border-stone-200/80 p-3.5 rounded-xl shadow-xs text-left">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider mb-1">
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Order on WhatsApp</span>
                </div>
                <p className="text-xs text-stone-600">
                  Instant order assistance: <strong className="text-stone-800 font-mono">0724 293 125</strong>
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <button
                onClick={() => {
                  setActiveGender('ladies');
                  scrollTo('catalog');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-rose-700 hover:bg-rose-800 text-white px-7 py-3.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Shop Ladies Boutique</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  setActiveGender('men');
                  scrollTo('catalog');
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-black text-white px-6 py-3.5 rounded-full text-sm font-bold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>👔 Men’s Collection</span>
                <span className="text-[10px] bg-amber-400 text-stone-900 px-2 py-0.5 rounded-full font-bold">
                  New
                </span>
              </button>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Zurimart Fashions! I would like to order or inquire about your clothes.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-3.5 rounded-full text-sm font-bold shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: 0724 293 125</span>
              </a>
            </div>

            {/* Quick Guarantees bar */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-stone-500 pt-2 border-t border-stone-200">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                100% Quality Fabric Guarantee
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-amber-600" />
                Fast Dispatch in Hours
              </span>
              <span>•</span>
              <span>Lipa na M-Pesa / Buy Goods Till</span>
            </div>

          </div>

          {/* Right Featured Editorial Hero Image (Kenyan Black Lady) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Backing decorative frame */}
              <div className="absolute -inset-2 rounded-3xl bg-linear-to-tr from-rose-600 via-amber-500 to-rose-400 opacity-20 blur-lg transform -rotate-1" />

              {/* Main Card with verified Kenyan Black Lady photo */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-stone-100 group">
                <img
                  src="/images/ladies/hero-kenyan-lady.jpg"
                  alt="Kenyan Black woman in Ankara blazer dress at Zurimart Fashions"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-stone-950/70 via-stone-900/10 to-transparent pointer-events-none" />

                {/* Overlaid Badges */}
                <div className="absolute top-4 left-4 bg-stone-950/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 shadow-md">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Featured: Nairobi Luxe Ankara Blazer Dress</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-stone-200 shadow-xl flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                        Zurimart Ladies Signature
                      </span>
                      <span className="text-[10px] bg-rose-100 text-rose-800 px-1.5 py-0.2 rounded font-semibold">
                        KSh 3,200
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-stone-800 mt-0.5">
                      Tailored with love in Kenya • Sizes 8 to 18
                    </p>
                  </div>
                  <button
                    onClick={() => {
                      setActiveGender('ladies');
                      scrollTo('catalog');
                    }}
                    className="bg-stone-900 hover:bg-rose-700 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors cursor-pointer"
                  >
                    View
                  </button>
                </div>

              </div>

              {/* Floating pill: Kawangware & Murang'a Stores */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 bg-white border border-stone-200 shadow-xl rounded-2xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="text-left pr-2">
                  <div className="text-[11px] font-bold text-stone-900">Visit Our Stores</div>
                  <div className="text-[10px] text-stone-500 font-medium">1: Kawangware • 2: Murang’a</div>
                </div>
              </div>

              {/* Floating pill: Countrywide Delivery */}
              <div className="absolute -top-4 -right-3 sm:-right-5 bg-white border border-stone-200 shadow-xl rounded-2xl p-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="text-left pr-2">
                  <div className="text-[11px] font-bold text-stone-900">Delivery Countrywide</div>
                  <div className="text-[10px] text-emerald-700 font-semibold">All 47 Counties in Kenya</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
