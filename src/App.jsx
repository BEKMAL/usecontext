import { useState } from 'react'
import {Themeprovider}from './Components/Context'

import './App.css'

import ComponentB from './Components/ComponentB'

import ComponentA from './Components/ComponentA'


function App() {


  return (
<Themeprovider >
<ComponentA/>

<ComponentB/>
</Themeprovider>
  )
}

export default App
