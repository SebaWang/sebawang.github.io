import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SwiperCard from "../../Components/Component/Swiper";
import ButtonNext from "../../Components/Component/ButtonNext";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <>
      <div className="bg-[#e8e8e8]">
        <div className="container mx-auto pt-24">
          <div className="grid md:grid-cols-2 gap-x-24">
            <div className="text-left">
              <p className="tracking-widest text-[#EA5514] text-subtitle">
                ABOUT
              </p>
              <div className="w-[10px] border-b-[4px] border-[#EA5514] h-[16px]">
                &nbsp;
              </div>
              <div className="mt-12 tracking-wide font-light text-content">
                <p>
                  Hello! I am a diverse and dynamic{" "}
                  <span className="font-bold">Service Designer</span> with 5
                  years of experience in the technology sector, proficient in
                  leveraging service design research tools to generate
                  insightful strategies and optimize online and offline service
                  journeys. I reckon service design is akin to weaving,{" "}
                  <span className="font-bold">
                    deftly interlacing cross-disciplinary stakeholders and
                    touchpoints to create captivating connections.
                  </span>
                </p>
              </div>
              <p className="mt-4 text-gray-400 text-md">
                Storyteller | Inclusive Designer | Innovation Strategist |
                Fintech Enthusiast
              </p>
              <div className="mt-16">
                <Link to="/about">
                  <ButtonNext text="Learn more" />
                </Link>
              </div>
            </div>
            <div className="text-center">
              <SwiperCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
