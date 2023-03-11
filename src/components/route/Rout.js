import React, { useState } from 'react'
import About from '../../pages/About'
import Home from '../../pages/Home'
import Projects from '../../pages/Projects'
import Skills from '../../pages/Skills'
import NewNavbar from '../navigation/NewNavbar'
import { Animator, ScrollContainer, ScrollPage} from "react-scroll-motion";
import Contacts from '../../pages/Contacts'
import useTheme from '../store/useTheme'
import '../../Scroll.css'
// import Img from '../imgs/Yaqub.jpg'
// import Imgrsh from '../imgs/yaqubDark.jpg'
const Rout = () => {

// const [isImgLoaded,setIsImgLoaded]=useState(false);
const {mode}=useTheme();


  return (
    <div className={`${mode?'sp':'rsh bg-[#262626]'}`}>

{/* <img src={`${mode?Img:Imgrsh}`} alt="" onLoad={()=>{setIsImgLoaded(true)}} className={` -z-50 absolute `}/> */}

<>

<ScrollContainer >

    <ScrollPage>

    <NewNavbar/>
      <Animator >
        <Home/>
      </Animator>
    </ScrollPage>
  </ScrollContainer>
  
  <About/>
  <Skills/>
  <Projects/>
  <Contacts/>
  </>

    </div>
  )
}


export default Rout
