import React, { useState } from 'react';
import { 
  X, 
  Star, 
  MapPin, 
  Truck, 
  ShieldCheck, 
  ShoppingBag, 
  MessageCircle, 
  Plus, 
  Minus, 
  Check, 
  Store,
  Sparkles
} from 'lucide-react';
import { CONTACT_INFO } from '../data/stores';

export default function ProductModal({ 
  product, 
  onClose, 
  onAddToCart 
}) {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]?.name || '');
  const [quantity, setQuantity] = useState(1);
  const [addedToast, setAddedToast] = useState(false);

  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const handleAddToCart = () => {
    onAddToCart({
      ...product,
      selectedSize,
      selectedColor,
      quantity
    });
    setAddedToast(true);
    setTimeout(() => setAddedToast(false), 2200);
  };

  const getDirectWhatsAppUrl = () => {
    const text = `Hello Zurimart Fashions! 👗
I want to order this item:
✨ Product: ${product.name}
📏 Selected Size: ${selectedSize}
🎨 Selected Color: ${selectedColor}
🔢 Quantity: ${quantity}
💰 Total: KSh ${(product.price * quantity).toLocaleString()}

📍 My Delivery Town/County: 
Please advise on dispatch & M-Pesa details. Thank you!`;

    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/70 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      
      {/* Modal Dialog Card */}
      <div 
        className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-stone-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 text-stone-700 hover:text-stone-950 hover:bg-stone-100 shadow-md transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* Left Column: Image with badges */}
          <div className="relative bg-stone-100 min-h-[360px] md:min-h-full">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-top max-h-[580px]"
            />
            
            <div className="absolute top-4 left-4 flex flex-col gap-1.5">
              {product.tag && (
                <span className="bg-stone-950/85 backdrop-blur-md text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                  {product.tag}
                </span>
              )}
              {discountPercent > 0 && (
                <span className="bg-rose-700 text-white text-xs font-extrabold px-2.5 py-1 rounded-full shadow-md">
                  SAVE {discountPercent}%
                </span>
              )}
            </div>

            {/* Note on genuine Kenyan photography */}
            <div className="absolute bottom-4 left-4 right-4 bg-stone-900/80 backdrop-blur-md text-stone-100 text-[11px] p-2.5 rounded-xl border border-white/10 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>
                {product.gender === 'ladies' 
                  ? 'Authentic Kenyan Ladies Collection • True Kenyan Tailored Sizing'
                  : 'Zurimart Scalable Men’s Wear • Premium Styling'}
              </span>
            </div>
          </div>

          {/* Right Column: Details & Actions */}
          <div className="p-6 md:p-8 flex flex-col justify-between space-y-5">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs text-stone-500 font-semibold mb-2">
                <span className="text-rose-700 uppercase tracking-wider">{product.category}</span>
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-current" />
                  <span className="text-stone-800 font-bold">{product.rating}</span>
                  <span className="text-stone-400">({product.reviewsCount} reviews)</span>
                </div>
              </div>

              {/* Product Title */}
              <h2 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-stone-900 leading-snug">
                {product.name}
              </h2>

              {/* Price Row */}
              <div className="flex items-baseline gap-3 mt-3">
                <span className="text-2xl sm:text-3xl font-extrabold text-stone-900">
                  KSh {product.price.toLocaleString()}
                </span>
                <span className="text-sm text-stone-400 line-through">
                  KSh {product.originalPrice.toLocaleString()}
                </span>
                <span className="text-xs bg-rose-50 text-rose-700 font-bold px-2.5 py-0.5 rounded-full border border-rose-200">
                  Save KSh {(product.originalPrice - product.price).toLocaleString()}
                </span>
              </div>

              {/* Short Description */}
              <p className="text-xs sm:text-sm text-stone-600 mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Physical Shop Availability Alert */}
              <div className="mt-4 p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-bold text-stone-800">
                  <Store className="w-4 h-4 text-rose-600" />
                  <span>Physical Store Stock Status:</span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-1">
                  <div className={`p-2 rounded-lg flex items-center gap-1.5 ${
                    product.stores.kawangware ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-stone-100 text-stone-400'
                  }`}>
                    <Check className="w-3.5 h-3.5" />
                    <span><strong>Shop 1 (Kawangware):</strong> {product.stores.kawangware ? 'In Stock' : 'Call to Restock'}</span>
                  </div>
                  <div className={`p-2 rounded-lg flex items-center gap-1.5 ${
                    product.stores.muranga ? 'bg-emerald-50 text-emerald-800 border border-emerald-200' : 'bg-stone-100 text-stone-400'
                  }`}>
                    <Check className="w-3.5 h-3.5" />
                    <span><strong>Shop 2 (Murang’a):</strong> {product.stores.muranga ? 'In Stock' : 'Transfer Available'}</span>
                  </div>
                </div>
              </div>

              {/* Color Selector */}
              {product.colors && product.colors.length > 0 && (
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs font-bold text-stone-700 mb-2">
                    <span>Color: <span className="font-semibold text-rose-700">{selectedColor}</span></span>
                  </div>
                  <div className="flex items-center gap-2">
                    {product.colors.map((c) => (
                      <button
                        key={c.name}
                        onClick={() => setSelectedColor(c.name)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-2 border transition-all cursor-pointer ${
                          selectedColor === c.name
                            ? 'border-rose-700 bg-rose-50 text-rose-900 ring-2 ring-rose-200'
                            : 'border-stone-200 bg-white text-stone-700 hover:border-stone-300'
                        }`}
                      >
                        <span 
                          className="w-3 h-3 rounded-full border border-stone-300"
                          style={{ backgroundColor: c.hex }}
                        />
                        <span>{c.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-xs font-bold text-stone-700 mb-2">
                  <span>Select Size:</span>
                  <span className="text-[11px] text-stone-500 font-normal">Need sizing help? WhatsApp 0724293125</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                        selectedSize === sz
                          ? 'bg-rose-700 text-white shadow-xs'
                          : 'bg-stone-100 text-stone-700 hover:bg-stone-200 border border-stone-200'
                      }`}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mt-4 flex items-center gap-4">
                <span className="text-xs font-bold text-stone-700">Quantity:</span>
                <div className="flex items-center bg-stone-100 rounded-xl border border-stone-200 p-1">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-1 rounded-lg text-stone-600 hover:bg-white transition-colors cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="w-8 text-center text-xs font-bold text-stone-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-1 rounded-lg text-stone-600 hover:bg-white transition-colors cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Delivery Countrywide Highlights */}
              <div className="mt-4 p-3 bg-amber-50/60 rounded-xl border border-amber-200/60 flex items-center gap-3">
                <Truck className="w-5 h-5 text-amber-700 shrink-0" />
                <div className="text-left text-xs">
                  <div className="font-bold text-amber-900">Delivery Countrywide</div>
                  <div className="text-amber-800 text-[11px]">
                    Nairobi & Murang’a delivery in 2-4 hrs • Countrywide parcel dispatch within 24 hrs.
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2.5 pt-4 border-t border-stone-200">
              
              {/* WhatsApp direct order */}
              <a
                href={getDirectWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white py-3.5 rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Order on WhatsApp (0724 293 125)</span>
              </a>

              {/* Add to Bag */}
              <button
                onClick={handleAddToCart}
                className="w-full flex items-center justify-center gap-2 bg-stone-900 hover:bg-black text-white py-3.5 rounded-2xl font-bold text-sm shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add {quantity} to Shopping Bag</span>
              </button>

              {addedToast && (
                <div className="p-2 bg-emerald-100 border border-emerald-300 text-emerald-900 text-xs text-center font-bold rounded-xl animate-in fade-in">
                  ✓ Added to bag! You can checkout via WhatsApp anytime.
                </div>
              )}
            </div>

            {/* Bullet Details */}
            {product.details && (
              <div className="pt-2 text-xs text-stone-500 space-y-1">
                <div className="font-bold text-stone-700 mb-1">Fabric & Garment Details:</div>
                {product.details.map((d, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
                    <span>{d}</span>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
