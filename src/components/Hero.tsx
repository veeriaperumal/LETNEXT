import React, { useEffect, useState } from 'react';
import { ChevronDown, Zap, Shield, Award, ArrowRight, Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = 'NKN Industries';

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 150);
    
    return () => clearInterval(typingInterval);
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-red-600">
        <div className="absolute inset-0 bg-black/30"></div>
        {/* Minimal background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-400 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-16 leading-tight mt-20">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 min-h-[1.2em] flex items-center justify-center">
              {typedText}
              <span className={`inline-block w-1 bg-white ml-2 ${isTypingComplete ? 'opacity-0' : 'animate-pulse opacity-100'}`} style={{ height: '0.8em' }}></span>
            </div>
          </h1>
          
          <p className={`text-lg sm:text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-500 ${
            isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-white font-semibold">Precision Engineering Excellence</span> - Your trusted partner for 
            cutting-edge industrial solutions, superior quality manufacturing, and unmatched customer satisfaction.
          </p>

          <div className={`flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-16 transition-all duration-500 delay-300 ${
            isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button className="group bg-gradient-to-r from-blue-500 to-red-500 hover:from-blue-600 hover:to-red-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2">
              <span>Discover Our Excellence</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group border-2 border-white/50 text-white hover:bg-white hover:text-blue-600 font-bold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10 flex items-center justify-center space-x-2">
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Watch Our Journey</span>
            </button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {[
              { icon: Zap, title: 'Innovation', desc: 'Cutting-edge precision technology', color: 'from-blue-400 to-blue-600' },
              { icon: Shield, title: 'Quality Assurance', desc: 'ISO certified excellence', color: 'from-red-400 to-red-600' },
              { icon: Award, title: 'Market Leader', desc: '25+ years of industrial expertise', color: 'from-blue-500 to-red-500' }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className={`transition-all duration-500 delay-${index * 100 + 500} ${
                  isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/20 hover:border-white/40">
                  <div className={`bg-gradient-to-r ${feature.color} rounded-xl p-3 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm sm:text-base group-hover:text-white transition-colors duration-300">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-blue-200 transition-all duration-300 animate-bounce hover:scale-110"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 hover:border-white/40">
            <ChevronDown className="h-6 w-6" />
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;