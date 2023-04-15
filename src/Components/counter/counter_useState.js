import React, { useState } from 'react'

const Counter_useState = () => {

    const [count,setCount] = useState(0)

  return (
    <>
     <div>Counter_useState</div>
    <p>{count}</p>
    <button type="button" onClick={()=>setCount(count+1)}>Increment</button>
    <button type="button" onClick={()=>setCount(count-1)}>Decrement</button>
    <button type="button" onClick={()=>setCount(0)}>Reset</button>
    </>
  )
}

export default Counter_useState