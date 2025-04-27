// ProductListing.js
import React from 'react';
import Productcard from './productcard';
import './productlist.css';

//use local image
import Headphones from './still-life-wireless-cyberpunk-headphones.jpg'
import Laptop from './laptop-with-white-screen-isolated-white-wall.jpg'
import Smartphone from './phone-png-17028.png'
import Television from './television-tv-png-22240.png'
import Mouse from './pngimg.com - computer_mouse_PNG7672.png'

const Productlist = () => {
  const products = [
    {

      name: 'Headphones',
      image: Headphones,
      price: 99.99,
      inStock: true
    },
    {

      name: 'Laptop',
      image: Laptop,
      price: 199.99,
      inStock: true
    },
    {

      name: 'smartphone',
      image: Smartphone,
      price: 79.99,
      inStock: false
    },
    {

      name: 'television',
      image: Television,
      price: 49.99,
      inStock: true
    },
    {

      name: 'Wireless Mouse',
      image: Mouse,
      price: 29.99,
      inStock: false
    }
  ];

  return (
    <div className="product-listing">
      <h1>Electronic products</h1>
      <div className="products-container">
      <Productcard product={products[0]} />
      <Productcard product={products[1]} />
      <Productcard product={products[2]} />
      <Productcard product={products[3]} />
      <Productcard product={products[4]} />
      </div>
    </div>
  );
};

export default Productlist;