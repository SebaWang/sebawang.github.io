import { ReactElement } from "react";
import img_footer from "../../assets/img/img_project_finance_footer.png";
import { Link } from "react-router-dom";

export default function ReflectionSection(): ReactElement {
  return (
    <div className=" bg-[#FFFAF8]" id="reflection">
      <div className="container mx-auto mt-12 w-[1100px] pb-24">
        <div className="text-center pt-12 mb-8">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; REFLECTION &nbsp; ]
          </p>
        </div>

        <p className="text-[24px] font-bold mt-12">
          Seeing an educational service that helps learners discover themselves
          is inspiring.
        </p>
        <p className="text-[16px] font-light mt-4">
          In this project, my team and I addressed a common educational issue:
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

        <div className="mx-auto text-center mt-4 pb-16">
          <Link to="/project">
            <button className="mt-12 border-[1px] border-[#DD663C] text-[#DD663C] py-2 px-16 rounded-md text-[16px] font-semibold hover:bg-[#DD663C] hover:text-white duration-300">
              Back To Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
