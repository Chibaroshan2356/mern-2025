import React from 'react'
import Child from './Components/child'
import Home from './pages/home'
import About from './pages/about'
import Skills from './pages/skills'
import Contact from './pages/contact'
import Login from './pages/login'
import Counter from './pages/counter'


const App = () => {

  var array = ['Oliver' ,'Wade','Max','Hadrien','Stein'];
  var login = {username:'rosh',password:'chiba23'}
  return (
    <div>
      <Child name="rosh" dept="FrontEnd Developer" contact="8807671271"/>
      <Home items={array} user={login}/>
      <About/>
      <Skills/>
      <Contact/>
      <Login userlogin={login}/>
      <Counter/>
    </div>
    
  )
}

export default App