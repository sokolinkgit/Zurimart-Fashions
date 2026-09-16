import React from 'react';
import { 
  ShoppingBag, 
  Eye, 
  MapPin, 
  Truck, 
  Star, 
  MessageCircle, 
  Check 
} from 'lucide-react';
import { CONTACT_INFO } from '../data/stores';

export default function ProductCard({ 
  product, 
  onQuickView, 
  onAddToCart 
}) {
  const discountPercent = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  const getWhatsAppOrderUrl = () => {
    const text = `Hello Zurimart Fashions! I want to order:
🛍️ Product: ${product.name}
💰 Price: KSh ${product.price.toLocaleString()}
👗 Category: ${product.category}
📏 Available Sizes: ${product.sizes.join(', ')}

Please confirm size availability and delivery to my location.`;
    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="group relative bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col">
      
      {/* Image Container */}
      <div className="relative aspect-3/4 overflow-hidden bg-stone-100 cursor-pointer" onClick={() => onQuickView(product)}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Badges on Top */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.tag && (
            <span className="bg-stone-950/80 backdrop-blur-md text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
              {product.tag}
            </span>
          )}
          {discountPercent > 0 && (
            <span className="bg-rose-700 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full shadow-xs w-max">
              SAVE {discountPercent}%
            </span>
          )}
        </div>

        {/* Store Availability Badge */}
        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1">
          <span className="bg-white/90 backdrop-blur-md text-stone-800 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-stone-200 flex items-center gap-1 shadow-xs">
            <MapPin className="w-3 h-3 text-rose-600" />
            {product.stores.kawangware && product.stores.muranga 
              ? "Kawangware & Murang’a" 
              : product.stores.kawangware 
              ? "Kawangware Shop" 
              : "Murang’a Shop"}
          </span>
        </div>

        {/* Quick View Button Hover Overlay */}
        <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="bg-white text-stone-900 hover:bg-stone-100 font-bold text-xs px-4 py-2.5 rounded-full shadow-lg flex items-center gap-1.5 transition-all transform translate-y-2 group-hover:translate-y-0 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Content */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Occasion */}
          <div className="flex items-center justify-between text-[11px] text-stone-500 font-medium mb-1">
            <span className="text-rose-700 font-semibold">{product.category}</span>
            <span>{product.occasion}</span>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-serif-luxury font-bold text-base text-stone-900 group-hover:text-rose-700 transition-colors line-clamp-1 cursor-pointer"
          >
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mt-1.5">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-bold text-stone-800">{product.rating}</span>
            <span className="text-[11px] text-stone-400">({product.reviewsCount} reviews)</span>
          </div>

          {/* Sizes Available */}
          <div className="flex flex-wrap items-center gap-1 mt-2.5">
            <span className="text-[10px] text-stone-400 font-semibold mr-1">Sizes:</span>
            {product.sizes.slice(0, 4).map((s) => (
              <span key={s} className="text-[10px] bg-stone-100 text-stone-700 px-1.5 py-0.5 rounded border border-stone-200">
                {s}
              </span>
            ))}
            {product.sizes.length > 4 && (
              <span className="text-[10px] text-stone-400">+{product.sizes.length - 4}</span>
            )}
          </div>
        </div>

        {/* Pricing and Action CTAs */}
        <div className="pt-4 border-t border-stone-100 mt-3">
          <div className="flex items-baseline justify-between mb-3">
            <div className="flex items-baseline gap-2">
              <span className="text-lg font-extrabold text-stone-900">
                KSh {product.price.toLocaleString()}
              </span>
              <span className="text-xs text-stone-400 line-through">
                KSh {product.originalPrice.toLocaleString()}
              </span>
            </div>
            <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
              🚚 In Stock
            </span>
          </div>

          {/* Two primary buttons: WhatsApp Order (0724293125) & Add to Bag */}
          <div className="grid grid-cols-2 gap-2">
            <a
              href={getWhatsAppOrderUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-2 rounded-xl text-xs font-bold transition-all shadow-xs active:scale-95 text-center"
              title="Order directly via WhatsApp 0724293125"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current shrink-0" />
              <span className="truncate">WhatsApp</span>
            </a>

            <button
              onClick={() => onAddToCart(product)}
              className="flex items-center justify-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white py-2.5 px-2 rounded-xl text-xs font-bold transition-all shadow-xs active:scale-95 cursor-pointer text-center"
            >
              <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
              <span className="truncate">Add to Bag</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
