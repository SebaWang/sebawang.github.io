import { ReactElement } from "react";
import ChapterHeader from "./ChapterHeader";
import PhotoSlot from "./PhotoSlot";

const shifts = [
  {
    from: "Single-product optimisation",
    to: "Adapting products and operations across scenarios",
    detail:
      "Examining how well vehicles, fleets and services fit under different demand and operating standards, and identifying the dependencies each system creates.",
  },
  {
    from: "Standalone mobility provider",
    to: "Cross-system partner",
    detail:
      "Exploring partnership roadmaps with cities, public transport, energy and digital service providers, prioritising data rights, the allocation of costs and benefits, and responsibility for services.",
  },
  {
    from: "Separate passenger and logistics services",
    to: "Hybrid mobility systems",
    detail:
      "Examining the balance between moving people and moving goods, and how to integrate the information, dispatch and operations that currently sit in separate service systems, so that passenger mobility and logistics are no longer treated as two entirely separate services.",
  },
];

export default function ImplicationsSection(): ReactElement {
  return (
    <div id="strategic_implications">
      <div className="container mx-auto md:w-[1100px] pb-20 md:pb-28">
        <ChapterHeader number="05" title="Strategic Implications" />

        <p className="text-content font-light">
          The team's outputs include a literature and controversy analysis,
          three contrasting scenario narratives, and value-creating system maps
          that link today's baseline to future role relationships.{" "}
          <span className="font-bold">
            Together they provide a basis for examining assumptions and
            discussing strategic choices.
          </span>
        </p>

        <p className="text-[20px] md:text-[24px] font-bold mt-12">
          What changed in strategy
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {shifts.map((s) => (
            <div key={s.to} className="bg-[#F8F8F8] px-6 py-7">
              <p className="text-[14px] font-light text-black line-through">
                {s.from}
              </p>
              <p className="text-[18px] font-bold text-[#DD663C] mt-1">
                {s.to}
              </p>
              <p className="text-content font-light mt-4">{s.detail}</p>
            </div>
          ))}
        </div>

        <p className="text-content font-bold mt-12 mb-4">
          Presenting with stakeholders
        </p>
        <PhotoSlot label="Photo: presenting the scenarios to stakeholders" aspect="16/7" />
      </div>
    </div>
  );
}
