import { ReactElement } from "react";
import ChapterHeader from "./ChapterHeader";
import PhotoSlot from "./PhotoSlot";
import img_scenario_a from "../../assets/img/img_project_mobility_scenario_a.jpg";
import img_scenario_b from "../../assets/img/img_project_mobility_scenario_b.jpg";
import img_scenario_c from "../../assets/img/img_project_mobility_scenario_c.jpg";

const SHOW_TENSION = false;

const scenarios: {
  letter: string;
  name: string;
  tension: string;
  image?: string;
}[] = [
  {
    letter: "A",
    image: img_scenario_a,
    name: "Platform-led City",
    tension:
      "When governments outsource the systems daily life depends on to private operators, who governs how people move, and who gets left at the edges?",
  },
  {
    letter: "B",
    image: img_scenario_b,
    name: "Commons-governed Mobility",
    tension:
      "When automation reshapes work and physical travel becomes a choice, who decides how limited energy, space and care time are shared, and what should everyone be able to reach?",
  },
  {
    letter: "C",
    image: img_scenario_c,
    name: "Resource-stressed Environment",
    tension:
      "When climate change and chronic water stress turn supply and protection into power, who decides who can move, and how do forms of mobility and services change?",
  },
]

export default function ScenariosSection(): ReactElement {
  return (
    <div className="bg-[#F8F8F8]" id="future_scenarios">
      <div className="container mx-auto md:w-[1100px] pb-14 md:pb-16">
        <ChapterHeader number="04" title="Future Scenarios" />

        <p className="text-content font-light mb-12">
          The purpose of the scenarios is to help leadership confront
          trade-offs, rather than passively receive insights. I first used
          structured discussion to clarify the current situation and existing
          assumptions, then used scenarios to show what might follow if those
          assumptions broke down. I then compared the details across all three
          scenarios. The point is not the scenario narratives
          themselves, but using the future as a stress test to see the risks in
          existing strategies and explore new possibilities.
        </p>

        <p className="text-[20px] md:text-[24px] font-bold">
          Three scenarios for large cities in 2050
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {scenarios.map((s, i) => (
            <div key={s.name} className="flex flex-col">
              {s.image ? (
                // Low-res file only; right-click and drag disabled
                <img
                  src={s.image}
                  alt={s.name}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                  className="w-full aspect-[4/3] object-cover select-none"
                />
              ) : (
                <PhotoSlot
                  label={`Photo ${String(i + 7).padStart(2, "0")} · Scenario ${s.letter}`}
                  aspect="4/3"
                />
              )}
              <p className="text-[12px] font-bold text-[#EA5514] tracking-[2px] mt-5">
                SCENARIO {s.letter}
              </p>
              <p className="text-[20px] font-bold mt-1">{s.name}</p>
              {/* Tension line hidden for now; text kept in the data above */}
              {SHOW_TENSION && (
                <p className="mt-4 text-content font-light">
                  <span className="font-bold">Tension. </span>
                  {s.tension}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
