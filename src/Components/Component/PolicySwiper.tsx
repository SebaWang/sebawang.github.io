import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore from "swiper";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
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
  const paginationId = `id-${uuidv4()}`;
  
  return (
    <div className="relative">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop
        navigation={{
          nextEl: `.${nextButtonId}`,
          prevEl: `.${prevButtonId}`,
        }}
        pagination={{
          el: `.${paginationId}`,
          clickable: true,
        }}
        className="w-full aspect-[16/11] rounded-md"
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {imgURLs.map((url, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></SwiperSlide>
        ))}
      </Swiper>
      <div className={paginationId} />
      <div className={`${nextButtonId} swiper-button-next absolute top-1/2 right-2 transform -translate-y-1/2 z-10 text-white text-4xl cursor-pointer`}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
      <div className={`${prevButtonId} swiper-button-prev absolute top-1/2 left-2 transform -translate-y-1/2 z-10 text-white text-4xl cursor-pointer`}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    </div>
  );
};

export default PolicySwiper;
