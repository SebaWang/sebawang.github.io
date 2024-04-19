import { ReactElement } from "react";
import { ReactComponent as Good } from "../../assets/img/icon_good.svg";
import { ReactComponent as Love } from "../../assets/img/icon_love.svg";

export default function EvaluationSection(): ReactElement {
  return (
    <div className="container mx-auto mt-12 w-[1100px] pb-12" id="evaluation">
      <div className="text-center pt-12 mb-8">
        <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
          [ &nbsp; EVALUATION &nbsp; ]
        </p>
      </div>

      <div className="grid grid-cols-2 gap-12 mt-4">
        <div className="flex flex-col gap-4">
          <Good className="h-[102px]" />
          <p className="text-[20px] font-bold">A Proved Engaging Service</p>
          <p className="text-[16px]">
            After one year of implementation (completed in 2022, evaluated in
            2023), 39 learners participated, resulting in a{" "}
            <span className="font-bold">15% increase in average sign-ups.</span>
            Notably, only one person dropped out of the course during this
            period, accounting for just a{" "}
            <span className="font-bold"> 2.5% dropout rate.</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Love className="h-[102px]" />
          <p className="text-[20px] font-bold">
            A Smooth Teaching and Learning Journey
          </p>
          <p className="text-[16px]">
            Course instructors have observed that incorporating a design-led
            curriculum alongside the physical support toolkit (the learning
            journal) significantly enhances engagement during the teaching
            process. This approach enables learners to effectively complete
            their EPQ projects.
          </p>
        </div>
      </div>
    </div>
  );
}
