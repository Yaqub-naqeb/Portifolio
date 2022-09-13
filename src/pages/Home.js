import React from 'react'
import Facebook from '../components/imgs/facebook (1).png'
import Insta from '../components/imgs/instagram.png'
import LinkedIn from '../components/imgs/linkedin (1).png'
import GitHub from '../components/imgs/github.png'
import { useRef } from 'react'
const Home = () => {



  const myRef = useRef(null)

  const executeScroll = () => myRef.current.scrollIntoView()


  return (
    <div id='home' className='h-[100vh] w-[100vw] overflow-y-hidden '>

{/* the blue rectaingul */}
        <div className='  -z-50 absolute top-[43px] left-0 lg:w-[168px] lg:h-[56px]
        md:w-[128px] md:h-[56px]
        w-[80px] h-[46px]
        bg-[#ADD6E84F]'/>
{/* Writting */}
        <div className='writting -z-50 absolute top-[28%] lg:left-[10%] md:left-[23%] left-10  '>
          <p className='font-semibold opacity-[0.6] tracking-[4px] text-[#ADD6E84F] lg:text-[10rem] md:text-[10rem] text-[7.5rem]'>Hello</p>
          <p className=' text-[#ADD6E8]  absolute top-[58%] text-[2.5rem] left-[20%] '>I'm Yaqub</p>
          <p className='text-[#9C9C9C] text-[1.5rem] absolute lg:bottom-2 md:bottom-3 bottom-[-1rem] lg:left-[13%] md:left-[14%] left-[13%]'>Front-end Developer</p>
           
        </div>
{/* rectangul with socials */}
     
          <div className='flex z-41 gap-4 absolute bottom-9 lg:pl-[10rem] md:pl-[7rem] pl-[3rem] py-[7px] pr-8 bg-[#ADD6E84F]'>
           
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

export default Home
