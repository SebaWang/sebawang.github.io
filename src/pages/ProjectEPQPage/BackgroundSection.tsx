import { ReactElement } from "react";
import { ReactComponent as Quote } from "../../assets/img/Project_EPQ Learning Journey/Background & Problem/quote.svg";
import ModalImageFree from "../../Components/Component/ModalImageFree";
import img_cof from "../../assets/img/Project_EPQ Learning Journey/Background & Problem/painpoint.jpg";
import img_bg from "../../assets/img/Project_EPQ Learning Journey/Project Process Overview/1.jpeg"

export default function BackgroundSection(): ReactElement {
  return (
    <div id="background">
      <div className="container mx-auto mt-16 md:w-[1100px]">
        <div className="text-center mt-12">
          <p className="text-[16px] md:text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ BACKGROUND & PROBLEM ]
          </p>
        </div>
        <p className="text-[20px] md:text-[24px] font-bold mt-8">
          The Challenge of Career Development and Lack of Confidence in Learning
        </p>
        <Quote className="w-full hidden md:block" />
        <p className=":text-content font-light mt-4 md:mt-1">
          People with non-traditional learning backgrounds, including those who
          have battled addiction, mental issues, and ex-offenders, often
          encounter a familiar obstacle: the necessity for A-level
          qualifications in the job market.{" "}
          <span className="font-bold">
            This requirement creates a hurdle to stable employment and career
            advancement and undermines their confidence in re-entering the
            education system.{" "}
          </span>
          To support individuals from non-traditional educational backgrounds in
          obtaining these qualifications, Open Book at Goldsmiths University
          provides Extended Project Qualification (EPQ) courses. These
          initiatives aim to dismantle the barriers that discourage people from
          pursuing higher education, helping them regain confidence for
          learning.
        </p>
        <p className="text-[20px] md:text-[24px]  font-bold mt-8">
          However, the current EPQ teaching structure still leans towards
          traditional academia.
        </p>
        <p className="text-content font-light mt-4 md:mt-1 mb-8">
          While Open Book's EPQ course caters to individuals from
          non-traditional backgrounds, its current structure leans towards
          traditional teaching methods. Learners are required to navigate
          various research methodologies and complete literature reviewing
          forms. This approach might be perceived as tedious for non-traditional
          learners, resulting in a{" "}
          <span className="font-bold">dropout rate of up to 15%.</span> As
          service designers, can we reimagine the course to be more engaging?{" "}
          <span className="font-bold text-[#DD663C]">
            How might we infuse design thinking to foster a more motivating and
            enjoyable learning journey for these non-traditional learners?
          </span>
        </p>
        <img src={img_bg} className="w-full aspect-[308/217] object-cover mt-4 block md:hidden" />
        <div className="hidden md:block">
          <p className="text-[18px] font-bold mb-4">
            Pain Points in the Current EPQ Learning Journey
          </p>
          <ModalImageFree imgURL={img_cof} />
        </div>
      </div>
    </div>
  );
}
