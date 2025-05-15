import React from 'react';

function Cart({ cartItems }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.0816;
  const total = subtotal + tax;

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.title} (x{item.quantity}) - ${(item.price * item.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
      )}
      <p>Subtotal: ${subtotal.toFixed(2)}</p>
      <p>Tax (8.16%): ${tax.toFixed(2)}</p>
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
}

export default Cart;
