import { ReactElement, useState } from "react";
import img_outcome2 from "../../assets/img/img_project_finance_outcome2.png";
import { ReactComponent as ComputerReminderT } from "../../assets/img/img_project_finance_designT_01.svg";
import { ReactComponent as ComputerStimulusT } from "../../assets/img/img_project_finance_designT_02.svg";
import { ReactComponent as ComputerInspiringT } from "../../assets/img/img_project_finance_designT_03.svg";
import { ReactComponent as DownloadButton } from "../../assets/img/img_button_download.svg";
import { ReactComponent as ScenarioBoard } from "../../assets/img/img_project_finance_scenario.svg";
import ModalImageFree from "../../Components/Component/ModalImageFree";
import img_service_blueprint from "../../assets/img/Project_EPQ Learning Journey/Design Deliver/curriculum.png";
import img_journey from "../../assets/img/Project_EPQ Learning Journey/Design Deliver/userjourney.jpg";
import img_journal_01 from "../../assets/img/Project_EPQ Learning Journey/Design Deliver/page1.png";
import img_journal_02 from "../../assets/img/Project_EPQ Learning Journey/Design Deliver/page2.png";
import img_journal_03 from "../../assets/img/Project_EPQ Learning Journey/Design Deliver/page3.png";
import img_design_01 from "../../assets/img/Project_EPQ Learning Journey/Design Deliver/p1.jpg"
import img_design_02 from "../../assets/img/Project_EPQ Learning Journey/Design Deliver/p2.jpg"
import img_design_03 from "../../assets/img/Project_EPQ Learning Journey/Design Deliver/f1.jpg"
import img_design_04 from "../../assets/img/Project_EPQ Learning Journey/Design Deliver/f2.jpg"
import ModalImage from "../../Components/Component/ModalImage";

export default function DesignSection(): ReactElement {
  const [currentImg, setCurrentImg] = useState("01");

  const renderContent = () => {
    switch (currentImg) {
      case "01":
        return (
          <div className="mt-4">
            <img src={img_journal_01} alt="journalImage" />
          </div>
        );
      case "02":
        return (
          <div className="mt-4">
            <img src={img_journal_02} alt="journalImage" />
          </div>
        );
      case "03":
        return (
          <div className="mt-4">
            <img src={img_journal_03} alt="journalImage" />
          </div>
        );
      default:
        return (
          <div className="mt-4">
            <img src={img_journal_01} alt="journalImage" />
          </div>
        );
    }
  };

  return (
    <div id="design_deliver">
      <div className="container mx-auto mt-16 w-[1100px] pb-16">
        <div className="text-center mt-12">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; DESIGN DELIVER &nbsp; ]
          </p>
        </div>
        <p className="text-content font-light mt-12 mb-6">
          The revamped EPQ learning journey features a design-led teaching
          structure, which can be divided into pre-curriculum and formal
          curriculum stages, alongside a crafted physical learning journal. This
          new service{" "}
          <span className="font-bold">
            empowers learners to pinpoint their research interests in advance,
            organise their knowledge throughout the learning journey
          </span>{" "}
          and
          <span className="font-bold">
            {" "}
            systematically integrate progress and evidence
          </span>{" "}
          to enhance project presentations and reflections.
        </p>
        <ModalImageFree imgURL={img_service_blueprint} />

        <p className="text-content font-bold my-8">
          A Glimpse of the Learning Journal{" "}
        </p>

        <div className="flex gap-2 text-content font-light flex-wrap">
          <div
            className={`border-[1px] p-1 px-4 rounded-full cursor-pointer duration-300 hover:scale-[1.03] ${
              currentImg === "01"
                ? "border-[#DD663C] text-[#DD663C]"
                : "border-gray-500 text-gray-500"
            }`}
            onMouseDown={() => setCurrentImg("01")}
          >
            Know Yourself Page
          </div>
          <div
            className={`border-[1px] p-1 px-4 rounded-full cursor-pointer duration-300 hover:scale-[1.03] ${
              currentImg === "02"
                ? "border-[#DD663C] text-[#DD663C]"
                : "border-gray-500 text-gray-500"
            }`}
            onMouseDown={() => setCurrentImg("02")}
          >
            Literature Reading Page
          </div>
          <div
            className={`border-[1px] p-1 px-4 rounded-full cursor-pointer duration-300 hover:scale-[1.03] ${
              currentImg === "03"
                ? "border-[#DD663C] text-[#DD663C]"
                : "border-gray-500 text-gray-500"
            }`}
            onMouseDown={() => setCurrentImg("03")}
          >
            Journey Reflection and Achievement Page
          </div>
        </div>

        <div className="relative">{renderContent()}</div>

        <p className="text-content font-bold mt-12 mb-4">
          New EPQ Learning Journey
        </p>
        <ModalImageFree imgURL={img_journey} />

        <p className="text-content font-bold mt-12 mb-4">Pre Curriculum</p>

        <p className="text-content font-light ">
          Before delving into an EPQ project, learners must first discover their
          true passion and topic of interest to avoid feelings of anxiety and
          uncertainty. The pre-curriculum stage acts as a buffer, offering
          various visualisation materials and gamification sessions to{" "}
          <span className="font-bold">
          identify their enthusiasm and goals.
          </span>
        </p>

        <div className='grid grid-cols-2 gap-4 mt-4'>
          <ModalImage imgURL={img_design_01} />
          <ModalImage imgURL={img_design_02} />
        </div>


        
        <p className="text-content font-bold mt-12 mb-4">Formal Curriculum</p>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          <ModalImage imgURL={img_design_03} />
          <ModalImage imgURL={img_design_04} />
        </div>
      </div>
    </div>
  );
}
