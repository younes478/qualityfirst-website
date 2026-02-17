<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Algeria-UK Trading Bridge | Food Export Consultation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        :root {
            --algeria-green: #006233;
            --algeria-red: #D21034;
            --uk-blue: #012169;
            --uk-red: #C8102E;
            --cream: #F5F5DC;
            --gold: #B8860B;
            --white: #FFFFFF;
            --text-dark: #2C3E50;
            --text-light: #7F8C8D;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: var(--text-dark);
            background: var(--white);
        }

        /* Header & Navigation */
        header {
            background: linear-gradient(135deg, var(--algeria-green) 0%, var(--uk-blue) 100%);
            color: white;
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        nav {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-wrap: wrap;
        }

        .logo {
            font-size: 1.5rem;
            font-weight: bold;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .flags {
            font-size: 2rem;
        }

        .nav-links {
            display: flex;
            gap: 2rem;
            list-style: none;
        }

        .nav-links a {
            color: white;
            text-decoration: none;
            transition: color 0.3s;
            font-weight: 500;
        }

        .nav-links a:hover {
            color: var(--gold);
        }

        .lang-switcher {
            display: flex;
            gap: 0.5rem;
        }

        .lang-btn {
            background: rgba(255,255,255,0.2);
            border: 1px solid white;
            color: white;
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            cursor: pointer;
            transition: all 0.3s;
        }

        .lang-btn:hover, .lang-btn.active {
            background: white;
            color: var(--uk-blue);
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(rgba(0, 98, 51, 0.9), rgba(1, 33, 105, 0.9)),
                        url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 600"><rect fill="%23006233" width="1200" height="600"/><path fill="%23012169" opacity="0.1" d="M0,600 Q300,450 600,500 T1200,400 L1200,600 Z"/></svg>');
            background-size: cover;
            background-position: center;
            color: white;
            padding: 6rem 2rem;
            text-align: center;
        }

        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .hero p {
            font-size: 1.3rem;
            margin-bottom: 2rem;
            max-width: 800px;
            margin-left: auto;
            margin-right: auto;
        }

        .cta-button {
            background: var(--algeria-red);
            color: white;
            padding: 1rem 2.5rem;
            border: none;
            border-radius: 30px;
            font-size: 1.1rem;
            cursor: pointer;
            transition: all 0.3s;
            text-decoration: none;
            display: inline-block;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
        }

        .cta-button:hover {
            background: var(--uk-red);
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }

        /* Services Section */
        .services {
            max-width: 1200px;
            margin: 4rem auto;
            padding: 0 2rem;
        }

        /* Values Section */
        .values {
            background: linear-gradient(135deg, rgba(0, 98, 51, 0.05), rgba(1, 33, 105, 0.05));
            padding: 4rem 2rem;
            margin: 4rem 0;
        }

        .values-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .values-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .value-card {
            text-align: center;
            padding: 2rem 1rem;
            background: white;
            border-radius: 10px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.08);
            transition: transform 0.3s;
        }

        .value-card:hover {
            transform: translateY(-5px);
        }

        .value-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .value-card h3 {
            color: var(--uk-blue);
            margin-bottom: 0.5rem;
            font-size: 1.3rem;
        }

        .value-card p {
            color: var(--text-light);
            font-size: 0.95rem;
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 3rem;
            color: var(--uk-blue);
        }

        .services-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
        }

        .service-card {
            background: white;
            padding: 2rem;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s;
            border-top: 4px solid var(--algeria-green);
        }

        .service-card:nth-child(even) {
            border-top-color: var(--uk-blue);
        }

        .service-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .service-icon {
            font-size: 3rem;
            margin-bottom: 1rem;
        }

        .service-card h3 {
            color: var(--algeria-green);
            margin-bottom: 1rem;
        }

        /* Products Section */
        .products {
            background: var(--cream);
            padding: 4rem 2rem;
        }

        .products-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .product-card {
            background: white;
            padding: 1.5rem;
            border-radius: 10px;
            text-align: center;
            box-shadow: 0 3px 10px rgba(0,0,0,0.1);
        }

        .product-icon {
            font-size: 4rem;
            margin-bottom: 1rem;
        }

        /* Blog Section */
        .blog {
            max-width: 1200px;
            margin: 4rem auto;
            padding: 0 2rem;
        }

        .blog-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin-top: 2rem;
        }

        .blog-card {
            background: white;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
            transition: transform 0.3s;
        }

        .blog-card:hover {
            transform: translateY(-5px);
        }

        .blog-image {
            width: 100%;
            height: 200px;
            background: linear-gradient(135deg, var(--algeria-green), var(--gold));
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 4rem;
        }

        .blog-content {
            padding: 1.5rem;
        }

        .blog-date {
            color: var(--text-light);
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }

        .blog-card h3 {
            color: var(--uk-blue);
            margin-bottom: 1rem;
        }

        .read-more {
            color: var(--algeria-red);
            text-decoration: none;
            font-weight: bold;
        }

        .read-more:hover {
            color: var(--uk-red);
        }

        /* Contact Section */
        .contact {
            background: linear-gradient(135deg, var(--uk-blue) 0%, var(--algeria-green) 100%);
            color: white;
            padding: 4rem 2rem;
        }

        .contact-container {
            max-width: 800px;
            margin: 0 auto;
            text-align: center;
        }

        .contact-info {
            display: flex;
            justify-content: center;
            gap: 3rem;
            flex-wrap: wrap;
            margin-top: 2rem;
        }

        .contact-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 0.5rem;
        }

        .contact-icon {
            font-size: 2rem;
        }

        /* Footer */
        footer {
            background: var(--text-dark);
            color: white;
            text-align: center;
            padding: 2rem;
        }

        /* Mobile Menu */
        .mobile-menu-btn {
            display: none;
            background: none;
            border: none;
            color: white;
            font-size: 1.5rem;
            cursor: pointer;
        }

        /* Responsive */
        @media (max-width: 768px) {
            nav {
                padding: 0 1rem;
            }

            .logo {
                font-size: 1rem;
            }

            .flags {
                font-size: 1.5rem;
            }

            .mobile-menu-btn {
                display: block;
            }

            .nav-links {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: linear-gradient(135deg, var(--algeria-green) 0%, var(--uk-blue) 100%);
                flex-direction: column;
                padding: 1rem;
                gap: 0.5rem;
                box-shadow: 0 4px 10px rgba(0,0,0,0.2);
            }

            .nav-links.active {
                display: flex;
            }

            .hero {
                padding: 3rem 1rem;
            }

            .hero h1 {
                font-size: 1.8rem;
            }

            .hero p {
                font-size: 1rem;
            }

            .cta-button {
                padding: 0.8rem 1.5rem;
                font-size: 1rem;
            }

            .section-title {
                font-size: 1.8rem;
            }

            .values, .services, .blog {
                padding: 0 1rem;
            }

            .services-grid, .blog-grid, .products-grid {
                grid-template-columns: 1fr;
            }

            .contact-info {
                flex-direction: column;
                gap: 1.5rem;
            }

            .lang-switcher {
                margin-top: 0.5rem;
            }
        }

        @media (max-width: 480px) {
            .hero h1 {
                font-size: 1.5rem;
            }

            .service-icon, .product-icon {
                font-size: 2.5rem;
            }

            .service-card, .product-card, .blog-card {
                padding: 1rem;
            }
        }

        .hidden {
            display: none;
        }
    </style>
