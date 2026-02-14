import { motion } from 'framer-motion';
import './EventInfo.css';

const EventInfo = () => {
  return (
    <section id="event-info" className="event-info-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <motion.h2
              className="event-date"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              March 2025
            </motion.h2>
            <motion.h3
              className="event-location"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Location: PENDING
            </motion.h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventInfo;

