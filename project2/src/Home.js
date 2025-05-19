import React from 'react';
import './App.css';

import homeImg1 from './pexels-asphotograpy-887751.jpg'; // Main image
import homeImg2 from './e1a84655-61ae-495b-9c9d-b62e50f2c9e1.jpg'; // Smaller image

function Home() {
  return (
    <div className="home-container">
      {/* Discover Section */}
      <section className="discover-section">
        <h2>Discover Our Craft</h2>

        <div className="discover-main-image">
          <img src={homeImg1} alt="Craft Showcase" />
        </div>

        <div className="discover-info-row">
          {/* Left: Coming Soon */}
          <div className="discover-info-box">
            <img src={homeImg2} alt="Coming Soon" className="info-box-image" />
            <h3>Be Ready — Coming Soon</h3>
            <p>Exciting new creations are launching soon. Stay tuned!</p>
          </div>

          {/* Right: Product Details */}
          <div className="discover-info-box">
            <h3>Crafted with Care</h3>
            <p>
              Our products are made with intention — carefully designed and handmade to reflect the
              uniqueness you deserve. Each piece is thoughtfully crafted to bring joy and
              individuality into your life.
            </p>
          </div>
        </div>
      </section>

      {/* Sale Section */}
      <section className="sale-announcement">
        <h2>🔥 Limited Time Offer</h2>
        <p>
          <strong>-50% discount</strong> when you buy <strong>2 items together</strong> from{' '}
          <strong>May 20th to May 25th!</strong>
        </p>
        <div className="sale-images">
          <img src={homeImg1} alt="Product 1" />
          <img src={homeImg2} alt="Product 2" />
        </div>
      </section>

      {/* Support */}
      <section className="customer-service">
        <h2>How Can We Help You?</h2>
        <p>Have a question or need support? We’re here to assist.</p>
        <div className="support-info">
          <h3>📍 Where to Reach Us</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +1 (800) 123-4567</p>
          <p>Live Chat: Available 9am–5pm EST</p>
        </div>
      </section>
    </div>
  );
}

export default Home;
