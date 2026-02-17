togetherTitle: { en: 'Together We Succeed', ar: 'معاً ننجح', fr: 'Ensemble Nous Réussissons' },
    togetherSubtitle: { en: 'Building lasting partnerships between Algeria and the United Kingdom', ar: 'بناء شراكات دائمة بين الجزائر والمملكة المتحدة', fr: 'Construire des partenariats durables entre l\'Algérie et le Royaume-Uni' },
    togetherTitle: { en: 'Together We Succeed', ar: 'معاً ننجح', fr: 'Ensemble Nous Réussissons' },
    togetherSubtitle: { en: 'Building lasting partnerships between Algeria and the United Kingdom', ar: 'بناء شراكات دائمة بين الجزائر والمملكة المتحدة', fr: 'Construire des partenariats durables entre l\'Algérie et le Royaume-Uni' },
    servicesTitle: { en: 'Our Services', ar: 'خدماتنا', fr: 'Nos Services' },import React, { useState } from 'react';
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

  const getFullBlogContent = (blogId) => {
    const blogContents = {
      1: {
        en: `The UK's appetite for premium dates has grown remarkably. Health-conscious British shoppers are embracing dates as a natural alternative to refined sugars.

Major UK supermarkets including Waitrose, Sainsbury's, and Tesco have expanded their date selections, with Algerian varieties commanding premium shelf space.

Algeria's Biskra region produces 60% of the world's Deglet Nour dates. The UK date market is projected to reach £120 million by 2028.`,
        ar: `نمت شهية المملكة المتحدة للتمور الفاخرة بشكل ملحوظ. يتبنى المتسوقون البريطانيون المهتمون بالصحة التمور كبديل طبيعي للسكريات المكررة.

قامت المتاجر الكبرى في المملكة المتحدة بما في ذلك Waitrose و Sainsbury's و Tesco بتوسيع اختياراتها من التمور.

تنتج منطقة بسكرة الجزائرية 60٪ من تمور دقلة نور في العالم. من المتوقع أن يصل سوق التمور في المملكة المتحدة إلى 120 مليون جنيه إسترليني بحلول عام 2028.`,
        fr: `L'appétit du Royaume-Uni pour les dattes premium a remarquablement augmenté. Les acheteurs britanniques soucieux de leur santé adoptent les dattes comme alternative naturelle.

Les grandes chaînes britanniques ont élargi leur sélection de dattes, les variétés algériennes occupant des espaces premium.

La région de Biskra produit 60% des dattes Deglet Nour mondiales. Le marché britannique devrait atteindre 120 millions £ d'ici 2028.`
      },
      2: {
        en: `Exporting food from Algeria to the UK requires understanding key regulations. HACCP Certification is mandatory for all food exports.

Essential documentation includes Phytosanitary Certificate, Commercial Invoice, Certificate of Origin, and Laboratory Test Results.

UK consumers want clear labeling with product name, ingredients, allergens, and storage instructions.`,
        ar: `يتطلب تصدير الأغذية من الجزائر إلى المملكة المتحدة فهم اللوائح الأساسية. شهادة الهاسب إلزامية لجميع صادرات الأغذية.

الوثائق الأساسية تشمل شهادة صحة نباتية، فاتورة تجارية، شهادة منشأ، ونتائج الاختبارات المعملية.

يريد المستهلكون البريطانيون ملصقات واضحة مع اسم المنتج والمكونات ومسببات الحساسية وتعليمات التخزين.`,
        fr: `L'exportation d'aliments vers le UK nécessite la compréhension des réglementations clés. La Certification HACCP est obligatoire.

La documentation essentielle inclut Certificat Phytosanitaire, Facture Commerciale, Certificat d'Origine et Résultats de Laboratoire.

Les consommateurs britanniques veulent un étiquetage clair avec nom du produit, ingrédients, allergènes et instructions.`
      },
      3: {
        en: `The Algeria-UK food trade relationship is flourishing. The Biskra Dates Cooperative started with 15 families and now supplies 450+ UK stores.

UK technology and equipment suppliers are finding opportunities in Algeria's growing infrastructure development.

Successful partnerships blend British efficiency with Algerian relationship-building and quality focus.`,
        ar: `تزدهر العلاقة التجارية الغذائية بين الجزائر والمملكة المتحدة. بدأت تعاونية تمور بسكرة بـ 15 عائلة وتزود الآن أكثر من 450 متجرًا بريطانيًا.

يجد موردو التكنولوجيا والمعدات البريطانية فرصًا في تطوير البنية التحتية المتنامي في الجزائر.

الشراكات الناجحة تمزج الكفاءة البريطانية مع بناء العلاقات الجزائرية والتركيز على الجودة.`,
        fr: `La relation commerciale Algérie-UK prospère. La Coopérative de Biskra a commencé avec 15 familles et approvisionne maintenant 450+ magasins britanniques.

Les fournisseurs britanniques trouvent des opportunités dans le développement des infrastructures algériennes.

Les partenariats réussis mélangent l'efficacité britannique avec la construction relationnelle algérienne et la qualité.`
      }
    };
    return blogContents[blogId] || { en: '', ar: '', fr: '' };
  };

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

      <section className="together-section">
        <div className="together-container">
          <h2 className="together-title">{t('togetherTitle')}</h2>
          <p className="together-subtitle">{t('togetherSubtitle')}</p>
        </div>
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
            <h1>{blogs.find(b => b.id === selectedBlog).title[currentLang]}</h1>
            <p className="blog-modal-date">{blogs.find(b => b.id === selectedBlog).date}</p>
            <div className="blog-modal-body">
              {getFullBlogContent(selectedBlog)[currentLang].split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
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
              <span>016665 304410</span>
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