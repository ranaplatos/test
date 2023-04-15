import React, { useReducer } from 'react'


//reducer(can be coded in different file and import here)
const initialState = {
  loading: false,
  post: {},
  error: false
}

const reducer = (state,action) => {
  switch(action.type){
    case "FETCH_START":
      return{
        loading: true,
        post: {},
        error: false
      }
      case "FETCH_SUCCESS":
        return {
          ...state,
          loading: false,
          post: action.payload
        }
        case "FETCH_ERROR":
          return {
            ...state,
            loading:false,
            error: true
          }
          default:
            return state
  }
}

const Post_useReducer = () => {

  const [state,dispatch] = useReducer(reducer,initialState)

  const handleFetch = () => {
    dispatch({type:"FETCH_START"})
    fetch("https://jsonplaceholder.typicode.com/posts/1").then((res)=>{
        return res.json();
    }).then((data)=>{
        dispatch({type:"FETCH_SUCCESS", payload: data})
    }).catch((error)=>{
        dispatch({type: "FETCH_ERROR"})
    })
}

  return (
    <>
    <div>
        <button type="button" onClick={handleFetch}>{state.loading ? "wait..." : "Fetch the post"}</button>
        <p>{state.post?.title}</p>
        <span>{state.error && "Something went wrong!"}</span>
    </div>
    </>
  )
}

export default Post_useReducer