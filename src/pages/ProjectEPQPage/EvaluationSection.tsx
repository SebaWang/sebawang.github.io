import { ReactElement } from "react";
import { ReactComponent as Good } from "../../assets/img/icon_good.svg";
import { ReactComponent as Love } from "../../assets/img/icon_love.svg";

export default function EvaluationSection(): ReactElement {
  return (
    <div className="container mx-auto mt-12 md:w-[1100px] md:pb-12" id="evaluation">
      <div className="container mx-auto md:pt-12 md:w-[1100px] mb-12">
        <div className="text-center pt-12 mb-8">
          <p className="text-[16px] md:text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; EVALUATION &nbsp; ]
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mt-4 ">
          <div className="flex flex-col gap-4">
            <Good className="h-[102px] mx-auto md:mx-[0]" />
            <p className="md:text-content font-bold text-center md:text-left text-[20px]">
              A Proved Engaging Service
            </p>
            <p className="text-content font-light text-left hidden md:block">
              After one year of implementation (completed in 2022, evaluated in
              2023), 39 learners participated, resulting in a{" "}
              <span className="font-bold">
                15% increase in average sign-ups.{" "}
              </span>
              Notably, only one person dropped out of the course during this
              period, accounting for just a{" "}
              <span className="font-bold"> 2.5% dropout rate.</span>
            </p>
            <p className="text-content text-left md:hidden block">
            After one year of implementation, 39 learners participated, resulting in a 15% increase in average sign-ups. Notably, only one person dropped out of the course during this period.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <Love className="h-[102px] mx-auto md:mx-[0]" />
            <p className="md:text-content font-bold text-center md:text-left text-[20px]">
              A Smooth Teaching and Learning Journey
            </p>
            <p className="text-content font-light text-left hidden md:block">
              Course instructors have observed that incorporating a design-led
              curriculum alongside the physical support toolkit (the learning
              journal) significantly enhances engagement during the teaching
              process. This approach enables learners to effectively complete
              their EPQ projects.
            </p>
            <p className="text-content text-left md:hidden block">
            Course instructors have observed that incorporating a design-led curriculum alongside the physical support toolkit (the learning journal) significantly enhances engagement during the teaching process. This approach enables learners to effectively complete their EPQ projects.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
