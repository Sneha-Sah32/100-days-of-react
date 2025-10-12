import React, { useState } from 'react'


const Random = () => {
    const [randomm,setRandomm]=useState();
    const handleClick=()=>{
        setRandomm(Math.floor(Math.random()*100))
    }
  return (
    <div>
      <button onClick={handleClick}>click me to get any random number</button>
      {randomm}
    </div>
  )
}

export default Random
