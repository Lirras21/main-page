import React from 'react'
import './footer.scss'
import t from '../../locales/ua/footer.json'

function Footer() {
  return (
    <div className='footer-root'>
      <div className='content'>
        <div className='footer-information'>
          <div className='contacts'>
            <div>
              <h1>{t.footer.contacts.title}</h1>
              <h2>{t.footer.contacts.number}</h2>
              <h2>{t.footer.contacts.workday}</h2>
              <h2>{t.footer.contacts.dayOff}</h2>
            </div>
            <div className='icons'>
              <img src="/icons/instagram-icon.svg" alt="instagram" />
              <img src="/icons/viber-icon.svg" alt="viber" />
              <img src="/icons/telegram.svg" alt="telegram" />
            </div>
          </div>
          <div className='to-buyers'>
            <h1>{t.footer.toBuyers.title}</h1>
            <h2>{t.footer.toBuyers.payment}</h2>
            <h2>{t.footer.toBuyers.return}</h2>
            <h2>{t.footer.toBuyers.question}</h2>
          </div>
          <div className='account'>
            <h1>{t.footer.account.title}</h1>
            <h2>{t.footer.account.data}</h2>
            <h2>{t.footer.account.history}</h2>
            <h2>{t.footer.account.favorite}</h2>
            <h2>{t.footer.account.mailings}</h2>
          </div>
          <div className='about-us'>
            <h1>{t.footer.about.title}</h1>
            <h2>{t.footer.about.about}</h2>
            <h2>{t.footer.about.news}</h2>
            <h2>{t.footer.about.partner}</h2>
            <h2>{t.footer.about.agreement}</h2>
          </div>
        </div>
        <div className='footer-navigation'>
          <div className='container'>
            <div className='nav-bar'>
              <button>{t.footer.navBar.news}</button>
              <button>{t.footer.navBar.male}</button>
              <button>{t.footer.navBar.female}</button>
              <button>{t.footer.navBar.accessories}</button>
              <button>{t.footer.navBar.shares}</button>
            </div>
            <div className='license'>
              {t.footer.license}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
