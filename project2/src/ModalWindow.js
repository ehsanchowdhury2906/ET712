import React, { useState, useEffect } from 'react';

function ModalWindow({ product, allProducts, onClose }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (product && allProducts) {
      const index = allProducts.findIndex(p => p.id === product.id);
      if (index !== -1) setCurrentIndex(index);
    }
  }, [product, allProducts]);

  if (!product || !allProducts) return null;

  const currentProduct = allProducts[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? allProducts.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === allProducts.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{currentProduct.title}</h2>
        <img src={currentProduct.image} alt={currentProduct.title} />
        <p>{currentProduct.longDescription}</p>
        <div style={{ marginTop: '1rem' }}>
          <button onClick={handlePrev}>⬅ Prev</button>
          <button onClick={handleNext} style={{ marginLeft: '1rem' }}>Next ➡</button>
        </div>
        <button onClick={onClose} style={{ marginTop: '1rem', display: 'block' }}>Close</button>
      </div>
    </div>
  );
}

export default ModalWindow;
