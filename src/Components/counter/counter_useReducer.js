import React, { useReducer } from 'react'

const initialState = 0

const reducer = (state,action) => {
    // console.log("state",state)
    // console.log("action",action)
    
    switch(action.type){
        case "INCREMENT":{
            return state+1;
        }
        case "DECREMENT":{
            return state-1;
        }
        case "RESET":{
            return 0
        }
        default : return state;
    }
}

const Counter_useReducer = () => {

    const [state,dispatch] = useReducer(reducer,initialState);

  return (
    <div>
        <p>{state}</p>
        <button type="button" onClick={()=>dispatch({type:"INCREMENT"})}>Increment</button>
        <button type="button" onClick={()=>dispatch({type:"DECREMENT"})}>Decrement</button>
        <button type="button" onClick={()=>dispatch({type:"RESET"})}>Reset</button>
    </div>
  )
}

export default Counter_useReducer