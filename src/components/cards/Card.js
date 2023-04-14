import React from 'react'
import useTheme from '../store/useTheme'

const Card = ({info}) => {
const {mode}=useTheme();
  return (
    <div className='flex    flex-col gap-[2rem] justify-center align-middle     pb-[0rem] translate-x-4 px-[0rem] md:px-[6rem] lg:px-[10rem]'>

{/* 01 */}
<div className='flex align-middle gap-4  '>
  <div className='rounded-full w-7 h-7 translate-y-[5rem] bg-[#9c9c9c34]'>  </div> 
  <div className='justify-self-end text-[5.4rem] font-semibold text-[#a4d3e776]'>{info.num}</div>
  </div>

      {/* first card */}

    <div className={`flex  lg:w-full md:w-full w-[93vw]   p-4 hover:shadow-lg duration-200 transition-all shadow-md rounded-lg ${mode ?'bg-[#f5f6f7]':'bg-[#81818183]'}  xl:gap-6 xl:flex-nowrap flex-wrap   align-middle justify-around mb-[6rem] ${info.style}`}>
{/* img */}
<div>
<img src={info.img} className='lg:w-[35rem] rounded-lg md:w-[35rem] ' alt="" />
</div>
{/* description */}
<div className=' lg:text-center self-start '>
  <h1 className={`text-center text-[1.5rem] font-medium leading-[4rem]  ${mode ?'text-[#6c6c6c]':'text-[#ffffff]'}`}>{info.title}</h1>
<div className={`leading-6  ${mode?'text-[#969494e3]':'text-[#fcfcfce3]'}`}>
<p className=' lg:w-[30vw] md:w-[30vw]  lg:text-left text-left md:text-center'>
  {/* lg:px-0 md:px-0 md:text-left text-center lg:pl-0 md:pl-0  pl-[1rem] */}
  {info.description.map((row,index)=>(<p key={index}>{row.p}</p>))}</p>


{/* tools */}
<div className='flex m-[2rem] lg:gap-0 md:gap-2 gap-2 text-center text-[#306CC4] font-medium text-[1rem]   '>
  {info.tools.map((tol,index)=>(<div key={index} className='lg:px-[.7rem] md:px-[1rem] px-2 py-[.2rem] rounded-full bg-[#E9EEFA] lg:ml-5 md:ml-5'>{tol.tool}</div>))}

</div>

</div>
<div className='mt-5 flex gap-8 align-middle justify-center text-[1.2rem]'>

 {/* Demo */}
 <a target={'_blank'} rel="noreferrer" href={`${info.demo}`} alt={'Demo'} className={`border-2 rounded-full p-2 border-[#ADD6E8] hover:bg-[#ADD6E8] hover:text-[#4d4d4d] transition-all duration-500  ${mode?'text-[#4d4d4d]':'text-[#ffffff]'}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
</svg>

</a>


  {/* code braket */}
  <a target={'_blank'} href={info.url} rel="noreferrer" alt='Source code'  className={`border-2 rounded-full p-2 border-[#ADD6E8] hover:bg-[#ADD6E8] hover:text-[#4d4d4d] transition-all duration-500  ${mode?'text-[#4d4d4d]':'text-[#ffffff]'}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>
</a>

 
</div>
</div>

    </div>



 




    </div>
  )
}

export default Card
