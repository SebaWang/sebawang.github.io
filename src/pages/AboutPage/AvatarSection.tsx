import img_avatar from "../../assets/img/img_about_avatar.png";
import ButtonDownload from "../../Components/Component/ButtonDownload";

export default function AvatarSection() {
  return (
    <>
      <div className="bg-[#e8e8e8]">
        <div className="container mx-auto pt-48 grid grid-cols-5">
          <div className="col-span-2">
            <img
              src={img_avatar}
              className="aspect-square w-3/4 object-cover rounded-full"
            />
          </div>
          <div className="col-span-3">
            <p className="text-[48px] text-[#DD663C] font-black inter" >
              Sebastian Wang
            </p>
            <p className="mt-6 text-[25px]  text-black">
              A London-based UX and service designer specialising in inclusive and human-centric design and
              communication.
            </p>
            <p className="mt-4 text-[16px] font-light text-[#6F6F6F] mb-10">
              A firm believer that telling a compelling story is as essential as
              conducting thorough design research. Specializing in harnessing
              the spirit of service design to drive innovation within
              regulations and foster cohesive cross-disciplinary collaboration
              and visionary leadership.
            </p>
            <a href='https://sebawang.github.io/Sebastian%20Wang_%20UX%20%26%20Service%20Designer_CV.pdf' target="_blank" rel="noreferrer">
            <ButtonDownload text="Curriculum Vitae" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
