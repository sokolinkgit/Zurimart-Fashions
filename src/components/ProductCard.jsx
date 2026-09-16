import React from 'react';
import { 
  ShoppingBag, 
  Star, 
  MessageCircle, 
  MapPin,
  Eye
} from 'lucide-react';
import { CONTACT_INFO } from '../data/stores';

export default function ProductCard({ 
  product, 
  onQuickView, 
  onAddToCart 
}) {
  const getWhatsAppOrderUrl = () => {
    const text = `Hello Zurimart Fashions! 👗
I want to ORDER this item:
✨ Product: ${product.name}
💰 Price: KSh ${product.price.toLocaleString()}
📏 Sizes: ${product.sizes.join(', ')}

Please confirm size availability and delivery to my town/county. Thank you!`;

    return `https://wa.me/${CONTACT_INFO.whatsappRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="group bg-white rounded-2xl border border-stone-200/90 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col">
      
      {/* Image Container - Clickable to open quick view */}
      <div 
        className="relative aspect-3/4 overflow-hidden bg-stone-100 cursor-pointer"
        onClick={() => onQuickView(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Badges on Top */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.tag && (
            <span className="bg-stone-950/85 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-xs">
              {product.tag}
            </span>
          )}
        </div>

        {/* Physical Store Availability Tag */}
        <div className="absolute bottom-3 left-3 z-10">
          <span className="bg-white/95 backdrop-blur-xs text-stone-800 text-[10px] font-semibold px-2 py-0.5 rounded-md border border-stone-200 flex items-center gap-1 shadow-xs">
            <MapPin className="w-3 h-3 text-rose-600" />
            {product.stores.kawangware && product.stores.muranga 
              ? "Kawangware & Murang’a" 
              : product.stores.kawangware 
              ? "Kawangware Shop" 
              : "Murang’a Shop"}
          </span>
        </div>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-0 bg-stone-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="bg-white text-stone-900 hover:bg-stone-100 font-bold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="font-serif-luxury font-bold text-base sm:text-lg text-stone-900 group-hover:text-rose-700 transition-colors line-clamp-1 cursor-pointer"
          >
            {product.name}
          </h3>

          {/* Rating & Details */}
          <div className="flex items-center gap-2 mt-1.5">
            <div className="flex items-center text-amber-500">
              <Star className="w-3.5 h-3.5 fill-current" />
            </div>
            <span className="text-xs font-bold text-stone-800">{product.rating}</span>
            <span className="text-[11px] text-stone-400">({product.reviewsCount})</span>
            <span className="text-stone-300">•</span>
            <span className="text-[11px] text-stone-500">Delivery Countrywide 🚚</span>
          </div>

          {/* Price KSH */}
          <div className="mt-3 flex items-baseline gap-2">
            <span className="text-xl sm:text-2xl font-extrabold text-stone-900">
              KSh {product.price.toLocaleString()}
            </span>
            <span className="text-xs text-stone-400 line-through">
              KSh {product.originalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Required Action Buttons: ADD TO CART and ORDER [WITH WHATSAPP ICON] */}
        <div className="pt-4 border-t border-stone-100 mt-4 grid grid-cols-2 gap-2">
          
          {/* ADD TO CART BUTTON */}
          <button
            onClick={() => onAddToCart(product)}
            className="flex items-center justify-center gap-1.5 bg-stone-900 hover:bg-stone-800 text-white py-2.5 px-3 rounded-xl text-xs font-bold tracking-wide uppercase transition-all shadow-xs active:scale-95 cursor-pointer text-center"
          >
            <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Add to Cart</span>
          </button>

          {/* ORDER [WITH WHATSAPP ICON] BUTTON */}
          <a
            href={getWhatsAppOrderUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-3 rounded-xl text-xs font-bold tracking-wide uppercase transition-all shadow-xs active:scale-95 text-center"
            title="Order directly via WhatsApp 0724293125"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span className="truncate">Order</span>
          </a>

        </div>

      </div>

    </div>
  );
}
