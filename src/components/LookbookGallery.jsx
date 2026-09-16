import React from 'react';
import { Sparkles, Heart, ShoppingBag, Eye, MapPin } from 'lucide-react';

export default function LookbookGallery({ onQuickViewById }) {
  const LOOKS = [
    {
      id: 'l-01',
      title: 'Nairobi Luxe Ankara Blazer Dress',
      location: 'Nairobi Boutique Shoot',
      image: '/images/ladies/hero-kenyan-lady.jpg',
      badge: 'Editor’s Pick',
      price: 'KSh 3,200'
    },
    {
      id: 'l-02',
      title: 'Emerald Satin Wrap Goddess Gown',
      location: 'Evening Gala & Dinner Look',
      image: '/images/ladies/dress-emerald.jpg',
      badge: 'Red Carpet',
      price: 'KSh 3,500'
    },
    {
      id: 'l-04',
      title: 'Upper Hill Executive Power Suit',
      location: 'Nairobi CBD Skyline',
      image: '/images/ladies/office-power-suit.jpg',
      badge: 'Corporate Chic',
      price: 'KSh 4,500'
    },
    {
      id: 'l-05',
      title: 'Karen Garden Botanical Floral Maxi',
      location: 'Karen / Sunday Brunch',
      image: '/images/ladies/floral-maxi-dress.jpg',
      badge: 'Sunday Best',
      price: 'KSh 2,400'
    },
    {
      id: 'l-08',
      title: 'High-Waist Denim & Bustier Corset',
      location: 'Westlands Walk, Nairobi',
      image: '/images/ladies/casual-denim-chic.jpg',
      badge: 'Street Style',
      price: 'KSh 2,600'
    },
    {
      id: 'l-07',
      title: 'Westlands Velvet Bodycon Cocktail Dress',
      location: 'Luxury Lounge Evening',
      image: '/images/ladies/bodycon-cocktail.jpg',
      badge: 'Glamour Night',
      price: 'KSh 3,200'
    }
  ];

  return (
    <section id="lookbook" className="py-16 md:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-800 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <Heart className="w-3.5 h-3.5 fill-current text-rose-600" />
            <span>Styled In Kenya</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 tracking-tight">
            The Zurimart Fashion Lookbook
          </h2>
          <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
            Authentic Kenyan elegance captured in real moments. From executive power dressing in Nairobi CBD to relaxed garden brunches in Karen, discover how our pieces drape and celebrate every melanin glow.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LOOKS.map((item) => (
            <div
              key={item.id}
              onClick={() => onQuickViewById(item.id)}
              className="group relative rounded-3xl overflow-hidden bg-stone-100 shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer aspect-4/5"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-stone-950/80 via-stone-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Badge */}
              <div className="absolute top-4 left-4">
                <span className="bg-stone-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                  {item.badge}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="absolute bottom-0 inset-x-0 p-5 text-white space-y-1">
                <div className="flex items-center gap-1.5 text-[11px] text-amber-300 font-semibold">
                  <MapPin className="w-3 h-3" />
                  <span>{item.location}</span>
                </div>

                <h3 className="font-serif-luxury text-lg font-bold leading-tight">
                  {item.title}
                </h3>

                <div className="flex items-center justify-between pt-2">
                  <span className="font-extrabold text-sm text-rose-300">
                    {item.price}
                  </span>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickViewById(item.id);
                    }}
                    className="bg-white text-stone-900 hover:bg-rose-600 hover:text-white px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1 shadow-md cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5" />
                    <span>Shop Look</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
