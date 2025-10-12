import React, { useState } from 'react'

const Color = () => {
    const [color,setColor]=useState("blue");

    const handleclick=()=>{
        setColor(color==="blue"?"black":"blue");
    }       
        return (
    <div>
        <button onClick={handleclick} style={{color:color, height:"18rem", width:"20rem", fontSize:"5rem"}}>
            click me
        </button>
    </div>
  )
}

export default Color
