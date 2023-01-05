/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Footer.css'
function Footer() {
  return (
   <footer class="footer">
  <div class="container">
  	<div class="row">
      <div class="footer-col">
        <img src={process.env.PUBLIC_URL + "../img/LogoFooter.png" } alt="logo de l'entreprise" class="imgFooter"/>
        <p>Services Consulting Formations</p>
      </div>
  	 	<div class="footer-col">
  	 		<h4>Liens utiles</h4>
  	 		<ul>
  	 			<li><a href="#">Acceuil</a></li>
  	 			<li><a href="#">A propos</a></li>
  	 			<li><a href="#">Services</a></li>
  	 			<li><a href="#">Solutions</a></li>
          <li><a href="#">Partenaires</a></li>
          <li><a href="#">Contact</a></li>
  	 		</ul>
  	 	</div>
       <div class="footer-col">
        <h4>Infomartions</h4>
        <p>
           Téléphone :
           +212 522 991 540<br/>
           FAX :
           +212 522 989 026<br/>
           Siège social :
           227, Boulevard GHANDI, N° 2, 20380-Casablanca.<br/>
           Email :
           consulting@agora-technology.com<br/>
           services@agora-technology.com<br/>
           formations@agora-technology.com<br/>
       </p>
     </div>
  	</div>
  </div>
</footer>

  )
}

export default Footer