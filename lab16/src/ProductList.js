import React from "react";
import Product from './Product';
import './App.css';

function ProductList({ products, addToCart }) {
  return (
    <div className="productlist">
      <h1 className="productlist-title">Products</h1>
      <div className="productlist-grid">
        {products.map(product => (
          <Product 
            key={product.id} 
            product={product} 
            onAddToCart={() => addToCart(product)} 
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
