/* eslint-disable react/style-prop-object */
import React from 'react'
// import '../../public/img/images'
import './Navbar.css';
function Navbar() {
  return (
    <header>
        <div class="header ">
            <div class="logo">

            <img src={process.env.PUBLIC_URL + "../img/LOGO_AGORA_TECHNOLOGY.png" } class="imgLogo1" alt="Logo Entreprise"/>
            <img src={process.env.PUBLIC_URL + "../img/s-c-f.jpg" } alt="logo de l'entreprise" class="imgLogo2"/>
            </div>
            <div class="groupeBtn">
            <button>Acceuil</button>
            <button>Services</button>
            <button>Audit & Consulting</button>
            <button>Formations</button>
            <button>Services</button>
            <button>Partenaires</button>
            <button>Testing center</button>
            <button>Offres d'emploi</button>
            </div>
        </div>
    </header>
)
}

export default Navbar