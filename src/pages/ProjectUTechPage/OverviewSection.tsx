import { ReactElement } from "react";
import img_outcome from "../../assets/img/Project_UTech/outcome.png"

export default function OverviewSection(): ReactElement {
  return (
    <div id="overview">
      <div className="container mx-auto mt-12 w-[1100px]">
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
              <span className="font-bold"> 16% increase in early detection of urinary tract infections and kidney stones. </span>
            </p>

          <div>
            <div className="flex gap-2 text-content font-light flex-wrap mt-8">
              <div className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300">
              UI / UX Design
              </div>
              <div className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300">
              Strategy Design
              </div>
              <div className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300">
              Universal Design
              </div>
            </div>
          </div>
          </div>
          <div className="flex flex-col">
            <img src={img_outcome} alt='outcome'className='w-[100%]' />
          </div>

        </div>
      </div>
    </div>
  );
}
