import { ReactElement } from "react";

export default function OverviewSection(): ReactElement {
  return (
    <div id="overview">
      <div className="container mx-auto mt-12 md:w-[1100px] hidden md:block">
        <p className="font-bold text-[40px] text-[#DD663C]">
          Integrated Tele-health Solution
        </p>
        <div className="w-[19px] border-b-[6px] border-[#EA5514] h-[6px] mt-4">
          &nbsp;
        </div>
        <div className="grid grid-cols-2 gap-8 mt-6">
          <div className="flex flex-col ">
            <p className="text-content font-light">
              Amidst the global pandemic, remote healthcare has emerged as a
              transformative factor in the medical industry's evolution. Yet,
              the lack of seamless integration between hardware and software has
              slowed down the development of the telemedicine industry. As a
              service designer at Advantech's telemedical IoT team,
              <span className="font-bold">
                {" "}
                I collaborated with 20 medical experts, developing innovative
                service solutions for dermatology, ophthalmology,
                otolaryngology, and ICU.
              </span>
              Our efforts culminated in the deployment of telemedicine services
              to
              <span className="font-bold"> 1,300 isolation </span> wards across
              Taiwan, propelling the advancement of remote healthcare.
            </p>
            <div>
              <div className="flex gap-2 text-content font-light flex-wrap mt-8">
                <div
                  className="border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300"
                  style={{ cursor: "default" }}
                >
                  Service Design
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
                  Medical Design
                </div>
              </div>
              <p className="text-[14px] font-light mt-10">
                * Participants have consented to the use of photos.
              </p>
            </div>
          </div>
          <div className="flex flex-col ">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/8PE_UwfUsUc?si=9U1ZEhM6mBJNokVS"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
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
          How might we seamlessly integrate the telemedical hardware and
          software to enable medical professionals to conduct more precise
          diagnoses and enhance communication experiences?
        </p>
        <iframe
          className="w-full aspect-[16/9] mt-6"
          src="https://www.youtube.com/embed/8PE_UwfUsUc?si=9U1ZEhM6mBJNokVS"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <p className="tracking-widest text-[#EA5514] text-[16px] font-semibold mt-12">
          Outcome
        </p>
        <div className="w-[10px] border-b-[4px] border-[#EA5514] h-[16px]">
          &nbsp;
        </div>
        <p className="text-[16px] mt-4">
          Telemedical Inpatient Service,
          <br />
          Telemedical Outpatient Service,
          <br />
          E-commerce configurator website
          <br />
        </p>
      </div>
    </div>
  );
}
