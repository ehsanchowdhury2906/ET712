import React, { useState } from 'react';
import Card from './Card';
import ModalWindow from './ModalWindow';
import './App.css';

function ProductList({ products, addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleOpenModal = (product) => {
    setSelectedProduct(product);
  };

  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="product-list">
      {products.map(product => (
        <Card
          key={product.id}
          product={product}
          onAddToCart={addToCart}
          onOpenModal={handleOpenModal}
        />
      ))}

      <ModalWindow
        product={selectedProduct}
        allProducts={products}
        onClose={handleCloseModal}
      />
    </div>
  );
}

export default ProductList;
