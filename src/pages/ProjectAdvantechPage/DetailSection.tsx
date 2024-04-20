import { ReactElement } from "react";

export default function DetailSection(): ReactElement {
    return (
        <div className="bg-[#e8e8e8] pt-24 pb-24">
            <footer className="footer container mx-auto font-light">
                <nav className='text-black'>
                    <p className="tracking-[4px] text-content font-bold">DATE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-8 ">
                    2020
                    </p>
                    <p className="text-content ">
                    1-Year Team Project
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
                    <p className="text-content font-bold mt-8">
                    Corporate
                    </p>
                    <p className="text-content ">
                    Advantech
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-content font-bold">HOW MIGHT WE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-8">
                    How might we seamlessly integrate the 
                    </p>
                    <p className="text-content ">
                    telemedical hardware and software to 
                    </p>
                    <p className="text-content ">
                    enable medical professionals to conduct 
                    </p>
                    <p className="text-content ">
                    more precise diagnoses and enhance 
                    </p>
                    <p className="text-content ">
                    communication experiences?
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-content font-bold">OUTCOMES</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-8">
                    Telemedical Inpatient Service,
                    </p>
                    <p className="text-content ">
                    Telemedical Outpatient Service,
                    </p>
                    <p className="text-content ">
                    E-commerce configurator website
                    </p>
                </nav>
            </footer>
        </div>
    );
}
