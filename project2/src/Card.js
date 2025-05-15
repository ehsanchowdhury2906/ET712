import React, { useState } from 'react';

function Card({ product, onAddToCart, onOpenModal }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="card">
      <h3>{product.title}</h3>
      <img src={product.image} alt={product.title} onClick={() => onOpenModal(product)} />
      <p>{product.description}</p>
      <input type="number" min="1" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
      <button onClick={() => onAddToCart(product, quantity)}>Add to Cart</button>
    </div>
  );
}

export default Card;
