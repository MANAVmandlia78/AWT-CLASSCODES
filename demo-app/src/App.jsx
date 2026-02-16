import './App.css'
import ProductCart from './Components/ProductCart'

function App() {
  const prod = [
    {
      "img":" https://www.bing.com/th/id/OIP.dSpZp0D63Lq-XGxpE6fG4AHaJn?w=168&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      "title":" ",
      "cat": "veg",
      "description":" ",
      "price":"$100 ",
    },
    {
      "img":" https://www.bing.com/th/id/OIP.5okzrDqhBctzdQw4y4_2XQHaE7?w=255&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      "title":" ",
      "cat": "veg",
      "description":" ",
      "price":"$200 ",
    },
    {
      "img":" https://www.bing.com/th/id/OIP.v37yUXn7hU0BnjTQ7c9qfAHaFj?w=228&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      "title":" ",
      "cat": "fru",
      "description":" ",
      "price":"$300 ",
    },
    {
      "img":" https://www.bing.com/th/id/OIP.kO_z1rReuIplOpnvHMKL6wHaDs?w=224&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      "title":" ",
      "cat": "fru",
      "description":" ",
      "price":"$400 ",
    },
    {
      "img":" https://www.bing.com/th/id/OIP.Zsc7L0uQpW2HI_KhgztFDwHaDt?w=321&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
      "title":" ",
      "cat": "veg",
      "description":" ",
      "price":"$600 ",
    }
  ]

  return (
    <div>
      <h1>Vegitable</h1><br />
      {prod.map((e) => <ProductCart prod={e} style={{display: "inline-flex", flexDirection: "", width: "200px"}}></ProductCart>)}
    </div>
  )
}

export default App
