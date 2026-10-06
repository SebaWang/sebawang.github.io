import { ReactElement, ReactNode } from "react";
import ChapterHeader from "./ChapterHeader";
import PhotoSlot from "./PhotoSlot";

const stats = [
  { value: "4", label: "staff-facing services" },
  { value: "8", label: "co-design journey-mapping workshops" },
  { value: "500+ → 600+", label: "survey responses, baseline to endline" },
  { value: "6 months", label: "reserved for pilots and assessment" },
];

const lanes = [
  {
    label: "ONLINE TOUCHPOINTS",
    text: "Used the journey maps with the UX designer and IT to revise information and experience flows.",
  },
  {
    label: "CONTENT",
    text: "Acted as content designer, rewriting website copy in plainer language so that users less familiar with digital tools, such as senior recruiters and professors, can complete tasks. For example, a note page inside the recruitment system replaced a downloadable Word template.",
  },
  {
    label: "PHYSICAL PROCESSES",
    text: "Used the maps and the user researcher's insights to propose a new training-course template for HR, and negotiated it with departmental HR teams.",
  },
];

// One row per phase: photo slot on the left, content on the right.
// Design is the odd one out: three parallel lanes by touchpoint, not steps.
function PhaseRow({
  number,
  title,
  subtitle,
  photo,
  children,
}: {
  number: string;
  title: string;
  subtitle: string;
  photo: string;
  children: ReactNode;
}): ReactElement {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-8">
      <div className="w-full md:w-[180px] md:shrink-0 md:mt-2">
        <PhotoSlot label={photo} aspect="4/3" className="rounded-md" />
      </div>
      <div className="flex-1">
        <p className="text-[20px] md:text-[24px] font-bold">
          <span className="text-[#DD663C]">{number}</span> &nbsp;{title}
        </p>
        <p className="text-content font-light text-[#6F6F6F] mt-1">{subtitle}</p>
        {children}
      </div>
    </div>
  );
}

export default function WhatIDidSection(): ReactElement {
  const listClass =
    "list-disc pl-5 mt-3 space-y-1 text-content font-light font-['Open_Sans']";
  return (
    <div id="what_i_did">
      <div className="container mx-auto md:w-[1100px] pb-14 md:pb-16">
        <ChapterHeader number="03" title="What I Did" />

        <p className="text-content font-light -mt-4">
          As the service designer and the team member most familiar with design
          iteration, I led the design squad through three phases: baseline,
          design and endline.
        </p>

        {/* Key numbers across the project */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 border-y border-[#E5E5E5] py-6">
          {stats.map((st) => (
            <div key={st.label}>
              <p className="text-[26px] md:text-[30px] font-bold text-[#DD663C] leading-tight">
                {st.value}
              </p>
              <p className="text-[14px] font-light text-[#6F6F6F] mt-1">
                {st.label}
              </p>
            </div>
          ))}
        </div>

        <div className="space-y-12 mt-12">
          <PhaseRow
            number="01"
            title="Baseline"
            subtitle="Finding the gaps between users' expectations and the as-is journeys"
            photo="Photo 03 · Baseline workshop"
          >
            <ul className={listClass}>
              <li>
                Built the GDS Beta and Live Service Assessment framework into
                the evaluation metrics.
              </li>
              <li>
                Developed post-service survey questions for the four services
                with the user researcher.
              </li>
              <li>
                Planned and facilitated 8 co-design journey-mapping workshops
                across the four services.
              </li>
              <li>
                Synthesised 500+ survey responses with workshop and interview
                insights into a visual report, prioritising the gaps and
                improvement directions, and presented it to the university's
                senior leadership.
              </li>
            </ul>
          </PhaseRow>

          <PhaseRow
            number="02"
            title="Design"
            subtitle="Improving each service with the teams that own it"
            photo="Photo 04 · Design"
          >
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              {lanes.map((l) => (
                <div key={l.label} className="bg-[#F8F8F8] px-5 py-5">
                  <p className="tracking-[1px] text-[13px] font-bold">
                    {l.label}
                  </p>
                  <div className="w-[16px] border-b-[4px] border-[#EA5514] h-[4px] mt-1">
                    &nbsp;
                  </div>
                  <p className="text-content font-light mt-3">{l.text}</p>
                </div>
              ))}
            </div>
          </PhaseRow>

          <PhaseRow
            number="03"
            title="Endline"
            subtitle="Measuring again against the same baseline"
            photo="Photo 05 · Endline"
          >
            <ul className={listClass}>
              <li>
                Reserved the final six months for pilots and assessment against
                the success metrics.
              </li>
              <li>
                Repeated the same survey: 600+ responses, with more positive
                ratings.
              </li>
              <li>
                Re-engaged participants from the baseline workshops and
                interviews.
              </li>
            </ul>
          </PhaseRow>
        </div>

        <div className="bg-[#F8F8F8] mt-16 px-6 md:px-10 py-8">
          <p className="tracking-[1px] text-[14px] font-bold">
            WHAT I DELIBERATELY DID NOT DO
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-content font-light font-['Open_Sans']">
            <li>To be added.</li>
            <li>To be added.</li>
          </ul>
        </div>

        <p className="text-content font-bold mt-12 mb-4">
          Process photos to be added
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {["A", "B", "C"].map((l) => (
            <PhotoSlot
              key={l}
              label={`Photo ${l}`}
              aspect="auto"
              className="rounded-md h-[240px]"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
