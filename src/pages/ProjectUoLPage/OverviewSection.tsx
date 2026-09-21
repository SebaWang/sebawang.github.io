import { ReactElement } from "react";
import img_outcome from "../../assets/img/img_project_placeholder_grid.svg";

export default function OverviewSection(): ReactElement {
  return (
    <>
      <div id="overview" className="hidden md:block">
        <div className="container mx-auto mt-12 md:w-[1100px]">
          <div className="grid grid-cols-2">
            <div>
              <p className="font-bold text-[40px] text-[#DD663C]">
                Design with GDS Standards
              </p>
              <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px] mt-4">
                &nbsp;
              </div>
              <p className="text-content font-light mt-8 mb-8">
                Overview text to be added. This section introduces the
                project, the people involved, and the gap the work set out to
                close.
              </p>
              <div className="flex gap-2 text-content font-light flex-wrap">
                <div
                  className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300"
                  style={{ cursor: "default" }}
                >
                  Method to be added
                </div>
                <div
                  className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300"
                  style={{ cursor: "default" }}
                >
                  Method to be added
                </div>
                <div
                  className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300"
                  style={{ cursor: "default" }}
                >
                  Method to be added
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <img src={img_outcome} alt="Overview visual to be added" />
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
              [ &nbsp; PROJECT PROCESS OVERVIEW &nbsp; ]
            </p>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-6 pb-16">
            {[1, 2, 3, 4].map((n) => (
              <img
                key={n}
                src={img_outcome}
                alt={`Process step ${n} to be added`}
                className="w-full aspect-[3/2] object-cover"
              />
            ))}
          </div>
        </div>
      </div>
      <div
        id="project_info"
        className="block md:hidden container mx-auto bg-[#F3EEEE] pb-24"
      >
        <p className="tracking-widest text-[#EA5514] text-[16px] font-semibold pt-24">
          Research Question
        </p>
        <div className="w-[10px] border-b-[4px] border-[#EA5514] h-[16px]">
          &nbsp;
        </div>
        <p className="text-[16px] mt-4">
          How might a university improve recruitment and training services
          for its research staff, and evaluate them against GDS service
          standards?
        </p>
        <img src={img_outcome} alt="outcome" className="w-full" />

        <p className="tracking-widest text-[#EA5514] text-[16px] font-semibold mt-12">
          Outcome
        </p>
        <div className="w-[10px] border-b-[4px] border-[#EA5514] h-[16px]">
          &nbsp;
        </div>
        <p className="text-[16px] mt-4">Outcome to be added.</p>
      </div>
    </>
  );
}
