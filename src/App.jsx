
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
const imageVarints = {
  hidden: { rotateZ: 0,scale:0},
  visible: { rotateZ: 360,scale:1, transition: { duration: 2,type:"spring",stiffness:30 } },
}
function App() {
  return (
    <div className='haut-section'>
      <nav className="navbar">
      <motion.img 
          variants={imageVarints}
          initial="hidden"
          animate="visible"
      src="./vite.svg" alt="logo" className='logo' />
        <motion.ul
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
          whileHover={{ scale: 1.1 }}
        >
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/gallery">Galerie</Link></li>
          <li><Link to="/reviews">Avis</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </motion.ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </div>
  );
}


export default App;
