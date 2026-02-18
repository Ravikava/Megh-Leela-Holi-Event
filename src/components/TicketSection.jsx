import { motion } from 'framer-motion';
import './TicketSection.css';

const TicketSection = () => {
  const ticketData = {
    "gokul_arena": [
      {
        "pass_type": "toddlers",
        "age": "0-5",
        "price": "free"
      },
      {
        "pass_type": "children",
        "age": "6-15",
        "price": "399"
      },
      {
        "pass_type": "student",
        "age": "under 21",
        "price": "500"
      }
    ],
    "mathura_arena": [
      {
        "pass_type": "general",
        "person": "single",
        "price": "789"
      },
      {
        "pass_type": "general",
        "person": "couple",
        "price": "1500"
      },
      {
        "pass_type": "general",
        "person": "group_of_6",
        "price": "4500"
      },
      {
        "pass_type": "general",
        "person": "group_of_10",
        "price": "7000"
      }
    ],
    "braj_arena": [
      {
        "pass_type": "premium",
        "person": "couple",
        "price": "3000"
      },
      {
        "pass_type": "premium",
        "person": "group_of_6",
        "price": "8400"
      },
      {
        "pass_type": "premium",
        "person": "group_of_10",
        "price": "13000"
      }
    ],
    "vrindavan_lounge": [
      {
        "pass_type": "vip_luxury",
        "person": "couple",
        "price": "5000"
      },
      {
        "pass_type": "vip_luxury",
        "person": "group_of_5",
        "price": "22000"
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
    <section id="tickets" className="ticket-section">
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
              <span className="id-color">02</span> Choose Your Ticket
            </motion.h2>
            <div className="small-border"></div>
          </div>
        </div>

        <div className="ticket-cards-grid">
          {Object.entries(ticketData).map(([arenaKey, tickets], arenaIndex) =>
            tickets.map((ticket, ticketIndex) => {
              const globalIndex = Object.values(ticketData)
                .slice(0, Object.keys(ticketData).indexOf(arenaKey))
                .reduce((sum, arr) => sum + arr.length, 0) + ticketIndex;
              
              return (
                <motion.a
                  key={`${arenaKey}-${ticketIndex}`}
                  href="#"
                  className="ticket-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: globalIndex * 0.05 + 0.3 }}
                >
                  <div className="ticket-card-inner">
                    <div className="ticket-card-header">
                      <h3 className="ticket-title">
                        {formatArenaName(arenaKey)} - {formatPassType(ticket.pass_type)}
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
              );
            })
          )}
        </div>
      </div>
    </section>
  );
};

export default TicketSection;

