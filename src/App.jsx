import { useState } from 'react'

import './App.module.css'
import {Navbar} from './component/Navbar/Navbar'
import { Hero } from './component/Hero/Hero'
import { About } from './component/About/About'
import { Properties } from './component/Properties/Properties'
import { PropertiesDes } from './component/PropertiesDes/PropertiesDes'

function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div className={StyleSheet.App}>
    <Navbar/>
    <Hero/>
    <About />
    <Properties/>
    <PropertiesDes/>
    </div>
    
    
  )
}

export default App
