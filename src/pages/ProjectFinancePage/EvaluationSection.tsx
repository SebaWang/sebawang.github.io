import { ReactElement } from "react";
import { ReactComponent as Star } from "../../assets/img/icon_star.svg";
import { ReactComponent as Bulb } from "../../assets/img/icon_bulb.svg";
import { ReactComponent as Paper } from "../../assets/img/icon_paper.svg";

export default function EvaluationSection(): ReactElement {
  return (
    <div
      className="container mx-auto mt-12 md:w-[1100px] pb-12"
      id="evaluation"
    >
      <div className="text-center pt-12 mb-8">
        <p className="text-[16px] md:text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
          [ &nbsp; EVALUATION &nbsp; ]
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-12 mt-4 ">
        <div className="flex flex-col gap-4">
          <Star className="h-[102px] mx-auto md:mx-[0]" />
          <p className="md:text-content font-bold text-center md:text-left text-[20px]">
            A Popular Service Tool
            <br />
            For Young Adults with ADHD
          </p>
          <p className="text-content font-light text-left hidden md:block">
            This project successfully delineated the financial learning journey
            and developed a service tool tailored for individuals with ADHD. The
            A+ Shopper was piloted by{" "}
            <span className="font-bold">over 60 adults</span> with ADHD for two
            months, resulting in a wealth of positive feedback and reviews.
          </p>
          <p className="text-content text-left md:hidden block">
            The A+ Shopper was piloted by{" "}
            <span className="font-bold">over 60 adults</span> with ADHD for two
            months, resulting in a wealth of positive feedback and reviews.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Bulb className="h-[102px] mx-auto md:mx-[0]" />
          <p className="md:text-content font-bold text-center md:text-left text-[20px]">
            The Financial Course
            <br />
            Inspired By The Project
          </p>
          <p className="text-content font-light text-left hidden md:block">
            With the insights gained from this research and design, The Brain
            Charity launched new financial management courses. These courses{" "}
            <span className="font-bold">attracted over 30 participants</span>{" "}
            and aimed to help adults develop alternative dopamine activities and
            awareness within <span className="font-bold">1 years.</span>
          </p>
          <p className="text-content text-left md:hidden block">
            The ADHD charities launched new financial management courses,{" "}
            <span className="font-bold">attracting over 30 participants</span>{" "}
            and aimed to help young adults develop alternative dopamine
            activities within 1 years.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Paper className="h-[102px] mx-auto md:mx-[0]" />
          <p className="md:text-content font-bold text-center md:text-left text-[20px]">
            An Excellent Design Case
            <br />
            For Financial Inclusion
          </p>
          <p className="text-content font-light text-left hidden md:block">
            I view this project as a compelling design case that can inspire
            companies to explore methods of integrating financial inclusion into
            their services, ensuring that everyone achieves an A+ in finance. I
            believe this project{" "}
            <span className="font-bold">
              not only benefits people with ADHD but also those who experience
              similar situations of impulsive shopping.
            </span>
          </p>
          <p className="text-content text-left md:hidden block">
            This project can inspire companies to explore methods of integrating
            financial inclusion into their services, ensuring that everyone
            achieves an A+ in finance. The project{" "}
            <span className="font-bold">
              not only benefits people with ADHD but also those who experience
              similar situations of impulsive shopping.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
