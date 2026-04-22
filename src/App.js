import React from 'react';
import './App.css';

function QualityFirstWebsite() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo-container">
          <img src="/logo192.png" alt="QualityFirst Logo" className="logo" />
          <div>
            <h1 className="company-name">QualityFirst</h1>
            <p className="tagline">Quality Testing Services You Can Trust</p>
          </div>
        </div>
        <nav className="nav">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="hero">
        <h2>Professional Software Quality Assurance</h2>
        <p>Expert manual and automated testing services to ensure your software meets the highest quality standards</p>
      </div>

      <div id="services" className="services">
        <h4 className="font-semibold mb-4 text-sm sm:text-base">Services</h4>
        <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
          <li className="hover:text-white transition-colors">→ Manual Testing</li>
          <li className="hover:text-white transition-colors">→ Test Automation</li>
          <li className="hover:text-white transition-colors">→ Performance Testing</li>
        </ul>
      </div>

      <div id="about" className="about">
        <h4 className="font-semibold mb-4 text-sm sm:text-base">Company</h4>
        <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
          <li className="hover:text-white transition-colors">→ About Us</li>
        </ul>
      </div>

      <div id="contact" className="contact">
        <h4 className="font-semibold mb-4 text-sm sm:text-base">Contact & Hours</h4>
        <div className="text-gray-400 space-y-2 text-sm sm:text-base">
          <p className="break-all">→ qualityfirst.test@gmail.com</p>
          <p>→ +44 1628 304</p>
          <p>→ London, United Kingdom</p>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400 text-sm sm:text-base">
        <p>&copy; 2025 QualityFirst. All rights reserved.</p>
      </div>
    </div>
  );
}

export default QualityFirstWebsite;