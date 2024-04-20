import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore from 'swiper';
import { Navigation } from 'swiper/modules';
import { EffectCoverflow } from 'swiper/modules';

import 'swiper/css/effect-coverflow';


// Importing images
import img_blog_01 from "../../assets/img/img_landing_blog_01.webp";
import img_blog_02 from "../../assets/img/img_landing_blog_02.webp";
import img_blog_03 from "../../assets/img/img_landing_blog_03.webp";

export default function SwiperBlogCard() {
    return (
        <>
            <Swiper
            effect={'coverflow'}
            spaceBetween={-225}
            navigation={true}
            centeredSlides={true}
                slidesPerView={2}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper: SwiperCore) => console.log(swiper)}
                className='w-full !py-[50px]'
                loop={true}
                modules={[EffectCoverflow, Navigation] }

                coverflowEffect= {{
                    rotate: 0,
                    stretch: 0,
                    depth: 20,
                    modifier: 10,
                    slideShadows: false
                }}
            >
                <SwiperSlide>
                    <div className='card bg-white rounded-md w-[450px] mx-auto shadow-md'>
                        <div className="max-h-80  overflow-hidden relative rounded-t-md">
                        <div className='absolute top-0 left-0 bottom-0 right-0 bg-yellow-800 bg-opacity-30 flex justify-center items-center text-white text-[26px] px-10'>
                        What Financial Vulnerability Is

                        </div>
                            <img className="w-full object-cover" src={img_blog_01} />
                        </div>
                        <div className='p-6 text-content font-bold'>Design for Financial Vulnerability #1
                        <p className='text-xs font-light text-gray-700 mt-2'>What is financial vulnerability? Why does it matter? How does it happen? Can service design help improve the issue?</p></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card bg-white rounded-md w-[450px] mx-auto  shadow-md'>
                        <div className="max-h-80  overflow-hidden relative rounded-t-md">
                        <div className='absolute top-0 left-0 bottom-0 right-0 bg-yellow-800 bg-opacity-30 flex justify-center items-center text-white text-[26px] px-10'>
                        Research through Design: The Spirit of Iteration

                        </div>
                            <img className="w-full object-cover" src={img_blog_02} />
                        </div>
                        <div className='p-6 text-content font-bold'>Design for Futures #3
                        <p className='text-xs font-light text-gray-700 mt-2'>What is Research through Design? What is its value? How did I conduct it in my design?</p></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card bg-white rounded-md w-[450px] mx-auto  shadow-md'>
                        <div className="max-h-80  overflow-hidden relative rounded-t-md">
                        <div className='absolute top-0 left-0 bottom-0 right-0 bg-yellow-800 bg-opacity-30 flex justify-center items-center text-white text-[26px] px-10'>
                        5 Tips to Tell A Good Story

                        </div>
                            <img className="w-full object-cover" src={img_blog_03} />
                        </div>
                        <div className='p-6 text-content font-bold'>Design for Futures #4
                        <p className='text-xs font-light text-gray-700 mt-2'>Good storytelling should provoke various interactions and opinions beyond ranking the idea as good or bad.</p></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card bg-white rounded-md w-[450px] mx-auto shadow-md'>
                        <div className="max-h-80  overflow-hidden relative rounded-t-md">
                        <div className='absolute top-0 left-0 bottom-0 right-0 bg-yellow-800 bg-opacity-50 flex justify-center items-center text-white text-[26px] px-10'>
                        What Financial Vulnerability Is

                        </div>
                            <img className="w-full object-cover" src={img_blog_01} />
                        </div>
                        <div className='p-6 text-content font-bold'>Design for Financial Vulnerability #1
                        <p className='text-xs font-light text-gray-700 mt-2'>What is financial vulnerability? Why does it matter? How does it happen? Can service design help improve the issue?</p></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card bg-white rounded-md w-[450px] mx-auto  shadow-md'>
                        <div className="max-h-80  overflow-hidden relative rounded-t-md">
                        <div className='absolute top-0 left-0 bottom-0 right-0 bg-yellow-800 bg-opacity-50 flex justify-center items-center text-white text-[26px] px-10'>
                        Research through Design: The Spirit of Iteration

                        </div>
                            <img className="w-full object-cover" src={img_blog_02} />
                        </div>
                        <div className='p-6 text-content font-bold'>Design for Futures #3
                        <p className='text-xs font-light text-gray-700 mt-2'>What is Research through Design? What is its value? How did I conduct it in my design?</p></div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='card bg-white rounded-md w-[450px] mx-auto  shadow-md'>
                        <div className="max-h-80  overflow-hidden relative rounded-t-md">
                        <div className='absolute top-0 left-0 bottom-0 right-0 bg-yellow-800 bg-opacity-50 flex justify-center items-center text-white text-[26px] px-10'>
                        5 Tips to Tell A Good Story

                        </div>
                            <img className="w-full object-cover" src={img_blog_03} />
                        </div>
                        <div className='p-6 text-content font-bold'>Design for Futures #4
                        <p className='text-xs font-light text-gray-700 mt-2'>Good storytelling should provoke various interactions and opinions beyond ranking the idea as good or bad.</p></div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
