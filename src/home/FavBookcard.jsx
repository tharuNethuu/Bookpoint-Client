import React from 'react'


// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function FavBookcard() {
  return (
    <div>
      <Swiper
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src="https://i.pinimg.com/originals/17/ba/9e/17ba9e46fb262b66fc5e5edecf7857e9.png" /></SwiperSlide>
        <SwiperSlide><img src="https://i.pinimg.com/originals/0d/64/67/0d646733992b6fbf21900f81200ebf68.png"/></SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default FavBookcard
