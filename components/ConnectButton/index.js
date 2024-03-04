'use client'
import React, { useState } from 'react'
import ModalComponent from '../Modal'
import Link from 'next/link';

const ConnectButton = () => {
    const [openModal, setOpenModal] = useState(false);
    
  return (
    <div className='w-screen fixed bottom-0 bg-white z-40'>
        <button className='z-40 w-1/2 bg-blue-gradient p-2 text-white font-bold text-lg'>
          <Link  href={`tel:918826677393`}> Call Now </Link>
        </button>
        <button onClick={() => setOpenModal(true)} className='w-1/2 bg-blue-gradient p-2 text-white font-bold text-lg'>
            Enquire Now
        </button> 
        {openModal && <ModalComponent openModal={openModal} setOpenModal={setOpenModal} />}
    </div>
  )
}

export default ConnectButton