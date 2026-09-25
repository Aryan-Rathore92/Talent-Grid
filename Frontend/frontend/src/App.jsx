import React from 'react'
import Navbar from './components/Navbar/Navbar'
import LineraEffcet from './components/Navbar/LineraEffcet'
import {Home, Courses, Result, About} from './Pages/index.js'
import { Register, Login } from './Forms/index.js'
import {BrowserRouter, Route, Routes} from'react-router-dom';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
       <section id='section1'>
        <LineraEffcet/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/results' element={<Result/>}/>
          <Route path='/Courses' element={<Courses/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
       </section>
      </BrowserRouter>
    </>
  )
}

export default App
