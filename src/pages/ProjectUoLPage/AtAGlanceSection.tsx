import { ReactElement } from "react";
import ChapterHeader from "./ChapterHeader";

export default function AtAGlanceSection(): ReactElement {
  return (
    <div id="at_a_glance">
      <div className="container mx-auto md:w-[1100px] pb-14 md:pb-16">
        <ChapterHeader number="01" title="At a Glance" />

        <div className="bg-[#F8F8F8] px-6 md:px-8 py-7">
          <p className="tracking-[1px] text-[14px] font-bold">SCOPE</p>
          <div className="w-[16px] border-b-[4px] border-[#EA5514] h-[4px] mt-1">
            &nbsp;
          </div>
          <p className="text-content font-light mt-4">
            I led an agile design squad on a 1.5-year, externally funded
            project with the university's HR department, designing and
            evaluating four staff-facing services. These services spanned
            online and offline, process-based and website-based formats, so
            their nature was highly mixed and complex. Developing a shared
            evaluation framework that could improve all four services and be
            understood by non-design decision makers was therefore
            challenging. To address this, I led the team and worked with two
            stakeholders with government backgrounds to introduce the GDS Beta
            and Live Service Assessment framework into the context of academic
            service assessment and iteration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-[#F8F8F8] px-6 md:px-8 py-7">
            <p className="tracking-[1px] text-[14px] font-bold">MY ROLE</p>
            <div className="w-[16px] border-b-[4px] border-[#EA5514] h-[4px] mt-1">
              &nbsp;
            </div>
            <ul className="list-disc pl-5 mt-4 space-y-1 text-content font-light font-['Open_Sans']">
              <li>
                Planned and led the complete design and evaluation pipeline
                across baseline research, service improvement, pilots and
                endline evaluation.
              </li>
              <li>
                Organised and facilitated co-design workshops, and synthesised
                survey and qualitative findings to identify improvement
                priorities with the user researcher.
              </li>
              <li>
                Developed a shared evaluation framework to align with all 4
                workstreams.
              </li>
              <li>
                Facilitated discussions across central and departmental
                stakeholders to understand differing requirements and build
                agreement on improvements.
              </li>
            </ul>
          </div>
          <div className="bg-[#F8F8F8] px-6 md:px-8 py-7">
            <p className="tracking-[1px] text-[14px] font-bold">OUTCOMES</p>
            <div className="w-[16px] border-b-[4px] border-[#EA5514] h-[4px] mt-1">
              &nbsp;
            </div>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-content font-light font-['Open_Sans']">
              {[1, 2, 3].map((n) => (
                <li key={n}>
                  <span className="font-bold">Outcome title to be added:</span>{" "}
                  Outcome text to be added.
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
