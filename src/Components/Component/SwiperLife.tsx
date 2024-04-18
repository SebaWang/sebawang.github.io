import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
// Importing images
import img_about_01 from "../../assets/img/img_life_01.jpg";
import img_about_02 from "../../assets/img/img_life_02.jpg";
import img_about_03 from "../../assets/img/img_life_03.jpg";

export default function SwiperLife() {
    const pagination = {
        clickable: true,
        renderBullet: function (index: number, className: string) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      };
    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper: SwiperCore) => console.log(swiper)}
                pagination={{
                    el: ".swiper-custom-pagination",
                    clickable: true,
                  }}
                className='w-[450px] h-[350px] rounded-xl'
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                modules={[Autoplay, Pagination]}
            >
                <SwiperSlide style={{ backgroundImage: `url(${img_about_01})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${img_about_02})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${img_about_03})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></SwiperSlide>
            </Swiper>
            <div className="swiper-custom-pagination"/>
        </>
    );
}
