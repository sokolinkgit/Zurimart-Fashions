import React, { useState } from 'react';
import { 
  Truck, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  PackageCheck, 
  Search, 
  MessageCircle,
  HelpCircle,
  ArrowRight
} from 'lucide-react';
import { DELIVERY_ZONES, KENYA_COUNTIES, COURIER_PARTNERS } from '../data/delivery';
import { CONTACT_INFO } from '../data/stores';

export default function DeliveryCountrywideSection() {
  const [selectedCounty, setSelectedCounty] = useState('Nairobi');

  // Find zone matching county
  let zoneInfo = DELIVERY_ZONES[0];
  if (selectedCounty === 'Murang’a') {
    zoneInfo = DELIVERY_ZONES[1];
  } else if (['Nyeri', 'Kiambu', 'Kirinyaga', 'Embu', 'Meru', 'Nyandarua'].includes(selectedCounty)) {
    zoneInfo = DELIVERY_ZONES[2];
  } else if (['Nakuru', 'Uasin Gishu (Eldoret)', 'Kericho', 'Trans Nzoia (Kitale)', 'Bomet'].includes(selectedCounty)) {
    zoneInfo = DELIVERY_ZONES[3];
  } else if (['Kisumu', 'Kakamega', 'Kisii', 'Bungoma', 'Busia', 'Homa Bay', 'Migori'].includes(selectedCounty)) {
    zoneInfo = DELIVERY_ZONES[4];
  } else if (['Mombasa', 'Kilifi', 'Kwale', 'Taita Taveta'].includes(selectedCounty)) {
    zoneInfo = DELIVERY_ZONES[5];
  } else if (['Machakos', 'Kitui', 'Makueni', 'Isiolo', 'Garissa', 'Turkana'].includes(selectedCounty)) {
    zoneInfo = DELIVERY_ZONES[6];
  }

  const getWhatsAppDeliveryInquiry = () => {
    const text = `Hello Zurimart Fashions! I want to inquire about countrywide delivery to ${selectedCounty} County. How fast can you dispatch my order?`;
    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="delivery" className="py-16 md:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Truck className="w-3.5 h-3.5 text-rose-700" />
            <span>Fast Logistics Across Kenya</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            Delivery Countrywide to All 47 Counties
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            No matter where you are in Kenya — from Mombasa to Mandera, Lodwar to Nairobi, or right next door in Murang’a — Zurimart Fashions dispatches your handpicked fashion pieces securely and promptly.
          </p>
        </div>

        {/* Interactive Delivery Estimator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive County Calculator */}
          <div className="lg:col-span-6 bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
            <div>
              <span className="text-xs font-bold text-rose-700 uppercase tracking-wider">
                Instant Rate Checker
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold text-stone-900 mt-1">
                Check Delivery Fee & Time to Your County
              </h3>
              <p className="text-xs text-stone-500 mt-1">
                Select your county below to preview estimated shipping rates and parcel arrival time.
              </p>
            </div>

            {/* County Select */}
            <div>
              <label className="text-xs font-bold text-stone-700 block mb-2">
                Choose Your County in Kenya:
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-rose-600 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <select
                  value={selectedCounty}
                  onChange={(e) => setSelectedCounty(e.target.value)}
                  className="w-full bg-white border border-stone-300 rounded-xl pl-10 pr-4 py-3 text-sm font-semibold text-stone-900 focus:outline-hidden focus:border-rose-600 focus:ring-2 focus:ring-rose-200 cursor-pointer shadow-xs"
                >
                  {KENYA_COUNTIES.map((county) => (
                    <option key={county} value={county}>
                      {county} County
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Calculated Result Card */}
            <div className="bg-white rounded-2xl p-5 border border-stone-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                <span className="text-xs font-semibold text-stone-500">Selected Destination:</span>
                <span className="text-xs font-bold text-stone-900 bg-stone-100 px-2.5 py-1 rounded-md">
                  📍 {selectedCounty}
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] text-stone-400 uppercase font-bold block">
                    Estimated Delivery Fee
                  </span>
                  <div className="text-2xl font-extrabold text-rose-700 mt-0.5">
                    KSh {zoneInfo.rate.toLocaleString()}
                  </div>
                  <span className="text-[10px] text-stone-500">Based on standard parcel weight</span>
                </div>

                <div>
                  <span className="text-[11px] text-stone-400 uppercase font-bold block">
                    Expected Arrival
                  </span>
                  <div className="text-xs sm:text-sm font-bold text-stone-900 mt-1 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    <span>{zoneInfo.time}</span>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-xs text-stone-600 space-y-1 bg-stone-50 p-3 rounded-xl border border-stone-200">
                <div className="font-semibold text-stone-800">Delivery Method:</div>
                <p className="text-[11px] text-stone-600">{zoneInfo.method}</p>
              </div>

              <a
                href={getWhatsAppDeliveryInquiry()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl text-xs font-bold transition-all shadow-xs active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Confirm Delivery to {selectedCounty} via WhatsApp</span>
              </a>
            </div>

            <p className="text-[11px] text-stone-500 italic text-center">
              * Same-day door delivery available within Nairobi & Murang’a town for orders placed before 3:00 PM.
            </p>
          </div>

          {/* Right Column: How Zurimart Countrywide Delivery Works */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Step-by-Step Delivery Flow */}
            <div className="bg-stone-50 rounded-3xl p-6 sm:p-8 border border-stone-200/90 shadow-sm space-y-6">
              <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
                How Your Order Travels to You
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-xl bg-rose-700 text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">
                      Order & Size Confirmation on WhatsApp
                    </h4>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                      Select your fashion pieces and click order. Our team on <strong className="text-stone-800">0724293125</strong> will double check your measurements and confirm stock at Kawangware or Murang’a.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-xl bg-amber-600 text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">
                      Careful Boutique Packaging & Quality Check
                    </h4>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                      Every dress, suit, or shirt is thoroughly inspected for pristine stitches, ironed, and sealed in waterproof branded boutique packaging.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0 text-sm shadow-xs">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-stone-900">
                      Countrywide Waybill Dispatch & Live Updates
                    </h4>
                    <p className="text-xs text-stone-600 mt-0.5 leading-relaxed">
                      We dispatch via our trusted logistics network and immediately send you your parcel tracking receipt or rider phone number via WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Courier Partners Grid */}
            <div className="bg-white rounded-3xl p-6 border border-stone-200 shadow-xs space-y-3">
              <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                Our Trusted Countrywide Logistics Partners:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {COURIER_PARTNERS.map((cp, idx) => (
                  <div key={idx} className="p-2.5 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <div>
                      <strong className="text-stone-900 block text-xs">{cp.name}</strong>
                      <span className="text-[11px] text-stone-500">{cp.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
