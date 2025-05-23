import React from 'react';
import './App.css';

import homeImg1 from './pexels-asphotograpy-887751.jpg'; // Main image
import homeImg2 from './e1a84655-61ae-495b-9c9d-b62e50f2c9e1.jpg'; // Secondary image
import img3 from './3207179.jpg';
import img4 from './amir-hanna-sweUF7FcyP4-unsplash.jpg';
import img5 from './c-d-x-PDX_a_82obo-unsplash.jpg';
import img6 from './kiran-ck-RZmiDOpv1lM-unsplash.jpg';

function Home() {
  return (
    <div className="home-container">
      {/* Discover Section */}
      <section className="discover-section">
        <h2>Discover Our Craft</h2>

        <div className="discover-main-image">
          <img src={homeImg1} alt="Main Craft Showcase" />
        </div>

        <div className="discover-info-row">
          {/* Left - Coming Soon */}
          <div className="discover-info-box">
            <img src={homeImg2} alt="Coming Soon" className="info-box-image" />
            <img src={img3} alt="Coming Soon Extra" className="info-box-image" />
            <img src={img4} alt="Coming Soon Bonus" className="info-box-image" />
            <h3>Be Ready — Coming Soon!</h3>
            <p>Exciting new creations are launching soon. Stay tuned!</p>
          </div>

          {/* Right - Process Explanation */}
          <div className="discover-info-box">
            <h3>Crafted with Care</h3>
            <p>
              Our products are made with intention — carefully designed and handmade to reflect your unique style.
              Each piece is created with precision, heart, and a commitment to quality you can feel.
            </p>
            <img src={img5} alt="Crafted Detail" className="info-box-image" />
            <img src={img6} alt="Crafted Bonus" className="info-box-image" />
          </div>
        </div>
      </section>

      {/* Sale Announcement */}
      <section className="sale-announcement">
        <h2>🔥 Limited Time Offer</h2>
        <p><strong>-50% discount</strong> when you buy <strong>2 items together</strong> from <strong>May 20th to May 25th!</strong></p>
        <div className="sale-images">
          <img src={homeImg1} alt="Product 1" />
          <img src={homeImg2} alt="Product 2" />
          <img src={img3} alt="Product 3" />
          <img src={img4} alt="Product 4" />
          <img src={img5} alt="Product 5" />
          <img src={img6} alt="Product 6" />
        </div>
      </section>

      {/* Customer Support Section */}
      <section className="customer-service">
        <h2>How Can We Help You?</h2>
        <p>Have a question or need support? We’re here to assist.</p>
        <div className="support-info">
          <div>
            <h3>📍 Where to Reach Us</h3>
            <p>Email: support@example.com</p>
            <p>Phone: +1 (800) 123-4567</p>
            <p>Live Chat: Available 9am–5pm EST</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
