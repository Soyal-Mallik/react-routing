import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

import Home from './Home'
import About from './About'
import Contact from './Contact'
import Course from './Course'
import Service from './Service'
import Navbar from './Navbar'

export default function Routing() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path='/course' element={<Course />}></Route>
        <Route path='/service' element={<Service />}></Route>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}
