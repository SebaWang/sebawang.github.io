import { ReactElement } from "react";

export default function DetailSection(): ReactElement {
    return (
        <div className="bg-[#e8e8e8] pt-24 pb-24">
            <footer className="footer container mx-auto font-light">
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">DATE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-[16px] mt-8 ">
                    2019
                    </p>
                    <p className="text-[16px] ">
                    4-Month Team Project
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">ROLE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-[16px] mt-8 ">
                    Product Strategy
                    </p>
                    <p className="text-[16px] ">
                    UI / UX
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">ORGANIZATION</p>
                    <p className="text-[16px] font-semibold">
                    Corporate
                    </p>
                    <p className="text-[16px] ">
                    Ho-Cheng Group
                    </p>
                    <p className="text-[16px] font-semibold">
                    Collaborator
                    </p>
                    <p className="text-[16px] ">
                    Industrial Technology 
                    </p>
                    <p className="text-[16px] ">
                    Research Institute
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">HOW MIGHT WE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-[16px] mt-8">
                    How might we design a clear and 
                    </p>
                    <p className="text-[16px] ">
                    intuitive user journey, enabling various 
                    </p>
                    <p className="text-[16px] ">
                    users to operate the urine analysis toilet
                    </p>
                    <p className="text-[16px] ">
                    within 10 secs toileting time?
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">OUTCOMES</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-[16px] mt-8">
                    An User System for the Controller,
                    </p>
                    <p className="text-[16px] ">
                    A Health Management Application
                    </p>
                </nav>
            </footer>
        </div>
    );
}
