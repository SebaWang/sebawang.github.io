import { ReactElement } from "react";

export default function DetailSection(): ReactElement {
    return (
        // Frosted glass band across the bottom of the cover: radial gradient
        // from a more transparent centre to a less transparent edge
        <div
            className="hidden md:block absolute inset-x-0 bottom-0 z-10 py-8 backdrop-blur-md border-t border-[#2A2A2A]"
            style={{
                background:
                    "radial-gradient(ellipse at center, rgba(20,20,20,0.35) 0%, rgba(20,20,20,0.7) 100%)",
            }}
        >
            <footer className="footer container mx-auto font-light">
                <nav className='text-white'>
                    <p className="tracking-[4px] text-content font-bold">DATE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-4 ">
                    2019
                    </p>
                    <p className="text-content ">
                    4-Month Team Project
                    </p>
                </nav>
                <nav className='text-white'>
                    <p className="tracking-[4px] text-content font-bold">ROLE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-4 ">
                    Product Strategy
                    </p>
                    <p className="text-content ">
                    UI / UX
                    </p>
                </nav>
                <nav className='text-white'>
                    <p className="tracking-[4px] text-content font-bold">ORGANIZATION</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content font-semibold mt-4">
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
                <nav className='text-white'>
                    <p className="tracking-[4px] text-content font-bold">HOW MIGHT WE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-4">
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
                <nav className='text-white'>
                    <p className="tracking-[4px] text-content font-bold">OUTCOMES</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-4">
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
