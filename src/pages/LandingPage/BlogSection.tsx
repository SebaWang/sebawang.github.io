import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SwiperBlogCard from "../../Components/Component/SwiperCard";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as DecoBubble } from "../../assets/img/img_deco_bubble_gray.svg";

export default function BlogSection() {
  return (
    <>
      <div className="bg-[#D9D9D9] relative">
        <div className="absolute left-0 top-0">
          <DecoBubble />
        </div>
        <div className="absolute right-0 top-0 -scale-x-100">
          <DecoBubble />
        </div>
        <div className="container mx-auto pt-24 relative z-10">
          <div className="grid md:grid-cols-12 gap-x-8 pb-48">
            <div className="col-span-5">
              <p className="text-xs flex items-center">
                <FontAwesomeIcon icon={faMedium} className="mr-1 text-[16px]" />
                BLOG
              </p>
              <p className="text-subtitle font-bold mt-2">
                PRACTICE AND WRITE ABOUT DESIGN IN MY LIFE.
              </p>
              <p className="font-light mt-2 text-content">
                I perceive everyday life as a design process—an iterative
                journey of discovering new beauty, defining inspiring values,
                developing meaningful connections, and delivering impactful
                innovations. Thus, I practice, write, and share how I implement
                design in my life.
              </p>
              <button className=" mt-6 border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:bg-[#DD663C] hover:text-white duration-300">
                READ ON MEDIUM
              </button>
            </div>
            <div className="col-span-7">
              <SwiperBlogCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
