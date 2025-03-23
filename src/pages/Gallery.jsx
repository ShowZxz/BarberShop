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
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.name} className="gallery-image" />
            <span className="gallery-title">{image.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
