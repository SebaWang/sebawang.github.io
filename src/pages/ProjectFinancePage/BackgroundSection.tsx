import { ReactElement } from "react";
import { ReactComponent as Quote } from "../../assets/img/img_project_finance_quote.svg";
import { ReactComponent as Monsters } from "../../assets/img/img_project_finance_monster.svg";
import ModalImageFree from "../../Components/Component/ModalImageFree";
import img_cof from "../../assets/img/img_project_finance_overview_04.jpg";
import img_monster from "../../assets/img/monster_m.png";

export default function BackgroundSection(): ReactElement {
  return (
    <div id="background">
      <div className="container mx-auto mt-16 md:w-[1100px]">
        <div className="text-center mt-12">
          <p className="text-[16px] md:text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; BACKGROUND & PROBLEM &nbsp; ]
          </p>
        </div>
        <p className="text-[20px] md:text-[24px] font-bold mt-8">
          What is ADHD? <span className="block md:hidden"></span> Why is it relevant to financial vulnerability?
        </p>
        <Quote className="w-full scale-[1.1] hidden md:block" />
        <p className="text-content font-light mt-4 md:mt-1">
          ADHD (Attention Deficit Hyperactivity Disorder) is a condition
          characterized by a mix of contradictory traits. People with ADHD may
          frequently experience shifts between concentration and distraction.
          Some people reckon that these behaviours are associated with
          distinctive dopamine activity in their brains, which also make them
          more prone to financial challenges, such as debt issues or overdue
          payments.
        </p>
        <div className=" hidden md:block">
        <Monsters />
        </div>
        <img src={img_monster} alt='monster' className="w-full md:hidden block mt-4" />
        <p className="text-[20px] md:text-[24px] font-bold mt-12 md:mt-8">
          They do not lack financial skills but the exploration in
          dopamine-boosting activities.
        </p>
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <p className="text-content font-light mt-1">
            
            Through qulitative interviews with{" "}
            <span className="font-bold">14 individuals</span> with ADHD across
            different age groups, I unearthed a notable phenomenon: older
            individuals or those with longer diagnoses exhibit stronger
            financial management skills and confidence. This is attributed to
            their familiarity with "
            <span className="font-bold">
              Alternative Dopamine-boosting Activities
            </span>
            " such as jogging, reading, gardening, or brewing tea, which
            engage their interests and dopamine. In contrast, young adults with
            ADHD may take years to explore and adopt these alternatives, often{" "}
            <span className="font-bold">
              relying on paper-based methods for reminders.
            </span>{" "}
            However, when dopamine levels drop, they may struggle to locate
            scattered notes, resorting to online shopping or substances instead.{" "}
            <span className="font-bold text-[#DD663C]">
              How might young adults with ADHD explore and practice their
              alternative dopamine activities without a decade of trial?
            </span>
          </p>
          <ModalImageFree imgURL={img_cof} description="ADHD Financial Learning Journey: Insights gathered from interviewing 14 individuals with ADHD across different age groups and financial coaches." />
        </div>
      </div>
    </div>
  );
}
