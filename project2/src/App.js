import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

// Import images
import cat1_img1 from '.pexels-asphotograpy-887751.jpg';
import cat1_img2 from '.e1a84655-61ae-495b-9c9d-b62e50f2c9e1.jpg';
import cat1_img3 from '.3207179.jpg';
import cat1_img4 from '.pexels-solliefoto-336948.png';

import cat2_img1 from '.c-d-x-PDX_a_82obo-unsplash.jpg';
import cat2_img2 from '.kiran-ck-RZmiDOpv1lM-unsplash.jpg';
import cat2_img3 from '.lee-campbell-GI6L2pkiZgQ-unsplash.jpg';
import cat2_img4 from '.ervo-rocks-Zam8TvEgN5o-unsplash.jpg';

// Define products grouped by category
const productsByCategory = {
  category1: [
    { id: 1, title: "Cat1 Product 1", image: cat1_img1, description: "Description 1", price: 10 },
    { id: 2, title: "Cat1 Product 2", image: cat1_img2, description: "Description 2", price: 12 },
    { id: 3, title: "Cat1 Product 3", image: cat1_img3, description: "Description 3", price: 15 },
    { id: 4, title: "Cat1 Product 4", image: cat1_img4, description: "Description 4", price: 8 },
  ],
  category2: [
    { id: 5, title: "Cat2 Product 1", image: cat2_img1, description: "Description 1", price: 20 },
    { id: 6, title: "Cat2 Product 2", image: cat2_img2, description: "Description 2", price: 18 },
    { id: 7, title: "Cat2 Product 3", image: cat2_img3, description: "Description 3", price: 22 },
    { id: 8, title: "Cat2 Product 4", image: cat2_img4, description: "Description 4", price: 25 },
  ],
};

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
          element={<ProductList products={productsByCategory.category1} addToCart={addToCart} />}
        />
        <Route
          path="/category2"
          element={<ProductList products={productsByCategory.category2} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route
          path="/"
          element={<div>Welcome! Please select a category from the navigation.</div>}
        />
      </Routes>
    </Router>
  );
}

export default App;
