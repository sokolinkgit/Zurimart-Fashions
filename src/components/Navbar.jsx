import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Phone, 
  MapPin, 
  Truck, 
  Menu, 
  X, 
  Sparkles, 
  Heart,
  MessageCircle
} from 'lucide-react';
import { CONTACT_INFO } from '../data/stores';

export default function Navbar({ 
  activeGender, 
  setActiveGender, 
  cartCount, 
  setIsCartOpen,
  onNavigateSection
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleGenderSwitch = (gender) => {
    setActiveGender(gender);
    setMobileMenuOpen(false);
    const catalogElem = document.getElementById('catalog');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-xs border-b border-stone-200">
      {/* Top Kenyan Delivery & WhatsApp Bar */}
      <div className="bg-stone-900 text-stone-100 text-xs py-2 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2 text-center md:text-left">
          <div className="flex items-center gap-2 mx-auto md:mx-0 font-medium">
            <span className="inline-flex items-center justify-center bg-rose-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse">
              Countrywide
            </span>
            <Truck className="w-3.5 h-3.5 text-amber-400" />
            <span>Fast Delivery to all 47 Counties in Kenya • Same Day in Nairobi & Murang’a</span>
          </div>

          <div className="hidden md:flex items-center gap-5 text-stone-300">
            <button 
              onClick={() => scrollTo('stores')}
              className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <MapPin className="w-3.5 h-3.5 text-rose-400" />
              <span>Shops: 1-Kawangware & 2-Murang’a</span>
            </button>
            <span className="text-stone-600">|</span>
            <a 
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Zurimart Fashions! I would like to make an inquiry.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp: {CONTACT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scrollTo('hero')} 
              className="text-left group cursor-pointer focus:outline-hidden"
            >
              <div className="flex items-center gap-2">
                <span className="w-9 h-9 rounded-full bg-linear-to-tr from-rose-700 via-amber-600 to-rose-500 flex items-center justify-center text-white shadow-md font-serif text-lg font-bold">
                  Z
                </span>
                <div>
                  <span className="font-serif-luxury text-2xl md:text-3xl font-extrabold tracking-tight text-stone-900 group-hover:text-rose-700 transition-colors">
                    ZURIMART
                  </span>
                  <span className="block text-[10px] md:text-xs tracking-[0.28em] font-semibold text-rose-600 uppercase">
                    FASHIONS • KENYA
                  </span>
                </div>
              </div>
            </button>
          </div>

          {/* Center Navigation Links & Department Tabs */}
          <nav className="hidden lg:flex items-center gap-1 bg-stone-100/90 p-1.5 rounded-full border border-stone-200/80">
            <button
              onClick={() => handleGenderSwitch('ladies')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeGender === 'ladies'
                  ? 'bg-rose-700 text-white shadow-sm'
                  : 'text-stone-700 hover:text-rose-700 hover:bg-stone-200/60'
              }`}
            >
              <span>👗 Ladies Fashion</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${activeGender === 'ladies' ? 'bg-rose-800 text-rose-100' : 'bg-stone-200 text-stone-600'}`}>
                Main
              </span>
            </button>

            <button
              onClick={() => handleGenderSwitch('men')}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                activeGender === 'men'
                  ? 'bg-stone-900 text-white shadow-sm'
                  : 'text-stone-700 hover:text-stone-900 hover:bg-stone-200/60'
              }`}
            >
              <span>👔 Men’s Section</span>
              <span className="text-[10px] bg-amber-500 text-stone-900 font-bold px-1.5 py-0.2 rounded-full animate-pulse">
                Scalable
              </span>
            </button>

            <span className="w-px h-5 bg-stone-300 mx-1" />

            <button
              onClick={() => scrollTo('stores')}
              className="px-3.5 py-2 text-xs font-semibold text-stone-600 hover:text-rose-700 transition-colors cursor-pointer"
            >
              Our 2 Shops
            </button>

            <button
              onClick={() => scrollTo('delivery')}
              className="px-3.5 py-2 text-xs font-semibold text-stone-600 hover:text-rose-700 transition-colors cursor-pointer"
            >
              Countrywide Delivery
            </button>

            <button
              onClick={() => scrollTo('lookbook')}
              className="px-3.5 py-2 text-xs font-semibold text-stone-600 hover:text-rose-700 transition-colors cursor-pointer"
            >
              Lookbook
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Quick Order Direct */}
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Zurimart Fashions! I would like to place an order.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 rounded-full text-xs font-bold shadow-xs hover:shadow-md transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: 0724293125</span>
            </a>

            {/* Shopping Bag Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="View Shopping Bag"
              className="relative p-2.5 rounded-full text-stone-800 hover:bg-stone-100 hover:text-rose-700 transition-colors cursor-pointer focus:outline-hidden"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-rose-600 text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-xs animate-bounce">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="lg:hidden p-2 rounded-lg text-stone-800 hover:bg-stone-100 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-stone-200 px-4 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              onClick={() => handleGenderSwitch('ladies')}
              className={`p-3 rounded-xl text-center font-bold text-sm border cursor-pointer ${
                activeGender === 'ladies'
                  ? 'bg-rose-700 text-white border-rose-700'
                  : 'bg-stone-50 text-stone-800 border-stone-200'
              }`}
            >
              👗 Ladies Store
              <span className="block text-[10px] opacity-80 mt-0.5">Primary Collection</span>
            </button>
            <button
              onClick={() => handleGenderSwitch('men')}
              className={`p-3 rounded-xl text-center font-bold text-sm border cursor-pointer ${
                activeGender === 'men'
                  ? 'bg-stone-900 text-white border-stone-900'
                  : 'bg-stone-50 text-stone-800 border-stone-200'
              }`}
            >
              👔 Men’s Section
              <span className="block text-[10px] text-amber-500 font-bold mt-0.5">Scalable Line</span>
            </button>
          </div>

          <div className="space-y-2 pt-2 border-t border-stone-100 text-sm font-medium">
            <button
              onClick={() => scrollTo('catalog')}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-50 flex items-center justify-between text-stone-700"
            >
              <span>Explore All Catalog</span>
              <Sparkles className="w-4 h-4 text-amber-500" />
            </button>
            <button
              onClick={() => scrollTo('stores')}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-50 flex items-center justify-between text-stone-700"
            >
              <span>Physical Shops (Kawangware & Murang’a)</span>
              <MapPin className="w-4 h-4 text-rose-500" />
            </button>
            <button
              onClick={() => scrollTo('delivery')}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-50 flex items-center justify-between text-stone-700"
            >
              <span>Countrywide Delivery Information</span>
              <Truck className="w-4 h-4 text-sky-500" />
            </button>
            <button
              onClick={() => scrollTo('lookbook')}
              className="w-full text-left py-2 px-3 rounded-lg hover:bg-stone-50 flex items-center justify-between text-stone-700"
            >
              <span>Fashion Lookbook</span>
              <Heart className="w-4 h-4 text-rose-500" />
            </button>
          </div>

          <div className="pt-3 border-t border-stone-100 space-y-2">
            <a
              href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent('Hello Zurimart Fashions! I want to order / inquire.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-sm shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Order on WhatsApp (0724 293 125)</span>
            </a>
            <a
              href="tel:0724293125"
              className="w-full flex items-center justify-center gap-2 bg-stone-100 hover:bg-stone-200 text-stone-800 py-2.5 rounded-xl font-semibold text-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us: 0724 293 125</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
