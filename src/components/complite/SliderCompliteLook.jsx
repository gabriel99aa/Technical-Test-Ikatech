import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import DB from "../../DB";
import "./style.css";

const SliderCompliteLook = () => {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])

  return (
    <>
      <div className="superContainer">
        <div className="title">
          <h2>COMPLETA TU LOOK</h2>
        </div>
        <motion.div ref={carousel} whileTap={{cursor: 'grabbing'}} className="carousel">
          <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="inner-carousel">
            {DB.map((DB) => {
              return (
                <motion.div className="item" key={DB.referencia}>
                  <div className="boxFoto">
                    <img src={DB.foto} alt="foto" className="foto" />
                  </div>
                  <button className="link">{DB.nombre}</button>
                  <br />
                  <h4>{DB.precio}</h4>
                  <br />
                  <button className="buttonCarrito">AÑADIR AL CARRITO</button>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default SliderCompliteLook;
