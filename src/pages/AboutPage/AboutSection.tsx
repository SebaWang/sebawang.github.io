import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactComponent as DecoBubble } from "../../assets/img/img_deco_bubble_gray.svg";
import SwiperLife from "../../Components/Component/SwiperLife";
import {
  faLinkedin,
  faMedium,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function AboutSection() {
  return (
    <>
      <div className="bg-[#D9D9D9] relative pb-24">
        <div className="absolute left-0 top-0">
          <DecoBubble />
        </div>
        <div className="absolute right-0 top-0 -scale-x-100">
          <DecoBubble />
        </div>
        <div className="container mx-auto pt-24 z-10 relative">
          <div className="grid md:grid-cols-2 gap-x-24">
            <div className="text-left">
              <p className="text-[14px] flex items-center">LIFESTYLE</p>
              <p className="text-subtitle font-bold mt-2">
                MY WORK-LIFE BALANCE
              </p>
              <p className="font-light mt-2 text-content">
                When I'm not at my computer, you'll find me hitting the pavement
                for London Marathon training, flying the drone in the mountains,
                experimenting in the kitchen, diving into business and
                psychology books, or pondering how to integrate design thinking
                into my daily and share it on my Medium. Follow along for more
                stories!
              </p>
              <div className="flex gap-4 justify-start mt-8 ">
                <a href="mailto:sebaswang.design@gmail.com">
                  <div className="flex items-center border-[2px] border-[#2E2E2E] text-[20px] text-[#2E2E2E] p-3 rounded-full opacity-50 hover:opacity-100 cursor-pointer hover:border-[4px] hover:border-[#DD663C] hover:text-[#DD663C] box-border hover:-m-[2px] duration-200 aspect-square">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/sebastian-wang-26369a222/"
                >
                  <div className="flex items-center border-[2px] border-[#2E2E2E] text-[20px] text-[#2E2E2E] p-3 rounded-full opacity-50 hover:opacity-100 cursor-pointer hover:border-[4px] box-border hover:-m-[2px] duration-200 hover:border-[#DD663C] hover:text-[#DD663C] aspect-square">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://medium.com/@SBSTN_WANG"
                >
                  <div className="flex items-center border-[2px] border-[#2E2E2E] text-[18px] text-[#2E2E2E] py-3 px-[10px] rounded-full opacity-50 hover:opacity-100 cursor-pointer hover:border-[4px] box-border hover:-m-[2px] duration-200 hover:border-[#DD663C] hover:text-[#DD663C] aspect-square">
                    <FontAwesomeIcon icon={faMedium} />
                  </div>
                </a>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.instagram.com/haoooo2playhard/"
                >
                  <div className="flex items-center border-[2px] border-[#2E2E2E] text-[20px] text-[#2E2E2E] p-3 rounded-full opacity-50 hover:opacity-100 cursor-pointer hover:border-[4px] box-border hover:-m-[2px] duration-200 hover:border-[#DD663C] hover:text-[#DD663C] aspect-square">
                    <FontAwesomeIcon icon={faInstagram} />
                  </div>
                </a>
              </div>
            </div>
            <div className="text-center">
              <SwiperLife />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
