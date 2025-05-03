import React, { useState } from 'react';
import{Route, Routes, BrowserRouter} from "react-router-dom";
import Navbar from './Navbar';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';

function App() {
  const [cart, setCart] =useState([])

  const products = [
    { id: 1, name: 'Apple', price: 2.99 },
    { id: 2, name: 'Banana', price: 3.99 },
    { id: 3, name: 'Watermelon', price: 4.99 },
  ];

  const addToCart = function (product)  {
    setCart([...cart, product]);
  };
  return (
    <div className="App">
    <BrowserRouter>
        <Navbar cartCount={cart.length} />
        <Routes>
          <Route 
            path="/" element={<ProductList products={products} addToCart={addToCart} />} 
          />
          <Route 
            path="/cart" 
            element={<Cart cartItems={cart} />}
            /*element={<Cart cartItems={cart} removeFromCart={removeFromCart} />} */
          />

        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;