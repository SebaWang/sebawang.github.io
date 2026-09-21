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

// Deliberately styled distinct from the rest of the page — a dark, warm
// orange (not neutral black) to mark the shift from narrating the
// project to reflecting on it, while staying in the site's palette.
export default function WhatILearntSection(): ReactElement {
  return (
    <div className="bg-[#2B140A]" id="what_i_learnt">
      <div className="container mx-auto pt-16 md:w-[1100px] pb-20">
        <div className="text-center">
          <p className="text-[16px] md:text-[20px] font-light text-[#C98F6E] tracking-[5px]">
            [ &nbsp; WHAT I LEARNT &nbsp; ]
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {learnings.map((item, i) => (
            <div key={i}>
              <p className="text-white font-bold text-content">
                {item.heading}
              </p>
              <div className="w-[16px] border-b-[4px] border-[#FF7A45] h-[4px] mt-2 mb-3">
                &nbsp;
              </div>
              <p className="text-[#D7B7A6] font-light text-content">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
