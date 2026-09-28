import { ReactElement } from "react";
import ChapterHeader from "./ChapterHeader";
import PhotoSlot from "./PhotoSlot";

const scenarios = [
  {
    name: "Namkawaste",
    subtitle: "Infrastructural Sovereignty",
    archetype:
      "A fiscally exhausted metropolis within a state that remains capable.",
    world:
      "Identity, payment, connectivity and mobility are outsourced one by one, and private Providers gain government-like reach without ever being formally granted it.",
    mobility:
      "Cheap and advanced, but how far you can go depends on which Providers recognise your subscription.",
  },
  {
    name: "Vanilla skAI",
    subtitle: "Cyborg Commons",
    archetype: "A city with strong governance capacity and high legitimacy.",
    world:
      "Robotics and algorithms dissolve scarcity, and commons institutions called Compacts govern mobility, energy and data.",
    mobility:
      "Physical travel becomes a choice. Stratification now runs through access to the Weave, the everyday infrastructure that blends the virtual and the physical.",
  },
  {
    name: "Watershed",
    subtitle: "Hydraulic Power",
    archetype:
      "An exposed coastal and deltaic city, with warming approaching +3°C.",
    world:
      "The Houses that control fresh water, power and flood defences hold power.",
    mobility: "A right granted by those who hold the water.",
  },
];

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
          assumptions broke down. The point is not the scenario narratives
          themselves, but using the future as a stress test to see the risks in
          existing strategies and explore new possibilities.
        </p>

        <p className="text-[20px] md:text-[24px] font-bold">
          Three scenarios for large cities in 2050
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {scenarios.map((s) => (
            <div key={s.name} className="flex flex-col">
              <PhotoSlot label={`${s.name} scenario image`} aspect="4/3" />
              <p className="text-[22px] font-bold mt-5">{s.name}</p>
              <p className="text-[#DD663C] text-content font-semibold">
                {s.subtitle}
              </p>
              <div className="mt-4 space-y-3 text-content font-light">
                <p>
                  <span className="font-bold">Archetype. </span>
                  {s.archetype}
                </p>
                <p>
                  <span className="font-bold">World. </span>
                  {s.world}
                </p>
                <p>
                  <span className="font-bold">Mobility. </span>
                  {s.mobility}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
