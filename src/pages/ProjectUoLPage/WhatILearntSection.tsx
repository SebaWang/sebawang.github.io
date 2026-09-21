import { ReactElement } from "react";

const learnings = [
  {
    heading: "Learning heading to be added",
    body: "Learning text to be added.",
  },
  {
    heading: "Learning heading to be added",
    body: "Learning text to be added.",
  },
  {
    heading: "Learning heading to be added",
    body: "Learning text to be added.",
  },
];

// Deliberately styled distinct from the rest of the page — a dark section
// to mark the shift from narrating the project to reflecting on it.
export default function WhatILearntSection(): ReactElement {
  return (
    <div className="bg-[#1E1E1E]" id="what_i_learnt">
      <div className="container mx-auto pt-16 md:w-[1100px] pb-20">
        <div className="text-center">
          <p className="text-[16px] md:text-[20px] font-light text-[#8A8A8A] tracking-[5px]">
            [ &nbsp; WHAT I LEARNT &nbsp; ]
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {learnings.map((item, i) => (
            <div key={i}>
              <p className="text-white font-bold text-content">
                {item.heading}
              </p>
              <div className="w-[16px] border-b-[4px] border-[#EA5514] h-[4px] mt-2 mb-3">
                &nbsp;
              </div>
              <p className="text-[#B8B8B8] font-light text-content">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
