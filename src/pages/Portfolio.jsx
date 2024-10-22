import React from "react";
import "./Portfolio.css";
import image1 from "../assets/images/image_galery_1.jpg";
import image2 from "../assets/images/image_galery_2.jpg";
import image3 from "../assets/images/image_galery_3.jpg";
import image4 from "../assets/images/image_galery_4.jpg";
import image5 from "../assets/images/image_galery_5.jpg";
import image6 from "../assets/images/image_galery_6.jpg";
import image7 from "../assets/images/image_galery_7.jpg";
import image8 from "../assets/images/image_galery_8.jpg";
import image9 from "../assets/images/image_galery_9.jpg";
import image10 from "../assets/images/image_galery_10.jpg";
import image11 from "../assets/images/image_galery_11.jpg";
import image12 from "../assets/images/image_galery_12.jpg";

function Portfolio() {
  const imagesList = [
    { name: "Image_galery_1", link: image1 },
    { name: "Image_galery_2", link: image2 },
    { name: "Image_galery_3", link: image3 },
    { name: "Image_galery_4", link: image4 },
    { name: "Image_galery_5", link: image5 },
    { name: "Image_galery_6", link: image6 },
    { name: "Image_galery_7", link: image7 },
    { name: "Image_galery_8", link: image8 },
    { name: "Image_galery_9", link: image9 },
    { name: "Image_galery_10", link: image10 },
    { name: "Image_galery_11", link: image11 },
    { name: "Image_galery_12", link: image12 },
  ];
  return (
    <div className="portfolio">
      <h1>Portfolio</h1>
      <div className="portfolio-images">
        {imagesList.map((image) => {
          return <img src={image.link} alt={image.name} />;
        })}
      </div>
    </div>
  );
}

export default Portfolio;
