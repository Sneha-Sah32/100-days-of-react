import React, { useState } from 'react'

const Wordcounter = () => {

   const [calculate,setCalculate]=useState("");

//    const handleClick=()=>{
//     setCalculate(calculate.length);
//    }

  return (
    <div>
      <textarea placeholder='Enter Your Text Here' value={calculate} onChange={(e)=>setCalculate(e.target.value)} style={{height:"20rem", width:"20rem"}} />
      
      <p>The number of words is: {calculate.trim()===""?0:calculate.trim().split(/\s+/).length}</p>
    </div>
  )
}

export default Wordcounter
