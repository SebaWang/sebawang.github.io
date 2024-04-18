import DraggableCard from "../../Components/Component/DragNDropCard";
import { ReactComponent as DecoBubble} from "../../assets/img/img_deco_bubble_social.svg"
export default function SocialSection() {
    
    return (
        <div className='bg-[#e8e8e8]'>
        <div className='container mx-auto pt-48'>
            <div className='grid md:grid-cols-5 gap-x-24 pb-48 '>
                <div className='text-left relative col-span-3'>

            <div className="absolute right-0 -bottom-24"><DecoBubble /></div>
                <DraggableCard>
                    <div className='cursor-grab text-[13px] p-8 border-[1px] border-[#808080] rounded-xl w-[540px] grid grid-cols-11 gap-4 absolute hover:z-50 right-8 bg-[#e8e8e8] z-40'>
                        <p className='col-span-10'>"Sebastian exemplifies effective co-production by nurturing collective and reflective project development. His strong diligence and intelligence shine through, as he engages with people earnestly and delivers remarkable insights and outcomes. It's refreshing to see a designer prioritize genuine inclusivity."<span className='font-bold'> - Natalie, V&A Design Curator</span></p>
                        <div className='h-[30px] bg-[#DFC3C3] rounded-md'>&nbsp;</div>
                    </div>
                </DraggableCard>
                <div className='-rotate-[5deg] relative hover:z-50'>
                <DraggableCard>
                    <div className='cursor-grab text-[13px] p-8 border-[1px] border-[#808080] rounded-xl w-[540px]  grid grid-cols-11 gap-4 absolute hover:z-50 bg-[#e8e8e8] right-24 -bottom-64 z-30'>
                    <p className='col-span-10'>"Wang possesses a keen insight into the diverse personalities of others, always able to communicate effectively between departments, and calmly work through challenges with everyone. Working with him is truly enjoyable and seamless!" <span className='font-bold'>  - Kevin, Project Manager of Advantech</span></p>
                        <div className='h-[30px] bg-[#CAC4C0] rounded-md'>&nbsp;</div>
                    </div>
                </DraggableCard>
                </div>
                <div className='-rotate-[5deg] relative hover:z-50'>
                <DraggableCard>
                    <div className='cursor-grab  text-[13px] p-8 border-[1px] border-[#808080] rounded-xl w-[540px] grid grid-cols-11 gap-4 absolute hover:z-50 bg-[#e8e8e8] -left-0 -top-16 z-20'>
                        
                        <p className='col-span-10'>"It's amazing to see Seb's service design addressing impulsive shopping in ADHD. I'm grateful for his extensive research and deep understanding of dopamine-related issues. His approach is truly compassionate and intelligent."<span className='font-bold'>  - Yolanda, Fashion Photographer and Writer</span></p>
                        <div className='h-[30px] bg-[#DBBCAB] rounded-md'>&nbsp;</div>
                    </div>
                </DraggableCard>
                </div>
                <div className='rotate-[5deg] relative hover:z-50'>
                <DraggableCard>
                    <div className='cursor-grab text-[13px] p-8 border-[1px] border-[#808080] rounded-xl w-[540px] grid grid-cols-11 gap-4 absolute hover:z-50 bg-[#e8e8e8] right-0 -top-24 z-10'>
                        <p className='col-span-10'>"Sebastian's systematic critical reflection, openness, and continuous co-design have resulted in remarkably thoughtful and critical work, highlighting the importance of designing 'with' rather than 'for' disability. His flexibility throughout the project and respect for the uniqueness of each user are truly commendable."<span className='font-bold'>  - Marion, Lecturer of UAL MA Service Design</span></p>
                        
                        <div className='h-[30px] bg-[#C0D6E3] rounded-md'>&nbsp;</div>
                    </div>
                </DraggableCard>
                </div>
                </div>
                <div className='text-left col-span-2'>
                    <p className='tracking-widest text-[#EA5514] text-subtitle'>SOCIAL PROOF</p>
                    <div className='w-[10px] border-b-[4px] border-[#EA5514] h-[16px]'>&nbsp;</div>
                    <div className='mt-12 tracking-wide font-light text-content'>
                        <p>It's a great pleasure to collaborate with diverse individuals on my design journey. Here are some testimonials from colleagues and industry experts who have worked with me.</p>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    );
}
