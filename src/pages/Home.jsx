import { motion } from "framer-motion";
import MiniGallery from "../components/MiniGallery";
import Contact from "../pages/Contact";
import VideoSection from "../components/VideoSection"; 
import MentionLegal from "../components/MentionLegal";
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
const paragraphe = "Principium autem unde latius se funditabat, emersit ex negotio tali. Chilo ex vicario et coniux eius Maxima nomine, questi apud Olybrium ea tempestate urbi praefectum, vitamque suam venenis petitam adseverantes inpetrarunt ut hi, quos suspectati sunt, ilico rapti conpingerentur in vincula, organarius Sericus et Asbolius palaestrita et aruspex Campensis.";

const headerVariants = {
    hidden: { opacity: 0, scale: 1},
    visible: { opacity: 1, scale: 1.3,  transition: { duration: 1, delay: 1,type:"spring",stiffness:100 } },
    exit: {x: '-100vw', transition: { ease: 'easeInOut' } }
};
const divVariants = {
    hidden: { x: '-100vw'},
    visible: {  x: 0,  transition: { duration: 2, delay: 0.3,type:"spring",stiffness:30} },
    exit: {x: '-100vw',opacity: 0, transition: { ease: 'easeInOut',duration: 0.5, delay: 0.3 } }
};
const spanVariants = {
    hidden: { opacity: 0},
    visible: { opacity: 1,  transition: {duration: 4, delay: 2, type:"spring",stiffness:50 } },
    exit: {x: '-100vw', transition: { ease: 'easeInOut' } }
};

  return (
    <motion.div className="home-container"
    variants={divVariants}
    exit="exit">
      {/* Titre, slogan et image d'illustration */}
      <motion.div className="header-container"
          variants={divVariants}
          initial="hidden"
          animate="visible"
          
          >

        <motion.h1 
        variants={headerVariants}
        initial="hidden"
        animate="visible"
       
        >Le Bink's Barbershop</motion.h1>
        <div className="slogan-div">

        <motion.h2 className="phrase"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
          
          transition={{ duration: 3, delay: 2, type:"spring",stiffness:100  }}
          >Découvrez une nouvelle façon de se couper</motion.h2>

          <motion.span className="paragraphe"
          variants={spanVariants}
          initial="hidden"
          animate="visible"
          exit="exit" 
          >{paragraphe}</motion.span>

        </div>
        {/* IMG <img src="/images/salon.jpg" alt="Salon de coiffure" /> */}
        <VideoSection />
        

      </motion.div>
      <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget erat placerat, interdum velit a, elementum orci. In tempor turpis.</h2>
      <hr className="horizontal-line" />
      

      {/* Section Emplacement & Horaires */}
      <div className="info-container">
        {/* 📍 À gauche : Adresse + Bouton Google Maps */}
        <motion.div className="adresse-container"
        whileHover={{ scale: 1.1 }}
        >
          <h1>📍 Où nous trouver :</h1>
          <p><strong >3 Pl. du 14 Juillet, 91270 Vigneux-sur-Seine</strong><br />Hae duae provinciae bello quondam piratico catervis mixtae praedonum a Servilio pro consule missae sub iugum factae sunt vectigales. et hae quidem regiones velut in prominenti terrarum lingua positae ob orbe eoo monte Amano disparantur.</p>
          <a
            href="https://maps.app.goo.gl/rC6PywG2tpXogdj49"
            target="_blank"
            rel="noopener noreferrer"
            className="map-button"
          >
            Voir sur Google Maps
          </a>
        </motion.div>

        {/* 🏠 Au centre : Image de l'emplacement */}
        <div className="image-container">
          <img src="/images/Street.PNG" alt="Emplacement du salon" />
        </div>

        {/* 🕰️ À droite : Horaires */}
        <motion.div className="horaires-container"
        whileHover={{ scale: 1.1 }}>
          <h1>🕰️ Horaires d'Ouverture</h1>
          <ul>
            {horaires.map((item, index) => (
              <li key={index} className={item.heures === "Fermé" ? "ferme" : ""}>
                <span className="jour">{item.jour}</span>
                <span className="heures">{item.heures}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
      <hr className="horizontal-line" />

      <div className="mini-gallery">

  
  <MiniGallery />  {/* Affichage de la mini galerie */}
  
      </div>
      <hr className="horizontal-line" />
      <div className="contact-class"><Contact /></div>
      <div className="mention-legal"><MentionLegal/></div>
      
    </motion.div>
    
  );
}

export default Home;
