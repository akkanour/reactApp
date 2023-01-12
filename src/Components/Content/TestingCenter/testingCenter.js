import React from 'react';
import './testingCenter.css';

function testingCenter() {
  return (
    <div class="grid">
    <img class="symbol" src={process.env.PUBLIC_URL + "../img/offre.jpg"} alt="Offres Emploi"/>
    <div class="desc">
      <h2>Premier Craftsmanship</h2>
      <p>
        Our watches are only sourced from the finest gems, so you know you're getting your money's worth. Our craftsmen are the most experienced in their field with robust training and rare techniques that add a unique touch and make your watch shine.</p>
    </div>
  </div>
  )
}

export default testingCenter