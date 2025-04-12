import "./App.css";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import PageMentionLegal from "./pages/PageMentionLegal";

function App() {
  const location = useLocation(); // Déplacement de useLocation() DANS App()

  const imageVariants = {
    hidden: { rotateZ: 0, scale: 0 },
    visible: {
      rotateZ: 360,
      scale: 1,
      transition: { duration: 2, type: "spring", stiffness: 30 },
    },
  };

  return (
    <div className="haut-section">
      {/* Navbar avec animation */}
      <nav className="navbar">
        <motion.ul
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/">
              <img src="./vite.svg" alt="logo" className="logo" />
            </Link>
          </li>
          <li>
            <Link to="/gallery">Galerie</Link>
          </li>
          <li>
            <Link to="/reviews">Avis</Link>
          </li>
        </motion.ul>
      </nav>

      {/* Animation des transitions de pages */}
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
