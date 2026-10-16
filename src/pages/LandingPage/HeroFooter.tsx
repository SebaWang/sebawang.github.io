import img_logo_advantech from '../../assets/img/img_logo_advantech.png'
import img_logo_braincharity from '../../assets/img/img_logo_braincharity.png'
import img_logo_camden from '../../assets/img/img_logo_camden.png'
import img_logo_gds from '../../assets/img/img_logo_gds.png'
import img_logo_itic from '../../assets/img/img_logo_itic.png'
import img_logo_mega from '../../assets/img/img_logo_megabank.png'
import img_logo_nhs from '../../assets/img/img_logo_nhs.svg'
import img_logo_sciencegallery from '../../assets/img/img_logo_sciencegallery.png'


export default function HeroFooter() {
    return (
        <div className='w-full bg-white z-30 relative bg-opacity-70 backdrop-blur '>
            <div className='container mx-auto py-8 text-center container'>
                <p className='text-[#6F6F6F] font-light text-xs'>Multidisciplinary Collaborations With</p>
                <div className='flex justify-between gap-12 mt-6'>
                    <div className='opacity-50 flex items-center justify-center duration-300'><img src={img_logo_nhs} className='w-[80px]' alt='NHS' /></div>
                    <div className='opacity-50 flex items-center justify-center duration-300'><img src={img_logo_gds} className='w-[100px] !max-w-[140px]' /></div>
                    <div className='opacity-50 flex items-center justify-center duration-300'><img src={img_logo_camden} className='w-[120px] !max-w-[140px]' /></div>
                    <div className='opacity-50 flex items-center justify-center duration-300'><img src={img_logo_sciencegallery} className='w-[100px] !max-w-[140px]' /></div>
                    <div className='opacity-50 flex items-center justify-center duration-300'><img src={img_logo_braincharity} className='w-[120px] !max-w-[140px]' /></div>
                    <div className='opacity-50 flex items-center justify-center duration-300'><img src={img_logo_mega} className='w-[50px] !max-w-[100px]' /></div>
                    <div className='opacity-50 flex items-center justify-center duration-300'><img src={img_logo_advantech} className='w-[100px] !max-w-[140px]' /></div>
                    <div className='opacity-50 flex items-center justify-center duration-300'><img src={img_logo_itic} className='w-[100px] !max-w-[140px]' /></div>
                </div>
            </div>
        </div>
    );
  }
  