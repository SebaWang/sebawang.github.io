import { ReactElement, useEffect, useState } from "react";
import img_page_01 from "../../assets/img/Project_Medicy/Design Deliver/page1.jpg";
import img_page_02 from "../../assets/img/Project_Medicy/Design Deliver/page2.jpg";

export default function DesignSection(): ReactElement {
  const [currentImg, setCurrentImg] = useState<string>("01");



  return (
    <div id="design_deliver">
      <div className="container mx-auto mt-16 w-[1100px] pb-16">
        <div className="text-center mt-12">
          <p className="text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; DESIGN DELIVER &nbsp; ]
          </p>
        </div>
        <p className="text-[24px] font-bold mt-12">
          An integrated website for NFT trading and evaluating.
        </p>
        <p className="text-content font-light mt-4 mb-6">
          Medicy serves as a hub for traders to access NFT information for value
          assessment and interaction. The platform offers a comprehensive view
          of the latest project news, categorized by different NFT project
          types, enabling traders to grasp the current landscape quickly.
          Additionally, Medicy features a dedicated forum where traders can
          engage in discussions about the projects. RPF NFT holders can enjoy
          premium subscription benefits, including access to watchlists,
          real-time price tracking, and advanced value analysis tools.
        </p>

        <div role="tablist" className="tabs tabs-lifted ">
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className={`tab text-content text-nowrap ${
              currentImg === "01" ? "text-[#D76565]" : "animate-bounce"
            }`}
            aria-label="Information Overview"
            checked
            onMouseDown={() => setCurrentImg("01")}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div>
              <div className="grid grid-cols-10 gap-4">
                <div className="col-span-7">
                  <img src={img_page_01} alt="PageImage01" className="w-full" />
                </div>
                <div className="col-span-3 h-full grid grid-cols-12 font-light text-content">
                  <div className="col-span-1 h-[90%] w-[60%] border-t-[1px] border-r-[1px] border-b-[1px] border-[#8C8C8C]">
                    &nbsp;
                  </div>
                  <div className="col-span-11 flex flex-col justify-center pl-4">
                    <p className="font-bold text-[#EB7979] mb-4">
                      Call to Action
                    </p>
                    <p>
                      Engage with NFT traders by holding RPF’s NFT and unlocking
                      premium holder website functions.
                    </p>
                  </div>
                  <div className="col-span-1  h-[54%] w-[60%] border-t-[1px] border-r-[1px] border-b-[1px] border-[#8C8C8C]">
                    &nbsp;
                  </div>
                  <div className="col-span-11 pl-4">
                    <p className="font-bold text-[#EB7979] mb-4">
                      News Overview
                    </p>
                    <p>
                      Stay informed with daily updates on NFT projects through
                      this comprehensive news section.
                    </p>
                  </div>
                  <div className="col-span-1 -mt-[300%]  h-[130%] w-[60%] border-t-[1px] border-r-[1px] border-b-[1px] border-[#8C8C8C]">
                    &nbsp;
                  </div>
                  <div className="col-span-11 flex flex-col justify-center pl-4 mb-[20%]">
                    <p className="font-bold text-[#EB7979] mb-4">
                      Ranking List
                    </p>
                    <p>
                      Explore the latest NFT project rankings and transaction
                      trends to gain valuable insights into the market
                      landscape.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            className={`tab  text-content text-nowrap  ${
              currentImg === "02" ? "text-[#D76565]" : "animate-bounce !border-[0px]"
            }`}
            aria-label="Project Introduction"
            onMouseDown={() => setCurrentImg("02")}
          />
          <div
            role="tabpanel"
            className="tab-content bg-base-100 border-base-300 rounded-box p-6"
          >
            <div>
              <div className="grid grid-cols-10 gap-4">
                <div className="col-span-7">
                  <img src={img_page_02} alt="PageImage01" className="w-full" />
                </div>
                <div className="col-span-3 h-full font-light text-content flex flex-col justify-center pl-4">
                  <p className="font-bold text-[#EB7979] mb-4 ">
                    Project Introduction
                  </p>
                  <p>
                    Each project introduction includes historical trends,
                    pricing details, core concepts, and official community
                    links.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
