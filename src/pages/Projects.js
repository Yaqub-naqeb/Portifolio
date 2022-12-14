import React, { useState } from 'react'
import Card from '../components/cards/Card';
import { Info } from '../components/cards/Info';
import My from '../components/My';
import useTheme from '../components/store/useTheme';
const Projects = () => {
  const [obj,setObj]=useState(Info);
  const {mode}=useTheme();
  return (
  
    <div id='projects' className={`  lg:pt-[15rem] md:pt-[5rem] pt-[5rem] z-41 h-full  overflow-hidden  relative ${mode?'':'bg-[#262626]'}`}>
     <My name={'Projects'} bg_name={'My'}/>

<div className=''>
  
{
obj.map(info=>(<Card key={info.id} info={info}/>))
}
</div>

    </div>
  )
}

export default Projects
