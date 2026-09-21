import { ReactElement } from "react";
import img_placeholder from "../../assets/img/img_project_placeholder_grid.svg";

export default function DesignSection(): ReactElement {
  return (
    <div id="design_deliver">
      <div className="container mx-auto mt-16 md:w-[1100px] md:pb-16">
        <div className="text-center mt-12">
          <p className="text-[16px] md:text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; DESIGN DELIVER &nbsp; ]
          </p>
        </div>
        <p className="text-content md:font-light mt-2 md:mt-12">
          Design deliver text to be added — what was built, and how it
          responded to the research.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-6">
          {[1, 2, 3].map((n) => (
            <img
              key={n}
              src={img_placeholder}
              alt={`Design deliverable ${n} to be added`}
              className="w-full aspect-[3/2] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
