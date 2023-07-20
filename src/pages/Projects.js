import React, { useState } from 'react'
import Card from '../components/cards/Card';
import { Info } from '../components/cards/Info';
import My from '../components/My';
import useTheme from '../components/store/useTheme';
const Projects = () => {
  const [obj]=useState(Info);
  const {mode}=useTheme();
  return (
    <div id='projects' className={`  lg:pt-[22rem] md:pt-[5rem] pt-[5rem] z-41 h-full  overflow-hidden   ${mode?'':'bg-[#262626]'}`}>
     <My name={'Projects'} bg_name={'My'}/>
<div className=''>
{
obj.map(info=>(<Card key={info.id} id={info.id} info={info}/>))
}
</div>
{/* j */}
    </div>
  )
}

export default Projects
