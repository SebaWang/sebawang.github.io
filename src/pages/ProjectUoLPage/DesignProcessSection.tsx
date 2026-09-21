import { ReactElement } from "react";
import img_placeholder from "../../assets/img/img_project_placeholder_grid.svg";

export default function DesignProcessSection(): ReactElement {
  return (
    <div className="bg-[#F8F8F8] pb-16 hidden md:block" id="design_challenges">
      <div className="container mx-auto mt-12 md:w-[1100px]">
        <div className="text-center pt-12 mb-8">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; DESIGN PROCESS & CHALLENGES &nbsp; ]
          </p>
        </div>

        <p className="font-bold text-[24px]">Design principle to be added.</p>
        <p className="font-light text-content mt-6">
          Design process text to be added — how the concept was iterated and
          who it was iterated with.
        </p>
        <div className="grid grid-cols-2 gap-4 mt-6">
          {[1, 2].map((n) => (
            <img
              key={n}
              src={img_placeholder}
              alt={`Design process image ${n} to be added`}
              className="w-full aspect-[3/2] object-cover"
            />
          ))}
        </div>

        <p className="font-bold text-[24px] mt-12">
          Design challenge to be added.
        </p>
        <p className="font-light text-content mt-6">
          Challenge text to be added.
        </p>
      </div>
    </div>
  );
}
