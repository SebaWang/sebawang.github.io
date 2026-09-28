import { ReactElement } from "react";

export default function DetailSection(): ReactElement {
  return (
    <div className="bg-[#e8e8e8] pt-14 pb-14 hidden md:block">
      <footer className="footer container mx-auto font-light">
        <nav className="text-black">
          <p className="tracking-[1px] text-content font-bold">DATE</p>
          <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
            &nbsp;
          </div>
          <p className="text-content mt-8">2025 – 2026</p>
          <p className="text-content">Corporate Foresight Project</p>
        </nav>
        <nav className="text-black">
          <p className="tracking-[1px] text-content font-bold">ROLE</p>
          <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
            &nbsp;
          </div>
          <p className="text-content mt-8 max-w-[260px]">
            External Foresight and Service Design Consultant
          </p>
        </nav>
        <nav className="text-black">
          <p className="tracking-[1px] text-content font-bold">ORGANISATION</p>
          <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
            &nbsp;
          </div>
          <p className="text-content mt-8 max-w-[220px]">
            Saïd Business School, University of Oxford
          </p>
        </nav>
        <nav className="text-black">
          <p className="tracking-[1px] text-content font-bold">
            PRIMARY QUESTION
          </p>
          <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
            &nbsp;
          </div>
          <p className="text-content mt-8 max-w-[300px]">
            How can an organisation keep creating value when mobility demand
            and the governing rules change in the post-AI era?
          </p>
        </nav>
      </footer>
    </div>
  );
}
