import { ReactElement } from "react";
import img_placeholder from "../../assets/img/img_project_placeholder_grid.svg";

export default function ChallengeSection(): ReactElement {
  return (
    <div id="challenge">
      <div className="container mx-auto mt-16 md:w-[1100px]">
        <div className="text-center mt-12">
          <p className="text-[16px] md:text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; THE CHALLENGE &nbsp; ]
          </p>
        </div>
        <p className="text-[20px] md:text-[24px] font-bold mt-8">
          Problem statement to be added.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <p className="text-content font-light">
            Challenge text to be added — the stakes, and why this problem was
            worth solving now.
          </p>
          <img
            src={img_placeholder}
            alt="Challenge visual to be added"
            className="w-full"
          />
        </div>
        <p className="font-bold text-[#DD663C] text-content mt-8">
          How might a university improve recruitment and training services
          for its research staff, and evaluate them against GDS service
          standards?
        </p>
      </div>
    </div>
  );
}
