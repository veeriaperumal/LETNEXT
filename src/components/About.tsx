import React, { useEffect, useRef, useState } from 'react';
import { Users, Target, Lightbulb, TrendingUp, Award, Globe, Zap, Factory } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    years: 0,
    projects: 0,
    clients: 0,
    team: 0
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          const targets = { years: 25, projects: 500, clients: 100, team: 50 };
          const duration = 2000;
          const steps = 60;
          const stepTime = duration / steps;
          
          Object.keys(targets).forEach(key => {
            const target = targets[key as keyof typeof targets];
            const increment = target / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters(prev => ({ ...prev, [key]: Math.floor(current) }));
            }, stepTime);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: `${counters.years}+`, label: 'Years of Excellence', icon: Award, color: 'from-blue-500 to-blue-600' },
    { number: `${counters.projects}+`, label: 'Projects Delivered', icon: Zap, color: 'from-red-500 to-red-600' },
    { number: `${counters.clients}+`, label: 'Satisfied Clients', icon: Users, color: 'from-blue-600 to-red-600' },
    { number: `${counters.team}+`, label: 'Expert Team', icon: Globe, color: 'from-red-600 to-blue-600' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To excel as the market leader in domestic and step into the global arena ensuring customer satisfaction with quality, precision, punctuality and timely delivery.'
    },
    {
      icon: Factory,
      title: 'Our Expertise',
      description: 'We exhibit excellence in precision machining for Ferrous and Non-Ferrous products. We specialize in construction equipment spare parts.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Continuously investing in cutting-edge technology and R&D to stay at the forefront of industrial manufacturing solutions.'
    },
    {
      icon: TrendingUp,
      title: 'Quality Focus',
      description: 'ISO certified processes ensuring the highest standards in manufacturing with zero-defect delivery and customer excellence.'
    }
  ];

  return (
    <section id="about" ref={sectionRef} className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">NKN Industries</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            <span className="text-blue-600 font-semibold">Emerging Market Leader</span> in precision machining industry. 
            Pioneer in manufacturing Tools, Jigs & Fixtures, Machine Spare Parts, and Hydraulic Components.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-16 sm:mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-500 delay-${index * 100 + 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="group bg-white rounded-2xl p-4 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 border-transparent hover:border-blue-200">
                <div className={`bg-gradient-to-r ${stat.color} rounded-xl p-2 sm:p-3 w-fit mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="text-2xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-gray-600 mb-2 sm:mb-3 group-hover:from-blue-600 group-hover:to-red-600 transition-all duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-semibold text-sm sm:text-base group-hover:text-gray-800 transition-colors duration-300">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-16 sm:mb-20">
          <div className={`transition-all duration-500 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">Welcome to NKN Industries</h3>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              NKN Industries is an emerging market leader in the machining industry. We are pioneers in manufacturing 
              Tools, Jigs and Fixtures, Spare parts of all kinds of machines and HYDRAULIC components.
            </p>
            <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed">
              Our factory is facilitated with well-equipped and highly sophisticated machines, ensuring precision 
              and quality in every product we deliver. We serve clients across multiple industrial sectors.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mr-3"></div>
                <span className="text-gray-700 text-sm sm:text-base">The Best Industrial Business Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mr-3"></div>
                <span className="text-gray-700 text-sm sm:text-base">We are here to Help your Industry Grow</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-red-500 rounded-full mr-3"></div>
                <span className="text-gray-700 text-sm sm:text-base">We use Quality Industry Materials</span>
              </div>
            </div>
          </div>
          
          <div className={`transition-all duration-500 delay-500 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="bg-gradient-to-br from-blue-600 to-red-700 rounded-lg p-6 sm:p-8 text-white">
              <h4 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Why Choose NKN Industries?</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base">25+ Years of Industrial Excellence</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base">Cutting-edge Precision Technology</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base">ISO Certified Quality Assurance</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base">24/7 Customer Support & Service</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                  <span className="text-sm sm:text-base">Timely Delivery & Competitive Pricing</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`transition-all duration-500 delay-${index * 100 + 600} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 h-full group border-2 border-transparent hover:border-blue-200">
                <div className="bg-gradient-to-r from-blue-500 to-red-500 rounded-lg p-2 sm:p-3 w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">{value.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;