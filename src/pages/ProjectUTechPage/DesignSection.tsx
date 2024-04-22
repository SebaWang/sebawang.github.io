import { ReactElement } from "react";
import ModalImage from "../../Components/Component/ModalImage";
import ModalImageFree from "../../Components/Component/ModalImageFree";
import img_01 from "../../assets/img/Project_UTech/Design Deliver/1.png";
import img_02 from "../../assets/img/Project_UTech/Design Deliver/2.png";
import img_03 from "../../assets/img/Project_UTech/Design Deliver/3.png";
import { ReactComponent as Scenario } from "../../assets/img/Project_UTech/Design Deliver/4.svg";

export default function DesignSection(): ReactElement {
  return (
    <div id="design_deliver">
      <div className="container mx-auto mt-16 w-[1100px] pb-16">
        <div className="text-center mt-12">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; DESIGN DELIVER &nbsp; ]
          </p>
        </div>
        <p className="text-content font-light mt-12 mb-6">
          Replacing the traditional multi-button controller with a new
          touch-screen controller is essential to simplify the complex operation
          of the Washlet. This innovative approach provides a clear operation
          guide and enhances the visual experience to a more concise and
          high-end level.
        </p>

        <ModalImageFree imgURL={img_01} />
        <ModalImageFree imgURL={img_02} />
        <div className="grid grid-cols-2">
          <p className="text-center">Traditional Button Remote</p>
          <p className="text-center">New Touch-Screen Remote & Application</p>
        </div>

        <p className="text-content font-bold mt-16 mb-4">The Using Scenario</p>
        <Scenario />

        <p className="text-content font-bold mt-16 mb-4">
          The Health Management Application
        </p>
        <p className="text-content font-light mt-6">
          Alongside leading the design and development of a new touch-screen
          controller, I led the team in creating an application for users to
          access their historical urine data. This innovative tool
          assists hospitals in diagnosis with the user's consent, enabling users
          to effectively track their health status.
        </p>
        <ModalImageFree imgURL={img_03} />
      </div>
    </div>
  );
}
