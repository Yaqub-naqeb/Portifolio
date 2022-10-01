import React, { useState } from 'react'
import Card from '../components/cards/Card';
import { Info } from '../components/cards/Info';
import useTheme from '../components/store/useTheme';
const Projects = () => {
  const [obj,setObj]=useState(Info);
  const {mode}=useTheme();
  return (
  
    <div id='projects' className={` lg:mt-[3rem] md:mt-[5rem] mt-[4rem] lg:pt-[15rem] md:pt-[5rem] pt-[5rem] z-41 h-full  overflow-hidden  relative ${mode?'':'bg-[#262626]'}`}>





      {/* My projects */}
      <div >
        <p className='absolute  top-0 lg:left-[45%]
        md:left-[40%]
        left-[29%]
        
        text-[8rem] font-semibold opacity-[0.6]  text-[#ADD6E84F]'>My</p>
     <p className='text-[2.4rem] text-[#ADD6E8] absolute top-[6.4rem] lg:left-[46%] md:left-[42%] left-[33%]'>Projects</p>
     </div>



<div className='mt-[10rem]'>
  
{
obj.map(info=>(<Card key={info.id} info={info}/>))
}
</div>

    </div>
  )
}

export default Projects
