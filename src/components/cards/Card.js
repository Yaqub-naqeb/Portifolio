import React from 'react'
import imageOne from '../imgs/prjs/Screenshot (39).png'
import imageTwo from '../imgs/prjs/Screenshot (40).png'
import imageThree from '../imgs/prjs/Screenshot (41).png'

const Card = () => {
 
  return (
    <div className='flex   flex-col gap-[2rem] justify-center align-middle  pt-[12rem]  pb-[4rem] px-[3rem] md:px-[6rem] lg:px-[10rem]'>


{/* 01 */}
<div className='flex align-middle gap-4  '>
  <div className='rounded-full w-7 h-7 translate-y-[5rem] bg-[#9c9c9c34]'>  </div> 
  <div className='justify-self-end text-[5.4rem] font-semibold text-[#a4d3e776]'>01</div>
  </div>


      {/* first card */}

    <div className='flex p-4 shadow-md rounded-lg bg-[#f5f6f7] flex-wrap  align-middle justify-around mb-[6rem] '>
{/* img */}
<div>
<img src={imageOne} className='lg:w-[35rem] rounded-lg md:w-[35rem] ' alt="" />
</div>
{/* description */}
<div className=' lg:text-center self-start '>
  <h1 className='text-center text-[1.5rem] font-medium leading-[4rem] text-[#6c6c6c]'>AVIBOOKS</h1>
<div className='leading-6  text-[#a4a3a3e3]'>
<p className='lg:px-0 md:px-0   px-[3rem]'>Avibooks is a website that you can find your books  </p>
<p className='lg:px-0 md:px-0   px-[3rem]'>and buy it an easy way with some free books</p>
{/* <p>tools: React,Firebase,Tailwindcss and XD.</p> */}
<div className='flex m-[2rem] gap-2 text-center text-[#306CC4] font-medium text-[1rem] '>
  <p className='px-[.4rem] py-[.2rem] rounded-full bg-[#E9EEFA] '>React.js</p>
  <p className='px-[.4rem] py-[.2rem] rounded-full bg-[#E9EEFA] '>Firebase</p>

  <p className='px-[.4rem] py-[.2rem] rounded-full bg-[#E9EEFA] '>Figma</p>
</div>

</div>
<div className='mt-5 flex gap-8 align-middle justify-center text-[1.2rem]'>

  {/* code braket */}
  <a href='#/' className='border-2 rounded-full p-2 border-[#ADD6E8] hover:bg-[#ADD6E8] transition-all duration-500 text-[#4d4d4d]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>
</a>
  {/* Demo */}
  <a href='#/' className='border-2 rounded-full p-2 border-[#ADD6E8] hover:bg-[#ADD6E8] transition-all duration-500 text-[#4d4d4d]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</a>
</div>
</div>

    </div>



{/* 02 */}
<div className='flex  align-middle gap-4'>
  <div className='rounded-full w-7 h-7 translate-y-[5rem] bg-[#9c9c9c34]'>  </div> 
  <div className='justify-self-end text-[5.4rem] font-semibold text-[#a4d3e776]'>02</div>
  </div>


      {/* Second card */}

    <div className='flex p-4 shadow-md rounded-lg bg-[#f5f6f7] flex-wrap gap-[4rem] align-middle justify-center mb-[6rem]'>

{/* description */}
<div className=' lg:text-center self-start '>
  <h1 className='text-center text-[1.5rem] font-medium leading-[4rem] text-[#6c6c6c]'>CINFLIX</h1>
<div className='leading-6  text-[#a4a3a3]'>
<p className='lg:px-0 md:px-0  px-[3rem]'>Cinflix is a website that you can find your Movies  </p>
<p className='lg:px-0 md:px-0   px-[3rem]'> and watch the trailer of movies or watch it </p>
<div className='flex m-[2rem] gap-2 text-center text-[#306CC4] lg:translate-x-8 md:translate-x-8 font-medium text-[1rem] '>
  <p className='px-[.4rem] py-[.2rem] rounded-full bg-[#E9EEFA] '>React.js</p>
  <p className='px-[.4rem] py-[.2rem] rounded-full bg-[#E9EEFA] '>TailwindCss</p>
  <p className='px-[.4rem] py-[.2rem] rounded-full bg-[#E9EEFA] '>XD</p>
</div>
</div>


<div className='mt-5 flex gap-8 align-middle justify-center text-[1.2rem]'>

  {/* code braket */}
  <a href='#/' className='border-2 rounded-full p-2 border-[#ADD6E8] hover:bg-[#ADD6E8] transition-all duration-500 text-[#4d4d4d]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>
</a>
  {/* Demo */}
  <a href='#/' className='border-2 rounded-full p-2 border-[#ADD6E8] hover:bg-[#ADD6E8] transition-all duration-500 text-[#4d4d4d]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</a>
</div>


</div>
{/* img */}
<div className=''>
<img src={imageThree} className='lg:w-[35rem] md:w-[35rem] lg:translate-x-20 rounded-lg' alt="" />
</div>
    </div>





    
{/* 03 */}


<div className='flex align-middle gap-4  '>
  <div className='rounded-full w-7 h-7 translate-y-[5rem] bg-[#9c9c9c34]'>  </div> 
  <div className='justify-self-end text-[5.4rem] font-semibold text-[#a4d3e776]'>03</div>
  </div>


      {/* first card */}

    <div className='flex p-4 shadow-md rounded-lg bg-[#f5f6f7] flex-wrap  align-middle justify-around mb-[6rem] '>
{/* img */}
<div>
<img src={imageTwo} className='lg:w-[35rem] rounded-lg md:w-[35rem] ' alt="" />
</div>
{/* description */}
<div className=' lg:text-center self-start '>
  <h1 className='text-center text-[1.5rem] font-medium leading-[4rem] text-[#6c6c6c]'>HEADSET</h1>
<div className='leading-6  text-[#a4a3a3e3]'>
<p className=''>This website is usefull for finding new headsets</p>
<p>and buy it an easy way</p>
{/* <p>tools: React,Firebase,Tailwindcss and XD.</p> */}
<div className='flex m-[2rem] lg:translate-x-16 md:lg:translate-x-16 gap-2 text-center text-[#306CC4] font-medium text-[1rem] '>
  <p className='px-[.4rem] py-[.2rem] rounded-full bg-[#E9EEFA] '>Html</p>
  <p className='px-[.4rem] py-[.2rem] rounded-full bg-[#E9EEFA] '>Css</p>
  <p className='px-[.4rem] py-[.2rem] rounded-full bg-[#E9EEFA] '>JavaScript</p>
</div>

</div>
<div className='mt-5 flex gap-8 align-middle justify-center text-[1.2rem]'>

  {/* code braket */}
  <a href='#/' className='border-2 rounded-full p-2 border-[#ADD6E8] hover:bg-[#ADD6E8] transition-all duration-500 text-[#4d4d4d]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>
</a>
  {/* Demo */}
  <a href='#/' className='border-2 rounded-full p-2 border-[#ADD6E8] hover:bg-[#ADD6E8] transition-all duration-500 text-[#4d4d4d]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</a>
</div>
</div>

    </div>




    </div>
  )
}

export default Card
