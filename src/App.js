import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState('en');
  const [selectedBlog, setSelectedBlog] = useState(null);

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
    readMore: { en: 'Read More →', ar: 'اقرأ المزيد ←', fr: 'Lire Plus →' },
    close: { en: 'Close', ar: 'إغلاق', fr: 'Fermer' }
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

  const openBlog = (blogId) => {
    setSelectedBlog(blogId);
    document.body.style.overflow = 'hidden';
  };

  const closeBlog = () => {
    setSelectedBlog(null);
    document.body.style.overflow = 'auto';
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

  const blogArticles = {
    1: {
      title: 'The Rise of Algerian Dates in UK Markets',
      date: 'February 15, 2026',
      content: `The UK's appetite for premium dates has grown remarkably, with Algerian Deglet Nour dates leading this delicious revolution. British consumers are increasingly drawn to the "Queen of Dates" for their distinctive golden color, semi-soft texture, and delicate honey-like sweetness.

## Why UK Loves Algerian Dates

Health-conscious British shoppers are embracing dates as a natural alternative to refined sugars. Packed with fiber, potassium, and antioxidants, Algerian dates perfectly align with the UK's wellness trends. From breakfast bowls to energy bars, these golden gems are becoming a kitchen staple.

Major UK supermarkets including Waitrose, Sainsbury's, and Tesco have expanded their date selections, with Algerian varieties commanding premium shelf space. The organic segment is particularly booming, with sales growing 35% year-over-year.

## The Biskra Advantage

Algeria's Biskra region, home to over 400,000 date palms, produces 60% of the world's Deglet Nour dates. The unique desert climate, traditional cultivation methods passed down through generations, and rich mineral soil create dates of exceptional quality that UK consumers are willing to pay premium prices for.

## Market Opportunities

The UK date market, currently valued at £85 million annually, is projected to reach £120 million by 2028. For Algerian producers, this represents a golden opportunity—premium dates can fetch £8-12 per kilogram at retail, compared to £4-6 for standard varieties.

**Success Story:** The Biskra Dates Cooperative entered the UK market in 2023 with just 50 tonnes. Within 18 months, they're now exporting 200 tonnes annually, earning £1.44 million and supplying over 450 stores across the UK.

Whether you're an Algerian producer looking to tap into this growing market or a UK buyer seeking authentic, premium dates, the Algeria-UK date trade connection is ripe with opportunity.`
    },
    2: {
      title: 'Navigating UK Food Import Regulations - Essential Guide',
      date: 'February 10, 2026',
      content: `Exporting food from Algeria to the UK might seem daunting, but understanding the key regulations makes the process straightforward. Here's what Algerian food producers need to know to successfully enter the British market.

## Essential Certifications

**HACCP Certification** is your foundation. This food safety management system is mandatory for all food exports to the UK. It demonstrates that you have proper controls in place throughout your production process. Most Algerian producers can obtain this through IMANOR or SGS Algeria within 3-6 months.

**Organic Certification** opens premium market doors. UK consumers pay 30-40% more for certified organic products. If you're using traditional, low-intervention farming methods, you're already halfway there.

## Documentation You'll Need

Every shipment requires specific paperwork:
- Phytosanitary Certificate (for plant products like dates and vegetables)
- Commercial Invoice with detailed product descriptions
- Certificate of Origin proving Algerian origin
- Health Certificates for specific product categories
- Laboratory Test Results for pesticide residues and food safety

The key is getting these documents right the first time. One missing signature or incorrect date can delay your entire shipment.

## Labeling Requirements

UK consumers want to know what they're eating. Your labels must include:
- Product name in English
- Complete ingredients list
- Allergen information (clearly highlighted)
- Net weight in metric units
- "Best before" date
- Storage instructions
- "Product of Algeria" statement
- UK importer contact details

## Common Pitfalls to Avoid

**Pesticide Residues:** UK has strict maximum residue levels (MRLs). Always test before shipping.

**Incorrect HS Codes:** Using the wrong harmonized system code can result in incorrect duties or customs rejection.

**Temperature Control:** Dates and fresh produce need proper temperature management during transport.

## Import Duties & Costs

Current duty rates for key Algerian exports:
- Dates: 8.3%
- Olive oil: Variable (£100-120 per 100kg)
- Fresh vegetables: 9-14% depending on product

VAT is 0% for most unprocessed foods, but 20% for processed products.

## Getting Started

Start small with trial shipments of 1-2 tonnes. This allows you to test the market response, refine your processes, build relationships with UK partners, and learn from any mistakes without major financial risk.

**Partner with Experience:** Working with established UK importers who understand both Algerian products and British regulations can dramatically simplify your market entry.

The UK market offers substantial rewards for Algerian food producers who take time to understand and comply with regulations. With proper preparation, your products can reach British tables and command premium prices.`
    },
    3: {
      title: 'Building Bridges - Algeria-UK Food Trade Success Stories',
      date: 'January 28, 2026',
      content: `The Algeria-UK food trade relationship is flourishing, creating opportunities on both sides of the Mediterranean. Here's how businesses from both nations are building successful partnerships.

## Algeria to UK: Premium Quality Meets Growing Demand

**The Biskra Date Success:** When Mohamed Larbi's cooperative decided to export to the UK in 2023, they started with just 15 farming families and a vision. By focusing on quality, obtaining organic certification, and telling their authentic story, they now supply 450+ UK stores and have tripled their income.

Their secret? Understanding that UK consumers want more than just food—they want connection, authenticity, and traceability. Each package tells the story of Biskra's ancient oasis cultivation and the farmers behind the dates.

**Growing Product Categories:**
- Premium Deglet Nour dates leading the charge
- Organic olive oil from Kabylie gaining traction
- Traditional harissa entering specialty stores
- Artisan cheeses finding niche markets

## UK to Algeria: Technology & Infrastructure

The trade isn't one-way. Algeria's rapid infrastructure development and growing middle class create opportunities for UK exporters:

**Construction Boom:** Algeria's infrastructure projects need UK engineering expertise, construction materials, and project management technology. UK companies are supplying everything from building materials to smart city technologies.

**Food Processing Equipment:** As Algerian food producers modernize, they're turning to UK manufacturers for processing, packaging, and quality control equipment.

**Technology Transfer:** UK companies are partnering with Algerian businesses to bring advanced agricultural technology, food safety systems, and supply chain management solutions to Algerian producers.

## Keys to Successful Partnerships

**1. Cultural Understanding**
British directness meets Algerian relationship-building. Successful partnerships blend both approaches—UK efficiency with Algerian hospitality and long-term relationship focus.

**2. Clear Communication**
Language bridges matter. The best partnerships involve bilingual teams who can navigate French, Arabic, and English with ease, preventing misunderstandings before they happen.

**3. Patience and Persistence**
Building trust takes time. The most successful traders invest in face-to-face meetings, trade missions, and regular communication. Zoom calls are helpful, but nothing replaces sharing mint tea in Algiers or fish and chips in London.

**4. Quality Over Speed**
Both markets value quality. UK consumers demand it, and Algerian producers take pride in it. Rushing to market with substandard products damages long-term opportunities.

## Real Results

**Algerian Olive Oil Producer → UK Waitrose**
Started with 500 liters in 2024. Now supplying 50,000 liters annually to premium UK retailer. Price per liter increased from £8 to £12 as brand recognition grew.

**UK Tech Company → Algerian Food Processors**
Supplied packaging machinery to 12 Algerian food companies in 2025. Contracts worth £2.3 million. Now expanding into maintenance and training services.

## The Future is Bilateral

The strongest growth comes from true partnerships, not just transactions. When Algerian producers work with UK importers who understand their products and culture, both sides win. When UK exporters take time to understand Algerian market needs and business culture, they build lasting relationships.

**Looking Ahead:**
- More direct producer-to-retailer relationships
- Technology partnerships in agricultural innovation
- Joint ventures in food processing and packaging
- Increased trade missions and business matchmaking

The Algeria-UK trading bridge grows stronger every year, built on mutual respect, quality products, and genuine partnerships.

Whether you're an Algerian producer wanting to reach UK markets or a UK business seeking opportunities in Algeria's growing economy, the time to build bridges is now.

**Contact us to connect with the right partners and start your cross-Mediterranean success story.**`
    }
  };

  const blogs = [
    {
      id: 1,
      icon: '📈',
      date: 'February 2026',
      title: { en: 'The Rise of Algerian Dates in UK Markets', ar: 'صعود التمور الجزائرية في أسواق المملكة المتحدة', fr: 'L\'Essor des Dattes Algériennes au UK' },
      excerpt: { en: 'The UK\'s appetite for premium dates has grown remarkably, with Algerian Deglet Nour dates leading this delicious revolution...', ar: 'نمت شهية المملكة المتحدة للتمور الفاخرة بشكل ملحوظ، حيث تقود تمور دقلة نور الجزائرية هذه الثورة اللذيذة...', fr: 'L\'appétit du Royaume-Uni pour les dattes premium a remarquablement augmenté...' }
    },
    {
      id: 2,
      icon: '🛃',
      date: 'February 2026',
      title: { en: 'Navigating UK Food Import Regulations', ar: 'التنقل في لوائح استيراد الأغذية البريطانية', fr: 'Réglementations d\'Importation UK' },
      excerpt: { en: 'Essential guide for Algerian food producers. Understanding certifications, documentation, and compliance requirements...', ar: 'دليل أساسي لمنتجي الأغذية الجزائريين. فهم الشهادات والوثائق ومتطلبات الامتثال...', fr: 'Guide essentiel pour les producteurs alimentaires algériens...' }
    },
    {
      id: 3,
      icon: '🤝',
      date: 'January 2026',
      title: { en: 'Building Bridges - Algeria-UK Success Stories', ar: 'بناء الجسور - قصص نجاح الجزائر-المملكة المتحدة', fr: 'Construire des Ponts - Histoires de Succès' },
      excerpt: { en: 'How Algerian and UK businesses thrive together. Real partnerships creating opportunities on both sides...', ar: 'كيف تزدهر الأعمال الجزائرية والبريطانية معًا. شراكات حقيقية تخلق فرصًا على الجانبين...', fr: 'Comment les entreprises algériennes et britanniques prospèrent ensemble...' }
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
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <div className="blog-image">{blog.icon}</div>
              <div className="blog-content">
                <p className="blog-date">{blog.date}</p>
                <h3>{blog.title[currentLang]}</h3>
                <p>{blog.excerpt[currentLang]}</p>
                <span className="read-more" onClick={() => openBlog(blog.id)} style={{cursor: 'pointer'}}>{t('readMore')}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedBlog && (
        <div className="blog-modal" onClick={closeBlog}>
          <div className="blog-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="blog-modal-close" onClick={closeBlog}>×</button>
            <h1>{blogArticles[selectedBlog].title}</h1>
            <p className="blog-modal-date">{blogArticles[selectedBlog].date}</p>
            <div className="blog-modal-body">
              {blogArticles[selectedBlog].content.split('\n').map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return <h2 key={index}>{paragraph.replace('## ', '')}</h2>;
                } else if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return <p key={index}><strong>{paragraph.replace(/\*\*/g, '')}</strong></p>;
                } else if (paragraph.startsWith('- ')) {
                  return <li key={index}>{paragraph.replace('- ', '')}</li>;
                } else if (paragraph.trim() !== '') {
                  return <p key={index}>{paragraph}</p>;
                }
                return null;
              })}
            </div>
          </div>
        </div>
      )}

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