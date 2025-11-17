import React, { useState } from 'react'
import Card from '../components/cards/Card';
import { Info } from '../components/cards/Info';
import My from '../components/My';
import useTheme from '../components/store/useTheme';

const Projects = () => {
  const [obj] = useState(Info);
  const {mode} = useTheme();
  
  return (
    <section 
      id='projects' 
      className={`lg:pt-[6rem] md:pt-[4rem] pt-[3rem] pb-12 sm:pb-16 md:pb-20 z-41 min-h-screen ${mode ? 'bg-white' : 'bg-[#262626]'}`}
    >
      <My name={'Projects'} bg_name={'My'}/>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-16'>
          {obj.map(info => (
            <Card key={info.id} id={info.id} info={info}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
