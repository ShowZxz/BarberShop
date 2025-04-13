import "../styles/DownGallerySection.css";
import { Link } from "react-router-dom";

function DownGallerySection() {
  return (
    <div className="services-footer">
      <hr />
      <div className="services-footer-container">
        <h1>Nos Créations</h1>
        <p>
          Découvrez nôtre magnifique gallery avec toutes nos créations pour vous
          faire une idée
        </p>
        <div className="services-footer-btn">
          <Link to="/services">
            <button className="discover-footer-btn">Nos Services</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DownGallerySection;
