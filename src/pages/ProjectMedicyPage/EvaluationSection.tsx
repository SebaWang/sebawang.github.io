import { ReactElement } from "react";
import { ReactComponent as Good } from "../../assets/img/icon_good.svg";
import { ReactComponent as Flag } from "../../assets/img/icon_flag.svg";

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
          <Flag className="h-[102px]" />
          <p className="text-[20px] font-bold">
            A Huge Milestone for the NFT Roadmap
          </p>
          <p className="text-[16px]">
            Following the execution of learning workshops and the implementation
            of the Medicy website, RPF achieved significant milestones on the
            Gen 2 roadmap. The project garnered attention from{" "}
            <span className="font-bold"> over 50 investors</span> across Hong
            Kong, Singapore, Japan, and Taiwan,{" "}
            <span className="font-bold">
              {" "}
              resulting in a notable 21% increase in transaction volume for the
              quarter.
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Good className="h-[102px]" />
          <p className="text-[20px] font-bold">Trader-friendly Features</p>
          <p className="text-[16px]">
            Regarding the Medicy website, the current beta version has received
            numerous positive feedback from traders. Users appreciate the
            visualized and simplified access to trading information. In terms of
            the forum system, I believe it needs to expand its user base to
            enhance interaction and discussion popularity, reaching its full
            potential.
          </p>
        </div>
      </div>
    </div>
  );
}
