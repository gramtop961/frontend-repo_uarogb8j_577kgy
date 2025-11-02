import React from 'react';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Pricing from './components/Pricing.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-emerald-900">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-emerald-900 focus:px-3 focus:py-2 focus:text-white">
        Skip to content
      </a>

      <Hero />

      <main id="main">
        <Features />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}
