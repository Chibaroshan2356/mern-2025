import React from 'react'
import Child from './components/Child'
import About from './pages/About'
import Contact from './pages/Contact' 
import Home from './pages/home'
import Skills from './pages/skills'
import Navbar from './components/Navbar'
import Hooks from './pages/Hooks'
import Effect from './Hooks/Effect'
import State from './Hooks/State'
import Login from './pages/Login'
import Signup from './pages/signup'
import {Route , Router, Routes} from 'react-router-dom'

const App = () => {
  var arr = ['hii' , 'hello' , ' bye']
  var user = {username : "roshan" , pass : "rosh23"};
  return (
    <div>
      <Navbar/>
      {/* Remove <Login/> here if you want it only on /login route */}
      <Routes>
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={<Home items={arr}/>}/>
        <Route path='/hooks' element={<Hooks/>}/>
        <Route path='/state' element={<State/>}/>
        <Route path='/effect' element={<Effect/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/child' element={ <div><Child name="rosh" ph="123456890" dept="IT" /></div>}/></Routes>
    </div>
  )
}

export default App