import React from 'react';
import { 
  Sparkles, 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  TrendingUp, 
  MessageCircle,
  Shirt
} from 'lucide-react';
import { CONTACT_INFO } from '../data/stores';

export default function MensScalabilityBanner({ onSwitchToMen }) {
  const getWhatsAppMenInquiry = () => {
    const text = `Hello Zurimart Fashions! I am interested in your Men’s Collection and scalable men’s designs. What new drops do you have in stock?`;
    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-14 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-linear-to-r from-stone-800/90 to-stone-800/50 p-8 sm:p-12 rounded-3xl border border-stone-700/80 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-400/30 text-amber-300 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                <TrendingUp className="w-3.5 h-3.5" />
                <span>Scalable Wardrobe Extension</span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-white leading-tight">
                Introducing <span className="text-amber-400 italic">Zurimart Men</span>
              </h2>

              <p className="text-sm sm:text-base text-stone-300 max-w-2xl leading-relaxed">
                While <strong className="text-white">Zurimart Fashions</strong> is proudly rooted as Kenya’s premier <strong className="text-rose-400">Ladies Fashion Store</strong>, our scalable architecture now brings you a curated line of gentleman’s wear: refined African print shirts, smart-casual blazers, and luxury weekend shirts.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
                <div className="p-3 bg-stone-900/60 rounded-xl border border-stone-700">
                  <div className="text-xs font-bold text-amber-400 mb-0.5">👔 Smart Casual Suits</div>
                  <p className="text-[11px] text-stone-400">Executive blazers for modern Nairobi boardrooms & evening events.</p>
                </div>
                <div className="p-3 bg-stone-900/60 rounded-xl border border-stone-700">
                  <div className="text-xs font-bold text-amber-400 mb-0.5">✨ African Craft Shirts</div>
                  <p className="text-[11px] text-stone-400">Authentic embroidery for traditional ceremonies & church.</p>
                </div>
                <div className="p-3 bg-stone-900/60 rounded-xl border border-stone-700">
                  <div className="text-xs font-bold text-amber-400 mb-0.5">🌴 Relaxed Resort Wear</div>
                  <p className="text-[11px] text-stone-400">Breathable lightweight printed shirts for vacations & weekends.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <button
                onClick={onSwitchToMen}
                className="w-full flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 py-3.5 px-6 rounded-2xl font-bold text-sm shadow-lg hover:shadow-xl transition-all cursor-pointer active:scale-95"
              >
                <span>Browse Men’s Section</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={getWhatsAppMenInquiry()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-600 py-3.5 px-6 rounded-2xl font-bold text-xs shadow-xs transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400 fill-current" />
                <span>Custom Men’s Order (0724 293 125)</span>
              </a>

              <p className="text-[11px] text-stone-400 text-center">
                Need matching couple outfits for ruracio or weddings? WhatsApp us anytime!
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
