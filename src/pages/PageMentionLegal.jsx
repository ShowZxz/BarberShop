import "../styles/PageMentionLegal.css";

function PageMentionLegal() {
  return (
    <div className="mentions-container">
      <h1>Mentions légales</h1>

      <section>
        <h2>Éditeur du site</h2>
        <p>
          <strong>Nom commercial :</strong> Le Bink's Barbershop
        </p>
        <p>
          <strong>Responsable de la publication :</strong> [Ton prénom ou
          pseudo]
        </p>
        <p>
          <strong>Adresse :</strong> 3 Pl. du 14 Juillet, 91270
          Vigneux-sur-Seine
        </p>
        <p>
          <strong>Email :</strong> contact@lebinks.fr
        </p>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p>
          <strong>Hébergeur :</strong> [Ex : Vercel, Netlify, OVH...]
        </p>
        <p>
          <strong>Adresse :</strong> [Adresse de l’hébergeur]
        </p>
        <p>
          <strong>Site web :</strong> www.[hebergeur].com
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          L’ensemble du contenu de ce site (textes, images, vidéos, design,
          logo…) est la propriété exclusive de Le Bink's Barbershop ou de ses
          partenaires. Toute reproduction est interdite sans autorisation
          préalable.
        </p>
      </section>

      <section>
        <h2>Données personnelles</h2>
        <p>
          Ce site ne collecte aucune donnée personnelle à des fins commerciales.
          Les avis laissés via le formulaire sont stockés à des fins d’affichage
          uniquement, sans traitement ou exploitation marketing.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          Ce site n'utilise pas de cookies à des fins de suivi ou de publicité.
        </p>
      </section>
    </div>
  );
}
export default PageMentionLegal;
