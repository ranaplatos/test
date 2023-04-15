import React, { useReducer, useRef } from 'react'
import { formAction } from './useActionform'
import { formReducer, initialSTATE } from './useReducerForm'

const Form_useReducer = () => {

    const [state,dispatch] = useReducer(formReducer,initialSTATE)

    const handleChange = ({target:{name,value}}) => {
        dispatch({type: formAction.CHANGE_INPUT, payload:{name:name,value:value} })
    }

    const tagRef = useRef()
    const handleTags = () => {
        const tags = tagRef.current.value.split(",")
        tags.forEach(element => {
            dispatch({type: formAction.ADD_TAG, payload:element})
        });
    }

console.log(state);

  return (
      <>
    <div>Form_useReducer</div>
    <form>
    <input type="text" placeholder="name" name="title" onChange={handleChange}/>
    <input type="text" placeholder="desc" name="desc" onChange={handleChange}/>
    <input type="text" placeholder="price" name="price" onChange={handleChange}/>

    <div>
    <h3>category:</h3>
        <select name="category" onChange={handleChange}>
          <option value="sneakers">Sneakers</option>
          <option value="shoes">Shoes</option>
          <option value="loafers">Loafers</option>
        </select>
    </div>

    <div>
    <h3>Tags:</h3>
        <textarea name="tags" ref={tagRef} placeholder="separate tag with commas"/>
        <button type="button" onClick={handleTags}>Add Tags</button>
          {state.tags.map((tag,index)=>(
              <button key={index} onClick={()=>dispatch({type:formAction.REMOVE_TAG, payload: tag})}>{tag}</button>
            ))}
    </div>

    <div>
      <button type="button" onClick={()=>dispatch({type:formAction.DECREASE_QUANTITY})}>-</button>
      <span>Quantity({state.quantity})</span>
      <button type="button" onClick={()=>dispatch({type: formAction.INCREASE_QUANTITY})}>+</button>
    </div>
</form>
    </>
  )
}

export default Form_useReducer