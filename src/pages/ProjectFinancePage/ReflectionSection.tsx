import { ReactElement } from "react";
import img_footer from "../../assets/img/img_project_finance_footer.png";
import { Link } from "react-router-dom";

export default function ReflectionSection(): ReactElement {
  return (
    <div className=" bg-[#FFFAF8]" id="reflection">
      <div className="container mx-auto mt-12 w-[1100px] pb-24">
        <div className="text-center pt-12 mb-8">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; REFLECTION &nbsp; ]
          </p>
        </div>

        <p className="text-[24px] font-bold mt-12">
          Problem solving begins by transcending the concept of being a problem
          solver.
        </p>
        <p className="text-content font-light mt-4">
          Throughout the project, I noted a potential drawback of the Design
          Thinking framework:{" "}
          <span className="font-bold">
            the risk of inadvertently viewing "individuals" as "problems to be
            solved,"
          </span>{" "}
          leading to stigma. To address this, I abandoned "deliberate empathy".
          I approached stakeholders with the mindset of "let’s have a friendly
          chat" rather than "I'm here to help you and understand your
          situation," treating stakeholders as equals. In this way, they are
          more likely to open up, provide input on prototypes, and even offer
          new ideas. I believe that significant design breakthroughs occur in
          such inclusive environments.
        </p>

        <p className="text-[24px] font-bold mt-8">
          Overall, is inclusive design inclusive?
        </p>
        <p className="text-content font-light mt-4">
          Despite immersing myself in various inclusive design mindsets and
          tools during the project, I pondered whether the term "inclusive
          design" genuinely indicates inclusivity if designers must rely on it
          to maintain inclusive attitudes. I often question whether I am
          genuinely inclusive or if I still harbor a privileged perspective that
          centers on designers.{" "}
          <span className="font-bold">
            My aspiration is to authentically regard each user as equal and
            unique, without needing to label it as inclusive design.
          </span>{" "}
          I see this as a continuous journey, and while I've made significant
          strides in embracing and implementing inclusive design principles,
          there's always room for growth. Moving forward, I am committed to
          carrying this spirit into future design endeavors.
          {" "} <br /> <br />For more inspiring details on the research and design process, please read my {" "}
    <a className="font-bold text-[#D2683A] underline" href="https://sebawang.github.io/Sebastian%20Wang_ADHD%20Financial%20Management.pdf" target="_blank">
      complete project report.
    </a>
    {" "}    {" "}(Dual-page viewing recommended.)
        </p>
      </div>
      <div className="relative">
        <div className="absolute w-full flex justify-center left-0 top-[10%]">
          <p className="text-[22px] text-[#D2683A] font-light text-center !font-serif">
            No brain is the same. No brain is the best.
            <br /> Each brain finds its own unique way. <br /> Each brain finds
            its{" "}
            <span className="font-bold !font-serif">
              A+ strategy in finance.
            </span>
          </p>
        </div>
        <img src={img_footer} className="w-full" />
      </div>

      <div className="mx-auto text-center mt-4 pb-16">
        <Link to="/project">
          <button className="mt-12 border-[1px] border-[#DD663C] text-[#DD663C] py-2 px-16 rounded-md text-content font-semibold hover:bg-[#DD663C] hover:text-white duration-300">
            Back To Projects
          </button>
        </Link>
      </div>
    </div>
  );
}
