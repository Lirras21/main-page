import React from 'react';
import './header-style.scss';
import t from '../../locales/ua/header.json';

function Header() {
  return (
    <header className='header'>
      <div className='header-info'>
        <div className='information'>
          <div className='links'>
            <a className='link' href={`tel:${t.headerInfo.number}`}>{t.headerInfo.number}</a>
            <a className='link' href="/">{t.headerInfo.help}</a>
          </div>
          <div>
            <button>{t.headerInfo.login}</button>
            <span>/</span>
            <button>{t.headerInfo.register}</button>
          </div>
        </div>
      </div>
      <div className='nav-bar'>
        <div className='navigation'>
          <img src='/icons/logo.svg' alt='logo' />
          <div className='menu'>
            <button>{t.navBar.news}</button>
            <button>{t.navBar.male}</button>
            <button>{t.navBar.female}</button>
            <button>{t.navBar.accessories}</button>
            <button>{t.navBar.shares}</button>
          </div>
          <div className='functional-panel'>
            <div className='search'>
              <img src='/icons/header/search.svg' alt='search' />
              <input type="text" />
            </div>
            <div className='favorite-and-shop-cart'>
              <img src='/icons/header/favorite.svg' alt='favorite' />
              <img src='/icons/header/shop-cart.svg' alt='shop-cart' />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
