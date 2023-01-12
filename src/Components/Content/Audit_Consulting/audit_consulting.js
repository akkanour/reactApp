import React from "react";
import "./audit_consulting.css";

function audit_consulting() {
  return (
    <div class="madiv">
      <p class="firstP">Audit Consulting</p>
      <div class="maDiv">
        <img
          class="maImg"
          src={process.env.PUBLIC_URL + "../PartenaireProduit/auditImg.jpg"}
          alt="audit"
        />
        <div class="D">
          <p>
            Suite à révolution des Systèmes d'informations, AGORA TECHNOLOGY a
            développé l'axe audit et consulting dans le but d'accompagner les
            entreprises dans leurs projets et de les assister dans tous les
            stades de leur mise en oeuvre.
          </p>
          <br />
          <br />
          <p>
            Nos consultants experts mettent leur savoir-faire et
            experience-terrain à votre disposition pour vos proposer les
            solutions adéquates afin d'atteindre vos esperassions et les
            objectifs de vos projets.
          </p>
          <br />
          <b>
            <p>
              Notre démarche de gestion des projets d'audit et consulting
              s'appuient sur les phases suivantes :
            </p>
          </b>
          <br />
          <ul type="square">
            <li>Expression des besoins</li>
            <li>Comprendre les objectifs</li>
            <li>Analyser, auditer et recenser l'existant</li>
            <li>Choix de la solution technologique</li>
            <li>Mise en place de maquette de test</li>
            <li>Pilotage de la solution</li>
            <li>Mise en oeuvre de la solution</li>
            <li>Exploitation de la solution</li>
            <li>Optimisation de la solution</li>
            <li>Formation des utilisateurs</li>
            <li>Maintenance de la solution</li>
          </ul>
        </div>
      </div>
      <br />
      <div class="maDiv">
        <div  class="D">
          <br/>
          <br/>
          <p>
            Dans le cade des missions de consulting AGORA TECHNOLOGY a développé
            les domaines de compétences suivants:
          </p>
          <br />
          <ul type="square">
            <li>Migration des plates-formes Microsoft</li>
            <li>
              Industrialisation des postes de travail et mise en place de
              solutions d'automatisation
            </li>
            <li>Déploiement de Microsoft SMS Server et WSUS</li>
            <li>Migration des systèmes de messagere Microsoft Exchange</li>
            <li>Déploiement et implémentation de Microsoft ISA server</li>
            <li>
              Déploiement et intégration de solution de haute disponibilité,
              Microsoft cluster server
            </li>
            <li>Mise en place des services Microsoft terminal server</li>
          </ul>
        </div>
        <img
          class="maImg "
          src={process.env.PUBLIC_URL + "../PartenaireProduit/consulting.jpg"}
          alt="audit"
        />
      </div>
      <br />
    </div>
  );
}

export default audit_consulting;
