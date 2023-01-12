/* eslint-disable react/style-prop-object */
import React from 'react'
import { NavLink } from 'react-router-dom';
import './Navbar.css';
function Navbar() {
  return (
    <header style={{padding: 0}}>
        <div class="header ">
            <div class="logo">
            <img src={process.env.PUBLIC_URL + "../img/LogoNavbar.png" } class="imgNavbar" alt="Logo Entreprise"/>
            </div>           
            <div class="groupeBtn">
             <NavLink to="/"><button>Acceuil</button></NavLink>
             <NavLink to="/service"><button>Services</button></NavLink>
             <NavLink to="/audit_consulting"><button>Audit & Consulting</button></NavLink>
             <NavLink to="/formation"><button>Formations</button></NavLink>
             <NavLink to="/partenaire"><button>Partenaires</button></NavLink>
             <NavLink to="/testing-center"><button>Testing center</button></NavLink>
             <NavLink to="/offre-emploi"><button>Offres d'emploi</button></NavLink>
            </div>
        </div>
    </header>
)
}

export default Navbar