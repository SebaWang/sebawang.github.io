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
                    2020
                    </p>
                    <p className="text-content ">
                    1-Year Team Project
                    </p>
                </nav>
                <nav className='text-white'>
                    <p className="tracking-[4px] text-content font-bold">ROLE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-4 ">
                    Service Design
                    </p>
                    <p className="text-content ">
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
                    <p className="text-content font-bold mt-4">
                    Corporate
                    </p>
                    <p className="text-content ">
                    Advantech
                    </p>
                </nav>
                <nav className='text-white'>
                    <p className="tracking-[4px] text-content font-bold">HOW MIGHT WE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-4">
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
                <nav className='text-white'>
                    <p className="tracking-[4px] text-content font-bold">OUTCOMES</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-4">
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
