import React from 'react'
import About from '../../pages/About'
import Home from '../../pages/Home'
import Projects from '../../pages/Projects'
import Skills from '../../pages/Skills'
import Navbar from '../navigation/Navbar'
import { Animator, ScrollContainer, ScrollPage, batch, Fade} from "react-scroll-motion";
import Contacts from '../../pages/Contacts'
import useTheme from '../store/useTheme'
import '../../Scroll.css'

const Rout = () => {


const {mode}=useTheme();

  return (
    <div className={`${mode?'':'bg-[#262626]'}`}>

<ScrollContainer >
  <ScrollPage>
  <Navbar/>
    <Animator animation={mode?batch(Fade()):''}>
      <Home/>
    </Animator>
  </ScrollPage>
</ScrollContainer>

<About/>
<Skills/>
<Projects/>
<Contacts/>
    </div>
  )
}


export default Rout
