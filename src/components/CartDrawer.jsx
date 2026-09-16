import React, { useState } from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Truck, 
  MapPin, 
  MessageCircle, 
  Store, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { CONTACT_INFO } from '../data/stores';
import { KENYA_COUNTIES, DELIVERY_ZONES } from '../data/delivery';

export default function CartDrawer({
  isOpen,
  onClose,
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) {
  if (!isOpen) return null;

  const [deliveryType, setDeliveryType] = useState('countrywide'); // 'countrywide' | 'kawangware_pickup' | 'muranga_pickup'
  const [selectedCounty, setSelectedCounty] = useState('Nairobi');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [deliveryAddress, setDeliveryAddress] = useState('');

  // Calculate items subtotal
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Calculate delivery fee
  let deliveryFee = 0;
  if (deliveryType === 'countrywide') {
    if (selectedCounty === 'Murang’a') {
      deliveryFee = 200;
    } else if (selectedCounty === 'Nairobi') {
      deliveryFee = 250;
    } else if (['Kiambu', 'Nyeri', 'Kirinyaga', 'Embu', 'Machakos'].includes(selectedCounty)) {
      deliveryFee = 300;
    } else if (['Nakuru', 'Naivasha', 'Eldoret', 'Kitale'].includes(selectedCounty)) {
      deliveryFee = 350;
    } else {
      deliveryFee = 400;
    }
  }

  const grandTotal = subtotal + deliveryFee;

  const handleWhatsAppCheckout = () => {
    // Trigger confetti celebration
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch (e) {
      // Ignore if confetti fails
    }

    let itemsList = cartItems
      .map(
        (it, idx) =>
          `${idx + 1}. *${it.name}*\n   • Size: ${it.selectedSize || it.sizes[0]} | Color: ${it.selectedColor || it.colors[0]?.name || 'Standard'}\n   • Qty: ${it.quantity} x KSh ${it.price.toLocaleString()} = KSh ${(it.price * it.quantity).toLocaleString()}`
      )
      .join('\n\n');

    let deliveryNotice = '';
    if (deliveryType === 'kawangware_pickup') {
      deliveryNotice = '🏬 Pick Up In-Person at Kawangware Branch (Naivasha Rd, Nairobi) [FREE]';
    } else if (deliveryType === 'muranga_pickup') {
      deliveryNotice = '🏬 Pick Up In-Person at Murang’a Town Branch (Uhuru Hwy CBD) [FREE]';
    } else {
      deliveryNotice = `🚚 Countrywide Delivery to ${selectedCounty} (Est. Delivery Fee: KSh ${deliveryFee})`;
    }

    const message = `*NEW ORDER - ZURIMART FASHIONS* 👗👔
------------------------------------------
${itemsList}
------------------------------------------
*Items Subtotal:* KSh ${subtotal.toLocaleString()}
*Delivery:* ${deliveryNotice}
*GRAND TOTAL:* KSh ${grandTotal.toLocaleString()}
------------------------------------------
*Customer Details:*
• Name: ${customerName || 'Customer'}
• Phone: ${customerPhone || 'Not specified'}
• Specific Town / Area / Notes: ${deliveryAddress || selectedCounty}

Please confirm availability and share M-Pesa Till number for payment. Thank you!`;

    const url = `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col border-l border-stone-200">
          
          {/* Header */}
          <div className="p-5 border-b border-stone-200 flex items-center justify-between bg-[#FAF8F5]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-rose-700 text-white flex items-center justify-center font-bold text-xs">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <h2 className="font-serif-luxury font-bold text-lg text-stone-900">
                  Your Shopping Bag
                </h2>
                <p className="text-[11px] text-stone-500">
                  {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} selected
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              aria-label="Close cart"
              className="p-2 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {cartItems.length === 0 ? (
              <div className="py-16 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <div>
                  <h3 className="font-bold text-stone-800 text-base">Your Bag is Empty</h3>
                  <p className="text-xs text-stone-500 mt-1 max-w-xs mx-auto">
                    Explore our beautiful ladies dresses, Ankara sets, suits, or men’s collection to begin.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="bg-rose-700 hover:bg-rose-800 text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-3">
                  {cartItems.map((item, index) => (
                    <div
                      key={`${item.id}-${item.selectedSize}-${item.selectedColor}-${index}`}
                      className="flex gap-3.5 p-3 rounded-2xl bg-stone-50 border border-stone-200/80"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-24 rounded-xl object-cover object-top shrink-0 border border-stone-200"
                      />

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between gap-1">
                            <h4 className="font-bold text-xs text-stone-900 line-clamp-1">
                              {item.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(index)}
                              aria-label="Remove item"
                              className="text-stone-400 hover:text-rose-600 p-0.5 cursor-pointer"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="text-[11px] text-stone-500 mt-0.5 space-x-2">
                            <span>Size: <strong className="text-stone-700">{item.selectedSize || item.sizes[0]}</strong></span>
                            <span>•</span>
                            <span>Color: <strong className="text-stone-700">{item.selectedColor || item.colors[0]?.name || 'Standard'}</strong></span>
                          </div>

                          <div className="text-xs font-extrabold text-stone-900 mt-1">
                            KSh {item.price.toLocaleString()}
                          </div>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center justify-between pt-1">
                          <div className="flex items-center bg-white rounded-lg border border-stone-200 p-0.5">
                            <button
                              onClick={() => onUpdateQuantity(index, Math.max(1, item.quantity - 1))}
                              className="p-1 text-stone-600 hover:text-stone-900 cursor-pointer"
                            >
                              <Minus className="w-3 h-3" />
                            </button>
                            <span className="w-6 text-center text-xs font-bold text-stone-900">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                              className="p-1 text-stone-600 hover:text-stone-900 cursor-pointer"
                            >
                              <Plus className="w-3 h-3" />
                            </button>
                          </div>

                          <span className="text-xs font-bold text-rose-700">
                            KSh {(item.price * item.quantity).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Delivery Options Selector */}
                <div className="pt-4 border-t border-stone-200 space-y-3">
                  <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                    Select Delivery or Pickup:
                  </span>

                  <div className="space-y-2">
                    {/* Countrywide Delivery */}
                    <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                      deliveryType === 'countrywide' 
                        ? 'border-rose-700 bg-rose-50/50' 
                        : 'border-stone-200 hover:bg-stone-50'
                    }`}>
                      <input
                        type="radio"
                        name="delivery_type"
                        value="countrywide"
                        checked={deliveryType === 'countrywide'}
                        onChange={() => setDeliveryType('countrywide')}
                        className="mt-0.5 text-rose-600 focus:ring-rose-500 cursor-pointer"
                      />
                      <div className="flex-1 text-xs">
                        <div className="flex items-center justify-between font-bold text-stone-900">
                          <span className="flex items-center gap-1.5">
                            <Truck className="w-3.5 h-3.5 text-rose-600" />
                            Countrywide Delivery (All 47 Counties)
                          </span>
                          <span className="text-rose-700">~KSh {deliveryFee}</span>
                        </div>
                        <p className="text-[11px] text-stone-500 mt-0.5">
                          Doorstep rider in Nairobi/Murang’a or Parcel via Fargo/Easy Coach/G4S.
                        </p>

                        {deliveryType === 'countrywide' && (
                          <div className="mt-2.5">
                            <label className="text-[10px] font-bold text-stone-700 block mb-1">
                              Your County:
                            </label>
                            <select
                              value={selectedCounty}
                              onChange={(e) => setSelectedCounty(e.target.value)}
                              className="w-full bg-white border border-stone-300 rounded-lg p-1.5 text-xs text-stone-800 font-medium focus:outline-hidden focus:border-rose-600"
                            >
                              {KENYA_COUNTIES.map((c) => (
                                <option key={c} value={c}>
                                  {c} County
                                </option>
                              ))}
                            </select>
                          </div>
                        )}
                      </div>
                    </label>

                    {/* Kawangware In-Store Pickup */}
                    <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                      deliveryType === 'kawangware_pickup' 
                        ? 'border-rose-700 bg-rose-50/50' 
                        : 'border-stone-200 hover:bg-stone-50'
                    }`}>
                      <input
                        type="radio"
                        name="delivery_type"
                        value="kawangware_pickup"
                        checked={deliveryType === 'kawangware_pickup'}
                        onChange={() => setDeliveryType('kawangware_pickup')}
                        className="mt-0.5 text-rose-600 focus:ring-rose-500 cursor-pointer"
                      />
                      <div className="flex-1 text-xs">
                        <div className="flex items-center justify-between font-bold text-stone-900">
                          <span className="flex items-center gap-1.5">
                            <Store className="w-3.5 h-3.5 text-amber-600" />
                            Pick Up at Shop 1: Kawangware (Nairobi)
                          </span>
                          <span className="text-emerald-700 font-extrabold uppercase">FREE</span>
                        </div>
                        <p className="text-[11px] text-stone-500 mt-0.5">
                          Naivasha Rd near Stage 46 • Fitting available on collection.
                        </p>
                      </div>
                    </label>

                    {/* Murang'a In-Store Pickup */}
                    <label className={`flex items-start gap-3 p-3 rounded-xl border cursor-pointer transition-all ${
                      deliveryType === 'muranga_pickup' 
                        ? 'border-rose-700 bg-rose-50/50' 
                        : 'border-stone-200 hover:bg-stone-50'
                    }`}>
                      <input
                        type="radio"
                        name="delivery_type"
                        value="muranga_pickup"
                        checked={deliveryType === 'muranga_pickup'}
                        onChange={() => setDeliveryType('muranga_pickup')}
                        className="mt-0.5 text-rose-600 focus:ring-rose-500 cursor-pointer"
                      />
                      <div className="flex-1 text-xs">
                        <div className="flex items-center justify-between font-bold text-stone-900">
                          <span className="flex items-center gap-1.5">
                            <Store className="w-3.5 h-3.5 text-amber-600" />
                            Pick Up at Shop 2: Murang’a Town
                          </span>
                          <span className="text-emerald-700 font-extrabold uppercase">FREE</span>
                        </div>
                        <p className="text-[11px] text-stone-500 mt-0.5">
                          Uhuru Highway CBD opp. Municipal Market.
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Customer Details Inputs */}
                <div className="pt-3 border-t border-stone-200 space-y-2">
                  <span className="text-xs font-bold text-stone-800 uppercase tracking-wider block">
                    Your Contact & Delivery Info:
                  </span>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="bg-stone-50 border border-stone-200 rounded-lg p-2 text-xs focus:outline-hidden focus:border-rose-500"
                    />
                    <input
                      type="tel"
                      placeholder="Phone (e.g. 07...)"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="bg-stone-50 border border-stone-200 rounded-lg p-2 text-xs focus:outline-hidden focus:border-rose-500"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Specific Town / Estate / Landmark / Notes"
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    className="w-full bg-stone-50 border border-stone-200 rounded-lg p-2 text-xs focus:outline-hidden focus:border-rose-500"
                  />
                </div>
              </>
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cartItems.length > 0 && (
            <div className="p-5 border-t border-stone-200 bg-[#FAF8F5] space-y-3">
              <div className="space-y-1.5 text-xs text-stone-600">
                <div className="flex justify-between">
                  <span>Items Subtotal:</span>
                  <span className="font-semibold text-stone-900">KSh {subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Delivery:</span>
                  <span className="font-semibold text-stone-900">
                    {deliveryFee === 0 ? 'FREE (Pickup)' : `KSh ${deliveryFee.toLocaleString()}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-stone-900 pt-1 border-t border-stone-200">
                  <span>Estimated Total:</span>
                  <span className="text-rose-700 text-base">KSh {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              {/* Main Checkout WhatsApp Button (0724293125) */}
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-2xl font-bold text-sm shadow-lg hover:shadow-xl transition-all active:scale-95 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Checkout on WhatsApp (0724 293 125)</span>
              </button>

              <div className="flex items-center justify-center gap-2 text-[10px] text-stone-500">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant confirmation with Zurimart manager on WhatsApp</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
