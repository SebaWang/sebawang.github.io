import { ReactElement } from "react";
import img_background_history from "../../assets/img/img_project_mob_background.png";
import { ReactComponent as BGQuote } from "../../assets/img/img_project_mob_quote.svg";
export default function BackgroundSection(): ReactElement {
  return (
    <div className="container mx-auto pt-24 w-[1100px]  font-light" id='background'>
      <div className="text-center">
        <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
          [ &nbsp; BACKGROUND & PROBLEM &nbsp; ]
        </p>
      </div>
      <p className="text-[24px] font-bold mt-24">
        Environmental policy discussions require more resonance.
      </p>
      <div className="mt-12 relative">
        <BGQuote className="absolute inset-0 z-0 -top-10 scale-110" />
        <div className="z-10 relative text-[20px] !font-serif pt-4 px-6">
          "In fact, discussions regarding environmental policies are only about
          1/10th as heated as those concerning tax policies."
          <p className="text-right font-bold !font-serif px-6 mt-2">
            {" "}
            - Researcher in the Government Digital Service
          </p>
        </div>
      </div>
      <p className="mt-12 text-[16px]">
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
      <p className="mt-6 text-[24px] font-bold">
        Storytelling is an essential element of policy communication.
      </p>
      <p className="mt-2 text-[16px]">
        In the quest to enhance public engagement and foster captivating
        discussions on policy matters for GDS and DEFRA, my team recognized the
        potential of speculative design methodology. It could serve as an
        effective approach to engaging people and informing near-future
        strategies. Our journey began with two creative and powerful questions:{" "}
      </p>
      <p className="font-bold text-[16px]">
        1. What if societies must transition from being "egotistical" to
        "ecotistical" in response to declining biodiversity?
      </p>
      <p className="font-bold text-[16px]">
        2. What if the UK government takes a proactive strategy towards
        environmental conservation?
      </p>
      <p className="text-[16px]">
        With this in mind, I led my team to construct a compelling narrative
        that would capture the imagination and provoke thought on environmental
        policies.
      </p>
      <img src={img_background_history} className="w-3/4 mx-auto my-6" />
    </div>
  );
}
