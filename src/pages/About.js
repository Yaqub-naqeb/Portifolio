import React from 'react'
import xom from '../components/imgs/prjs/IMG_E0704.JPG'
const About = () => {
  return (
    <div id='about' className='relative h-full w-[100vw] -z-50
    overflow-hidden
    '>
     {/* About me */}
     <div>
        <p className='absolute  top-0 lg:left-[40%]
        md:left-[30%]
        left-[17%]
        
        text-[6rem] font-semibold opacity-[0.6]  text-[#ADD6E84F]'>About</p>
     <p className='text-[2.2rem] text-[#ADD6E8] absolute top-20 left-[49.5%]'>Me</p>
     </div>
{/* content */}
<div className='flex lg:flex-row md:flex-col flex-col align-middle justify-center sm:gap-7 md:gap-7 gap-14 pt-[15rem] md:pt-[10rem]  md:p-[5rem] p-[3rem]   lg:p-[180px]'>
{/* img */}
<div className='self-center'>
    <img src={xom} className='lg:w-[30rem] md:w-[20rem] rounded-md' alt="" />
</div >
{/*description*/}<div className='lg:px-[5rem] lg:text-left md:text-left text-justify  lg:w-[95%] md:w-[95%]  w-[110%]'>

<p className='text-[#ADD6E8] text-[4rem] font-medium '>Hello!</p>

<p className='text-[#ADD6E8] leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum in perspiciatis ut eligendi, repudiandae magnam! Deserunt impedit porro molestias unde quam nihil officia vel dicta earum ipsa, laboriosam nulla eius.
Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quam quisquam, alias corporis recusandae eius consequatur eveniet suscipit est atque ipsa blanditiis libero distinctio deserunt. Magnam repudiandae illum eos commodi.
</p>
<br />
<p className='text-[#9C9C9C] font-medium text-[1.5rem]'>Let's work together</p>
<div className='text-[#9C9C9CA1]'>
<p className=''>what can i do for you?</p>

<p className=''>Shot an email to Yaqub.009448401@gmail.com</p>
</div>
</div>



</div>




    </div>
  )
}

export default About
