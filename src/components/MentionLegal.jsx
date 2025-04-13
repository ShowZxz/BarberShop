import "../styles/MentionLegal.css";
import { Link } from "react-router-dom";
function MentionLegal({ mention }) {
  return (
    <div className="mention-legal">
      <p>
        Le Bink's Barbershop est une marque déposée de ShowZxz. Tous droits
        réservés.
      </p>
      <p>
        ⬇️Pour plus d'informations, veuillez visiter le site officiel à
        l'adresse⬇️
      </p>
      <div className="ml-footer-btn">
        <Link to="/mentions-legales">
          <button className="btn-mention-legal">Mention Legale</button>
        </Link>
      </div>
    </div>
  );
}
export default MentionLegal;
