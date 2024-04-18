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
                         6-Week Team Project
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
                    Future Scenarios Design
                    </p>
                    <p className="text-[16px] ">
                    Policy Communication
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
                    Government Digital Service
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">HOW MIGHT WE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-[16px] mt-8">
                    How might the government 
                    </p>
                    <p className="text-[16px] ">
                    effectively engage the general 
                    </p>
                    <p className="text-[16px] ">
                    public and communicate 
                    </p>
                    <p className="text-[16px] ">
                    environmental policies ?
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">OUTCOMES</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-[16px] mt-8">
                    CArtifacts of future scenarios,
                    </p>
                    <p className="text-[16px] ">
                    A Stakeholder Action Chart,
                    </p>
                    <p className="text-[16px] ">
                    A Future Policy Communication 
                    </p>
                    <p className="text-[16px] ">
                    Strategy Report
                    </p>
                </nav>
            </footer>
        </div>
    );
}
