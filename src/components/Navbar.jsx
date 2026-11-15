import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Store } from 'lucide-react'; // Optional icons (make sure you installed lucide-react)

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Store className="brand-icon" />
        <Link to="/" className="brand-title">FreshMarket Express</Link>
      </div>
      
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="nav-cart">
        <Link to="/products" className="cart-icon-container">
          <ShoppingCart />
          <span className="cart-badge">{cartCount || 0}</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;