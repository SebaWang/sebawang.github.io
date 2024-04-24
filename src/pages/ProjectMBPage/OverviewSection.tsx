import { ReactElement } from "react";
import img_outcome from "../../assets/img/img_project_mob_outcome.png";
import img_process_bg from "../../assets/img/img_project_mob_process_bg.jpg"
import img_process_01 from "../../assets/img/img_project_mob_process_01.jpg"
import img_process_02 from "../../assets/img/img_project_mob_process_02.jpg"
import img_process_03 from "../../assets/img/img_project_mob_process_03.jpg"
import img_process_04 from "../../assets/img/img_project_mob_process_04.jpg"
import img_process_05 from "../../assets/img/img_project_mob_process_05.jpg"
import img_process_06 from "../../assets/img/img_project_mob_process_06.jpg"
import img_process_07 from "../../assets/img/img_project_mob_process_07.jpg"
import img_process_08 from "../../assets/img/img_project_mob_process_08.jpg"
import img_process_09 from "../../assets/img/img_project_mob_process_09.jpg"
import img_process_10 from "../../assets/img/img_project_mob_process_10.jpg"
import img_process_11 from "../../assets/img/img_project_mob_process_11.jpg"
import img_process_12 from "../../assets/img/img_project_mob_process_12.jpg"
import img_process_logo from "../../assets/img/img_project_mob_process_logo.png"
import HoverImage from "../../Components/Component/HoverImage";
export default function OverviewSection(): ReactElement {
  return (
    <div id='overview'>
      <div className="container mx-auto pt-24 w-[1100px]">
        <p className="text-[40px] font-bold text-[#EA5514]">
          Ministry of Biodiversity
        </p>
        <div className="w-[19px] border-b-[6px] mt-4 border-[#EA5514] h-[6px]">
          &nbsp;
        </div>
        <div className="grid grid-cols-2 gap-4 pb-24">
          <div>
            <p className="mt-6 text-content font-light">
              The Ministry of Biodiversity operates as a fictional government
              department, stimulating and inspiring robust discussions
              surrounding policies concerning nature and agriculture. Its goal
              is to assist the Government Digital Service (GDS) in{" "}
              <span className="font-bold">
                effectively communicating environmental policies and gathering
                feedback for future policy development.
              </span>{" "}
              Employing an agile development approach, this speculative design
              project created numerous diegetic prototypes that physically
              represented the touchpoints of future services, paving the way for
              a net-zero London. The project engaged with over 30 individuals
              through these fictional policies, sparking lively discussions about
              the merits and drawbacks of these "future" service touchpoints and "current" environmental policies.
            </p>
            <div className="gap-4 mt-6 text-content">
              <button className="mr-4 mb-3 border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300"style={{ cursor: 'default' }}>
                Speculative Design
              </button>
              <button className="mr-4  border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300"style={{ cursor: 'default' }}>
                Participatory Design
              </button>
              <button className="mr-4  border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300"style={{ cursor: 'default' }}>
                Research Through Design
              </button>
              <button className="mr-4  border-[1px] border-[#DD663C] p-1 px-4 rounded-full text-[#DD663C] hover:text-white hover:bg-[#DD663C] duration-300"style={{ cursor: 'default' }}>
                Sustainable Design
              </button>
            </div>
            <p className="mt-6 text-content font-light">
              * Participants have consented to the use of photos.
            </p>
          </div>
          <div className="w-3/4 mx-auto">
            {" "}
            <img src={img_outcome} />
          </div>
        </div>
        <div className="text-center">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; PROJECT PROCESS OVERVIEW&nbsp; ]
          </p>
        </div>
      </div>

      <div className='relative w-full mt-12 '>
            <img src={img_process_bg} />
            <HoverImage width="8%" height="14%" position="left" distance="14%" top="40%" hoverLeft="24%" hoverTop="40%" imageUrl={img_process_01} description="Utilizing simple materials to swiftly generate future artifacts for interaction." />
            <HoverImage width="8%" height="14%" position="left" distance="14%" top="55%" hoverLeft="24%" hoverTop="40%" imageUrl={img_process_02} description="Future Scenario: Humans cohabiting with animals." />
            <HoverImage width="8%" height="18%" position="left" distance="33.5%" top="40%" hoverLeft="43.5%" hoverTop="40%" imageUrl={img_process_03} description="Future Artifact: Informational mail distributed by the Ministry of Biodiversity." />
            <HoverImage width="8%" height="18%" position="left" distance="33.5%" top="60%" hoverLeft="43.5%" hoverTop="40%" imageUrl={img_process_04} description="Using future artifacts to engage with people." />
            <img src={img_process_logo} className="absolute left-[45%] top-[37%] w-[8%]" />
            <HoverImage width="8%" height="24%" position="right" distance="36.8%" top="40%" hoverLeft="46.8%" hoverTop="20%" imageUrl={img_process_05} description="Crazy 8: Generating 8 ideas in 8 minutes." />
            <HoverImage width="8%" height="18%" position="right" distance="27%" top="40%" hoverLeft="37%" hoverTop="40%" imageUrl={img_process_06} description="Using future newspapers to engage with people." />
            <HoverImage width="8%" height="18%" position="right" distance="27%" top="60%" hoverLeft="37%" hoverTop="40%" imageUrl={img_process_07} description="Engaging with people at Kew Gardens." />
            <HoverImage width="7%" height="15%" position="right" distance="17.5%" top="28%" hoverLeft="26.5%" hoverTop="40%" imageUrl={img_process_08} description="Policy 01 - Nature Recovery Season" />
            <HoverImage width="7%" height="15%" position="right" distance="17.5%" top="49%" hoverLeft="26.5%" hoverTop="40%" imageUrl={img_process_09} description="Policy 02 - Biodiversity Conservation Certificate"/>
            <HoverImage width="7%" height="15%" position="right" distance="17.5%" top="70%" hoverLeft="26.5%" hoverTop="10%" imageUrl={img_process_10} description="Policy 03 - The Bill of Multi-species Rights" />
            <HoverImage width="8%" height="20%" position="right" distance="3.8%" top="20%" hoverLeft="13.8%" hoverTop="40%" imageUrl={img_process_11} />
            <HoverImage width="8%" height="20%" position="right" distance="3.8%" top="42%" hoverLeft="13.8%" hoverTop="10%" imageUrl={img_process_12} />
          </div>
    </div>
  );
}
