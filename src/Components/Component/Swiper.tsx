import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import SwiperCore from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
// Importing images
import img_about_01 from "../../assets/img/img_landing_about_01.jpg";
import img_about_02 from "../../assets/img/img_landing_about_02.jpg";
import img_about_03 from "../../assets/img/img_landing_about_03.jpg";
import img_about_04 from "../../assets/img/img_landing_about_04.jpg";

export default function SwiperCard() {
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
                onSwiper={(swiper: SwiperCore) => console.log(swiper)}
                pagination={{
                    el: ".swiper-custom-pagination",
                    clickable: true,
                  }}
                className='w-[450px] h-[450px] bg-black rounded-xl'
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                modules={[Autoplay, Pagination]}
            >
                <SwiperSlide style={{ backgroundImage: `url(${img_about_01})`, backgroundSize: 'cover', backgroundPosition: 'center' }}><p className='absolute left-4 bottom-2 text-white'>Storyteller</p></SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${img_about_02})`, backgroundSize: 'cover', backgroundPosition: 'center' }}><p className='absolute left-4 bottom-2 text-white'>Inclusive Designer</p></SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${img_about_03})`, backgroundSize: 'cover', backgroundPosition: 'center' }}><p className='absolute left-4 bottom-2 text-white'>Innovation Strategist</p></SwiperSlide>
                <SwiperSlide style={{ backgroundImage: `url(${img_about_04})`, backgroundSize: 'cover', backgroundPosition: 'center' }}><p className='absolute left-4 bottom-2 text-white'>Fintech Enthusiast</p></SwiperSlide>
            </Swiper>
            <div className="swiper-custom-pagination"/>
        </>
    );
}
