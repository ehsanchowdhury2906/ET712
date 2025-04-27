// ProductCard.js
import React from 'react';
import './productcard.css';

const Productcard = ({ product }) => {
  return (
    <div className="product-card">
      <h3 className="product-name">{product.name}</h3>
      <img className="product-image"
        alt={product.name} 
        src={product.image} 
      />
      <p className="product-price">${product.price}</p>
      <p className="availability"> {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
    </div>
  );
};

export default Productcard;