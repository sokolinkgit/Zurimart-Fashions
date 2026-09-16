import React from 'react';
import { 
  Search, 
  Filter, 
  Sparkles, 
  MapPin, 
  SlidersHorizontal,
  X
} from 'lucide-react';
import { LADIES_CATEGORIES, MENS_CATEGORIES, OCCASIONS } from '../data/products';

export default function CollectionSwitcher({
  activeGender,
  setActiveGender,
  selectedCategory,
  setSelectedCategory,
  selectedOccasion,
  setSelectedOccasion,
  selectedStore,
  setSelectedStore,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  totalResults
}) {
  const currentCategories = activeGender === 'ladies' ? LADIES_CATEGORIES : MENS_CATEGORIES;

  return (
    <div id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
      
      {/* Top Department Switcher Tabs: Ladies vs Men */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <span className="text-xs font-bold tracking-widest text-rose-700 uppercase">
            Curated Catalog
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
            {activeGender === 'ladies' ? 'Ladies Fashion Collection' : 'Men’s Fashion Section'}
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            {activeGender === 'ladies' 
              ? 'Our signature ladies boutique: authentic Kenyan Ankara, elegant gowns, power suits & everyday chic.'
              : 'Our newly launched, scalable Men’s line: casual resort shirts, African craft wear & smart-casual blazers.'}
          </p>
        </div>

        {/* Gender Segmented Switch */}
        <div className="flex items-center p-1 bg-stone-200/80 rounded-2xl border border-stone-300/80 w-full sm:w-auto shadow-inner">
          <button
            onClick={() => {
              setActiveGender('ladies');
              setSelectedCategory('All Ladies');
            }}
            className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              activeGender === 'ladies'
                ? 'bg-rose-700 text-white shadow-md'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <span>👗 Ladies Boutique</span>
            <span className="text-[10px] bg-white/20 px-1.5 py-0.2 rounded-full">
              Main
            </span>
          </button>

          <button
            onClick={() => {
              setActiveGender('men');
              setSelectedCategory('All Men’s');
            }}
            className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
              activeGender === 'men'
                ? 'bg-stone-900 text-white shadow-md'
                : 'text-stone-700 hover:text-stone-900'
            }`}
          >
            <span>👔 Men’s Section</span>
            <span className="text-[10px] bg-amber-400 text-stone-950 font-extrabold px-1.5 py-0.2 rounded-full">
              Scalable
            </span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar Row */}
      <div className="pt-6 space-y-4">
        
        {/* Search, Store filter & Sort controls */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={activeGender === 'ladies' ? "Search ladies dresses, Ankara, suits, jumpsuits..." : "Search men’s shirts, blazers, tunics..."}
              className="w-full bg-white border border-stone-200 rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all shadow-xs"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {/* Store Location Filter */}
            <div className="flex items-center gap-1.5 bg-white border border-stone-200 px-3 py-2 rounded-xl text-xs shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-rose-600" />
              <span className="font-semibold text-stone-600">Store:</span>
              <select
                value={selectedStore}
                onChange={(e) => setSelectedStore(e.target.value)}
                className="bg-transparent font-medium text-stone-800 focus:outline-hidden cursor-pointer"
              >
                <option value="all">All Shops (Kawangware & Murang’a)</option>
                <option value="kawangware">Shop 1: Kawangware Only</option>
                <option value="muranga">Shop 2: Murang’a Only</option>
              </select>
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-1.5 bg-white border border-stone-200 px-3 py-2 rounded-xl text-xs shadow-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-stone-500" />
              <span className="font-semibold text-stone-600">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-transparent font-medium text-stone-800 focus:outline-hidden cursor-pointer"
              >
                <option value="featured">Featured Picks</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

        </div>

        {/* Category Pills Slider */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none pt-1">
          {currentCategories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-150 cursor-pointer ${
                  isSelected
                    ? activeGender === 'ladies'
                      ? 'bg-rose-700 text-white shadow-xs'
                      : 'bg-stone-900 text-white shadow-xs'
                    : 'bg-white text-stone-700 border border-stone-200 hover:bg-stone-50 hover:border-stone-300'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Occasion Filter (especially prominent for ladies fashion) */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs text-stone-600">
          <span className="font-bold text-stone-500 uppercase tracking-wider text-[11px] mr-1">
            Occasion:
          </span>
          {OCCASIONS.map((occ) => {
            const isSelected = selectedOccasion === occ;
            return (
              <button
                key={occ}
                onClick={() => setSelectedOccasion(occ)}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  isSelected
                    ? 'bg-stone-800 text-white font-semibold'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {occ}
              </button>
            );
          })}

          <div className="ml-auto text-xs font-semibold text-stone-500">
            Showing <strong className="text-stone-900">{totalResults}</strong> items
          </div>
        </div>

      </div>

    </div>
  );
}
