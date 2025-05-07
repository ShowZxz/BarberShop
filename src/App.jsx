import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import PageMentionLegal from "./pages/PageMentionLegal";

function App() {
  const location = useLocation();

  const logoVariants = {
    animate: {
      rotate: [0, -360, 0, -360],
      transition: {
        duration: 4,
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log("Menu ouvert :", !isMenuOpen);
  };
  return (
    <div className="haut-section">
      <nav className="navbar">
        <button className="hamburger" aria-label="Menu" onClick={toggleMenu}>
          Bink's Menu ☰
        </button>
        <motion.ul
          className={`nav-links ${isMenuOpen ? "active" : ""}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            delay: 1,
            type: "spring",
            stiffness: 50,
            duration: 1,
          }}
        >
          <li onClick={toggleMenu}>
            <Link to="/">Accueil</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/services">Services</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/">
              <motion.img
                src="./images/LOGO_BINKS_BARBERSHOP.png"
                alt="logo"
                className="logo"
                variants={logoVariants}
                animate="animate"
              />
            </Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/gallery">Galerie</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link to="/reviews">Avis</Link>
          </li>
        </motion.ul>
      </nav>

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/mentions-legales" element={<PageMentionLegal />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
