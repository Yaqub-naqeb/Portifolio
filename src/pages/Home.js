import React from 'react'
import useTheme from '../components/store/useTheme'
import { motion } from 'framer-motion'
import Rectangular from '../components/homeComponent/Rectangular'
import ToggleMode from '../components/homeComponent/ToggleMode'



const Home = () => {
  const {mode,changeMode}=useTheme();

// #9cd5ee6e
  return (
 
 <div  className={`h-[100vh]  ${mode?'white':'dark'}
 w-[100vw] overflow-hidden   ${mode?'':'bg-[#262626]'}`}>


{/* the blue rectaingul */}
        <div onClick={()=>changeMode(!mode)} className={`cursor-pointer rounded-r-md absolute top-[43px] left-0 lg:w-[168px] lg:h-[56px]
        md:w-[128px] md:h-[56px]
        w-[80px] h-[46px]
        
         ${mode?'bg-[#9cd5ee64] ':'bg-[#505C62] '}`}>
<ToggleMode/>
        </div>
{/* Writting */}
        <div className='writting  absolute top-[54%] lg:top-[28%] md:top-[60%] xl:left-[5%] lg:left-[10%] md:left-[23%] left-10  '>
          <motion.p 
          
          initial={{ y:-100 }}
          animate={{ y:0 }}
          transition={{
          duration:.6
          }}
          // #505C62
          // 424A4E
          className={`font-semibold opacity-[0.6] tracking-[4px]    ${mode?'text-[#add6e8d2]':'text-[#333]'}  lg:text-[10rem] md:text-[10rem] text-[7.5rem] hello`}>Hello</motion.p>
          <motion.p 
             initial={{ x:-150 }}
             animate={{ x:0 }}
             transition={{
             duration:1
             }}
          
          // #ADD6E8
          className={`   absolute top-[58%] text-[2.5rem] left-[20%] imyaqub  ${mode?'text-[#83c3de]':'text-[#ADD6E8]'} `}>I'm Yaqub</motion.p>
          <motion.p 
          
          
          className='text-[#9C9C9C] text-[1.5rem] absolute lg:bottom-2 md:bottom-3 bottom-[-1rem] lg:left-[13%] md:left-[14%] left-[13%]'>Front-end Developer</motion.p>
           
        </div>
{/* rectangul with socials */}
          <Rectangular/>



   </div>
  )
}

export default Home
