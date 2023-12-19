// SliderComponent.jsx
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       // Enable autoplay
    autoplaySpeed: 2000,  // Set the autoplay speed in milliseconds (e.g., 2000ms or 2 seconds)
  };

  const slides = [
    <div key={1} className="slider-container mx-auto">
      <img src="https://placekitten.com/800/400" alt="Slide 1" />
    </div>,
    <div key={2} className="slide-item">
      <img src="https://placekitten.com/800/401" alt="Slide 2" />
    </div>,
     <div key={3} className="slide-item">
     <img src="https://placekitten.com/800/401" alt="Slide 3" />
   </div>,
    <div key={4} className="slide-item">
    <img src="https://placekitten.com/800/401" alt="Slide 4" />
  </div>,
    // Add more slides as needed
  ];

  return (
    <div className="slider-container mx-auto">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>{slide}</div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
