import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

function Products({ setCartCount }) {
  // Sample array of supermarket products
  const productsList = [
    {
      id: 1,
      name: 'Organic Hass Avocados (Pack of 4)',
      price: 5.99,
      category: 'Produce',
      description: 'Hand-picked creamy organic avocados, perfect for guacamole or salads.',
      image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 2,
      name: 'Fresh Whole Milk (1 Gallon)',
      price: 3.49,
      category: 'Dairy',
      description: 'Farm-fresh vitamin D whole milk pasteurized for rich flavor.',
      image: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 3,
      name: 'Artisan Sourdough Bread',
      price: 4.25,
      category: 'Bakery',
      description: 'Freshly baked artisan sourdough loaf with a crispy crust and soft center.',
      image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 4,
      name: 'Organic Red Vine Tomatoes',
      price: 3.99,
      category: 'Produce',
      description: 'Juicy, vine-ripened red tomatoes bursting with garden-fresh flavor.',
      image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 5,
      name: 'Free-Range Grade A Eggs (Dozen)',
      price: 4.99,
      category: 'Dairy & Eggs',
      description: 'Ethically sourced free-range eggs with rich golden yolks.',
      image: 'https://images.unsplash.com/photo-1516467508483-a7212febe31a?auto=format&fit=crop&w=500&q=80'
    },
    {
      id: 6,
      name: 'Crisp Honeycrisp Apples',
      price: 6.49,
      category: 'Produce',
      description: 'Sweet, crisp, and refreshing apples harvested at peak ripeness.',
      image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=500&q=80'
    }
  ];

  // Function to handle adding items to cart
  const handleAddToCart = (product) => {
    setCartCount(prevCount => prevCount + 1);
    alert(`Added ${product.name} to your shopping cart!`);
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <h2>Supermarket Catalog</h2>
        <p>Explore our fresh produce, dairy, bakery, and everyday pantry essentials.</p>
      </div>

      {/* Rendering products using .map() method */}
      <div className="products-grid">
        {productsList.map((item) => (
          <ProductCard 
            key={item.id} 
            product={item} 
            onAddToCart={handleAddToCart} 
          />
        ))}
      </div>
    </div>
  );
}

export default Products;