import React, { useRef, useState } from 'react'

const Form_useState = () => {

  const [product,setProduct] = useState({
    title:"",
    desc: "",
    price: 0,
    category: "",
    tags:[],
    images:{
      sm:"",
      md:"",
      lg:""
    },
    quantity:0,
  })

  const tagRef = useRef()

  const handleChange = ({target:{name,value}}) => {
    setProduct({...product,[name]:value})
  }

  //array dataType handling here
  const handleTags = () => {
    const tags = tagRef.current.value.split(",");
    // tags.forEach(element => {
    //   setProduct({...product,tags:[...product.tags,element]})
    // });
    tags.forEach(element => {
      setProduct((prev)=>({...prev,tags:[...prev.tags,element]}))
    });
  }

  const handleRemoveTag = (tag) => {
    setProduct((prev)=>({...prev,tags:prev.tags.filter((t)=>t!==tag)}))
  }

  const handleDecrease = () => {
    // setProduct({...product,quantity:product.quantity-1})----works but prefer below will work in array,object everywhere
    setProduct((prev)=>({...prev,quantity:prev.quantity-1}))
  }
  const hanldeIncrease = () => {
    // setProduct({...product,quantity:product.quantity+1})
    setProduct((prev)=>({...prev,quantity:prev.quantity+1}))
  }

  console.log(product);


  return (
    <>
    <div>Form_useState</div>
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
          {product.tags.map((tag,index)=>(
            <button key={index} onClick={()=>handleRemoveTag(tag)}>{tag}</button>
          ))}
    </div>

    <div>
      <button type="button" onClick={handleDecrease}>-</button>
      <span>Quantity({product.quantity})</span>
      <button type="button" onClick={hanldeIncrease}>+</button>
    </div>
</form>
    </>

  )
}

export default Form_useState