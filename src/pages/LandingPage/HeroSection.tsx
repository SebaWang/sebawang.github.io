import React from 'react';
import img_bg from '../../assets/img/img_bg_cover.jpg';
import img_selfie from '../../assets/img/img_deco_selfie_low.png'
import TextSpaceBetween from '../../Components/Component/TextSpaceBetween';
import HeroFooter from './HeroFooter';
import img_bg_m from "../../assets/img/img_bg_cover_m.jpg";
import { Link } from 'react-router-dom';

export default function HeroSection() {
    
    return (
        <>
            <div
                className='relative hidden md:block'
                style={{
                    backgroundImage: `url(${img_bg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className='container grid grid-cols-4 gap-4 pt-48 mx-auto relative'>
                <img src={img_selfie} className='w-[500px] absolute -bottom-24 left-[46%] 2xl:left-[45%] z-10' />
                    <div className='col-span-4 text-white text-[96px] mb-24 font-serif'>
                        <TextSpaceBetween text='SEBASTIAN   WANG' />
                    </div>
                    <div className='col-span-2 mb-24 relative z-20'>
                        <p className='text-[#DD663C] mb-3 text-xl font-light'>UX & Service Designer</p>
                        <p className='text-black mb-3 text-3xl font-light'>A Strategy Weaver Who Spins</p>
                        <p className='text-black mb-3 text-3xl font-bold'>Smooth Services For The Next Era.</p>
                    </div>
                    <div className='col-span-2 text-right flex flex-col-reverse mb-24 gap-4 font-light'>
                        <Link to='/project'><div><button className='border border-[#595757] py-2 text-[#595757] w-[180px] duration-300 hover:text-white hover:bg-[#BEB7B1] hover:border-[#BEA195]'>View Projects</button></div></Link>
                       <Link to='/contact'><div><button className='bg-[#EC714A] py-2 text-white w-[180px] border-[1px] border-[#EC714A] duration-300 hover:bg-[#E34F10]'>Contact Me</button></div></Link>
                    </div>
                </div>
                <HeroFooter />
            </div>

            <div
        className="relative block md:hidden h-[100svh]"
        style={{
          backgroundImage: `url(${img_bg_m})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
       <div className="h-full w-full px-6 flex items-center justify-end text-center flex-col">
        <p className="text-[45px] font-semibold text-[#FFD1B7] !font-serif tracking-[3px]">SEBASTIAN<br />WANG</p>
        <p className="mt-12 text-white text-[15px]">A Strategy Weaver Who Spins</p>
        <p className="mt-2 text-white font-bold text-[15px]">Smooth Services For The Next Era.</p>
        <a href='#aboutSection'><p className="mt-12 text-[#FF6731] font-semibold text-[16px] tracking-[4px]">ABOUT</p></a>
        <a href='#projectSection'><p className="mt-12 text-[#FF6731] font-semibold text-[16px] tracking-[4px] mb-24">PROJECTS</p></a>
       </div>
      </div>
        </>
    );
}
