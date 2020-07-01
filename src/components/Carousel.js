import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';
import Carousel from 'react-bootstrap/Carousel';
import './App.css';

const data = [
    {
     image: require('../img/slide1-2x.png'),
     caption:"Hot issue",
     description:"Earing"
    },
    {
      image: require('../img/slide2-2x.png'),
      caption:"Hot issue",
      description:"Necklace"
     },
     {
      image:require('../img/slide3-2x.png'),
      caption:"Hot issue",
      description:"Jewelry"
     } 
  ]

const BootstrapCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel className="carousel" activeIndex={index} onSelect={handleSelect} interval={4000} pause={false}>
         {data.map((slide, i) => {
          return (
            <Carousel.Item>        
          <img
            className="d-block w-100 slide"
            src={slide.image}
            alt="jewelry"
          />
          <Carousel.Caption>
            <h3>{slide.caption}</h3>
            <p>{slide.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
          )
        })}
        
      </Carousel>
    );
  }
  export default BootstrapCarousel;