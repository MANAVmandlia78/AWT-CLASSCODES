import React from 'react'

const ProductCart = ({prod}) => {
  return (

   
    <div style={{width:'200px',border: "2px solid black",margin: "5px"}}>
      <img src={prod.img} style={{width:'200px', height:'200px'}} alt="" />
      <p style={{fontWeight:'bold'}}>Product Title</p>
      <p>description</p>
      <p>{prod.price}</p>
    </div>
  )
}

export default ProductCart