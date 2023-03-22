import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from "./../../assets/images/slider/book.lib.png";
import image2 from "./../../assets/images/slider/book2.png";
import image3 from "./../../assets/images/slider/book3.png";
import image4 from "./../../assets/images/slider/book4.png";
import image5 from "./../../assets/images/slider/book5.png";
import image6 from "./../../assets/images/slider/book6.png";


const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  backgroundPosition: "center",
  height: '400px',
}

const images = [
  {
    img: image1,
  },
  {
    img: image2,
  },
  {
    img: image3,
  },
  {
    img: image4,
  },
  {
    img: image5,
  },
  {
    img: image6,
  }
];

const Slideshow = () => {

  return (
    <div className="slide-container">
      <Slide>
        {images.map((image, index) => (
          <div key={index}>
            <div style={{ ...divStyle, 'backgroundImage': `url(${image.img})` }}>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
