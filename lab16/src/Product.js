import React from "react";
import './App.css';

function Product({ product, onAddToCart }) {
    return (
      <div className="product">
        <h3>{product.name}</h3>
        <p>${product.price.toFixed(2)}</p>
        <button onClick={onAddToCart}>Add to Cart</button>
      </div>
    );
  }
  
  export default Product;