import React from 'react'
// import Html from '../components/imgs/skills/480px-HTML5_Badge.svg.png'
// import Css from '../components/imgs/skills/CSS3_logo.svg.png'
// import Js from '../components/imgs/skills/Unofficial_JavaScript_logo_2.svg.png'
// import react from '../components/imgs/skills/react.png'
// import Git from '../components/imgs/skills/Git_icon.svg.png'
// import GitHub from '../components/imgs/skills/Octicons-mark-github.svg.png'
// import Figma from '../components/imgs/skills/figma.png'
// import FiB from '../components/imgs/skills/68747470733a2f2f696d672e69636f6e73382e636f6d2f636f6c6f722f3438302f66697265626173652e706e67.png'
// import Tailwind from '../components/imgs/skills/Tailwind_CSS_Logo.svg.png'

import Skills_name from '../components/skills_content/Skills_name';


import '../App.css'
import useTheme from '../components/store/useTheme'
const Skills = () => {
  const {mode}=useTheme();


const info=[
    {name:'Html',percentage:'90'},
    {name:'Css',percentage:'80'},
    {name:'JavaScript',percentage:'80'},
    {name:'React',percentage:'90'},
    {name:'Adobe Xd',percentage:'80'},
    {name:'git ',percentage:'90'},
    {name:'github',percentage:'90'},
    {name:'tailwind',percentage:'100'},

];




  return (
    <div id='skills' className={`  flex align-middle justify-center items-center  lg:h-[100vh] relative ${mode?'':'bg-[#262626]'}   mt-[3rem] `} >
        {/* */}

      {/* MySkills  */}
      <div >
        <p className='absolute  top-0 lg:left-[45%]
        md:left-[40%]
        left-[29%]
        
        text-[8rem] font-semibold opacity-[0.6]  text-[#ADD6E84F]'>My</p>
     <p className='text-[2.4rem] text-[#ADD6E8] absolute top-[6.4rem] lg:left-[48%] md:left-[45%] left-[41%]'>Skills</p>
     </div>


{/* icons hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh */}


<div className='cont gap-x-16 gap-y-20  grid  md:grid-cols-2 lg:grid-cols-2  w-[80%]  md:mt-[10rem] mt-[15rem]  lg:mt-[10rem]  p-5'>


{info && info.map((skill)=>(<Skills_name  name={skill.name} key={skill.name} percentage={skill.percentage}/>)
)}





</div>







    </div>
  )
}

export default Skills


