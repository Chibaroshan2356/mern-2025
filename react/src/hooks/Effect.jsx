import React from 'react'
import { useEffect , useState } from 'react'

const Effect = () => {
    const [count,setcount] = useState(0)
    useEffect(()=> {
      setTimeout(() =>{
        setcount(count+1);
      },1000)
      
    },[count])
    const handleIncrement = () =>{
        setcount(count+1);
    }
    const handleDecrement = () =>{
        setcount(count-1);
    }
    const handleReset =() =>{
        setcount(0);
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleIncrement}>Increment</button>
    </div>
  )
}

export default Effect