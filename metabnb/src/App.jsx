import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Header'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState()

  return (
    <div className="App">
     <Header></Header>
<Routes>
<Route></Route>
</Routes>
    </div>
  )
}

export default App
