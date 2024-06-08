import { ReactElement, useEffect, useState } from "react";
import img_outcome2 from "../../assets/img/img_project_finance_outcome2.png";
import { ReactComponent as ComputerReminderT } from "../../assets/img/img_project_finance_designT_01.svg";
import { ReactComponent as ComputerStimulusT } from "../../assets/img/img_project_finance_designT_02.svg";
import { ReactComponent as ComputerInspiringT } from "../../assets/img/img_project_finance_designT_03.svg";
import { ReactComponent as DownloadButton } from "../../assets/img/img_button_download.svg";
import { ReactComponent as ScenarioBoard } from "../../assets/img/img_project_finance_scenario.svg";
import ModalImageFree from "../../Components/Component/ModalImageFree";
import img_service_blueprint from "../../assets/img/img_project_finance_designD_01.png"
import img_system_map from "../../assets/img/img_project_finance_designD_02.png"
import img_outcome from "../../assets/img/fin_outcome_m.png"
import img_monster from "../../assets/img/img_fin_monster_m.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function DesignSection(): ReactElement {
  const [currentImg, setCurrentImg] = useState<string>("01");

  const values = ["01", "02", "03"];
  const renderContent = () => {
    switch (currentImg) {
      case "01":
        return (
          <div className="absolute w-[37%] h-[37%] border-[4px] border-red-500 left-[23.5%] top-[27.5%]"></div>
        );
      case "02":
        return (
          <div className="absolute w-[37%] h-[37%] border-[4px] border-red-500 left-[63%] top-[27.5%]"></div>
        );
      case "03":
        return (
          <>
            <div className="absolute w-[37%] h-[4.5%] border-[4px] border-red-500 left-[23.5%] top-[63.5%]"></div>
            <div className="absolute w-[37%] h-[4.5%] border-[4px] border-red-500 left-[63%] top-[63.5%]"></div>
          </>
        );
      default:
        return (
          <div className="absolute w-[25.7%] h-[32%] border-[3px] border-red-500 left-[36.3%] top-[35%]"></div>
        );
    }
  };

  useEffect(() => {
    // 設定計時器，每3秒更新 currentImg
    const interval = setInterval(() => {
        setCurrentImg(prevImg => {
            const currentIndex = values.indexOf(prevImg);
            const nextIndex = (currentIndex + 1) % values.length;
            return values[nextIndex];
        });
    }, 3000); 

    return () => clearInterval(interval);
}, [values]);

  return (
    <div id='design_deliver' className=" ">
      <div className="container mx-auto mt-16 md:w-[1100px] md:pb-16">
        <div className="text-center mt-12">
          <p className="text-[16px] md:text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; DESIGN DELIVER &nbsp; ]
          </p>
        </div>
        <img src={img_outcome} alt='outcome' className="w-full block md:hidden" />
        <p className="text-content md:font-light mt-2 md:mt-12">
          To mitigate the prolonged financial learning journey, it is imperative
          to identify activities that genuinely captivate their interest and
          promptly remind them when dopamine levels dip. The project developed a
          Google Chrome extension called A+ Shopper.{" "}
          <span className="font-bold">
            {" "}
            This tool streamlines the exploration and adoption of alternative
            dopamine-boosting activities by identifying online shopping checkout
            behaviors and offering a suite of personalized features.
          </span>{" "}
          Moreover, it is integrated into the ADHD charity’s
          ADHD Financial Learning Course.
        </p>
        <img src={img_monster} alt='outcome' className="w-full block md:hidden mt-4" />

        <div className="grid grid-cols-3 gap-6 hidden md:grid">
          <div className="col-span-2 relative">
            <img src={img_outcome2} alt="outcome2" />
            {renderContent()}
          </div>
          <div className="col-span-1 flex flex-col gap-8 justify-center">
            <div
              className="flex flex-col hover:scale-[1.1] hover:cursor-default duration-300 w-fit px-2 ml-8"
              onMouseEnter={() => setCurrentImg("01")}
            >
              <div className="flex gap-2 items-center">
                <ComputerReminderT className="w-[80px] p-2" />
                <p className="text-content font-bold text-[#DD663C]">
                  Personalized
                  <br />
                  Reminder
                </p>
              </div>
            </div>
            <div
              className="flex flex-col hover:scale-[1.1] hover:cursor-default duration-300 w-fit px-2 ml-8"
              onMouseEnter={() => setCurrentImg("02")}
            >
              <div className="flex gap-2 items-center">
                <ComputerStimulusT className="w-[80px] p-2" />
                <p className="text-content font-bold text-[#DD663C]">
                  Positive Language
                  <br />
                  Stimulus
                </p>
              </div>
            </div>
            <div
              className="flex flex-col hover:scale-[1.1] hover:cursor-default duration-300 w-fit px-2 ml-8"
              onMouseEnter={() => setCurrentImg("03")}
            >
              <div className="flex gap-2 items-center">
                <ComputerInspiringT className="w-[80px] p-2" />
                <p className="text-content font-bold text-[#DD663C]">
                  Activities Sharing &
                  <br />
                  Inspiring
                </p>
              </div>
            </div>
            <div className="col-span-2 flex flex-col items-center">
              <a target='_blank' rel="noreferrer" href='https://drive.google.com/drive/folders/1ly0vvQjjQVFMWHZTaJ2_qobmnyU_TlOc'><DownloadButton className="cursor-pointer hover:scale-[1.1] duration-300" /></a>
              <p className="text-[10px] font-light mt-2">
                (The official version will be launched soon!)
              </p>
            </div>
          </div>
        </div>
        <p className="font-bold text-content hidden md:block">Using Scenario Storyboard</p>
        <ScenarioBoard className="w-full scale-[1.04] hidden md:block" />
        <div className="grid grid-cols-4 gap-3 mt-4 hidden md:grid">
          <p className="text-[14px] font-light">
            The user feel low dopamine, being bored and powerless.
          </p>
          <p className="text-[14px] font-light">
            The user wants to increase dopamine through online shopping.
          </p>
          <p className="text-[14px] font-light">
            A+ Shopper detects checkout pages and pops up to remind the user
            about alternative ways to produce dopamine.
          </p>
          <p className="text-[14px] font-light">
            The user's attention is redirected from shopping, and also gain
            dopamine through alternative activities.
          </p>
        </div>
        <p className='text-content font-bold mt-12 mb-4 hidden md:block'>Service Blueprint <span className='font-light'>(Online Shopping on Amazon as an Example)</span></p>
        <div className="hidden md:block"><ModalImageFree imgURL={img_service_blueprint} /></div>
        <p className='text-content font-bold mt-8 mb-4 hidden md:block'>Marketing Pirate Funnel & Service System Map</p>
        <div className="hidden md:block"><ModalImageFree imgURL={img_system_map} description="I applied the marketing method, the Pirate Funnel, to enhance the promotion and customer engagement of ADHD Financial Courses." /></div>
      </div>
    </div>
  );
}
