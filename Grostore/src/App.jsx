import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import preloader from "./preloader.gif";
import Footer from "./components/Footer";
import Shop from "./pages/shop";
import AboutUs from "./pages/Aboutus";
import BlogGrid from "./pages/BlogGrid";
import MyAccount from "./pages/myaccount";



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
         <Route path="/shop" element={<Shop/>} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/blog" element={<BlogGrid />} />
          <Route path="/myaccount" element={<MyAccount/>} />
          

      </Routes>
      <Footer />
    </>
  );
}

export default App;
