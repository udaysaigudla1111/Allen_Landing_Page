import React from 'react'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='bg-[#0f1825]'>
      <Navbar/>
      <Home/>
      <Footer/>
     
    </div>
  )
}

export default App