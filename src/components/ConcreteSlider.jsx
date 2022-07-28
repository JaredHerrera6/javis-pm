import React,{useState} from 'react'
import 'swiper/css'
import {Swiper,SwiperSlide} from 'swiper/react'
import {Navigation,EffectFade, Thumbs} from'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import './product-image-slider.scss'
function ConcreteSlider({slides}) {
const [activeThumb,setActiveThumb] = useState();

  return (
    <div>
       <Swiper
        slidesPerView='auto'
        loop={true}
        infinite = {true}
        spaceBetween={10}
        navigation={true}
        modules = {[Navigation,Thumbs]}
        grabCursor = {true}
        thumbs={{swiper: activeThumb}}
        className = 'products-images-slider'
        >
        {slides.map((item,index) => (
          <SwiperSlide key={index}>
            <img src={item.image} alt="Slider images" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ConcreteSlider
