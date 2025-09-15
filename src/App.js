import React, { useState } from 'react';
import { CheckCircle, Zap, Users, Menu, X, Award, Clock, Target, ArrowLeft, Calendar, User } from 'lucide-react';

const QualityFirstWebsite = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedPost, setSelectedPost] = useState(null);

  const services = [
    {
      icon: <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center"><span className="text-white font-bold">M</span></div>,
      title: "Manual Testing",
      description: "Comprehensive manual testing services covering functional, usability, and exploratory testing.",
      features: ["UI/UX Testing", "Cross-browser Compatibility", "User Experience Validation", "Edge Case Discovery"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Test Automation", 
      description: "Automated testing solutions to accelerate your release cycles and improve reliability.",
      features: ["Cypress", "API Testing", "Data testing", "Regression"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Performance Testing",
      description: "Load, stress, and performance testing to ensure your applications scale under pressure.",
      features: ["Load Testing", "Stress Testing", "Scalability Analysis", "Performance Optimization"]
    }
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Why 90% of Software Bugs Could Be Prevented with Better QA Strategy",
      excerpt: "Most software defects are preventable with proper testing methodology. Learn the proven strategies that industry leaders use to prevent bugs before they reach production.",
      date: "September 10, 2025",
      author: "QualityFirst Team",
      readTime: "6 min read",
      content: "After analyzing over 500+ projects across different industries, we've discovered that an overwhelming 90% of software bugs could be prevented with better QA strategy implementation. Research consistently shows that fixing a bug in production costs 10-100x more than catching it during development. We've seen companies spend £50,000 fixing issues that would have cost £500 to prevent with proper testing. Our five key prevention strategies include: Early Test Planning during requirements gathering, Risk-Based Testing focusing on high-impact areas, Continuous Integration Testing with automated checks, User Story Validation with clear acceptance criteria, and Cross-functional Collaboration between QA and development teams. Companies like Netflix and Amazon prevent bugs not through more testing, but through smarter testing strategies that catch issues before they become expensive problems."
    },
    {
      id: 2,
      title: "Cypress vs Selenium: Which Testing Framework Saves More Time and Money?",
      excerpt: "A comprehensive comparison of modern testing frameworks. We tested both tools across 50+ real-world projects to determine which delivers better ROI.",
      date: "September 7, 2025", 
      author: "QualityFirst Team",
      readTime: "8 min read",
      content: "We've implemented both Cypress and Selenium across 50+ client projects over the past two years. Here's our analysis: Setup and Learning - Cypress wins with 2-hour setup vs Selenium's 8-12 hours. Execution Speed - Selenium wins with 40% faster parallel execution for large test suites. Maintenance Costs - Cypress wins with 60% less maintenance due to automatic waiting. Browser Support - Selenium wins with complete browser coverage. Our recommendation: Choose Cypress for startups and small teams needing faster setup. Choose Selenium for enterprise-scale applications requiring extensive browser coverage and dedicated QA teams."
    },
    {
      id: 3,
      title: "The Hidden Costs of Skipping QA: Real Client Case Studies",
      excerpt: "Three real examples of companies that tried to cut QA costs and the expensive lessons they learned. From £2M product recalls to startups losing 60% of users overnight.",
      date: "September 3, 2025",
      author: "QualityFirst Team", 
      readTime: "10 min read",
      content: "These anonymized case studies show why investing in proper QA is always more cost-effective than dealing with production failures. Case 1: IoT manufacturer skipped performance testing, resulted in £2.1M product recall vs £15K prevention cost. Case 2: Mobile startup skipped cross-device testing, lost 60% of users and missed funding round vs £8K testing cost. Case 3: E-commerce platform skipped security testing, faced £1.5M+ in fines and legal costs vs £12K security testing. In every case, skipping QA resulted in costs 20-100x higher than proper testing would have required. QualityFirst clients typically see 10-50x ROI on QA investment through prevented issues and faster time-to-market."
    }
  ];

  const BlogPostPage = ({ post }) => (
    <div className="min-h-screen bg-white">
      <nav className="bg-purple-100 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center bg-purple-600 px-8 py-4 rounded-lg">
                <div className="w-14 h-14 bg-gray-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-purple-600">QF</span>
                </div>
                <span className="text-4xl font-bold text-white">QualityFirst</span>
              </div>
            </div>
            
            <button 
              onClick={() => setSelectedPost(null)}
              className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-white">
          <div className="flex items-center text-sm text-gray-500 mb-6">
            <Calendar className="w-4 h-4 mr-1" />
            <span className="mr-3">{post.date}</span>
            <User className="w-4 h-4 mr-1" />
            <span className="mr-3">{post.author}</span>
            <Clock className="w-4 h-4 mr-1" />
            <span>{post.readTime}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          
          <div className="text-lg text-gray-700 leading-relaxed mb-8">
            {post.content}
          </div>
          
          <div className="mt-12 p-6 bg-purple-50 rounded-lg border border-purple-200">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Ready to Improve Your QA Strategy?</h3>
            <p className="text-gray-700 mb-4">
              Get expert advice tailored to your specific needs. Our QA specialists are ready to help you implement the strategies discussed in this article.
            </p>
            <button 
              onClick={() => { setCurrentPage('home'); setSelectedPost(null); }}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors"
            >
              Contact QualityFirst
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const BlogPage = () => (
    <div className="min-h-screen bg-white">
      <nav className="bg-purple-100 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center bg-purple-600 px-8 py-4 rounded-lg">
                <div className="w-14 h-14 bg-gray-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-purple-600">QF</span>
                </div>
                <span className="text-4xl font-bold text-white">QualityFirst</span>
              </div>
            </div>
            
            <button 
              onClick={() => setCurrentPage('home')}
              className="flex items-center bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            QualityFirst <span className="text-purple-600">Blog</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, best practices, and industry knowledge from our QA experts
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border-t-4 border-gray-500">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4 mr-1" />
                <span className="mr-3">{post.date}</span>
                <User className="w-4 h-4 mr-1" />
                <span className="mr-3">{post.author}</span>
                <span>{post.readTime}</span>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-600 cursor-pointer">
                {post.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              
              <button 
                onClick={() => setSelectedPost(post)}
                className="text-purple-600 font-medium hover:text-purple-700 transition-colors"
              >
                Read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  if (currentPage === 'blog') {
    if (selectedPost) {
      return <BlogPostPage post={selectedPost} />;
    }
    return <BlogPage />;
  }

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-purple-100 shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center bg-purple-600 px-8 py-4 rounded-lg">
                <div className="w-14 h-14 bg-gray-400 rounded-full flex items-center justify-center mr-4">
                  <span className="text-xl font-bold text-purple-600">QF</span>
                </div>
                <span className="text-4xl font-bold text-white">QualityFirst</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="text-gray-900 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Home</a>
                <a href="#services" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">Services</a>
                <a href="#about" className="text-gray-700 hover:text-purple-600 px-3 py-2 text-sm font-medium transition-colors">About</a>
                <a href="#contact" className="bg-gray-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-700 transition-colors">Contact Us</a>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-purple-100 border-t">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-purple-600">Home</a>
              <a href="#services" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">Services</a>
              <a href="#about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600">About</a>
              <a href="#contact" className="block px-3 py-2 text-base font-medium bg-gray-600 text-white rounded-lg mx-3">Contact Us</a>
            </div>
          </div>
        )}
      </nav>

      <section id="home" className="bg-gradient-to-br from-purple-50 via-gray-50 to-purple-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
              Enterprise-Grade 
              <span className="text-purple-600 block">QA Testing Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Ensure your software meets the highest quality standards with our comprehensive testing solutions. We love what we do, we work hard and we charge best price.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Testing Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From manual testing to advanced automation, we provide end-to-end QA solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow border-t-4 border-gray-500">
                <div className="text-purple-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-700">
                      <CheckCircle className="w-4 h-4 text-purple-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose QualityFirst?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                With over a wide experience in software quality assurance, we are the best people that can help you to deliver flawless software products to market.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-gray-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Certified Professionals</h4>
                    <p className="text-gray-600">Our team holds industry certifications including ISTQB</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Clock className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Faster Time to Market</h4>
                    <p className="text-gray-600">Our parallel testing approach reduces testing cycles by up to 60%</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Dedicated Teams</h4>
                    <p className="text-gray-600">Scalable teams that integrate seamlessly with your development process</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-purple-600 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Best Price</h4>
                    <p className="text-gray-600">We do our best to give the best price possible</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-600 via-gray-600 to-purple-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Our Process</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white text-purple-600 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <span>Requirements Analysis & Test Planning</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white text-gray-600 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <span>Test Case Design & Environment Setup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white text-purple-600 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <span>Test Execution & Defect Reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-white text-gray-600 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                    <span>Results Analysis & Final Report</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
            <p className="text-xl text-gray-600">Get in touch with our QA experts today</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl border border-gray-200">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
              <a href="tel:+442071234567" className="text-lg text-gray-700 hover:text-gray-800 font-medium">
                +44 20 7123 4567
              </a>
              <p className="text-gray-600 mt-2">Mon - Fri: 9:00 AM - 6:00 PM</p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl border border-purple-200">
              <div className="text-4xl mb-4">📧</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
              <a href="mailto:hello@qualityfirst.com" className="text-lg text-purple-700 hover:text-purple-800 font-medium">
                hello@qualityfirst.com
              </a>
              <p className="text-gray-600 mt-2">We'll respond within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-purple-600 via-gray-600 to-purple-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Elevate Your Software Quality?
          </h2>
          <p className="text-xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
            Get a free consultation and discover how our QA experts can help you deliver flawless software
          </p>
          <div className="flex justify-center">
            <a href="#contact" className="bg-white text-purple-600 px-8 py-4 rounded-lg font-medium hover:bg-gray-100 transition-colors">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 p-3 rounded-lg flex items-center">
                  <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center mr-3">
                    <span className="text-sm font-bold text-purple-600">QF</span>
                  </div>
                  <span className="text-xl font-bold text-white">QualityFirst</span>
                </div>
              </div>
              <p className="text-gray-400">
                Professional QA testing services for modern software development teams.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Manual Testing</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Test Automation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Performance Testing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><button onClick={() => setCurrentPage('blog')} className="hover:text-white transition-colors text-left">Blog</button></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="text-gray-400 space-y-2">
                <p>hello@qualityfirst.com</p>
                <p>+44 20 7123 4567</p>
                <p>London, United Kingdom</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 QualityFirst. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default QualityFirstWebsite;