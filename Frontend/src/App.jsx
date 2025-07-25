import React from 'react'
import NavBar from './Components/NavBar.jsx'
import Footer from './Components/Footer.jsx'
import Home from './pages/Home.jsx'
import Books from './pages/Books.jsx'
import Manage from './pages/Manage.jsx'
// ✅ Correct:
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
   <section>
    <BrowserRouter>
   <NavBar/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/books' element={<Books/>}/>
    <Route path='/manage' element={<Manage/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </section>
  )
}
