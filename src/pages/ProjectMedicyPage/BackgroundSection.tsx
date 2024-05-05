import { ReactElement } from "react";
import { ReactComponent as Quote } from "../../assets/img/Project_EPQ Learning Journey/Background & Problem/quote.svg";
import ModalImageFree from "../../Components/Component/ModalImageFree";
import ModalImage from "../../Components/Component/ModalImage";
import img_chat from "../../assets/img/Project_Medicy/Background & Problem/chat.png";
import img_cof from "../../assets/img/Project_Medicy/Background & Problem/nft evaluation journey.jpg";

export default function BackgroundSection(): ReactElement {
  return (
    <div id="background">
      <div className="container mx-auto mt-16 md:w-[1100px]">
        <div className="text-center mt-12">
          <p className="text-[16px] md:text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ BACKGROUND & PROBLEM ]
          </p>
        </div>
        <p className="text-content font-light mt-8 hidden md:block">
          The burgeoning NFT art market has garnered significant attention
          amidst the ascent of blockchain technology. In 2021, NFT transactions
          soared to an impressive £19.2 billion in trading volume, drawing
          participation from approximately 28.6 million active accounts.
        </p>
        <p className="text-[24px] font-bold mt-8 hidden md:block">
          The journey of NFT trading and evaluating is convoluted.
        </p>
        <p className="text-[20px] font-bold mt-8 block md:hidden">
          The Challenge of Career Development and Lack of Confidence in Learning
        </p>
        <div className="mt-6 grid md:grid-cols-5 gap-4">
          <div className="md:col-span-3">
            <p className="text-content font-light mt-1 mb-8 gap-4">
              Navigating the current NFT trading journey proves arduous for
              many. Traders must scour multiple websites to gather essential
              information such as project roadmaps, historical prices, minting
              volume, and popularity before making a purchase. Additionally,
              staying abreast of the latest project developments often
              necessitates prolonged engagement in Discord groups associated
              with NFT projects.
            </p>
            <p className="text-content font-light mt-4 mb-12">
              The user journey analysis reveals that, on average,{" "}
              <span className="font-bold">
                traders must visit at least 4 websites to obtain approximately
                15 disparate pieces of information to assess the true value and
                price of an NFT project.
              </span>{" "}
              This convoluted process underscores the need for a more
              streamlined and user-friendly approach to NFT trading.
            </p>
            <p className="text-content font-bold mb-4  hidden md:block">
              General NFT Evaluation Journey
            </p>
          </div>
          <div className="md:col-span-2 hidden md:block">
            <ModalImage imgURL={img_chat} aspectRatio="398/174" />
          </div>
        </div>

        <div className="hidden md:block">
          <ModalImageFree imgURL={img_cof} />
        </div>

        <p className="text-content font-light md:mt-4 mb-12">
          Given the decentralized nature of blockchain technology, which
          promotes transparency and openness, the design question arises:{" "}
          <span className="font-bold text-[#DD663C]">
            How might we streamline the NFT evaluating process without the need
            to navigate multiple platforms and piece together fragmented
            information?
          </span>{" "}
        </p>
      </div>
    </div>
  );
}
