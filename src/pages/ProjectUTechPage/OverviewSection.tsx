import { ReactElement } from "react";
import img_outcome from "../../assets/img/Project_UTech/outcome.png";
import img_outcome_m from "../../assets/img/Project_UTech/Design Deliver/1.png"

export default function OverviewSection(): ReactElement {
  return (
    <div id="overview">
      <div className="container mx-auto mt-12 md:w-[1100px]  hidden md:block">
        <p className="font-bold text-[40px] text-[#DD663C]">UTech</p>
        <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px] mt-4">
          &nbsp;
        </div>
        <div className="grid grid-cols-2 gap-8 mt-6">
          <div className="flex flex-col">
            <p className="text-content font-light">
              In leading the UX team, one of my focus was to ensure a smooth
              user experience with our innovative urine analysis toilet. We
              meticulously considered diverse user physical conditions and
              simulated various usage scenarios,
              <span className="font-bold">
                {" "}
                aiming to enable all users to operate the toilet within a
                10-second toileting time, eliminating unnecessary delays.
              </span>
              Besides, I developed an health management application to assist
              users in reviewing and managing their health conditions through
              urine analysis. Through collaboration with 3 teaching hospitals,
              our efforts led to a
              <span className="font-bold">
                {" "}
                16% increase in early detection of urinary tract infections and
                kidney stones.{" "}
              </span>
            </p>

            <div>
              <div className="flex gap-2 text-content font-light flex-wrap mt-8">
                <div
                  className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300"
                  style={{ cursor: "default" }}
                >
                  UI / UX Design
                </div>
                <div
                  className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300"
                  style={{ cursor: "default" }}
                >
                  Strategy Design
                </div>
                <div
                  className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300"
                  style={{ cursor: "default" }}
                >
                  Universal Design
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <img src={img_outcome} alt="outcome" className="w-[100%]" />
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
          How might we design a clear and intuitive user journey, enabling
          various users to operate the urine analysis toilet within 10 secs
          toileting time?
        </p>
      <img src={img_outcome_m} alt='outcome' className="w-full aspect-[308/204] object-cover object-left mt-6" />
        <p className="tracking-widest text-[#EA5514] text-[16px] font-semibold mt-12">
          Outcome
        </p>
        <div className="w-[10px] border-b-[4px] border-[#EA5514] h-[16px]">
          &nbsp;
        </div>
        <p className="text-[16px] mt-4">
          An User System for the Controller,
          <br />
          A Health Management Application
          <br />
        </p>
      </div>
    </div>
  );
}
