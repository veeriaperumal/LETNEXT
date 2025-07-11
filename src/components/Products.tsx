import React, { useEffect, useRef, useState } from 'react';
import { Package, Cpu, Gauge, Wrench, Zap, Shield } from 'lucide-react';

const Products: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'tools', label: 'Tools & Equipment' },
    { id: 'components', label: 'Components' },
    { id: 'hydraulic', label: 'Hydraulic Parts' },
    { id: 'spare', label: 'Spare Parts' }
  ];

  const products = [
    {
      id: 1,
      title: 'Precision CNC Tools',
      category: 'tools',
      icon: Package,
      image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-precision CNC tools for complex manufacturing operations with superior accuracy.',
      features: ['High Precision', 'Durable Materials', 'Custom Design'],
      price: 'Contact for Quote'
    },
    {
      id: 2,
      title: 'Industrial Jigs & Fixtures',
      category: 'tools',
      icon: Cpu,
      image: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom jigs and fixtures designed for enhanced productivity and manufacturing precision.',
      features: ['Custom Design', 'Enhanced Productivity', 'Quality Assurance'],
      price: 'From ₹15,000'
    },
    {
      id: 3,
      title: 'Precision Measuring Tools',
      category: 'components',
      icon: Gauge,
      image: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional-grade measuring instruments for quality assurance and precision work.',
      features: ['High Accuracy', 'Digital Display', 'Calibration Certified'],
      price: 'From ₹5,000'
    },
    {
      id: 4,
      title: 'Industrial Tool Sets',
      category: 'tools',
      icon: Wrench,
      image: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete tool sets for maintenance and repair operations in industrial environments.',
      features: ['Durable Materials', 'Ergonomic Design', 'Complete Set'],
      price: 'From ₹2,000'
    },
    {
      id: 5,
      title: 'Hydraulic Components',
      category: 'hydraulic',
      icon: Zap,
      image: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'High-quality hydraulic components for construction and industrial equipment.',
      features: ['Industrial Grade', 'Quality Tested', 'Long Lasting'],
      price: 'From ₹25,000'
    },
    {
      id: 6,
      title: 'Machine Spare Parts',
      category: 'spare',
      icon: Shield,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive range of machine spare parts for various industrial applications.',
      features: ['OEM Quality', 'Wide Range', 'Quick Delivery'],
      price: 'From ₹500'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" ref={sectionRef} className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">Products</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of <span className="text-blue-600 font-semibold">premium industrial products</span> designed to meet 
            the highest standards of quality, performance, and reliability.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 transition-all duration-500 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 text-sm sm:text-base ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-blue-600 to-red-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border-2 border-gray-200 hover:border-blue-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className={`transition-all duration-500 delay-${index * 100 + 400} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105 group border-2 border-transparent hover:border-blue-200">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-red-600 rounded-lg p-2">
                    <product.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">{product.title}</h3>
                  <p className="text-gray-600 mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">{product.description}</p>
                  
                  <div className="mb-3 sm:mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm sm:text-base">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700 text-xs sm:text-sm">
                          <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">{product.price}</span>
                    <button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white px-3 sm:px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm sm:text-base">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-500 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg border-2 border-blue-100">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Need a Custom Solution?</h3>
            <p className="text-lg sm:text-xl text-gray-600 mb-4 sm:mb-6">
              We specialize in creating <span className="text-blue-600 font-semibold">custom products</span> tailored to your specific industrial requirements.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
              Request Custom Quote
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;