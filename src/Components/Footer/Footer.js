import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
function Footer() {
  return (
    <footer class="footer">
      <div class="container">
        <div class="row">
          <div class="footer-col">
            <img src={process.env.PUBLIC_URL + "../img/LogoFooter.png"} alt="logo de l'entreprise" class="imgFooter" />
            <div class="bc">Services Consulting Formations</div>
          </div>
          <div class="footer-col">
            <h4>Liens utiles</h4>
            <ul>
              <li><NavLink to="/"><button>Acceuil</button></NavLink></li>
              <li><NavLink to="/service"><button>Services</button></NavLink></li>
              <li><NavLink to="/audit_consulting"><button>Audit & Consulting</button></NavLink></li>
              <li><NavLink to="/partenaire"><button>Partenaires</button></NavLink></li>
              <li><NavLink to="/formation"><button>Formations</button></NavLink></li>
              <li><NavLink to="/testing-center"><button>Testing center</button></NavLink></li>
              <li><NavLink to="/offre-emploi"><button>Offres d'emploi</button></NavLink></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Infomartions</h4>
            <p>
              Téléphone :
              +212 522 991 540<br />
              FAX :
              +212 522 989 026<br />
              Siège social :
              227, Boulevard GHANDI, N° 2, 20380-Casablanca.<br />
              Email :
              consulting@agora-technology.com<br />
              services@agora-technology.com<br />
              formations@agora-technology.com<br />
            </p>
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer