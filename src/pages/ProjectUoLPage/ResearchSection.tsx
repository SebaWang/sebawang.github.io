import { ReactElement } from "react";
import img_placeholder from "../../assets/img/img_project_placeholder_grid.svg";

export default function ResearchSection(): ReactElement {
  return (
    <div className="bg-[#F8F8F8] hidden md:block" id="process_challenges">
      <div className="container mx-auto mt-12 md:w-[1100px]">
        <div className="text-center pt-12 mb-8">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; RESEARCH PROCESS & CHALLENGES &nbsp; ]
          </p>
        </div>

        <p className="font-bold text-[24px]">
          Research heading to be added.
        </p>
        <p className="font-light text-content mt-6">
          Research process text to be added — how participants were engaged,
          and what made it difficult.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {[1, 2, 3].map((n) => (
            <img
              key={n}
              src={img_placeholder}
              alt={`Research image ${n} to be added`}
              className="w-full aspect-[3/2] object-cover"
            />
          ))}
        </div>

        <p className="font-bold text-[24px] mt-12">
          Research challenge to be added.
        </p>
        <p className="font-light text-content mt-6">
          Challenge text to be added.
        </p>
      </div>
    </div>
  );
}
