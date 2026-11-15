import React from 'react';

function About() {
  return (
    <div className="about-page">
      <div className="about-header">
        <h2>About FreshMarket Express</h2>
        <p className="about-lead">
          Revolutionizing how families shop for groceries through technology, convenience, and uncompromising quality.
        </p>
      </div>

      <div className="about-grid">
        <div className="about-text-block">
          <h3>Our Story & Background</h3>
          <p>
            Founded in 2024, FreshMarket Express started with a simple mission: to take the hassle out of grocery shopping. We understand that your time is valuable, which is why we built a seamless digital platform that connects you straight to the freshest local produce, pantry staples, and household goods.
          </p>
          <p>
            Over the years, we have grown from a small local delivery service into a trusted online supermarket, partnering with dozens of local farms and ethical producers to bring the market directly to your screen.
          </p>
        </div>

        <div className="about-mission-card">
          <h3>Our Core Objectives</h3>
          <ul>
            <li>✨ Provide seamless online grocery shopping using modern web technology.</li>
            <li>🌱 Guarantee farm-fresh organic vegetables, fruits, and dairy products.</li>
            <li>⚡ Offer rapid, reliable home delivery options for busy households.</li>
            <li>🤝 Maintain transparent and responsive customer support.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;