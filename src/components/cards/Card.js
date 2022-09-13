import React from 'react'
import imageOne from '../imgs/prjs/Screenshot (39).png'
import imageTwo from '../imgs/prjs/Screenshot (40).png'
import imageThree from '../imgs/prjs/Screenshot (41).png'

const Card = () => {
 
  return (
    <div className='flex  flex-col gap-[2rem] justify-center align-middle  pt-[12rem]  pb-[4rem] px-[3rem] md:px-[6rem] lg:px-[10rem]'>


{/* 01 */}
<div className='flex align-middle gap-4  '>
  <div className='rounded-full w-7 h-7 translate-y-[5rem] bg-[#9c9c9c34]'>  </div> 
  <div className='justify-self-end text-[5.4rem] font-semibold text-[#a4d3e776]'>01</div>
  </div>


      {/* first card */}

    <div className='flex flex-wrap gap-10 align-middle justify-center mb-[6rem] '>
{/* img */}
<div>
<img src={imageOne} className='lg:w-[40rem] md:w-[35rem] ' alt="" />
</div>
{/* description */}
<div className=' lg:text-center self-start '>
  <h1 className='text-center text-[1.5rem] font-medium leading-[4rem] text-[#8b8b8b]'>AVIBOOKS</h1>
<div className='leading-6  text-[#a4a3a3e3]'>
<p className=''>Avibooks is a website that you can find your books  </p>
<p>and buy it an easy way with some free books</p>
<p>tools: React,Firebase,Tailwindcss and Figma.</p>
</div>
<div className='mt-5 flex gap-8 align-middle justify-center text-[1.2rem]'>
  <a href='/' className='bg-[#ADD6E8] font-medium rounded-sm p-1 text-[#4d4d4d] hover:text-black  transition-all duration-500'>Demo</a>
  <a href='/' className=' btn border-2 p-1 border-[#ADD6E8] hover:bg-[#ADD6E8]  transition-all duration-500 text-[#4d4d4d]  '>GitHub</a>
</div>
</div>

    </div>



{/* 02 */}
<div className='flex  align-middle gap-4'>
  <div className='rounded-full w-7 h-7 translate-y-[5rem] bg-[#9c9c9c34]'>  </div> 
  <div className='justify-self-end text-[5.4rem] font-semibold text-[#a4d3e776]'>02</div>
  </div>


      {/* Second card */}

    <div className='flex  flex-wrap gap-[4rem] align-middle justify-center mb-[6rem]'>

{/* description */}
<div className=' lg:text-center self-start '>
  <h1 className='text-center text-[1.5rem] font-medium leading-[4rem] text-[#8b8b8b]'>CINFLIX</h1>
<div className='leading-6 text-[#a4a3a3e3]'>
<p>Cinflix is a website that you can find your Movies  </p>
<p>and and watch the trailer of movies or watch it </p>
<p>tools: React,Firebase,Tailwindcss and XD.</p>
</div>
<div className='mt-5 flex gap-8 align-middle justify-center text-[1.2rem]'>
  <a href='/' className='bg-[#ADD6E8] font-medium rounded-sm p-1 text-[#4d4d4d] hover:text-black  transition-all duration-500'>Demo</a>
  <a href='#/' className='border-2 p-1 border-[#ADD6E8] hover:bg-[#ADD6E8] transition-all duration-500 text-[#4d4d4d]'>GitHub</a>
</div>


</div>
{/* img */}
<div className=''>
<img src={imageThree} className='lg:w-[40rem] md:w-[35rem] lg:translate-x-20 ' alt="" />
</div>
    </div>





    
{/* 03 */}
<div className='flex align-middle gap-4'>
  <div className='rounded-full w-7 h-7 translate-y-[5rem] bg-[#9c9c9c34]'>  </div> 
  <div className='justify-self-end text-[5.4rem] font-semibold text-[#a4d3e776]'>03</div>
  </div>


      {/* first card */}

    <div className='flex flex-wrap gap-10 align-middle justify-center '>
{/* img */}
<div>
<img src={imageTwo} className='lg:w-[40rem] md:w-[35rem] ' alt="" />
</div>
{/* description */}
<div className=' lg:text-center self-start '>
  <h1 className='text-center text-[1.5rem] font-medium leading-[4rem] text-[#8b8b8b]'>HEADSET</h1>
<div className='leading-6 text-[#a4a3a3e3]'>
<p>This website is usefull for finding new headsets branch </p>
<p>and buy it an easy way </p>
<p> <span className='font-medium'>tools:</span>  Html,Css,JavaScript.</p>
</div>
<div className='mt-5 flex gap-8 align-middle justify-center text-[1.2rem]'>
  <a href='/' className='bg-[#ADD6E8] cursor-pointer font-medium rounded-sm p-1 text-[#4d4d4d] hover:text-black  transition-all duration-500 '>Demo</a>
  <a href='#/' className='border-2 p-1 cursor-pointer border-[#ADD6E8]  transition-all duration-500 text-[#4d4d4d] hover:bg-[#ADD6E8]'>GitHub</a>
</div>
</div>

    </div>


    </div>
  )
}

export default Card
