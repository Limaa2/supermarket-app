import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Clock } from 'lucide-react';

function Home() {
  return (
    <div className="home-page">
      {/* Hero Banner Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to FreshMarket Express</h1>
          <p className="hero-subtitle">
            Your neighborhood’s favorite online supermarket. Fresh groceries, organic produce, and everyday household essentials delivered straight to your doorstep with lightning speed.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="btn-primary">
              Shop Groceries <ArrowRight size={18} />
            </Link>
            <Link to="/about" className="btn-secondary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>

      {/* Features Highlights Section */}
      <div className="features-grid">
        <div className="feature-card">
          <Truck className="feature-icon" />
          <h3>Fast Home Delivery</h3>
          <p>Get your groceries delivered within hours or schedule a delivery time that fits your day.</p>
        </div>
        <div className="feature-card">
          <ShieldCheck className="feature-icon" />
          <h3>100% Fresh & Organic</h3>
          <p>We source directly from local farmers and trusted suppliers to guarantee top-tier freshness.</p>
        </div>
        <div className="feature-card">
          <Clock className="feature-icon" />
          <h3>24/7 Support</h3>
          <p>Have questions about your order? Our support team is ready to help you anytime.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;