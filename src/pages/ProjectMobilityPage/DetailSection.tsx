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
      {/* Confidentiality note: sits just above the glass band, over the photo */}
      <div className="absolute bottom-full inset-x-0 pb-3">
        <div className="container mx-auto">
          <p
            className="text-[13px] font-light text-white/90 leading-snug"
            style={{ textShadow: "0 1px 6px rgba(0,0,0,0.8)" }}
          >
            Selected project details have been anonymised or reframed for
            confidentiality.
          </p>
        </div>
      </div>
      <footer className="footer container mx-auto font-light text-white">
        <nav className="text-white">
          <p className="tracking-[1px] text-content font-bold">DATE</p>
          <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
            &nbsp;
          </div>
          <p className="text-content mt-4">2025 – 2026</p>
          <p className="text-content">Corporate Foresight Project</p>
        </nav>
        <nav className="text-white">
          <p className="tracking-[1px] text-content font-bold">ROLE</p>
          <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
            &nbsp;
          </div>
          <p className="text-content mt-4 md:whitespace-nowrap">
            External Foresight and Service Design Consultant
          </p>
          <p className="text-content mt-3 max-w-[460px]">
            Working closely with the client's central strategy and innovation
            team and the executive leadership.
          </p>
        </nav>
        <nav className="text-white">
          <p className="tracking-[1px] text-content font-bold">ORGANISATION</p>
          <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px]">
            &nbsp;
          </div>
          <p className="text-content mt-4 max-w-[220px]">
            University of Oxford
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
            How can mobility services keep creating value when demand and
            governing rules change in the post-AI era?
          </p>
        </nav>
      </footer>
    </div>
  );
}
