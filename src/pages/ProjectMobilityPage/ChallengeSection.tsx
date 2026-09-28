import { ReactElement } from "react";
import ChapterHeader from "./ChapterHeader";
import PhotoSlot from "./PhotoSlot";

const leadershipQuestions = [
  {
    q: "What assumptions need re-examining?",
    detail:
      "What assumptions in the 2026 mobility consensus are most likely to fail by 2050? If the way people work, live and consume changes, which mobility needs could shrink, shift or emerge?",
  },
  {
    q: "Which strategic choices must be made now, and which should stay open?",
    detail:
      "Which investments are worth starting early? Which commitments suit a phased approach? And what signals should trigger scaling up, adjusting or exiting?",
  },
  {
    q: "Where will value come from when the way mobility services are organised changes?",
    detail:
      "If roles and responsibilities are redistributed among stakeholders and channels, what value could we offer, whom should we partner with, and how should costs and benefits be shared? Who might be left out?",
  },
  {
    q: "Will current strategies hold across different futures?",
    detail:
      "Which products, investments and partnership models keep their value, and which expose new risks or dependencies? What capabilities should we build to keep services running and change course as conditions shift?",
  },
];

export default function ChallengeSection(): ReactElement {
  return (
    <div className="bg-[#F8F8F8]" id="strategic_challenge">
      <div className="container mx-auto md:w-[1100px] pb-14 md:pb-16">
        <ChapterHeader number="02" title="Strategic Challenge" />

        <div className="flex flex-col md:flex-row md:items-start gap-8">
          <p className="text-content font-light max-w-[760px] md:flex-1">
            Foresight is not forecasting. It helps distinguish which
            assumptions the original strategy is based on, and which uncertainties may change the expected results
            of today's decisions, so that near-term choices with long-term
            consequences rest on firmer ground.
          </p>
          {/* Sits beside the chapter title on desktop, as in the mock-up */}
          <div className="w-full md:w-[240px] md:shrink-0 md:ml-auto md:-mt-[84px]">
            <PhotoSlot label="Photo" aspect="4/3" className="rounded-md" />
          </div>
        </div>

        <p className="text-[20px] md:text-[24px] font-bold mt-12">
          Beyond the Technology Roadmap
        </p>
        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            <p className="text-content font-light">
              When planning the mobility service and system in large cities,
              organisations tend to focus on vehicles and related technologies,
              such as electric vehicles, autonomous systems and robotics. Such a
              technology roadmap can clearly show how technologies might evolve
              and what to invest in, but it rarely asks whether the social and
              systemic conditions behind these developments will still hold.
              These include a few assumptions that are easily taken for
              granted:
            </p>
            <ul className="list-disc pl-5 mt-4 space-y-1 text-content font-light font-['Open_Sans']">
              <li>Demand for mobility will keep growing.</li>
              <li>Technological progress will bring better mobility access.</li>
              <li>
                Mobility services will still be organised by the markets,
                institutions and infrastructure we know today.
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-between">
            <p className="text-content font-light">
              Changes in ways of working and living, energy systems, climate
              risk and public governance could all rewrite these premises. They
              could change why people travel, how technologies are applied, and
              who makes the operating decisions for mobility services.
              Therefore, the challenge goes beyond choosing which technology to
              back next.
            </p>
            {/* Decorative dots filling the empty lower-right corner */}
            <div className="hidden md:flex justify-end gap-3 mt-6" aria-hidden="true">
              {[0, 1, 2].map((i) => (
                <span key={i} className="w-[14px] h-[14px] rounded-full bg-[#D9D9D9]"></span>
              ))}
            </div>
          </div>
        </div>

        <div className="border border-[#6F6F6F] mt-12 px-6 md:px-12 py-8 md:py-10">
          <p className="tracking-[1px] text-[14px] font-bold text-[#DD663C]">
            PRIMARY FORESIGHT QUESTION
          </p>
          <p className="font-bold text-[#6F6F6F] text-[20px] md:text-[26px] mt-3 leading-snug">
            How can an organisation keep creating value when mobility demand
            and the governing rules change in the post-AI era?
          </p>
        </div>

        <p className="tracking-[1px] text-[14px] font-bold mt-12">
          KEY QUESTIONS DEVELOPED WITH LEADERSHIP
        </p>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 mt-6">
          {leadershipQuestions.map((item, i) => (
            <div key={i} className="border-l-[3px] border-[#EA5514] pl-5">
              <p className="text-content font-bold">{item.q}</p>
              <p className="text-content font-light mt-2">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
