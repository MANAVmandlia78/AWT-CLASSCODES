import React, { useState } from 'react'

const MyData = ({items}) => {
    const[inp,setInp] = useState('')
    const handleAdd =() =>{
     items.push(inp) 
    }
  return (
    <div>MyData
        <hr/>
        <input type='text' value={inp} onChange={(e)=>setInp(e.target.value)}/>
        <button onClick={handleAdd}>Add</button>
<hr/>
{items.length > 0 && 
        <p>
            items are{
            items.map(items => (<p>{items}</p>))
        }
        </p>}
    </div>
  )
}

export default MyData