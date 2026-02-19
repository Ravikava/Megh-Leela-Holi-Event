import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Hero images - desktop and mobile variants
  const heroImages = [
    {
      desktop: '/images/Hero Section 01.jpg',
      mobile: '/images/Hero Section Mobile 01.jpg'
    },
    {
      desktop: '/images/Hero Section 02.jpg',
      mobile: '/images/Hero Section Mobile 02.jpg'
    }
  ];

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check on mount
    checkScreenSize();

    // Add event listener
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [heroImages.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="hero-slider">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? 'active' : ''}`}
          >
            <img
              src={isMobile ? (image.mobile || image.desktop) : image.desktop}
              alt={`Hero ${index + 1}`}
              className="hero-image"
              loading="lazy"
            />
            <div className="video-overlay"></div>
          </div>
        ))}
        {/* Slide Indicators */}
        <div className="slide-indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {/* <div className="hero-content">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="hero-content-wrapper">
                <motion.h1
                  className="hero-title"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <span className="id-color">Holi Celebration</span>
                </motion.h1>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <button 
                    className="btn-explore"
                    onClick={() => scrollToSection('gallery')}
                  >
                    Explore
                  </button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Hero;

