import { ReactElement } from "react";
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
          Rational Design for Emotional Experience.
        </p>
        <p className="text-content font-light mt-4">
          In the rapidly evolving services of Web3 and NFTs, there remain
          abundant opportunities for exploration and optimization. While the NFT
          market is undeniably competitive, I believe sustained success hinges
          not on leveraging celebrity endorsements or artist collaborations.
          Instead, a robust NFT project service is essential for fostering
          enduring relationships with followers and maximizing the benefits of
          NFT ownership.{" "}
          <span className="font-bold">
            {" "}
            Through systematic analysis and design, the NFT owner experience
            should evoke feelings of pleasure and achievement, driving
            meaningful engagement.
          </span>{" "}
          As a strategy and service designer, this is the goal which I am
          committed to.
        </p>

        <div className="mx-auto text-center mt-4 pb-16">
          <Link to="/project">
            <button className="mt-12 border-[1px] border-[#DD663C] text-[#DD663C] py-2 px-16 rounded-md text-content font-semibold hover:bg-[#DD663C] hover:text-white duration-300">
              Back To Projects
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
