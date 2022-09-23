import React from 'react'
import useTheme from '../store/useTheme'

const Card = ({info}) => {
const {mode}=useTheme();
  return (
    <div className='flex    flex-col gap-[2rem] justify-center align-middle     pb-[0rem] px-[3rem] md:px-[6rem] lg:px-[10rem]'>

{/* 01 */}
<div className='flex align-middle gap-4  '>
  <div className='rounded-full w-7 h-7 translate-y-[5rem] bg-[#9c9c9c34]'>  </div> 
  <div className='justify-self-end text-[5.4rem] font-semibold text-[#a4d3e776]'>{info.num}</div>
  </div>

      {/* first card */}

    <div className={`flex p-4 hover:shadow-lg duration-200 transition-all shadow-md rounded-lg ${mode ?'bg-[#f5f6f7]':'bg-[#81818183]'} flex-wrap  align-middle justify-around mb-[6rem] `}>
{/* img */}
<div>
<img src={info.img} className='lg:w-[35rem] rounded-lg md:w-[35rem] ' alt="" />
</div>
{/* description */}
<div className=' lg:text-center self-start '>
  <h1 className={`text-center text-[1.5rem] font-medium leading-[4rem]  ${mode ?'text-[#6c6c6c]':'text-[#ffffff]'}`}>{info.title}</h1>
<div className={`leading-6  ${mode?'text-[#969494e3]':'text-[#fcfcfce3]'}`}>
<p className='lg:px-0 md:px-0   px-[3rem]'>{info.description.map((row,index)=>(<p key={index}>{row.p}</p>))}</p>


{/* tools */}
<div className='flex m-[2rem] lg:gap-0 md:gap-2 gap-2 text-center text-[#306CC4] font-medium text-[1rem]  '>
  {info.tools.map((tol,index)=>(<div key={index} className='lg:px-[.7rem] md:px-[.5rem] px-2 py-[.2rem] rounded-full bg-[#E9EEFA] lg:ml-5 md:ml-2'>{tol.tool}</div>))}

</div>

</div>
<div className='mt-5 flex gap-8 align-middle justify-center text-[1.2rem]'>

  {/* code braket */}
  <a href={info.url} target={'_top'}  className='border-2 rounded-full p-2 border-[#ADD6E8] hover:bg-[#ADD6E8] transition-all duration-500 text-[#4d4d4d]'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
</svg>
</a>

  {/* Demo */}
  <a href='#/' className={`border-2 rounded-full p-2 border-[#ADD6E8] hover:bg-[#ADD6E8] hover:text-[#4d4d4d] transition-all duration-500  ${mode?'text-[#4d4d4d]':'text-[#ffffff]'}`}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</a>
</div>
</div>

    </div>



 




    </div>
  )
}

export default Card
