import img_logo_advantech from '../../assets/img/img_logo_advantech.png'
import img_logo_braincharity from '../../assets/img/img_logo_braincharity.png'
import img_logo_camden from '../../assets/img/img_logo_camden.png'
import img_logo_gds from '../../assets/img/img_logo_gds.png'
import img_logo_itic from '../../assets/img/img_logo_itic.png'
import img_logo_mega from '../../assets/img/img_logo_megabank.png'
import img_logo_taishin from '../../assets/img/img_logo_taishinbank.png'
import img_logo_sciencegallery from '../../assets/img/img_logo_sciencegallery.png'


export default function HeroFooter() {
    return (
        <div className='w-full bg-white z-30 relative bg-opacity-70 backdrop-blur '>
            <div className='container mx-auto py-8 text-center container'>
                <p className='text-[#6F6F6F] font-light text-xs'>Multidisciplinary Collaborations With</p>
                <div className='flex justify-between gap-12 mt-6'>
                    <div className='opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center duration-300'><a href='https://www.taishinbank.com.tw/TSB/en/index.html'  target="_blank" rel="noreferrer"><img src={img_logo_mega} className='w-[50px] !max-w-[100px]' /></a></div>
                    <div className='opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center duration-300'><a href='https://www.megabank.com.tw/en-us/english/index/about-mega/history'  target="_blank" rel="noreferrer"><img src={img_logo_taishin} className='w-[100px] !max-w-[140px]' /></a></div>
                    <div className='opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center duration-300'><a href='https://www.youtube.com/watch?v=8PE_UwfUsUc'  target="_blank" rel="noreferrer"><img src={img_logo_advantech} className='w-[100px] !max-w-[140px]' /></a></div>
                    <div className='opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center duration-300'><a href='https://itic.com.tw/'  target="_blank" rel="noreferrer"><img src={img_logo_itic} className='w-[100px] !max-w-[140px]' /></a></div>
                    <div className='opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center duration-300'><a href='https://www.gov.uk/government/organisations/government-digital-service'  target="_blank" rel="noreferrer"><img src={img_logo_gds} className='w-[50px] !max-w-[140px]' /></a></div>
                    <div className='opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center duration-300'><a href='https://www.camden.gov.uk/'  target="_blank" rel="noreferrer"><img src={img_logo_camden} className='w-[100px] !max-w-[140px]' /></a></div>
                    <div className='opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center duration-300'><a href='https://london.sciencegallery.com/'  target="_blank" rel="noreferrer"><img src={img_logo_sciencegallery} className='w-[100px] !max-w-[140px]' /></a></div>
                    <div className='opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center duration-300'><a href='https://www.thebraincharity.org.uk/'  target="_blank" rel="noreferrer"><img src={img_logo_braincharity} className='w-[100px] !max-w-[140px]' /></a></div>
                </div>
            </div>
        </div>
    );
  }
  