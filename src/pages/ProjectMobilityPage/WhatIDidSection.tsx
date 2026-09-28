import { ReactElement } from "react";
import ChapterHeader from "./ChapterHeader";
import PhotoSlot from "./PhotoSlot";

const steps = [
  {
    number: "01",
    title: "Mixed-method literature review",
    body: "I mapped the structural drivers (regulation, infrastructure, trust, labour, climate and more) and the disagreements around them. The field has no shortage of trends: 7,022 papers were published between 2019 and 2024 alone. So, I trained an LLM with a doctoral researcher colleague to help identify the assumptions behind this mass of trends: which are taken for granted (the ghost scenarios), and which stand in opposition to one another.",
  },
  {
    number: "02",
    title: "Participatory futures forum",
    body: "I designed and facilitated the interactive discussion sessions in the 3-day forum, and invited representatives from energy, transport infrastructure, insurance, finance, aerospace, technology, government and urban planning. 60 stakeholders took part in the forum of group discussion and debates, bringing together the perspectives of academia, policymakers, industry and practitioners.",
  },
  {
    number: "03",
    title: "Scenario planning co-design workshop",
    body: "I introduced service design and design futures approaches, such as personas and user journey maps, to develop three scenarios, exploring the different transition possibilities and boundary conditions that large cities might face by 2050.",
  },
  {
    number: "04",
    title: "Stakeholder and value relationship mapping",
    body: "I introduced visual mapping tools from service design, including service system and stakeholder maps and future service blueprints, to compare organisational roles and value exchanges in 2026 and 2050. This surfaced the underlying assumptions and showed how different futures could reshape roles, dependencies and value exchange. It gave the client a clearer view of the different kinds of value it could offer in future, and of potential strategic partnerships.",
  },
];

export default function WhatIDidSection(): ReactElement {
  return (
    <div id="what_i_did">
      <div className="container mx-auto md:w-[1100px] pb-20 md:pb-28">
        <ChapterHeader number="03" title="What I Did" />

        <div className="space-y-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row gap-4 md:gap-8"
            >
              {/* mt-2 lines the frame up with the title's visible text,
                  which sits below the top of its 36px line box */}
              <div className="w-full md:w-[180px] md:shrink-0 md:mt-2">
                <PhotoSlot
                  label={`Photo ${step.number}`}
                  aspect="4/3"
                  className="rounded-md"
                />
              </div>
              <div>
                <p className="text-[20px] md:text-[24px] font-bold">
                  <span className="text-[#DD663C]">{step.number}</span> &nbsp;
                  {step.title}
                </p>
                <p className="text-content font-light mt-2">{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Deliberate omissions */}
        <div className="bg-[#F8F8F8] mt-16 px-6 md:px-10 py-8">
          <p className="tracking-[1px] text-[14px] font-bold">
            WHAT I DELIBERATELY DID NOT DO
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-content font-light font-['Open_Sans']">
            <li>No exhaustive trend taxonomies.</li>
            <li>
              No speculative technology forecasting detached from adoption
              realities.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
