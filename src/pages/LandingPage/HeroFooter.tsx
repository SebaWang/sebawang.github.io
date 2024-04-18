import img_logo_advantech from '../../assets/img/img_logo_advantech.png'
import img_logo_braincharity from '../../assets/img/img_logo_braincharity.png'
import img_logo_camden from '../../assets/img/img_logo_camden.png'
import img_logo_gds from '../../assets/img/img_logo_gds.png'
import img_logo_itic from '../../assets/img/img_logo_itic.png'
import img_logo_sciencegallery from '../../assets/img/img_logo_sciencegallery.png'


export default function HeroFooter() {
    return (
        <div className='w-full bg-white z-30 relative bg-opacity-70 backdrop-blur '>
            <div className='container mx-auto py-8 text-center w-2/3'>
                <p className='text-[#6F6F6F] font-light text-xs'>Multidisciplinary Collaborations With</p>
                <div className='flex justify-between gap-12 mt-6'>
                    <div className='opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center duration-300'><a href='https://www.youtube.com/watch?v=8PE_UwfUsUc'><img src={img_logo_advantech} width='80%' /></a></div>
                    <div className='opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center duration-300'><a href='https://itic.com.tw/'><img src={img_logo_itic} width='80%' /></a></div>
                    <div className='opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center duration-300'><a href='https://www.gov.uk/government/organisations/government-digital-service'><img src={img_logo_gds} width='80%' /></a></div>
                    <div className='opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center duration-300'><a href='https://www.camden.gov.uk/'><img src={img_logo_camden} width='80%' /></a></div>
                    <div className='opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center duration-300'><a href='https://london.sciencegallery.com/'><img src={img_logo_sciencegallery} width='80%' /></a></div>
                    <div className='opacity-50 hover:opacity-100 cursor-pointer flex items-center justify-center duration-300'><a href='https://www.thebraincharity.org.uk/'><img src={img_logo_braincharity} width='80%' /></a></div>
                </div>
            </div>
        </div>
    );
  }
  