import React from 'react'
import useTheme from '../store/useTheme';

const Skills_info = ({skill}) => {
  const {mode}=useTheme();

  return (
    // #3F474A
    // bg #262626
    <div className={`box ml-4 rounded-md p-2 transition-all ease-in-out hover:scale-105  flex flex-col align-middle  justify-center   w-[11rem]  text-center ${mode?'bg-[#F0F7FB]':'bg-[#add6e8bc]'}`}><img src={skill.img} className={` ${skill.name==='Firebase'?'w-[7rem] -translate-x-7':'w-[4rem]'} h-[4rem] ml-[31%]   `} alt='logo'/>
  <p className='self-left font-medium   '>{skill.name}</p>
  <div className='hd'></div>
  </div>
  )
}

export default Skills_info
