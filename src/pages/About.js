import React from 'react'
// import xom from '../components/imgs/2023_05_09_18_00_IMG_8569.JPG'
import xom from '../components/imgs/2023_05_09_18_00_IMG_8569.jfif'
import My from '../components/My';
import useTheme from '../components/store/useTheme'
const About = () => {
  const {mode}=useTheme();
  return (
    // ' bg-gradient-to-b kfrom-[#f4fafc84] to-[#ffff]' to tekal krdnawa
    <div id='about' className={`relative -translate-y-1 h-full w-[100vw] 
   
    overflow-hidden
    ${mode?'   bg-gradient-to-b from-[#F8FCFD] to-[#ffff] ab':'bg-[#262626] bg-gradient-to-b from-[#262626] to-[#262626]'}
    `}>
    {/* About me  */}
<My name={'Me'} bg_name={'About'}/>


{/* content */}
<div className='flex lg:flex-row-reverse items-center md:flex-col flex-col align-middle justify-center sm:gap-7 md:gap-7 gap-14  px-[3rem]  md:px-[5rem] lg:translate-x-[3.4rem]  lg:pr-[240px]'>
{/* img */}
<div className='self-center cursor-pointer  lg:-translate-x-6 '>
  
    <img src={xom} className={` ${mode?"":"brightness-90"}   lg:w-[32rem]  md:w-[25rem] rounded-md opacity-95`} alt="" />
</div >
{/* lg:w-[95%] md:w-[95%] */}
{/*description*/}<div className='lg:px-[5rem] xl:translate-x-0 lg:translate-x-2     w-[110%] '>
{/* text-[#ADD6E8] */}
<p className=' text-[#ADD6E8]  text-[4rem]  font-medium lg:text-left md:text-left text-center'>Hello!</p>

<p className='text-[#ADD6E8] leading-7 lg:max-w-[40rem] 
'>I recently graduated from the University of Koya with a degree in Software Engineering. I'm a Frontend Developer who loves web development. After a year of exploring different areas in software, I found my passion in creating websites. I'm now comfortable with it and always excited to learn new things.</p>
<br />
<p className='text-[#9C9C9C] font-medium text-[1.5rem] lg:mt-[3rem] '>Let's work together</p>
<div className='text-[#9C9C9CA1]'>
<p className=''>what can i do for you?</p>
{/* some optimization */}
<a href='mailto:Yaqub.009448401@gmail.com?'  >Shot an email to <span className='font-bold'>Yaqub.009448401@gmail.com</span></a>
</div>
</div>



</div>




    </div>
  )
}

export default About
