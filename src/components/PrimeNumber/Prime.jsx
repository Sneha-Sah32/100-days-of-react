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
      <input type="number" value={num} onChange={handleChange}/>
      <button onClick={handleClick}>check</button>
      <p>the given number is: {isprime}</p>
    </div>
  )
}

export default Prime
