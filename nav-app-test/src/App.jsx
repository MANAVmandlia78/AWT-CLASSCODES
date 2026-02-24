import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Product from "./Components/Product";
import AboutUs from "./Components/AboutUs";
import ContactUs from "./Components/ContactUs";
import Menu from "./Components/menu";
import GraphPage from "./Components/GraphPage";
import Status from "./Components/Status";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Menu></Menu>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/graph" element={<GraphPage />} />
            <Route path="/status" element={<Status />} />
          </Route>
          <Route path="/product" element={<Product />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
