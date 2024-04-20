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
                    2021
                    </p>
                    <p className="text-content ">
                    5-Week Individual Project
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
                    Roadmap Strategy
                    </p>
                    <p className="text-content ">
                    Website UI / UX
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-content font-bold">ORGANIZATION</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content  mt-8">
                    Rug Pull Frens
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-content font-bold">HOW MIGHT WE</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-8">
                    How might NFT traders simplify the 
                    </p>
                    <p className="text-content ">
                    process of evaluating the values of NFTs 
                    </p>
                    <p className="text-content ">
                    without navigating multiple platforms and
                    </p>
                    <p className="text-content ">
                    piecing together fragmented information?
                    </p>
                </nav>
                <nav className='text-black'>
                    <p className="tracking-[4px] text-content font-bold">OUTCOMES</p>
                    <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
                        &nbsp;
                    </div>
                    <p className="text-content mt-8">
                    NFT Roadmap,
                    </p>
                    <p className="text-content ">
                    NFT Trading Website,
                    </p>
                    <p className="text-content ">
                    Web3 Learning Workshops
                    </p>
                </nav>
            </footer>
        </div>
    );
}
