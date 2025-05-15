import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Products</Link>
      <Link to="/cart">Go to Cart</Link>
    </div>
  );
}

export default Navbar;
