import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SwiperBlogCard from "../../Components/Component/SwiperCard";
import { faPenNib } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as DecoBubble } from "../../assets/img/img_deco_bubble_gray.svg";
import { Link } from "react-router-dom";

export default function BlogSection() {
  return (
    <>
      <div className="bg-[#D9D9D9] relative hidden md:block">
        <div className="absolute left-0 top-0">
          <DecoBubble />
        </div>
        <div className="absolute right-0 top-0 -scale-x-100">
          <DecoBubble />
        </div>
        <div className="container mx-auto pt-24 relative z-10">
          <div className="grid md:grid-cols-12 gap-x-8 pb-32">
            <div className="col-span-5">
              <p className="text-xs flex items-center">
                <FontAwesomeIcon
                  icon={faPenNib}
                  className="mr-1 text-content"
                />
                WRITING
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
              <Link to="/writing">
                <button className=" mt-6 border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:bg-[#DD663C] hover:text-white duration-300">
                  GO FOR A READ
                </button>
              </Link>
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
