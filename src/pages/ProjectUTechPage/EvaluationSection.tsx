import { ReactElement } from "react";
import { ReactComponent as Magnifier } from "../../assets/img/icon_magnifier.svg";
import { ReactComponent as Magnet } from "../../assets/img/icon_magnet.svg";
import { Link } from "react-router-dom";

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
          <Magnifier className="h-[102px]" />
          <p className="text-[20px] font-bold">Remarkable Prevention Effect</p>
          <p className="text-content font-light">
            The urine analysis toilets have finally been deployed in three
            teaching hospitals, i
            <span className="font-bold">
              {" "}
              increasing the early detection of urinary tract infections and
              kidney stones by 16%{" "}
            </span>
            and enhancing proactive healthcare management.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Magnet className="h-[102px]" />
          <p className="text-[20px] font-bold">
            Attracting New Consumer Generations
          </p>
          <p className="text-content font-light">
            I also recommended the application of the new touch-screen
            controller to other toilet product lines. Despite a 5% increase in
            manufacturing costs, the high-tech appearance and clean user
            interface
            <span className="font-bold">
              {" "}
              appealed to approximately 35% more young buyers,
              {" "}
            </span>
            resulting in increased profit for the company
          </p>
        </div>
      </div>
      <div className="mx-auto text-center mt-4 pb-16">
          <Link to="/project">
            <button className="mt-12 border-[1px] border-[#DD663C] text-[#DD663C] py-2 px-16 rounded-md text-content font-semibold hover:bg-[#DD663C] hover:text-white duration-300">
              Back To Projects
            </button>
          </Link>
        </div>
    </div>
  );
}
