import { ReactElement } from "react";
import { ReactComponent as C1 } from "../../assets/img/Project_UTech/Process & Challenges/0-1.svg";
import { ReactComponent as C2 } from "../../assets/img/Project_UTech/Process & Challenges/0-2.svg";
import { ReactComponent as C3 } from "../../assets/img/Project_UTech/Process & Challenges/0-3.svg";
import img02 from "../../assets/img/Project_UTech/Process & Challenges/3.png"
import img01 from "../../assets/img/Project_UTech/Process & Challenges/5.png"
import img03 from "../../assets/img/Project_UTech/Process & Challenges/4.png"
import ModalImage from "../../Components/Component/ModalImage";
import ModalImageFree from "../../Components/Component/ModalImageFree";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function DesignProcessSection(): ReactElement {
  return (
    <div className="bg-[#F8F8F8] pb-16 hidden md:block" id="design_challenges">
      <div className="container mx-auto mt-12 md:w-[1100px]">
        <div className="text-center pt-12 mb-8">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; PROCESS & CHALLENGES &nbsp; ]
          </p>
        </div>

        <p className="font-bold text-[24px]">
          Testing various options before making the decision.
        </p>
        <p className="font-light text-content mt-6">
          In the transition from a traditional remote control to a new control
          panel, numerous considerations come into play. Alongside assessing
          technology and development costs, our design journey involved
          exploring various display options and creating numerous prototypes to
          determine the most user-friendly screen size for public use.
        </p>
        <div className="grid grid-cols-3 gap-4 mt-12">
          <C1 />
          <C2 />
          <C3 />
        </div>
        <p className="flex items-center justify-center w-full font-light mt-12">
          <FontAwesomeIcon
            icon={faCaretUp}
            className="text-3xl mr-4 text-[#5F5F5F]"
          />
          Different User Interface Options
        </p>

        <p className="text-content font-light mt-12">
          To address the challenge of enabling users to swiftly complete button
          operations and access urine test results within ten seconds, I led the
          UX team in a detailed analysis of the urine toilet usage process. We
          simulated operations in different scenarios and different body
          conditions to gauge the smoothness of the user experience. Ultimately,
          our efforts culminated in the successful design of a one-click
          detection system.
        </p>
        <div className='mt-6 grid grid-cols-2 '>
          <ModalImage imgURL={img01}/>
          <ModalImage imgURL={img02}/>
        </div>

        
        <p className="font-bold mt-12">
        The Flow Chart of the Urine Analysis
        </p>
        <ModalImageFree imgURL={img03} />
      </div>
    </div>
  );
}
