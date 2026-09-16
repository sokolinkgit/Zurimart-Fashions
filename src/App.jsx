import React, { useState, useEffect, useMemo } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductsHeader from './components/ProductsHeader';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import CartDrawer from './components/CartDrawer';
import StoresSection from './components/StoresSection';
import DeliveryCountrywideSection from './components/DeliveryCountrywideSection';
import LookbookGallery from './components/LookbookGallery';
import CustomerReviews from './components/CustomerReviews';
import FAQSection from './components/FAQSection';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton';
import Footer from './components/Footer';

import { PRODUCTS } from './data/products';
import { CONTACT_INFO } from './data/stores';
import { FilterX } from 'lucide-react';

export default function App() {
  const [selectedStore, setSelectedStore] = useState('all'); // 'all' | 'kawangware' | 'muranga'
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('featured');

  const [selectedProductModal, setSelectedProductModal] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Initialize cart from localStorage if available
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('zurimart_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      return [];
    }
  });

  // Save cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('zurimart_cart', JSON.stringify(cart));
    } catch (e) {
      // Ignore
    }
  }, [cart]);

  // Add item to cart
  const handleAddToCart = (productWithSelection) => {
    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (it) =>
          it.id === productWithSelection.id &&
          it.selectedSize === productWithSelection.selectedSize &&
          it.selectedColor === productWithSelection.selectedColor
      );

      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx].quantity += productWithSelection.quantity || 1;
        return next;
      } else {
        return [
          ...prev,
          {
            ...productWithSelection,
            quantity: productWithSelection.quantity || 1,
            selectedSize: productWithSelection.selectedSize || productWithSelection.sizes[0],
            selectedColor: productWithSelection.selectedColor || productWithSelection.colors[0]?.name || ''
          }
        ];
      }
    });
  };

  // Update quantity in cart
  const handleUpdateQuantity = (index, qty) => {
    setCart((prev) => {
      const next = [...prev];
      next[index].quantity = qty;
      return next;
    });
  };

  // Remove item from cart
  const handleRemoveItem = (index) => {
    setCart((prev) => prev.filter((_, idx) => idx !== index));
  };

  // Total items in cart
  const cartCount = cart.reduce((acc, it) => acc + it.quantity, 0);

  // Filter products: ONLY THE FEMALE ONES (ladies)
  const femaleProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // ONLY FEMALE ONES
      if (item.gender !== 'ladies') return false;

      // Store filter
      if (selectedStore === 'kawangware' && !item.stores.kawangware) {
        return false;
      }
      if (selectedStore === 'muranga' && !item.stores.muranga) {
        return false;
      }

      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesName = item.name.toLowerCase().includes(query);
        const matchesCat = item.category.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        if (!matchesName && !matchesCat && !matchesDesc) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedStore, searchQuery, sortBy]);

  const handleOpenLookbookProduct = (productId) => {
    const prod = PRODUCTS.find((p) => p.id === productId);
    if (prod) {
      setSelectedProductModal(prod);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-stone-900 selection:bg-rose-600 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar
        cartCount={cartCount}
        setIsCartOpen={setIsCartOpen}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Products Page Header & Controls */}
        <ProductsHeader
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedStore={selectedStore}
          setSelectedStore={setSelectedStore}
          sortBy={sortBy}
          setSortBy={setSortBy}
          totalResults={femaleProducts.length}
        />

        {/* Products Grid: LIST ONLY FEMALE ONES WITH PRICE KSH, ADD TO CART, AND ORDER [WITH WHATSAPP ICON] */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {femaleProducts.length === 0 ? (
            <div className="bg-white rounded-3xl p-12 text-center border border-stone-200 shadow-xs max-w-lg mx-auto space-y-4">
              <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto">
                <FilterX className="w-8 h-8" />
              </div>
              <h3 className="font-serif-luxury text-xl font-bold text-stone-900">
                No Outfits Match Your Search
              </h3>
              <p className="text-xs text-stone-500">
                Try resetting your search query or store filter.
              </p>
              <button
                onClick={() => {
                  setSelectedStore('all');
                  setSearchQuery('');
                }}
                className="bg-rose-700 hover:bg-rose-800 text-white px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
              {femaleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onQuickView={(p) => setSelectedProductModal(p)}
                  onAddToCart={(p) => handleAddToCart(p)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Lookbook Gallery (verified Kenyan Black Ladies) */}
        <LookbookGallery
          onQuickViewById={handleOpenLookbookProduct}
        />

        {/* 2 Physical Stores Section: Kawangware & Murang'a */}
        <StoresSection />

        {/* Countrywide Delivery Section */}
        <DeliveryCountrywideSection />

        {/* Customer Testimonials & Reviews */}
        <CustomerReviews />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Product Quick View / Detail Modal */}
      <ProductModal
        product={selectedProductModal}
        onClose={() => setSelectedProductModal(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={() => setCart([])}
      />

      {/* WhatsApp Floating Action Button */}
      <WhatsAppFloatingButton />

    </div>
  );
}
