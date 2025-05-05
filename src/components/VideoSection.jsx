import "../styles/VideoSection.css";
const paragraphe =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.";

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
