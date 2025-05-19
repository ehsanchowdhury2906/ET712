import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/category1">Category 1</Link>
      <Link className="nav-link" to="/category2">Category 2</Link>
      <Link className="nav-link" to="/cart">Cart</Link>
    </div>
  );
}

export default Navbar;
