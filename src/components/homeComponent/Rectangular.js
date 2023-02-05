import React from 'react'

const Rectangular = () => {
  return (
    <div>
      <div className={`flex rounded-r-md z-41 gap-4 absolute bottom-9 lg:pl-[10rem] md:pl-[7rem] pl-[3rem] py-[7px] pr-8 bg-[#ADD6E84F] ${mode?'bg-[#9cd5ee43]':'bg-[#505C62]'}`}>
           
           <a target={'_blank'} rel="noreferrer" href="https://www.facebook.com/yaqubEng" className='hover:brightness-100 '> <img src={Facebook} className='w-[34px] h-[34px]' alt="" /></a>

           <a target={'_blank'} rel="noreferrer" href="https://www.instagram.com/yaqub_321_/"> <img src={Insta} className='w-[34px] h-[34px]' alt="" /></a>

<a target={'_blank'} rel="noreferrer" href="https://www.linkedin.com/in/yaqub-naqeeb-b9894b238/">
            <img src={LinkedIn} className='w-[34px] h-[34px]' alt="" /></a>

<a href="https://github.com/Yaqub-naqeb" target={'_blank'} rel="noreferrer" >
            <img src={GitHub} className='w-[34px] h-[34px]' alt="" /></a>

          </div>
    </div>
  )
}

export default Rectangular
