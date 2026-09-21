import { ReactElement } from "react";

export default function AtAGlanceSection(): ReactElement {
  return (
    <div id="at_a_glance">
      <div className="container mx-auto mt-16 md:w-[1100px]">
        <div className="text-center mt-12">
          <p className="text-[16px] md:text-[20px] font-light text-[#6F6F6F] tracking-[5px]">
            [ &nbsp; AT A GLANCE &nbsp; ]
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8 max-w-[600px] mx-auto text-center">
          <div>
            <p className="tracking-[4px] text-[12px] font-bold text-[#6F6F6F]">
              DATE
            </p>
            <div className="w-[16px] border-b-[4px] border-[#EA5514] h-[4px] mx-auto mt-1 mb-2">
              &nbsp;
            </div>
            <p className="text-content font-light">Date to be added</p>
          </div>
          <div>
            <p className="tracking-[4px] text-[12px] font-bold text-[#6F6F6F]">
              ROLE
            </p>
            <div className="w-[16px] border-b-[4px] border-[#EA5514] h-[4px] mx-auto mt-1 mb-2">
              &nbsp;
            </div>
            <p className="text-content font-light">Role to be added</p>
          </div>
          <div>
            <p className="tracking-[4px] text-[12px] font-bold text-[#6F6F6F]">
              ORGANISATION
            </p>
            <div className="w-[16px] border-b-[4px] border-[#EA5514] h-[4px] mx-auto mt-1 mb-2">
              &nbsp;
            </div>
            <p className="text-content font-light">
              Organisation to be added
            </p>
          </div>
        </div>

        <p className="text-content font-light mt-12 max-w-[760px] mx-auto text-center">
          At-a-glance context to be added — who this project was for, and
          what the work set out to do.
        </p>
        <p className="text-content font-light mt-4 max-w-[760px] mx-auto text-center">
          Framing to be added, tying this case to a wider practice or
          mission it is one example of.
        </p>
      </div>
    </div>
  );
}
