import React from 'react'
import './share.scss';
import t from '../../locales/ua/share.json';

function Share() {
  return (
    <div className='share-root'>
      <div className='share-content'>
        <h1>{t.share.title}</h1>
        <p dangerouslySetInnerHTML={{ __html: t.share.description }}></p>
        <div className='follow'>
          <input type="email" autoComplete='email' placeholder={t.share.input} />
          <button>{t.share.button}</button>
        </div>
      </div>
    </div>
  )
}

export default Share
