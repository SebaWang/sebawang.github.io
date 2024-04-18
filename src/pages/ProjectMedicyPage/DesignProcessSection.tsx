import { ReactElement } from "react";
import img_01 from "../../assets/img/Project_Medicy/Process & Challenges/2.jpg"
import img_02 from "../../assets/img/Project_Medicy/Process & Challenges/4.jpg"
import ModalImageFree from "../../Components/Component/ModalImageFree";
import img_behavior from "../../assets/img/Project_Medicy/Process Overview/behavior_analysis.jpg"
import ModalImage from "../../Components/Component/ModalImage";

export default function DesignProcessSection(): ReactElement {
  return (
    <div className="bg-[#F8F8F8] pb-16" id="design_challenges">
      <div className="container mx-auto mt-12 w-[1100px]">
        <div className="text-center pt-12 mb-8">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; PROCESS & CHALLENGES &nbsp; ]
          </p>
        </div>

        <p className="font-bold text-[24px]">
          Service design thinking facilitates the formulation of the roadmap.
        </p>
        <p className="font-light text-[18px] mt-6">
          I employed various service design tools and methods, including{" "}
          <span className="font-bold">
            customer behavior analysis, workshops, and journey maps,
          </span>{" "}
          to develop the project roadmap. This approach ensured that the roadmap
          was not only practical but also resonated well with our followers,
          garnering their support. Additionally, I strategized short-term and
          medium-term plans to ensure that Gen2 received the necessary attention
          and investment throughout the project duration.
        </p>


        <p className="font-bold text-[18px] mt-12 mb-4">
        Customer Behavior Analysis & Overall Strategy Formulation
        </p>
        <ModalImageFree imgURL={img_behavior} />

        

        <p className="font-bold text-[18px] mt-12 mb-4">
        Customer Behavior Analysis & Overall Strategy Formulation
        </p>
        <div className='grid grid-cols-2 gap-4'>
            <ModalImage imgURL={img_02} aspectRatio="512/277" />
            <ModalImage imgURL={img_01} aspectRatio="512/277" />
        </div>
      </div>
    </div>
  );
}
