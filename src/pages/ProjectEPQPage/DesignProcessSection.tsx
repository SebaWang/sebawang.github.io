import { ReactElement } from "react";
import img_swiper_01 from "../../assets/img/Project_EPQ Learning Journey/Process & Challenges/ws1.png";
import img_swiper_02 from "../../assets/img/Project_EPQ Learning Journey/Process & Challenges/ws2.png";
import img_swiper_03 from "../../assets/img/Project_EPQ Learning Journey/Process & Challenges/ws3.png";
import img_language from "../../assets/img/Project_EPQ Learning Journey/Process & Challenges/2.png"
import PolicySwiper from "./Swiper";

export default function DesignProcessSection(): ReactElement {
  return (
    <div className="bg-[#F8F8F8] pb-16" id="design_challenges">
      <div className="container mx-auto mt-12 w-[1100px]">
        <div className="text-center pt-12 mb-8">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; DESIGN PROCESS & CHALLENGES &nbsp; ]
          </p>
        </div>

        <p className="font-bold text-[24px]">
          Devleoping workshops to create a psychological safety environment.
        </p>
        <p className="font-light text-content mt-6">
          During the initial participation in their courses, I noticed that
          learners maintained a significant distance from us, often remaining
          silent and hesitant to share their thoughts and opinions. To{" "}
          <span className="font-bold">
            create an atmosphere of psychological safety and openness,
          </span>{" "}
          my team and I initiated a series of workshops to interact with them.
        </p>

        <PolicySwiper imgURLs={[img_swiper_01, img_swiper_02, img_swiper_03]} />

        <p className="font-bold text-[24px] mt-12">
          It is essential to be conscious of language.
        </p>
        <p className="font-light text-content mt-6">
          Given that stakeholders may have backgrounds in addiction, mental
          health issues, or the criminal justice system, I recognised the
          importance of being mindful of our language during interactions to
          avoid triggering them. Thus, I suggested to my team that we{" "}
          <span className="font-bold">develop a language database</span> to
          remind ourselves about conversations with learners in advance and
          ensure we avoid stigmatising language.
        </p>
        <img src={img_language} alt="LanguageImage" className='w-full mt-8' />
      </div>
    </div>
  );
}
