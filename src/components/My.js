import React from 'react'

const My = ({bg_name,name, label}) => {
  return (
    <div className='my-[1.5rem] sm:my-[2rem] md:my-[2.5rem] lg:my-[3rem]'>
       <h2 aria-label={label || name} className='mb-[-3rem]'>
        <span aria-hidden="true" className='block text-center
        lg:text-[8rem] md:text-[8rem] text-8xl  font-semibold opacity-[0.6]  text-[#ADD6E84F]'>{bg_name}</span>
     <span className='block text-[2.4rem] text-[#ADD6E8] lg:translate-y-[-4rem] md:translate-y-[-4rem]
     translate-y-[-3rem]
     text-center'>{name}</span>
     </h2>

    </div>
  )
}

export default My
