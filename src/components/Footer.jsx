import React from 'react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Truck, 
  Heart, 
  Clock, 
  ShieldCheck, 
  Sparkles,
  Store
} from 'lucide-react';
import { CONTACT_INFO, STORES } from '../data/stores';

export default function Footer({ onNavigateSection }) {
  const scrollTo = (id) => {
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-300 pt-16 pb-12 border-t border-stone-800">
      
      {/* Top Banner strip */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-stone-800">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-900/60 border border-stone-800">
            <div className="w-12 h-12 rounded-xl bg-rose-600/20 text-rose-500 flex items-center justify-center shrink-0">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">Delivery Countrywide</h4>
              <p className="text-xs text-stone-400 mt-0.5">Prompt delivery across all 47 Kenyan counties.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-900/60 border border-stone-800">
            <div className="w-12 h-12 rounded-xl bg-amber-600/20 text-amber-500 flex items-center justify-center shrink-0">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">2 Physical Store Locations</h4>
              <p className="text-xs text-stone-400 mt-0.5">Shop 1: Kawangware (Nairobi) & Shop 2: Murang’a Town.</p>
            </div>
          </div>

          <div className="flex items-center gap-4 p-4 rounded-2xl bg-stone-900/60 border border-stone-800">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 text-emerald-500 flex items-center justify-center shrink-0">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <div>
              <h4 className="text-white font-bold text-sm">WhatsApp Orders: 0724 293 125</h4>
              <p className="text-xs text-stone-400 mt-0.5">Quick replies & size assistance from our stylists.</p>
            </div>
          </div>

        </div>
      </div>

      {/* Main Footer Links & Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-9 h-9 rounded-full bg-linear-to-tr from-rose-700 via-amber-600 to-rose-500 flex items-center justify-center text-white font-serif text-lg font-bold">
                Z
              </span>
              <div>
                <span className="font-serif-luxury text-2xl font-bold tracking-tight text-white">
                  ZURIMART
                </span>
                <span className="block text-[10px] tracking-[0.25em] font-semibold text-rose-500 uppercase">
                  FASHIONS
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed">
              Kenya’s premier fashion boutique specializing in elegant ladies dresses, authentic Ankara fusion, executive workwear suits, and stylish coords — plus our scalable Men’s Collection designed for timeless modern style.
            </p>

            <div className="pt-2">
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Zurimart Fashions!')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp: {CONTACT_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Shop 1 Kawangware Details */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Shop 1: Kawangware (Nairobi)</span>
            </div>
            <div className="text-xs text-stone-400 space-y-1.5">
              <p className="text-white font-semibold">Naivasha Road, Stage 46</p>
              <p>Near BP Petrol Station, Dagoretti North, Nairobi</p>
              <p className="text-[11px] text-amber-300">Opposite Equity Agent & Stage Plaza</p>
              <p className="text-stone-300 pt-1">Mon – Sat: 8:00 AM – 8:30 PM</p>
              <p className="text-stone-300">Sun: 10:00 AM – 6:00 PM</p>
              <p className="text-white font-mono font-semibold pt-1">Tel: 0724 293 125</p>
            </div>
          </div>

          {/* Shop 2 Murang'a Details */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
              <MapPin className="w-4 h-4" />
              <span>Shop 2: Murang’a Town</span>
            </div>
            <div className="text-xs text-stone-400 space-y-1.5">
              <p className="text-white font-semibold">Uhuru Highway, CBD</p>
              <p>Central Business District, Murang’a Town</p>
              <p className="text-[11px] text-amber-300">Opposite Murang’a Municipal Market</p>
              <p className="text-stone-300 pt-1">Mon – Sat: 8:00 AM – 8:00 PM</p>
              <p className="text-stone-300">Sun: 11:00 AM – 5:00 PM</p>
              <p className="text-white font-mono font-semibold pt-1">Tel: 0724 293 125</p>
            </div>
          </div>

          {/* Quick Links & Countrywide Delivery */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button onClick={() => scrollTo('catalog')} className="hover:text-rose-400 transition-colors cursor-pointer">
                  👗 Ladies Collection
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('catalog')} className="hover:text-amber-400 transition-colors cursor-pointer">
                  👔 Men’s Section (Scalable)
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('delivery')} className="hover:text-rose-400 transition-colors cursor-pointer">
                  🚚 Countrywide Delivery
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('stores')} className="hover:text-rose-400 transition-colors cursor-pointer">
                  📍 Kawangware & Murang’a Shops
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('lookbook')} className="hover:text-rose-400 transition-colors cursor-pointer">
                  ✨ Fashion Lookbook
                </button>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
        <div>
          © {new Date().getFullYear()} <strong className="text-stone-300">Zurimart Fashions</strong>. All Rights Reserved.
        </div>
        <div className="flex items-center gap-1.5 text-stone-400">
          <span>Proudly Serving Kenyan Fashionistas</span>
          <span>•</span>
          <span className="text-emerald-400 font-semibold">Delivery Countrywide 🇰🇪</span>
        </div>
      </div>

    </footer>
  );
}
