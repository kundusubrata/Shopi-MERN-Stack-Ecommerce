import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Home from "./components/Home.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}/>
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
