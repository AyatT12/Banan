import React from 'react';
import partner_1 from '../../src/Assets/images/Rectangle 24.svg';
import partner_2 from '../../src/Assets/images/partenr2.svg';
import partner_3 from '../../src/Assets/images/partenr3.svg';
import partner_4 from '../../src/Assets/images/shomoos2.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';

export default function Partners() {
  return (
    <>
      <Swiper
        dir="rtl"
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={false}
        modules={[Autoplay, FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img  className="Parteners-imgs" src={partner_1} alt="Partner 1" /></SwiperSlide>
        <SwiperSlide><img className="Parteners-imgs" src={partner_2} alt="Partner 2" /></SwiperSlide>
        <SwiperSlide><img className="Parteners-imgs"src={partner_3} alt="Partner 3" /></SwiperSlide>
        <SwiperSlide><img  className="Parteners-imgs" src={partner_4} alt="Partner 4" /></SwiperSlide>
      </Swiper>
    </>
  );
}