import "../styles/VideoSection.css";
function VideoSection() {
    return (
      <div className="video-container">
        <video autoPlay loop muted playsInline className="background-video">
          <source src="/video/barber.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture de vidéos.
        </video>
      </div>
    );
  }
  
  export default VideoSection;
  