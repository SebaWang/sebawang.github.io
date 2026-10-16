import img_logo_advantech from '../../assets/img/img_logo_advantech.png'
import img_logo_braincharity from '../../assets/img/img_logo_braincharity.png'
import img_logo_camden from '../../assets/img/img_logo_camden.png'
import img_logo_gds from '../../assets/img/img_logo_gds.png'
import img_logo_itic from '../../assets/img/img_logo_itic.png'
import img_logo_mega from '../../assets/img/img_logo_megabank.png'
import img_logo_nhs from '../../assets/img/img_logo_nhs.svg'
import img_logo_sciencegallery from '../../assets/img/img_logo_sciencegallery.png'
import SwiperCard from "../../Components/Component/Swiper";
import ButtonNext from "../../Components/Component/ButtonNext";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <>
      <div className="md:bg-[#e8e8e8] bg-white" id='aboutSection'>
        <div className="container mx-auto pt-24">
          <div className="grid md:grid-cols-2 gap-x-24">
            <div className="text-left">
              <p className="tracking-widest text-[#EA5514] text-subtitle">
                ABOUT
              </p>
              <div className="w-[10px] border-b-[4px] border-[#EA5514] h-[16px]">
                &nbsp;
              </div>
              <div className="mt-12 tracking-wide font-light text-[18px] leading-[30px]">
                <p>
                  Hi, I&rsquo;m a service designer with 5 years&rsquo;
                  experience. I use research to shape strategy and make both
                  physical and digital services work better. To me, service
                  design is a bit like weaving: bringing people and touchpoints
                  from different worlds together and creating meaningful
                  connections.
                </p>
              </div>

              <div className="md:hidden block mt-12 mb-24 grid grid-cols-4 gap-8 ">
                    <div className='opacity-70 flex items-center justify-center duration-300'><img src={img_logo_nhs} className='w-[80px]' alt='NHS' /></div>
                    <div className='opacity-70 flex items-center justify-center duration-300'><img src={img_logo_gds} /></div>
                    <div className='opacity-70 flex items-center justify-center duration-300'><img src={img_logo_camden} /></div>
                    <div className='opacity-70 flex items-center justify-center duration-300'><img src={img_logo_sciencegallery} /></div>
                    <div className='opacity-70 flex items-center justify-center duration-300'><img src={img_logo_braincharity} /></div>
                    <div className='opacity-70 flex items-center justify-center duration-300'><img src={img_logo_mega} className='h-[60px]' /></div>
                    <div className='opacity-70 flex items-center justify-center duration-300'><img src={img_logo_advantech} /></div>
                    <div className='opacity-70 flex items-center justify-center duration-300'><img src={img_logo_itic} /></div>
                
              </div>
              <p className="mt-4 text-[#929292] text-md  hidden md:block">
                Storyteller | Inclusive Designer | Innovation Strategist
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
