import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore from "swiper";
import { Autoplay, Navigation } from "swiper/modules";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface PolicySwiperProps {
  imgURLs: string[];
}

const PolicySwiper: React.FC<PolicySwiperProps> = ({ imgURLs }) => {
  // Generate unique IDs for each swiper component
  const nextButtonId = `id-${uuidv4()}`;
  const prevButtonId = `id-${uuidv4()}`;
  
  return (
    <div className="relative mt-6">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        navigation={{
          nextEl: `.${nextButtonId}`,
          prevEl: `.${prevButtonId}`,
        }}
        className="w-[90%] aspect-[898/459] rounded-md"
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        {imgURLs.map((url, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${url})`,
              backgroundSize: "contain",
              backgroundPosition: "center",
            }}
          ></SwiperSlide>
        ))}
      </Swiper>
      <div className={`${nextButtonId} swiper-button-next absolute top-1/2 right-0 transform -translate-y-1/2 z-10 text-[#333333] text-4xl cursor-pointer`}>
        <FontAwesomeIcon icon={faChevronRight} className="text-gray-400" />
      </div>
      <div className={`${prevButtonId} swiper-button-prev absolute top-1/2 left-0 transform -translate-y-1/2 z-10 text-[#333333] text-4xl cursor-pointer`}>
        <FontAwesomeIcon icon={faChevronLeft} className="text-gray-400" />
      </div>
    </div>
  );
};

export default PolicySwiper;
