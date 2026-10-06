import { ReactElement } from "react";
import ChapterHeader from "./ChapterHeader";

const requirements = [
  {
    need: "The evaluation framework needed to accommodate the specific needs of different services, covering digital touchpoints, face-to-face interactions and cross-team processes.",
    why: "Unlike frameworks focused on a single layer, such as heuristic evaluation for UI/UX, GDS looks at the whole service rather than only its interface.",
  },
  {
    need: "The evaluation framework needed to provide a shared evaluation language that HR, IT, management and funders could all understand.",
    why: "Some stakeholders with government backgrounds already knew GDS, so it could serve as a common reference point and reduce the effort of explaining the method.",
  },
  {
    need: "The evaluation framework needed to be usable in practice for the baseline, improvement design and endline within the project timeline.",
    why: "Building on an existing structure meant making the criteria concrete in limited time, rather than creating a whole evaluation method from scratch.",
  },
];

export default function ChallengeSection(): ReactElement {
  return (
    <div className="bg-[#F8F8F8]" id="challenge">
      <div className="container mx-auto md:w-[1100px] pb-14 md:pb-16">
        <ChapterHeader number="02" title="Challenge" />

        <div>
          <div className="max-w-[760px]">
            <p className="text-[20px] md:text-[24px] font-bold">
              Establishing a shared basis for evaluating diverse services
            </p>
            <p className="text-content font-light mt-4">
              The project aimed to assess and improve four services supporting
              staff wellbeing and career progression: recruitment, the HR
              self-service platform, training provision and career advisory
              support. Baseline and endline evaluation would provide external
              funders with evidence of change over the project's 18-month
              duration.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8">
          <p className="text-content font-light">
            These services combined digital platforms, face-to-face
            interactions and processes spanning multiple teams and channels.
            Establishing a shared evaluation framework therefore required a
            balance between consistency across the project and sensitivity to
            each service's purpose and users' needs.
          </p>
          <div className="flex flex-col justify-between">
            <p className="text-content font-light">
              Responsibility was also distributed across university
              management, central HR, departmental HR and IT, each with
              different priorities and decision-making authority. The
              framework needed to be clear and meaningful to colleagues from
              different professional backgrounds, while providing a basis for
              agreement on what success meant and which improvements to
              prioritise.
            </p>
            <div className="hidden md:flex justify-end gap-3 mt-6" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <span key={i} className="w-[14px] h-[14px] rounded-full bg-[#D9D9D9]"></span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-[20px] md:text-[24px] font-bold mt-12">
          Starting with the GDS assessment framework
        </p>
        <p className="text-content font-light mt-4 max-w-[760px]">
          Given this complexity, I first set out what the evaluation method
          needed to do. I worked through these requirements with the strategic
          team (term for the group to be confirmed), and the GDS assessment
          framework fitted them better than the other options we considered, for three reasons:
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {requirements.map((r, i) => (
            <div
              key={i}
              className="border border-[#EA5514] px-6 pt-6 pb-8 flex flex-col"
            >
              <p className="tracking-[2px] text-[12px] font-bold text-[#EA5514]">
                REQUIREMENT {i + 1}
              </p>
              <p className="text-content font-bold mt-3 leading-snug md:min-h-[90px]">
                {r.need}
              </p>
              {/* Down-pointing triangle: from the need to why GDS fits */}
              <div
                className="w-0 h-0 mt-4 border-l-[8px] border-r-[8px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#D0D0D0]"
                aria-hidden="true"
              ></div>
              <p className="tracking-[2px] text-[12px] font-bold text-[#6F6F6F] mt-4">
                WHY GDS FITS
              </p>
              <p className="text-content font-light mt-2">{r.why}</p>
            </div>
          ))}
        </div>
        <p className="text-content font-light mt-8 max-w-[760px]">
          This allowed me to set shared evaluation criteria while guiding each
          workstream to find the questions and evidence that suited its own
          service.
        </p>
      </div>
    </div>
  );
}
