import React from 'react'
import { motion } from 'framer-motion'
import useTheme from '../store/useTheme';

const Hello = () => {
    const {mode}=useTheme();

  return (
    <div className='writting '>
      {/* Writting */}
      <div className='flex flex-col  items-center relative font-normal'>
          <motion.p  initial={{ y:-100 }}
          animate={{ y:0 }}
          transition={{
          duration:.6}}

         className={`font-semibold  opacity-[0.6]  tracking-[4px]  ${mode?'text-[#add6e8d2]':'text-[#333]'}  lg:text-[10rem] md:text-[10rem] text-[7.5rem] hello`}>Hello</motion.p>
          <motion.p 
             initial={{ x:-150 }}
             animate={{ x:0 }}
             transition={{
             duration:1
             }} className={` absolute  bottom-1/4 text-[2.5rem]  imyaqub  ${mode?'text-[#83c3de]':'text-[#ADD6E8]'} `}>I'm Yaqub</motion.p>

          <motion.p className='text-[#9C9C9C] text-[1.5rem]  translate-y-[-1.8rem]'>Front-end Developer</motion.p>
           
        </div>



    </div>
  )
}

export default Hello
