import { ReactElement } from "react";
import img_challenges_01 from "../../assets/img/img_project_mob_challenge_01.png";
import { ReactComponent as IconDiscuss } from "../../assets/img/icon_discuss.svg";
import { ReactComponent as IconLeaf } from "../../assets/img/icon_leaf.svg";
export default function EvaluationSection(): ReactElement {
  return (
    <div id="evaluation">
      <div className="container mx-auto md:pt-12 md:w-[1100px] mb-12">
        <div className="text-center pt-12 mb-8">
          <p className="text-[16px] md:text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; EVALUATION &nbsp; ]
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 mt-4 ">
          <div className="flex flex-col gap-4">
            <IconDiscuss className="h-[102px] mx-auto md:mx-[0]" />
            <p className="md:text-content font-bold text-center md:text-left text-[20px]">
              Successfully Engaging the Public for Policy Discussions
            </p>
            <p className="text-content font-light text-left hidden md:block">
              At the exhibition, our project sparked substantial feedback and
              discussions among interviewees and industry professionals. This
              revealed that public disinterest in environmental policy isn't
              inherent; rather, it stems from policy communication lacking
              personal resonance. Our team's ability to use future scenarios to
              stimulate discourse was evident. These outcomes inspire the GDS to
              develop comprehensive storytelling in policy design and
              communication.
            </p>
            <p className="text-content text-left md:hidden block">
              These outcomes inspire the GDS to develop comprehensive
              storytelling in policy design and communication.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <IconLeaf className="h-[150px] mx-auto md:mx-[0]" />
            <p className="md:text-content font-bold text-center md:text-left text-[20px]">
              An Inspiration for Agricultural Policy Research
            </p>
            <p className="text-content font-light text-left hidden md:block">
              Inspired by the nature recovery policy and its newspaper coverage,
              policy researchers can explore novel approaches to interact with rural
              farmers. They aim to foster casual yet engaging discussions on
              fallow land and subsidy methods, envisioning a strategy to
              revitalize soil fertility and restore ecological balance.
            </p>
            <p className="text-content text-left md:hidden block">
              Inspired by the nature recovery policy and its newspaper coverage,
              policy researchers can explore novel approaches to interact with
              rural farmers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
