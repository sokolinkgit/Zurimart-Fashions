import React, { useState } from 'react';
import { MessageCircle, X, MapPin, Truck, Sparkles, Send } from 'lucide-react';
import { CONTACT_INFO } from '../data/stores';

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const sendWhatsApp = (msg) => {
    const text = msg || "Hello Zurimart Fashions! I'd like to make an inquiry.";
    const url = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      
      {/* Quick Action Popover */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-white rounded-3xl shadow-2xl border border-stone-200 overflow-hidden animate-in slide-in-from-bottom duration-200">
          
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold">
                <MessageCircle className="w-5 h-5 fill-current" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Zurimart Fashions Support</h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping" />
                  Online • WhatsApp: 0724 293 125
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white p-1 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick choices list */}
          <div className="p-4 space-y-2 text-xs bg-stone-50">
            <p className="text-[11px] text-stone-500 font-semibold mb-1">
              Select what you need help with:
            </p>

            <button
              onClick={() => sendWhatsApp("Hello Zurimart Fashions! I want to order a ladies dress / outfit.")}
              className="w-full text-left p-2.5 bg-white hover:bg-stone-100 rounded-xl border border-stone-200 flex items-center justify-between text-stone-800 transition-colors font-medium cursor-pointer"
            >
              <span>👗 Order Ladies Fashion</span>
              <span className="text-emerald-600 font-bold">→</span>
            </button>

            <button
              onClick={() => sendWhatsApp("Hello Zurimart Fashions! I want to inquire about the Men’s Section.")}
              className="w-full text-left p-2.5 bg-white hover:bg-stone-100 rounded-xl border border-stone-200 flex items-center justify-between text-stone-800 transition-colors font-medium cursor-pointer"
            >
              <span>👔 Men’s Collection Inquiry</span>
              <span className="text-emerald-600 font-bold">→</span>
            </button>

            <button
              onClick={() => sendWhatsApp("Hello! What are directions to your Kawangware shop?")}
              className="w-full text-left p-2.5 bg-white hover:bg-stone-100 rounded-xl border border-stone-200 flex items-center justify-between text-stone-800 transition-colors font-medium cursor-pointer"
            >
              <span>📍 Directions to Kawangware Shop</span>
              <span className="text-emerald-600 font-bold">→</span>
            </button>

            <button
              onClick={() => sendWhatsApp("Hello! Where is your Murang’a town shop located?")}
              className="w-full text-left p-2.5 bg-white hover:bg-stone-100 rounded-xl border border-stone-200 flex items-center justify-between text-stone-800 transition-colors font-medium cursor-pointer"
            >
              <span>📍 Directions to Murang’a Shop</span>
              <span className="text-emerald-600 font-bold">→</span>
            </button>

            <button
              onClick={() => sendWhatsApp("Hello! I want to ask about countrywide delivery rates and dispatch.")}
              className="w-full text-left p-2.5 bg-white hover:bg-stone-100 rounded-xl border border-stone-200 flex items-center justify-between text-stone-800 transition-colors font-medium cursor-pointer"
            >
              <span>🚚 Countrywide Delivery Inquiry</span>
              <span className="text-emerald-600 font-bold">→</span>
            </button>
          </div>

          {/* Custom text input */}
          <div className="p-3 border-t border-stone-200 bg-white flex items-center gap-2">
            <input
              type="text"
              value={customMsg}
              onChange={(e) => setCustomMsg(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') sendWhatsApp(customMsg);
              }}
              placeholder="Type message to 0724 293 125..."
              className="flex-1 text-xs border border-stone-200 rounded-xl px-3 py-2 focus:outline-hidden focus:border-emerald-500"
            />
            <button
              onClick={() => sendWhatsApp(customMsg)}
              className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-xl cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Contact Zurimart Fashions on WhatsApp"
        className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-3.5 rounded-full shadow-2xl hover:shadow-emerald-600/40 transition-all duration-300 active:scale-95 cursor-pointer border-2 border-white"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
        <MessageCircle className="w-6 h-6 fill-current" />
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          Order on WhatsApp (0724 293 125)
        </span>
      </button>

    </div>
  );
}
