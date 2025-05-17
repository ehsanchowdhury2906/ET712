import React from 'react';

function ModalWindow({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>{product.title}</h2>
        <img src={product.image} alt={product.title} />
        <p>{product.longDescription}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default ModalWindow;
