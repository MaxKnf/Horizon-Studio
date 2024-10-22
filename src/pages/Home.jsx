import React from "react";
import "./Home.css";
import gLivingRoom from "../assets/images/green_living_room-modified.png";
import blackLivingRoom from "../assets/images/black_livingroom.png";
import niceInterior1 from "../assets/images/nice_interior_1.png";
import niceInterior2 from "../assets/images/nice_interior_2.png";
import niceInterior3 from "../assets/images/nice_interior_3.png";
import TeamSlider from "../components/TeamSlider";

function Home() {
  return (
    <div className="home">
      <section
        className="section-1"
        style={{
          backgroundImage: `url(${blackLivingRoom})`,
        }}
      >
        <h1>
          "Horizon Studio is a creative studio specializing in interior design
          and architecture."
        </h1>
      </section>
      <div className="divider"></div>

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
      <div className="divider"></div>

      <section className="section-3">
        <h2>Process</h2>

        <div>
          <div>
            <img src={niceInterior1} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              sint accusantium iure eveniet temporibus corrupti?
            </p>
          </div>

          <div>
            <img src={niceInterior2} alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
              labore eum. Odit soluta deleniti nihil cumque quis officia
              impedit!
            </p>
          </div>

          <div>
            <img src={niceInterior3} alt="" />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad
              libero velit sit soluta perspiciatis eveniet earum ullam
            </p>
          </div>
        </div>
      </section>
      <div className="divider"></div>

      <section className="section-4">
        <h2>Our Team</h2>
        <TeamSlider />
      </section>
    </div>
  );
}

export default Home;
