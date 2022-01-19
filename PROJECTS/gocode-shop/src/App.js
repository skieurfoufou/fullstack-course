import Home from "./Home";
import ProductPage from "./ProductPage";
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/productPage/:id" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}
export default App;
