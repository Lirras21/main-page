import React from 'react'
import Bestseller from '../component/bestseller/bestseller';
import Footer from '../component/footer/footer';
import Header from '../component/header/header'
import Offer from '../component/offer/offer';
import Reviews from '../component/reviews/reviews';
import Share from '../component/shares/share';
import Slider from '../component/slider/slider';

function HomePage() {
  return (
    <div>
      <Header />
      <Slider />
      <Offer />
      <Bestseller />
      <Share />
      <Reviews />
      <Footer />
    </div>
  )
}

export default HomePage;
