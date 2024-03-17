import React from 'react'
import t from '../../../locales/ua/slider.json';
import './sliders.scss'

function FirstSlide() {
  return (
    <div className='slide'>
      <img src='/icons/slider-image.svg' alt='slider' />
      <div className='info'>
        <div className='motto'>
          <h1 dangerouslySetInnerHTML={{ __html: t.slider.motto }} />
          <h2>{t.slider.sponsor}</h2>
        </div>
        <div className='share'>
          <h1>{t.slider.share}</h1>
          <p>{t.slider.timeout}</p>
        </div>
      </div>
    </div>
  )
}

export default FirstSlide

