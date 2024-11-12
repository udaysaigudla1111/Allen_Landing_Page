import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../assets/allenbanner.webp'
import Advertisement from '../Components/Advertisement'
import SubjectGrid from '../Components/SubjectGrid'
import ClassRoomBased from '../Components/ClassRoomBased'
import Scanner from '../assets/scan.webp'
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div className='flex flex-col gap-6'>
        <div className='py-6'>
            <img src={Banner} alt="ScholarShip Banner" className='w-[900px] mx-auto' />
        </div>
      <Hero/>
      <Advertisement/>
      <div className='flex justify-center'>
      <SubjectGrid/>
      </div>
      <div className='flex justify-center my-4'>
    <ClassRoomBased /> 
      </div>
    <div className='py-6'>
        <img src={Scanner} alt="Scanner banner" className='w-[900px] mx-auto' />
    </div>
    
    </div>
  )
}

export default Home
