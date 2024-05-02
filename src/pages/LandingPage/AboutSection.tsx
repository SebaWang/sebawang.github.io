import img_logo_advantech from '../../assets/img/img_logo_advantech.png'
import img_logo_braincharity from '../../assets/img/img_logo_braincharity.png'
import img_logo_camden from '../../assets/img/img_logo_camden.png'
import img_logo_gds from '../../assets/img/img_logo_gds.png'
import img_logo_itic from '../../assets/img/img_logo_itic.png'
import img_logo_mega from '../../assets/img/img_logo_megabank.png'
import img_logo_taishin from '../../assets/img/img_logo_taishinbank.png'
import img_logo_sciencegallery from '../../assets/img/img_logo_sciencegallery.png'
import SwiperCard from "../../Components/Component/Swiper";
import ButtonNext from "../../Components/Component/ButtonNext";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <>
      <div className="md:bg-[#e8e8e8] bg-white">
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

              <div className="md:hidden block mt-12 mb-24 grid grid-cols-4 gap-8 ">
                    <div className='opacity-70 flex items-center justify-center duration-300'><a href='https://www.megabank.com.tw/en-us/english/index/about-mega/history'  target="_blank" rel="noreferrer"><img src={img_logo_mega} className='h-[60px]' /></a></div>
                    <div className='opacity-70 flex items-center justify-center duration-300'><a href='https://www.taishinbank.com.tw/TSB/en/index.html'  target="_blank" rel="noreferrer"><img src={img_logo_taishin} /></a></div>
                    <div className='opacity-70 flex items-center justify-center duration-300'><a href='https://www.youtube.com/watch?v=8PE_UwfUsUc'  target="_blank" rel="noreferrer"><img src={img_logo_advantech} /></a></div>
                    <div className='opacity-70 flex items-center justify-center duration-300'><a href='https://itic.com.tw/'  target="_blank" rel="noreferrer"><img src={img_logo_itic} /></a></div>
                    <div className='opacity-70 flex items-center justify-center duration-300'><a href='https://www.gov.uk/government/organisations/government-digital-service'  target="_blank" rel="noreferrer"><img src={img_logo_gds} /></a></div>
                    <div className='opacity-70 flex items-center justify-center duration-300'><a href='https://www.camden.gov.uk/'  target="_blank" rel="noreferrer"><img src={img_logo_camden} /></a></div>
                    <div className='opacity-70 flex items-center justify-center duration-300'><a href='https://london.sciencegallery.com/'  target="_blank" rel="noreferrer"><img src={img_logo_sciencegallery} /></a></div>
                    <div className='opacity-70 flex items-center justify-center duration-300'><a href='https://www.thebraincharity.org.uk/'  target="_blank" rel="noreferrer"><img src={img_logo_braincharity} /></a></div>
                
              </div>
              <p className="mt-4 text-[#929292] text-md  hidden md:block">
                Storyteller | Inclusive Designer | Innovation Strategist |
                Fintech Enthusiast
              </p>
              <div className="mt-16  hidden md:block">
                <Link to="/about">
                  <ButtonNext text="Learn more" />
                </Link>
              </div>
            </div>
            <div className="text-center  hidden md:block">
              <SwiperCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
