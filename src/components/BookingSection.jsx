import { motion } from 'framer-motion';
import './BookingSection.css';

const BookingSection = () => {
  return (
    <section id="booking" className="booking-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <motion.div
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Tickets
            </motion.div>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="id-color">02</span> Book Your Tickets
            </motion.h2>
            <div className="small-border"></div>
            <motion.p
              className="booking-description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              Don't miss out on the most colorful celebration of the year! Book your tickets now abd celebrate Holi with Megh Leela.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <a
                href="https://in.bookmyshow.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-book-ticket"
              >
                Book Now
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

