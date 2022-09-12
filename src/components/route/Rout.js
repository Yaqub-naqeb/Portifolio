import React from 'react'
import { Routes, Route } from "react-router-dom"
import About from '../../pages/About'
import Home from '../../pages/Home'
import Projects from '../../pages/Projects'
import Navbar from '../navigation/Navbar'

const Rout = () => {
  return (
    <div>

<Navbar/>
<Home/>
<About/>
<Projects/>


    </div>
  )
}

export default Rout
