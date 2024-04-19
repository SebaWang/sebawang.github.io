import { ReactElement } from "react";
import ModalImageFree from "../../Components/Component/ModalImageFree";
import img_intro from "../../assets/img/Project_UTech/Background & Problem/intro.png";
import {ReactComponent as Users} from "../../assets/img/Project_UTech/Background & Problem/users.svg";

export default function BackgroundSection(): ReactElement {
  return (
    <div id="background">
      <div className="container mx-auto mt-16 w-[1100px]">
        <div className="text-center mt-12">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; BACKGROUND & PROBLEM &nbsp; ]
          </p>
        </div>
        <p className="text-[16px] font-light mt-8 mb-4">
          In collaboration with the Industrial Technology Research Institute
          (ITRI), HCG embarked on the development of UTech Toilet, an innovative
          urine analysis solution aimed at facilitating early detection of
          kidney diseases among the Taiwanese population. Unlike conventional
          washlet products in Asia, UTech Toilet integrates urine testing
          capabilities, necessitating a revolution of the user experience
          journey and interface system.
        </p>

        <ModalImageFree imgURL={img_intro} />

        <p className="text-[24px] font-bold mt-8">
          How to design an inclusive using experience?
        </p>

        <p className="text-[16px] font-light mt-4 mb-12">
          Toilets, as universally designed products, must accommodate the needs
          of diverse users, including children, the elderly, and individuals
          with disabilities. Simplicity is key, particularly for everyday tasks
          like using the toilet. Hence, the primary challenge of this innovative
          urine analysis toilet revolves around the question:{" "}
          <span className="font-bold text-[#DD663C]">
            How might we design a clear and intuitive user journey, enabling
            various users to operate the urine analysis toilet within a
            10-second toileting time?
          </span>{" "}
        </p>
        <Users className='w-full' />
      </div>
    </div>
  );
}
