import React, { useState } from 'react'

export default function MoodMaker() {
    const[mood,setMood]=useState('');
    const[bg,setBg]=useState('white');

    const moodClick=(moodName)=>{
        setMood(moodName);
        if (moodName ==="happy")
            {setBg("yellow");}
        else if (moodName ==="sad")
           { setBg("grey");}
       else if (moodName ==="motivated")
            {setBg("green");}
        else if (moodName ==="angry")
            {setBg("red");}
    }

  return (
    <div style={{backgroundColor:bg,height:"200px",width:"400px",}}>
        <h1>Enter your mood here:"</h1>
        <h2>You are currently feeling:{mood}</h2>
      <button onClick={()=> moodClick("happy")}>Happy</button>
      <button onClick={()=> moodClick("sad")}>Sad</button>
      <button onClick={()=> moodClick("motivated")}>motivated</button>
      <button onClick={()=> moodClick("angry")}>Angry</button>
    </div>
  )
}
