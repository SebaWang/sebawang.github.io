import React, { ReactElement, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChapterHeader from "./ChapterHeader";
import PhotoSlot from "./PhotoSlot";
import img_photo01 from "../../assets/img/img_uol_photo01.jpg";
import img_photo02 from "../../assets/img/img_uol_photo02.jpg";
import img_photo04 from "../../assets/img/img_uol_photo04.jpg";
import img_photo05 from "../../assets/img/img_uol_photo05.jpg";

// Page-wide photo numbers shown in each phase
const photoNumbers = [
  [1, 2],
  [4, 5, 6],
  [], // Pilot: no photos
  [], // Endline: no photos
];

// Photos placed so far, by page-wide photo number. Low-res files only, with
// faces and third-party names blurred.
const photos: Record<number, { src: string; alt: string }> = {
  1: { src: img_photo01, alt: "Workstream improvement ideas on sticky notes" },
  2: { src: img_photo02, alt: "Research Islands mapping on a whiteboard" },
  4: { src: img_photo04, alt: "Compiling resources in the research staff system" },
  5: { src: img_photo05, alt: "Pre-recruitment journey mapping notes" },
};

// Phase colours are traditional Japanese colours: 藍 ai, 千歳緑
// chitose-midori, 山吹茶 yamabuki-cha, 江戸紫 edo-murasaki
interface Phase {
  name: string;
  colour: string;
  heading?: string;
  subtitle: string;
  bullets?: string[];
  lanes?: { label: string; text: string }[];
  how?: { question: string; paragraphs: string[] };
}

const phases: Phase[] = [
  {
    name: "Baseline",
    colour: "#165E83",
    heading: "Making the evaluation workable across four services",
    subtitle:
      "How do we select and adapt the relevant standards into shared principles, then define metrics with each team?",
    bullets: [
      "Built the GDS Beta and Live Service Assessment framework into the evaluation metrics.",
      "Developed post-service survey questions for the four services with the user researcher.",
      "Planned and facilitated 8 co-design journey-mapping workshops across the four services.",
      "Synthesised 500+ survey responses with workshop and interview insights into a visual report, prioritising the gaps and improvement directions, and presented it to the university's senior leadership.",
    ],
  },
  {
    name: "Design",
    colour: "#316745",
    heading: "Turning evidence into agreed service changes",
    subtitle:
      "How do we prioritise baseline insights and turn them into concrete improvements, while the original service teams keep ownership?",
    bullets: [
      "Discussed the timeframe with UX and IT, and prioritised baseline findings and user needs for service teams.",
      "Used the journey maps and service blueprints to locate where changes were needed across touchpoints and propose improvements.",
      "Worked with the user researcher and HR colleagues to develop proposals for training materials, templates and content revisions for staff with different levels of digital confidence.",
      "Defined the pilot scope with service teams and ensured the evidence was collectable and representative of the indicators.",
    ],
    how: {
      question:
        "How did I balance departmental needs with a consistent staff experience?",
      paragraphs: [
        "Developing a shared HR template is an art of balancing consistency across the university with flexibility within departments. Different teams wanted to preserve practices suited to their needs, while staff moving between departments needed a process they could understand and navigate. Our evaluation team could recommend improvements, but service ownership remained with central and departmental HR, so their involvement was essential to shaping a workable approach.",
        "In joint meetings, reservations were often expressed indirectly. I arranged separate conversations to understand what each team needed to retain and why. I then brought these concerns back to the staff journey, using the experience of moving between departments to explore which differences served a genuine need and which could create confusion or repeated work.",
        "This helped frame a more specific discussion about what should be shared, where local flexibility was appropriate, and what teams would need to adopt the proposal. Keeping service owners involved in these decisions connected the design work to the practical responsibilities of using, maintaining and adapting the template.",
      ],
    },
  },
  {
    name: "Pilot",
    colour: "#BF783A",
    heading: "Testing priority changes within a limited timeframe",
    subtitle:
      "How do we identify what to pilot, iterate quickly and test again?",
    bullets: [
      "Translated the proposed improvements into specific questions, formats and methods to test.",
      "Worked with the teams responsible for delivery to prepare the materials, staff guidance and support needed to run the pilots.",
      "Planned the pilots with each service team, ensuring the formats and methods were clear and easy to understand.",
      "Collected feedback from staff users and delivery teams to understand how the changes worked, and what difficulties arose, in practice.",
    ],
  },
  {
    name: "Endline",
    colour: "#745399",
    heading: "Assessing progress and presenting the changes to stakeholders",
    subtitle:
      "How do we assess which changes worked and which fell short, decide on the next steps, and share the conclusions with the relevant stakeholders?",
    bullets: [
      "Repeated the service surveys and compared the findings with the baseline against the agreed evaluation indicators.",
      "Followed up with participants from the baseline workshops and interviews to understand how their experiences had changed.",
      "Combined quantitative results with qualitative insights to articulate improvements and areas that fell short of expectations across the four services.",
      "Produced a visual report, presented the findings to university leadership, and shared service-specific insights with the relevant colleges and schools, tailored to their contexts.",
    ],
  },
];

// Box centres in a 4-column grid with a 40px gap, for the loop arrow
const GAP = 40;
const firstCentre = `calc((100% - ${GAP * 3}px) / 8)`;
const LOOP = "#BDBDBD";

export default function WhatIDidSection(): ReactElement {
  const [active, setActive] = useState(0);
  const [hovered, setHovered] = useState<number | null>(null);
  const phase = phases[active];
  const prev = (active + phases.length - 1) % phases.length;
  const next = (active + 1) % phases.length;

  return (
    <div id="what_i_did">
      <div className="container mx-auto md:w-[1100px] pb-14 md:pb-16">
        <ChapterHeader number="03" title="What I Did" />

        <p className="text-content font-light -mt-4">
          As the project lead with the most experience in user-centred design
          and iteration within the team, I structured the project into four
          stages: Baseline, Design, Pilot and Endline. These stages did not
          follow a strictly linear path. Insights from each stage fed back
          into the others, and the endline was measured against the same
          baseline and became the baseline for the next round of service
          improvement.
        </p>

        {/* Process diagram: Baseline → Design → Pilot → Endline, with a loop
            from Endline back to Baseline. Each box opens its phase below. */}
        <div className="relative mt-10 pt-8 hidden md:block">
          {/* Loop line drawn with gradients so the dash spacing can be set
              (border-dashed has fixed, tight dashes) */}
          <div
            className="absolute top-0 h-8"
            style={{ left: firstCentre, right: firstCentre }}
            aria-hidden="true"
          >
            <div
              className="absolute top-0 inset-x-0 h-[2px]"
              style={{ background: `repeating-linear-gradient(90deg, ${LOOP} 0 8px, transparent 8px 18px)` }}
            ></div>
            {["left-0", "right-0"].map((side) => (
              <div
                key={side}
                className={`absolute top-0 ${side} w-[2px] h-full`}
                style={{ background: `repeating-linear-gradient(180deg, ${LOOP} 0 8px, transparent 8px 14px)` }}
              ></div>
            ))}
          </div>
          <div
            className="absolute top-8 w-0 h-0 -translate-x-[6px] -translate-y-[10px] border-l-[7px] border-r-[7px] border-t-[10px] border-l-transparent border-r-transparent border-t-[#BDBDBD]"
            style={{ left: firstCentre }}
            aria-hidden="true"
          ></div>
          <div className="grid grid-cols-4" style={{ columnGap: GAP }}>
            {phases.map((p, i) => (
              <div key={p.name} className="relative">
                {/* Each phase has its own colour: filled when open, outlined
                    otherwise. On hover a thin bar of its colour sweeps along
                    the bottom from left to right. */}
                <button
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="relative overflow-hidden w-full border py-3 text-[20px] font-semibold bg-white"
                  style={{ borderColor: p.colour }}
                >
                  <span
                    className={`absolute inset-x-0 bottom-0 origin-left transition-transform duration-300 ease-out ${
                      i === active ? "top-0" : "h-[4px]"
                    }`}
                    style={{
                      backgroundColor: p.colour,
                      transform:
                        i === active || hovered === i ? "scaleX(1)" : "scaleX(0)",
                    }}
                    aria-hidden="true"
                  ></span>
                  <span
                    className="relative transition-colors duration-300"
                    style={{
                      color: i === active ? "#FFFFFF" : p.colour,
                    }}
                  >
                    {p.name}
                  </span>
                </button>
                {i < phases.length - 1 && (
                  <span
                    className="absolute top-1/2 -translate-y-1/2 text-[#BDBDBD] text-[20px] leading-none"
                    style={{ left: `calc(100% + ${GAP / 2}px)`, transform: "translate(-50%, -50%)" }}
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* One phase at a time, with arrows either side */}
        <div className="relative mt-12">
          <button
            onClick={() => setActive(prev)}
            className="hidden md:flex absolute -left-14 top-1/2 -translate-y-1/2 flex-col items-center text-[#9A9A9A] hover:text-[color:var(--to)] transition-colors duration-300"
            style={{ "--to": phases[prev].colour } as React.CSSProperties}
            aria-label={`Previous: ${phases[prev].name}`}
          >
            <span className="text-[44px] font-light leading-none">&lsaquo;</span>
          </button>
          <button
            onClick={() => setActive(next)}
            className="hidden md:flex absolute -right-14 top-1/2 -translate-y-1/2 flex-col items-center text-[#9A9A9A] hover:text-[color:var(--to)] transition-colors duration-300"
            style={{ "--to": phases[next].colour } as React.CSSProperties}
            aria-label={`Next: ${phases[next].name}`}
          >
            <span className="text-[44px] font-light leading-none">&rsaquo;</span>
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={phase.name}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.25 }}
            >
              <p
                className="text-[24px] md:text-[28px] font-bold leading-snug"
                style={{ color: phase.colour }}
              >
                {phase.name}
                {phase.heading && (
                  <span className="text-[20px] md:text-[22px] font-normal">
                    &nbsp;:&nbsp; {phase.heading}
                  </span>
                )}
              </p>
              <div
                className="w-[40px] border-b-[4px] h-[4px] mt-1"
                style={{ borderColor: phase.colour }}
              >
                &nbsp;
              </div>
              <p className="text-content font-light text-[#6F6F6F] mt-3">
                {phase.subtitle}
              </p>

              {phase.bullets && (
                <ul className="list-disc pl-5 mt-4 space-y-1 text-content font-light font-['Open_Sans']">
                  {phase.bullets.map((b, i) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              )}
              {phase.lanes && (
                <div className="grid md:grid-cols-3 gap-4 mt-5">
                  {phase.lanes.map((l) => (
                    <div key={l.label} className="bg-[#F8F8F8] px-5 py-5">
                      <p className="tracking-[1px] text-[13px] font-bold">
                        {l.label}
                      </p>
                      <div
                        className="w-[16px] border-b-[4px] h-[4px] mt-1"
                        style={{ borderColor: phase.colour }}
                      >
                        &nbsp;
                      </div>
                      <p className="text-content font-light mt-3">{l.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Process photos for this phase, numbered across the page.
                  Baseline has two (Photo 03 was dropped), so its photos run
                  wider in two columns; the other phases have three. */}
              {photoNumbers[active].length > 0 && (
              <div
                className={`grid grid-cols-1 mt-6 ${
                  photoNumbers[active].length === 2
                    ? "md:grid-cols-2 gap-4 md:max-w-[820px]"
                    : "md:grid-cols-3 gap-4"
                }`}
              >
                {photoNumbers[active].map((n, l) => {
                  // Two-up photos are wider, so give them more height
                  const photoH =
                    photoNumbers[active].length === 2 ? "h-[240px]" : "h-[180px]";
                  const photo = photos[n];
                  return photo ? (
                    <img
                      key={l}
                      src={photo.src}
                      alt={photo.alt}
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                      className={`w-full ${photoH} object-cover rounded-md select-none`}
                    />
                  ) : (
                  <PhotoSlot
                    key={l}
                    label={`Photo ${String(n).padStart(2, "0")} · ${phase.name}`}
                    aspect="auto"
                    className={`rounded-md ${photoH}`}
                  />
                  );
                })}
              </div>
              )}

              {/* "How did I …" box, one per phase */}
              <div
                className="border mt-8 px-6 md:px-8 py-6 min-h-[140px]"
                // Phase colour at ~8% opacity (hex alpha 14) as a light tint
                style={{
                  borderColor: phase.colour,
                  backgroundColor: `${phase.colour}14`,
                }}
              >
                {phase.how ? (
                  <>
                    <p className="text-content font-bold">
                      {phase.how.question}
                    </p>
                    {phase.how.paragraphs.map((para, i) => (
                      <p key={i} className="text-content font-light mt-3">
                        {para}
                      </p>
                    ))}
                  </>
                ) : (
                  <>
                    <p className="text-content font-bold">How did I …?</p>
                    <p className="text-content font-light mt-2 text-[#9A9A9A]">
                      {phase.name}: to be added.
                    </p>
                  </>
                )}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Mobile: dots to switch phase */}
          <div className="flex md:hidden justify-center gap-3 mt-6">
            {phases.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setActive(i)}
                className="text-[13px] px-3 py-1 border"
                style={{
                  borderColor: p.colour,
                  backgroundColor: i === active ? p.colour : undefined,
                  color: i === active ? "#FFFFFF" : p.colour,
                }}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
