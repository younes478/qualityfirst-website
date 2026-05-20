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
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }); },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  const smoothScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const menuData = {
    breakfast: [
      { title: 'Smashed Avocado & Poached Eggs', desc: 'Stone-baked sourdough, ripe avocado, two free-range poached eggs, chilli flakes and micro herbs.', price: 'from £7.50 per person', badge: 'Signature', badgeClass: '' },
      { title: 'Seasonal Fruit & Granola Bowl', desc: 'House-made granola, creamy Greek yoghurt, fresh seasonal berries and a drizzle of raw honey.', price: 'from £5.50 per person', badge: 'Vegan', badgeClass: '' },
      { title: 'Smoked Salmon Bagel', desc: 'Toasted sesame bagel, whipped cream cheese, hand-sliced smoked salmon, capers and fresh lemon.', price: 'from £8.00 per person', badge: 'Premium', badgeClass: 'amber' },
      { title: 'Overnight Oats', desc: 'Rolled oats soaked in oat milk with chia seeds, fresh banana, almond butter and a sprinkle of cinnamon.', price: 'from £4.50 per person', badge: 'Nourishing', badgeClass: '' },
    ],
    lunch: [
      { title: 'The Garden Bowl', desc: 'Quinoa, roasted chickpeas, cherry tomatoes, cucumber, mixed leaves and our signature lemon tahini dressing.', price: 'from £8.00 per person', badge: 'Vegan', badgeClass: '' },
      { title: 'Grilled Chicken Wrap', desc: 'Chargrilled chicken, romaine lettuce, roasted peppers and cool tzatziki in a warm wholemeal wrap.', price: 'from £7.50 per person', badge: 'Signature', badgeClass: '' },
      { title: 'Roasted Vegetable Pasta', desc: 'Penne with slow-roasted courgette, peppers and cherry tomatoes in a light basil and olive oil sauce.', price: 'from £7.00 per person', badge: 'Vegetarian', badgeClass: '' },
      { title: 'Lentil & Sweet Potato Soup', desc: 'Slow-cooked red lentil and sweet potato soup with warming cumin, served with freshly baked seeded bread.', price: 'from £6.00 per person', badge: 'Gluten Free', badgeClass: '' },
    ],
    tea: [
      { title: 'Classic Finger Sandwiches', desc: 'Cucumber and cream cheese, smoked salmon and dill, egg and cress — presented on white and brown bread.', price: 'from £8.50 per person', badge: 'Signature', badgeClass: '' },
      { title: 'Warm Scones', desc: 'Freshly baked plain and fruit scones, served with generous clotted cream and house strawberry preserve.', price: 'from £5.50 per person', badge: 'Beloved', badgeClass: 'coral' },
      { title: 'Seasonal Fruit Platter', desc: 'A generous arrangement of fresh watermelon, grapes, strawberries and honeydew melon.', price: 'from £4.50 per person', badge: 'Light', badgeClass: '' },
      { title: 'Mini Victoria Sponge Cakes', desc: 'Delicate sponge layered with softly whipped cream and raspberry jam, finished with icing sugar.', price: 'from £5.00 per person', badge: 'Indulgent', badgeClass: 'amber' },
    ],
  };

  const features = [
    { icon: '🌿', title: 'Sourced Fresh, Every Morning', desc: 'Every ingredient arrives fresh each day from trusted local suppliers. We never compromise on quality.' },
    { icon: '⚡', title: 'Punctual. Always.', desc: 'Your food arrives precisely when you need it — never a moment too late.' },
    { icon: '👨‍🍳', title: 'Accomplished Chefs', desc: 'Our culinary team brings professional expertise and genuine passion to every dish.' },
    { icon: '🥦', title: 'Thoughtfully Nourishing', desc: 'Balanced menus designed to sustain energy and wellbeing throughout the working day.' },
    { icon: '🎯', title: 'Tailored to Your Team', desc: 'Vegan, halal, kosher, gluten-free — every dietary requirement accommodated with care.' },
    { icon: '💬', title: 'Dedicated Account Manager', desc: 'A single point of contact who knows your office, your team and your standards.' },
  ];

  const testimonials = [
    { stars: 5, text: 'Berkshire Office Catering has genuinely transformed how our team experiences the working day. The quality and attention to detail is unlike anything we have encountered before.', initials: 'SR', name: 'Sarah Reynolds', role: 'Head of Operations, TechFlow Ltd', avatarClass: '' },
    { stars: 5, text: 'The breakfast service is impeccable — always beautifully presented and on time. Our morning meetings have become something the whole team looks forward to.', initials: 'MK', name: 'Marcus Kline', role: 'Chief Executive, Meridian Consulting', avatarClass: 'amber' },
    { stars: 5, text: 'With a diverse team and many dietary requirements, we needed a caterer who truly listens. Berkshire Office Catering exceeded every expectation.', initials: 'JP', name: 'Jessica Park', role: 'Office Manager, Vantage Capital', avatarClass: 'coral' },
  ];

  const footerMenu = ['Breakfast', 'Lunch', 'Afternoon Tea', 'Corporate Events', 'Dietary Requirements'];
  const footerCompany = ['Our Story', 'Meet the Chefs', 'Sustainability', 'Careers', 'Journal'];
  const footerContact = ['Request a Proposal', 'hello@berkshireofficecatering.co.uk', '0800 123 4567', 'FAQs', 'Privacy Policy'];

  return (
    <div className="fd-container">

      {/* NAV */}
      <nav className={`fd-nav ${navScrolled ? 'scrolled' : ''}`}>
        <a href="#top" onClick={(e) => smoothScroll(e, 'top')} className="fd-logo">Berkshire <span>Office Catering</span></a>
        <ul className="fd-nav-links">
          <li><a href="#menu" onClick={(e) => smoothScroll(e, 'menu')}>Menu</a></li>
          <li><a href="#why" onClick={(e) => smoothScroll(e, 'why')}>Our Promise</a></li>
          <li><a href="#values" onClick={(e) => smoothScroll(e, 'values')}>Values</a></li>
          <li><a href="#pricing" onClick={(e) => smoothScroll(e, 'pricing')}>Pricing</a></li>
          <li><a href="#contact" onClick={(e) => smoothScroll(e, 'contact')}>Contact</a></li>
        </ul>
        <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="fd-btn-primary">Get a Quote</a>
      </nav>

      {/* HERO */}
      <section className="fd-hero" id="top">
        <div className="fd-hero-text">
          <div className="fd-hero-badge"><span className="fd-badge-dot"></span>Proudly serving Berkshire and the surrounding counties</div>
          <h1>Exceptional catering<br />for the modern<br /><em>workplace</em></h1>
          <p>We believe that great food transforms the working day. From sunrise breakfasts to elegant afternoon teas, we bring freshly prepared, beautifully presented meals directly to your office — each and every day.</p>
          <div className="fd-hero-actions">
            <a href="#menu" onClick={(e) => smoothScroll(e, 'menu')} className="fd-btn-primary">Explore Our Menu</a>
            <a href="#contact" onClick={(e) => smoothScroll(e, 'contact')} className="fd-btn-outline">Speak With Us</a>
          </div>
          <div className="fd-hero-contact">
            <a href="mailto:hello@berkshireofficecatering.co.uk" className="fd-hero-contact-item">
              <span>✉</span> hello@berkshireofficecatering.co.uk
            </a>
            <a href="tel:08001234567" className="fd-hero-contact-item">
              <span>📞</span> 0800 123 4567
            </a>
          </div>
          <div className="fd-hero-stats">
            <div className="fd-stat"><span className="fd-stat-num">500+</span><span className="fd-stat-label">Offices served</span></div>
            <div className="fd-stat"><span className="fd-stat-num">4.9★</span><span className="fd-stat-label">Client satisfaction</span></div>
            <div className="fd-stat"><span className="fd-stat-num">30 min</span><span className="fd-stat-label">Delivery window</span></div>
          </div>
        </div>
        <div className="fd-hero-visual">
          <div className="fd-hero-card">
            <div className="fd-hero-card-label">Featured Dish</div>
            <h3>The Garden Bowl</h3>
            <p>Quinoa, roasted chickpeas and lemon tahini</p>
            <div className="fd-card-meta">
              <span className="fd-card-rating">★★★★★ 4.9</span>
              <span className="fd-card-tag">Nourishing</span>
            </div>
          </div>
          <div className="fd-float fd-float-1"><span>🚀</span><div><strong>Always On Time</strong><small>Delivered fresh each morning</small></div></div>
          <div className="fd-float fd-float-2"><span>🌿</span><div><strong>Truly Fresh</strong><small>Sourced each morning</small></div></div>
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
            { num: 1, icon: '📋', title: 'Choose Your Plan', desc: 'Select the arrangement that suits your office size, schedule and budget. Daily, weekly or monthly options available.' },
            { num: 2, icon: '🍽️', title: 'Curate Your Menu', desc: 'Browse our seasonally inspired menus and personalise your selection. All dietary requirements accommodated.' },
            { num: 3, icon: '👨‍🍳', title: 'We Prepare with Care', desc: 'Our chefs prepare everything fresh that morning using locally sourced, seasonal produce of the finest quality.' },
            { num: 4, icon: '🚚', title: 'Delivered to Your Door', desc: 'Your food arrives beautifully presented, precisely on time, directly to your office — every single day.' },
          ].map((step) => (
            <div className="fd-step-card animate-on-scroll" key={step.num}>
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
          <h2>Crafted for <em>every occasion</em></h2>
          <p>From the first light of morning to the quiet of the afternoon, our menus are thoughtfully composed to nourish and delight.</p>
        </div>
        <div className="fd-menu-tabs">
          {[
            { key: 'breakfast', label: 'Breakfast', icon: '🌅' },
            { key: 'lunch', label: 'Lunch', icon: '☀️' },
            { key: 'tea', label: 'Afternoon Tea', icon: '🍵' },
          ].map((tab) => (
            <button key={tab.key} className={`fd-tab-btn ${activeTab === tab.key ? 'active' : ''}`} onClick={() => setActiveTab(tab.key)}>
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
        <div className="fd-section-header">
          <span className="fd-section-tag">Our Promise</span>
          <h2>The finest office catering<br />in the region</h2>
          <p>We are more than a catering company. We are a dedicated partner in your team's daily wellbeing.</p>
        </div>
        <div className="fd-features-grid">
          {features.map((f, i) => (
            <div className="fd-feature-card animate-on-scroll" key={i}>
              <div className="fd-feature-icon">{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="fd-testimonials">
        <div className="fd-section-header">
          <span className="fd-section-tag">Client Testimonials</span>
          <h2>Trusted by offices <em>across the region</em></h2>
          <p>Here is what a few of our clients have to say.</p>
        </div>
        <div className="fd-testi-grid">
          {testimonials.map((t, i) => (
            <div className="fd-testi-card animate-on-scroll" key={i}>
              <div className="fd-testi-stars">{'★'.repeat(t.stars)}</div>
              <p className="fd-testi-text">{t.text}</p>
              <div className="fd-testi-author">
                <div className={`fd-testi-avatar ${t.avatarClass}`}>{t.initials}</div>
                <div>
                  <div className="fd-testi-name">{t.name}</div>
                  <div className="fd-testi-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="fd-values" id="values">
        <div className="fd-section-header">
          <span className="fd-section-tag">Our Values</span>
          <h2>What we stand <em>for</em></h2>
          <p>These are the principles that guide every meal we prepare and every relationship we build.</p>
        </div>
        <div className="fd-values-grid">
          <div className="fd-value-card animate-on-scroll">
            <div className="fd-value-num">01</div>
            <h3>Quality Without Compromise</h3>
            <p>We source only the finest seasonal ingredients from trusted local producers. Every dish must meet the same standard we would set for our own table.</p>
          </div>
          <div className="fd-value-card animate-on-scroll">
            <div className="fd-value-num">02</div>
            <h3>Respect for Wellbeing</h3>
            <p>We believe food is a form of care. Our menus are designed to genuinely nourish — supporting energy, focus and the overall health of your team.</p>
          </div>
          <div className="fd-value-card animate-on-scroll">
            <div className="fd-value-num">03</div>
            <h3>Reliability You Can Count On</h3>
            <p>We understand that your working day depends on us. We show up on time, every time — and we take that responsibility seriously.</p>
          </div>
          <div className="fd-value-card animate-on-scroll">
            <div className="fd-value-num">04</div>
            <h3>Sustainability at Heart</h3>
            <p>From reducing food waste to choosing ethical suppliers, we make decisions with the environment in mind — because we believe good business and good values go hand in hand.</p>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="fd-pricing" id="pricing">
        <div className="fd-section-header">
          <span className="fd-section-tag">Our Packages</span>
          <h2>Simple, <em>transparent pricing</em></h2>
          <p>No hidden charges, no surprises — simply exceptional food at an honest price.</p>
        </div>
        <div className="fd-pricing-grid">
          <div className="fd-price-card animate-on-scroll">
            <div className="fd-price-plan">Essential</div>
            <div className="fd-price-amount">£5</div>
            <div className="fd-price-per">per person, per day</div>
            <ul className="fd-price-features">
              {['Continental breakfast or lunch', 'Up to 20 guests', 'Curated seasonal menu', 'Two daily delivery windows', 'Email support'].map((f) => <li key={f}>{f}</li>)}
            </ul>
            <button className="fd-btn-plan outline">Get Started</button>
          </div>
          <div className="fd-price-card popular animate-on-scroll">
            <div className="fd-popular-badge">Most Popular</div>
            <div className="fd-price-plan">Professional</div>
            <div className="fd-price-amount">£9</div>
            <div className="fd-price-per">per person, per day</div>
            <ul className="fd-price-features">
              {['Breakfast, lunch and afternoon tea', 'Up to 100 guests', 'Full menu with bespoke requests', 'Priority delivery', 'Dedicated account manager', 'All dietary requirements'].map((f) => <li key={f}>{f}</li>)}
            </ul>
            <button className="fd-btn-plan filled">Get Started</button>
          </div>
          <div className="fd-price-card animate-on-scroll">
            <div className="fd-price-plan">Bespoke</div>
            <div className="fd-price-amount">Custom</div>
            <div className="fd-price-per">tailored entirely to you</div>
            <ul className="fd-price-features">
              {['Fully bespoke menu design', 'Unlimited guests', 'On-site chef option', 'Boardroom and event catering', '24/7 dedicated support', 'Quarterly menu reviews'].map((f) => <li key={f}>{f}</li>)}
            </ul>
            <button className="fd-btn-plan outline">Contact Us</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="fd-cta" id="contact">
        <h2>Ready to feed your team better?</h2>
        <p>Join over 500 offices who trust Berkshire Office Catering. Your first week is complimentary.</p>
        <div className="fd-cta-form">
          <input className="fd-cta-input" type="email" placeholder="Your work email address" />
          <button className="fd-btn-cta">Get Started Free</button>
        </div>
        <small>No obligation. Cancel at any time. First week on us.</small>
      </section>

      {/* FOOTER */}
      <footer className="fd-footer">
        <div className="fd-footer-grid">
          <div className="fd-footer-brand">
            <span className="fd-logo">Berkshire <span>Office Catering</span></span>
            <p>Berkshire's premier office catering service — fresh, thoughtfully prepared food to the modern workplace, every day.</p>
          </div>
          <div className="fd-footer-col"><h4>Menu</h4><ul>{footerMenu.map((l) => <li key={l}><button className="fd-footer-link">{l}</button></li>)}</ul></div>
          <div className="fd-footer-col"><h4>Company</h4><ul>{footerCompany.map((l) => <li key={l}><button className="fd-footer-link">{l}</button></li>)}</ul></div>
          <div className="fd-footer-col"><h4>Get in Touch</h4><ul>{footerContact.map((l) => <li key={l}><button className="fd-footer-link">{l}</button></li>)}</ul></div>
        </div>
        <div className="fd-footer-bottom">
          <span>2026 Berkshire Office Catering Ltd. All rights reserved.</span>
          <span>Crafted with care in Berkshire</span>
        </div>
      </footer>

    </div>
  );
}

export default App;