</head>
<body>
    <header>
        <nav>
            <div class="logo">
                <span class="flags">🇩🇿 🤝 🇬🇧</span>
                <span data-en="Algeria-UK Trading Bridge" data-ar="جسر التجارة الجزائر-المملكة المتحدة" data-fr="Pont Commercial Algérie-Royaume-Uni">Algeria-UK Trading Bridge</span>
            </div>
            <button class="mobile-menu-btn" onclick="toggleMenu()">☰</button>
            <ul class="nav-links" id="navLinks">
                <li><a href="#services" data-en="Services" data-ar="الخدمات" data-fr="Services" onclick="closeMenu()">Services</a></li>
                <li><a href="#values" data-en="Values" data-ar="القيم" data-fr="Valeurs" onclick="closeMenu()">Values</a></li>
                <li><a href="#products" data-en="Products" data-ar="المنتجات" data-fr="Produits" onclick="closeMenu()">Products</a></li>
                <li><a href="#blog" data-en="Blog" data-ar="المدونة" data-fr="Blog" onclick="closeMenu()">Blog</a></li>
                <li><a href="#contact" data-en="Contact" data-ar="اتصل" data-fr="Contact" onclick="closeMenu()">Contact</a></li>
            </ul>
            <div class="lang-switcher">
                <button class="lang-btn active" onclick="switchLang('en')">EN</button>
                <button class="lang-btn" onclick="switchLang('ar')">AR</button>
                <button class="lang-btn" onclick="switchLang('fr')">FR</button>
            </div>
        </nav>
    </header>

    <section class="hero">
        <h1 data-en="Connecting Algerian & UK Markets" data-ar="ربط الأسواق الجزائرية والبريطانية" data-fr="Connecter les Marchés Algériens et Britanniques">Connecting Algerian & UK Markets</h1>
        <p data-en="Expert consultation services facilitating two-way trade between Algeria and the UK. We connect Algerian food producers with UK markets AND UK exporters with Algerian importers. From dates to technology, cheeses to machinery - we bridge both directions." data-ar="خدمات استشارية متخصصة تسهل التجارة الثنائية بين الجزائر والمملكة المتحدة. نربط منتجي الأغذية الجزائرية بالأسواق البريطانية والمصدرين البريطانيين بالمستوردين الجزائريين. من التمور إلى التكنولوجيا، من الأجبان إلى الآلات - نربط كلا الاتجاهين." data-fr="Services de consultation experts facilitant le commerce bilatéral entre l'Algérie et le Royaume-Uni. Nous connectons les producteurs algériens aux marchés britanniques ET les exportateurs britanniques aux importateurs algériens.">Expert consultation services facilitating two-way trade between Algeria and the UK. We connect Algerian food producers with UK markets AND UK exporters with Algerian importers. From dates to technology, cheeses to machinery - we bridge both directions.</p>
        <a href="#contact" class="cta-button" data-en="Start Trading Both Ways" data-ar="ابدأ التجارة في الاتجاهين" data-fr="Commencez le Commerce Bilatéral">Start Trading Both Ways</a>
    </section>

    <section id="services" class="services">
        <h2 class="section-title" data-en="Our Services" data-ar="خدماتنا" data-fr="Nos Services">Our Services</h2>
        <div class="services-grid">
            <div class="service-card">
                <div class="service-icon">🔗</div>
                <h3 data-en="Two-Way Market Connection" data-ar="الربط الثنائي بالسوق" data-fr="Connexion Bilatérale">Two-Way Market Connection</h3>
                <p data-en="We connect Algerian producers with UK buyers AND UK exporters with Algerian importers - facilitating trade in both directions." data-ar="نربط المنتجين الجزائريين مع المشترين البريطانيين والمصدرين البريطانيين مع المستوردين الجزائريين - تسهيل التجارة في كلا الاتجاهين." data-fr="Nous connectons les producteurs algériens avec les acheteurs britanniques ET les exportateurs britanniques avec les importateurs algériens.">We connect Algerian producers with UK buyers AND UK exporters with Algerian importers - facilitating trade in both directions.</p>
            </div>
            <div class="service-card">
                <div class="service-icon">📋</div>
                <h3 data-en="Import & Export Compliance" data-ar="الامتثال للاستيراد والتصدير" data-fr="Conformité Import-Export">Import & Export Compliance</h3>
                <p data-en="Navigate regulations, certifications, and customs requirements for trade in both directions between Algeria and UK." data-ar="التنقل في اللوائح والشهادات ومتطلبات الجمارك للتجارة في كلا الاتجاهين بين الجزائر والمملكة المتحدة." data-fr="Naviguez dans les réglementations pour le commerce dans les deux sens entre l'Algérie et le Royaume-Uni.">Navigate regulations, certifications, and customs requirements for trade in both directions between Algeria and UK.</p>
            </div>
            <div class="service-card">
                <div class="service-icon">🚚</div>
                <h3 data-en="Bi-Directional Logistics" data-ar="اللوجستيات الثنائية" data-fr="Logistique Bidirectionnelle">Bi-Directional Logistics</h3>
                <p data-en="Complete logistics coordination for Algeria-to-UK and UK-to-Algeria shipments, including customs clearance and delivery." data-ar="تنسيق لوجستي كامل للشحنات من الجزائر إلى المملكة المتحدة ومن المملكة المتحدة إلى الجزائر، بما في ذلك التخليص الجمركي والتسليم." data-fr="Coordination logistique complète pour les expéditions Algérie-UK et UK-Algérie.">Complete logistics coordination for Algeria-to-UK and UK-to-Algeria shipments, including customs clearance and delivery.</p>
            </div>
            <div class="service-card">
                <div class="service-icon">💼</div>
                <h3 data-en="Business Development" data-ar="تطوير الأعمال" data-fr="Développement Commercial">Business Development</h3>
                <p data-en="Strategic planning and market positioning for successful market entry - whether you're entering UK or Algerian markets." data-ar="التخطيط الاستراتيجي ووضع السوق لدخول ناجح للسوق - سواء كنت تدخل أسواق المملكة المتحدة أو الجزائر." data-fr="Planification stratégique pour une entrée réussie sur les marchés britanniques ou algériens.">Strategic planning and market positioning for successful market entry - whether you're entering UK or Algerian markets.</p>
            </div>
            <div class="service-card">
                <div class="service-icon">🌍</div>
                <h3 data-en="Cultural Bridge" data-ar="الجسر الثقافي" data-fr="Pont Culturel">Cultural Bridge</h3>
                <p data-en="Bilingual support bridging Algerian producers with UK buyers through language and cultural expertise." data-ar="دعم ثنائي اللغة يربط المنتجين الجزائريين مع المشترين البريطانيين من خلال الخبرة اللغوية والثقافية." data-fr="Support bilingue reliant producteurs algériens et acheteurs britanniques.">Bilingual support bridging Algerian producers with UK buyers through language and cultural expertise.</p>
            </div>
            <div class="service-card">
                <div class="service-icon">📊</div>
                <h3 data-en="Dual Market Intelligence" data-ar="معلومات السوق المزدوجة" data-fr="Intelligence de Marché Duale">Dual Market Intelligence</h3>
                <p data-en="Real-time insights on both UK and Algerian market trends, consumer preferences, and business opportunities in both countries." data-ar="رؤى فورية حول اتجاهات السوق البريطاني والجزائري وتفضيلات المستهلكين والفرص التجارية في كلا البلدين." data-fr="Informations en temps réel sur les tendances des marchés britannique et algérien.">Real-time insights on both UK and Algerian market trends, consumer preferences, and business opportunities in both countries.</p>
            </div>
        </div>
    </section>

    <section class="values">
        <div class="values-container">
            <h2 class="section-title" data-en="Our Core Values" data-ar="قيمنا الأساسية" data-fr="Nos Valeurs Fondamentales">Our Core Values</h2>
            <div class="values-grid">
                <div class="value-card">
                    <div class="value-icon">🤝</div>
                    <h3 data-en="Trust" data-ar="الثقة" data-fr="Confiance">Trust</h3>
                    <p data-en="Building lasting relationships through transparency and reliability" data-ar="بناء علاقات دائمة من خلال الشفافية والموثوقية" data-fr="Relations durables par la transparence">Building lasting relationships through transparency and reliability</p>
                </div>
                <div class="value-card">
                    <div class="value-icon">💪</div>
                    <h3 data-en="Hard Working" data-ar="العمل الجاد" data-fr="Travail Acharné">Hard Working</h3>
                    <p data-en="Dedicated to going the extra mile for your success" data-ar="ملتزمون ببذل جهد إضافي لنجاحك" data-fr="Dédié à votre succès">Dedicated to going the extra mile for your success</p>
                </div>
                <div class="value-card">
                    <div class="value-icon">✓</div>
                    <h3 data-en="Accountable" data-ar="المسؤولية" data-fr="Responsable">Accountable</h3>
                    <p data-en="Taking ownership and delivering on our commitments" data-ar="تحمل المسؤولية والوفاء بالتزاماتنا" data-fr="Engagements tenus">Taking ownership and delivering on our commitments</p>
                </div>
                <div class="value-card">
                    <div class="value-icon">💡</div>
                    <h3 data-en="Innovative" data-ar="الابتكار" data-fr="Innovant">Innovative</h3>
                    <p data-en="Finding creative solutions to complex trade challenges" data-ar="إيجاد حلول إبداعية للتحديات التجارية المعقدة" data-fr="Solutions créatives">Finding creative solutions to complex trade challenges</p>
                </div>
                <div class="value-card">
                    <div class="value-icon">🎯</div>
                    <h3 data-en="Pragmatic" data-ar="العملية" data-fr="Pragmatique">Pragmatic</h3>
                    <p data-en="Results-focused approach with practical, actionable strategies" data-ar="نهج يركز على النتائج مع استراتيجيات عملية قابلة للتنفيذ" data-fr="Approche axée résultats">Results-focused approach with practical, actionable strategies</p>
                </div>
            </div>
        </div>
    </section>

    <section id="products" class="products">
        <div class="products-container">
            <h2 class="section-title" data-en="Trade Categories" data-ar="فئات التجارة" data-fr="Catégories Commerciales">Trade Categories</h2>
            <h3 style="text-align: center; color: var(--algeria-green); margin-bottom: 1rem;" data-en="🇩🇿 Algeria to UK" data-ar="🇩🇿 الجزائر إلى المملكة المتحدة" data-fr="🇩🇿 Algérie vers UK">🇩🇿 Algeria to UK</h3>
            <div class="products-grid">
                <div class="product-card">
                    <div class="product-icon">🌴</div>
                    <h3 data-en="Premium Dates" data-ar="تمور فاخرة" data-fr="Dattes Premium">Premium Dates</h3>
                    <p data-en="Deglet Nour & other varieties" data-ar="دقلة نور وأصناف أخرى" data-fr="Deglet Nour et autres variétés">Deglet Nour & other varieties</p>
                </div>
                <div class="product-card">
                    <div class="product-icon">🥬</div>
                    <h3 data-en="Fresh Vegetables" data-ar="خضروات طازجة" data-fr="Légumes Frais">Fresh Vegetables</h3>
                    <p data-en="Farm-fresh produce" data-ar="منتجات طازجة من المزرعة" data-fr="Produits de la ferme">Farm-fresh produce</p>
                </div>
                <div class="product-card">
                    <div class="product-icon">🍇</div>
                    <h3 data-en="Quality Fruits" data-ar="فواكه عالية الجودة" data-fr="Fruits de Qualité">Quality Fruits</h3>
                    <p data-en="Seasonal selections" data-ar="مختارات موسمية" data-fr="Sélections saisonnières">Seasonal selections</p>
                </div>
                <div class="product-card">
                    <div class="product-icon">🧀</div>
                    <h3 data-en="Artisan Cheeses" data-ar="أجبان حرفية" data-fr="Fromages Artisanaux">Artisan Cheeses</h3>
                    <p data-en="Traditional varieties" data-ar="أصناف تقليدية" data-fr="Variétés traditionnelles">Traditional varieties</p>
                </div>
            </div>
            
            <h3 style="text-align: center; color: var(--uk-blue); margin: 3rem 0 1rem;" data-en="🇬🇧 UK to Algeria" data-ar="🇬🇧 المملكة المتحدة إلى الجزائر" data-fr="🇬🇧 UK vers Algérie">🇬🇧 UK to Algeria</h3>
            <div class="products-grid">
                <div class="product-card">
                    <div class="product-icon">⚙️</div>
                    <h3 data-en="Industrial Machinery" data-ar="آلات صناعية" data-fr="Machines Industrielles">Industrial Machinery</h3>
                    <p data-en="Manufacturing equipment" data-ar="معدات التصنيع" data-fr="Équipement de fabrication">Manufacturing equipment</p>
                </div>
                <div class="product-card">
                    <div class="product-icon">💻</div>
                    <h3 data-en="Technology & Electronics" data-ar="التكنولوجيا والإلكترونيات" data-fr="Technologie & Électronique">Technology & Electronics</h3>
                    <p data-en="Latest innovations" data-ar="أحدث الابتكارات" data-fr="Dernières innovations">Latest innovations</p>
                </div>
                <div class="product-card">
                    <div class="product-icon">🏗️</div>
                    <h3 data-en="Construction Materials" data-ar="مواد البناء" data-fr="Matériaux de Construction">Construction Materials</h3>
                    <p data-en="Quality building supplies" data-ar="مستلزمات بناء عالية الجودة" data-fr="Fournitures de qualité">Quality building supplies</p>
                </div>
                <div class="product-card">
                    <div class="product-icon">🚗</div>
                    <h3 data-en="Automotive Parts" data-ar="قطع غيار السيارات" data-fr="Pièces Automobiles">Automotive Parts</h3>
                    <p data-en="Vehicles & components" data-ar="المركبات والمكونات" data-fr="Véhicules et composants">Vehicles & components</p>
                </div>
            </div>
        </div>
    </section>

    <section id="blog" class="blog">
        <h2 class="section-title" data-en="Latest Insights" data-ar="أحدث الأفكار" data-fr="Dernières Actualités">Latest Insights</h2>
        <div class="blog-grid">
            <div class="blog-card">
                <div class="blog-image">📈</div>
                <div class="blog-content">
                    <p class="blog-date">February 2026</p>
                    <h3 data-en="Two-Way Trade: UK Technology Demand in Algeria" data-ar="التجارة الثنائية: الطلب على التكنولوجيا البريطانية في الجزائر" data-fr="Commerce Bilatéral: Demande Technologique UK en Algérie">Two-Way Trade: UK Technology Demand in Algeria</h3>
                    <p data-en="Algeria's growing tech sector presents significant opportunities for UK exporters. Infrastructure development and digital transformation are driving demand..." data-ar="يقدم قطاع التكنولوجيا المتنامي في الجزائر فرصًا كبيرة للمصدرين البريطانيين. التطوير في البنية التحتية والتحول الرقمي يدفعان الطلب..." data-fr="Le secteur technologique croissant de l'Algérie présente des opportunités significatives pour les exportateurs britanniques...">Algeria's growing tech sector presents significant opportunities for UK exporters. Infrastructure development and digital transformation are driving demand...</p>
                    <a href="#" class="read-more" data-en="Read More →" data-ar="اقرأ المزيد ←" data-fr="Lire Plus →">Read More →</a>
                </div>
            </div>
            <div class="blog-card">
                <div class="blog-image">🛃</div>
                <div class="blog-content">
                    <p class="blog-date">February 2026</p>
                    <h3 data-en="Navigating Algeria-UK Trade Regulations" data-ar="التنقل في لوائح التجارة بين الجزائر والمملكة المتحدة" data-fr="Réglementations Commerciales Algérie-UK">Navigating Algeria-UK Trade Regulations</h3>
                    <p data-en="Understanding certifications and documentation for trade in both directions. Essential compliance requirements for successful bilateral commerce..." data-ar="فهم الشهادات والوثائق للتجارة في كلا الاتجاهين. متطلبات الامتثال الأساسية للتجارة الثنائية الناجحة..." data-fr="Comprendre les certifications pour le commerce dans les deux sens...">Understanding certifications and documentation for trade in both directions. Essential compliance requirements for successful bilateral commerce...</p>
                    <a href="#" class="read-more" data-en="Read More →" data-ar="اقرأ المزيد ←" data-fr="Lire Plus →">Read More →</a>
                </div>
            </div>
            <div class="blog-card">
                <div class="blog-image">🤝</div>
                <div class="blog-content">
                    <p class="blog-date">January 2026</p>
                    <h3 data-en="Success Story: Building Bridges in Both Directions" data-ar="قصة نجاح: بناء الجسور في كلا الاتجاهين" data-fr="Histoire de Succès: Construire des Ponts Bilatéraux">Success Story: Building Bridges in Both Directions</h3>
                    <p data-en="How we helped an Algerian food producer enter UK markets AND a UK machinery supplier establish distribution in Algeria..." data-ar="كيف ساعدنا منتج أغذية جزائري على دخول أسواق المملكة المتحدة ومورد آلات بريطاني على إنشاء التوزيع في الجزائر..." data-fr="Comment nous avons aidé un producteur algérien à entrer au UK et un fournisseur britannique en Algérie...">How we helped an Algerian food producer enter UK markets AND a UK machinery supplier establish distribution in Algeria...</p>
                    <a href="#" class="read-more" data-en="Read More →" data-ar="اقرأ المزيد ←" data-fr="Lire Plus →">Read More →</a>
                </div>
            </div>
        </div>
    </section>

    <section id="contact" class="contact">
        <div class="contact-container">
            <h2 data-en="Ready to Trade Between Algeria & UK?" data-ar="هل أنت مستعد للتجارة بين الجزائر والمملكة المتحدة؟" data-fr="Prêt à Commercer entre l'Algérie et le UK?">Ready to Trade Between Algeria & UK?</h2>
            <p data-en="Contact us today for a free consultation - whether you're exporting from Algeria to UK or from UK to Algeria" data-ar="اتصل بنا اليوم للحصول على استشارة مجانية - سواء كنت تصدر من الجزائر إلى المملكة المتحدة أو من المملكة المتحدة إلى الجزائر" data-fr="Contactez-nous pour une consultation gratuite - exportation Algérie-UK ou UK-Algérie">Contact us today for a free consultation - whether you're exporting from Algeria to UK or from UK to Algeria</p>
            <div class="contact-info">
                <div class="contact-item">
                    <div class="contact-icon">📞</div>
                    <strong data-en="Phone" data-ar="الهاتف" data-fr="Téléphone">Phone</strong>
                    <span>01632 304410</span>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">✉️</div>
                    <strong data-en="Email" data-ar="البريد الإلكتروني" data-fr="E-mail">Email</strong>
                    <span>qualityfirst.test@gmail.com</span>
                </div>
            </div>
        </div>
    </section>

    <footer>
        <p data-en="© 2026 Algeria-UK Trading Bridge. Facilitating Two-Way Trade, Building Strong Partnerships." data-ar="© 2026 جسر التجارة الجزائر-المملكة المتحدة. تسهيل التجارة الثنائية، بناء شراكات قوية." data-fr="© 2026 Pont Commercial Algérie-Royaume-Uni. Commerce Bilatéral, Partenariats Solides.">© 2026 Algeria-UK Trading Bridge. Facilitating Two-Way Trade, Building Strong Partnerships.</p>
    </footer>

    <script>
        function toggleMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.toggle('active');
        }

        function closeMenu() {
            const navLinks = document.getElementById('navLinks');
            navLinks.classList.remove('active');
        }

        function switchLang(lang) {
            document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
            event.target.classList.add('active');
            
            document.querySelectorAll('[data-en]').forEach(element => {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = element.getAttribute('data-' + lang);
                } else {
                    element.textContent = element.getAttribute('data-' + lang);
                }
            });

            if (lang === 'ar') {
                document.body.style.direction = 'rtl';
            } else {
                document.body.style.direction = 'ltr';
            }
        }

        // Smooth scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    </script>
</body>
</html>