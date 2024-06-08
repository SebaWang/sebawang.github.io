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
                    5-Month Individual Project
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
                    Marketing Strategy
                    </p>
                    <p className="text-content ">
                    UI / UX Design
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
                    <p className="text-content max-w-[200px]">
                    ADHD Charities in London & Liverpool
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-content font-bold">HOW MIGHT WE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-8">
                    How might young adults with 
                    </p>
                    <p className="text-content ">
                    ADHD manage symptoms and 
                    </p>
                    <p className="text-content ">
                    curb impulsive shopping behavior
                    </p>
                    <p className="text-content ">
                    without a decade of learning?
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-content font-bold">OUTCOMES</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="max-w-[300px] text-content mt-8">
                    A Chrome Extension for Dopamine Activities Practice and Intervention,
                    </p>
                    <p className="max-w-[300px] text-content mt-2">
                    A Physical Financial Learning Course which Attracts 150+ ADHD people
                    </p>
                </nav>
            </footer>
        </div>
    );
}
