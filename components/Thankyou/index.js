import Link from 'next/link'
import React from 'react'

const ThankyouComponent = () => {
  return (
    <div className='flex flex-col items-center gap-4'>
        <div className='flex flex-col gap-6'>
            <img src='/logo.png' />
            <span className='font-extrabold font-mono text-blue-900 text-7xl ml-52'> Developers </span>
        </div>

        <div className='text-6xl font-extrabold font-mono'>
            THANK YOU
        </div>
        <div className='text-lg'>
            Our Team will contact directly
        </div>
        <Link href='/' className='bg-blue-gradient p-4 rounded-lg text-white font-semibold mb-8'>
            BACK TO HOME
        </Link>
    </div>
  )
}

export default ThankyouComponent