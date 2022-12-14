import React, { useState } from 'react'
import Facebook from '../components/imgs/facebook (1).png'
import Insta from '../components/imgs/instagram.png'
import LinkedIn from '../components/imgs/linkedin (1).png'
import GitHub from '../components/imgs/github.png'
// import useColor from './components/UseContext';
import useTheme from '../components/store/useTheme'
import { motion } from 'framer-motion'
const Home = () => {
  const {mode,changeMode}=useTheme();


// #9cd5ee6e
  return (
    <div  className={`h-[100vh]   w-[100vw] overflow-y-hidden  -z-50 ${mode?'':'bg-[#262626]'}`}>






{/* the blue rectaingul */}
        <div className={` rounded-r-md absolute top-[43px] left-0 lg:w-[168px] lg:h-[56px]
        md:w-[128px] md:h-[56px]
        w-[80px] h-[46px]
         ${mode?'bg-[#9cd5ee43]':'bg-[#505C62]'}`}>

<div className='z-50 lg:ml-16 md:ml-11 ml-6 lg:mt-3 md:mt-3 mt-2 cursor-pointer'>

{mode ?
// dark Icon
<svg onClick={()=>changeMode(!mode)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-7 h-7 text-[#0008] translate-x-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>:
// sun Icon
<svg onClick={()=>changeMode(!mode)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 text-[#fff9]">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>}
</div>


        </div>
{/* Writting */}
        <div className='writting  absolute top-[28%] lg:left-[10%] md:left-[23%] left-10  '>
          <motion.p 
          
          initial={{ y:-100 }}
          animate={{ y:0 }}
          transition={{
          duration:.6
          }}
          
          
          className={`font-semibold opacity-[0.6] tracking-[4px]    ${mode?'text-[#9cd5ee76]':'text-[#424A4E]'}  lg:text-[10rem] md:text-[10rem] text-[7.5rem]`}>Hello</motion.p>
          <motion.p 
             initial={{ x:-150 }}
             animate={{ x:0 }}
             transition={{
             duration:1
             }}
          
          // #ADD6E8
          className={`   absolute top-[58%] text-[2.5rem] left-[20%]  ${mode?'text-[#83c3de]':'text-[#ADD6E8]'} `}>I'm Yaqub</motion.p>
          <motion.p 
          
          
          className='text-[#9C9C9C] text-[1.5rem] absolute lg:bottom-2 md:bottom-3 bottom-[-1rem] lg:left-[13%] md:left-[14%] left-[13%]'>Front-end Developer</motion.p>
           
        </div>
{/* rectangul with socials */}
     
          <div className={`flex rounded-r-md z-41 gap-4 absolute bottom-9 lg:pl-[10rem] md:pl-[7rem] pl-[3rem] py-[7px] pr-8 bg-[#ADD6E84F] ${mode?'bg-[#9cd5ee43]':'bg-[#505C62]'}`}>
           
           <a target={'_blank'} rel="noreferrer" href="https://www.facebook.com/yaqubEng" className='hover:brightness-100 '> <img src={Facebook} className='w-[34px] h-[34px]' alt="" /></a>

           <a target={'_blank'} rel="noreferrer" href="https://www.instagram.com/yaqub_321_/"> <img src={Insta} className='w-[34px] h-[34px]' alt="" /></a>

<a target={'_blank'} rel="noreferrer" href="https://www.linkedin.com/in/yaqub-naqeeb-b9894b238/">
            <img src={LinkedIn} className='w-[34px] h-[34px]' alt="" /></a>

<a href="https://github.com/Yaqub-naqeb" target={'_blank'} rel="noreferrer" >
            <img src={GitHub} className='w-[34px] h-[34px]' alt="" /></a>

          </div>


    </div>
  )
}

export default Home
//dfkslajsfdja;ld