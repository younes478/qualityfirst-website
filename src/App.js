import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');

  const translations = {
    navServices: { en: 'Services', ar: 'الخدمات', fr: 'Services' },
    navValues: { en: 'Values', ar: 'القيم', fr: 'Valeurs' },
    navProducts: { en: 'Products', ar: 'المنتجات', fr: 'Produits' },
    navBlog: { en: 'Blog', ar: 'المدونة', fr: 'Blog' },
    navContact: { en: 'Contact', ar: 'اتصل', fr: 'Contact' },
    logoText: { 
      en: 'Algeria-UK Trading Bridge', 
      ar: 'جسر التجارة الجزائر-المملكة المتحدة', 
      fr: 'Pont Commercial Algérie-Royaume-Uni' 
    },
    heroTitle: { 
      en: 'Connecting Algerian & UK Markets', 
      ar: 'ربط الأسواق الجزائرية والبريطانية', 
      fr: 'Connecter les Marchés Algériens et Britanniques' 
    },
    heroSubtitle: { 
      en: 'Expert consultation services facilitating two-way trade between Algeria and the UK. We connect Algerian food producers with UK markets AND UK exporters with Algerian importers. From dates to technology, cheeses to machinery - we bridge both directions.', 
      ar: 'خدمات استشارية متخصصة تسهل التجارة الثنائية بين الجزائر والمملكة المتحدة. نربط منتجي الأغذية الجزائرية بالأسواق البريطانية والمصدرين البريطانيين بالمستوردين الجزائريين. من التمور إلى التكنولوجيا، من الأجبان إلى الآلات - نربط كلا الاتجاهين.', 
      fr: 'Services de consultation experts facilitant le commerce bilatéral entre l\'Algérie et le Royaume-Uni. Nous connectons les producteurs algériens aux marchés britanniques ET les exportateurs britanniques aux importateurs algériens.' 
    },
    ctaButton: { 
      en: 'Start Trading Both Ways', 
      ar: 'ابدأ التجارة في الاتجاهين', 
      fr: 'Commencez le Commerce Bilatéral' 
    },
    servicesTitle: { en: 'Our Services', ar: 'خدماتنا', fr: 'Nos Services' },
    valuesTitle: { en: 'Our Core Values', ar: 'قيمنا الأساسية', fr: 'Nos Valeurs Fondamentales' },
    productsTitle: { en: 'Trade Categories', ar: 'فئات التجارة', fr: 'Catégories Commerciales' },
    algeriaToUK: { en: '🇩🇿 Algeria to UK', ar: '🇩🇿 الجزائر إلى المملكة المتحدة', fr: '🇩🇿 Algérie vers UK' },
    ukToAlgeria: { en: '🇬🇧 UK to Algeria', ar: '🇬🇧 المملكة المتحدة إلى الجزائر', fr: '🇬🇧 UK vers Algérie' },
    blogTitle: { en: 'Latest Insights', ar: 'أحدث الأفكار', fr: 'Dernières Actualités' },
    contactTitle: { en: 'Ready to Trade Between Algeria & UK?', ar: 'هل أنت مستعد للتجارة بين الجزائر والمملكة المتحدة؟', fr: 'Prêt à Commercer entre l\'Algérie et le UK?' },
    contactSubtitle: { en: 'Contact us today for a free consultation - whether you\'re exporting from Algeria to UK or from UK to Algeria', ar: 'اتصل بنا اليوم للحصول على استشارة مجانية - سواء كنت تصدر من الجزائر إلى المملكة المتحدة أو من المملكة المتحدة إلى الجزائر', fr: 'Contactez-nous pour une consultation gratuite - exportation Algérie-UK ou UK-Algérie' },
    phone: { en: 'Phone', ar: 'الهاتف', fr: 'Téléphone' },
    email: { en: 'Email', ar: 'البريد الإلكتروني', fr: 'E-mail' },
    footer: { en: '© 2026 Algeria-UK Trading Bridge. Facilitating Two-Way Trade, Building Strong Partnerships.', ar: '© 2026 جسر التجارة الجزائر-المملكة المتحدة. تسهيل التجارة الثنائية، بناء شراكات قوية.', fr: '© 2026 Pont Commercial Algérie-Royaume-Uni. Commerce Bilatéral, Partenariats Solides.' },
    readMore: { en: 'Read More →', ar: 'اقرأ المزيد ←', fr: 'Lire Plus →' }
  };

  const t = (key) => translations[key][currentLang];

  const switchLanguage = (lang) => {
    setCurrentLang(lang);
    document.body.style.direction = lang === 'ar' ? 'rtl' : 'ltr';
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const services = [
    {
      icon: '🔗',
      title: { en: 'Two-Way Market Connection', ar: 'الربط الثنائي بالسوق', fr: 'Connexion Bilatérale' },
      description: { en: 'We connect Algerian producers with UK buyers AND UK exporters with Algerian importers - facilitating trade in both directions.', ar: 'نربط المنتجين الجزائريين مع المشترين البريطانيين والمصدرين البريطانيين مع المستوردين الجزائريين - تسهيل التجارة في كلا الاتجاهين.', fr: 'Nous connectons les producteurs algériens avec les acheteurs britanniques ET les exportateurs britanniques avec les importateurs algériens.' }
    },
    {
      icon: '📋',
      title: { en: 'Import & Export Compliance', ar: 'الامتثال للاستيراد والتصدير', fr: 'Conformité Import-Export' },
      description: { en: 'Navigate regulations, certifications, and customs requirements for trade in both directions between Algeria and UK.', ar: 'التنقل في اللوائح والشهادات ومتطلبات الجمارك للتجارة في كلا الاتجاهين بين الجزائر والمملكة المتحدة.', fr: 'Naviguez dans les réglementations pour le commerce dans les deux sens entre l\'Algérie et le Royaume-Uni.' }
    },
    {
      icon: '🚚',
      title: { en: 'Bi-Directional Logistics', ar: 'اللوجستيات الثنائية', fr: 'Logistique Bidirectionnelle' },
      description: { en: 'Complete logistics coordination for Algeria-to-UK and UK-to-Algeria shipments, including customs clearance and delivery.', ar: 'تنسيق لوجستي كامل للشحنات من الجزائر إلى المملكة المتحدة ومن المملكة المتحدة إلى الجزائر، بما في ذلك التخليص الجمركي والتسليم.', fr: 'Coordination logistique complète pour les expéditions Algérie-UK et UK-Algérie.' }
    },
    {
      icon: '💼',
      title: { en: 'Business Development', ar: 'تطوير الأعمال', fr: 'Développement Commercial' },
      description: { en: 'Strategic planning and market positioning for successful market entry - whether you\'re entering UK or Algerian markets.', ar: 'التخطيط الاستراتيجي ووضع السوق لدخول ناجح للسوق - سواء كنت تدخل أسواق المملكة المتحدة أو الجزائر.', fr: 'Planification stratégique pour une entrée réussie sur les marchés britanniques ou algériens.' }
    },
    {
      icon: '🌍',
      title: { en: 'Cultural Bridge', ar: 'الجسر الثقافي', fr: 'Pont Culturel' },
      description: { en: 'Bilingual support bridging Algerian producers with UK buyers through language and cultural expertise.', ar: 'دعم ثنائي اللغة يربط المنتجين الجزائريين مع المشترين البريطانيين من خلال الخبرة اللغوية والثقافية.', fr: 'Support bilingue reliant producteurs algériens et acheteurs britanniques.' }
    },
    {
      icon: '📊',
      title: { en: 'Dual Market Intelligence', ar: 'معلومات السوق المزدوجة', fr: 'Intelligence de Marché Duale' },
      description: { en: 'Real-time insights on both UK and Algerian market trends, consumer preferences, and business opportunities in both countries.', ar: 'رؤى فورية حول اتجاهات السوق البريطاني والجزائري وتفضيلات المستهلكين والفرص التجارية في كلا البلدين.', fr: 'Informations en temps réel sur les tendances des marchés britannique et algérien.' }
    }
  ];

  const values = [
    {
      icon: '🤝',
      title: { en: 'Trust', ar: 'الثقة', fr: 'Confiance' },
      description: { en: 'Building lasting relationships through transparency and reliability', ar: 'بناء علاقات دائمة من خلال الشفافية والموثوقية', fr: 'Relations durables par la transparence' }
    },
    {
      icon: '💪',
      title: { en: 'Hard Working', ar: 'العمل الجاد', fr: 'Travail Acharné' },
      description: { en: 'Dedicated to going the extra mile for your success', ar: 'ملتزمون ببذل جهد إضافي لنجاحك', fr: 'Dédié à votre succès' }
    },
    {
      icon: '✓',
      title: { en: 'Accountable', ar: 'المسؤولية', fr: 'Responsable' },
      description: { en: 'Taking ownership and delivering on our commitments', ar: 'تحمل المسؤولية والوفاء بالتزاماتنا', fr: 'Engagements tenus' }
    },
    {
      icon: '💡',
      title: { en: 'Innovative', ar: 'الابتكار', fr: 'Innovant' },
      description: { en: 'Finding creative solutions to complex trade challenges', ar: 'إيجاد حلول إبداعية للتحديات التجارية المعقدة', fr: 'Solutions créatives' }
    },
    {
      icon: '🎯',
      title: { en: 'Pragmatic', ar: 'العملية', fr: 'Pragmatique' },
      description: { en: 'Results-focused approach with practical, actionable strategies', ar: 'نهج يركز على النتائج مع استراتيجيات عملية قابلة للتنفيذ', fr: 'Approche axée résultats' }
    }
  ];

  const algeriaProducts = [
    { icon: '🌴', title: { en: 'Premium Dates', ar: 'تمور فاخرة', fr: 'Dattes Premium' }, desc: { en: 'Deglet Nour & other varieties', ar: 'دقلة نور وأصناف أخرى', fr: 'Deglet Nour et autres variétés' } },
    { icon: '🥬', title: { en: 'Fresh Vegetables', ar: 'خضروات طازجة', fr: 'Légumes Frais' }, desc: { en: 'Farm-fresh produce', ar: 'منتجات طازجة من المزرعة', fr: 'Produits de la ferme' } },
    { icon: '🍇', title: { en: 'Quality Fruits', ar: 'فواكه عالية الجودة', fr: 'Fruits de Qualité' }, desc: { en: 'Seasonal selections', ar: 'مختارات موسمية', fr: 'Sélections saisonnières' } },
    { icon: '🧀', title: { en: 'Artisan Cheeses', ar: 'أجبان حرفية', fr: 'Fromages Artisanaux' }, desc: { en: 'Traditional varieties', ar: 'أصناف تقليدية', fr: 'Variétés traditionnelles' } }
  ];

  const ukProducts = [
    { icon: '⚙️', title: { en: 'Industrial Machinery', ar: 'آلات صناعية', fr: 'Machines Industrielles' }, desc: { en: 'Manufacturing equipment', ar: 'معدات التصنيع', fr: 'Équipement de fabrication' } },
    { icon: '💻', title: { en: 'Technology & Electronics', ar: 'التكنولوجيا والإلكترونيات', fr: 'Technologie & Électronique' }, desc: { en: 'Latest innovations', ar: 'أحدث الابتكارات', fr: 'Dernières innovations' } },
    { icon: '🏗️', title: { en: 'Construction Materials', ar: 'مواد البناء', fr: 'Matériaux de Construction' }, desc: { en: 'Quality building supplies', ar: 'مستلزمات بناء عالية الجودة', fr: 'Fournitures de qualité' } },
    { icon: '🚗', title: { en: 'Automotive Parts', ar: 'قطع غيار السيارات', fr: 'Pièces Automobiles' }, desc: { en: 'Vehicles & components', ar: 'المركبات والمكونات', fr: 'Véhicules et composants' } }
  ];

  const blogs = [
    {
      icon: '📈',
      date: 'February 2026',
      title: { en: 'Two-Way Trade: UK Technology Demand in Algeria', ar: 'التجارة الثنائية: الطلب على التكنولوجيا البريطانية في الجزائر', fr: 'Commerce Bilatéral: Demande Technologique UK en Algérie' },
      excerpt: { en: 'Algeria\'s growing tech sector presents significant opportunities for UK exporters. Infrastructure development and digital transformation are driving demand...', ar: 'يقدم قطاع التكنولوجيا المتنامي في الجزائر فرصًا كبيرة للمصدرين البريطانيين. التطوير في البنية التحتية والتحول الرقمي يدفعان الطلب...', fr: 'Le secteur technologique croissant de l\'Algérie présente des opportunités significatives pour les exportateurs britanniques...' }
    },
    {
      icon: '🛃',
      date: 'February 2026',
      title: { en: 'Navigating Algeria-UK Trade Regulations', ar: 'التنقل في لوائح التجارة بين الجزائر والمملكة المتحدة', fr: 'Réglementations Commerciales Algérie-UK' },
      excerpt: { en: 'Understanding certifications and documentation for trade in both directions. Essential compliance requirements for successful bilateral commerce...', ar: 'فهم الشهادات والوثائق للتجارة في كلا الاتجاهين. متطلبات الامتثال الأساسية للتجارة الثنائية الناجحة...', fr: 'Comprendre les certifications pour le commerce dans les deux sens...' }
    },
    {
      icon: '🤝',
      date: 'January 2026',
      title: { en: 'Success Story: Building Bridges in Both Directions', ar: 'قصة نجاح: بناء الجسور في كلا الاتجاهين', fr: 'Histoire de Succès: Construire des Ponts Bilatéraux' },
      excerpt: { en: 'How we helped an Algerian food producer enter UK markets AND a UK machinery supplier establish distribution in Algeria...', ar: 'كيف ساعدنا منتج أغذية جزائري على دخول أسواق المملكة المتحدة ومورد آلات بريطاني على إنشاء التوزيع في الجزائر...', fr: 'Comment nous avons aidé un producteur algérien à entrer au UK et un fournisseur britannique en Algérie...' }
    }
  ];

  return (
    <div className="App">
      <header>
        <nav>
          <div className="logo">
            <span className="flags">🇩🇿 🤝 🇬🇧</span>
            <span>{t('logoText')}</span>
          </div>
          <button className="mobile-menu-btn" onClick={toggleMenu}>☰</button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`} id="navLinks">
            <li><a href="#services" onClick={closeMenu}>{t('navServices')}</a></li>
            <li><a href="#values" onClick={closeMenu}>{t('navValues')}</a></li>
            <li><a href="#products" onClick={closeMenu}>{t('navProducts')}</a></li>
            <li><a href="#blog" onClick={closeMenu}>{t('navBlog')}</a></li>
            <li><a href="#contact" onClick={closeMenu}>{t('navContact')}</a></li>
          </ul>
          <div className="lang-switcher">
            <button className={`lang-btn ${currentLang === 'en' ? 'active' : ''}`} onClick={() => switchLanguage('en')}>EN</button>
            <button className={`lang-btn ${currentLang === 'ar' ? 'active' : ''}`} onClick={() => switchLanguage('ar')}>AR</button>
            <button className={`lang-btn ${currentLang === 'fr' ? 'active' : ''}`} onClick={() => switchLanguage('fr')}>FR</button>
          </div>
        </nav>
      </header>

      <section className="hero">
        <h1>{t('heroTitle')}</h1>
        <p>{t('heroSubtitle')}</p>
        <a href="#contact" className="cta-button">{t('ctaButton')}</a>
      </section>

      <section id="services" className="services">
        <h2 className="section-title">{t('servicesTitle')}</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title[currentLang]}</h3>
              <p>{service.description[currentLang]}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="values" className="values">
        <div className="values-container">
          <h2 className="section-title">{t('valuesTitle')}</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title[currentLang]}</h3>
                <p>{value.description[currentLang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="products">
        <div className="products-container">
          <h2 className="section-title">{t('productsTitle')}</h2>
          <h3 style={{ textAlign: 'center', color: 'var(--algeria-green)', marginBottom: '1rem' }}>{t('algeriaToUK')}</h3>
          <div className="products-grid">
            {algeriaProducts.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-icon">{product.icon}</div>
                <h3>{product.title[currentLang]}</h3>
                <p>{product.desc[currentLang]}</p>
              </div>
            ))}
          </div>
          
          <h3 style={{ textAlign: 'center', color: 'var(--uk-blue)', margin: '3rem 0 1rem' }}>{t('ukToAlgeria')}</h3>
          <div className="products-grid">
            {ukProducts.map((product, index) => (
              <div key={index} className="product-card">
                <div className="product-icon">{product.icon}</div>
                <h3>{product.title[currentLang]}</h3>
                <p>{product.desc[currentLang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="blog">
        <h2 className="section-title">{t('blogTitle')}</h2>
        <div className="blog-grid">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <div className="blog-image">{blog.icon}</div>
              <div className="blog-content">
                <p className="blog-date">{blog.date}</p>
                <h3>{blog.title[currentLang]}</h3>
                <p>{blog.excerpt[currentLang]}</p>
                <a href="#" className="read-more">{t('readMore')}</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="contact-container">
          <h2>{t('contactTitle')}</h2>
          <p>{t('contactSubtitle')}</p>
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <strong>{t('phone')}</strong>
              <span>01632 304410</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <strong>{t('email')}</strong>
              <span>qualityfirst.test@gmail.com</span>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <p>{t('footer')}</p>
      </footer>
    </div>
  );
}

export default App;