import React from 'react'
import About from '../../pages/About'
import Home from '../../pages/Home'
import Projects from '../../pages/Projects'
import Skills from '../../pages/Skills'
import Navbar from '../navigation/Navbar'
import { Animator, ScrollContainer, ScrollPage, batch, Fade} from "react-scroll-motion";

const Rout = () => {


  return (
    <div className=''>


<ScrollContainer >
  <ScrollPage>
  <Navbar/>
    <Animator animation={batch(Fade())}>
      <span><Home/> </span>
    </Animator>
  </ScrollPage>
 
  <About/>
<Skills/>
<Projects/>
</ScrollContainer>




    </div>
  )
}

export default Rout
