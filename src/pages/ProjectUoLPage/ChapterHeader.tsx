import { ReactElement } from "react";

interface Props {
  number: string;
  title: string;
  note?: string;
  titleColor?: string;
}

// Numbered chapter opener: orange number and project name either side of
// a rule running across the page, then a large title. Stronger than the
// bracketed [ TITLE ] labels on other project pages, so each chapter reads
// as a clear new start.
export default function ChapterHeader({
  number,
  title,
  note,
  titleColor = "#2B2B2B",
}: Props): ReactElement {
  return (
    <div className="pt-14 md:pt-16 mb-9">
      <div className="flex items-center gap-4">
        <p className="text-[#EA5514] text-[15px] md:text-[16px] font-bold tracking-[4px]">
          {number}
        </p>
        <div className="h-[1px] flex-1 bg-[#D0D0D0]"></div>
        <p className="text-[#DD663C] text-[13px] md:text-[14px] font-semibold">
          Evaluation with GDS Service Standard
        </p>
      </div>
      <p
        className="text-[32px] md:text-[44px] font-bold mt-4 leading-tight"
        style={{ color: titleColor }}
      >
        {title}
      </p>
      {note && (
        <p className="text-[13px] font-light text-[#929292] mt-2">{note}</p>
      )}
    </div>
  );
}
