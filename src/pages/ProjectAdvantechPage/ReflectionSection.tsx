import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Reflection } from "../../assets/img/Project_Telehealth/reflection.svg";

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
          Embracing various problem-solving perspectives is the fascinating part
          of Service Design.
        </p>
        <div className="grid grid-cols-5 mt-6 gap-16">
          <div className="col-span-2 ">
            <Reflection className="h-[90%]" />

            <p className="text-[18px] font-light mt-4">
              Designers should shift various perspectives to adjust their
              problem-solving approach.
            </p>
          </div>
          <div className="col-span-3 flex flex-col justify-center">
            <p className="text-[18px] font-light">
              Genuine innovation requires the integration of design thinking and
              business management knowledge. Throughout my year-long project,
              I've come to realize that designers must not only focus on
              end-users but also adopt a managerial perspective. This involves
              understanding how innovations impact users, the company, and the
              industry as a whole. As such, I play the role of not only a
              designer but also an innovation diffusion strategist, ensuring
              that our innovations effectively penetrate the market while
              remaining closely connected to end-users. I reckon that embracing
              various levels of problem analysis and understanding stakeholders'
              perspectives adds a fascinating dimension to service design.
            </p>
          </div>
        </div>
        <div className="mx-auto text-center mt-4 pb-16">
          <Link to="/project">
            <button className="mt-12 border-[1px] border-[#DD663C] text-[#DD663C] py-2 px-16 rounded-md text-[18px] font-semibold">
              Back To Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
