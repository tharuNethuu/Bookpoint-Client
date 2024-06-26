import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

//import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6'

const BookCards = ({headline, books}) => {
   // console.log(books);
    
  return (
    <div className='px-4 lg:px-40'>
    <h2 className='mt-20 text-5xl text-center font-bold text-black my-5 '>{headline}</h2>  

    {/*cards*/}
    <div>
    <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        {
            books.map(book => <SwiperSlide key={book._id}>
                <Link to ={`/book/${book._id}`}>
                    <div className='relative'>
                        <img src={book.imageUrl} alt="" />
                        <div className='absolute top-3 right-3 bg-yellow-600 hover:bg-black p-2 rounded'>
                            <FaCartShopping className='w-4 h-4 text-white'/>
                                
                        
                        </div>
                    </div> 
                    <div>
                        <h3 className='font-semibold'>{book.bookTitle}</h3>
                        <p>{book.authorName}</p>
                      
                    </div>
                </Link>
            </SwiperSlide>)
        }
      </Swiper>

    </div>
    </div>
  )
}

export default BookCards
