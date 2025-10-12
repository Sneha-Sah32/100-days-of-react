import React, { useState } from 'react'

const Counter = () => {
    const [click, setClick]=useState(0);

    const clickup=()=>{
        setClick(click+1);
    }

    const clickdown=()=>{
      setClick(click-1);
    }
  return (
    <div>
      <button onClick={clickup}>Click to increase</button>
       {click}
      <button onClick={clickdown}>Click to decrease</button>

    </div>
  )
}

export default Counter

