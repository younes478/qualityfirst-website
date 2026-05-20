import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('breakfast');
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const menuData = {
    breakfast: [
      { title: 'Smashed Avocado & Poached Eggs', desc: 'Stone-baked sourdough, ripe avocado, two free-range poached eggs, chilli flakes and micro herbs.', price: 'from £7.50 per person', badge: 'Signature', badgeClass: '' },
      { title: 'Seasonal Fruit & Granola Bowl', desc: 'House-made granola, creamy Greek yoghurt, fresh seasonal berries and a drizzle of raw honey.', price: 'from £5.50 per person', badge: 'Vegan', badgeClass: '' },
      { title: 'Smoked Salmon Bagel', desc: 'Toasted sesame bagel, whipped cream cheese, hand-sliced smoked salmon, capers and fresh lemon.', price: 'from £8.00 per person', badge: 'Premium', badgeClass: 'amber' },
      { title: 'Continental Pastry Basket', desc: 'Warm croissants, pain au chocolat, assorted pastries with artisan jams, butter and fresh orange juice.', price: 'from £6.00 per person', badge: 'Bestseller', badgeClass: '' },
    ],
    lunch: [
      { title: 'The Garden Bowl', desc: 'Quinoa, roasted chickpeas, charred courgette, lemon tahini dressing and toasted seeds.', price: 'from £8.50 per person', badge: 'Vegan', badgeClass: '' },
      { title: 'Grilled Chicken Caesar Wrap', desc: 'Free-range chicken, cos lettuce, shaved parmesan, house Caesar dressing in a soft flour tortilla.', price: 'from £7.50 per person', badge: 'Bestseller', badgeClass: '' },
      { title: 'Slow-Roasted Salmon Platter', desc: 'Scottish salmon, new potatoes, tender stem broccoli, lemon butter sauce and micro herbs.', price: 'from £11.00 per person', badge: 'Premium', badgeClass: 'amber' },
      { title: 'Middle Eastern Mezze', desc: 'Hummus, baba ganoush, warm flatbreads, falafel, tabbouleh and roasted red peppers.', price: 'from £9.00 per person', badge: 'Vegan', badgeClass: '' },
    ],
    tea: [
      { title: 'Classic Afternoon Tea', desc: 'Finger sandwiches, freshly baked scones with clotted cream and jam, a selection of patisserie and fine teas.', price: 'from £14.00 per person', badge: 'Signature', badgeClass: '' },
      { title: 'Seasonal Cake & Coffee', desc: 'Three rotating homemade cakes, biscuits, specialty filter coffee and a full range of teas and herbal infusions.', price: 'from £6.50 per person', badge: 'Popular', badgeClass: '' },
      { title: 'Mini Dessert Platter', desc: 'Assorted mini tarts, macarons, chocolate truffles and petit fours — ideal for meetings and presentations.', price: 'from £8.00 per person', badge: 'Bestseller', badgeClass: '' },
      { title: 'Healthy Snack Box', desc: 'Seasonal fruit skewers, energy balls, mixed nuts, yoghurt pots and fresh juices to keep the team fuelled.', price: 'from £5.00 per person', badge: 'Vegan', badgeClass: '' },
    ],
  };

  const whyItems = [
    { icon: '🌿', title: 'Sourced Fresh Daily', desc: 'Every ingredient is sourced each morning from trusted local suppliers. We never compromise on quality.' },
    { icon: '⚡', title: 'Punctual. Always.', desc: 'Reliable, on-time delivery is a promise we take seriously. Your team\'s day runs to a schedule, and so do we.' },
    { icon: '👨‍🍳', title: 'A Team of Accomplished Chefs', desc: 'Our culinary team brings professional kitchen expertise and genuine passion to every dish we prepare for your office.' },
    { icon: '🥦', title: 'Thoughtfully Nourishing', desc: 'Our menus are designed with your team\'s wellbeing in mind — balanced, vibrant and crafted to sustain energy throughout the day.' },
    { icon: '🎯', title: 'Tailored to Your Team', desc: 'Every dietary requirement is welcomed — vegan, halal, kosher, gluten-free and everything in between.' },
    { icon: '💬', title: 'Your Dedicated Account Manager', desc: 'A single, knowledgeable point of contact who understands your office culture, your preferences and your standards.' },
  ];

  // Footer link mapping to section IDs
  const footerMenuLinks = [
    { label: 'Breakfast', section: 'menu', tab: 'breakfast' },
    { label: 'Lunch', section: 'menu', tab: 'lunch' },
    { label: 'Afternoon Tea', section: 'menu', tab: 'tea' },
    { label: 'Dietary Requirements', section: 'why' },
  ];
  const footerCompanyLinks = [
    { label: 'Our Promise', section: 'why' },
    { label: 'Pricing', section: 'pricing' },
  ];
  const footerContactLinks = [
    { label: 'Get in Touch', section: 'contact' },
    { label: 'hello@berkshireofficecatering.co.uk', href: 'mailto:hello@berkshireofficecatering.co.uk' },
    { label: '0800 123 4567', href: 'tel:08001234567' },
  ];

  const handleFooterMenuClick = (item) => {
    if (item.tab) setActiveTab(item.tab);
    scrollTo(item.section);
  };

  return (
    <div className="fd-container">

      {/* NAV */}
      <nav className={`fd-nav ${navScrolled ? 'scrolled' : ''}`}>
        <div className="fd-logo-block">
          <a href="#top" className="fd-logo">Berkshire <span>Office Catering</span></a>
          <p className="fd-logo-tagline">Fresh · Delicious · Quality</p>
        </div>
        <ul className="fd-nav-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#why">Our Promise</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="fd-btn-primary">Request a Proposal</a>
      </nav>

      {/* HERO */}
      <section className="fd-hero" id="top">
        <div className="fd-hero-text">
          <div className="fd-hero-badge">
            <span className="fd-badge-dot"></span>
            Proudly serving Berkshire and the surrounding counties
          </div>
          <h1>
            Exceptional catering<br />for the modern<br /><em>workplace</em>
          </h1>
          <p>We believe that great food transforms the working day. From sunrise breakfasts to elegant afternoon teas, we bring freshly prepared, beautifully presented meals directly to your office — each and every day.</p>
          <div className="fd-hero-actions">
            <a href="#menu" className="fd-btn-primary">Explore Our Menu</a>
            <a href="#contact" className="fd-btn-outline">Speak With Us</a>
          </div>
        </div>
        <div className="fd-hero-visual">
          <div className="fd-hero-card">
            <div className="fd-hero-card-label">Featured Dish</div>
            <h3>The Garden Bowl</h3>
            <p>Quinoa, roasted chickpeas and lemon tahini</p>
            <div className="fd-card-meta">
              <span className="fd-card-rating">★★★★★</span>
              <span className="fd-card-tag">Nourishing</span>
            </div>
          </div>
          <div className="fd-float fd-float-1">
            <span>🚀</span>
            <div><strong>Always On Time</strong><small>Delivered fresh each morning</small></div>
          </div>
          <div className="fd-float fd-float-2">
            <span>🌿</span>
            <div><strong>Truly Fresh</strong><small>Sourced each morning</small></div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="fd-how">
        <div className="fd-section-header">
          <span className="fd-section-tag">How It Works</span>
          <h2>Effortless from <em>start to finish</em></h2>
          <p>We have designed a seamless experience so your team enjoys outstanding food without a moment of inconvenience.</p>
        </div>
        <div className="fd-steps-grid">
          {[
            { num: 1, icon: '📋', title: 'Choose Your Plan', desc: 'Select the arrangement that suits your office size, schedule and budget. We offer flexible daily, weekly and monthly options.' },
            { num: 2, icon: '🍽️', title: 'Curate Your Menu', desc: 'Browse our seasonally inspired menus and personalise your selection. We warmly accommodate all dietary requirements.' },
            { num: 3, icon: '🚗', title: 'We Deliver', desc: 'Our team arrives punctually with everything beautifully packaged and ready to serve — no fuss, no disruption.' },
            { num: 4, icon: '😊', title: 'Your Team Enjoys', desc: 'Sit back and watch your team\'s day transform. Great food lifts morale, focus and energy in every workplace.' },
          ].map((step) => (
            <div className="fd-step animate-on-scroll" key={step.num}>
              <div className="fd-step-num">{step.num}</div>
              <div className="fd-step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MENU */}
      <section className="fd-menu" id="menu">
        <div className="fd-section-header">
          <span className="fd-section-tag">Our Menu</span>
          <h2>Crafted with <em>genuine care</em></h2>
          <p>Seasonal menus designed by our chefs and refreshed regularly to keep your team inspired.</p>
        </div>
        <div className="fd-tabs">
          {[
            { key: 'breakfast', label: 'Breakfast', icon: '🌅' },
            { key: 'lunch', label: 'Lunch', icon: '☀️' },
            { key: 'tea', label: 'Afternoon Tea', icon: '🍵' },
          ].map((tab) => (
            <button
              key={tab.key}
              className={`fd-tab ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <span>{tab.icon}</span> {tab.label}
            </button>
          ))}
        </div>
        <div className="fd-menu-grid">
          {menuData[activeTab].map((item, i) => (
            <div className="fd-food-card animate-on-scroll" key={i}>
              <div className="fd-food-body">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="fd-food-footer">
                  <span className="fd-food-price">{item.price}</span>
                  <span className={`fd-food-badge ${item.badgeClass}`}>{item.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="fd-why" id="why">
        <div className="fd-section-header light">
          <span className="fd-section-tag light">Our Promise</span>
          <h2>Why offices choose <em>us</em></h2>
          <p>We bring together exceptional food, reliable service and genuine care — every single day.</p>
        </div>
        <div className="fd-why-grid">
          {whyItems.map((item, i) => (
            <div className="fd-why-card animate-on-scroll" key={i}>
              <div className="fd-why-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="fd-pricing" id="pricing">
        <div className="fd-section-header">
          <span className="fd-section-tag">Pricing</span>
          <h2>Simple, <em>transparent pricing</em></h2>
          <p>No complicated contracts. Just great food at a fair price.</p>
        </div>
        <div className="fd-pricing-grid">
          <div className="fd-price-card animate-on-scroll">
            <div className="fd-price-plan">Starter</div>
            <div className="fd-price-amount">£5</div>
            <div className="fd-price-per">per person · per day</div>
            <ul className="fd-price-features">
              {['Continental breakfast or lunch', 'Up to 20 people', 'Standard menu selection', '2 delivery slots/day', 'Email support'].map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button className="fd-btn-plan outline" onClick={() => scrollTo('contact')}>Get Started</button>
          </div>
          <div className="fd-price-card popular animate-on-scroll">
            <div className="fd-popular-badge">Most Popular</div>
            <div className="fd-price-plan">Professional</div>
            <div className="fd-price-amount">£9</div>
            <div className="fd-price-per">per person · per day</div>
            <ul className="fd-price-features">
              {['Breakfast + Lunch + Afternoon Tea', 'Up to 100 people', 'Full menu + custom requests', 'Priority delivery', 'Dedicated account manager', 'Dietary accommodations'].map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button className="fd-btn-plan filled" onClick={() => scrollTo('contact')}>Get Started</button>
          </div>
          <div className="fd-price-card animate-on-scroll">
            <div className="fd-price-plan">Enterprise</div>
            <div className="fd-price-amount">Custom</div>
            <div className="fd-price-per">tailored to your needs</div>
            <ul className="fd-price-features">
              {['Bespoke menus designed for you', '100+ people', 'On-site chef option', 'Event & boardroom catering', '24/7 dedicated support', 'Monthly strategy reviews'].map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <button className="fd-btn-plan outline" onClick={() => scrollTo('contact')}>Contact Us</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fd-cta" id="contact">
        <h2>Ready to elevate your office food?</h2>
        <p>We would love to welcome you. Get in touch and we'll arrange a tasting for your team.</p>
        <div className="fd-cta-form">
          <input className="fd-cta-input" type="email" placeholder="Your professional email address" />
          <button className="fd-btn-cta">Request a Proposal</button>
        </div>
        <small>No obligation. We'll be in touch within one business day.</small>
      </section>

      {/* FOOTER */}
      <footer className="fd-footer">
        <div className="fd-footer-grid">
          <div className="fd-footer-brand">
            <span className="fd-logo">Berkshire <span>Office Catering</span></span>
            <p>Berkshire's premier office catering service — delivering fresh, thoughtfully prepared food to the modern workplace, every single day.</p>
          </div>
          <div className="fd-footer-col">
            <h4>Our Menu</h4>
            <ul>
              {footerMenuLinks.map((item) => (
                <li key={item.label}>
                  <button className="fd-footer-link" onClick={() => handleFooterMenuClick(item)}>{item.label}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="fd-footer-col">
            <h4>The Company</h4>
            <ul>
              {footerCompanyLinks.map((item) => (
                <li key={item.label}>
                  <button className="fd-footer-link" onClick={() => scrollTo(item.section)}>{item.label}</button>
                </li>
              ))}
            </ul>
          </div>
          <div className="fd-footer-col">
            <h4>Get in Touch</h4>
            <ul>
              {footerContactLinks.map((item) => (
                <li key={item.label}>
                  {item.href
                    ? <a className="fd-footer-link" href={item.href}>{item.label}</a>
                    : <button className="fd-footer-link" onClick={() => scrollTo(item.section)}>{item.label}</button>
                  }
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="fd-footer-bottom">
          <span>© 2026 Berkshire Office Catering Ltd. All rights reserved.</span>
          <span>Crafted with care in Berkshire</span>
        </div>
      </footer>

    </div>
  );
}

export default App;