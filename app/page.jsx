'use client';

import React, { useState, useEffect, useRef } from 'react';
import { MessageCircle, Heart, Leaf, ChevronLeft, ChevronRight, Search, X } from 'lucide-react';
import Head from 'next/head';
import Link from 'next/link';
import { getAllProducts } from './productsData';

const ThreadsByMaa = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
  const shopByCategoryRef = useRef(null);

  const quotes = [
    '100% Handmade just for you',
    'Made with care, meant for you',
    'Wear Keep Slay',
    'First order? Get a Free Gift',
    'Get Free Gift of order above ₹899/-',
    'Extra Discounts on orders above ₹1299/-',
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const allProducts = getAllProducts();

  const filteredProducts = searchQuery.trim() ? allProducts.filter((p) =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.subcategory.toLowerCase().includes(searchQuery.toLowerCase())
  ) : [];

  const categoryLinks = [
    { name: 'Flowers & Bouquets', icon: '🌸', color: 'from-pink-100 to-rose-100', slug: 'flowers-bouquets' },
    { name: 'Accessories', icon: '✨', color: 'from-purple-100 to-pink-100', slug: 'accessories' },
    { name: 'Home Decor', icon: '🏠', color: 'from-amber-100 to-yellow-100', slug: 'home-decor' },
    { name: 'Raksha Bandhan 2026', icon: '🎊', color: 'from-orange-100 to-red-100', slug: 'raksha-bandhan-2026' },
  ];

  const trackEvent = (eventType, productName) => {
    console.log('📊 Event:', eventType, productName);
  };

  const whatsappNumber = '6386188825';

  const scrollToShopByCategory = () => {
    shopByCategoryRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleWhatsAppClick = (product) => {
    trackEvent('WhatsApp_Click', product.name);
    const productLink = `${window.location.origin}?product=${product.id}`;
    const message = `Hi! I'm interested in the "${product.name}" (${product.price}). 
    
Product Link: ${productLink}

Can you tell me more about customization options and delivery time?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleBuyClick = (product) => {
    trackEvent('Product_Click', product.name);
    setSelectedProduct(product);
  };

  const handleQuickInquiry = () => {
    trackEvent('Quick_Inquiry', 'General');
    const message = `Hi! I'd like to know more about your products and custom crochet options.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <Head>
        <title>Threads By Maa | Artisanal Handmade Crochet | Premium Gifts</title>
        <meta name="description" content="Handmade crochet flowers, bouquets, and premium gifts by Threads By Maa." />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
        {/* Rotating Quote Banner */}
        <div className="bg-gradient-to-r from-rose-200 via-amber-200 to-orange-200 text-amber-900 py-3 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <button
              onClick={() => setCurrentQuoteIndex((prev) => (prev - 1 + quotes.length) % quotes.length)}
              className="p-1 hover:bg-white/30 rounded"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <p className="text-center flex-1 font-semibold text-lg">{quotes[currentQuoteIndex]}</p>
            <button
              onClick={() => setCurrentQuoteIndex((prev) => (prev + 1) % quotes.length)}
              className="p-1 hover:bg-white/30 rounded"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-amber-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
            <div className="flex justify-between items-center gap-4 mb-3">
              <div className="flex items-center gap-2">
                <Leaf className="w-6 h-6 text-amber-600" />
                <h1 className="text-2xl font-bold text-amber-900">Threads By Maa</h1>
              </div>

              {/* Desktop Search */}
              <div className="hidden md:flex flex-1 max-w-md mx-4">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-amber-600" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-600"
                  />
                </div>
              </div>

              <button
                onClick={handleQuickInquiry}
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="hidden sm:inline">Chat</span>
              </button>
            </div>

            {/* Mobile Search */}
            <div className="md:hidden">
              <div className="relative w-full">
                <Search className="absolute left-3 top-3 w-5 h-5 text-amber-600" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-lg focus:outline-none focus:border-amber-600 text-sm"
                />
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <p className="text-amber-600 font-semibold text-lg">✨ Handmade with Love</p>
                  <h2 className="text-5xl sm:text-6xl font-bold text-amber-950 leading-tight">
                    Threads By <span className="text-amber-600">Maa</span>
                  </h2>
                  <p className="text-xl text-amber-900 leading-relaxed">
                    Premium artisanal crochet created with passion by a mother-daughter duo. Every piece tells a story of care, creativity, and handmade excellence.
                  </p>
                </div>

                <div className="flex gap-4 pt-6">
                  <button
                    onClick={handleQuickInquiry}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Order on WhatsApp
                  </button>
                  <button
                    onClick={scrollToShopByCategory}
                    className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-lg font-semibold transition-all duration-200"
                  >
                    Explore Products
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-6 border-t border-amber-200">
                  <div>
                    <p className="text-3xl font-bold text-amber-600">100%</p>
                    <p className="text-amber-900 text-sm">Handmade</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-amber-600">Custom</p>
                    <p className="text-amber-900 text-sm">Orders Welcome</p>
                  </div>
                </div>
              </div>

              <div className="relative h-80 md:h-96 bg-gradient-to-br from-amber-100 to-rose-100 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="text-9xl animate-bounce">🌸</div>
                <div className="absolute top-8 right-8 text-6xl animate-pulse">💐</div>
                <div className="absolute bottom-12 left-8 text-7xl">🧶</div>
              </div>
            </div>
          </div>
        </section>

        {/* Offers & Discounts Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-50 to-orange-50 border-y-2 border-orange-200">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-red-900 text-center mb-12">🎉 Special Offers & Discounts</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-8 rounded-2xl border-2 border-green-300 shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">🎁</div>
                <h4 className="text-xl font-bold text-green-900 mb-3">First Order Gift</h4>
                <p className="text-green-800 font-semibold text-lg mb-2">Get a Free Gift!</p>
                <p className="text-green-700 text-sm">On your first crochet purchase with us. A special welcome gift just for you!</p>
              </div>

              <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-8 rounded-2xl border-2 border-blue-300 shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">🎀</div>
                <h4 className="text-xl font-bold text-blue-900 mb-3">Orders Above ₹899</h4>
                <p className="text-blue-800 font-semibold text-lg mb-2">Free Gift Included!</p>
                <p className="text-blue-700 text-sm">Spend ₹899 or more and get a beautiful handmade gift absolutely free!</p>
              </div>

              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8 rounded-2xl border-2 border-purple-300 shadow-lg hover:shadow-xl transition-all">
                <div className="text-5xl mb-4">💰</div>
                <h4 className="text-xl font-bold text-purple-900 mb-3">Orders Above ₹1299</h4>
                <p className="text-purple-800 font-semibold text-lg mb-2">Extra Discounts!</p>
                <p className="text-purple-700 text-sm">Spend ₹1299 or more and enjoy exclusive extra discounts on your order!</p>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section ref={shopByCategoryRef} className="py-16 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-amber-950 text-center mb-12">Shop by Category</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categoryLinks.map((cat, idx) => (
                <Link
                  key={idx}
                  href={`/category/${cat.slug}`}
                  className={`bg-gradient-to-br ${cat.color} p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105`}
                >
                  <p className="text-5xl mb-4">{cat.icon}</p>
                  <h4 className="font-semibold text-amber-950 text-lg">{cat.name}</h4>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Category-based Horizontal Scroll Sections */}
        {Object.entries(getAllProducts().reduce((acc, product) => {
          if (!acc[product.category]) acc[product.category] = [];
          acc[product.category].push(product);
          return acc;
        }, {})).map(([categoryName, products]) => (
          <section key={categoryName} className="py-16 px-4 sm:px-6 lg:px-8 border-b border-amber-100">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-amber-950 mb-8">{categoryName}</h2>

              <div className="relative">
                {/* Left Arrow */}
                <button
                  onClick={() => {
                    const ref = document.querySelector(`[data-category="${categoryName}"]`);
                    if (ref) ref.scrollBy({ left: -300, behavior: 'smooth' });
                  }}
                  className="absolute left-0 top-1/3 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200"
                >
                  <ChevronLeft className="w-6 h-6 text-amber-600" />
                </button>

                {/* Products Scroll */}
                <div
                  data-category={categoryName}
                  className="overflow-x-auto scrollbar-hide"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  <div className="flex gap-6 pb-4 px-12">
                    {products.slice(0, 5).map((product) => (
                      <div
                        key={product.id}
                        onClick={() => handleBuyClick(product)}
                        onMouseEnter={() => setHoveredProduct(product.id)}
                        onMouseLeave={() => setHoveredProduct(null)}
                        className="flex-shrink-0 w-72 bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                      >
                        <div className="h-64 bg-gradient-to-br from-amber-100 to-rose-100 flex items-center justify-center relative overflow-hidden">
                          <p className={`text-8xl transition-all duration-300 ${hoveredProduct === product.id ? 'scale-110' : ''}`}>
                            {product.image}
                          </p>
                          <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                            <Heart className="w-5 h-5 text-rose-500" />
                          </div>
                        </div>

                        <div className="p-6 space-y-4">
                          <div>
                            <p className="text-xs font-semibold text-amber-600 uppercase">{product.category}</p>
                            <h4 className="text-lg font-bold text-amber-950 mt-2">{product.name}</h4>
                            <p className="text-sm text-amber-800 mt-1">Colors: {product.color}</p>
                          </div>

                          <div className="text-2xl font-bold text-amber-600">{product.price}</div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleWhatsAppClick(product);
                            }}
                            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                          >
                            <MessageCircle className="w-4 h-4" />
                            Order Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Arrow */}
                <button
                  onClick={() => {
                    const ref = document.querySelector(`[data-category="${categoryName}"]`);
                    if (ref) ref.scrollBy({ left: 300, behavior: 'smooth' });
                  }}
                  className="absolute right-0 top-1/3 -translate-y-1/2 z-10 bg-white/80 hover:bg-white shadow-lg rounded-full p-2 transition-all duration-200"
                >
                  <ChevronRight className="w-6 h-6 text-amber-600" />
                </button>
              </div>
            </div>
          </section>
        ))}

        {/* Search Results */}
        {searchQuery && (
          <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-yellow-50">
            <div className="max-w-7xl mx-auto">
              <h3 className="text-2xl font-bold text-amber-950 mb-6">
                Search Results for "{searchQuery}" ({filteredProducts.length} found)
              </h3>
              
              {filteredProducts.length > 0 ? (
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleBuyClick(product)}
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                      className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
                    >
                      <div className="h-48 bg-gradient-to-br from-amber-100 to-rose-100 flex items-center justify-center relative">
                        <p className={`text-6xl transition-all duration-300 ${hoveredProduct === product.id ? 'scale-110' : ''}`}>
                          {product.image}
                        </p>
                        <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                          <Heart className="w-4 h-4 text-rose-500" />
                        </div>
                      </div>
                      <div className="p-4 space-y-2">
                        <p className="text-xs font-semibold text-amber-600">{product.category}</p>
                        <h4 className="font-bold text-amber-950 line-clamp-2 text-sm">{product.name}</h4>
                        <p className="text-xs text-amber-800">Colors: {product.color}</p>
                        <p className="text-amber-600 font-bold">{product.price}</p>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleWhatsAppClick(product);
                          }}
                          className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg text-sm font-semibold transition-all"
                        >
                          Order
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-amber-900 text-lg py-12">
                  No products found for "{searchQuery}". Try searching for "flower", "rakhi", "accessories", etc.
                </p>
              )}
            </div>
          </section>
        )}

        {/* Product Detail Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-3xl w-full my-8 shadow-2xl">
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-bold text-amber-950">{selectedProduct.name}</h2>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-1 hover:bg-amber-50 rounded"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-8 p-8">
                {/* Images */}
                <div className="space-y-4">
                  <div className="bg-gradient-to-br from-amber-100 to-rose-100 h-96 rounded-xl flex items-center justify-center text-9xl">
                    {selectedProduct.image}
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedProduct.images.map((img, idx) => (
                      <div key={idx} className="bg-gradient-to-br from-amber-100 to-rose-100 h-20 rounded-lg flex items-center justify-center text-3xl cursor-pointer hover:shadow-md">
                        {img}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-6">
                  <div>
                    <p className="text-xs font-semibold text-amber-600 uppercase mb-2">Threads By Maa</p>
                    <h3 className="text-2xl font-bold text-amber-950 mb-2">{selectedProduct.name}</h3>
                    <p className="text-sm text-amber-800 mb-4">Category: {selectedProduct.category}</p>
                    <p className="text-3xl font-bold text-amber-600">{selectedProduct.price}</p>
                  </div>

                  <div className="space-y-4 border-t border-b border-amber-200 py-4">
                    <div>
                      <h4 className="font-semibold text-amber-950 mb-2">Description</h4>
                      <p className="text-sm text-amber-900">{selectedProduct.description}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-amber-950 mb-2">Turnaround Time (TAT)</h4>
                      <p className="text-sm text-amber-900">{selectedProduct.tat}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-amber-950 mb-2">Product Care</h4>
                      <p className="text-sm text-amber-900">{selectedProduct.care}</p>
                    </div>
                  </div>

                  {/* Offers Section in Modal */}
                  <div className="space-y-3 bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-bold text-orange-900 text-sm">✨ Available Offers:</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="text-lg">🎁</span>
                        <div>
                          <p className="font-semibold text-green-800">First Order? Get a Free Gift</p>
                          <p className="text-gray-700">On your first purchase with us</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-lg">🎀</span>
                        <div>
                          <p className="font-semibold text-blue-800">Free Gift on orders above ₹899/-</p>
                          <p className="text-gray-700">Spend ₹899 or more</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-lg">💰</span>
                        <div>
                          <p className="font-semibold text-purple-800">Extra Discounts on orders above ₹1299/-</p>
                          <p className="text-gray-700">Spend ₹1299 or more</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button
                      onClick={() => {
                        const link = `${window.location.origin}?product=${selectedProduct.id}`;
                        navigator.clipboard.writeText(link);
                        alert('Link copied to clipboard!');
                      }}
                      className="w-full bg-amber-100 hover:bg-amber-200 text-amber-900 py-3 rounded-lg font-semibold transition-all duration-200"
                    >
                      📋 Copy Product Link
                    </button>

                    <button
                      onClick={() => {
                        handleWhatsAppClick(selectedProduct);
                        setSelectedProduct(null);
                      }}
                      className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Order on WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* About Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-rose-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-amber-950">Our Story</h3>
                <div className="space-y-4 text-amber-900 leading-relaxed">
                  <p>Threads By Maa was born from a mother's love for crochet and a daughter's dream to share handmade magic with the world.</p>
                  <p>Each piece is created with passion, premium materials, and the kind of care that only comes from making something with your own hands.</p>
                </div>
                <button
                  onClick={handleQuickInquiry}
                  className="mt-6 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Start Your Custom Order
                </button>
              </div>
              <div className="h-96 bg-gradient-to-br from-rose-100 to-amber-100 rounded-3xl flex items-center justify-center shadow-xl text-8xl">
                👩‍💕👧
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-500 via-rose-500 to-orange-500 text-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="text-4xl font-bold">Ready to Order?</h3>
            <p className="text-xl opacity-90">Chat with us on WhatsApp for personalized recommendations!</p>
            <button
              onClick={handleQuickInquiry}
              className="bg-white text-amber-600 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
            >
              <MessageCircle className="w-6 h-6" />
              Chat Now on WhatsApp
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-amber-950 text-amber-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  Threads By Maa
                </h4>
                <p className="text-amber-200 text-sm">Handmade crochet products created with love in New Delhi.</p>
              </div>
              <div>
                <h5 className="font-bold mb-4">Quick Links</h5>
                <ul className="space-y-2 text-sm text-amber-200">
                  <li><button onClick={handleQuickInquiry} className="hover:text-white transition">Chat with us</button></li>
                  <li><button className="hover:text-white transition">Custom Orders</button></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4">Contact</h5>
                <p className="text-sm text-amber-200">📞 +91 63861 88825<br />💬 WhatsApp Us</p>
              </div>
            </div>
            <div className="border-t border-amber-800 pt-8 text-center text-sm text-amber-300">
              <p>© 2026 Threads By Maa. All handmade with love. 🧶💕</p>
            </div>
          </div>
        </footer>

        {/* Floating WhatsApp Button */}
        <button
          onClick={handleQuickInquiry}
          className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-200 z-40 animate-bounce"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default ThreadsByMaa;