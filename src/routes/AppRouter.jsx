import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//pages 
import Producto from "../pages/Producto";

const AppRouter = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route exact path="/" element={<Producto/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default AppRouter