import React, { useState } from 'react'

const Checker = () => {

    const [num,setNum]=useState();
    const [checker,setChecker]=useState("even")

    const handleChange=(e)=>{
        setNum(parseInt(e.target.value));
    };

    const check=()=>{
        setChecker(num%2===0?"even":'odd')
    }
  return (
    <div>
      <input placeholder='enter a number' onChange={handleChange} type='number' />
      <p>Entered number: {num}</p>
      <button onClick={check}>Check</button>
      <p >The given number is {checker}</p>
    </div>
  )
}

export default Checker
