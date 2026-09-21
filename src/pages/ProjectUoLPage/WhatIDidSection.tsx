import { ReactElement } from "react";
import img_placeholder from "../../assets/img/img_project_placeholder_grid.svg";

export default function WhatIDidSection(): ReactElement {
  const methods = [
    "Method to be added",
    "Method to be added",
    "Method to be added",
    "Method to be added",
  ];

  return (
    <div className="bg-[#F8F8F8]" id="what_i_did">
      <div className="container mx-auto pt-12 md:w-[1100px] pb-16">
        <div className="text-center pt-12 mb-8">
          <p className="text-[16px] md:text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; WHAT I DID &nbsp; ]
          </p>
        </div>
        <p className="text-content font-light">
          Approach text to be added — what was done, and why these methods
          were the right fit for the problem.
        </p>
        <ul className="grid md:grid-cols-2 gap-x-8 gap-y-2 mt-6 list-disc pl-5 text-content font-light">
          {methods.map((m, i) => (
            <li key={i}>{m}</li>
          ))}
        </ul>
        <div className="grid grid-cols-3 gap-4 mt-8">
          {[1, 2, 3].map((n) => (
            <img
              key={n}
              src={img_placeholder}
              alt={`What I did image ${n} to be added`}
              className="w-full aspect-[3/2] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
