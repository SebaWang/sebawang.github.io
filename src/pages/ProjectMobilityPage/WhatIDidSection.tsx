import { ReactElement } from "react";
import ChapterHeader from "./ChapterHeader";
import img_photo10a from "../../assets/img/img_project_mobility_photo10a.jpg";
import img_photo10b from "../../assets/img/img_project_mobility_photo10b.jpg";
import img_photo10c from "../../assets/img/img_project_mobility_photo10c.jpg";
import img_photo10e from "../../assets/img/img_project_mobility_photo10e.jpg";
import PhotoSlot from "./PhotoSlot";
import img_photo03 from "../../assets/img/img_project_mobility_photo03.jpg";
import img_photo04 from "../../assets/img/img_project_mobility_photo04.jpg";
import img_photo05 from "../../assets/img/img_project_mobility_photo05.jpg";
import img_photo06 from "../../assets/img/img_project_mobility_photo06.jpg";

const steps = [
  {
    number: "01",
    title: "Mixed-method literature review",
    image: img_photo03,
    bullets: [
      "Mapped the structural drivers (e.g. regulation, infrastructure, trust, labour and climate) and the disagreements around them.",
      "Reviewed 10,765 academic articles from 1993 to 2024, with publications surging to 7,022 between 2019 and 2024 alone.",
      "Trained an LLM with a doctoral researcher colleague to identify the assumptions behind these trends: which are taken for granted (the ghost scenarios), and which stand in opposition to one another.",
    ],
  },
  {
    number: "02",
    title: "Participatory futures forum",
    image: img_photo04,
    bullets: [
      "Designed and facilitated the interactive discussion sessions for the 3-day forum.",
      "Contacted and invited representatives from energy, transport infrastructure, insurance, finance, aerospace, technology, government and urban planning.",
      "Brought 60 stakeholders together for group discussion and debate, combining the perspectives of academia, policymakers, industry and practitioners.",
    ],
  },
  {
    number: "03",
    title: "Scenario planning co-design workshop",
    image: img_photo05,
    bullets: [
      "Introduced service design and design futures approaches, such as personas and user journey maps, to visualise future services.",
      "Facilitated a 2-day workshop with the centre's research colleagues, and worked with 20 external stakeholders to develop three scenarios exploring the transition possibilities and boundary conditions that large cities might face by 2050.",
      "Led 2 presentation sessions for 8 professors from the strategy and innovation department as an internal iteration.",
    ],
  },
  {
    number: "04",
    title: "Stakeholder and value relationship mapping",
    image: img_photo06,
    bullets: [
      "Introduced visual mapping tools from service design, including service system and stakeholder maps and future service blueprints, to compare organisational roles and value exchanges in 2026 and 2050.",
      "Presented to the client's strategy team and executive leadership, giving them a clearer view of the value the organisation could offer in future and of potential strategic partnerships.",
    ],
  },
];

export default function WhatIDidSection(): ReactElement {
  return (
    <div id="what_i_did">
      <div className="container mx-auto md:w-[1100px] pb-14 md:pb-16">
        <ChapterHeader number="03" title="What I Did" />

        <div className="space-y-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex flex-col md:flex-row gap-4 md:gap-8"
            >
              {/* mt-2 lines the frame up with the title's visible text,
                  which sits below the top of its 36px line box */}
              <div className="w-full md:w-[180px] md:shrink-0 md:mt-2">
                {"image" in step && step.image ? (
                  // Low-res file only; right-click and drag disabled to
                  // discourage casual saving
                  <img
                    src={step.image}
                    alt={step.title}
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                    className="w-full aspect-[4/3] object-cover rounded-md border border-[#E5E5E5] select-none"
                  />
                ) : (
                  <PhotoSlot
                    label={`Photo ${String(Number(step.number) + 2).padStart(2, "0")} · Step ${step.number}`}
                    aspect="4/3"
                    className="rounded-md"
                  />
                )}
              </div>
              <div>
                <p className="text-[20px] md:text-[24px] font-bold">
                  <span className="text-[#DD663C]">{step.number}</span> &nbsp;
                  {step.title}
                </p>
                <ul className="list-disc pl-5 mt-2 space-y-1 text-content font-light font-['Open_Sans']">
                  {step.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Deliberate omissions */}
        <div className="bg-[#F8F8F8] mt-16 px-6 md:px-10 py-8">
          <p className="tracking-[1px] text-[14px] font-bold">
            WHAT I DELIBERATELY DID NOT DO
          </p>
          <ul className="list-disc pl-5 mt-4 space-y-1 text-content font-light font-['Open_Sans']">
            <li>No exhaustive trend taxonomies.</li>
            <li>
              No speculative technology forecasting detached from adoption
              realities.
            </li>
          </ul>
        </div>

        <p className="text-content font-bold mt-12 mb-4">
          Market Making &amp; Discussion in the Forum
        </p>
        {/* Photo 10: one wide shot plus two portrait close-ups. Low-res files
            only; right-click and drag disabled to discourage casual saving */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { src: img_photo10a, alt: "Forum participants in group discussion", wide: true },
            { src: img_photo10b, alt: "Provocation placards from the forum", wide: false },
            { src: img_photo10c, alt: "Timeline of future events on sticky notes", wide: false },
          ].map((photo) => (
            <img
              key={photo.alt}
              src={photo.src}
              alt={photo.alt}
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              className={`w-full object-cover rounded-md select-none md:h-[240px] md:aspect-auto ${
                photo.wide
                  ? "col-span-2 aspect-[4/3] object-top"
                  : "aspect-[3/4]"
              }`}
            />
          ))}
        </div>
        {/* Second row: photo D (still to come) and photo E */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <PhotoSlot
            label="Photo D · to be added"
            aspect="auto"
            className="rounded-md h-[240px]"
          />
          <img
            src={img_photo10e}
            alt="Scenario analysis board in Miro"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            className="w-full h-[240px] object-cover rounded-md select-none"
          />
        </div>
      </div>
    </div>
  );
}
