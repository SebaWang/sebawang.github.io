import { ReactElement } from "react";
import img_design_01 from "../../assets/img/img_project_mob_process_01.jpg";
import img_design_02 from "../../assets/img/img_project_mob_process_03.jpg";
import img_design_03 from "../../assets/img/img_project_mob_design_02.png";
import img_design_04 from "../../assets/img/img_project_mob_process_08.jpg";
import img_design_05 from "../../assets/img/img_project_mob_design_01.jpg";
import img_design_06 from "../../assets/img/img_project_mob_process_12.jpg";
import img_design_07 from "../../assets/img/img_project_mob_design_03.jpg";
import img_design_08 from "../../assets/img/img_project_mob_design_04.jpg";
import img_design_09 from "../../assets/img/img_project_mob_design_05.png";
import img_swiper_101 from "../../assets/img/img_project_mob_swiper_101.jpg";
import img_swiper_102 from "../../assets/img/img_project_mob_swiper_102.png";
import img_swiper_103 from "../../assets/img/img_project_mob_swiper_103.jpg";
import img_swiper_104 from "../../assets/img/img_project_mob_swiper_104.jpg";
import img_swiper_201 from "../../assets/img/img_project_mob_swiper_201.jpg";
import img_swiper_202 from "../../assets/img/img_project_mob_swiper_202.jpg";
import img_swiper_203 from "../../assets/img/img_project_mob_swiper_203.jpg";
import img_swiper_204 from "../../assets/img/img_project_mob_swiper_204.jpg";
import img_gds_01 from "../../assets/img/img_project_mob_gds_01.jpg"
import img_gds_02 from "../../assets/img/img_project_mob_gds_02.jpg"
import img_gds_03 from "../../assets/img/img_project_mob_gds_03.jpg"
import img_backcase from "../../assets/img/img_project_mob_backcast.jpg";
import img_chart from "../../assets/img/img_project_mob_actionChart.png";
import PolicySwiper from "../../Components/Component/PolicySwiper";
import ModalImage from "../../Components/Component/ModalImage";
import ModalImageFree from "../../Components/Component/ModalImageFree";
export default function DesignSection(): ReactElement {
  return (
    <div className="container mx-auto pt-24 w-[1100px] font-light" id='design_deliver'>
      <div className="text-center">
        <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
          [ &nbsp; DESIGN DELIVER &nbsp; ]
        </p>
      </div>
      <p className="text-[24px] font-bold mt-24">
        Design serves not only as an outcome but also as a medium for further
        exploration.
      </p>
      <p className="mt-2 text-[16px]">
        In our journey of crafting future scenarios, my team and I developed
        various artifacts to engage people,{" "}
        <span className="font-bold">
          symbolizing the touchpoints of future services.
        </span>{" "}
        By immersing participants in these artifacts, we gained insights into
        which narratives and policies resonated best with them: The Ministry of
        Biodiversity.
      </p>
      <div className="grid grid-cols-3 gap-4 mt-4">
        <ModalImage imgURL={img_design_01} description="Utilizing simple materials to swiftly generate future artifacts for interaction." />
        <ModalImage imgURL={img_design_02} description="Future Artifact: Informational mail from the Ministry of Biodiversity." />
        <ModalImage imgURL={img_design_03} description="Utilizing present-day elements (e.g., Instagram) to bridge connections with future scenarios." />
        <ModalImage imgURL={img_design_04} description="Creating tangible artifacts to illustrate future scenarios." />
        <ModalImage imgURL={img_design_05} description="Future Artifact: The Microbe National Park and Preserve." />
        <ModalImage imgURL={img_design_06} description="Exhibiting and interacting at the GDS." />
      </div>
      <p className="text-[24px] font-bold mt-12">
        The Ministry of Biodiversity and three pilot policies are compelling.
      </p>
      <p className="mt-2 text-[16px]">
        After a series of storytelling sessions about future worldviews, I found
        that using the fictional government entity, the Ministry of
        Biodiversity, helped participants quickly grasp the futuristic context.
        Crafting
        <span className="font-bold"> three pilot policies</span> and
        corresponding future scenarios, my team engaged the public and experts
        from the GDS in deep discussions.
      </p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <ModalImage imgURL={img_design_07} />
        <ModalImage imgURL={img_design_08} />
      </div>
      <div className="grid grid-cols-12 gap-8 mt-16 pb-24">
        <div className="col-span-7 content-center">
          <p className="text-[16px] font-bold">
            Policy 01 - Nature Recovery Season
          </p>
          <p className="text-[16px] mt-1 font-light">
            What if public spaces like parks and riversides are closed for
            natural restoration?
          </p>
          <p className="text-[16px] mt-2 font-[#6F6F6F]">
            In response to pressing environmental concerns, the Ministry of
            Biodiversity introduced the Nature Recovery Season policy, reshaping
            the city's landscape. Now, the city is no longer solely centred
            around humans. During this period, protected areas are off-limits to
            residents, monitored by officials and volunteers. Violators face
            fines, with policy details available on the GOV.UK website.
          </p>
        </div>
        <div className="col-span-5 text-center content-center">
          <PolicySwiper
            imgURLs={[
              img_swiper_101,
              img_swiper_102,
              img_swiper_103,
              img_swiper_104,
            ]}
          />
        </div>
        <div className="col-span-6 text-center content-center">
          <PolicySwiper
            imgURLs={[
              img_swiper_201,
              img_swiper_202,
              img_swiper_203,
              img_swiper_204,
            ]}
          />
        </div>
        <div className="col-span-6 content-center">
          <p className="text-[16px] font-bold">
            Policy 02 - Biodiversity Conservation Certificate
          </p>
          <p className="text-[16px] mt-1 font-light">
            What if knowledge and awareness of environmental protection become a
            requirement for higher education?
          </p>
          <p className="text-[16px] mt-2 font-[#6F6F6F]">
            Partnering with the Department of Education, the Ministry of
            Biodiversity requires schools to include a Biodiversity Conservation
            Certificate program. This certificate, earned after 300 hours of
            training and conservation efforts, may become a prerequisite for
            university admission.
          </p>
        </div>
        <div className="col-span-7 content-center">
          <p className="text-[16px] font-bold">
            Policy 03 - The Bill of Multi-species Rights
          </p>
          <p className="text-[16px] mt-1 font-light">
            What if non-human species have legal rights?
          </p>
          <p className="text-[16px] mt-2 font-[#6F6F6F]">
            The Bill of Multi-species Rights grants legal protection to
            non-human species, empowering official attorneys to prosecute those
            harming biodiversity, particularly large corporations. Companies are
            obligated to uphold environmental protection under this legislation.
          </p>
        </div>
        <div className="col-span-5 text-center content-center">
          <img src={img_design_09} />
        </div>
      </div>
      <p className="font-bold text-[24px]">
        Backcast and formulate new communication strategies.
      </p>
      <p className="text-[16px] mt-2">
        Through iterative feedback collection and analysis, I was able to
        backcast to the present reality, creating a concise stakeholder action
        chart and a report for future policy communication strategies. These
        serve as catalysts for future strategies within GDS and DEFRA. They
        highlight{" "}
        <span className="font-bold">
          the importance of enhancing public communication through
          storytelling-like interaction
        </span>{" "}
        and the potential for interdepartmental collaboration to address
        environmental and agricultural challenges.
      </p>
      <p className="text-[16px] mt-4 font-bold">
        Forecast and Backcast In this Project
      </p>
      <ModalImageFree imgURL={img_backcase} />
      <p className="text-[16px] mt-4 font-bold">The Stakeholder Action Chart</p>
      <ModalImageFree imgURL={img_chart} />
      <p className="text-[16px] mt-8 font-bold">Exhibition Within GDS</p>
      <div className="grid grid-cols-3 gap-4 mt-4 mb-16">
        <ModalImage imgURL={img_gds_01} />
        <ModalImage imgURL={img_gds_02} />
        <ModalImage imgURL={img_gds_03} />
      </div>
    </div>
  );
}
