import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Contact from './pages/Contact';

function App() {
  // Optional state to manage cart item count across the app
  const [cartCount, setCartCount] = useState(0);

  return (
    <Router>
      <div className="app-container">
        {/* Navbar stays at the top of every page and passes the cart count */}
        <Navbar cartCount={cartCount} />

        {/* This container holds the changing pages */}
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products setCartCount={setCartCount} />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>

        {/* Footer stays at the bottom of every page */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;