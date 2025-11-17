import React, { useEffect } from 'react'
import About from '../../pages/About'
import Home from '../../pages/Home'
import Projects from '../../pages/Projects'
import Skills from '../../pages/Skills'
import Services from '../../pages/Services'
import Experience from '../../pages/Experience'
import Statistics from '../../pages/Statistics'
import NewNavbar from '../navigation/NewNavbar'
import Contacts from '../../pages/Contacts'
import BackToTop from '../BackToTop'
import useTheme from '../store/useTheme'
import '../../Scroll.css'

const Rout = () => {
  const {mode} = useTheme();

  useEffect(() => {
    // Apply dark scrollbar class to body based on theme
    if (mode) {
      document.body.classList.remove('dark-scrollbar');
      document.documentElement.classList.remove('dark-scrollbar');
    } else {
      document.body.classList.add('dark-scrollbar');
      document.documentElement.classList.add('dark-scrollbar');
    }
  }, [mode]);

  return (
    <div className={`${mode ? 'sp' : 'rsh bg-[#262626]'}`}>
      <NewNavbar/>
      <Home/>
      <About/>
      <Statistics/>
      <Services/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Contacts/>
      <BackToTop/>
    </div>
  )
}

export default Rout
