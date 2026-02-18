import { motion } from 'framer-motion';
import './BookingSection.css';

const BookingSection = () => {
  const ticketData = {
    "gokul_arena": [
      {
        "pass_type": "toddlers",
        "age": "1-5",
        "price": "free",
        "includes" : [
          "Dedicated children play area with toys, games and care taker"
        ]
      },
      {
        "pass_type": "children",
        "age": "6-15",
        "price": "399",
        "includes" : [
          "Entry",
          "Organic Colors",
          "Rain Dance",
          "Color Blast + Color Cloud",
          "Maha Raas (Garba)"
        ]
      },
      {
        "pass_type": "student",
        "age": "under 21",
        "price": "500",
        "includes" : [
          "Entry",
          "Organic Colors",
          "Rain Dance",
          "Color Blast + Color Cloud",
          "Maha Raas (Garba)"
        ]
      }
    ],
    "mathura_arena": [
      {
        "pass_type": "general",
        "person": "single",
        "price": "789",
        "includes" : [
          "Entry",
          "Organic Colors",
          "Rain Dance",
          "Color Blast + Color Cloud",
          "Maha Raas (Garba)"
        ]
      },
      {
        "pass_type": "general",
        "person": "couple",
        "price": "1500",
        "includes" : [
          "Entry",
          "Organic Colors",
          "Rain Dance",
          "Color Blast + Color Cloud",
          "Maha Raas (Garba)"
        ]
      },
      {
        "pass_type": "general",
        "person": "group_of_6_persons",
        "price": "4500",
        "includes" : [
          "Entry",
          "Organic Colors",
          "Rain Dance",
          "Color Blast + Color Cloud",
          "Maha Raas (Garba)"
        ]
      },
      {
        "pass_type": "general",
        "person": "group_of_10_persons",
        "price": "7000",
        "includes" : [
          "Entry",
          "Organic Colors",
          "Rain Dance",
          "Color Blast + Color Cloud",
          "Maha Raas (Garba)"
        ]
      }
    ],
    "braj_arena": [
      
      {
        "pass_type": "premium",
        "person": "couple",
        "price": "3000",
        "includes" : [
          "Fast Entry",
          "Near Stage Access (Sudarshan Stage)",
          "Complimentary Mocktail",
          "₹200 Food Coupon",
          "Photo Booth Priority"
        ]
      },
      {
        "pass_type": "premium",
        "person": "group_of_6_persons",
        "price": "8400",
        "includes" : [
          "Fast Entry",
          "Near Stage Access (Sudarshan Stage)",
          "Complimentary Mocktail",
          "₹200 Food Coupon",
          "Photo Booth Priority"
        ]
      },
      {
        "pass_type": "premium",
        "person": "group_of_10_persons",
        "price": "13000",
        "includes" : [
          "Fast Entry",
          "Near Stage Access (Sudarshan Stage)",
          "Complimentary Mocktail",
          "₹200 Food Coupon",
          "Photo Booth Priority"
        ]
      }
    ],
    "vrindavan_lounge": [
      {
        "pass_type": "vip_luxury",
        "person": "couple",
        "price": "5000",
        "includes" : [
          "VIP Lounge",
          "Separate Seating",
          "Premium Food Buffet",
          "2 Complimentary Drinks",
          "Dedicated Entry Gate"
        ]
      },
      {
        "pass_type": "vip_luxury",
        "person": "group_of_5_couple",
        "price": "22000",
        "includes" : [
          "VIP Lounge",
          "Separate Seating",
          "Premium Food Buffet",
          "2 Complimentary Drinks",
          "Dedicated Entry Gate"
        ]
      }
    ]
  };

  // Format arena name for display
  const formatArenaName = (arenaKey) => {
    return arenaKey
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Format pass type for display
  const formatPassType = (passType) => {
    return passType
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  // Format person type for display
  const formatPersonType = (personType) => {
    return personType
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

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
              Don't miss out on the most colorful celebration of the year! Book your tickets now and celebrate Holi with Megh Leela.
            </motion.p>
          </div>
        </div>

        <div className="ticket-arenas">
          {Object.entries(ticketData).map(([arenaKey, tickets], arenaIndex) => (
            <motion.div
              key={arenaKey}
              className="arena-section"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: arenaIndex * 0.1 + 0.6 }}
            >
              <h3 className="arena-title">{formatArenaName(arenaKey)}</h3>
              <div className="ticket-cards-grid">
                {tickets.map((ticket, ticketIndex) => (
                  <motion.a
                    key={`${arenaKey}-${ticketIndex}`}
                    href="#"
                    className="ticket-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: arenaIndex * 0.1 + ticketIndex * 0.1 + 0.7 }}
                  >
                    <div className="ticket-card-inner">
                      <div className="ticket-card-header">
                        <h3 className="ticket-title">
                          {formatPassType(ticket.pass_type)}
                        </h3>
                      </div>
                      <div className="ticket-card-content">
                        <div className="ticket-info">
                          {ticket.age && (
                            <div className="info-item">
                              <span className="info-icon">👤</span>
                              <span className="info-text">{ticket.age}</span>
                            </div>
                          )}
                          {ticket.person && (
                            <div className="info-item">
                              <span className="info-icon">👥</span>
                              <span className="info-text">{formatPersonType(ticket.person)}</span>
                            </div>
                          )}
                        </div>
                        {ticket.includes && ticket.includes.length > 0 && (
                          <div className="ticket-includes">
                            <h4 className="includes-title">Includes:</h4>
                            <ul className="includes-list">
                              {ticket.includes.map((item, index) => (
                                <li key={index} className="includes-item">
                                  <span className="check-icon">✓</span>
                                  <span className="includes-text">{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                        <div className="ticket-price-section">
                          {ticket.price === "free" ? (
                            <span className="price-free">Free</span>
                          ) : (
                            <div className="price-wrapper">
                              <span className="currency">₹</span>
                              <span className="price-amount">{ticket.price}</span>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="ticket-card-footer">
                        <span className="book-now-text">Book Now →</span>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;

