import { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        // Check if scrolled past half of hero section
        setIsScrolled(scrollPosition > heroHeight / 2);
      }
    };

    // Check on mount
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : 'transparent'} ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-content">
                {/* Logo - Left Side */}
                <div className="logo">
                  <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>
                    <img src="/images/logo.png" alt="Megh Leela" className="logo-img" />
                  </a>
                </div>

                {/* Navigation Menu - Center */}
                <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
                  <ul>
                    <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Home</a></li>
                    <li><a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Gallery</a></li>
                    <li><a href="#booking" onClick={(e) => { e.preventDefault(); scrollToSection('booking'); }}>Ticket</a></li>
                    <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
                    {/* Book Now in Mobile Menu */}
                    <li className="mobile-book-now">
                      <a 
                        href="https://in.bookmyshow.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn-book-now-mobile"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Book Now
                      </a>
                    </li>
                  </ul>
                </nav>
                
                {/* Overlay for Mobile Menu */}
                {isMenuOpen && (
                  <div 
                    className="menu-overlay" 
                    onClick={() => setIsMenuOpen(false)}
                  ></div>
                )}

                {/* Book Now Button - Right Side (Desktop Only) */}
                <div className="header-actions">
                  <a 
                    href="https://in.bookmyshow.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-book-now desktop-only"
                  >
                    <span className="btn-text">Book Now</span>
                  </a>
                  <button 
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Sticky Book Now Button - Mobile Only (Bottom Right) */}
      <a 
        href="https://in.bookmyshow.com/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn-book-now-sticky mobile-only"
      >
        Book Now
      </a>
    </>
  );
};

export default Header;
