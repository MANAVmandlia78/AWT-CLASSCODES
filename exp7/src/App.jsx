import React, { useState } from "react";
import "./App.css";

function App() {
  /* ================= CAROUSEL ================= */
  const images = [
    "https://picsum.photos/800/300?1",
    "https://picsum.photos/800/300?2",
    "https://picsum.photos/800/300?3",
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((index + 1) % images.length);
  };

  const prev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  /* ================= ACCORDION ================= */
  const faqData = [
    {
      question: "What is React?",
      answer: "React is a JavaScript library for building UI.",
    },
    {
      question: "What is useState?",
      answer: "It is a hook to manage state in functional components.",
    },
    {
      question: "What is JSX?",
      answer: "JSX is syntax that looks like HTML in JavaScript.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  /* ================= SHOPPING ================= */
  const products = [
    { id: 1, name: "Shoes", category: "Fashion" },
    { id: 2, name: "Laptop", category: "Electronics" },
    { id: 3, name: "T-Shirt", category: "Fashion" },
    { id: 4, name: "Phone", category: "Electronics" },
  ];

  const [filter, setFilter] = useState("All");

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div className="container">
      <h1>Experiment 7 UI Components</h1>

      {/* ================= CAROUSEL ================= */}
      <h2>🖼️ Image Carousel</h2>
      <div className="carousel">
        <button onClick={prev}>⬅️</button>
        <img src={images[index]} alt="carousel" />
        <button onClick={next}>➡️</button>
      </div>

      {/* ================= ACCORDION ================= */}
      <h2>❓ FAQ Accordion</h2>
      {faqData.map((item, i) => (
        <div key={i} className="faq">
          <div
            className="question"
            onClick={() =>
              setActiveIndex(activeIndex === i ? null : i)
            }
          >
            {item.question}
          </div>

          {activeIndex === i && (
            <div className="answer">{item.answer}</div>
          )}
        </div>
      ))}

      {/* ================= SHOPPING ================= */}
      <h2>🛒 Shopping List</h2>

      <div className="filters">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Fashion")}>Fashion</button>
        <button onClick={() => setFilter("Electronics")}>
          Electronics
        </button>
      </div>

      <ul>
        {filteredProducts.map((item) => (
          <li key={item.id}>
            {item.name} - {item.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;