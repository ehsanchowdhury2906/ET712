import React, { useState } from 'react';
import Card from './Card';
import ModalWindow from './ModalWindow';

function ProductList({ products, addToCart }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div>
      <div className="product-list">
        {products.map(product => (
          <Card
            key={product.id}
            product={product}
            onAddToCart={addToCart}
            onOpenModal={setSelectedProduct}
          />
        ))}
      </div>
      <ModalWindow product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}

export default ProductList;
