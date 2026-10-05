import { ReactElement } from "react";
import ChapterHeader from "./ChapterHeader";

const shifts = [
  {
    from: "Single-product optimisation",
    to: "Cross-scenario products and service iteration",
    detail:
      "Examining how products and services might perform under different demand patterns and operating conditions.",
  },
  {
    from: "Standalone vehicle provider",
    to: "Cross-system partnership",
    detail:
      "Developing partnership roadmaps with stakeholders beyond the vehicle or transport operator.",
  },
  {
    from: "Separate passenger and logistics services",
    to: "Hybrid mobility systems",
    detail:
      "Exploring the balance between moving people and moving goods in land, sea and air service systems.",
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
          stakeholder and service relationships. The work was used in senior
          strategy discussions and informed wider conversations about future
          mobility governance. Parts of the work also contributed to discussion
          materials for relevant government bodies.
        </p>
        <p className="text-content font-light mt-4">
          Within the centre, this research process and its approaches also became
          the fundamental framework for the other workstreams.
        </p>

        <p className="text-[20px] md:text-[24px] font-bold mt-9">
          How the strategic conversation shifted
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
      </div>
    </div>
  );
}
