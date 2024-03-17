import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FirstSlide from './sliders/first-slide';
import SecondSlide from './sliders/second-slide';
import './slider.scss';

const LeftArrow = ({ onClick }) => {
  return (
    <div className="arrow-left left" onClick={onClick}>
      <img src="/icons/arrow-left.svg" alt="arrow-left" />
    </div>
  );
};

const RightArrow = ({ onClick }) => {
  return (
    <div className="arrow-right right" onClick={onClick}>
      <img src="/icons/arrow-right.svg" alt="arrow-right" />
    </div>
  );
};

function Sliders() {
  const [slider, setSlider] = useState(null);

  const goToNextSlide = () => {
    if (slider) {
      slider.slickNext();
    }
  };

  const goToPrevSlide = () => {
    if (slider) {
      slider.slickPrev();
    }
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <RightArrow onClick={goToNextSlide} />,
    prevArrow: <LeftArrow onClick={goToPrevSlide} />,
    centerMode: true,
    centerPadding: 0
  };

  return (
    <div className='slider'>
      <Slider {...settings} ref={slider => setSlider(slider)}>
        <div>
          <FirstSlide />
        </div>
        <div>
          <SecondSlide />
        </div>
      </Slider>
      <button onClick={goToPrevSlide}></button>
      <button onClick={goToNextSlide}></button>
    </div>
  );
}

export default Sliders;
