'use client';

import React, { useState } from 'react';
import { MessageCircle, Heart, Leaf } from 'lucide-react';
import Head from 'next/head';

const ThreadsByMaa = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Sample products - you can easily update this with real data
  const products = [
    { id: 1, name: 'Crochet Flower Bouquet', price: '₹599', image: '🌸', category: 'Flowers', color: 'Rose' },
    { id: 2, name: 'Colorful Rakhi Set', price: '₹299', image: '🎀', category: 'Seasonal', color: 'Multi' },
    { id: 3, name: 'Amigurumi Cute Toys', price: '₹399', image: '🧸', category: 'Gifting', color: 'Various' },
    { id: 4, name: 'Crochet Hair Clips', price: '₹149', image: '✨', category: 'Accessories', color: 'Colorful' },
    { id: 5, name: 'Custom Flower Arrangement', price: '₹749', image: '💐', category: 'Flowers', color: 'Custom' },
    { id: 6, name: 'Festive Gift Hamper', price: '₹899', image: '🎁', category: 'Gifting', color: 'Assorted' },
  ];

  const categories = [
    { name: 'Flowers & Bouquets', icon: '🌸', color: 'from-pink-100 to-rose-100' },
    { name: 'Gifting Items', icon: '🎁', color: 'from-amber-100 to-yellow-100' },
    { name: 'Accessories', icon: '✨', color: 'from-purple-100 to-pink-100' },
    { name: 'Seasonal', icon: '🎊', color: 'from-orange-100 to-red-100' },
  ];

  const whatsappNumber = '6386188825';
  const handleWhatsAppClick = (productName) => {
    const message = `Hi! I'm interested in the "${productName}". Can you tell me more about customization options and delivery time?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const handleQuickInquiry = () => {
    const message = `Hi! I'd like to know more about your products and custom crochet options.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <>
      <Head>
        <title>Threads By Maa | Artisanal Handmade Crochet | Premium Gifts</title>
        <meta name="description" content="Handmade crochet flowers, bouquets, and premium gifts by Threads By Maa. Customizable, artisanal quality from New Delhi." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-amber-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Leaf className="w-6 h-6 text-amber-600" />
              <h1 className="text-2xl font-bold text-amber-900">Threads By Maa</h1>
            </div>
            <button
              onClick={handleQuickInquiry}
              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden sm:inline">Chat with us</span>
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-12 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Hero Content */}
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
                  <button className="border-2 border-amber-600 text-amber-600 hover:bg-amber-50 px-8 py-4 rounded-lg font-semibold transition-all duration-200">
                    Explore Products
                  </button>
                </div>

                {/* Trust Signals */}
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

              {/* Hero Image */}
              <div className="relative h-80 md:h-96 bg-gradient-to-br from-amber-100 to-rose-100 rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                <div className="text-9xl animate-bounce">🌸</div>
                <div className="absolute top-8 right-8 text-6xl animate-pulse">💐</div>
                <div className="absolute bottom-12 left-8 text-7xl">🧶</div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-3xl font-bold text-amber-950 text-center mb-12">Shop by Category</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {categories.map((cat, idx) => (
                <div key={idx} className={`bg-gradient-to-br ${cat.color} p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-200 cursor-pointer hover:scale-105`}>
                  <p className="text-5xl mb-4">{cat.icon}</p>
                  <h4 className="font-semibold text-amber-950 text-lg">{cat.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h3 className="text-4xl font-bold text-amber-950 mb-4">Featured Collection</h3>
              <p className="text-amber-900 text-lg max-w-2xl mx-auto">
                Each piece is carefully crafted with premium materials and months of passion. All items are customizable!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  onMouseEnter={() => setHoveredProduct(product.id)}
                  onMouseLeave={() => setHoveredProduct(null)}
                  className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Product Image Area */}
                  <div className="h-64 bg-gradient-to-br from-amber-100 to-rose-100 flex items-center justify-center relative overflow-hidden">
                    <p className={`text-8xl transition-all duration-300 ${hoveredProduct === product.id ? 'scale-110' : ''}`}>
                      {product.image}
                    </p>
                    <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg">
                      <Heart className="w-5 h-5 text-rose-500" />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 space-y-4">
                    <div>
                      <p className="text-xs font-semibold text-amber-600 uppercase">{product.category}</p>
                      <h4 className="text-xl font-bold text-amber-950 mt-2">{product.name}</h4>
                      <p className="text-sm text-amber-800 mt-1">Colors: {product.color}</p>
                    </div>

                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-amber-600">{product.price}</span>
                      <span className="text-sm text-amber-900">Custom orders available</span>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={() => handleWhatsAppClick(product.name)}
                      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                        hoveredProduct === product.id
                          ? 'bg-green-500 text-white shadow-lg'
                          : 'bg-amber-50 text-amber-600 border border-amber-200'
                      }`}
                    >
                      <MessageCircle className="w-4 h-4" />
                      Inquire Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-50 to-rose-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h3 className="text-4xl font-bold text-amber-950">Our Story</h3>
                <div className="space-y-4 text-amber-900 leading-relaxed">
                  <p>
                    Threads By Maa was born from a mother's love for crochet and a daughter's dream to share handmade magic with the world.
                  </p>
                  <p>
                    Each piece is created with passion, premium materials, and the kind of care that only comes from making something with your own hands. We believe in slow fashion, sustainable craftsmanship, and the beauty of imperfection.
                  </p>
                  <p>
                    Whether it's a custom wedding bouquet, a festive gift, or a cherished keepsake, we treat every order like it's being made for someone we love.
                  </p>
                </div>

                <div className="pt-4 space-y-3">
                  <div className="flex gap-3 items-start">
                    <span className="text-2xl">🧶</span>
                    <div>
                      <p className="font-semibold text-amber-950">100% Handmade</p>
                      <p className="text-sm text-amber-800">Crafted with care by skilled hands</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-2xl">🎨</span>
                    <div>
                      <p className="font-semibold text-amber-950">Custom Designs</p>
                      <p className="text-sm text-amber-800">Personalized to your specifications</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <span className="text-2xl">📦</span>
                    <div>
                      <p className="font-semibold text-amber-950">Premium Packaging</p>
                      <p className="text-sm text-amber-800">Gift-ready packaging included</p>
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleQuickInquiry}
                  className="mt-6 bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200"
                >
                  Start Your Custom Order
                </button>
              </div>

              <div className="h-96 bg-gradient-to-br from-rose-100 to-amber-100 rounded-3xl flex items-center justify-center shadow-xl">
                <div className="text-8xl">👩‍💩❤️👧</div>
              </div>
            </div>
          </div>
        </section>

        {/* Seasonal Collections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl font-bold text-amber-950 text-center mb-12">Upcoming Collections</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Rakhi */}
              <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl border-2 border-red-200 hover:shadow-lg transition-all duration-200">
                <p className="text-5xl mb-4">🎀</p>
                <h4 className="text-2xl font-bold text-red-900 mb-3">Raksha Bandhan 2026</h4>
                <p className="text-red-800 mb-4">Limited edition handmade rakhis with custom designs. Pre-order now for guaranteed delivery!</p>
                <div className="bg-red-100 px-4 py-2 rounded-lg inline-block mb-4">
                  <p className="text-sm font-semibold text-red-900">Pre-order open until July 31</p>
                </div>
                <button
                  onClick={() => handleWhatsAppClick('Rakhi Set - Pre-order')}
                  className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 w-full"
                >
                  Pre-order Now
                </button>
              </div>

              {/* Diwali */}
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl border-2 border-amber-200 hover:shadow-lg transition-all duration-200">
                <p className="text-5xl mb-4">🪔</p>
                <h4 className="text-2xl font-bold text-amber-900 mb-3">Diwali Specials</h4>
                <p className="text-amber-800 mb-4">Festive gift sets, decorative items, and custom arrangements for the festival of lights.</p>
                <div className="bg-amber-100 px-4 py-2 rounded-lg inline-block mb-4">
                  <p className="text-sm font-semibold text-amber-900">Coming Soon - Sept 2026</p>
                </div>
                <button
                  onClick={handleQuickInquiry}
                  className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 w-full"
                >
                  Notify Me
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* How to Order */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-amber-950 text-center mb-12">How to Order</h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { num: '1', title: 'Browse Products', desc: 'Explore our collection' },
                { num: '2', title: 'Chat on WhatsApp', desc: 'Send inquiry with details' },
                { num: '3', title: 'Confirm Details', desc: 'Customize & confirm price' },
                { num: '4', title: 'Enjoy Your Gift', desc: 'Premium delivery at your door' },
              ].map((step, idx) => (
                <div key={idx} className="text-center space-y-4">
                  <div className="bg-amber-600 text-white rounded-full w-14 h-14 flex items-center justify-center mx-auto text-2xl font-bold">
                    {step.num}
                  </div>
                  <h4 className="font-bold text-amber-950 text-lg">{step.title}</h4>
                  <p className="text-amber-900 text-sm">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-500 via-rose-500 to-orange-500 text-white">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h3 className="text-4xl font-bold">Ready to Order?</h3>
            <p className="text-xl opacity-90">
              Chat with us on WhatsApp for personalized recommendations, custom designs, and special orders!
            </p>
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
                  <li><button className="hover:text-white transition">About Us</button></li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold mb-4">Contact</h5>
                <p className="text-sm text-amber-200">
                  📞 +91 63861 88825<br />
                  💬 WhatsApp Us<br />
                  📍 New Delhi, India
                </p>
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
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </>
  );
};

export default ThreadsByMaa;
