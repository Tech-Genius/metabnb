import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './components/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NotFound from './components/404'

function App() {


  return (
    <div className="App">
     <Header></Header>

<Routes>
<Route path='/' element={<Home />} />
<Route path='*' element={<NotFound />}/>
</Routes>
    </div>
  )
}

export default App
