import React from 'react'
import Html from '../components/imgs/skills/480px-HTML5_Badge.svg.png'
import Css from '../components/imgs/skills/CSS3_logo.svg.png'
import Js from '../components/imgs/skills/Unofficial_JavaScript_logo_2.svg.png'
import react from '../components/imgs/skills/react.png'
import Git from '../components/imgs/skills/Git_icon.svg.png'
import GitHub from '../components/imgs/skills/Octicons-mark-github.svg.png'
import Figma from '../components/imgs/skills/figma.png'
import FiB from '../components/imgs/skills/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3438302f66697265626173652e706e67.png'
import Tailwind from '../components/imgs/skills/Tailwind_CSS_Logo.svg.png'


import '../App.css'
const Skills = () => {
  return (
    <div id='skills' className='h-full relative'>

      {/* MySkills  */}
      <div >
        <p className='absolute  top-0 lg:left-[45%]
        md:left-[40%]
        left-[29%]
        
        text-[8rem] font-semibold opacity-[0.6]  text-[#ADD6E84F]'>My</p>
     <p className='text-[2.4rem] text-[#ADD6E8] absolute top-[6.4rem] lg:left-[48%] md:left-[45%] left-[41%]'>Skills</p>
     </div>




<div className=' grid lg:px-[5rem] md:px-[4rem]  containar md:grid-cols-3 grid-cols-2 lg:grid-cols-4 pt-[20rem] place-items-center pr-3 gap-y-[3rem] '>
{/* html */}
<div className='box ml-4 rounded-md p-2  flex flex-col align-middle hover:inset-4 justify-center bg-[#F0F7FB] w-[11rem] h text-center'><img src={Html} className='w-[4rem] ml-[31%] ' alt="" />
<p className='self-left font-medium   '>Html</p>
</div>
{/* Css */}
<div className='box ml-4 rounded-md p-2  flex flex-col align-middle hover:inset-4 justify-center bg-[#F0F7FB] w-[11rem] h text-center'><img src={Css} className='w-[4rem] ml-[31%]' alt="" />
<p className='self-left font-medium'>Css</p>
</div>
{/* JavaScript */}
<div className='box ml-4 rounded-md p-2  flex flex-col align-middle hover:inset-4 justify-center bg-[#F0F7FB] w-[11rem] h text-center'><img src={Js} className='w-[4rem] ml-[31%]' alt="" />
<p className='self-left font-medium'>JavaScript</p>
</div>
{/* React */}
<div className='box ml-4 rounded-md p-2  flex flex-col align-middle hover:inset-4 justify-center bg-[#F0F7FB] w-[11rem] h text-center'><img src={react} className='w-[4rem] ml-[31%]' alt="" />
<p className='self-left font-medium'>React</p>
</div>
{/* Tailwind */}
<div className='box ml-4 rounded-md p-2  flex flex-col align-middle hover:inset-4 justify-center bg-[#F0F7FB] w-[11rem] h text-center'><img src={Tailwind} className='w-[4rem] ml-[31%]' alt="" />
<p className='self-left font-medium'>Tailwind</p>
</div>
{/* Git */}
<div className='box ml-4 rounded-md p-2  flex flex-col align-middle hover:inset-4 justify-center bg-[#F0F7FB] w-[11rem] h text-center'><img src={Git} className='w-[4rem] ml-[31%]' alt="" />
<p className='self-left font-medium'>Git</p>
</div>
{/* GitHub */}
<div className='box ml-4 rounded-md p-2  flex flex-col align-middle hover:inset-4 justify-center bg-[#F0F7FB] w-[11rem] h text-center'><img src={GitHub} className='w-[4rem] ml-[31%]' alt="" />
<p className='self-left font-medium'>GitHub</p>
</div>
{/* Firebase */}
<div className='box ml-4 rounded-md p-2  flex flex-col align-middle hover:inset-4 justify-center bg-[#F0F7FB] w-[11rem] h text-center'><img src={FiB} className='w-[4rem] ml-[31%]' alt="" />
<p className='self-left font-medium'>Firebase</p>
</div>
{/* Figma */}
<div className='box ml-4 rounded-md p-2  flex flex-col align-middle hover:inset-4 justify-center bg-[#F0F7FB] w-[11rem] h text-center'><img src={Figma} className='w-[4rem] ml-[31%]' alt="" />
<p className='self-left font-medium'>Figma</p>
</div>




</div>

    </div>
  )
}

export default Skills
