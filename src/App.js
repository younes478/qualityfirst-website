import React, { useState, useEffect, useRef } from 'react';
import './App.css';

function FreshDeskWebsite() {
  const [activeTab, setActiveTab] = useState('breakfast');
  const [navScrolled, setNavScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setNavScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Intersection Observer for scroll-in animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [activeTab]);

  const menuData = {
    breakfast: [
      { emoji: '🥐', bg: 'breakfast', title: 'Continental Spread', desc: 'Buttery croissants, freshly baked pastries, fruit salad, yoghurt & granola bowls for the whole team.', price: 'from £6.50/person', badge: 'Bestseller', badgeClass: '' },
      { emoji: '🍳', bg: 'breakfast', title: 'Full English Breakfast', desc: 'Classic eggs, back bacon, grilled tomatoes, mushrooms, baked beans and toasted sourdough.', price: 'from £8.50/person', badge: 'Premium', badgeClass: 'amber' },
      { emoji: '🥤', bg: 'breakfast', title: 'Power Smoothie Bar', desc: 'Freshly blended superfood smoothies — green detox, berry boost & banana protein, served with overnight oats.', price: 'from £5.50/person', badge: 'Healthy', badgeClass: '' },
      { emoji: '🫐', bg: 'breakfast', title: 'Açaí Bowl Station', desc: 'Vibrant açaí bowls topped with seasonal berries, coconut flakes, honey & crunchy granola.', price: 'from £7.00/person', badge: 'Vegan', badgeClass: '' },
      { emoji: '🥚', bg: 'breakfast', title: 'Eggs Benedict Board', desc: 'Poached eggs, hollandaise, smoked salmon or ham on toasted English muffins.', price: 'from £9.00/person', badge: 'Premium', badgeClass: 'amber' },
      { emoji: '🍞', bg: 'breakfast', title: 'Artisan Toast Bar', desc: 'Sourdough & rye toasts with smashed avocado, ricotta, smoked salmon or classic jam & butter.', price: 'from £5.00/person', badge: 'Light', badgeClass: '' },
    ],
    lunch: [
      { emoji: '🥗', bg: 'lunch', title: 'The Garden Bowl', desc: 'Seasonal greens, roasted chickpeas, cherry tomatoes, cucumber & our signature lemon tahini dressing.', price: 'from £8.00/person', badge: 'Vegan', badgeClass: '' },
      { emoji: '🥪', bg: 'lunch', title: 'Gourmet Sandwich Platter', desc: 'Artisan sandwiches with premium fillings — chicken pesto, BLT, hummus & roasted veg, smoked salmon.', price: 'from £7.50/person', badge: 'Bestseller', badgeClass: '' },
      { emoji: '🍱', bg: 'lunch', title: 'Asian Fusion Box', desc: 'Teriyaki chicken or tofu, jasmine rice, pickled cucumber, edamame & sesame dressing.', price: 'from £9.50/person', badge: 'New', badgeClass: 'amber' },
      { emoji: '🫕', bg: 'lunch', title: 'Warm Grain Bowl', desc: 'Quinoa, roasted butternut squash, kale, pomegranate seeds & a warming harissa dressing.', price: 'from £8.50/person', badge: 'Gluten-Free', badgeClass: '' },
      { emoji: '🍝', bg: 'lunch', title: 'Pasta Bar', desc: 'Three seasonal pasta dishes — pesto, arrabbiata or creamy mushroom with fresh parmesan.', price: 'from £7.00/person', badge: 'Popular', badgeClass: 'coral' },
      { emoji: '🥩', bg: 'lunch', title: "Chef's Hot Dish", desc: "Rotating daily specials — slow-braised meats or plant-based mains, served with seasonal sides.", price: 'from £11.00/person', badge: 'Premium', badgeClass: 'amber' },
    ],
    tea: [
      { emoji: '🫖', bg: 'tea', title: 'Classic Afternoon Tea', desc: 'Finger sandwiches, warm scones with clotted cream & jam, mini cakes and a selection of fine teas.', price: 'from £12.00/person', badge: 'Bestseller', badgeClass: '' },
      { emoji: '🧁', bg: 'tea', title: 'Sweet Treat Platter', desc: 'Freshly baked brownies, blondies, mini tarts & seasonal fruit skewers — perfect for afternoon meetings.', price: 'from £6.50/person', badge: 'Sweet', badgeClass: 'coral' },
      { emoji: '☕', bg: 'tea', title: 'Coffee & Cake Station', desc: 'Barista-style coffees & herbal teas paired with artisan cakes, biscotti & chocolate truffles.', price: 'from £8.50/person', badge: 'Premium', badgeClass: 'amber' },
      { emoji: '🍰', bg: 'tea', title: 'Celebration Cake', desc: 'Custom-made office celebration cakes for team milestones, birthdays & achievements. Personalised with your message.', price: 'from £45.00/cake', badge: 'Bespoke', badgeClass: '' },
      { emoji: '🍇', bg: 'tea', title: 'Grazing Board', desc: 'Artisan cheeses, seasonal fruits, antipasti, crackers & homemade dips — a show-stopping centrepiece.', price: 'from £10.00/person', badge: 'Sharing', badgeClass: '' },
      { emoji: '🥐', bg: 'tea', title: 'Healthy Snack Box', desc: 'Energy balls, protein bars, mixed nuts, dried fruit & fresh fruit boxes for the health-conscious team.', price: 'from £5.00/person', badge: 'Vegan', badgeClass: '' },
    ],
  };

  const features = [
    { icon: '🌿', title: '100% Fresh, Sourced Daily', desc: 'Every ingredient is sourced fresh each morning from local suppliers. No frozen shortcuts. Ever.' },
    { icon: '⚡', title: 'Lightning Fast Delivery', desc: "Guaranteed on-time delivery, every time. We know your team can't wait — and we never make them." },
    { icon: '👨‍🍳', title: 'Professional Chef Team', desc: 'Our experienced chefs bring restaurant-quality cooking and presentation to your office daily.' },
    { icon: '🥦', title: 'Healthy & Nutritious', desc: 'Balanced menus designed by nutritionists to keep your team energised, focused, and performing at their best.' },
    { icon: '🎯', title: 'Fully Customisable', desc: 'Dietary needs? Allergies? Preferences? We accommodate everything — vegan, halal, gluten-free, and more.' },
    { icon: '💬', title: 'Dedicated Account Manager', desc: 'You get a single point of contact who knows your office, your team, and your preferences inside out.' },
  ];

  const testimonials = [
    { stars: 5, text: '"FreshDesk has completely transformed our office lunches. The food quality is outstanding — our team actually looks forward to eating at the office now!"', initials: 'SR', name: 'Sarah Reynolds', role: 'Head of Operations · TechFlow Ltd', avatarClass: '' },
    { stars: 5, text: '"The breakfast spreads are incredible and always on time. Our morning meetings are so much more productive now. Highly recommend to any office!"', initials: 'MK', name: 'Marcus Kline', role: 'CEO · Meridian Consulting', avatarClass: 'amber' },
    { stars: 5, text: '"We have a diverse team with many dietary requirements and FreshDesk accommodates everyone beautifully. The afternoon tea for our board meetings is always a hit!"', initials: 'JP', name: 'Jessica Park', role: 'Office Manager · Vantage Capital', avatarClass: 'coral' },
  ];

  return (
    <div className="fd-container">

      {/* ── NAV ── */}
      <nav className={`fd-nav ${navScrolled ? 'scrolled' : ''}`}>
        <a href="#top" className="fd-logo">Fresh<span>Desk</span></a>
        <ul className="fd-nav-links">
          <li><a href="#menu">Menu</a></li>
          <li><a href="#why">Why Us</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <a href="#contact" className="fd-btn-primary">Get a Quote</a>
      </nav>

      {/* ── HERO ── */}
      <section className="fd-hero" id="top">
        <div className="fd-hero-text">
          <div className="fd-hero-badge">
            <span className="fd-badge-dot"></span>
            Now serving London &amp; surrounding areas
          </div>
          <h1>
            Office catering<br />your team will<br /><em>actually love</em>
          </h1>
          <p>Fresh, healthy, and delicious meals delivered straight to your office — every single day. From sunrise breakfasts to afternoon teas, we've got your team covered.</p>
          <div className="fd-hero-actions">
            <a href="#menu" className="fd-btn-primary">Explore Our Menu</a>
            <a href="#contact" className="fd-btn-outline">Talk to Us</a>
          </div>
          <div className="fd-hero-stats">
            <div className="fd-stat"><span className="fd-stat-num">500+</span><span className="fd-stat-label">Offices served</span></div>
            <div className="fd-stat"><span className="fd-stat-num">4.9★</span><span className="fd-stat-label">Average rating</span></div>
            <div className="fd-stat"><span className="fd-stat-num">30min</span><span className="fd-stat-label">Delivery time</span></div>
          </div>
        </div>
        <div className="fd-hero-visual">
          <div className="fd-hero-card">
            <div className="fd-hero-card-img">🥗</div>
            <h3>The Garden Bowl</h3>
            <p>Seasonal greens, roasted chickpeas &amp; lemon tahini</p>
            <div className="fd-card-meta">
              <span className="fd-card-rating">★★★★★ 4.9</span>
              <span className="fd-card-tag">Healthy</span>
            </div>
          </div>
          <div className="fd-float fd-float-1">
            <span>🚀</span>
            <div><strong>Fast Delivery</strong><small>Ready in 30 mins</small></div>
          </div>
          <div className="fd-float fd-float-2">
            <span>🌿</span>
            <div><strong>100% Fresh</strong><small>Sourced daily</small></div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="fd-how">
        <div className="fd-section-header">
          <span className="fd-section-tag">How It Works</span>
          <h2>Catering made <em>effortless</em></h2>
          <p>Four simple steps and your team is fed. We handle everything so you don't have to.</p>
        </div>
        <div className="fd-steps-grid">
          {[
            { num: 1, icon: '📋', title: 'Choose Your Plan', desc: 'Pick a plan that fits your office size and budget. Daily, weekly, or monthly options available.' },
            { num: 2, icon: '🍽️', title: 'Select Your Menu', desc: 'Browse our seasonal menus — breakfast, lunch, or afternoon tea. Customise for dietary needs.' },
            { num: 3, icon: '👨‍🍳', title: 'We Prepare Fresh', desc: 'Our chefs prepare every meal fresh that morning using locally sourced, seasonal ingredients.' },
            { num: 4, icon: '🚚', title: 'Delivered on Time', desc: 'Hot, fresh food delivered directly to your office at exactly the time you need it. Every time.' },
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

      {/* ── MENU ── */}
      <section className="fd-menu" id="menu">
        <div className="fd-section-header">
          <span className="fd-section-tag">Our Menu</span>
          <h2>Fresh food, <em>all day long</em></h2>
          <p>Carefully crafted menus for every moment of your working day.</p>
        </div>
        <div className="fd-menu-tabs">
          {[
            { key: 'breakfast', label: 'Breakfast', icon: '🌅' },
            { key: 'lunch', label: 'Lunch', icon: '☀️' },
            { key: 'tea', label: 'Afternoon Tea', icon: '🍵' },
          ].map((tab) => (
            <button
              key={tab.key}
              className={`fd-tab-btn ${activeTab === tab.key ? 'active' : ''}`}
              onClick={() => setActiveTab(tab.key)}
            >
              <span>{tab.icon}</span> {tab.label}
            </button>
          ))}
        </div>
        <div className="fd-menu-grid">
          {menuData[activeTab].map((item, i) => (
            <div className="fd-food-card animate-on-scroll" key={i}>
              <div className={`fd-food-img fd-food-img--${item.bg}`}>{item.emoji}</div>
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

      {/* ── WHY US ── */}
      <section className="fd-why" id="why">
        <div className="fd-section-header">
          <span className="fd-section-tag">Why FreshDesk</span>
          <h2>The best office catering<br />service in the market</h2>
          <p>We're not just a caterer — we're your office food partner, committed to your team's wellbeing every single day.</p>
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

      {/* ── TESTIMONIALS ── */}
      <section className="fd-testimonials">
        <div className="fd-section-header">
          <span className="fd-section-tag">Testimonials</span>
          <h2>Loved by offices <em>across London</em></h2>
          <p>Don't take our word for it — hear from the teams we feed every day.</p>
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

      {/* ── PRICING ── */}
      <section className="fd-pricing" id="pricing">
        <div className="fd-section-header">
          <span className="fd-section-tag">Pricing</span>
          <h2>Simple, <em>transparent pricing</em></h2>
          <p>No hidden fees, no surprises. Just great food at a fair price.</p>
        </div>
        <div className="fd-pricing-grid">
          <div className="fd-price-card animate-on-scroll">
            <div className="fd-price-plan">Starter</div>
            <div className="fd-price-amount">£5</div>
            <div className="fd-price-per">per person · per day</div>
            <ul className="fd-price-features">
              {['Continental breakfast or lunch', 'Up to 20 people', 'Standard menu selection', '2 delivery slots/day', 'Email support'].map(f => <li key={f}>{f}</li>)}
            </ul>
            <button className="fd-btn-plan outline">Get Started</button>
          </div>
          <div className="fd-price-card popular animate-on-scroll">
            <div className="fd-popular-badge">Most Popular</div>
            <div className="fd-price-plan">Professional</div>
            <div className="fd-price-amount">£9</div>
            <div className="fd-price-per">per person · per day</div>
            <ul className="fd-price-features">
              {['Breakfast + Lunch + Afternoon Tea', 'Up to 100 people', 'Full menu + custom requests', 'Priority delivery', 'Dedicated account manager', 'Dietary accommodations'].map(f => <li key={f}>{f}</li>)}
            </ul>
            <button className="fd-btn-plan filled">Get Started</button>
          </div>
          <div className="fd-price-card animate-on-scroll">
            <div className="fd-price-plan">Enterprise</div>
            <div className="fd-price-amount">Custom</div>
            <div className="fd-price-per">tailored to your needs</div>
            <ul className="fd-price-features">
              {['Bespoke menus designed for you', '100+ people', 'On-site chef option', 'Event & boardroom catering', '24/7 dedicated support', 'Monthly strategy reviews'].map(f => <li key={f}>{f}</li>)}
            </ul>
            <button className="fd-btn-plan outline">Contact Us</button>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="fd-cta" id="contact">
        <h2>Ready to feed your team better?</h2>
        <p>Join 500+ London offices already enjoying FreshDesk. Get your first week free.</p>
        <div className="fd-cta-form">
          <input className="fd-cta-input" type="email" placeholder="Your work email address" />
          <button className="fd-btn-cta">Start Free Trial →</button>
        </div>
        <small>No commitment. Cancel anytime. First week completely free.</small>
      </section>

      {/* ── FOOTER ── */}
      <footer className="fd-footer">
        <div className="fd-footer-grid">
          <div className="fd-footer-brand">
            <span className="fd-logo">Fresh<span>Desk</span></span>
            <p>London's favourite office catering service. Fresh, healthy, delicious food delivered to your workplace every day.</p>
          </div>
          <div className="fd-footer-col">
            <h4>Menu</h4>
            <ul>
              {['Breakfast', 'Lunch', 'Afternoon Tea', 'Event Catering', 'Special Diets'].map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
          <div className="fd-footer-col">
            <h4>Company</h4>
            <ul>
              {['About Us', 'Our Chefs', 'Sustainability', 'Careers', 'Blog'].map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
          <div className="fd-footer-col">
            <h4>Contact</h4>
            <ul>
              {['Get a Quote', 'hello@freshdesk.co.uk', '0800 123 4567', 'FAQs', 'Privacy Policy'].map(l => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="fd-footer-bottom">
          <span>© 2026 FreshDesk Catering Ltd. All rights reserved.</span>
          <span>Made with 🌿 in London</span>
        </div>
      </footer>

    </div>
  );
}

export default FreshDeskWebsite;