import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Pages/Home/Navbar";
import Banner from "./Pages/Home/Banner";
import Features from "./Pages/Home/Features";
import Home from "./Pages/Home/Home";
import Footer from "./Pages/Home/Footer";

function App() {
  return (
    <div className="App bg-base-200">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/banner" element={<Banner />} />
        <Route path="feature" element={<Features />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
