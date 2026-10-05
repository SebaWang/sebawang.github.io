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
                        2023
                    </p>
                    <p className="text-content ">
                         6-Week Team Project
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
                    Speculative Storytelling
                    </p>
                    <p className="text-content ">
                    Participants Engagement
                    </p>
                </nav>
                <nav className='text-white'>
                    <p className="tracking-[4px] text-content font-bold">ORGANIZATION</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-4 font-semibold">
                    Collaborators
                    </p>
                    <p className="text-content ">
                    Government Digital Service
                    </p>
                </nav>
                <nav className='text-white'>
                    <p className="tracking-[4px] text-content font-bold">HOW MIGHT WE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-4">
                    How can future storytelling give the public and farmers a voice in future environmental policy discussion?
                    </p>
                </nav>
                <nav className='text-white'>
                    <p className="tracking-[4px] text-content font-bold">OUTCOMES</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="max-w-[300px] text-content mt-4">
                    An Interactive Roadshow in GDS,
                    </p>
                    <p className="max-w-[300px] text-content mt-2">
                    A Future Communication Playbook for Citizen Engagement
                    </p>
                </nav>
            </footer>
        </div>
    );
}
