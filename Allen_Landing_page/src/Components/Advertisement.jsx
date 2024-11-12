import React, { useEffect,useState } from 'react'
import ad1 from '../assets/advertisement/ad1.webp'
import ad2 from '../assets/advertisement/ad2.webp'
import ad3 from '../assets/advertisement/ad3.webp'
import ad4 from '../assets/advertisement/ad4.webp'
import ad5 from '../assets/advertisement/ad5.webp'

const Advertisement = () => {
    const ads = [ad1,ad2,ad3,ad4,ad5]

    const [imageAd,setImageAd] = useState(null);

    useEffect(()=>{
        const timer = setInterval(()=>{
            setImageAd(ads[Math.floor(Math.random()*ads.length)])
        },1000)

        return ()=>{
            clearInterval(timer)
        }
    },[])

  return (
    <div>
      <img src={imageAd} alt="advertise" className='w-[900px] mx-auto' />
    </div>
  )
}

export default Advertisement
