import { ReactElement } from "react";
import img_challenges_01 from "../../assets/img/img_project_mob_challenge_01.png";
import { ReactComponent as IconDiscuss } from "../../assets/img/icon_discuss.svg";
import { ReactComponent as IconLeaf } from "../../assets/img/icon_leaf.svg";
export default function EvaluationSection(): ReactElement {
  return (
    <div id='evaluation'>
      <div className="container mx-auto pt-12 w-[1100px] mb-12">
        <div className="text-center mb-12">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; EVALUATION &nbsp; ]
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-x-8">
          <IconDiscuss />
          <IconLeaf />
          <div>
            <p className="text-content font-bold mt-4">
              Successfully Engaging the Public for Policy Discussions
            </p>
            <p className="text-content mt-4 font-light">
              At the exhibition, our project sparked substantial feedback and
              discussions among interviewees and industry professionals. This
              revealed that public disinterest in environmental policy isn't
              inherent; rather, it stems from policy communication lacking
              personal resonance. Our team's ability to use future scenarios to
              stimulate discourse was evident. These outcomes inspire the GDS to
              develop comprehensive storytelling in policy design and
              communication.
            </p>
          </div>
          <div>
            <p className="text-content font-bold mt-4">
              An Inspiration for Agricultural Policy Research
            </p>
            <p className="text-content mt-4 font-light">
              Inspired by the nature recovery policy and its newspaper coverage,
              DEFRA researchers explore novel approaches to interact with rural
              farmers. They aim to foster casual yet engaging discussions on
              fallow land and subsidy methods, envisioning a strategy to
              revitalize soil fertility and restore ecological balance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
