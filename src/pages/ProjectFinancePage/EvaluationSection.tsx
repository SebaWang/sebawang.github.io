import { ReactElement } from "react";
import { ReactComponent as Star } from "../../assets/img/icon_star.svg";
import { ReactComponent as Bulb } from "../../assets/img/icon_bulb.svg";
import { ReactComponent as Paper } from "../../assets/img/icon_paper.svg";

export default function EvaluationSection(): ReactElement {
  return (
    <div className="container mx-auto mt-12 w-[1100px] pb-12" id='evaluation'>
      <div className="text-center pt-12 mb-8">
        <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
          [ &nbsp; EVALUATION &nbsp; ]
        </p>
      </div>

      <div className="grid grid-cols-3 gap-12 mt-4">
        <div className="flex flex-col gap-4">
          <Star className="h-[102px]" />
          <p className="text-content font-bold">
            A Popular Service Tool
            <br />
            For Young Adults with ADHD
          </p>
          <p className="text-content font-light">
            This project successfully delineated the financial learning journey
            and developed a service tool tailored for individuals with ADHD. The
            A+ Shopper was piloted by{" "}
            <span className="font-bold">over 60 adults</span> with ADHD for two
            months, resulting in a wealth of positive feedback and reviews.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Bulb className="h-[102px]" />
          <p className="text-content font-bold">
            The Financial Course
            <br />
            Inspired By The Project
          </p>
          <p className="text-content font-light">
            With the insights gained from this research and design, The Brain
            Charity launched new financial management courses. These courses
            <span className="font-bold">
              attracted over 30 participants
            </span>{" "}
            and aimed to help young adults develop alternative dopamine
            activities and awareness within{" "}
            <span className="font-bold">1 years.</span>
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <Paper className="h-[102px]" />
          <p className="text-content font-bold">
            An Excellent Design Case
            <br />
            For Financial Inclusion
          </p>
          <p className="text-content font-light">
            I view this project as a compelling design case that can inspire
            companies to explore methods of integrating financial inclusion into
            their services, ensuring that everyone achieves an A+ in finance. I
            believe this project{" "}
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
