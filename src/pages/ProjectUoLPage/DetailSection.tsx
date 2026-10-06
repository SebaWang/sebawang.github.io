import { ReactElement } from "react";

export default function DetailSection(): ReactElement {
  return (
    // Frosted glass band across the bottom of the cover (as on the A+ in
    // Finance page): radial gradient from a more transparent centre to a
    // less transparent edge, with a brighter top rim
    <div
      className="hidden md:block absolute inset-x-0 bottom-0 z-10 py-8 backdrop-blur-md border-t border-[#2A2A2A]"
      style={{
        background:
          "radial-gradient(ellipse at center, rgba(20,20,20,0.35) 0%, rgba(20,20,20,0.7) 100%)",
      }}
    >
      <footer className="footer container mx-auto font-light text-white">
        <nav className="text-white">
          <p className="tracking-[1px] text-content font-bold">DATE</p>
          <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
            &nbsp;
          </div>
          <p className="text-content mt-4">Date to be added</p>
        </nav>
        <nav className="text-white">
          <p className="tracking-[1px] text-content font-bold">ROLE</p>
          <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
            &nbsp;
          </div>
          <p className="text-content mt-4 md:whitespace-nowrap">
            Role to be added
          </p>
        </nav>
        <nav className="text-white">
          <p className="tracking-[1px] text-content font-bold">ORGANISATION</p>
          <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
            &nbsp;
          </div>
          <p className="text-content mt-4 max-w-[220px]">
            Organisation to be added
          </p>
        </nav>
        <nav className="text-white">
          <p className="tracking-[1px] text-content font-bold">
            PRIMARY QUESTION
          </p>
          <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
            &nbsp;
          </div>
          <p className="text-content mt-4 max-w-[310px]">
            How might a university improve recruitment and training services
            for its research staff, and evaluate them against GDS service
            standards?
          </p>
        </nav>
      </footer>
    </div>
  );
}
