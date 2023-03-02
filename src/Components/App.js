import React from 'react'
import './App.css'
import { BrowserRouter } from "react-router-dom";
import {Routes , Route} from 'react-router-dom'
import Abuot from './About'
import Home from './Home';
import Contact from './Contact';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/about' element={<Abuot/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
  )
}

