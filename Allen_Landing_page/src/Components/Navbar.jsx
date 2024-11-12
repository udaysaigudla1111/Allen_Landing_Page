import React from 'react'
import logo from '../assets/logo_dark.svg'

const Navbar = () => {
  return (
    <div className='text-white cursor-pointer flex flex-col'>
        <div className='flex mt-2 justify-around items-center py-7 px-6'>

            <div> <img src={logo} alt="Allen logo" className='w-[100px]' /> </div>
            <div className='flex justify-center font-semibold gap-6'>
                <div>Exams</div> 
                <div>Programs</div>
                <div>ScholarShips</div>
                <div>Test series</div>
                <div>Study Materials</div>
            </div>
            <div className='flex justify-center gap-5'>
               <div className='px-5 py-2 rounded-full bg-white text-black'>Talk to us</div> 
                <div className='px-4 py-2 border rounded-full border-white'>Login</div>
            </div>
           
      </div>

    </div>
  )
}

export default Navbar
