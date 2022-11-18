import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header/Header";
import Home from "./Pages/Home/Home";
import AboutUs from "./Pages/AboutUs/About";
import Cart from "./Pages/Cart/Cart";
import ContactUs from "./Pages/Contact/Contact";
import Products from "./Pages/Products/Products";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Error from "./Pages/Error/Error";
import Login from "./Pages/Login/Login";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/*" element={<Error />} />
        </>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
