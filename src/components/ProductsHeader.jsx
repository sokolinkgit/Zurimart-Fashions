import React from 'react';
import { Search, X, MapPin, SlidersHorizontal } from 'lucide-react';

export default function ProductsHeader({
  searchQuery,
  setSearchQuery,
  selectedStore,
  setSelectedStore,
  sortBy,
  setSortBy,
  totalResults
}) {
  return (
    <div id="products-page" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
      
      {/* Products Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 border-b border-stone-200">
        <div>
          <span className="text-xs font-bold tracking-widest text-rose-700 uppercase">
            Zurimart Fashions Catalog
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
            Products Page
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Explore our curated ladies collection with direct WhatsApp ordering and countrywide delivery across Kenya.
          </p>
        </div>

        <div className="text-xs font-bold text-stone-600 bg-stone-100 px-3.5 py-2 rounded-xl border border-stone-200 w-fit">
          Showing <span className="text-rose-700 font-extrabold">{totalResults}</span> Ladies Outfits
        </div>
      </div>

      {/* Search and Filter Row */}
      <div className="pt-6 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        
        {/* Search Bar */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search dresses, Ankara, power suits, jumpsuits..."
            className="w-full bg-white border border-stone-200 rounded-xl pl-10 pr-9 py-2.5 text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-hidden focus:border-rose-500 focus:ring-2 focus:ring-rose-200 transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Store & Sort Controls */}
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
              <option value="all">All Shops (1-Kawangware & 2-Murang’a)</option>
              <option value="kawangware">Shop 1: Kawangware</option>
              <option value="muranga">Shop 2: Murang’a</option>
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
              <option value="rating">Top Customer Rated</option>
            </select>
          </div>
        </div>

      </div>

    </div>
  );
}
