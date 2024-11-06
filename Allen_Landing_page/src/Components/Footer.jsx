import React from 'react'

const About = ["About us","Blog","News","MyExam EduBlogs","Privacy policy","Public notice","Careers"]
const HelpAndSupport = ["Refund policy","Transfer policy","Terms & Conditions","Contact us"]
const PopularGoals = ["NEET UG","JEE Advanced","6th to 10th"]
const Courses = ["Ultimate Program","Distance Learning","Online Test Series"]
const Centers = ["Kota","Bangalore","Indore","Delhi","More centres"]
const ExamInformation = ["JEE Main","JEE Advanced","NEET UG","Class 10","Class 12","Olympiad Exam","NEET Online Test Series","JEE Online Test Series","JEE Main Online Test Series"]
    


const Footer = () => {
  return (
    <div className='bg-[#0f1825] text-white' >
        <div className=' m-4 py-3 px-7 flex gap-7 justify-center'>
            <div className='flex flex-col gap-2'>
                <div className='font-semibold'>About</div>
                <div>
                {
                    About.map((item,index)=>{
                        return <div key={index}>
                            <li className='list-none mb-2 text-[#bbc2d1]'>{item}</li>
                            </div>
                    })
                }
                </div>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='font-semibold'>Help & Support</div>
                <div>
                {
                    HelpAndSupport.map((item,index)=>{
                        return  <div key={index}>
                            <li className='list-none text-[#bbd2d1] mb-2
                            '> {item} </li>
                            </div>
                    })        
                }
                </div>
            </div>

            <div className='flex flex-col gap-2'>
             <div className='font-semibold'>Popular goals</div>
             <div>
                {
                    PopularGoals.map((item,index)=>{
                        return <div key={index}>
                            <li className='list-none text-[#bbc2d1] mb-2'>{item}</li>
                             </div>
                    })
                }
             </div>
            </div>

            <div className='flex flex-col gap-2'>
             <div className='font-semibold'>Courses</div>
             <div>
                {
                    Courses.map((item,index)=>{
                        return <div key={index}><li className='list-none text-[#bbc2d1] mb-2 `'>{item}</li></div>
                    })
                }
             </div>
            </div>

            <div className='flex flex-col gap-2'>
                <div className='font-semibold'>Centers</div>
                <div>
                    {
                        Centers.map((item,index)=>{
                            return <div key={index}><li className="list-none text-[#bbc2d1] mb-2">{item}</li></div>
                        })
                    }
                </div>
            </div>

            <div className='flex flex-col gap-2'>
            <div className='font-semibold'> Exam information</div>
            <div>
                {
                    ExamInformation.map((item,index)=>{
                        return <div key={index}>
                            <li className='text-[#bbc2d1] list-none mb-2'>{item}</li>
                        </div>
                    })
                }
            </div>
            </div>
        </div>
    </div>
  )
} 

export default Footer
