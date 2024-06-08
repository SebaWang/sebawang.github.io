import { ReactElement } from "react";

export default function DetailSection(): ReactElement {
    return (
        <div className="bg-[#e8e8e8] pt-24 pb-24 hidden md:block">
            <footer className="footer container mx-auto font-light">
                <nav className='text-black'>
                    <p className="tracking-[4px] text-content font-bold">DATE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-8 ">
                        2023
                    </p>
                    <p className="text-content ">
                         6-Week Team Project
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-content font-bold">ROLE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-8 ">
                    Service Design
                    </p>
                    <p className="text-content ">
                    Speculative Storytelling
                    </p>
                    <p className="text-content ">
                    Participants Engagement
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-content font-bold">ORGANIZATION</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-8 font-semibold">
                    Collaborators
                    </p>
                    <p className="text-content ">
                    Government Digital Service
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-content font-bold">HOW MIGHT WE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-8">
                    How might the government 
                    </p>
                    <p className="text-content ">
                    effectively engage the general 
                    </p>
                    <p className="text-content ">
                    public and communicate 
                    </p>
                    <p className="text-content ">
                    environmental policies?
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-content font-bold">OUTCOMES</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="max-w-[300px] text-content mt-8">
                    An Interactive Exhibition that Attracts 60+ Designers and Researchers in GDS,
                    </p>
                    <p className="max-w-[300px] text-content mt-2">
                    A Future Policy Communication Strategy Report for Citizens and Farmers Engagement
                    </p>
                </nav>
            </footer>
        </div>
    );
}
