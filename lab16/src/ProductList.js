import Product from './Product';
import React from "react";
import './App.css';

function ProductList({ products, addToCart }) {
  return (
    <div className="productlist">
      <h1 className="h1">Products</h1>
      {products.map(product => (
        <Product 
            key={product.id} 
            product={product} 
            onAddToCart={function() {addToCart(product)}} 
        />
))}
        {/*<Product 
        key={products[0].id} 
        product={products[0]} 
        onAddToCart={() => addToCart(products[0])} 
        />
        <Product 
        key={products[1].id} 
        product={products[1]} 
        onAddToCart={() => addToCart(products[1])} 
        />
        <Product 
        key={products[2].id} 
        product={products[2]} 
        onAddToCart={() => addToCart(products[2])} 
        />*/}
      
    </div>
  );
}

export default ProductList;