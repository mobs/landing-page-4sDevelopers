import React from 'react'
import { FaRegCopyright } from "react-icons/fa";


const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className='flex flex-col gap-1 bg-slate-700 text-white'>
        <p className='mt-4 mb-4 md:ml-32 md:mr-32 ml-4 mr-4'>
        DISCLAIMER: The information contained in this website is merely informatory and unless otherwise expressly provided, all contents are for general information purposes and do not constitute a legal offer or legally binding Agreement on Company’s part. All images (other than actual images) are purely artistic conceptualization and does not replicate the exact product and should not be relied upon as definitive reference. The words / phrases used are generic in terms. By using or accessing the hyperlinks embedded/mentioned on the Website, you agree to abide by the terms and conditions of this Disclaimer, set forth herein without any qualification or limitation. In the event of you not agreeing to this Disclaimer, you are requested by the Company, not to use the Website or download materials from the Website.
        </p>
        
        <p className='m-16 mt-0 text-center mb-4 flex gap-4 items-center justify-center'>
          <FaRegCopyright />
         Copyright 4S Developers {year} | Powered by BGD
        </p>
    </div>
  )
}

export default Footer