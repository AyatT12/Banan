// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import image1 from '../../src/Assets/images/login2.png'
import image2 from '../../src/Assets/images/select.png'
import image3 from '../../src/Assets/images/Branches.png'
import image4 from '../../src/Assets/images/owners.png'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
    <Swiper
      dir="rtl"
      spaceBetween={20}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2100,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper TabletSwiper "
    >
        <SwiperSlide>
          <div className="swipeCard">
             <img src={image1} alt='systems'/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipeCard">
            <img src={image2} alt='systems'/>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipeCard">
            <img  src={image3} alt='systems'/>
          </div> 
        </SwiperSlide>
        <SwiperSlide>
          <div className="swipeCard">
            <img src={image4} alt='systems'/>
          </div> 
        </SwiperSlide>
    </Swiper>
  </>
  );
}
