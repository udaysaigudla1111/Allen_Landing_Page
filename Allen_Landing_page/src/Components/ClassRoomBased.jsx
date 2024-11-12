import React from 'react'
import classroombased from '../assets/Subject-grid/classroombased.webp'

const ClassRoomBased = () => {
  return (
    <div className='flex flex-col gap-8 text-white'>
        <div className='text-4xl font-semibold '>Looking for a classroom based program?</div>
        <div className='bg-[#13203b] w-[800px] h-[200px] rounded-xl flex justify-between items-center'>
            <div className='flex flex-col gap-7 p-5 '>
            <div className='flex flex-col gap-3 text-[#bbc2d1] text-2xl font-semibold'>
                <h1>Present in 53 cities with</h1>
                <h1>250+ classrooms</h1>
            </div>
           <div> <button className='bg-white text-black px-6 py-3 rounded-xl cursor-pointer hover:bg-[#5b6170]'>Find a Centre</button> </div>
            </div>
            <img src={classroombased} alt="classRoomBased" className='w-[300px]' />
        </div>
      
    </div>
  )
}

export default ClassRoomBased
