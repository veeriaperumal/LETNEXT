import React, { useEffect, useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, Filter, Grid, List, Search } from 'lucide-react';

const Gallery: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('masonry');
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
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

  const filters = [
    { id: 'all', label: 'All Projects', count: 12, color: 'from-blue-500 to-blue-600' },
    { id: 'manufacturing', label: 'Manufacturing', count: 4, color: 'from-green-500 to-green-600' },
    { id: 'automation', label: 'Automation', count: 3, color: 'from-purple-500 to-purple-600' },
    { id: 'facilities', label: 'Facilities', count: 3, color: 'from-orange-500 to-orange-600' },
    { id: 'products', label: 'Products', count: 2, color: 'from-red-500 to-red-600' }
  ];

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Advanced Manufacturing Facility',
      category: 'manufacturing',
      description: 'State-of-the-art manufacturing floor with precision equipment and automated systems',
      tags: ['CNC', 'Precision', 'Automated'],
      height: 'h-80'
    },
    {
      id: 2,
      src: 'https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Automation Control Room',
      category: 'automation',
      description: 'Modern control room with advanced monitoring systems and real-time analytics',
      tags: ['Control', 'Monitoring', 'Analytics'],
      height: 'h-96'
    },
    {
      id: 3,
      src: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Quality Control Laboratory',
      category: 'facilities',
      description: 'Precision testing and quality assurance facility with cutting-edge equipment',
      tags: ['Testing', 'Quality', 'Laboratory'],
      height: 'h-72'
    },
    {
      id: 4,
      src: 'https://images.pexels.com/photos/209235/pexels-photo-209235.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Industrial Tool Production',
      category: 'products',
      description: 'High-quality industrial tools and equipment manufacturing process',
      tags: ['Tools', 'Production', 'Quality'],
      height: 'h-88'
    },
    {
      id: 5,
      src: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Power Systems Installation',
      category: 'automation',
      description: 'Industrial power distribution and control systems installation',
      tags: ['Power', 'Installation', 'Systems'],
      height: 'h-80'
    },
    {
      id: 6,
      src: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Safety Equipment Testing',
      category: 'products',
      description: 'Comprehensive safety equipment and protective gear testing facility',
      tags: ['Safety', 'Testing', 'Protection'],
      height: 'h-76'
    },
    {
      id: 7,
      src: 'https://images.pexels.com/photos/1108117/pexels-photo-1108117.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Assembly Line Operations',
      category: 'manufacturing',
      description: 'Efficient assembly line with automated processes and quality control',
      tags: ['Assembly', 'Automation', 'Efficiency'],
      height: 'h-84'
    },
    {
      id: 8,
      src: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Research & Development',
      category: 'facilities',
      description: 'Innovation lab for product development and testing new technologies',
      tags: ['Research', 'Innovation', 'Development'],
      height: 'h-92'
    },
    {
      id: 9,
      src: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Warehouse Operations',
      category: 'facilities',
      description: 'Modern warehouse with automated storage and retrieval systems',
      tags: ['Warehouse', 'Storage', 'Logistics'],
      height: 'h-80'
    },
    {
      id: 10,
      src: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Precision Machining',
      category: 'manufacturing',
      description: 'High-precision machining operations with advanced CNC technology',
      tags: ['Machining', 'Precision', 'CNC'],
      height: 'h-88'
    },
    {
      id: 11,
      src: 'https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Electrical Systems',
      category: 'automation',
      description: 'Complex electrical systems and power distribution networks',
      tags: ['Electrical', 'Power', 'Distribution'],
      height: 'h-76'
    },
    {
      id: 12,
      src: 'https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'Clean Room Facility',
      category: 'manufacturing',
      description: 'Ultra-clean manufacturing environment for sensitive components',
      tags: ['Clean Room', 'Manufacturing', 'Precision'],
      height: 'h-84'
    }
  ];

  const filteredImages = galleryImages.filter(image => {
    const matchesFilter = activeFilter === 'all' || image.category === activeFilter;
    const matchesSearch = searchTerm === '' || 
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const openModal = (imageId: number) => {
    setSelectedImage(imageId);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = selectedImage 
    ? filteredImages.find(img => img.id === selectedImage)
    : null;

  return (
    <section id="gallery" ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful projects showcasing innovation, quality, 
            and the cutting-edge solutions that define NKN Industries.
          </p>
        </div>

        {/* Search and Controls */}
        <div className={`mb-12 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-4">
              <div className="flex bg-white/10 backdrop-blur-sm rounded-xl p-1 border border-white/20">
                <button
                  onClick={() => setViewMode('masonry')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'masonry' 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <Grid className="h-5 w-5" />
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-blue-500 text-white' 
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  <List className="h-5 w-5" />
                </button>
              </div>

              <button
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2 text-white hover:bg-white/20 transition-all duration-300"
              >
                <Filter className="h-5 w-5" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className={`mt-6 transition-all duration-500 overflow-hidden ${
            isFilterOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="flex flex-wrap gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r text-white shadow-lg'
                      : 'bg-white/10 backdrop-blur-sm text-gray-300 hover:bg-white/20 border border-white/20'
                  }`}
                  style={activeFilter === filter.id ? {
                    backgroundImage: `linear-gradient(to right, ${filter.color.split(' ')[1]}, ${filter.color.split(' ')[3]})`
                  } : {}}
                >
                  <span className="relative z-10">{filter.label}</span>
                  <span className="ml-2 text-xs opacity-75">({filter.count})</span>
                  {activeFilter !== filter.id && (
                    <div className={`absolute inset-0 bg-gradient-to-r ${filter.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className={`${
          viewMode === 'masonry' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
            : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
        }`}>
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className={`transition-all duration-1000 delay-${index * 50 + 400} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div 
                className="relative group cursor-pointer overflow-hidden rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 h-80"
                onClick={() => openModal(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-200">
                      <ZoomIn className="text-white h-8 w-8" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {image.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white border border-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {image.title}
                  </h3>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {image.description}
                  </p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-xs text-white font-semibold border border-white/30">
                    {filters.find(f => f.id === image.category)?.label}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredImages.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Enhanced Modal */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-6xl max-h-full w-full">
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <X className="h-6 w-6" />
              </button>
              
              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm rounded-full p-3 text-white hover:bg-white/20 transition-all duration-300 transform hover:scale-110"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={selectedImageData.src}
                  alt={selectedImageData.title}
                  className="max-w-full max-h-[80vh] object-contain mx-auto"
                />
                
                {/* Image Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedImageData.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-500/80 backdrop-blur-sm rounded-full text-sm text-white border border-white/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-bold text-3xl mb-3">{selectedImageData.title}</h3>
                  <p className="text-gray-300 text-lg max-w-3xl">{selectedImageData.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
};

export default Gallery;