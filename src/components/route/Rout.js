import React from 'react'
import About from '../../pages/About'
import Home from '../../pages/Home'
import Projects from '../../pages/Projects'
import Skills from '../../pages/Skills'
import Navbar from '../navigation/Navbar'
import { Animator, ScrollContainer, ScrollPage} from "react-scroll-motion";
import Contacts from '../../pages/Contacts'
import useTheme from '../store/useTheme'
import '../../Scroll.css'
import Img from '../imgs/Yaqub.jpg'
const Rout = () => {


const {mode}=useTheme();

  return (
    <div className={`${mode?'':'bg-[#262626]'}`}>
{
  Img && 
<>
<ScrollContainer >
    <ScrollPage>
  
    <Navbar/>
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
}
    </div>
  )
}


export default Rout
