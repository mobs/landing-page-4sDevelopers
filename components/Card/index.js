import React from 'react'

const Card = ({item}) => {
  return (
    <div className='flex ease-in-out duration-300 hover:scale-105 flex-col m-auto justify-center gap-4 p-10 border-4 rounded-lg border-blue-300 h-36 shadow-xl text-center'>
        <div className='text-blue-400 text-xl font-semibold'>{item.title}</div>
    </div>
  )
}

export default Card