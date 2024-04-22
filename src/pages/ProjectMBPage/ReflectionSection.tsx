import { ReactElement } from "react";
import img_crown from "../../assets/img/img_project_mob_crown.png";
import { Link } from "react-router-dom";

export default function ReflectionSection(): ReactElement {
  return (
    <div id='reflection'>
      <div className="bg-[#FFFAF8] mx-auto pt-12">
        <div className="container mx-auto w-[1100px]">
          <div className="text-center mb-12">
            <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
              [ &nbsp; REFLECTION &nbsp; ]
            </p>
          </div>
          <p className="font-bold text-[24px]">
            Building anti-fragile systems through speculative design.
          </p>
          <p className="text-content font-light mt-4 px-6 border-l-[2px] border-black">
            “Antifragility helps build a systematic guide in any situation in
            which there is randomness, unpredictability, or incomplete
            understanding of things.”
            <br />— Taleb, 2016
          </p>
          <p className="text-content mt-4 font-light">
            I believe speculative design can make designers and stakeholders
            "anti-fragile." It involves exploring the potential future
            trajectories of societies and organizations, allowing us{" "}
            <span className="font-bold">
              to identify vulnerabilities and risks within services, and foster
              overall system evolution and adaptability through ongoing
              examination and refinement
            </span>{" "}
            . Just as GDS and DEFRA found inspiration in this project,
            recognizing deficiencies in current government policy communication
            and initiating plans for innovative approaches to engage with the
            public, they can also utilize these future scenarios to proactively
            devise strategies - establishing systems to address potential
            challenges before they arise. This adaptability helps mitigate the
            scale of impacts and may lead to unexpected advantages.s
          </p>

          <p className="font-bold text-[24px] mt-12">
            Collaborating with scientists will make the project more powerful.
          </p>
          <p className="text-content mt-2 font-light">
            In terms of the project limitations, I believe that collaboration
            with biologists and scientists can enrich policy design by
            incorporating realistic details. This includes considerations of
            ecological conditions and endangered species, ensuring that policies
            are both imaginative and grounded in reality. Such a collaborative
            approach will make the pilot policy more practical and vivid,
            fostering more powerful impact. <br />
            <br />
            Thanks to the GDS team and my teammates for their invaluable
            contributions. This enriching experience in policy design and
            communication has been a tremendous learning opportunity for me.
          </p>
          <div className="w-[254px] mx-auto text-center mt-4 mb-12">
            <img src={img_crown} />
            <Link to="/project">
              <button className="mt-12 border-[1px] border-[#DD663C] text-[#DD663C] py-2 px-12 rounded-md text-content font-semibold hover:bg-[#DD663C] hover:text-white duration-300">
                Back To Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
