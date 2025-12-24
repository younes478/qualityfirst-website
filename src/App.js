import React, { useState } from 'react';
import { ShoppingCart, Menu, X, Star, Package, Truck, Shield, Phone, Mail, MapPin, Heart } from 'lucide-react';

const DateFruitWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      brand: "The Golden Queen",
      tagline: "From the Algerian Desert",
      hero: "Deglet Nour from the Algerian Desert",
      heroDesc: "Authentic Deglet Nour dates from Algeria's desert oases. Sun-ripened in the Sahara, delivered fresh to your home",
      natural: "100% Natural • No Additives • Desert Fresh",
      shopNow: "Shop Deglet Nour",
      ourStory: "Our Story",
      home: "Home",
      products: "Products",
      about: "About",
      contact: "Contact",
      cart: "Cart",
      productTitle: "Deglet Nour Collection",
      productSubtitle: "Premium Deglet Nour dates from Algeria's desert oases",
      aboutTitle: "Algeria's Desert Treasure",
      aboutDesc: "The Deglet Nour date, meaning 'Date of Light', has been cultivated in Algeria's Saharan oases for over 2,000 years. Known for its translucent golden color and exceptional sweetness, it's truly nature's candy from the desert.",
      whyTitle: "Why The Golden Queen?",
      contactTitle: "Get in Touch",
      contactSubtitle: "Questions about our Deglet Nour dates? We're here to help!",
      callUs: "Call Us",
      emailUs: "Email Us",
      location: "Our Location",
      available: "Available: 5-8 PM GMT",
      response: "24 hour response",
      serving: "Serving UK nationwide",
      freeDelivery: "Free UK Delivery",
      orders: "Orders over £30",
      quality: "Quality Guarantee",
      satisfaction: "100% Satisfaction",
      fresh: "Desert Fresh",
      direct: "Direct from oases",
      addToCart: "Add to Cart",
      why1: "Authentic Deglet Nour from Algeria",
      why2: "Traditional desert harvesting",
      why3: "Algeria to UK in 2-3 days",
      why4: "Support Algerian family farms"
    },
    ar: {
      brand: "الملكة الذهبية",
      tagline: "من الصحراء الجزائرية",
      hero: "دقلة نور من الصحراء الجزائرية",
      heroDesc: "تمور دقلة نور أصلية من واحات الصحراء الجزائرية. ناضجة تحت شمس الصحراء، تُسلم طازجة إلى منزلك",
      natural: "١٠٠٪ طبيعي • بدون إضافات • طازج من الصحراء",
      shopNow: "تسوق دقلة نور",
      ourStory: "قصتنا",
      home: "الرئيسية",
      products: "المنتجات",
      about: "من نحن",
      contact: "اتصل بنا",
      cart: "السلة",
      productTitle: "مجموعة دقلة نور",
      productSubtitle: "تمور دقلة نور الفاخرة من واحات الصحراء الجزائرية",
      aboutTitle: "كنز الصحراء الجزائرية",
      aboutDesc: "تمر دقلة نور، والذي يعني 'تمر النور'، يُزرع في واحات الصحراء الجزائرية منذ أكثر من ٢٠٠٠ عام. معروف بلونه الذهبي الشفاف وحلاوته الاستثنائية، إنه حقاً حلوى الطبيعة من الصحراء.",
      whyTitle: "لماذا الملكة الذهبية؟",
      contactTitle: "تواصل معنا",
      contactSubtitle: "أسئلة حول تمور دقلة نور؟ نحن هنا للمساعدة!",
      callUs: "اتصل بنا",
      emailUs: "راسلنا",
      location: "موقعنا",
      available: "متاح: ٥-٨ مساءً GMT",
      response: "رد خلال ٢٤ ساعة",
      serving: "خدمة في جميع أنحاء المملكة المتحدة",
      freeDelivery: "توصيل مجاني",
      orders: "للطلبات +٣٠ جنيه",
      quality: "ضمان الجودة",
      satisfaction: "١٠٠٪ رضا",
      fresh: "طازج من الصحراء",
      direct: "مباشرة من الواحات",
      addToCart: "أضف للسلة",
      why1: "دقلة نور أصلية من الجزائر",
      why2: "حصاد تقليدي من الصحراء",
      why3: "من الجزائر إلى بريطانيا في ٢-٣ أيام",
      why4: "دعم المزارع العائلية الجزائرية"
    }
  };

  const t = translations[language];

  const products = [
    {
      id: 1,
      name: {
        en: "Deglet Nour - Premium",
        ar: "دقلة نور - فاخر"
      },
      description: {
        en: "The legendary golden date from Algeria. Translucent, honey-sweet, and naturally delicious. The true queen of dates.",
        ar: "التمر الذهبي الأسطوري من الجزائر. شفاف، حلو كالعسل، ولذيذ طبيعياً. ملكة التمور الحقيقية."
      },
      price: 14.99,
      unit: {
        en: "per 500g",
        ar: "لكل ٥٠٠ جرام"
      },
      image: "👑",
      origin: {
        en: "Algerian Desert",
        ar: "الصحراء الجزائرية"
      },
      features: {
        en: ["Premium Quality", "Golden Color", "Honey Sweet", "100% Natural"],
        ar: ["جودة فاخرة", "لون ذهبي", "حلو كالعسل", "١٠٠٪ طبيعي"]
      }
    }
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <nav className="bg-gradient-to-r from-amber-700 via-orange-700 to-red-700 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-20">
            <div className="flex items-center">
              <div className="flex items-center space-x-3">
                <div className="text-4xl">👑</div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">
                    {t.brand}
                  </div>
                  <div className="text-xs text-amber-100">{t.tagline}</div>
                </div>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-2 bg-white bg-opacity-20 rounded-lg px-3 py-1">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'en' ? 'bg-white text-amber-800' : 'text-white hover:text-amber-200'}`}
                >
                  🇬🇧 EN
                </button>
                <button 
                  onClick={() => setLanguage('ar')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'ar' ? 'bg-white text-amber-800' : 'text-white hover:text-amber-200'}`}
                >
                  🇸🇦 AR
                </button>
              </div>
              
              <a href="#home" className="text-white hover:text-amber-200 font-medium transition-colors">{t.home}</a>
              <a href="#products" className="text-white hover:text-amber-200 font-medium transition-colors">{t.products}</a>
              <a href="#about" className="text-white hover:text-amber-200 font-medium transition-colors">{t.about}</a>
              <a href="#contact" className="text-white hover:text-amber-200 font-medium transition-colors">{t.contact}</a>
              <button className="relative bg-white text-amber-800 px-6 py-2 rounded-lg hover:bg-amber-50 transition-colors shadow-lg font-semibold">
                <ShoppingCart className="w-5 h-5 inline mr-2" />
                {t.cart} ({cart.length})
                {cart.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">
                    {cart.length}
                  </span>
                )}
              </button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-amber-800 border-t border-amber-600">
            <div className="px-4 py-3 space-y-2">
              <div className="flex items-center justify-center space-x-2 mb-3 bg-white bg-opacity-20 rounded-lg p-2">
                <button 
                  onClick={() => setLanguage('en')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'en' ? 'bg-white text-amber-800' : 'text-white'}`}
                >
                  🇬🇧 EN
                </button>
                <button 
                  onClick={() => setLanguage('ar')}
                  className={`px-3 py-1 rounded text-sm font-medium transition-colors ${language === 'ar' ? 'bg-white text-amber-800' : 'text-white'}`}
                >
                  🇸🇦 AR
                </button>
              </div>
              
              <a href="#home" className="block py-2 text-white hover:text-amber-200">{t.home}</a>
              <a href="#products" className="block py-2 text-white hover:text-amber-200">{t.products}</a>
              <a href="#about" className="block py-2 text-white hover:text-amber-200">{t.about}</a>
              <a href="#contact" className="block py-2 text-white hover:text-amber-200">{t.contact}</a>
              <button className="w-full bg-white text-amber-800 px-4 py-2 rounded-lg font-semibold">
                {t.cart} ({cart.length})
              </button>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="relative bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-8xl">🌴</div>
          <div className="absolute top-32 right-20 text-7xl">🌴</div>
          <div className="absolute bottom-20 left-32 text-8xl">🌴</div>
          <div className="absolute bottom-10 right-10 text-7xl">🌴</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="text-6xl">🌴</div>
              <div className="text-8xl sm:text-9xl">👑</div>
              <div className="text-6xl">🌴</div>
            </div>
            
            <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold text-amber-900 mb-6 ${language === 'ar' ? 'text-right' : ''}`}>
              {t.brand}
              <span className="block text-orange-700 text-3xl sm:text-4xl mt-2">{t.hero}</span>
            </h1>
            
            <div className={`bg-white rounded-2xl p-6 max-w-3xl mx-auto mb-8 shadow-xl border-2 border-amber-300 ${language === 'ar' ? 'text-right' : ''}`}>
              <p className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                🏜️ {t.heroDesc} 🌴
                <br/>
                <span className="text-green-700 font-semibold">{t.natural}</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a href="#products" className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-10 py-4 rounded-lg font-bold text-lg hover:from-amber-700 hover:to-orange-700 transition-all shadow-lg">
                🛒 {t.shopNow}
              </a>
              <a href="#about" className="bg-white text-amber-800 px-10 py-4 rounded-lg font-bold text-lg border-2 border-amber-600 hover:bg-amber-50 transition-all shadow-lg">
                🌴 {t.ourStory}
              </a>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-green-500">
                <Truck className="w-10 h-10 text-green-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{t.freeDelivery}</h3>
                <p className="text-sm text-gray-600">{t.orders}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-500">
                <Shield className="w-10 h-10 text-red-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{t.quality}</h3>
                <p className="text-sm text-gray-600">{t.satisfaction}</p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-amber-500">
                <Package className="w-10 h-10 text-amber-600 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2 text-lg">{t.fresh}</h3>
                <p className="text-sm text-gray-600">{t.direct}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 flex justify-around opacity-20">
          <div className="text-8xl">🌴</div>
          <div className="text-7xl">🌴</div>
          <div className="text-8xl">🌴</div>
          <div className="text-7xl">🌴</div>
          <div className="text-8xl">🌴</div>
        </div>
      </section>

      <section id="products" className="py-16 sm:py-24 bg-white relative">
        <div className="absolute top-10 left-10 text-5xl opacity-5">🌴</div>
        <div className="absolute top-10 right-10 text-5xl opacity-5">🌴</div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-12 ${language === 'ar' ? 'text-right' : ''}`}>
            <div className="flex justify-center items-center gap-3 mb-4">
              <div className="text-3xl">🌴</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-amber-800">
                {t.productTitle}
              </h2>
              <div className="text-3xl">🌴</div>
            </div>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              {t.productSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-2xl mx-auto">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-amber-300">
                <div className="h-64 flex flex-col items-center justify-center relative bg-gradient-to-br from-amber-50 to-orange-50">
                  <div className="absolute top-2 left-2 text-3xl opacity-20">🌴</div>
                  <div className="absolute top-2 right-2 text-3xl opacity-20">🌴</div>
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-2xl opacity-20">💧</div>
                  
                  <div className="text-9xl mb-2">{product.image}</div>
                  <div className="text-3xl">🌴</div>
                </div>
                
                <div className={`p-8 ${language === 'ar' ? 'text-right' : ''}`}>
                  <div className={`flex items-center justify-between mb-3 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <span className="text-sm bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-1 rounded-full font-medium">
                      {product.origin[language]}
                    </span>
                    <div className="flex items-center">
                      {[1,2,3,4,5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-amber-800 mb-3">
                    {product.name[language]}
                  </h3>
                  <p className="text-gray-600 text-base mb-6 leading-relaxed">{product.description[language]}</p>
                  
                  <div className={`flex flex-wrap gap-2 mb-6 ${language === 'ar' ? 'justify-end' : ''}`}>
                    {product.features[language].map((feature, idx) => (
                      <span key={idx} className={`px-3 py-1 rounded-full text-sm font-medium ${
                        idx % 3 === 0 ? 'bg-amber-100 text-amber-700' : 
                        idx % 3 === 1 ? 'bg-red-100 text-red-700' : 
                        'bg-green-100 text-green-700'
                      }`}>
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className={`flex items-center justify-between mt-6 pt-6 border-t-2 border-amber-200 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                    <div className={language === 'ar' ? 'text-right' : ''}>
                      <div className="text-3xl font-bold text-amber-700">
                        £{product.price}
                      </div>
                      <div className="text-sm text-gray-500">{product.unit[language]}</div>
                    </div>
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-all flex items-center shadow-md font-semibold text-lg"
                    >
                      <ShoppingCart className={`w-5 h-5 ${language === 'ar' ? 'ml-2' : 'mr-2'}`} />
                      {t.addToCart}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 sm:py-24 bg-gradient-to-br from-amber-50 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-10 text-8xl">🌴</div>
          <div className="absolute top-0 right-10 text-8xl">🌴</div>
          <div className="absolute bottom-0 left-1/4 text-7xl">🌴</div>
          <div className="absolute bottom-0 right-1/4 text-7xl">🌴</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-amber-300">
              <div className="text-5xl mb-4 text-center">🏜️🌴💧</div>
              <h2 className={`text-3xl sm:text-4xl font-bold text-amber-800 mb-6 text-center ${language === 'ar' ? 'text-right' : ''}`}>
                {t.aboutTitle}
              </h2>
              <p className={`text-lg text-gray-700 mb-6 leading-relaxed ${language === 'ar' ? 'text-right' : ''}`}>
                {t.aboutDesc}
              </p>
              
              <div className="space-y-4">
                <div className={`flex items-start space-x-3 ${language === 'ar' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className="bg-amber-100 rounded-full p-3 border-2 border-amber-400">
                    <Star className="w-6 h-6 text-amber-600" />
                  </div>
                  <div className={language === 'ar' ? 'text-right' : ''}>
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">{language === 'en' ? '100% Algerian Authentic' : '١٠٠٪ أصلية جزائرية'}</h4>
                    <p className="text-gray-600 text-sm">{language === 'en' ? 'Deglet Nour from Algeria\'s desert palm oases' : 'دقلة نور من واحات النخيل الصحراوية الجزائرية'}</p>
                  </div>
                </div>
                
                <div className={`flex items-start space-x-3 ${language === 'ar' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className="bg-red-100 rounded-full p-3 border-2 border-red-400">
                    <Heart className="w-6 h-6 text-red-600" />
                  </div>
                  <div className={language === 'ar' ? 'text-right' : ''}>
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">{language === 'en' ? 'Desert Superfood' : 'سوبرفود الصحراء'}</h4>
                    <p className="text-gray-600 text-sm">{language === 'en' ? 'Naturally rich in nutrients from Saharan sunshine' : 'غني بالعناصر الغذائية من شمس الصحراء'}</p>
                  </div>
                </div>
                
                <div className={`flex items-start space-x-3 ${language === 'ar' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className="bg-green-100 rounded-full p-3 border-2 border-green-400">
                    <Package className="w-6 h-6 text-green-600" />
                  </div>
                  <div className={language === 'ar' ? 'text-right' : ''}>
                    <h4 className="font-bold text-gray-900 mb-1 text-lg">{language === 'en' ? 'Desert to Your Door' : 'من الصحراء إلى بابك'}</h4>
                    <p className="text-gray-600 text-sm">{language === 'en' ? 'Supporting traditional Algerian family farms' : 'دعم المزارع العائلية الجزائرية التقليدية'}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-amber-600 to-orange-600 rounded-2xl p-8 shadow-xl text-white border-2 border-amber-400">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="text-4xl">🌴</div>
                <h3 className={`text-2xl font-bold ${language === 'ar' ? 'text-right' : ''}`}>{t.whyTitle}</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4 bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-amber-700 font-bold text-lg">1</div>
                  <span className="text-white font-medium">{t.why1} 🏜️</span>
                </div>
                <div className="flex items-center space-x-4 bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-amber-700 font-bold text-lg">2</div>
                  <span className="text-white font-medium">{t.why2} 🌴</span>
                </div>
                <div className="flex items-center space-x-4 bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-amber-700 font-bold text-lg">3</div>
                  <span className="text-white font-medium">{t.why3} 🚚</span>
                </div>
                <div className="flex items-center space-x-4 bg-white bg-opacity-20 rounded-lg p-4">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-amber-700 font-bold text-lg">4</div>
                  <span className="text-white font-medium">{t.why4} 👨‍🌾</span>
                </div>
              </div>
              
              <div className="mt-6 text-center text-5xl">
                🌴 💧 🏜️
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white relative">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 text-8xl">🌴</div>
          <div className="absolute top-20 right-20 text-8xl">🌴</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">👑</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-4">
              {language === 'en' ? 'Deglet Nour - "Date of Light"' : 'دقلة نور - "تمر النور"'}
            </h2>
            <p className="text-lg text-gray-600">{language === 'en' ? 'The golden treasure from Algeria\'s Saharan oases' : 'الكنز الذهبي من واحات الصحراء الجزائرية'}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center border-2 border-amber-400 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-3">💪</div>
              <h3 className="font-bold text-amber-800 mb-2 text-lg">{language === 'en' ? 'Desert Energy' : 'طاقة الصحراء'}</h3>
              <p className="text-sm text-gray-600">{language === 'en' ? 'Natural sugars for instant vitality' : 'سكريات طبيعية للحيوية الفورية'}</p>
              <div className="text-2xl mt-2">☀️</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center border-2 border-red-400 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-3">🧠</div>
              <h3 className="font-bold text-red-800 mb-2 text-lg">{language === 'en' ? 'Brain Health' : 'صحة الدماغ'}</h3>
              <p className="text-sm text-gray-600">{language === 'en' ? 'Antioxidant-rich superfood' : 'غني بمضادات الأكسدة'}</p>
              <div className="text-2xl mt-2">🌴</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center border-2 border-green-400 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-3">❤️</div>
              <h3 className="font-bold text-green-800 mb-2 text-lg">{language === 'en' ? 'Heart Healthy' : 'صحة القلب'}</h3>
              <p className="text-sm text-gray-600">{language === 'en' ? 'Potassium and minerals' : 'البوتاسيوم والمعادن'}</p>
              <div className="text-2xl mt-2">💧</div>
            </div>
            
            <div className="bg-white rounded-xl p-6 text-center border-2 border-orange-400 shadow-lg hover:shadow-xl transition-all">
              <div className="text-5xl mb-3">🌾</div>
              <h3 className="font-bold text-orange-800 mb-2 text-lg">{language === 'en' ? 'Fiber Rich' : 'غني بالألياف'}</h3>
              <p className="text-sm text-gray-600">{language === 'en' ? 'Natural digestive support' : 'دعم هضمي طبيعي'}</p>
              <div className="text-2xl mt-2">🏜️</div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16 sm:py-24 bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 relative">
        <div className="absolute top-10 left-10 text-6xl opacity-10">🌴</div>
        <div className="absolute top-10 right-10 text-6xl opacity-10">🌴</div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className={`text-center mb-12 ${language === 'ar' ? 'text-right' : ''}`}>
            <div className="text-6xl mb-4 text-center">👑</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-amber-800 mb-4 text-center">
              {t.contactTitle}
            </h2>
            <p className="text-lg text-gray-700 text-center">{t.contactSubtitle}</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-8 text-center shadow-md border-2 border-green-500 hover:shadow-lg transition-all">
              <Phone className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-3 text-xl">{t.callUs}</h3>
              <a href="tel:01628304410" className="text-amber-700 font-bold text-xl block">
                01628 
              </a>
              <p className="text-sm text-gray-600 mt-3">{t.available}</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-md border-2 border-amber-500 hover:shadow-lg transition-all">
              <Mail className="w-12 h-12 text-amber-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-3 text-xl">{t.emailUs}</h3>
              <a href="mailto:qualityfirst.test@gmail.com" className="text-amber-700 font-medium text-sm break-all block">
                qualityfirst.test@gmail.com
              </a>
              <p className="text-sm text-gray-600 mt-3">{t.response}</p>
            </div>
            
            <div className="bg-white rounded-xl p-8 text-center shadow-md border-2 border-red-500 hover:shadow-lg transition-all">
              <MapPin className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-3 text-xl">{t.location}</h3>
              <p className="text-amber-700 font-bold text-lg">London, UK</p>
              <p className="text-sm text-gray-600 mt-3">{t.serving}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-10 text-8xl">🌴</div>
          <div className="absolute top-0 right-10 text-8xl">🌴</div>
          <div className="absolute bottom-0 left-1/4 text-7xl">🌴</div>
          <div className="absolute bottom-0 right-1/4 text-7xl">🌴</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-6xl mb-6">🌴 👑 🌴</div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            {language === 'en' ? 'Taste Algeria\'s Deglet Nour' : 'تذوق دقلة نور الجزائرية'}
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            {language === 'en' ? 'From the Algerian desert to your home. Experience The Golden Queen.' : 'من الصحراء الجزائرية إلى منزلك. جرب الملكة الذهبية.'}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="inline-block bg-white text-amber-700 px-12 py-5 rounded-lg font-bold text-lg hover:bg-amber-50 transition-all shadow-xl border-2 border-amber-300">
              🛒 {t.shopNow}
            </a>
            <a href="#contact" className="inline-block bg-green-600 text-white px-12 py-5 rounded-lg font-bold text-lg hover:bg-green-700 transition-all shadow-xl border-2 border-green-400">
              📞 {language === 'en' ? 'Contact Us' : 'اتصل بنا'}
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gradient-to-br from-amber-900 via-orange-900 to-red-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 text-8xl">🌴</div>
          <div className="absolute bottom-0 right-0 text-8xl">🌴</div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-4xl">👑</div>
                <div className="text-2xl font-bold text-amber-200">{t.brand}</div>
              </div>
              <p className="text-amber-200 text-sm leading-relaxed">
                {language === 'en' ? 'Authentic Algerian Deglet Nour dates from the Sahara Desert, delivered fresh across the UK.' : 'تمور دقلة نور جزائرية أصلية من الصحراء، طازجة في جميع أنحاء بريطانيا.'}
              </p>
              <div className="mt-4 text-3xl space-x-2">
                🌴 🏜️ 💧
              </div>
            </div>
            
            <div className={language === 'ar' ? 'text-right' : ''}>
              <h4 className="font-bold mb-4 text-amber-200 text-lg">{language === 'en' ? 'Information' : 'معلومات'}</h4>
              <ul className="space-y-2 text-amber-200 text-sm">
                <li><a href="#about" className="hover:text-white transition-colors">🌴 {language === 'en' ? 'Our Story' : 'قصتنا'}</a></li>
                <li><a href="#" className="hover:text-white transition-colors">🚚 {language === 'en' ? 'Delivery Info' : 'معلومات التوصيل'}</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">📞 {t.contact}</a></li>
              </ul>
            </div>
            
            <div className={language === 'ar' ? 'text-right' : ''}>
              <h4 className="font-bold mb-4 text-amber-200 text-lg">{t.contact}</h4>
              <div className="text-amber-200 text-sm space-y-2">
                <p>📧 qualityfirst.test@gmail.com</p>
                <p>📞 01628 304410</p>
                <p>📍 London, United Kingdom</p>
                <div className="mt-4 pt-4 border-t border-amber-700">
                  <p className="font-medium text-amber-200">{language === 'en' ? 'Business Hours:' : 'ساعات العمل:'}</p>
                  <p>🕐 5-8 PM GMT, Mon-Fri</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t-2 border-amber-700 mt-12 pt-8 text-center">
            <div className="text-4xl mb-3">🌴 👑 🌴</div>
            <p className="text-amber-200 text-sm">
              &copy; 2025 {t.brand} - {language === 'en' ? 'Authentic Algerian Deglet Nour Dates' : 'تمور دقلة نور جزائرية أصلية'}
            </p>
          </div>
        </div>
      </footer>

      {cart.length > 0 && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-8 py-4 rounded-xl shadow-2xl border-2 border-green-400">
          <div className="flex items-center gap-3">
            <div className="text-3xl">✓</div>
            <div>
              <div className="font-bold">{language === 'en' ? 'Added to Cart!' : 'أضيف للسلة!'}</div>
              <div className="text-sm text-green-100">🛒 {cart.length} {language === 'en' ? 'items' : 'عناصر'}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DateFruitWebsite;