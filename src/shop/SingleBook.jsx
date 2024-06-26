import {useLoaderData, useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import { FaBook, FaBookAtlas, FaBookBookmark, FaBookJournalWhills, FaBookOpen, FaBookOpenReader, FaCartShopping, FaCashRegister, FaCreditCard, FaDollarSign, FaMoneyBill, FaMoneyBill1, FaMoneyCheckDollar, FaStar, FaTag, FaTags } from 'react-icons/fa6'
import { Button } from "flowbite-react";
import { HiCreditCard, HiShoppingCart } from "react-icons/hi";




const SingleBook =() => {  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/shop');}
    const {_id, bookTitle, offerImage,authorName,bookDescription,category } = useLoaderData();

    useEffect(() => {
      window.scrollTo(0, 50);
  }, []);

  return (
    <div className='px-2 py-5 lg:px-20 bg-black flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center'>
   {/*Leftside*/}
   <div className='md:w-1/2 h-full px-2 lg:px-0 bg-black flex items-center '>
    <div className=' mt-40 px-20 py-2 lg:px-30'>
    <h2 className='text-white text-2xl font-semibold '>{bookTitle}</h2>
    <h1 className='text-yellow-100 text-xl font-medium '>{authorName}</h1>

    <br></br>
      <img src={offerImage} alt="Book Image" className='h-96'/>
    </div>
    </div>
    {/*Rightside*/}
    
   <div className=' mt-60 px-2 lg:px-20 md:w-1/2 space-y-6  '>
   
   <div className='flex items-center py-1'>
      <FaBookOpen className='w-4 h-4 text-yellow-300 mr-2' />
      <p className='text-yellow-100'>Category: {category}</p>
    </div>
   <p className='text-white py-2'>{bookDescription}</p> 
   

   <div className='flex flex-col items-start'>
      <div className='flex items-center mb-1'>
        <FaMoneyCheckDollar className='h-10 w-5 text-yellow-700 mr-2' />
        <p className='text-yellow-600 font-serif text-xl'>Rs.700 /=</p>
      </div>
      <p className='text-yellow-900 text-xs italic leading-tight'>
        *Offer Ends December 31, 2024
      </p>
    </div>


     <div className='flex items justify-between'>
     <div className='flex items-center'>
    
                        <div className='py-5  ' >
                        <Button className=" inline-block text-black font-semibold  bg-yellow-200  rounded-full  hover:bg-yellow-500 transition-all duration-300"       onClick={handleClick}
>
        <HiShoppingCart className="mr-2 h-5 w-5 bg-yellow-200  hover:bg-yellow-500 transition-all duration-300" />
        Secure your copy online now.    </Button>  
      
    </div>
       </div>  
       
      
      
     </div>
       
       
        
      

    </div>
   </div>
   </div>

    
  )
}

export default SingleBook
