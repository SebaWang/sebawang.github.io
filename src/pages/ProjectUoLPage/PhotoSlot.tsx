import { ReactElement } from "react";

interface Props {
  label: string;
  aspect?: string;
  className?: string;
}

// Reserved space for a photo that hasn't been chosen yet. The label says
// what belongs here, so swapping in the real image is a one-line change
// to a ModalImage / <img> with the same aspect ratio.
export default function PhotoSlot({
  label,
  aspect = "3/2",
  className = "",
}: Props): ReactElement {
  return (
    <div
      className={`w-full bg-[#EFEFEF] border-2 border-dashed border-[#CFCFCF] flex items-center justify-center text-center px-6 ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <p className="text-[12px] tracking-[3px] text-[#9A9A9A] uppercase leading-relaxed">
        {label}
      </p>
    </div>
  );
}
