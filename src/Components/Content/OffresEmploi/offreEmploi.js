import React from "react";
import './offreEmploi.css';

function offreEmploi() {
  return (
    <div class="card cardP">
      <div class="card-body">
        <h5 class="card-title"><img class="symbol" src={process.env.PUBLIC_URL + "../img/offre.jpg"} alt="Offres Emploi"/></h5>
        <p class="card-text">Aucune offre n'est disponible pour l'instant.</p>
        <p class="card-text">
          Si l'une des offres suivantes correspond à votre profile, merci de
          nous faire parvenir votre C.V + lettre de motivation
        </p>
        <p class="card-text">
          Nos coordonnées : <br />
          Adresse postale : 227, Bd GHANDI, n 2 20200 Casablanca, Maroc
          <br />
          E-mail : information@agora-technology.com
          <br />
          Fax : +(212) 522-989-026
        </p>
      </div>
    </div>
  );
}

export default offreEmploi;
