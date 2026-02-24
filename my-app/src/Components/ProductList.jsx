import React, { useEffect } from 'react'

const ProductList = () => {
    useEffect(() => {
    fetchData();
      return () => {
        second
      }
    }, [])

    const fetchData = async () =>{
        const data = await axios.get('https://zenquotes.io/api/quotes');
        console.log(data);
      }
    
  return (
    <div>ProductList</div>
  )
}

export default ProductList