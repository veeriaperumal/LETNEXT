import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, User, Building, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with loading
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Facility',
      details: ['SP-21, 3rd cross road', '5th street, Ambattur industrial estate', 'Chennai-600058'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Phone,
      title: 'Call Us Today',
      details: ['+91 9025664478', 'Mon to Fri 9:00am to 6:00pm', 'Emergency Support Available'],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Mail,
      title: 'Email Support',
      details: ['info@nknindustries.com', 'sales@nknindustries.com', 'support@nknindustries.com'],
      color: 'from-blue-600 to-red-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday: 9:00 AM - 4:00 PM', 'Sunday: Emergency Only'],
      color: 'from-red-600 to-blue-600'
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-16 sm:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-red-50 relative overflow-hidden">
      {/* Minimal Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
            Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600">Connect</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your industrial operations? Our expert team is here to help you 
            achieve excellence through innovative solutions.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className={`transition-all duration-500 delay-${index * 100 + 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="group relative bg-white/80 backdrop-blur-sm rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/20">
                <div className={`absolute inset-0 bg-gradient-to-r ${info.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                <div className={`bg-gradient-to-r ${info.color} rounded-xl p-2 sm:p-3 w-fit mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <info.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300">{info.title}</h4>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 text-xs sm:text-sm mb-1 group-hover:text-gray-700 transition-colors duration-300">{detail}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Enhanced Contact Form */}
          <div className={`transition-all duration-500 delay-600 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                <p className="text-gray-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
              </div>
              
              {isSubmitted ? (
                <div className="text-center py-8 sm:py-12">
                  <div className="relative">
                    <CheckCircle className="h-16 w-16 sm:h-20 sm:w-20 text-green-500 mx-auto mb-4" />
                  </div>
                  <h4 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-600">Thank you for contacting us. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="relative">
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
                          focusedField === 'name' ? 'text-blue-500' : 'text-gray-400'
                        }`} />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
                          focusedField === 'email' ? 'text-blue-500' : 'text-gray-400'
                        }`} />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="your.email@company.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                    <div className="relative">
                      <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
                          focusedField === 'company' ? 'text-blue-500' : 'text-gray-400'
                        }`} />
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('company')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
                          focusedField === 'phone' ? 'text-blue-500' : 'text-gray-400'
                        }`} />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                          placeholder="+91 9025664478"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setFocusedField('subject')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="quote">Request Quote</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="relative">
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <div className="relative">
                      <MessageSquare className={`absolute left-3 top-4 h-5 w-5 transition-colors duration-300 ${
                        focusedField === 'message' ? 'text-blue-500' : 'text-gray-400'
                      }`} />
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        className="w-full pl-10 pr-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 resize-none bg-gray-50 focus:bg-white"
                        placeholder="Please describe your inquiry or requirements..."
                      ></textarea>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white font-bold py-3 sm:py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Enhanced Map and Additional Info */}
          <div className={`transition-all duration-500 delay-800 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <div className="space-y-6 sm:space-y-8">
              {/* Interactive Map */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
                <div className="bg-gradient-to-r from-blue-600 to-red-600 p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Find Us Here</h3>
                  <p className="text-blue-100">Visit our state-of-the-art facility</p>
                </div>
                <div className="relative h-48 sm:h-64 bg-gradient-to-br from-blue-100 to-red-100 flex items-center justify-center group cursor-pointer hover:from-blue-200 hover:to-red-200 transition-all duration-300">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-12 w-12 sm:h-16 sm:w-16 text-blue-600 mx-auto mb-4 group-hover:text-red-600 transition-colors duration-300" />
                    <p className="text-gray-700 font-semibold">Interactive Map</p>
                    <p className="text-sm text-gray-600">SP-21, 3rd cross road, 5th street</p>
                    <p className="text-xs text-blue-600 mt-2 group-hover:text-red-600 transition-colors duration-300">Click to view in Google Maps</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-6 sm:p-8 border border-white/20">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Why Choose NKN?</h3>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  {[
                    { number: '24/7', label: 'Support Available' },
                    { number: '<2hrs', label: 'Response Time' },
                    { number: '500+', label: 'Projects Completed' },
                    { number: '25+', label: 'Years Experience' }
                  ].map((stat, index) => (
                    <div key={stat.label} className="text-center group">
                      <div className="text-2xl sm:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-red-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 group-hover:text-gray-800 transition-colors duration-300">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;