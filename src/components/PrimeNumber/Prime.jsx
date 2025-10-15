import React, { useState } from 'react'

const Prime = () => {
        const [prime,setPrime]=useState();
        const handleChange=()=>{
            setPrime()
        }
  return (
    <div>
      <input type="number" placeholder='Enter a number' />
      <button>Check</button>
      <p>The given number is:</p>
    </div>
  )
}

export default Prime
