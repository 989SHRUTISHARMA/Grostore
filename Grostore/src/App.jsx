import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import preloader from "./preloader.gif";
import Footer from "./components/Footer";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 second loader
  }, []);

  if (loading) {
    return (
      <div className="loader-wrapper">
        <img src={preloader} alt="loading" className="loader-img" />{" "}
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<h1>Products Page</h1>} />
        <Route path="/blog" element={<h1>Blog Page</h1>} />
        <Route path="/pages" element={<h1>Pages Page</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
