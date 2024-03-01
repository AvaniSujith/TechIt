import React from 'react'
import { Route,BrowserRouter, Routes } from 'react-router-dom'
import Front from './components/Frontpage/Front'
import Signin from './components/Login/Signin'
import Signup from './components/Login/Signup'
import Header from './components/Header/Header'
import ContactUs from './components/ContactUs/ContactUs'
import About from './components/About/About'


function App() {
  return (
    <div>
      <Header/>
        <BrowserRouter >
            <Routes >
                <Route path='/' element={<Front/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/contact' element={<ContactUs/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App