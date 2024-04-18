import { ReactElement } from "react";
import ModalImageFree from "../../Components/Component/ModalImageFree";
import img_health from "../../assets/img/Project_Telehealth/Background & Problem/ihealthcare.png";
import img_cof from "../../assets/img/Project_Medicy/Background & Problem/nft evaluation journey.jpg";

export default function BackgroundSection(): ReactElement {
  return (
    <div id="background">
      <div className="container mx-auto mt-16 w-[1100px]">
        <div className="text-center mt-12">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; BACKGROUND & PROBLEM &nbsp; ]
          </p>
        </div>
        <p className="text-[18px] font-light mt-8">
          In the global pandemic era, remote healthcare has emerged as a
          cornerstone in the evolution of the medical field. As a leading figure
          in the medical IoT sector, Advantech stands at the vanguard of this
          transformative shift. Within Advantech's remote healthcare development
          team, I, as a service designer, have encountered the intricate
          challenges of introducing telemedicine initiatives in Taiwan. One
          notable obstacle is the absence of systematic integration.
        </p>
        <p className="text-[18px] font-bold mt-8">
          The Advantech's iHealthcare Architecture
        </p>

        <ModalImageFree imgURL={img_health} />

        <p className="text-[24px] font-bold mt-8">
          Integrating telemedical hardware and software is necessary.
        </p>

        <p className="text-[18px] font-light mt-4 mb-12">
          After conducting interviews with medical professionals and
          administrators, the marketing specialist and I uncovered a significant
          disconnect.{" "}
          <span className="font-bold">
            Despite the thriving development of telemedical hardware and
            software in Taiwan, there needs to be more practical integration
            between the two.{" "}
          </span>
          This fragmentation has led to reluctance among executives and medical
          professionals to adopt these innovative tools. How can we bridge this
          gap?{" "}
          <span className="font-bold text-[#DD663C]">
            How might Advantech seamlessly integrate the hardware and software,
            enabling medical professionals to conduct more precise diagnoses and
            enhance communication experiences?
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
