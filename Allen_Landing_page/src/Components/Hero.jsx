import React,{useEffect,useState} from 'react'
import Hero1 from '../assets/hero_1.webp'
import Hero2 from '../assets/hero2.webp'
import Hero3 from '../assets/hero3.webp'
import Hero4 from '../assets/hero4.webp'

const Hero = () => {

    let [image,setImage] = useState(null)
    const images = [Hero1,Hero2,Hero3,Hero4]

    useEffect(()=>{
        const interval = setInterval(()=>{
            setImage(images[Math.floor(Math.random()*images.length)])
        },2000)
        return ()=>{

            clearInterval(interval)
        }
    },[])

  return (
    <div className='bg-[#0f1825] text-white flex items-center justify-around py-4 px-7'>

      <div className='flex flex-col gap-20 mb-24'>
        <div className='flex flex-col gap-1 font-bold text-4xl'>
            <div>Your Dream.</div>
            <div>Our Expertise.</div>
        </div>

        <div className='flex flex-col gap-3'>
        <div className='font-semibold'>What brings you to us today?</div>
        <div className='flex justify-center gap-5 items-center cursor-pointer'>
            <div className='px-6 py-2 border-2 rounded-full font-bold border-[#3f8dfd]'>NEET</div>
            <div className='px-6 py-2 border-2 rounded-full font-bold border-[#3f8dfd]'>JEE</div>
            <div className='px-6 py-2 border-2 rounded-full font-bold border-[#3f8dfd]'>Grade 6-10</div>
        </div>
        </div>

      </div>

      <div>
        <img src={image} className='w-[450px]' alt='Hero images' />
      </div>
    </div>
  )
}

export default Hero
