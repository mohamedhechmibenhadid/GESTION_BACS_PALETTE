import { useState } from 'react'

import './App.css'
import Router from './Components/Router/Router'
import {BrowserRouter} from 'react-router-dom'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <Router/>
      </BrowserRouter>
    </>
  )
}

export default App
