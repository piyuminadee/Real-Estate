import { useState } from 'react'

import './App.module.css'
import {Navbar} from './component/Navbar/Navbar'
import { Hero } from './component/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className={StyleSheet.App}>
    <Navbar/>
    <Hero/>
    </div>
    
    
  )
}

export default App
