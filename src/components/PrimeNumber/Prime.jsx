import React, { useState } from 'react'

const Prime = () => {

  const [num,setNum]=useState('');
  const [isprime,setIsprime]=useState('');

  const checkprime=(n)=>{
    if(n<=1){
      return "not prime";
    }
    for(let i=2;i<=Math.sqrt(n);i++){
      if (n % i===0){
        return "not prime"
      }else{
        return "prime";
      }
    }
  }

  const handleChange=(e)=>{
    setNum(e.target.value);
  }

  const handleClick=()=>{
    const number=parseInt(num);
    if(!isNaN(number)){
      setIsprime(checkprime(number))
    }else{

      setIsprime('')
    }
  }
  return (
    <div>
      <h1>Check the prime number:</h1>
    <div style={{margin:"4rem",backgroundColor:'black',height:'10rem',width:'20rem'}}>
      <input type="number" value={num} onChange={handleChange} style={{marginLeft:'2rem',marginTop:'2rem',height:'1.5rem',backgroundColor:'lightgrey'}}/>
      <button onClick={handleClick} style={{backgroundColor:'lightsteelblue',margin:'1rem',height:'2rem',width:'3.5rem',borderRadius:'4px'}}>check</button>
      <p style={{marginLeft:'2rem',marginTop:'2rem',color:'yellowgreen'}}>{isprime?`The given number is:${isprime}`:"Enter a number:"}</p>
    </div>
    </div>
  )
}

export default Prime
