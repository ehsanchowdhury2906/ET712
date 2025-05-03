import React from "react";
import './App.css';

function Cart({ cartItems }) {
    return (
      <div>
        <h1>Cart Items</h1>
        {cartItems.map(function(product) { return (
        <div key={product.id}>{product.name}</div>
        )})}
        {/*<h1 className="h1">Your Cart</h1>
        {cartItems[0] && <div>{cartItems[0].name}</div>}
        {cartItems[1] && <div>{cartItems[1].name}</div>}
        {cartItems[2] && <div>{cartItems[2].name}</div>}
        {cartItems.length === 0 && <p>Empty cart</p>}*/}
      </div>
    );
  }

  export default Cart;