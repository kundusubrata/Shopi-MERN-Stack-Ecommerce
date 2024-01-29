import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./components/Home.jsx";
import { Toaster } from "react-hot-toast";
import ProductDetails from "./components/product/ProductDetails.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Toaster position="top-center" />
        <Header />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
