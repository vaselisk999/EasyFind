import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from "./book.lib.png";
import image2 from "./book2.png";
import image3 from "./book3.png";
import image4 from "./book4.png";
import image5 from "./book5.png";
import image6 from "./book6.png";


const spanStyle = {
    padding: '20px',
    background: '#efefef',
    borderRadius: '8px',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px',
    borderRadius: '8px',
    marginTop: '15px'
  }

const images = [
  {
    img: image1,
    caption: "Slide One",
  },
  {
    img: image2,
    caption: "Slide Two",
  },
  {
    img: image3,
    caption: "Slide Three",
  },
  {
    img: image4,
    caption: "Slide Four",
  },

  {
   img: image5,
    caption: "Slide Five",
  },
  {
    img: image6,
    caption: "Slide Six",
  }
];

const Slideshow = () => {
    
  return (
    <div className="slide-container">
        <Slide>
         {images.map((image, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${image.img})` }}>
                <span style={spanStyle}>{image.caption}</span>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
  );
};

export default Slideshow;
