import { ReactElement } from "react";
import ChapterHeader from "./ChapterHeader";
import StakeholderMap from "./StakeholderMap";
import icon_service from "../../assets/img/img_uol_icon_service.png";
import icon_language from "../../assets/img/img_uol_icon_language.png";
import icon_time from "../../assets/img/img_uol_icon_time.png";

const services = [
  "Recruitment Process",
  "Recruitment System",
  "Training Signpost",
  "Career Advisory Service",
];

const ARROW = "#9A9A9A";
// Frame padding (24px) + dashed border (2px): the connector below uses the
// same inset so its arrows land on the centre of each workstream box
const INSET = 26;

const complexities = [
  {
    label: "MIXED SERVICE TYPES",
    text: "These services combined digital platforms, face-to-face interactions and processes spanning multiple teams and channels. Establishing a shared evaluation framework therefore required a balance between consistency across the project and sensitivity to each service's purpose and users' needs.",
  },
  {
    label: "DISTRIBUTED OWNERSHIP",
    text: "Responsibility was also distributed across university management, central HR, departmental HR and IT, each with different priorities and decision-making authority. The framework needed to be clear and meaningful to colleagues from different professional backgrounds, while providing a basis for agreement on what success meant and which improvements to prioritise.",
  },
];

const requirements = [
  {
    icon: icon_service,
    need: "The evaluation framework needed to accommodate the specific needs of different services, which spanned digital touchpoints, face-to-face interactions and cross-team processes.",
    why: "Unlike frameworks focused on a single layer, such as heuristic evaluation for UI/UX, GDS looks at the whole service rather than only its interface.",
  },
  {
    icon: icon_language,
    need: "The evaluation framework needed to provide a shared evaluation language that HR, IT, management in colleges and schools, and funders could all understand.",
    why: "GDS uses relatively plain language that is easy to understand, with detailed guidance. Some of the stakeholders involved also had government backgrounds, so it could serve as a common reference point.",
  },
  {
    icon: icon_time,
    need: "The evaluation framework needed to be usable in practice for the baseline, improvement design and endline within the limited project timeline.",
    why: "Building on an existing structure meant making the criteria concrete in limited time, rather than creating a whole evaluation method from scratch.",
  },
];

export default function ChallengeSection(): ReactElement {
  return (
    <div className="bg-[#F8F8F8]" id="challenge">
      <div className="container mx-auto md:w-[1100px] pb-14 md:pb-16">
        <ChapterHeader number="02" title="Challenge" />

        <p className="text-[20px] md:text-[24px] font-bold">
          Establishing a shared basis for evaluating diverse services
        </p>
        <p className="text-content font-light mt-4">
          The project aimed to assess and improve four services supporting
          staff wellbeing and career progression. Baseline and endline
          evaluation would provide external funders with evidence of change
          over the project's 18-month duration.
        </p>

        {/* Workstreams 1–4 (the services) inside a dashed frame, with
            Workstream 5 (strategy and evaluation) feeding into all four */}
        <div className="mt-6">
          <div className="border-2 border-dashed border-[#BDBDBD] rounded-md p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {services.map((name, i) => (
                <div key={name} className="bg-white px-5 py-4">
                  <p className="text-[12px] font-bold text-[#EA5514] tracking-[2px]">
                    WORKSTREAM {i + 1}
                  </p>
                  <p className="text-content font-semibold mt-1 leading-snug">
                    {name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Straight arrows from Workstream 5 up to each workstream box */}
          <div
            className="hidden md:block h-[40px]"
            style={{ paddingLeft: INSET, paddingRight: INSET }}
            aria-hidden="true"
          >
            <div className="grid grid-cols-4 gap-4 h-full">
              {services.map((name) => (
                <div key={name} className="relative">
                  <div
                    className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
                    style={{ backgroundColor: ARROW }}
                  ></div>
                  <div
                    className="absolute left-1/2 top-0 -translate-x-1/2 w-0 h-0 border-l-[7px] border-r-[7px] border-b-[10px] border-l-transparent border-r-transparent"
                    style={{ borderBottomColor: ARROW }}
                  ></div>
                </div>
              ))}
            </div>
          </div>

          {/* Workstream 5 spans the width of the four boxes above */}
          <div
            className="mt-4 md:mt-0"
            style={{ marginLeft: INSET, marginRight: INSET }}
          >
            <div className="relative bg-white px-5 py-4 text-center">
              <span className="absolute top-0 right-0 bg-[#EA5514] text-white text-[12px] font-bold tracking-[2px] px-3 py-1">
                LED BY ME
              </span>
              <p className="text-[12px] font-bold text-[#EA5514] tracking-[2px]">
                WORKSTREAM 5
              </p>
              <p className="text-content font-semibold mt-1 leading-snug">
                Strategy &amp; Evaluation
              </p>
            </div>
          </div>
        </div>

        {/* Two sources of complexity, side by side */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mt-10">
          {complexities.map((c) => (
            <div key={c.label}>
              <p className="tracking-[1px] text-[14px] font-bold">{c.label}</p>
              <div className="w-[16px] border-b-[4px] border-[#EA5514] h-[4px] mt-1">
                &nbsp;
              </div>
              <p className="text-content font-light mt-4">{c.text}</p>
            </div>
          ))}
        </div>

        <StakeholderMap />

        <p className="text-[20px] md:text-[24px] font-bold mt-12">
          Starting with the GDS assessment framework
        </p>
        <p className="text-content font-light mt-4">
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
              {/* Fixed 56px row, icon centred in it, so icons of different
                  sizes line up across the cards */}
              <div className="h-[56px] flex items-center mb-4">
                <img
                  src={r.icon}
                  alt=""
                  aria-hidden="true"
                  draggable={false}
                  className="w-auto object-contain"
                  style={{ height: 56 }}
                />
              </div>
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
        <p className="text-content font-light mt-8">
          This allowed me to set shared evaluation criteria while guiding each
          workstream to find the questions and evidence that suited its own
          service.
        </p>
      </div>
    </div>
  );
}
