import { ReactElement } from "react";
import ChapterHeader from "./ChapterHeader";
import PhotoSlot from "./PhotoSlot";

const shifts = [
  {
    from: "Single-product optimisation",
    to: "Cross-scenario products and service iteration",
    detail:
      "Examining how well vehicles, fleets and services fit under different demand and operating standards, and identifying the dependencies each system creates.",
  },
  {
    from: "Standalone vehicle provider",
    to: "Cross-system partnership",
    detail:
      "Exploring partnership roadmaps with cities, public transport, energy and digital service providers, prioritising data rights, the allocation of costs and benefits, and responsibility for services.",
  },
  {
    from: "Separate passenger and logistics services",
    to: "Hybrid mobility systems",
    detail:
      "Examining the balance between moving people and moving goods, and how to integrate the information, dispatch and operations in land, sea and air service systems to ensure efficiency and security.",
  },
];

export default function ImplicationsSection(): ReactElement {
  return (
    <div id="strategic_implications">
      <div className="container mx-auto md:w-[1100px] pb-14 md:pb-16">
        <ChapterHeader number="05" title="Strategic Impacts &amp; Implications" />

        <p className="text-content font-light">
          The project's outputs include a 30-year literature and assumption
          analysis, three contrasting scenario narratives, and value
          relationship system maps that link today's as-is to future
          stakeholder and service relationships. Together they provide a basis
          for examining assumptions and discussing strategic choices.
        </p>

        <p className="text-[20px] md:text-[24px] font-bold mt-12">
          What changed in strategy
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {shifts.map((s) => (
            <div key={s.to} className="bg-[#F8F8F8] px-7 pt-8 pb-12">
              <p className="text-[14px] font-light text-[#404040]">{s.from}</p>
              {/* Down-pointing triangle: from the old model to the new one */}
              <div
                className="w-0 h-0 mt-4 border-l-[9px] border-r-[9px] border-t-[14px] border-l-transparent border-r-transparent border-t-[#D0D0D0]"
                aria-hidden="true"
              ></div>
              <p className="text-[18px] font-bold text-[#DD663C] mt-4 leading-snug md:min-h-[50px]">
                {s.to}
              </p>
              <p className="text-content font-light mt-6">{s.detail}</p>
            </div>
          ))}
        </div>

        <p className="text-content font-bold mt-12 mb-4">
          Presenting with stakeholders
        </p>
        <PhotoSlot label="Photo 10 · Presenting with stakeholders" aspect="16/7" />
      </div>
    </div>
  );
}
