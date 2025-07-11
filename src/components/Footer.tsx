import React from 'react';
import { Factory, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Our Team', href: '#about' },
      { label: 'Careers', href: '#contact' },
      { label: 'News & Updates', href: '#contact' }
    ],
    services: [
      { label: 'Manufacturing', href: '#services' },
      { label: 'Automation', href: '#services' },
      { label: 'Consulting', href: '#services' },
      { label: 'Maintenance', href: '#services' }
    ],
    support: [
      { label: 'Contact Support', href: '#contact' },
      { label: 'Documentation', href: '#contact' },
      { label: 'FAQ', href: '#contact' },
      { label: 'Warranty', href: '#contact' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=100093531018314&mibextid=ZbWKwL', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/narendran-saravanan-023924282', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4 sm:mb-6">
              <Factory className="h-6 w-6 sm:h-8 sm:w-8 text-blue-400" />
              <span className="text-xl sm:text-2xl font-bold">NKN Industries</span>
            </div>
            <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Leading the future of industrial innovation with cutting-edge solutions, 
              exceptional quality, and unwavering commitment to excellence.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm sm:text-base">SP-21, 3rd cross road, 5th street, Ambattur industrial estate, Chennai-600058</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">+91 9025664478</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm sm:text-base">info@nknindustries.com</span>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Company</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Services</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Support</h3>
            <ul className="space-y-2 sm:space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm sm:text-base"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Newsletter */}
        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex space-x-4 sm:space-x-6 mb-4 sm:mb-6 md:mb-0">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </a>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center space-y-3 sm:space-y-0 sm:space-x-4">
              <span className="text-gray-300 text-sm sm:text-base">Stay updated with our newsletter:</span>
              <div className="flex w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-3 sm:px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white text-sm sm:text-base flex-1 sm:flex-none"
                />
                <button className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 px-4 sm:px-6 py-2 rounded-r-lg transition-colors duration-300 text-sm sm:text-base">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © {currentYear} NKN Industries. All rights reserved. | 
            <button className="text-blue-400 hover:text-blue-300 ml-1 transition-colors duration-300">
              Privacy Policy
            </button> | 
            <button className="text-blue-400 hover:text-blue-300 ml-1 transition-colors duration-300">
              Terms of Service
            </button>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;