import React, { useState } from 'react'

const Post_useState = () => {

    const [post,setPost] = useState({})
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)

    const handleFetch = () => {
        setLoading(true)
        setError(false)
        fetch("https://jsonplaceholder.typicode.com/posts/1").then((res)=>{
            return res.json();
        }).then((data)=>{
            setPost(data)
            setLoading(false)
        }).catch((error)=>{
            setError(true)
            setLoading(false)
            setPost({})
        })
    }

  return (
    <>
    <div>
        <button type="button" onClick={handleFetch}>{loading ? "wait..." : "Fetch the post"}</button>
        <p>{post.title}</p>
        <span>{error && "Something went wrong!"}</span>
    </div>
    </>
  )
}

export default Post_useState