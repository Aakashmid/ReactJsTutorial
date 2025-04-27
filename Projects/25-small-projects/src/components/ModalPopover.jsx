import React, { useState } from 'react'


const Modal = ({ closeModal, body, header, footer }) => {
  return <div className="relative w-[30rem]">
    <span className="absolute  top-4 left-4 text-xl font-bold cursor-pointer p-2 bg-white  " onClick={closeModal}>X</span>
    <div className="header p-5 bg-amber-500">
      {
        header ? header :
          <div className="">default header content</div>
      }
    </div>
    <div className="body p-10">
      {body ? body :
        <div className="">Default body </div>

      }
    </div>
    <div className="footer p-5 bg-amber-900">
      {footer ? footer :
        <div className="">default footer</div>
      }
    </div>
  </div>
}

export default function ModalPopover() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className='w-full flex flex-col items-center'>
      <button className="text-gray-900 p-2 bg-white rounded-lg  cursor-pointer" onClick={() => setIsModalOpen(!isModalOpen)}>
        ModalPopover
      </button>
      <div className="modal-container mt-10 ">
        {isModalOpen &&
          <Modal closeModal={() => setIsModalOpen(false)} />
        }
      </div>
    </div>
  )
}
