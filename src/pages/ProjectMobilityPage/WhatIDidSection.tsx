import { ReactElement } from "react";
import ChapterHeader from "./ChapterHeader";
import PhotoSlot from "./PhotoSlot";

export default function WhatIDidSection(): ReactElement {
  return (
    <div id="what_i_did">
      <div className="container mx-auto md:w-[1100px] pb-20 md:pb-28">
        <ChapterHeader number="03" title="What I Did" />

        {/* 1. Literature review */}
        <p className="text-[20px] md:text-[24px] font-bold">
          <span className="text-[#DD663C]">01</span> &nbsp;Systematic
          literature review
        </p>
        <p className="text-content font-light mt-2">
          Mapped the structural drivers (regulation, infrastructure, trust,
          labour, climate and more) and the disagreements around them. The
          field has no shortage of trends: 7,022 papers were published between
          2019 and 2024 alone. What was missing was a way to tell apart the
          assumptions behind those trends: which are taken for granted (the
          ghosts), and which stand in opposition to one another.
        </p>

        {/* 2. Futures forum */}
        <p className="text-[20px] md:text-[24px] font-bold mt-10">
          <span className="text-[#DD663C]">02</span> &nbsp;Oxford Futures
          Forum
        </p>
        <p className="text-content font-light mt-2">
          Planned the forum and built an invitation list spanning energy,
          mobility infrastructure, insurance, finance, aerospace, technology,
          government and urban planning. Sixty stakeholders took part in a
          three-day participatory forum of dialogue and group debate, bringing
          academic, policy, industry and practitioner perspectives into
          exchange.
        </p>

        {/* 3. Scenario workshop */}
        <p className="text-[20px] md:text-[24px] font-bold mt-10">
          <span className="text-[#DD663C]">03</span> &nbsp;Scenario planning
          co-design workshop
        </p>
        <p className="text-content font-light mt-2">
          Introduced service design and design futures approaches, such as
          personas and user journey maps, to develop three scenarios, exploring
          the different transition possibilities and boundary conditions that
          large cities might face by 2050.
        </p>

        {/* 4. Value relationship mapping */}
        <p className="text-[20px] md:text-[24px] font-bold mt-10">
          <span className="text-[#DD663C]">04</span> &nbsp;Stakeholder and
          value relationship mapping
        </p>
        <p className="text-content font-light mt-2">
          Introduced visual mapping tools common in service design, including
          service system and stakeholder maps and future service blueprints, to
          compare organisational roles and value exchanges in 2026 and 2050.
          This surfaced the underlying assumptions and showed how different
          futures could reshape roles, dependencies and value exchange. It gave
          the client a clearer view of the different kinds of value it could
          offer in future, and of potential strategic partnerships.
        </p>

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

        <p className="text-content font-bold mt-12 mb-4">
          How the scenarios were built
        </p>
        <PhotoSlot label="（這邊統一放過程照片）" aspect="16/7" />
      </div>
    </div>
  );
}
