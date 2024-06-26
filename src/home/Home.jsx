import React, { useEffect } from 'react'
import Banner from '../components/Banner';
import BestSellerBooks from './BestSellBooks';
import FavBook from './FavBook';
import PromoBanner from './PromoBanner';
const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 100);})

  return (
    <div className=''>
      <Banner/>
      <BestSellerBooks/>
      <FavBook/>
      <PromoBanner/>

     {/*  <div className='h-screen'></div
      <div className='h-screen bg-yellow-900'></div>*/}
    </div>

  )
}

export default Home
