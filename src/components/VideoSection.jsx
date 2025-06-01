import "../styles/VideoSection.css";
const paragraphe =
  "Notre galerie est bien plus qu’un simple catalogue de coupes. C’est le reflet de notre passion, de notre exigence et du lien que nous tissons avec nos clients. Chaque image témoigne d’un travail soigné, d’un conseil adapté et d’un style unique. Inspirez-vous, projetez-vous, imaginez ce que l’on pourrait créer ensemble. ";

function VideoSection() {
  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/video/barber.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
      <div className="text-gallerysection">
        <h1 className="title-gallery">
          Découvrez notre savoir-faire et notre passion pour la coiffure
        </h1>
        <span className="paragraphe">{paragraphe}</span>
      </div>
      <div className="gallery-header">
        <h1 className="gallery-title">La gallery du Bink's</h1>
      </div>
    </div>
  );
}

export default VideoSection;
