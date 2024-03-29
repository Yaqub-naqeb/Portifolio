import React from 'react'
import { HashLink } from 'react-router-hash-link';
import classNames from 'classnames';

import '../../App.css'

import { motion } from "framer-motion"
import useTheme from '../../components/store/useTheme'

const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "10%" },
  }
const Navbar = () => {

  const {un,Under,mode}=useTheme();
 

  return (
    // ${un ? 'z-40':'z-50' }
    <div  className={`fixed right-0  z-40`}>
{/* text-[#004870] */}
<button
onClick={()=>Under(!un)} className={`fixed z-50    right-5 top-[55px] '}`}>

<div className={classNames(`tham tham-e-squeeze md:tham-w-8 tham-w-6 lg:tham-w-8`, { 'tham-active': un })}>
      <div className="tham-box">
        <div className={`tham-inner  ${mode?'bg-[#004870] brgr':'bg-[#add6e8c5]'} tham-active`} />
      </div>
    </div>

</button>

{/* blur */}
<div className={un ?'backdrop-blur-[0.1rem] bg-[#e4e4e480] top-0 right-0 h-[100vh] w-[100vw] absolute  ':'' } onClick={()=>Under(false)}/>
{/* nav */}
      <motion.nav  
animate={un ? "open" : "closed"}
variants={variants}
className={`${un?'open duration-100  ':'close hidden'}`}>


  {/* chawrchewa */}
  <div className=' 
  lg:h-[27.9rem] lg:w-[17.5rem] 
  md:h-[21.5rem] md:w-[14rem] 
  h-[17.5rem] w-[12rem]
 

  absolute  top-[9rem] border-[0.4rem] 
  
  lg:right-[4.3rem] 
  md:right-[4.3rem] 
  right-[2.3rem] 
  border-[#add6e851]
  
  
  '/>
<ul 
className='bg-[#ADD6E8]
overflow-hidden
lg:w-[16.8rem] 
md:w-[13.3rem] w-[11.2rem]
fixed
 lg:top-[7rem] lg:right-[5rem] 
 md:top-[7rem] md:right-[5rem] 
 top-[7rem] right-[3rem] 
 pr-[5rem] pt-[6rem] 
pb-[2rem] flex flex-col 
 gap-3 align-text-bottom
 lg:pt-[9rem] lg:pr-[5rem] lg:pb-8
lg:text-[2rem]
md:text-[1.5rem]
 '>


    <li className=' dv w-[190%]'> <HashLink 
    
    to={'#'} smooth onClick={()=>Under(false)}   className=' hover:text-[#2a90bc] w-full list text-[#fff] '>Home</HashLink> </li>
       {/*  */}
       <li className='dv w-[190%]'> <HashLink
       onClick={()=>Under(false)}
       className= ' hover:text-[#2a90bc] text-[#fff] list' smooth  to={'#about'}>About Me</HashLink> </li>
 
   {/*  */}
   <li className='dv w-[190%]'> <HashLink
    onClick={()=>Under(false)}
    className='hover:text-[#2a90bc] text-[#fff] list' smooth to={'#skills'}>Skills</HashLink> </li>


    {/*  */}
    <li className='  dv  w-[190%]  ' > <HashLink
    onClick={()=>Under(false)}
    smooth className=' hover:text-[#2a90bc] text-[#fff] list' to={'#projects'}>Projects</HashLink> </li>
 
 
    {/*  */}
    <li className='dv w-[190%]'> <HashLink
    onClick={()=>Under(false)}
    className='hover:text-[#2a90bc] text-[#fff] list' smooth to={'#contacts'}>Contacts</HashLink> </li>
 
</ul>
      </motion.nav>
      {/*  */}
      
    </div>
  )


}



export default Navbar
