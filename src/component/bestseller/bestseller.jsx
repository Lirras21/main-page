import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import './bestseller.scss';
import t from '../../locales/ua/bestseller.json';
import { bestseller } from '../../data/bestseller-items';

function Bestseller() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPage = Math.ceil(bestseller.length / 3);
  const [favorites, setFavorites] = useState([]);

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

  const toggleFavorite = (index) => {
    if (favorites.includes(index)) {
      setFavorites(favorites.filter((favIndex) => favIndex !== index));
    } else {
      setFavorites([...favorites, index]);
    }
  };

  const isFavorite = (index) => favorites.includes(index);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  return (
    <div className='bestseller-root'>
      <div className='bestseller'>
        <div className='bestseller-heder'>
          <h1 className='title'>{t.catalog.title}</h1>
          <div className='current-page'>
            <h2>{currentPage} / {totalPage}</h2>
            <button onClick={prevPage}><img src="/icons/bestseller/long-arrow-left.svg" alt="arrow-left" /></button>
            <button onClick={nextPage}><img src="/icons/bestseller/long-arrow-right.svg" alt="arrow-right" /></button>
          </div>
        </div>
        <Slider ref={sliderRef} {...settings} className='catalog'>
          {bestseller.map((el, index) => (
            <div key={index}>
              <div className='image'>
                <img src={el.src} alt={el.src} />
                <div className='like' onClick={() => toggleFavorite(index)}>
                  <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="17.5" cy="17.5" r="17.5" fill="white" />
                    <path d="M17.4999 25.162C17.2644 25.162 17.0365 25.1316 16.8466 25.0633C13.9446 24.0681 9.33325 20.5355 9.33325 15.3164C9.33325 12.6575 11.4832 10.5 14.1269 10.5C15.4108 10.5 16.6111 11.0014 17.4999 11.8978C18.3888 11.0014 19.5891 10.5 20.8729 10.5C23.5167 10.5 25.6666 12.6651 25.6666 15.3164C25.6666 20.5431 21.0553 24.0681 18.1533 25.0633C17.9633 25.1316 17.7354 25.162 17.4999 25.162ZM14.1269 11.6395C12.1137 11.6395 10.4728 13.2881 10.4728 15.3164C10.4728 20.5051 15.4639 23.3919 17.2188 23.9921C17.3556 24.0377 17.6519 24.0377 17.7886 23.9921C19.5359 23.3919 24.5346 20.5127 24.5346 15.3164C24.5346 13.2881 22.8937 11.6395 20.8805 11.6395C19.7258 11.6395 18.6546 12.1789 17.9633 13.1133C17.7506 13.402 17.2644 13.402 17.0517 13.1133C16.3452 12.1713 15.2816 11.6395 14.1269 11.6395Z" fill={isFavorite(index) ? "orange" : "#343434"} />
                  </svg>
                </div>
              </div>
              <div className='description'>
                <h1>{el.description}</h1>
                <h2>{el.kind}</h2>
                <h2>{el.info}</h2>
                <p>{el.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Bestseller;
