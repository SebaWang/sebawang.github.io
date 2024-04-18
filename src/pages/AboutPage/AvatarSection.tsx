import img_avatar from "../../assets/img/img_about_avatar.jpg";
import ButtonNext from "../../Components/Component/ButtonNext";

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
            <p className="text-[48px] text-[#DD663C] font-black">
              Sebastian Wang
            </p>
            <p className="mt-6 text-[24px] font-light text-black">
              A London-based strategy and service designer who expert with
              extensive skills in design, research and communication.
            </p>
            <p className="mt-3 text-[16px] font-light text-[#6F6F6F] mb-12">
              A firm believer that telling a compelling story is as essential as
              conducting thorough design research. Specializing in harnessing
              the spirit of service design research to foster impactful service
              journeys, with a keen focus on accessibility and inclusivity.
            </p>
            <ButtonNext text='Curriculum Vitae' />
          </div>
        </div>
      </div>
    </>
  );
}
