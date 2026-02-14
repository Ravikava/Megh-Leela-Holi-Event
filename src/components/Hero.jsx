import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="hero-section">
      <div className="video-background">
        {/* <video 
          autoPlay 
          loop 
          muted 
          playsInline
          onError={(e) => {
            // Hide video if it fails to load and show fallback
            e.target.style.display = 'none';
            const fallback = e.target.parentElement.querySelector('.video-fallback');
            if (fallback) fallback.style.display = 'block';
          }}
          onLoadedData={() => {
            // Hide fallback if video loads successfully
            const fallback = document.querySelector('.video-fallback');
            if (fallback) fallback.style.display = 'none';
          }}
        >
          <source src="/videos/holi-video.mp4" type="video/mp4" />
        </video> */}
        <img src='images/Hero Section 01.jpg' alt="" srcSet="" className="hero-image" />
        <div className="video-fallback"></div>
        <div className="video-overlay"></div>
      </div>
      <div className="hero-content">
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
                  {/* <span className="id-color">Megh Leela</span>
                  <br /> */}
                  <span className="id-color">Holi Celebration</span>
                </motion.h1>
                <motion.p
                  className="hero-subtitle"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  Join us for the most vibrant celebration of colors! Experience the joy, music, and traditions of Holi.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
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
      </div>
    </section>
  );
};

export default Hero;

