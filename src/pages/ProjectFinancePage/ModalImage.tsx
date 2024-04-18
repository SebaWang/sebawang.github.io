import React from "react";

interface ModalProps {
  imgURL: string;
  aspectRatio?: string;
}

const ModalImageCustom: React.FC<ModalProps> = ({
  imgURL,
  aspectRatio = "16/9",
}) => {
  const openModal = () => {
    const modalElement = document.getElementById(`my_modal_${imgURL}`);
    if (modalElement) {
      (modalElement as HTMLDialogElement).showModal();
    }
  };

  const divStyle = {
    backgroundImage: `url(${imgURL})`,
    ...(aspectRatio !== "auto" && { aspectRatio }),
  };

  return (
    <>
      <div
        className="w-full bg-cover cursor-pointer bg-center"
        style={divStyle}
        onClick={openModal}
      ></div>
      <dialog id={`my_modal_${imgURL}`} className="modal">
        <div className="modal-box max-w-[90%] p-0 bg-white grid grid-cols-3 gap-8">
          <div className="p-8 text-[18px] flex flex-col justify-center gap-6">
            <div>
              <p className="font-bold text-[#93C860]">
                Short-term Design Strategy
              </p>
              <p className="font-light">
                High impact and could be completed within the project time. This
                project eventually focused on the development of this concept.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#EEBA0B] mt-4">
                Mid-term Design Strategy
              </p>
              <p className="font-light">
                It was possible to complete it within the project time, but the
                results might not be evaluated immediately.
              </p>
            </div>
            <div>
              <p className="font-bold text-[#C3433D] mt-4">
                Long-term Design Strategy
              </p>
              <p className="font-light">
                It might have a high impact, but it could not be achieved within
                the project time. It could be the inspiration for design
                projects in similar area.
              </p>
            </div>
          </div>
          <img src={imgURL} className="w-full col-span-2" />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button
            onClick={() => {
              const modalElement = document.getElementById(
                `my_modal_${imgURL}`
              );
              if (modalElement) {
                (modalElement as HTMLDialogElement).close();
              }
            }}
          >
            close
          </button>
        </form>
      </dialog>
    </>
  );
};

export default ModalImageCustom;
