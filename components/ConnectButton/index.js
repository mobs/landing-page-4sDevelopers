'use client'
import React, { useState } from 'react'
import ModalComponent from '../Modal'

const ConnectButton = () => {
    const [openModal, setOpenModal] = useState(false);
    
  return (
    <div className='w-screen fixed'>
        <button className='w-screen bg-blue-gradient p-2 text-white font-bold text-lg'>
            Enquire Now
        </button>
        {openModal && <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  )
}

export default ConnectButton