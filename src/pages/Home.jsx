import { motion } from "framer-motion";
import MiniGallery from "../components/MiniGallery";
import Contact from "../pages/Contact";
import MentionLegal from "../components/MentionLegal";
import BannerPresentation from "../components/BannerPresentation";
import Horaire from "../components/Horaire";
import Location from "../components/Location";
import MiniReview from "../components/MiniReview";

import { useState, useEffect } from "react";
import "../styles/Home.css";

function Home() {
  const headerVariants = {
    hidden: { opacity: 0, scale: 1 },
    visible: {
      opacity: 1,
      scale: 1.3,
      transition: { duration: 1, delay: 1, type: "spring", stiffness: 100 },
    },
    exit: { x: "-100vw", transition: { ease: "easeInOut" } },
  };
  const divVariants = {
    hidden: { opacity: 0, x: "120vw", filter: "blur(20px)" },
    visible: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
      transition: {
        duration: 1,
        ease: "easeInOut",
        type: "tween",
        stiffness: 30,
      },
    },
    exit: {
      opacity: 0,
      x: "-100vw",
      filter: "blur(10px)",
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };
  const spanVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 4, delay: 2, type: "spring", stiffness: 50 },
    },
    exit: { x: "-100vw", transition: { ease: "easeInOut" } },
  };

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      //console.log("ScrollY:", window.scrollY);
      //console.log("InnerHeight:", window.innerHeight);
      if (window.scrollY > window.innerHeight / 2) {
        setShowButton(true);
        //console.log("➡️ Affichage du bouton !");
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="home-container"
      variants={divVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <BannerPresentation />

      <Horaire />

      <Location />

      <div className="mini-gallery">
        <MiniGallery />
      </div>
      <MiniReview />
      <div className="contact-class">
        <Contact />
      </div>
      <div className="mention-legal">
        <MentionLegal />
      </div>
      {showButton && (
        <a className={`go-top ${showButton ? "show" : ""}`} href="#top">
          <img src="/images/upload.png" alt="Retour en haut" />
        </a>
      )}
    </motion.div>
  );
}

export default Home;
