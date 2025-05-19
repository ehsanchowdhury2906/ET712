import React, { useState } from 'react';
import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './ProductList';
import Cart from './Cart';
import Navbar from './Navbar';
import Home from './Home'; // Import the new Home component

import { products } from './products';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity) => {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.id === product.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity }];
      }
    });
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/category1"
          element={<ProductList products={products.category1} addToCart={addToCart} />}
        />
        <Route
          path="/category2"
          element={<ProductList products={products.category2} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/" element={<Home />} /> {/* ✅ Uses new Home component */}
      </Routes>
    </Router>
  );
}

export default App;
