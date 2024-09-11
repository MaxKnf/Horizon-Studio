import React from "react";
import "./Home.css";
import gLivingRoom from "../assets/images/green_living_room-modified.png";
import blackLivingRoom from "../assets/images/black_livingroom.png";

// Composant fonctionnel Home qui affiche les différentes sections de présentation de l'agence de design d'intérieur
// Chaque section a une image d'arrière-plan et du contenu textuel spécifique
function Home() {
  return (
    <div className="home">
      {/* Première section avec une image de salon noir en arrière-plan et une citation */}
      <section
        className="section-1"
        style={{
          backgroundImage: `url(${blackLivingRoom})`,
        }}
      >
        <p>"Lorem ipsum dolor sit, amet consectetur adipisicing elit"</p>
      </section>

      {/* Deuxième section avec une image de salon vert en arrière-plan, un titre et une liste d'éléments */}
      <section
        className="section-2"
        style={{
          backgroundImage: `url(${gLivingRoom})`,
        }}
      >
        <h2>Interior Design</h2>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Senectus diam ridiculus lorem</li>
          <li>Mi facilisi per sed neque magna</li>
          <li>Placerat tempus interdum id et</li>
          <li>Placerat tempus leo nunc nulla</li>
        </ul>
      </section>

      <section>Section 3</section>
    </div>
  );
}

export default Home;
