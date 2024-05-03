import { ReactElement } from "react";
import img_footer from "../../assets/img/img_project_finance_footer.png";
import { Link } from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ContactMobile from "../../Components/Component/ContactMobile";
import ProjectPreviewCard from "../ProjectPage/ProjectPreviewCard";
import img_project_04 from "../../assets/img/img_project_cover_04.png";

export default function ReflectionSection(): ReactElement {
  return (
    <div className=" bg-[#FFFAF8]" id="reflection">
      <div className="container mx-auto mt-12 md:w-[1100px] pb-24">
        <div className="text-center pt-12 mb-8">
        <p className="text-[16px] md:text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
              [ &nbsp; REFLECTION &nbsp; ]
            </p>
        </div>

        <p className="text-[20px] md:text-[24px] font-bold mt-12">
          Seeing an educational service that helps learners discover themselves
          is inspiring.
        </p>
        <p className="text-content md:font-light mt-4">
          In this project, my team and I addressed a educational issue:
          the tendency towards standardised learning. Through design, we
          injected diversity into the unified service system, valuing the
          potential of individuals and creating a motivating learning
          environment. Witnessing non-traditional learners express passion for
          subjects like anthropology and filmmaking was inspiring, as it led to
          profound self-discovery. This experience highlighted the{" "}
          <span className="font-bold">
            {" "}
            importance of designers advocating for inclusion and accessibility,
          </span>{" "}
          demonstrating the power of service design to unlock endless
          possibilities for individuals.
        </p>

        <div className="mx-auto text-center mt-4 pb-16 hidden md:block">
          <Link to="/project">
            <button className="mt-12 border-[1px] border-[#DD663C] text-[#DD663C] py-2 px-16 rounded-md text-content font-semibold hover:bg-[#DD663C] hover:text-white duration-300">
              Back To Projects
            </button>
          </Link>
        </div>
      </div>

      <div className="bg-[#D9D9D9] block md:hidden">
        <div className="container mx-auto py-12">
          <p className="text-[20px] flex items-center mb-6">
            See other projects
            <FontAwesomeIcon icon={faArrowRight} className="ml-4" />
          </p>

          <Link to="/project/medicy">
              <ProjectPreviewCard
                imgURL={img_project_04}
                title="MEDICY: NFT News Fantasy"
                subTitle="Strategy & Service Design for NFT Trading"
                concept="NFT Development Strategy"
                content="How might NFT traders simplify the process of NFT values evaluation without navigating multiple platforms and piecing together fragmented information?"
              />
            </Link>
          <div className="text-center border-[1px] border-[#575757] text-[12px] p-6 mt-12">
            For a better reading experience and details about the research and design process, please visit my website using a laptop or larger screen. Thank you!
            </div>
        </div>
      </div>
      <div className="block md:hidden">
          <ContactMobile />
      </div>
    </div>
  );
}
