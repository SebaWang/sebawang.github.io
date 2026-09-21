import { ReactElement } from "react";
import img_placeholder from "../../assets/img/img_project_placeholder_grid.svg";

export default function BackgroundSection(): ReactElement {
  return (
    <div id="background">
      <div className="container mx-auto mt-16 md:w-[1100px]">
        <div className="text-center mt-12">
          <p className="text-[16px] md:text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; BACKGROUND & PROBLEM &nbsp; ]
          </p>
        </div>
        <p className="text-[20px] md:text-[24px] font-bold mt-8">
          Background heading to be added.
        </p>
        <p className="text-content font-light mt-4 md:mt-1">
          Background text to be added. This section sets out the context the
          project responded to, and why it mattered.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <p className="text-content font-light mt-1">
            Problem framing to be added.{" "}
            <span className="font-bold text-[#DD663C]">
              How might we — question to be added?
            </span>
          </p>
          <img
            src={img_placeholder}
            alt="Background visual to be added"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
