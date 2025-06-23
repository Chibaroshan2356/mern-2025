import React, { useEffect } from 'react';
 const Ref = () => {
    const [count,setCount] = useState(0);
    const value = useRef(0);
    const handleIncrement  = () => {
        setCount(count + 1);
    }
    /*const handleIncrement = () => {
        value.current = value.current + 1;
    }*/
    useEffect(() => {
        console.log("Count Changed")
    })
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>+</button>
            <h1>{value.current}</h1>
            <button onClick={handleValueIncrement}>Increment</button>
        </div>
    )
 }     
export default Ref