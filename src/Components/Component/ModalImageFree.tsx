import React from 'react';

interface ModalProps {
  imgURL: string;
  description?: string;
}

const ModalImageFree: React.FC<ModalProps> = ({ imgURL, description="" }) => {
  const openModal = () => {
    const modalElement = document.getElementById(`my_modal_${imgURL}`);
    if (modalElement) {
      (modalElement as HTMLDialogElement).showModal(); 
    }
  };

  return (
    <>
      <img
        className="w-full cursor-pointer mix-blend-darken"
        src={imgURL}
        onClick={openModal}
        alt='img'
       />
      <dialog id={`my_modal_${imgURL}`} className="modal">
        <div className="modal-box  max-w-[75%] p-0 bg-[#3d3d3d]">
            <img src={imgURL} className='w-full bg-white' alt='img' />
          <p className="py-4 text-center text-white">{description}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button onClick={() => {
            const modalElement = document.getElementById(`my_modal_${imgURL}`);
            if (modalElement) {
              (modalElement as HTMLDialogElement).close(); 
            }
          }}>close</button>
        </form>
      </dialog>
    </>
  );
};

export default ModalImageFree;