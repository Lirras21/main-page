import React from 'react'
import './offer.scss'
import t from '../../locales/ua/offer.json'

function Offer() {
  return (
    <div className='root'>
      <div className='offer'>
        <div className='description'>
          <h1>{t.offer.topic}</h1>
          <p dangerouslySetInnerHTML={{ __html: t.offer.description }}></p>
          <button>{t.offer.catalog}</button>
        </div>
        <div className='img'>
          <img src="/icons/offer-image.svg" alt="offer" />
        </div>
      </div>
    </div>
  )
}

export default Offer
