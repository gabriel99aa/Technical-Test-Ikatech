import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages
import Producto from "../pages/Producto";
import Calzado from "../pages/Calzado";

//components
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/calzado" element={<Calzado />} />
          <Route exact path="/producto" element={<Producto />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default AppRouter;
