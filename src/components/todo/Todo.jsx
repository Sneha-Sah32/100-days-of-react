import React, { useState } from 'react'

const Todo = () => {
    const[text,setText]=useState("");
    const[tasks,setTasks]=useState([]);

    const handleClick=()=>{
        
        if(text.trim() !==""){
            setTasks([...tasks,text]);
            setText('');
        }
    }

  return (
    <div>
      <input value={text} onChange={(e)=>setText(e.target.value)}/>
      <button onClick={handleClick}>add</button>
      <ul>
        {tasks.map((num,i)=>(<li key={i}>{num}</li>))}
      </ul>
    </div>
  )
}

export default Todo
