import React, { useContext } from 'react'
import { colorcontext } from './Context'
function ComponentB() {
    const {color}=useContext(colorcontext)
  return (
    <div>ComponentB
        <h1>color is :{color}</h1>
    </div>
  )
}

export default ComponentB