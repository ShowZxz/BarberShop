import { motion } from "framer-motion";
import MiniGallery from "../components/MiniGallery";
import Contact from "../pages/Contact";
import VideoSection from "../components/VideoSection";
import MentionLegal from "../components/MentionLegal";
import BannerPresentation from "../components/BannerPresentation";
import Horaire from "../components/Horaire";
import Location from "../components/Location";
import MiniReview from "../components/MiniReview";
import { useState, useEffect } from "react";
import "../styles/Home.css";
function Home() {
  const horaires = [
    { jour: "Lundi", heures: "Fermé" },
    { jour: "Mardi", heures: "09:00 - 19:00" },
    { jour: "Mercredi", heures: "09:00 - 19:00" },
    { jour: "Jeudi", heures: "09:00 - 19:00" },
    { jour: "Vendredi", heures: "09:00 - 19:00" },
    { jour: "Samedi", heures: "10:00 - 18:00" },
    { jour: "Dimanche", heures: "Fermé" },
  ];
  const paragraphe =
    "Principium autem unde latius se funditabat, emersit ex negotio tali. Chilo ex vicario et coniux eius Maxima nomine, questi apud Olybrium ea tempestate urbi praefectum, vitamque suam venenis petitam adseverantes inpetrarunt ut hi, quos suspectati sunt, ilico rapti conpingerentur in vincula, organarius Sericus et Asbolius palaestrita et aruspex Campensis.";

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
    hidden: { x: "-100vw" },
    visible: {
      x: 0,
      transition: { duration: 2, delay: 0.3, type: "spring", stiffness: 30 },
    },
    exit: {
      x: "-100vw",
      opacity: 0,
      transition: { ease: "easeInOut", duration: 0.5, delay: 0.3 },
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
      // Si on a scrollé au moins à 50% de la page
      console.log("ScrollY:", window.scrollY); // ✅ Test si l'événement est bien déclenché
      console.log("InnerHeight:", window.innerHeight);
      if (window.scrollY > window.innerHeight / 2) {
        setShowButton(true);
        console.log("➡️ Affichage du bouton !");
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
    <motion.div className="home-container" variants={divVariants} exit="exit">
      {/* Section Emplacement & Horaires */}
      <BannerPresentation />
      <Horaire /> {/* Affichage des horaires */}
      <Location /> {/* Affichage de la carte */}
      {/* Affichage de la bannière de présentation */}
      <div className="mini-gallery">
        <MiniGallery /> {/* Affichage de la mini galerie */}
      </div>
      <MiniReview /> {/* Affichage de la mini review */}
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
