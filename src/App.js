import React, { useState, useEffect } from 'react';
import './App.css';

/* ============================================================
   WHATSAPP CONTACT NUMBER
   Replace with the full business number once you have it.
   Format: country code + number, no spaces, no leading 0.
   e.g. UK number 07774 123456 -> '447774123456'
============================================================ */
const WHATSAPP_NUMBER = '07774'; // TODO: placeholder, incomplete — update when you have the full number

function whatsappLink(message) {
  const digits = WHATSAPP_NUMBER.replace(/\D/g, '').replace(/^0/, '44');
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

/* ============================================================
   ADVERTISEMENTS — edit this list to add/update listings.
   country: 'dz' or 'uk'
============================================================ */
const ads = [];
// Add real listings here as they come in, each shaped like:
// { country: 'dz' | 'uk', category: {en,fr,ar}, title: {en,fr,ar}, body: {en,fr,ar} }

/* ============================================================
   NEWS — edit this list to add/update articles.
============================================================ */
const newsItems = [
  {
    date: '2026-03',
    tag: { en: 'Cooperation', fr: 'Coopération', ar: 'تعاون' },
    title: {
      en: 'UK and Algeria discuss deeper cooperation as trade grows',
      fr: 'Le Royaume-Uni et l\u2019Algérie discutent d\u2019une coopération renforcée alors que les échanges progressent',
      ar: 'المملكة المتحدة والجزائر تبحثان تعاوناً أعمق مع نمو التبادل التجاري'
    },
    summary: {
      en: 'Officials from both countries highlighted growing economic ties, noting bilateral trade has risen by around 11% over the past year, alongside talks on energy transition, migration, and education links.',
      fr: 'Des responsables des deux pays ont souligné le renforcement des liens économiques, notant une hausse d\u2019environ 11 % des échanges bilatéraux sur l\u2019année écoulée, aux côtés de discussions sur la transition énergétique, la migration et l\u2019enseignement.',
      ar: 'أكد مسؤولون من البلدين على تعزيز الروابط الاقتصادية، مشيرين إلى ارتفاع التبادل التجاري الثنائي بنحو 11% خلال العام الماضي، إلى جانب محادثات حول التحول الطاقوي والهجرة والتعليم.'
    }
  },
  {
    date: 'Ongoing',
    tag: { en: 'Regulation', fr: 'Réglementation', ar: 'تنظيم' },
    title: {
      en: 'No standalone UK-Algeria trade agreement in place yet',
      fr: 'Aucun accord commercial autonome entre le Royaume-Uni et l\u2019Algérie pour le moment',
      ar: 'لا يوجد حتى الآن اتفاق تجارة حر مستقل بين المملكة المتحدة والجزائر'
    },
    summary: {
      en: 'Since Brexit, trade between the two countries has continued without a dedicated free trade agreement — a continuity deal was offered but has not been signed by either side. Businesses should check current tariff and customs rules rather than assume EU-era terms still apply.',
      fr: 'Depuis le Brexit, les échanges entre les deux pays se poursuivent sans accord de libre-échange dédié — un accord de continuité avait été proposé mais n\u2019a été signé par aucune des deux parties. Les entreprises doivent vérifier les règles douanières actuelles plutôt que de supposer que les conditions de l\u2019ère européenne s\u2019appliquent encore.',
      ar: 'منذ خروج بريطانيا من الاتحاد الأوروبي، يستمر التبادل التجاري بين البلدين دون اتفاق تجارة حرة مخصص — إذ عُرض اتفاق استمرارية لكن لم يوقعه أي من الطرفين. يُنصح الشركات بالتحقق من القواعد الجمركية الحالية بدلاً من افتراض استمرار شروط الحقبة الأوروبية.'
    }
  },
  {
    date: 'Q1 2025',
    tag: { en: 'Trade Data', fr: 'Données commerciales', ar: 'بيانات تجارية' },
    title: {
      en: 'UK exports to Algeria top £650 million',
      fr: 'Les exportations britanniques vers l\u2019Algérie dépassent 650 millions de livres',
      ar: 'صادرات المملكة المتحدة إلى الجزائر تتجاوز 650 مليون جنيه إسترليني'
    },
    summary: {
      en: 'UK exports to Algeria reached roughly £657 million over the four quarters to Q1 2025, with a double taxation agreement in place between the two countries to ease cross-border business.',
      fr: 'Les exportations britanniques vers l\u2019Algérie ont atteint environ 657 millions de livres sur les quatre trimestres jusqu\u2019au premier trimestre 2025, avec une convention de double imposition en vigueur entre les deux pays pour faciliter les affaires transfrontalières.',
      ar: 'بلغت صادرات المملكة المتحدة إلى الجزائر نحو 657 مليون جنيه إسترليني خلال الأرباع الأربعة المنتهية بالربع الأول من 2025، مع وجود اتفاقية لتجنب الازدواج الضريبي بين البلدين لتسهيل الأعمال عبر الحدود.'
    }
  }
];

const translations = {
  en: {
    nav: ['Home', 'Advertisements', 'News', 'Contact'],
    tagline: 'BUSINESS BUREAU',
    dzLabel: 'ALGERIA',
    ukLabel: 'UNITED KINGDOM',
    heroTitle: 'The trusted go-between for Algerian and UK business.',
    heroSub: 'We introduce businesses and individuals on both sides, support the deal, and take a commission only when it closes. Slowly, one trusted relationship at a time.',
    ctaDz: 'Get in touch from Algeria',
    ctaUk: 'Get in touch from the UK',
    stamp: 'TRUSTED\nINTRODUCTION',
    officeNote: 'DOSSIER N° DZ–UK / 2026',
    sectorEyebrow: 'What we help match',
    sectorTitle: 'Business, in any form',
    sectors: [
      { name: 'Trade & Products', detail: 'Buying or selling goods between the two markets, from food to consumer products and raw materials.' },
      { name: 'Services & Consulting', detail: 'Professional services and expertise, shared and delivered across the two countries.' },
      { name: 'Investment & Real Estate', detail: 'Connecting investors with opportunities, property, or growing businesses.' },
      { name: 'Manufacturing & Sourcing', detail: 'Finding manufacturing partners, suppliers, or contract production on the other side.' }
    ],
    howEyebrow: 'How it works',
    howTitle: 'From first contact to a closed deal',
    steps: [
      { label: 'Tell us what you need', body: 'Share what you\u2019re looking for, or what you have to offer — as a business or an individual, on either side.' },
      { label: 'We find your match', body: 'We search our network on both sides for a serious, vetted counterpart worth your time.' },
      { label: 'We support the introduction', body: 'We handle the introduction, translation, and early negotiation, so nothing gets lost in the gap between the two sides.' },
      { label: 'Deal closes, commission applies', body: 'You agree terms directly with your match. Our commission is only due once a deal is actually made.' }
    ],
    splitEyebrow: 'Two sides, one office',
    splitTitle: 'Which side are you on?',
    dzCard: {
      tag: 'ALGERIA',
      title: 'For businesses & individuals in Algeria',
      body: 'Looking for UK partners, buyers, suppliers, or investment? We introduce you to serious contacts on the other side and support things from first contact to signature.',
      cta: 'Get in touch from Algeria'
    },
    ukCard: {
      tag: 'UNITED KINGDOM',
      title: 'For businesses & individuals in the UK',
      body: 'Looking for partners, suppliers, or opportunities in Algeria? We connect you with vetted contacts and support the introduction and early negotiation.',
      cta: 'Get in touch from the UK'
    },
    trustEyebrow: 'Why we go slowly',
    trustTitle: 'Built to earn trust, not just close deals',
    trust: [
      'A small, hands-on team based on both sides — not a directory of strangers',
      'We only earn when a genuine deal is made, or an ad is placed — nothing charged just to look',
      'Correspondence and introductions in English, French, and Arabic',
      'Growing carefully, one relationship at a time, on both sides of the bridge'
    ],
    adsBannerText: 'Businesses on both sides can advertise here.',
    adsBannerCta: 'See advertisements',
    contactEyebrow: 'Start a conversation',
    contactTitle: 'Tell us which side you\u2019re on',
    contactBody: 'A short conversation is usually enough to understand what you need and who we might introduce you to.',
    whatsappCta: 'Message us on WhatsApp',
    whatsappMessage: 'Hello, I\u2019d like to get in touch about a business opportunity through Atlas Bridge.',
    orDivider: 'or fill in the form',
    formName: 'Name',
    formCompany: 'Company (if any)',
    formRole: 'I am based in...',
    roleDz: 'Algeria',
    roleUk: 'United Kingdom',
    formIntent: 'I\u2019m looking to...',
    intentOptions: ['Find a business partner', 'Find a supplier or buyer', 'Get matched with investment', 'Advertise my business'],
    formMessage: 'What are you looking for, or what can you offer?',
    formSubmit: 'Send inquiry',
    footerNote: 'Atlas Bridge — a business bureau connecting Algeria and the UK.',
    adsPageEyebrow: 'Both sides, one board',
    adsPageTitle: 'Advertisements from Algeria and the UK',
    adsPageBody: 'Businesses and individuals on either side can list here. Placements are arranged directly with our team and updated regularly.',
    adsPlaceCta: 'Want to be listed? Get in touch',
    noAdsYet: 'No advertisements yet — check back soon, or be the first to list.',
    newsPageEyebrow: 'Between the two countries',
    newsPageTitle: 'News & agreements',
    newsPageBody: 'Updates on trade agreements, regulations, and cooperation between Algeria and the UK that affect how business gets done.',
    contactStripHome: 'Back to contact form',
    contactStripText: 'Have a question, or want to be introduced?'
  },
  fr: {
    nav: ['Accueil', 'Annonces', 'Actualités', 'Contact'],
    tagline: 'BUREAU D\u2019AFFAIRES',
    dzLabel: 'ALGÉRIE',
    ukLabel: 'ROYAUME-UNI',
    heroTitle: 'L\u2019intermédiaire de confiance entre l\u2019Algérie et le Royaume-Uni.',
    heroSub: 'Nous mettons en relation entreprises et particuliers des deux côtés, accompagnons la négociation, et ne prenons commission qu\u2019une fois l\u2019accord conclu. Lentement, une relation de confiance à la fois.',
    ctaDz: 'Nous contacter depuis l\u2019Algérie',
    ctaUk: 'Nous contacter depuis le UK',
    stamp: 'MISE EN\nRELATION SÛRE',
    officeNote: 'DOSSIER N° DZ–UK / 2026',
    sectorEyebrow: 'Ce que nous mettons en relation',
    sectorTitle: 'Toutes formes d\u2019affaires',
    sectors: [
      { name: 'Commerce & Produits', detail: 'Achat ou vente de biens entre les deux marchés, de l\u2019alimentaire aux produits de consommation et matières premières.' },
      { name: 'Services & Conseil', detail: 'Services professionnels et expertise, partagés entre les deux pays.' },
      { name: 'Investissement & Immobilier', detail: 'Mise en relation d\u2019investisseurs avec des opportunités, biens ou entreprises en croissance.' },
      { name: 'Fabrication & Sourcing', detail: 'Recherche de partenaires de fabrication, fournisseurs, ou production sous contrat de l\u2019autre côté.' }
    ],
    howEyebrow: 'Comment ça marche',
    howTitle: 'Du premier contact à l\u2019accord conclu',
    steps: [
      { label: 'Dites-nous ce dont vous avez besoin', body: 'Partagez ce que vous cherchez, ou ce que vous proposez — en tant qu\u2019entreprise ou particulier, des deux côtés.' },
      { label: 'Nous trouvons votre correspondance', body: 'Nous cherchons dans notre réseau des deux côtés un interlocuteur sérieux et vérifié.' },
      { label: 'Nous accompagnons la mise en relation', body: 'Nous gérons l\u2019introduction, la traduction, et les premières négociations, pour que rien ne se perde entre les deux côtés.' },
      { label: 'Accord conclu, commission appliquée', body: 'Vous convenez des termes directement avec votre interlocuteur. Notre commission n\u2019est due qu\u2019une fois l\u2019accord réellement conclu.' }
    ],
    splitEyebrow: 'Deux côtés, un bureau',
    splitTitle: 'De quel côté êtes-vous ?',
    dzCard: {
      tag: 'ALGÉRIE',
      title: 'Pour les entreprises et particuliers en Algérie',
      body: 'Vous cherchez des partenaires, acheteurs, fournisseurs ou investisseurs britanniques ? Nous vous mettons en relation avec des contacts sérieux et accompagnons jusqu\u2019à la signature.',
      cta: 'Nous contacter depuis l\u2019Algérie'
    },
    ukCard: {
      tag: 'ROYAUME-UNI',
      title: 'Pour les entreprises et particuliers au Royaume-Uni',
      body: 'Vous cherchez des partenaires, fournisseurs ou opportunités en Algérie ? Nous vous connectons à des contacts vérifiés et accompagnons la mise en relation.',
      cta: 'Nous contacter depuis le UK'
    },
    trustEyebrow: 'Pourquoi nous allons doucement',
    trustTitle: 'Conçu pour gagner la confiance, pas seulement conclure',
    trust: [
      'Une petite équipe engagée des deux côtés — pas un annuaire d\u2019inconnus',
      'Nous ne gagnons que lorsqu\u2019un accord réel est conclu, ou qu\u2019une annonce est placée — rien pour simplement chercher',
      'Correspondance et mises en relation en anglais, français et arabe',
      'Une croissance prudente, une relation à la fois, des deux côtés du pont'
    ],
    adsBannerText: 'Les entreprises des deux côtés peuvent s\u2019annoncer ici.',
    adsBannerCta: 'Voir les annonces',
    contactEyebrow: 'Démarrer une conversation',
    contactTitle: 'Dites-nous de quel côté vous êtes',
    contactBody: 'Une courte conversation suffit généralement pour comprendre votre besoin et qui nous pourrions vous présenter.',
    whatsappCta: 'Contactez-nous sur WhatsApp',
    whatsappMessage: 'Bonjour, je souhaite entrer en contact au sujet d\u2019une opportunité d\u2019affaires via Atlas Bridge.',
    orDivider: 'ou remplissez le formulaire',
    formName: 'Nom',
    formCompany: 'Entreprise (le cas échéant)',
    formRole: 'Je suis basé en...',
    roleDz: 'Algérie',
    roleUk: 'Royaume-Uni',
    formIntent: 'Je cherche à...',
    intentOptions: ['Trouver un partenaire d\u2019affaires', 'Trouver un fournisseur ou acheteur', 'Être mis en relation pour investir', 'Faire de la publicité pour mon entreprise'],
    formMessage: 'Que cherchez-vous, ou que proposez-vous ?',
    formSubmit: 'Envoyer la demande',
    footerNote: 'Atlas Bridge — un bureau d\u2019affaires reliant l\u2019Algérie et le Royaume-Uni.',
    adsPageEyebrow: 'Deux côtés, un seul espace',
    adsPageTitle: 'Annonces d\u2019Algérie et du Royaume-Uni',
    adsPageBody: 'Les entreprises et particuliers des deux côtés peuvent s\u2019annoncer ici. Les emplacements sont organisés directement avec notre équipe et mis à jour régulièrement.',
    adsPlaceCta: 'Vous voulez être listé ? Contactez-nous',
    noAdsYet: 'Aucune annonce pour le moment — revenez bientôt, ou soyez le premier à vous annoncer.',
    newsPageEyebrow: 'Entre les deux pays',
    newsPageTitle: 'Actualités & accords',
    newsPageBody: 'Mises à jour sur les accords commerciaux, réglementations et coopérations entre l\u2019Algérie et le Royaume-Uni qui touchent la façon de faire des affaires.',
    contactStripHome: 'Retour au formulaire de contact',
    contactStripText: 'Une question, ou envie d\u2019être mis en relation ?'
  },
  ar: {
    nav: ['الرئيسية', 'الإعلانات', 'الأخبار', 'اتصل بنا'],
    tagline: 'مكتب أعمال',
    dzLabel: 'الجزائر',
    ukLabel: 'المملكة المتحدة',
    heroTitle: 'الوسيط الموثوق بين الأعمال الجزائرية والبريطانية.',
    heroSub: 'نُعرّف الشركات والأفراد من الجانبين على بعضهم، وندعم إتمام الصفقة، ولا نأخذ عمولة إلا عند إغلاقها. ببطء، علاقة موثوقة تلو الأخرى.',
    ctaDz: 'تواصل معنا من الجزائر',
    ctaUk: 'تواصل معنا من المملكة المتحدة',
    stamp: 'تعارف\nموثوق',
    officeNote: 'ملف رقم DZ–UK / 2026',
    sectorEyebrow: 'ما نساعد في التعارف عليه',
    sectorTitle: 'الأعمال بكل أشكالها',
    sectors: [
      { name: 'التجارة والمنتجات', detail: 'شراء أو بيع البضائع بين السوقين، من الأغذية إلى المنتجات الاستهلاكية والمواد الخام.' },
      { name: 'الخدمات والاستشارات', detail: 'خدمات مهنية وخبرات تُقدَّم وتُتبادل بين البلدين.' },
      { name: 'الاستثمار والعقارات', detail: 'ربط المستثمرين بالفرص أو العقارات أو الشركات النامية.' },
      { name: 'التصنيع والتوريد', detail: 'إيجاد شركاء تصنيع أو موردين أو إنتاج بالتعاقد في الجانب الآخر.' }
    ],
    howEyebrow: 'كيف تعمل',
    howTitle: 'من أول تواصل إلى إغلاق الصفقة',
    steps: [
      { label: 'أخبرنا بما تحتاجه', body: 'شاركنا ما تبحث عنه، أو ما تقدمه — كشركة أو فرد، من أي من الجانبين.' },
      { label: 'نجد لك التطابق المناسب', body: 'نبحث في شبكتنا في الجانبين عن نظير جاد وموثوق يستحق وقتك.' },
      { label: 'ندعم التعارف', body: 'نتولى التعريف والترجمة والمفاوضات الأولية، حتى لا يضيع شيء بين الجانبين.' },
      { label: 'إغلاق الصفقة، وتُطبَّق العمولة', body: 'تتفقون على الشروط مباشرة مع نظيركم. عمولتنا لا تُستحق إلا بعد إتمام الصفقة فعلياً.' }
    ],
    splitEyebrow: 'جانبان، مكتب واحد',
    splitTitle: 'في أي جانب أنت؟',
    dzCard: {
      tag: 'الجزائر',
      title: 'للشركات والأفراد في الجزائر',
      body: 'تبحث عن شركاء أو مشترين أو موردين أو استثمار من بريطانيا؟ نُعرّفك على جهات جادة في الجانب الآخر وندعمك حتى التوقيع.',
      cta: 'تواصل معنا من الجزائر'
    },
    ukCard: {
      tag: 'المملكة المتحدة',
      title: 'للشركات والأفراد في المملكة المتحدة',
      body: 'تبحث عن شركاء أو موردين أو فرص في الجزائر؟ نربطك بجهات موثوقة وندعم التعارف والمفاوضات الأولية.',
      cta: 'تواصل معنا من المملكة المتحدة'
    },
    trustEyebrow: 'لماذا نتقدم ببطء',
    trustTitle: 'مصمم لكسب الثقة، لا فقط لإغلاق الصفقات',
    trust: [
      'فريق صغير وملتزم على كلا الجانبين — لا دليل لأشخاص غرباء',
      'لا نكسب إلا عند إتمام صفقة حقيقية أو نشر إعلان — لا رسوم مقابل البحث فقط',
      'المراسلات والتعارف بالإنجليزية والفرنسية والعربية',
      'نمو حذر، علاقة تلو الأخرى، على جانبَي الجسر'
    ],
    adsBannerText: 'يمكن للشركات من الجانبين الإعلان هنا.',
    adsBannerCta: 'عرض الإعلانات',
    contactEyebrow: 'ابدأ محادثة',
    contactTitle: 'أخبرنا في أي جانب أنت',
    contactBody: 'محادثة قصيرة عادة ما تكفي لفهم ما تحتاجه ومن قد نُعرّفك عليه.',
    whatsappCta: 'راسلنا عبر واتساب',
    whatsappMessage: 'مرحباً، أرغب في التواصل بخصوص فرصة عمل عبر أطلس بريدج.',
    orDivider: 'أو املأ النموذج',
    formName: 'الاسم',
    formCompany: 'الشركة (إن وجدت)',
    formRole: 'أنا مقيم في...',
    roleDz: 'الجزائر',
    roleUk: 'المملكة المتحدة',
    formIntent: 'أبحث عن...',
    intentOptions: ['إيجاد شريك أعمال', 'إيجاد مورد أو مشتري', 'التعارف على فرصة استثمارية', 'الإعلان عن عملي'],
    formMessage: 'ما الذي تبحث عنه، أو ما الذي يمكنك تقديمه؟',
    formSubmit: 'إرسال الطلب',
    footerNote: 'أطلس بريدج — مكتب أعمال يربط الجزائر بالمملكة المتحدة.',
    adsPageEyebrow: 'جانبان، لوحة واحدة',
    adsPageTitle: 'إعلانات من الجزائر والمملكة المتحدة',
    adsPageBody: 'يمكن للشركات والأفراد من الجانبين الإدراج هنا. تُنظَّم الإعلانات مباشرة مع فريقنا وتُحدَّث بانتظام.',
    adsPlaceCta: 'تريد الإدراج؟ تواصل معنا',
    noAdsYet: 'لا توجد إعلانات بعد — تحقق قريباً، أو كن أول من يُدرج إعلاناً.',
    newsPageEyebrow: 'بين البلدين',
    newsPageTitle: 'الأخبار والاتفاقيات',
    newsPageBody: 'تحديثات حول الاتفاقيات التجارية واللوائح والتعاون بين الجزائر والمملكة المتحدة التي تؤثر على طريقة إتمام الأعمال.',
    contactStripHome: 'العودة إلى نموذج الاتصال',
    contactStripText: 'لديك سؤال، أو تريد تعارفاً؟'
  }
};

function FlagStrip() {
  return (
    <div className="flag-strip">
      <span className="dz-green"></span>
      <span className="dz-white"></span>
      <span className="dz-red"></span>
      <span className="uk-navy"></span>
      <span className="uk-white"></span>
      <span className="uk-red"></span>
    </div>
  );
}

function ContactStrip({ t, onBack }) {
  return (
    <div className="contact-strip">
      <p>{t.contactStripText}</p>
      <button className="btn btn-submit" onClick={onBack}>{t.contactStripHome}</button>
    </div>
  );
}

function App() {
  const [lang, setLang] = useState('en');
  const [page, setPage] = useState('home');
  const [scrollToContact, setScrollToContact] = useState(false);
  const t = translations[lang];
  const isRtl = lang === 'ar';

  useEffect(() => {
    if (page === 'home' && scrollToContact) {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      setScrollToContact(false);
    }
  }, [page, scrollToContact]);

  const goToContact = () => {
    setPage('home');
    setScrollToContact(true);
  };

  const navTargets = ['home', 'ads', 'news', 'contact'];

  const handleNav = (target) => {
    if (target === 'contact') {
      goToContact();
    } else {
      setPage(target);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className={`page-root ${isRtl ? 'rtl' : ''}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <header className="nav">
        <div className="nav-brand" onClick={() => handleNav('home')} role="button" tabIndex={0}>
          <span className="brand-mark">⛩</span>
          <div className="brand-text">
            <span className="brand-name">Atlas Bridge</span>
            <span className="brand-tagline">{t.tagline}</span>
          </div>
        </div>
        <nav className="nav-links">
          {t.nav.map((item, i) => (
            <button key={i} className={`nav-link ${page === navTargets[i] ? 'nav-link-active' : ''}`} onClick={() => handleNav(navTargets[i])}>
              {item}
            </button>
          ))}
        </nav>
        <div className="lang-switch">
          {['en', 'fr', 'ar'].map((l) => (
            <button key={l} className={lang === l ? 'active' : ''} onClick={() => setLang(l)}>
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </header>

      <FlagStrip />

      {page === 'home' && (
        <div className="page">
          <section className="hero">
            <div className="office-note">{t.officeNote}</div>
            <h1 className="hero-title">{t.heroTitle}</h1>
            <p className="hero-sub">{t.heroSub}</p>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-dz" onClick={(e) => { e.preventDefault(); goToContact(); }}>{t.ctaDz}</a>
              <a href="#contact" className="btn btn-uk" onClick={(e) => { e.preventDefault(); goToContact(); }}>{t.ctaUk}</a>
            </div>

            <div className="manifest-split">
              <div className="manifest-panel panel-dz">
                <span className="panel-label">{t.dzLabel}</span>
              </div>

              <div className="manifest-seam">
                <div className="stamp">
                  {t.stamp.split('\n').map((line, i) => (
                    <span key={i}>{line}</span>
                  ))}
                </div>
              </div>

              <div className="manifest-panel panel-uk">
                <span className="panel-label">{t.ukLabel}</span>
              </div>
            </div>
          </section>

          <section className="sectors">
            <span className="eyebrow">{t.sectorEyebrow}</span>
            <h2>{t.sectorTitle}</h2>
            <div className="cat-grid">
              {t.sectors.map((s, i) => (
                <div className="cat-card" key={i}>
                  <h3>{s.name}</h3>
                  <p>{s.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="how">
            <span className="eyebrow">{t.howEyebrow}</span>
            <h2>{t.howTitle}</h2>
            <div className="steps-grid">
              {t.steps.map((step, i) => (
                <div className="step" key={i}>
                  <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{step.label}</h3>
                  <p>{step.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="ads-banner">
            <p>{t.adsBannerText}</p>
            <button className="btn btn-uk" onClick={() => handleNav('ads')}>{t.adsBannerCta}</button>
          </section>

          <section className="split-cta">
            <span className="eyebrow center">{t.splitEyebrow}</span>
            <h2 className="center">{t.splitTitle}</h2>
            <div className="split-grid">
              <div className="split-card card-dz">
                <span className="card-tag">{t.dzCard.tag}</span>
                <h3>{t.dzCard.title}</h3>
                <p>{t.dzCard.body}</p>
                <a href="#contact" className="btn btn-submit" onClick={(e) => { e.preventDefault(); goToContact(); }}>{t.dzCard.cta}</a>
              </div>
              <div className="split-card card-uk">
                <span className="card-tag">{t.ukCard.tag}</span>
                <h3>{t.ukCard.title}</h3>
                <p>{t.ukCard.body}</p>
                <a href="#contact" className="btn btn-submit" onClick={(e) => { e.preventDefault(); goToContact(); }}>{t.ukCard.cta}</a>
              </div>
            </div>
          </section>

          <section className="trust">
            <span className="eyebrow">{t.trustEyebrow}</span>
            <h2>{t.trustTitle}</h2>
            <ul className="trust-list">
              {t.trust.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          <section id="contact" className="contact">
            <span className="eyebrow">{t.contactEyebrow}</span>
            <h2>{t.contactTitle}</h2>
            <p className="contact-body">{t.contactBody}</p>

            <a href={whatsappLink(t.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
              {t.whatsappCta}
            </a>

            <p className="or-divider">{t.orDivider}</p>

            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <label>
                  {t.formName}
                  <input type="text" required />
                </label>
                <label>
                  {t.formCompany}
                  <input type="text" />
                </label>
              </div>
              <label className="form-role">
                {t.formRole}
                <div className="role-options">
                  <label><input type="radio" name="role" value="dz" defaultChecked /> {t.roleDz}</label>
                  <label><input type="radio" name="role" value="uk" /> {t.roleUk}</label>
                </div>
              </label>
              <label>
                {t.formIntent}
                <select defaultValue="">
                  <option value="" disabled>—</option>
                  {t.intentOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </label>
              <label>
                {t.formMessage}
                <textarea rows="4" required />
              </label>
              <button type="submit" className="btn btn-submit">{t.formSubmit}</button>
            </form>
          </section>
        </div>
      )}

      {page === 'ads' && (
        <div className="page">
          <section className="page-header">
            <span className="eyebrow">{t.adsPageEyebrow}</span>
            <h2>{t.adsPageTitle}</h2>
            <p className="page-header-body">{t.adsPageBody}</p>
          </section>

          <section className="ads-grid">
            {ads.length === 0 ? (
              <p className="no-ads">{t.noAdsYet}</p>
            ) : (
              ads.map((ad, i) => (
                <div className={`ad-card ad-card-${ad.country}`} key={i}>
                  <span className="ad-tag">{ad.country === 'dz' ? t.dzLabel : t.ukLabel} · {ad.category[lang]}</span>
                  <h3>{ad.title[lang]}</h3>
                  <p>{ad.body[lang]}</p>
                </div>
              ))
            )}
          </section>

          <div className="place-ad-cta">
            <button className="btn btn-submit" onClick={goToContact}>{t.adsPlaceCta}</button>
          </div>

          <ContactStrip t={t} onBack={goToContact} />
        </div>
      )}

      {page === 'news' && (
        <div className="page">
          <section className="page-header">
            <span className="eyebrow">{t.newsPageEyebrow}</span>
            <h2>{t.newsPageTitle}</h2>
            <p className="page-header-body">{t.newsPageBody}</p>
          </section>

          <section className="news-list">
            {newsItems.map((item, i) => (
              <div className="news-card" key={i}>
                <span className="news-date">{item.date}</span>
                <span className="news-tag">{item.tag[lang]}</span>
                <h3>{item.title[lang]}</h3>
                <p>{item.summary[lang]}</p>
              </div>
            ))}
          </section>

          <ContactStrip t={t} onBack={goToContact} />
        </div>
      )}

      <footer className="footer">
        <p>{t.footerNote}</p>
      </footer>
    </div>
  );
}

export default App;