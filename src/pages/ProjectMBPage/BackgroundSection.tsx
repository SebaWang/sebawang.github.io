import { ReactElement } from "react";
import img_background_history from "../../assets/img/img_project_mob_background.png";
import { ReactComponent as BGQuote } from "../../assets/img/quote_mb.svg";
export default function BackgroundSection(): ReactElement {
  return (
    <div className="container mx-auto pt-16 md:pt-24 md:w-[1100px]  font-light" id='background'>
      <div className="text-center">
        <p className="text-[16px] md:text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
          [  BACKGROUND & PROBLEM  ]
        </p>
      </div>
      <p className="text-[20px] md:text-[24px] font-bold mt-16 md:mt-24">
        Environmental policy discussions require more resonance.
      </p>
        <BGQuote className="w-full hidden md:block" />
      <p className="mt-4 text-content">
        In discussions with the Government Digital Service (GDS), I considered
        whether the public's lack of interest in environmental policy was due to
        the need for more resonance. This makes it challenging for the
        Department for Environment, Food & Rural Affairs (DEFRA) and the GDS to
        gather public opinions for future policy strategies. As the government
        prioritizes nature conservation and future environmental development, a
        crucial question arises:{" "}
        <span className="text-[#DD663C] font-bold">
          How might the government effectively engage and communicate
          environmental and agricultural policies to the public?
        </span>
      </p>
      <img src={img_background_history} className="w-full my-12 block md:hidden" />
      <p className="mt-6 text-[20px] md:text-[24px] font-bold">
        Storytelling is an essential element of policy communication.
      </p>
      <p className="mt-6 md:mt-2 text-content">
        In the quest to enhance public engagement and foster captivating
        discussions on policy matters for GDS and DEFRA, my team recognized the
        potential of speculative design methodology. It could serve as an
        effective approach to engaging people and informing near-future
        strategies. Our journey began with two creative and powerful questions:{" "}
      </p>
      <p className="font-bold text-content mt-6 md:mt-0 ml-4 md:ml-0">
        1. What if societies must transition from being "egotistical" to
        "ecotistical" in response to declining biodiversity?
      </p>
      <p className="font-bold text-content ml-4 md:ml-0">
        2. What if the UK government takes a proactive strategy towards
        environmental conservation?
      </p>
      <p className="text-content mt-6 md:mt-0">
        With this in mind, I led my team to construct a compelling narrative
        that would capture the imagination and provoke thought on environmental
        policies.
      </p>
      <img src={img_background_history} className="w-3/4 mx-auto my-6 hidden md:block" />
    </div>
  );
}
