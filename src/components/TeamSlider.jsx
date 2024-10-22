import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./TeamSlider.css";
import jersy from "../assets/images/jersy.jpg";
import karolina from "../assets/images/karolina.jpg";
import cottonbro from "../assets/images/cottonbro.jpg";
import tony from "../assets/images/tony.jpg";
import shvetsa from "../assets/images/shvetsa.jpg";
import tima from "../assets/images/Tima.jpg";

function TeamSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 5,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="member" style={{ display: "flex" }}>
          <h3>Karolina</h3>
          <img src={karolina} alt="" />
          <p className="description">
            Karolina Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Assumenda atque dicta, deserunt reprehenderit, molestias nulla.
          </p>
        </div>
        <div className="member" style={{ display: "flex" }}>
          <h3>Tony</h3>
          <img src={tony} alt="" />
          <p className="description">
            Tony Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Assumenda atque dicta, deserunt reprehenderit, molestias nulla.
          </p>
        </div>
        <div className="member" style={{ display: "flex" }}>
          <h3>Cottonbro</h3>
          <img src={cottonbro} alt="" />
          <p className="description">
            Cottonbro Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Assumenda atque dicta, deserunt reprehenderit, molestias nulla.
          </p>
        </div>
        <div className="member" style={{ display: "flex" }}>
          <h3>Shvetsa</h3>
          <img src={shvetsa} alt="" />
          <p className="description">
            Shvetsa Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Assumenda atque dicta, deserunt reprehenderit, molestias nulla.
          </p>
        </div>
        <div className="member" style={{ display: "flex" }}>
          <h3>Jersy</h3>
          <img src={jersy} alt="" />
          <p className="description">
            Jersy Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Assumenda atque dicta, deserunt reprehenderit, molestias nulla.
          </p>
        </div>
        <div className="member" style={{ display: "flex" }}>
          <h3>Tima</h3>
          <img src={tima} alt="" />
          <p className="description">
            Tima Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Assumenda atque dicta, deserunt reprehenderit, molestias nulla.
          </p>
        </div>
      </Slider>
    </div>
  );
}

export default TeamSlider;
