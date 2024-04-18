import { ReactElement } from "react";
import img_01 from "../../assets/img/Project_Telehealth/Process & Challenges/1.jpg";
import img_02 from "../../assets/img/Project_Telehealth/Process & Challenges/2.jpg";
import img_03 from "../../assets/img/Project_Telehealth/Process & Challenges/3.png";
import img_04 from "../../assets/img/Project_Telehealth/Process & Challenges/4.png";
import img_05 from "../../assets/img/Project_Telehealth/Process & Challenges/5.png";
import ModalImageFree from "../../Components/Component/ModalImageFree";
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
          Utilizing visual storytelling is essential in cross-disciplinary team
          collaboration.
        </p>
        <p className="mt-6 font-light text-[18px] border-l-[2px] border-[#333333] pl-4">
          “If all you have is a hammer, everything looks like a nail.” — Abraham
          Maslow
        </p>
        <p className="font-light text-[18px] mt-6">
          In teams with diverse professional backgrounds, there's sometimes a
          tendency towards{" "}
          <span className="font-bold">
            the bias of Professional Deformation
          </span>{" "}
          where individuals view problems through the lens of their expertise
          and might misinterpret ideas from other teammates. To counter this, I
          frequently use visual communication techniques to stimulate
          imagination and facilitate discussions within the team. This approach
          not only refines ideas in the team but also ensures clarity when
          presenting progress to stakeholders. I believe that
          <span className="font-bold">
            {" "}
            mastering visualised storytelling is crucial for service designers,
            enabling effective communication and collaboration across
            multi-disciplinary teams.
          </span>
        </p>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <ModalImage imgURL={img_01} aspectRatio="511/274" />
          <ModalImage imgURL={img_02} aspectRatio="511/274" />
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <ModalImage imgURL={img_03} aspectRatio="393/241" />
          <ModalImage imgURL={img_04} aspectRatio="394/241" />
          <ModalImage imgURL={img_05} aspectRatio="394/241" />
        </div>
      </div>
    </div>
  );
}
