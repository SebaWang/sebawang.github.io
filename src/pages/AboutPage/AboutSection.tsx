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
                <div className="border-[2px] border-black rounded-full p-[24px] cursor-pointer relative text-[24px] hover:border-[4px] hover:-m-[2px] hover:border-[#DD663C] hover:text-[#DD663C]">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/sebastian-wang-26369a222/"
              >
                <div className="border-[2px] border-black rounded-full p-[24px] cursor-pointer relative text-[24px] hover:border-[4px] hover:-m-[2px] hover:border-[#DD663C] hover:text-[#DD663C]">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://medium.com/@SBSTN_WANG"
              >
                <div className="border-[2px] border-black rounded-full p-[24px] cursor-pointer relative text-[24px] hover:border-[4px] hover:-m-[2px] hover:border-[#DD663C] hover:text-[#DD663C]">
                  <FontAwesomeIcon
                    icon={faMedium}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
                </div>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.instagram.com/haoooo2playhard/"
              >
                <div className="border-[2px] border-black rounded-full p-[24px] cursor-pointer relative text-[24px] hover:border-[4px] hover:-m-[2px] hover:border-[#DD663C] hover:text-[#DD663C]">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
                  />
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
