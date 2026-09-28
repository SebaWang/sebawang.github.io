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
            This foresight project was a collaboration with a global
            automotive and mobility group. It began with their leadership's
            reflection on the organisation's strategy:{" "}
            <span className="font-bold">
              does our picture of future mobility come from how we imagine
              society and cities might change, or is it mainly shaped by the
              technology pathways we already know?
            </span>{" "}
            The group wanted to extend its technology-led trend analysis and
            explore the strategic turning points that might emerge in a
            post-AI era, once AI is deeply embedded in society and industry,
            and as climate, energy and geopolitics continue to shift.
          </p>
          <p className="text-content font-light mt-4">
            The project focused on large metropolitan areas as its entry
            point. Population, economic activity and infrastructure are highly
            concentrated there, and mobility is closely tied to work, housing,
            energy and public services. These interdependencies make the
            metropolis a key setting for exploring how mobility needs, service
            models and governance change together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-[#F8F8F8] px-6 md:px-8 py-7">
            <p className="tracking-[1px] text-[14px] font-bold">MY ROLE</p>
            <div className="w-[16px] border-b-[4px] border-[#EA5514] h-[4px] mt-1">
              &nbsp;
            </div>
            <ul className="list-disc pl-5 mt-4 space-y-1 text-content font-light font-['Open_Sans']">
              <li>Mixed-method Early Signal and Trend Analysis</li>
              <li>Cross-sector Stakeholder Engagement</li>
              <li>Forum and Workshop Planning and Facilitation</li>
              <li>Scenario Comparison and Rapid Prototyping</li>
              <li>As-is and Future Service and Journey Mapping</li>
              <li>Insight Synthesis for Strategic Reporting</li>
            </ul>
          </div>
          <div className="bg-[#F8F8F8] px-6 md:px-8 py-7">
            <p className="tracking-[1px] text-[14px] font-bold">OUTCOMES</p>
            <div className="w-[16px] border-b-[4px] border-[#EA5514] h-[4px] mt-1">
              &nbsp;
            </div>
            <ul className="list-disc pl-5 mt-4 space-y-2 text-content font-light font-['Open_Sans']">
              <li>
                <span className="font-bold">A Future Scenario Set:</span> Three
                contrasting future worlds for large cities in 2050.
              </li>
              <li>
                <span className="font-bold">System Understanding:</span>{" "}
                Stakeholders, service dependencies and value exchanges
                compared between 2026 and 2050.
              </li>
              <li>
                <span className="font-bold">
                  Strategic Reports and Meetings:
                </span>{" "}
                A shared language for stakeholders to discuss assumptions and
                trade-offs, offering a basis for reviewing products,
                operations, partnerships and the organisation's future role.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
