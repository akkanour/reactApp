import React from "react";
import "./formation.css";

function formation() {
  return (
    <div class="madiv">
      <p class="firstP">Nos Formations</p>
      <div class="maDiv">
        <div class="D">
          <p>
            Notre vision de l'aspect formation dépasse le cadre des formations classique
            au transfert de compétence de nos consultants à travers leur expérience terrain.
            <br/><b>AGORA TECHNOLOGY</b> forme vos équipes sur l'ensemble des technologies employées
            en se basant sur des cas pratiques correspondant à votre environnement informatique
            afin de vous aider à batir une infrastructure pérenne et efficace.
          </p>
          <br />
          <br />
          <p>
            <b>
                Nos prestations formation couvrent les secteurs d'expertises suivants :
            </b>
          </p>
          <br />
          <ul type="square">
            <li>infrastructure</li>
            <li>Messagerie et collaboration</li>
            <li>Migration</li>
            <li>Haute disponibilité</li>
            <li>Audit & sécurité</li>
          </ul>
        </div>
        <img
          class="maImg"
          src={process.env.PUBLIC_URL + "../PartenaireProduit/formation.jpg"}
          alt="audit"
        />
      </div>
      <br />
      <br />
    </div>
  );
}

export default formation;
