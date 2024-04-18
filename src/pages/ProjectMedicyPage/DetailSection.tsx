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
                    2021
                    </p>
                    <p className="text-[16px] ">
                    5-Week Individual Project
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
                    Roadmap Strategy
                    </p>
                    <p className="text-[16px] ">
                    Website UI / UX
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">ORGANIZATION</p>
                    <p className="text-[16px] ">
                    Rug Pull Frens
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">HOW MIGHT WE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-[16px] mt-8">
                    How might NFT traders simplify the 
                    </p>
                    <p className="text-[16px] ">
                    process of evaluating the values of NFTs 
                    </p>
                    <p className="text-[16px] ">
                    without navigating multiple platforms and
                    </p>
                    <p className="text-[16px] ">
                    piecing together fragmented information?
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-[16px] font-bold">OUTCOMES</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-[16px] mt-8">
                    NFT Roadmap,
                    </p>
                    <p className="text-[16px] ">
                    NFT Trading Website,
                    </p>
                    <p className="text-[16px] ">
                    Web3 Learning Workshops
                    </p>
                </nav>
            </footer>
        </div>
    );
}
