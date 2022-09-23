import React from 'react'
import '../App.css'
import useTheme from '../components/store/useTheme'
const Contacts = () => {
  const {mode}=useTheme();
  return (
    <div className={` ${mode?'contact':'bg-[#262626]'}   relative pb-[1rem] lg:px-[10rem] md:px-[4rem]  flex gap-3 justify-center 
    lg:justify-between
    md:justify-between
    align-middle
    flex-wrap
   
   
    
    `}>
        {/* copy right  */}
      <div className='text-[#9C9C9C] hover:text-[#000000a9] transition-all duration-300'>
      &copy; Yaqwb Naqeb 
      </div>
      {/* Socials */}
      <div >
        <a href="/" className='text-[#9C9C9C]'><span className='hover:text-[#000000a9] transition-all duration-300'>Facebook</span> | </a>
        <a href="/" className='text-[#9C9C9C]'><span className='hover:text-[#000000a9] transition-all duration-300'>Instagram</span> | </a>
        <a href="/" className='text-[#9C9C9C]'><span className='hover:text-[#000000a9] transition-all duration-300'>LinkedIn</span> | </a>
        <a href="/" className='text-[#9C9C9C]'><span className='hover:text-[#000000a9] transition-all duration-300'>GitHub</span> </a>
      
        
      </div>
      {/* <div className='w-full bg-slate-400 absolute'></div> */}
    </div>
  )
}

export default Contacts
