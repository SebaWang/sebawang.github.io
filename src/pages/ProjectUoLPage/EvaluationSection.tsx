import { ReactElement } from "react";
import { ReactComponent as Star } from "../../assets/img/icon_star.svg";
import { ReactComponent as Bulb } from "../../assets/img/icon_bulb.svg";
import { ReactComponent as Paper } from "../../assets/img/icon_paper.svg";

export default function EvaluationSection(): ReactElement {
  return (
    <div
      className="container mx-auto mt-12 md:w-[1100px] pb-12"
      id="evaluation"
    >
      <div className="text-center pt-12 mb-8">
        <p className="text-[16px] md:text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
          [ &nbsp; EVALUATION &nbsp; ]
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 mt-4">
        <div className="flex flex-col gap-4">
          <Star className="h-[102px] mx-auto md:mx-[0]" />
          <p className="md:text-content font-bold text-center md:text-left text-[20px]">
            Outcome heading to be added
          </p>
          <p className="text-content font-light text-left">
            Outcome text to be added.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Bulb className="h-[102px] mx-auto md:mx-[0]" />
          <p className="md:text-content font-bold text-center md:text-left text-[20px]">
            Outcome heading to be added
          </p>
          <p className="text-content font-light text-left">
            Outcome text to be added.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Paper className="h-[102px] mx-auto md:mx-[0]" />
          <p className="md:text-content font-bold text-center md:text-left text-[20px]">
            Outcome heading to be added
          </p>
          <p className="text-content font-light text-left">
            Outcome text to be added.
          </p>
        </div>
      </div>
    </div>
  );
}
