import { ReactElement } from "react";

export default function DetailSection(): ReactElement {
  return (
    <div className="bg-[#e8e8e8] pt-24 pb-24 hidden md:block">
      <footer className="footer container mx-auto font-light">
        <nav className="text-black">
          <p className="tracking-[4px] text-content font-bold">DATE</p>
          <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
            &nbsp;
          </div>
          <p className="text-content mt-8">Date to be added</p>
          <p className="text-content">Project length to be added</p>
        </nav>
        <nav className="text-black">
          <p className="tracking-[4px] text-content font-bold">ROLE</p>
          <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
            &nbsp;
          </div>
          <p className="text-content mt-8">Service Design</p>
          <p className="text-content">Agile Delivery</p>
          <p className="text-content">GDS Service Assessment</p>
        </nav>
        <nav className="text-black">
          <p className="tracking-[4px] text-content font-bold">
            ORGANIZATION
          </p>
          <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
            &nbsp;
          </div>
          <p className="text-content mt-8 font-semibold">Collaborators</p>
          <p className="text-content max-w-[200px]">
            Organisation to be added
          </p>
        </nav>
        <nav className="text-black">
          <p className="tracking-[4px] text-content font-bold">
            HOW MIGHT WE
          </p>
          <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
            &nbsp;
          </div>
          <p className="text-content mt-8 max-w-[260px]">
            How might a university improve recruitment and training services
            for its research staff, and evaluate them against GDS service
            standards?
          </p>
        </nav>
        <nav className="text-black">
          <p className="tracking-[4px] text-content font-bold">OUTCOMES</p>
          <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
            &nbsp;
          </div>
          <p className="max-w-[300px] text-content mt-8">
            Outcome to be added,
          </p>
          <p className="max-w-[300px] text-content mt-2">
            Outcome to be added
          </p>
        </nav>
      </footer>
    </div>
  );
}
