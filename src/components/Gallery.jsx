import { useState } from 'react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // YouTube video IDs for Music Artists
  const artistVideos = [
    'LXl-YftHl2o',
    'dM-m52-L48k',
    '34B7S-bEBbc'
  ];

  const pastEventImages = [
    '/images/gallery/Past Events 01.jpg',
    '/images/gallery/Past Events 02.jpg',
    '/images/gallery/Past Events 03.jpg',
    '/images/gallery/Past Events 04.jpg',
    '/images/gallery/Past Events 05.jpg',
    '/images/gallery/Past Events 06.jpg',
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <motion.div
              className="section-label"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Gallery
            </motion.div>
            <motion.h2
              className="section-title"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <span className="id-color">01</span> Music Artist & Events 
            </motion.h2>
            <div className="small-border"></div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <motion.h3
              className="gallery-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Music Artists
            </motion.h3>
            <div className="gallery-grid venue-gallery">
              {[
                'LXl-YftHl2o',
                'dM-m52-L48k',
                '34B7S-bEBbc'
              ].map((videoId, index) => (
                <motion.div
                  key={index}
                  className="gallery-item video-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`Music Artist ${index + 1}`}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="gallery-video"
                  ></iframe>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-12">
            <motion.h3
              className="gallery-subtitle"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Past Events
            </motion.h3>
            <div className="gallery-grid past-events-gallery">
              {pastEventImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="gallery-item"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => handleImageClick(image)}
                >
                  <img 
                    src={image} 
                    alt={`Past Event ${index + 1}`}
                    className="gallery-image"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div className="image-modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <img src={selectedImage} alt="Gallery" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;

