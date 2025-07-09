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
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-700 to-orange-600">
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-400 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
          <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-orange-400 rounded-full blur-2xl animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-16 leading-tight mt-20">
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-300 min-h-[1.2em] flex items-center justify-center">
              {typedText}
              <span className={`inline-block w-1 bg-yellow-400 ml-2 animate-pulse ${isTypingComplete ? 'opacity-0' : 'opacity-100'}`} style={{ height: '0.8em' }}></span>
            </div>
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 ${
            isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <span className="text-yellow-400 font-semibold">Precision Engineering Excellence</span> - Your trusted partner for 
            cutting-edge industrial solutions, superior quality manufacturing, and unmatched customer satisfaction.
          </p>

          <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-500 ${
            isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <button className="group bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white font-bold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2">
              <span>Discover Our Excellence</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
            <button className="group border-2 border-white/50 text-white hover:bg-white hover:text-red-600 font-bold px-10 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 backdrop-blur-sm bg-white/10 flex items-center justify-center space-x-2">
              <Play className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
              <span>Watch Our Journey</span>
            </button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Zap, title: 'Innovation', desc: 'Cutting-edge precision technology', color: 'from-red-400 to-red-600' },
              { icon: Shield, title: 'Quality Assurance', desc: 'ISO certified excellence', color: 'from-orange-400 to-orange-600' },
              { icon: Award, title: 'Market Leader', desc: '25+ years of industrial expertise', color: 'from-yellow-400 to-yellow-600' }
            ].map((feature, index) => (
              <div
                key={feature.title}
                className={`transition-all duration-1000 delay-${index * 200 + 1000} ${
                  isTypingComplete ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              >
                <div className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 border border-white/20 hover:border-white/40">
                  <div className={`bg-gradient-to-r ${feature.color} rounded-xl p-4 w-fit mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-300">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white hover:text-yellow-400 transition-all duration-300 animate-bounce hover:scale-110"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-3 border border-white/20 hover:border-white/40">
            <ChevronDown className="h-6 w-6" />
          </div>
        </button>
      </div>
      
      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default Hero;