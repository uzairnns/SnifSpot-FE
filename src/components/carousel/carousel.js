import React from 'react';
import { Carousel } from 'react-bootstrap';

const ICarousel = (props) => {

  return (
    
    <Carousel>
      {props.images.map((image, index) => (
        <Carousel.Item key={index}>
          <img className="d-block w-100" height='300' src={image} alt="carousel" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ICarousel;

