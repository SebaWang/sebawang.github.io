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
                    2019
                    </p>
                    <p className="text-content ">
                    4-Month Team Project
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-content font-bold">ROLE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-8 ">
                    Product Strategy
                    </p>
                    <p className="text-content ">
                    UI / UX
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-content font-bold">ORGANIZATION</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content font-semibold mt-8">
                    Corporate
                    </p>
                    <p className="text-content ">
                    Ho-Cheng Group
                    </p>
                    <p className="text-content font-semibold">
                    Collaborator
                    </p>
                    <p className="text-content ">
                    Industrial Technology 
                    </p>
                    <p className="text-content ">
                    Research Institute
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-content font-bold">HOW MIGHT WE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-8">
                    How might we design a clear and 
                    </p>
                    <p className="text-content ">
                    intuitive user journey, enabling various 
                    </p>
                    <p className="text-content ">
                    users to operate the urine analysis toilet
                    </p>
                    <p className="text-content ">
                    within 10 secs toileting time?
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-content font-bold">OUTCOMES</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-8">
                    An User System for the Controller,
                    </p>
                    <p className="text-content ">
                    A Health Management Application
                    </p>
                </nav>
            </footer>
        </div>
    );
}
