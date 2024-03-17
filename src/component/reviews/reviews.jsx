import React, { useState, useRef } from 'react';
import './reviews.scss';
import Slider from 'react-slick';
import t from '../../locales/ua/reviews.json';
import { reviewsItems } from '../../data/reviews-items'

function Reviews() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(reviewsItems.length / 4);

  const sliderRef = useRef(null);

  const prevPage = () => {
    if (currentPage === 1) {
      setCurrentPage(totalPage);
    } else {
      setCurrentPage((prevPage) => prevPage - 1);
    }
    sliderRef.current.slickPrev();
  };

  const nextPage = () => {
    if (currentPage === totalPage) {
      setCurrentPage(1);
    } else {
      setCurrentPage((prevPage) => prevPage + 1);
    }
    sliderRef.current.slickNext();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4
  };

  return (
    <div className='reviews-root'>
      <div className='reviews'>
        <div className='reviews-heder'>
          <h1 className='title'>{t.review.title}</h1>
          <div className='current-page'>
            <h2>{currentPage} / {totalPage}</h2>
            <button onClick={prevPage}><img src="/icons/bestseller/long-arrow-left.svg" alt="arrow-left" /></button>
            <button onClick={nextPage}><img src="/icons/bestseller/long-arrow-right.svg" alt="arrow-right" /></button>
          </div>
        </div>
        <Slider ref={sliderRef} {...settings} className='reviews-content'>
          {reviewsItems.map((el, index) => (
            <div>
              <div className='content' key={index}>
                <div className='customer'>
                  <img src={el.customer} alt="customer" />
                  <div className='nickname'>
                    <img src={el.stars} alt="stars" />
                    <h1>{el.name}</h1>
                  </div>
                </div>
                <div className='text'>
                  {el.text}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Reviews


