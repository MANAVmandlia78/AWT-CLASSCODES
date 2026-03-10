import React, { useState } from 'react'
import MyData from './Components/MyData'
const App = () => {
  const [items,setItems] = useState([])
  return (
    <div>
      total items :{items.length}<br/>
      <MyData items={items} setItems={setItems}></MyData>
    </div>
  )
}

export default App