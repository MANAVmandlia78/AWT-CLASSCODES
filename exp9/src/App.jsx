import React, { useState } from "react";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Shoes", price: 3000 },
  ];

  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);

  // Filter products
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  // Add to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  // Remove from cart
  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  // Total price
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="container">
      <h1>🛒 Simple E-Commerce</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="main">
        {/* Products */}
        <div className="products">
          <h2>Products</h2>

          {filteredProducts.map((p) => (
            <div key={p.id} className="card">
              <h3>{p.name}</h3>
              <p>₹{p.price}</p>
              <button onClick={() => addToCart(p)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart */}
        <div className="cart">
          <h2>Cart 🧺</h2>

          {cart.map((item, index) => (
            <div key={index} className="cart-item">
              {item.name} - ₹{item.price}
              <button onClick={() => removeFromCart(index)}>
                ❌
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>
        </div>
      </div>
    </div>
  );
}

export default App;