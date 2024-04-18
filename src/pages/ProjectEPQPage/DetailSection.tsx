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
                        2023
                    </p>
                    <p className="text-[16px] ">
                    3-Month Team Project
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">ROLE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-[16px] mt-8 ">
                    Service Design
                    </p>
                    <p className="text-[16px] ">
                    Workshops Design
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">ORGANIZATION</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-[16px] mt-8 font-semibold">
                    Collaborators
                    </p>
                    <p className="text-[16px] ">
                    Open Book
                    </p>
                    <p className="text-[16px] ">
                    (Goldsmiths University)
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">HOW MIGHT WE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-[16px] mt-8">
                    How might universities offer motivating 
                    </p>
                    <p className="text-[16px] ">
                    sessions for individuals with addiction
                    </p>
                    <p className="text-[16px] ">
                    and former offenders to complete A-
                    </p>
                    <p className="text-[16px] ">
                    level qualifications and reintegrate into
                    </p>
                    <p className="text-[16px] "> 
                    the workforce smoothly?
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">OUTCOMES</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-[16px] mt-8">
                    An A-level Curriculum,
                    </p>
                    <p className="text-[16px] ">
                    A Learning Journal Folder
                    </p>
                </nav>
            </footer>
        </div>
    );
}
