import React from 'react'
import "./partenaire.css";
import images from './images.json';
import images_produits from './images_produits.json'

function valeur() {
  return (
    <div class="grandDiv">
      <div class="title">
        NOS PARTENAIRES
      </div>
      <div class="container py-5">
        <div class="row my-5">
          <div class="col-12">
            <div class="marquee-full-width">
              <div class="marquee-box">
                <div class="marquee">
                
                {images.map((item) => (
                    <img src={process.env.PUBLIC_URL +item.url} alt={item.title} />
                    ))}
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      NOS PRODUITS 
      <div class="container py-5">
          <div class="row my-5">
            <div class="col-12">
              <div class="marquee">
                <div class="marquee-box">
                  <div class="marquee">
                  
                  {images_produits.map((item) => (
                      <img src={process.env.PUBLIC_URL +item.url} alt={item.title} />
                      ))}
                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default valeur