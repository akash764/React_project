import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductDetails from './components/ProductDetails';
import VariantSelector from './components/VariantSelector';
import ProteinBanner from './components/ProteinBanner';
import NutritionStats from './components/NutritionStats';
import FlavorSection from './components/FlavorSection';
import PromoCard from './components/PromoCard';
import ReviewsSection from './components/ReviewsSection';
import RelatedProducts from './components/RelatedProducts';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { assets } from './assets';

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(0);

  const handleAddToCart = () => {
    setCartCount((c) => c + 1);
  };

  const handleVariantChange = (idx) => {
    setSelectedVariant(idx);
  };

  return (
    <div className="app-container">
      <Navbar cartCount={cartCount} />
      <Hero selectedIndex={selectedVariant} />
      <ProductDetails />
      <VariantSelector onVariantChange={handleVariantChange} />

      <div className="product-purchase-section">
        <button className="purchase-button-bar" onClick={handleAddToCart}>
          <span className="atc-text">ADD TO CART</span>
          <div className="purchase-prices">
            <span className="mrp-white">MRP {"\u20B9"}700</span>
            <span className="sale-white">{"\u20B9"}549</span>
          </div>
        </button>
        <p className="tax-info-bottom">Inclusive of all taxes</p>
      </div>

      <PromoCard />

      <div className="as-seen-on-section">
        <div className="as-seen-on-container">
          <p className="as-seen-label">AS SEEN ON</p>
          <div className="brand-logos">
            <img src={assets.brands[0]} alt="Forbes" className="brand-logo-img" />
            <img src={assets.brands[1]} alt="Times of India" className="brand-logo-img times" />
          </div>
        </div>
      </div>

      <ProteinBanner />
      <NutritionStats />
      <FlavorSection />
      <FAQ />

      <RelatedProducts />
      <ReviewsSection />
      <Footer />
    </div>
  );
}

export default App;

