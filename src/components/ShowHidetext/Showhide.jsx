import React, { useState } from 'react'

const Showhide = () => {
    const [hide,setHide]=useState(false);
    
    const handleClick=()=>{
        setHide(!hide);
    }

    const [text,setText]=useState();
    
  return (
    <div>
      
      <textarea name="textspace" id="txt" placeholder='Enter Your Text Here' onChange={(e)=>setText(e.target.value)} value={hide===true?'this text is hidden':text} style={{marginTop:'18rem',marginLeft:'25rem',width:'20rem',height:"15rem"}}></textarea>

      <button onClick={handleClick} style={{marginLeft:'2rem'}}>{hide?"show":"hide"}</button>
      
    </div>
  )
}

export default Showhide
