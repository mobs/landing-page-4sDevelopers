import { companyName, priceTableHeader, tableData } from '@/utils/constants'
import Link from 'next/link'
import React from 'react'
import { FaPhone, FaWhatsapp } from 'react-icons/fa'

const FloorPlan = () => {
  return (
    <div className='flex flex-col gap-6 -mb-4'>
        <p className='font-serif text-center text-3xl underline underline-offset-8 text-slate-800 decoration-slate-700'>{companyName} Floor Plan </p>
        <table className='border-2 rounded-xl'>
            <tr className='font-bold text-center md:text-2xl text-lg border-2 bg-gray-200'>
                <th className='border-2 border-slate-400 p-4'>Type</th>
                <th className='border-2 border-slate-400 p-4'>Area</th>
                <th className='border-2 border-slate-400 p-4'>Price</th>
            </tr>
            {tableData.map((data) => (
                <tr className='md:text-lg text-xs border-2'>
                    <td className='border-2 p-4'>{data.type}</td>
                    <td className='border-2 p-4'>{data.area}</td>
                    <td className='border- p-4 flex gap-8'> 
                    <Link href={`tel: ${data.number}`} target='_blank' className='flex gap-4'>
                        <FaPhone className='text-blue-600' />   
                    </Link>
                    <Link href={`https://api.whatsapp.com/send?phone=${data.number}`} >
                        <FaWhatsapp className='text-green-600 text-xl' />
                    </Link>
                    </td>
                </tr>
            ))}
        </table>
    </div>
  )
}

export default FloorPlan