import React, { useEffect, useRef, useState } from 'react';
import { Settings, Wrench, Cog, Zap, Shield, Truck } from 'lucide-react';

const Services: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const services = [
    {
      icon: Settings,
      title: 'Tool Room Works',
      description: 'Precision tool manufacturing and maintenance services with state-of-the-art equipment for superior quality and performance.',
      features: ['Custom Tool Design', 'Tool Maintenance', 'Quality Testing', 'Precision Engineering']
    },
    {
      icon: Wrench,
      title: 'Batch & Mass Production',
      description: 'High-volume manufacturing solutions with consistent quality control and efficient production processes.',
      features: ['Mass Production', 'Quality Control', 'Process Optimization', 'Timely Delivery']
    },
    {
      icon: Cog,
      title: 'Jigs & Fixtures',
      description: 'Custom jigs and fixtures design and manufacturing for enhanced productivity and precision in manufacturing processes.',
      features: ['Custom Design', 'Precision Manufacturing', 'Process Enhancement', 'Cost Optimization']
    },
    {
      icon: Zap,
      title: 'Dies & Moulds',
      description: 'Advanced die and mould manufacturing services for various industrial applications with precision and durability.',
      features: ['Die Manufacturing', 'Mould Design', 'Precision Tooling', 'Quality Assurance']
    },
    {
      icon: Shield,
      title: 'Fabrication (MIG Welding)',
      description: 'Professional MIG welding and fabrication services for structural and industrial applications.',
      features: ['MIG Welding', 'Structural Fabrication', 'Quality Welding', 'Industrial Applications']
    },
    {
      icon: Truck,
      title: 'Hydraulic Components',
      description: 'Manufacturing and supply of high-quality hydraulic components for construction and industrial equipment.',
      features: ['Hydraulic Parts', 'Component Supply', 'Quality Testing', 'Industrial Grade']
    }
  ];

  return (
    <section id="services" ref={sectionRef} className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">Services</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="text-blue-600 font-semibold">Comprehensive Industrial Solutions</span> tailored to meet your specific needs 
            and drive your business forward with innovation and excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`transition-all duration-500 delay-${index * 100} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-gray-50 rounded-lg p-6 sm:p-8 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full group border-2 border-transparent hover:border-blue-200">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="bg-gradient-to-r from-blue-600 to-red-600 rounded-lg p-2 sm:p-3 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 ml-3 sm:ml-4 group-hover:text-blue-600 transition-colors duration-300">{service.title}</h3>
                </div>
                
                <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-700 text-sm sm:text-base group-hover:text-gray-800 transition-colors duration-300">
                      <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="mt-4 sm:mt-6 text-blue-600 font-semibold hover:text-red-600 transition-colors duration-300 group-hover:translate-x-2 transform flex items-center text-sm sm:text-base">
                  Learn More <span className="ml-1">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 sm:mt-16 transition-all duration-500 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-blue-600 to-red-700 rounded-lg p-6 sm:p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Ready to Experience Excellence?</h3>
            <p className="text-lg sm:text-xl mb-4 sm:mb-6 opacity-90">
              Contact us today to discuss how we can optimize your industrial operations with our premium services.
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;