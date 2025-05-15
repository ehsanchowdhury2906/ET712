import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Navbar from './components/Navbar';

// Import product images here (example paths, update with your actual image files)
import img1 from './assets/product1.png';
import img2 from './assets/product2.png';
import img3 from './assets/product3.png';
import img4 from './assets/product4.png';
import img5 from './assets/product5.png';
import img6 from './assets/product6.png';
import img7 from './assets/product7.png';
import img8 from './assets/product8.png';
import img9 from './assets/product9.png';

const products = [
  { id: 1, title: "Product 1", image: img1, description: "Description for product 1", price: 10 },
  { id: 2, title: "Product 2", image: img2, description: "Description for product 2", price: 15 },
  { id: 3, title: "Product 3", image: img3, description: "Description for product 3", price: 20 },
  { id: 4, title: "Product 4", image: img4, description: "Description for product 4", price: 12 },
  { id: 5, title: "Product 5", image: img5, description: "Description for product 5", price: 18 },
  { id: 6, title: "Product 6", image: img6, description: "Description for product 6", price: 25 },
  { id: 7, title: "Product 7", image: img7, description: "Description for product 7", price: 8 },
  { id: 8, title: "Product 8", image: img8, description: "Description for product 8", price: 22 },
  { id: 9, title: "Product 9", image: img9, description: "Description for product 9", price: 16 },
];

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
          path="/"
          element={<ProductList products={products} addToCart={addToCart} />}
        />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
