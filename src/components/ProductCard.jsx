import React from 'react';
import { ShoppingBag } from 'lucide-react';

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-footer">
          <span className="product-price">${product.price.toFixed(2)}</span>
          <button 
            className="btn-add-cart" 
            onClick={() => onAddToCart(product)}
          >
            <ShoppingBag size={16} /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export_default ProductCard; // Note: standard export below
export default ProductCard;