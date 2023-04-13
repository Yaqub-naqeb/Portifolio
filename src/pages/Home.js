import React from 'react'
import useTheme from '../components/store/useTheme'
import Rectangular from '../components/homeComponent/Rectangular'
import ToggleMode from '../components/homeComponent/ToggleMode'
import Hello from '../components/homeComponent/Hello'
import whiteImg from '../components/imgs/Yaqub.jpg'
import darkImg from '../components/imgs/Yaqub.jpg'



const Home = () => {
  const {mode,changeMode}=useTheme();

// #9cd5ee6e
  return (  <div  className={` min-h-screen  ${mode?'white ':'dark'}
 w-[100vw] overflow-hidden flex flex-col items-start justify-center  ${mode?'':'bg-[#262626]'}`}>


{/* the blue rectaingul */}
        <div onClick={()=>changeMode(!mode)} className={`cursor-pointer rounded-r-md absolute top-[43px] left-0 lg:w-[168px] lg:h-[56px]
        md:w-[128px] md:h-[56px]
        w-[80px] h-[46px]
        
         ${mode?'bg-[#9cd5ee64] ':'bg-[#505C62] '}`}>
<ToggleMode/>
        </div>
{/* Writting */}
    
      <div className='lg:-translate-y-10  md:translate-y-[17.5rem] lg:px-20  lg:self-start md:self-center self-center justify-self-end translate-y-[10rem]  '>
      <Hello/>
      </div>
{/* rectangul with socials */}
          <Rectangular/>
   </div>
  )
}

export default Home
