import React from 'react'
import { motion } from 'framer-motion'
import useTheme from '../store/useTheme';
import pdf from '../../components/MyCv.pdf'

const Hello = () => {
    const {mode}=useTheme();

  return (
    <div className='writting  flex flex-col  items-center'>
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

             }} className={` absolute  bottom-1/4 text-[2.5rem]  imyaqub  ${mode?'text-[#83c3de]':'text-[#505050]'} `}>I'm Yaqub</motion.p>
             {/* #ADD6E8 */}

          <motion.p className='text-[#9C9C9C] text-[1.5rem]  translate-y-[-1.8rem]'>Full-Stack Developer</motion.p>
          
        </div>



     
    <a href={pdf} download>

    <button className={`rounded ${mode?'bg-[#83c3de]  hover:bg-[#9ed3ea]':'bg-[#53595c]  hover:bg-[#88a3ae]'}  py-2  px-[4rem] lg:px-[5.8rem] text-white  lg:translate-y-[-1rem]  translate-y-[-1.3rem]  `}> Resume</button>
    </a>


    </div>
  )
}

export default Hello
