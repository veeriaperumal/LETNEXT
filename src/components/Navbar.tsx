import React, { useState, useEffect } from 'react';
import { Menu, X, Factory } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, setActiveSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'products', label: 'Products' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact Us' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-white/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection('home')}>
            <div className={`p-2 rounded-lg transition-all duration-300 ${
              isScrolled 
                ? 'bg-gradient-to-r from-blue-500 to-red-500' 
                : 'bg-white/20 backdrop-blur-sm border border-white/30'
            } group-hover:scale-110 group-hover:shadow-lg`}>
              <Factory className="h-6 w-6 text-white" />
            </div>
            <span className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled 
                ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600' 
                : 'text-white'
            }`}>
              NKN Industries
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  activeSection === item.id
                    ? isScrolled
                      ? 'text-red-600 bg-red-50/80 backdrop-blur-sm'
                      : 'text-white bg-white/20 backdrop-blur-sm border border-white/30'
                    : isScrolled
                      ? 'text-gray-700 hover:text-red-600 hover:bg-red-50/80 hover:backdrop-blur-sm'
                      : 'text-white hover:text-white hover:bg-white/20 hover:backdrop-blur-sm hover:border hover:border-white/30'
                }`}
              >
                {item.label}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-red-500 transition-all duration-300 group-hover:w-full ${
                  activeSection === item.id ? 'w-full' : ''
                }`}></span>
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md transition-all duration-300 ${
                isScrolled 
                  ? 'text-gray-700 hover:text-red-600 hover:bg-red-50/80 hover:backdrop-blur-sm' 
                  : 'text-white hover:text-white hover:bg-white/20 hover:backdrop-blur-sm border border-transparent hover:border-white/30'
              }`}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg border border-white/20">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 text-base font-medium rounded-md transition-all duration-300 ${
                  activeSection === item.id
                    ? 'text-white bg-gradient-to-r from-blue-500 to-red-500 shadow-md'
                    : 'text-gray-700 hover:text-red-600 hover:bg-red-50/80 hover:backdrop-blur-sm'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;