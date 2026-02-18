import SocialLinks from './SocialLinks';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Contact Info</h5>
            <address>
              <p><i className="fa fa-map-marker"></i>Serenity Circles By Bhagwat next to Utkantheshwar Mahadev Village, Punadra, Gujarat 387610</p>
              <p><i className="fa fa-phone"></i> <a href="tel:+919313204312">+91 93132 04312</a></p>
              <p><i className="fa fa-envelope"></i> <a href="mailto:meghleela.fourace@gmail.com">meghleela.fourace@gmail.com</a></p>
            </address>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Quick Links</h5>
            <ul className="footer-links">
              <li><a href="#gallery" onClick={(e) => { e.preventDefault(); scrollToSection('gallery'); }}>Gallery</a></li>
              <li><a href="#booking" onClick={(e) => { e.preventDefault(); scrollToSection('booking'); }}>Book Tickets</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact Us</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4">
            <h5>Follow Us</h5>
            <SocialLinks />
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Megh Leela. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

