import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./slider.css";

const imageData = [
  {
    label: "SOLUTIONS",
    alt: "image1",
    url: "../img/slide1.jpg",
  },
  {
    label: "SERVICES",
    alt: "image2",
    url: "../img/slide2.jpg",
  },
  {
    label: "FORMATIONS",
    alt: "image3",
    url: "../img/slide3.jpg",
  },
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt}>
    <img src={image.url} alt={image.alt} />
    <p className="legend">{image.label}</p>
  </div>
));

export default function TestingCenter() {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <div>
      <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
      >
        {renderSlides}
      </Carousel>
      {/*DIV des VALEURS*/}
      <div class="wrapper">
        <header>
          <h1>Nos Valeurs</h1>
        </header>
        <section class="columns">
          <div class="column">
            <h2>Ecoute</h2>
            <p>
              L'écoute active est un élément clé dans un environnement
              professionnel. Cela implique de prêter attention à ce que les
              autres disent, de comprendre leur point de vue et de réagir
              adéquatement. Cela peut améliorer les relations professionnelles,
              faciliter la résolution de conflits et augmenter la productivité.
              En outre, l'écoute active peut également aider à améliorer la
              communication et la compréhension mutuelle au sein d'une équipe ou
              d'une organisation.
            </p>
          </div>

          <div class="column">
            <h2>Engagement</h2>
            <p>
              Les employés engagés sont souvent plus motivés, plus productifs et
              plus satisfaits de leur travail, ce qui peut entraîner une
              réduction des coûts liés au turnover et une amélioration de la
              qualité des produits ou services de l'entreprise. Les employeurs
              peuvent favoriser l'engagement en créant un environnement de
              travail positif, en offrant des opportunités de développement
              professionnel et en reconnaissant les réalisations des employés.
            </p>
          </div>

          <div class="column">
            <h2>Anticipation</h2>
            <p>
              Illo quod nemo ratione itaque dolores laudantium error vero
              laborum blanditiis nostrum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sequi ratione architecto cum praesentium
              voluptatibus recusandae?
            </p>
          </div>

          <div class="column">
            <h2>Efficacité</h2>
            <p>
              Illo quod nemo ratione itaque dolores laudantium error vero
              laborum blanditiis nostrum. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sequi ratione architecto cum praesentium
              voluptatibus recusandae?
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
