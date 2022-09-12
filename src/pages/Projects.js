import React from 'react'
import Card from '../components/cards/Card';
const Projects = () => {
  return (
  
    <div id='projects' className=' z-41 h-full  overflow-hidden  relative '>
      {/* my projects */}
 <div >
        <p className='absolute  top-0 lg:left-[45%]
        md:left-[40%]
        left-[29%]
        
        text-[8rem] font-semibold opacity-[0.6]  text-[#ADD6E84F]'>My</p>
     <p className='text-[2.2rem] text-[#ADD6E8] absolute top-[6.4rem] lg:left-[46%] md:left-[42%] left-[33%]'>projects</p>
     </div>

<Card/>

    </div>
  )
}

export default Projects
