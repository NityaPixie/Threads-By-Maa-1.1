'use client';

import React, { useState } from 'react';
import { MessageCircle, Heart, Leaf, ChevronLeft, X } from 'lucide-react';
import Link from 'next/link';
import { getProductsByCategory } from '../../productsData';

export default function CategoryPage({ params }) {
  const { slug } = params;
  const categoryName = slug.replace(/-/g, ' ');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const categoryProducts = getProductsByCategory(categoryName);
  const whatsappNumber = '6386188825';

  const trackEvent = (eventType, productName) => {
    console.log('📊 Event:', eventType, productName);
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

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
        {/* Navigation */}
        <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-amber-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80">
              <ChevronLeft className="w-6 h-6 text-amber-600" />
              <h1 className="text-2xl font-bold text-amber-900">Back</h1>
            </Link>
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-amber-600" />
              <h1 className="text-2xl font-bold text-amber-900">Threads By Maa</h1>
            </div>
            <div className="w-20"></div>
          </div>
        </nav>

        {/* Category Header */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-100 to-rose-100">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl font-bold text-amber-950 mb-4">{categoryName}</h1>
            <p className="text-lg text-amber-900">Browse our beautiful collection</p>
          </div>
        </section>

        {/* Subcategories with Products */}
        {Object.entries(categoryProducts).map(([subcategoryName, products]) => (
          <section key={subcategoryName} className="py-16 px-4 sm:px-6 lg:px-8 border-b border-amber-100">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-amber-950 mb-8">{subcategoryName}</h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleBuyClick(product)}
                    onMouseEnter={() => setHoveredProduct(product.id)}
                    onMouseLeave={() => setHoveredProduct(null)}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer group"
                  >
                    {/* Product Image */}
                    <div className="h-56 bg-gradient-to-br from-amber-100 to-rose-100 flex items-center justify-center relative overflow-hidden">
                      <p className={`text-7xl transition-all duration-300 ${hoveredProduct === product.id ? 'scale-110' : ''}`}>
                        {product.image}
                      </p>
                      <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                        <Heart className="w-5 h-5 text-rose-500" />
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-4 space-y-3">
                      <div>
                        <p className="text-xs font-semibold text-amber-600 uppercase mb-1">{product.subcategory}</p>
                        <h4 className="text-sm font-bold text-amber-950 line-clamp-2">{product.name}</h4>
                        <p className="text-xs text-amber-800 mt-1">Colors: {product.color}</p>
                      </div>

                      <div className="text-xl font-bold text-amber-600">{product.price}</div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleWhatsAppClick(product);
                        }}
                        className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 text-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        Order
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

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

                  {/* Offers Section */}
                  <div className="space-y-3 bg-gradient-to-r from-orange-50 to-yellow-50 p-4 rounded-lg border border-orange-200">
                    <h4 className="font-bold text-orange-900 text-sm">✨ Available Offers:</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="text-lg">🎁</span>
                        <div>
                          <p className="font-semibold text-green-800">First Order? Get a Free Gift</p>
                          <p className="text-gray-700">On your first purchase</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-lg">🎀</span>
                        <div>
                          <p className="font-semibold text-blue-800">Free Gift on orders above ₹899/-</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-lg">💰</span>
                        <div>
                          <p className="font-semibold text-purple-800">Extra Discounts on orders above ₹1299/-</p>
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

        {/* Footer */}
        <footer className="bg-amber-950 text-amber-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center text-sm text-amber-300">
            <p>© 2026 Threads By Maa. All handmade with love. 🧶💕</p>
          </div>
        </footer>
      </div>
    </>
  );
}