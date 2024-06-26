import React from 'react'
import Bannercard from '../home/Bannercard'

function Banner() {
  return (
    <div className='px-4 lg:px-24 bg-black flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
   {/*Leftside*/}
   <div className='md:w-1/2 space-y-7 h-full'>
    <h3 className='text-5xl font-bold leading-snug text-yellow-500'>Discover and <span className='text-5xl font-bold leading-snug text-white'>Distribute</span></h3>
    <p className='md:w-5/ text-white'>Welcome to the ultimate book lover's paradise! Here, you can easily sell your pre-loved books and uncover hidden gems waiting for a new reader. Join our community and contribute to the ever-evolving library of stories, where every book has a chance to inspire someone new.</p>
    <div>
        <input type="search" name="search" placeholder='Search a Book' className='py-2
        px-12 rounded-s-sm outline-none'/>
        <button className='bg-yellow-800 px-6 py-2 text-white font-medium hover:bg-yellow-500
        transition-all ease-in duration-200'>Search</button>
    </div>
    </div>
    {/*Rightside*/}
    
    <div className='md:w-1/2 space-y-2 h-full hidden md:block '>
    <Bannercard/>
   </div>
   </div>
   </div> 
  )
}

export default Banner
