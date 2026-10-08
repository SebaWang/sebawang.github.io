import { ReactElement } from "react";
import ChapterHeader from "./ChapterHeader";
import PhotoSlot from "./PhotoSlot";

export default function ResultsEvaluationSection(): ReactElement {
  return (
    <div className="bg-[#F8F8F8]" id="results_evaluation">
      <div className="container mx-auto md:w-[1100px] pb-14 md:pb-16">
        <ChapterHeader number="04" title="Results & Impact" />

        <p className="text-content font-light mb-12">
          Results introduction to be added: what was delivered, and how it was
          evaluated against the GDS service standards.
        </p>

        <p className="text-[20px] md:text-[24px] font-bold">
          Results heading to be added
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="flex flex-col">
              <PhotoSlot
                label={`Photo ${12 + n} · Result ${n}`}
                aspect="4/3"
              />
              <p className="text-[20px] font-bold mt-5">
                Result heading to be added
              </p>
              <p className="mt-4 text-content font-light">
                Result text to be added.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
