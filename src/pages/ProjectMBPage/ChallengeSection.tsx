import { ReactElement } from "react";
import img_challenges_01 from "../../assets/img/img_project_mob_challenge_01.png";
import img_challenges_02 from "../../assets/img/img_project_mob_challenge_02.jpg";
import img_challenges_03 from "../../assets/img/img_project_mob_challenge_03.jpg";
import img_challenges_04 from "../../assets/img/img_project_mob_challenge_04.jpg";
import img_challenges_05 from "../../assets/img/img_project_mob_challenge_05.jpg";
import img_challenges_06 from "../../assets/img/img_project_mob_challenge_06.jpg";
import img_challenges_07 from "../../assets/img/img_project_mob_challenge_07.jpg";
import ModalImageFree from "../../Components/Component/ModalImageFree";
import ModalImage from "../../Components/Component/ModalImage";
export default function ChallengeSection(): ReactElement {
  return (
    <>
      <div className="bg-[#F8F8F8] mx-auto pt-12 hidden md:block" id='process_challenges'>
        <div className="container mx-auto md:w-[1100px] font-light">
          <div className="text-center mb-12">
            <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
              [ &nbsp; PROCESS & CHALLENGES &nbsp; ]
            </p>
          </div>
          <p className="font-bold text-[24px]">
            Crafting Compelling Futures: Balancing Science and Emotion in
            Storytelling
          </p>
          <p className="text-content mt-2">
            In this project, I came to appreciate the delicate balance needed
            when crafting future scenarios. These narratives must{" "}
            <span className="font-bold">
              strike a fine balance between being imaginative yet plausible,
              requiring meticulous attention to detail
            </span>{" "}
            Future contexts must be logically consistent and withstand scrutiny.
            If the narrative lacks coherence, participants may question why
            solutions aren't proposed for issues like rising sea levels in 2050
            or sudden technological advancements to address food crises. To
            tackle this challenge,{" "}
            <span className="font-bold">
              I led my team to utilize Causal Layered Analysis to systematically
              develop the Ministry of Biodiversity's worldview,
            </span>{" "}
            ensuring coherence and engagement in the storytelling process.
          </p>
          <p className="text-content mt-4 font-bold">Causal Layered Analysis</p>
          <ModalImageFree imgURL={img_challenges_01} />
          <p className="font-bold text-[24px] mt-12">
            Friction fosters deeper conversation.
          </p>
          <p className="text-content mt-2">
            Storytelling in the speculative design is not just about envisioning
            future scenarios; it's about fostering meaningful dialogue. Crafting
            such narratives demands nuance. A lacklustre story yields shallow
            feedback, like "It's good/bad" or "I would/wouldn't use this
            service." I've learned that{" "}
            <span className="font-bold">
              effective storytelling embraces friction, presenting both
              supporters' and opposers' voices.
            </span>{" "}
            For instance, the newspaper we designed showcased both pros and cons
            of the pilot policies, encouraging participants to grapple with
            conflicting perspectives and sparking diverse opinions.
          </p>

          <div className="grid grid-cols-4 gap-x-4 gap-y-2 mt-8 pb-24">
            <div>
              <ModalImage aspectRatio="63/43" imgURL={img_challenges_02} />
            </div>

            <div>
              <ModalImage aspectRatio="63/43" imgURL={img_challenges_03} />
            </div>

            <div className="row-span-2">
              <ModalImage aspectRatio="125/178" imgURL={img_challenges_06} description="Future Newspaper Artifact: A Voice Supporting the Policies of the Ministry of Biodiversity" />
            </div>

            <div className="row-span-2">
              <ModalImage aspectRatio="125/178" imgURL={img_challenges_07}  description="Future Newspaper Artifact: A Voice Against the Policies of the Ministry of Biodiversity" />
            </div>
            <div>
              <ModalImage aspectRatio="63/43" imgURL={img_challenges_04}  />
            </div>

            <div>
              <ModalImage aspectRatio="63/43" imgURL={img_challenges_05} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
