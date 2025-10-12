import React, { useState } from 'react'

const Showhide = () => {
    const [show,setShow]=useState(false);
    
    const handleClick=()=>{
        setShow(!show);
    }

    const [text,setText]=useState("");
    
  return (
    <div>
      <textarea name="textspace" id="txt" placeholder='Enter Your Text Here' onChange={(e)=>setText(e.target.value)} style={{marginTop:'18rem',marginLeft:'25rem',width:'20rem',height:"15rem"}}></textarea>
      <button onClick={handleClick} style={{marginLeft:'2rem'}}>{show?"hide":"show"}</button>
    </div>
  )
}

export default Showhide
