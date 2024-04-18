import { ReactElement } from "react";
import { ReactComponent as Up } from "../../assets/img/icon_up.svg";
import { ReactComponent as Road } from "../../assets/img/icon_road.svg";

export default function EvaluationSection(): ReactElement {
  return (
    <div className="container mx-auto mt-12 w-[1100px] pb-24" id="evaluation">
      <div className="text-center pt-12 mb-8">
        <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
          [ &nbsp; EVALUATION &nbsp; ]
        </p>
      </div>

      <div className="grid grid-cols-2 gap-12 mt-4">
        <div className="flex flex-col gap-4">
          <Up className="h-[102px]" />
          <p className="text-[20px] font-bold">
            The Genuine Innovation Diffusion
          </p>
          <p className="text-[18px]">
            As of November 2021, the integrated telemedicine service solution
            has been adopted by 6 hospitals across Taiwan, encompassing a total
            of <span className="font-bold"> 1,300 isolation wards, </span>
            representing approximately <span className="font-bold">40% </span>
            nationwide.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Road className="h-[102px]" />
          <p className="text-[20px] font-bold">
            Successful Using Experience and Marketing Strategies
          </p>
          <p className="text-[18px]">
            In addition to the seamless integration service solution,
            enhancements to the Telemedicine Platform as a Service (PaaS) and
            the launch of the E-commerce configurator website have led to a{" "}
            <span className="font-bold">15% increase in order volume </span>in
            2021.
          </p>
        </div>
      </div>
    </div>
  );
}
