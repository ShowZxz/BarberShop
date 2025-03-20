import { motion } from "framer-motion";
import "../styles/Gallery.css";
function Gallery() {
  const images = [
    { src: "/images/coupe1.jpg", name: "Dégradé Américain" },
    { src: "/images/coupe2.jpg", name: "Taper Fade" },
    { src: "/images/coupe3.jpg", name: "Coupe Texturée" },
    { src: "/images/coupe4.jpg", name: "Undercut" },
    { src: "/images/coupe5.jpg", name: "Buzz Cut" },
    { src: "/images/coupe6.jpg", name: "Pompadour" },
  ];

  return (
    <div className="gallery-container">
      <h1>Nos Coupes</h1>

      <div className="gallery-grid">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="gallery-item"
            initial={{ opacity: 0, y: 50 }} // Départ en bas avec opacité 0
            animate={{ opacity: 1, y: 0 }} // Arrive à sa place normale
            transition={{ duration: 0.5, delay: index * 0.2 }} // Décalage pour effet "distribution"
          >
            <img src={image.src} alt={image.name} />
            <p>{image.name}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
}

export default Gallery;
