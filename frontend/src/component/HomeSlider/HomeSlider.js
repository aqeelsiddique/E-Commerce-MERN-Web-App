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
    autoplay: true,
    autoplaySpeed: 2000,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />
  };

  const slides = [
    {
      image: "/slider02.jpeg",
      alt: "Slide 2",
      buttonText: "Shop Now",
      buttonLink: "https://goya.everthemes.com/demo-decor/product/norm-wall-clock/",
      text: "Discover our latest collection",
    },
    {
      image: "/slide03.jpeg",
      alt: "Slide 3",
      buttonText: "Shop Now",
      buttonLink: "https://goya.everthemes.com/demo-decor/product/norm-wall-clock/",
      text: "Explore unique designs for your home",
    },
    {
      image: "/slide1.jpeg",
      alt: "Slide 4",
      buttonText: "Shop Now",
      buttonLink: "https://goya.everthemes.com/demo-decor/product/norm-wall-clock/",
      text: "Find the perfect decor for any space",
    },
  ];

  const NextArrow = ({ onClick }) => (
    <div className="arrow next" onClick={onClick}>
      Next
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div className="arrow prev" onClick={onClick}>
      Prev
    </div>
  );

  return (
    <div className="flex">
      <div className="slider-container">
        <Slider {...settings}>
          {slides.map((slide, index) => (
            <div key={index} className="slide-item">
              <img src={slide.image} alt={slide.alt} />
              <div className="slide-content">
                {/* <p className="slide-text">{slide.text}</p> */}
                <a href={slide.buttonLink} className="shop-now-button">
                  {slide.buttonText}
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;