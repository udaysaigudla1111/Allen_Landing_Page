import React from 'react'
import pic1 from '../assets/Subject-grid/subjectgrid1.webp'
import pic2 from '../assets/Subject-grid/subjectgrid2.webp'
import pic3 from '../assets/Subject-grid/subjectgrid3.webp'
import { TiArrowRight } from 'react-icons/ti'

const SubjectGrid = () => {

    const subjectArray = [
        {
            title:"JEE",
            image:pic1
        },
        {
            title:"NEET",
            image:pic2
        },
        {
            title:"Grade 6-10",
            image:pic3
        }
    ]

  return (
    <div className='flex flex-col gap-3 text-white'>
        <div className='text-3xl font-semibold mb-6 px-10'>Discover the perfect online program</div>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-3 px-10'>

            {
                subjectArray.map((subject)=>{
                    return <div className='h-[250px] w-[400px] bg-[#13203b] shadow-lg rounded-lg flex flex-col gap-6 p-6 '>
                    <div>
                    <h1 className='font-semibold text-2xl'>{subject.title}</h1>
                    </div>
                    <div className='flex justify-center gap-10'>
                        <h1 className='text-2xl font-semibold text-[#78abfb] flex mt-24 gap-2'>View <TiArrowRight className='size-9'  /></h1>
                        <img src={subject.image} alt="Jee pic" className=' w-[210px] -translate-y-7' />
                    </div>
                    </div>
                })
            
                }

            
             </div>

        </div>
  )
}

export default SubjectGrid
