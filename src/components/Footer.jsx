import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>FreshMarket Express</h3>
          <p>Your number one online supermarket for fresh groceries, organic produce, and fast home delivery.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/products">Shop Groceries</a></li>
            <li><a href="/contact">Contact Support</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Info</h4>
          <p>Email: support@freshmarket.com</p>
          <p>Phone: +1 (555) 123-4567</p>
          <p>Location: 123 Grocery Lane, Fresh City</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 FreshMarket Express. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;