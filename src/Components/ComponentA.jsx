import React, { useContext } from 'react'
import {colorcontext} from './Context'

function ComponentA() {
    // const {colorToggler}=usecolor()
    const {colorToggler}=useContext(colorcontext)
  return (
    <div>
      <h1>Component A</h1>
<button   onClick={colorToggler}>colorToggler
   
</button>
<hr/>
    </div>
  )
}

export default ComponentA