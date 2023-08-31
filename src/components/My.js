import React from 'react'

const My = ({bg_name,name}) => {
  return (
    <div className='my-[3rem]'>
       {/* My*/}
       <div className='mb-[-3rem]'>
        <p className='text-center
        lg:text-[8rem] md:text-[8rem] text-8xl  font-semibold opacity-[0.6]  text-[#ADD6E84F]'>{bg_name}</p>
     <p className='text-[2.4rem] text-[#ADD6E8] lg:translate-y-[-4rem] md:translate-y-[-4rem]
     translate-y-[-3rem]
     text-center'>{name}</p>
     </div>

    </div>
  )
}

export default My
