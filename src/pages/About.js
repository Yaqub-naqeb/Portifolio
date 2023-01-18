import React from 'react'
import xom from '../components/imgs/IMG_1542_cleanup.JPG'
import My from '../components/My';
import useTheme from '../components/store/useTheme'
const About = () => {
  const {mode}=useTheme();
  return (
    <div id='about' className={`relative h-full w-[100vw] 
   
    overflow-hidden
    ${mode?'':'bg-[#262626]'}
    `}>
    {/* About me  */}
<My name={'Me'} bg_name={'About'}/>


{/* content */}
<div className='flex lg:flex-row md:flex-col flex-col align-middle justify-center sm:gap-7 md:gap-7 gap-14  px-[3rem]  md:px-[5rem]    lg:px-[180px]'>
{/* img */}
<div className='self-center'>
  
    <img src={xom} className='lg:w-[30rem]  md:w-[20rem] rounded-md opacity-95' alt="" />
</div >
{/*description*/}<div className='lg:px-[5rem]     lg:w-[95%] md:w-[95%]  w-[110%] '>

<p className='text-[#ADD6E8] text-[4rem]  font-medium lg:text-left md:text-left text-center'>Hello!</p>

<p className='text-[#ADD6E8] leading-7 
'>I am 20 years old  ,And Software engineering student in the 
3rd stage at university of Koya, I am front-end developer,
After wasting 1 year of trying find my field in software I start
learning some basics of Web development  ,and now im so 
comfortable with it and i'm very exciting to learning new concepts 
</p>
<br />
<p className='text-[#9C9C9C] font-medium text-[1.5rem] '>Let's work together</p>
<div className='text-[#9C9C9CA1]'>
<p className=''>what can i do for you?</p>

<a href='mailto:Yaqub.009448401@gmail.com?'  >Shot an email to <span className='font-bold'>Yaqub.009448401@gmail.com</span></a>
</div>
</div>



</div>




    </div>
  )
}

export default About
