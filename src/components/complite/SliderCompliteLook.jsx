import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {cargarDetalle, comprar} from "../../actions/calzadoActions";
import {useDispatch} from "react-redux";
import DB from "../../DB";
import "./style.css";

const {products} = DB;

const SliderCompliteLook = () => {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, [])

  const dispatch = useDispatch();

  return (
    <>
      <div className="superContainer">
        <div className="title">
          <h2>COMPLETA TU LOOK</h2>
        </div>
        <motion.div ref={carousel} whileTap={{cursor: 'grabbing'}} className="carousel">
          <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="inner-carousel">
            {products.map((products) => {
              return (
                <motion.div className="item" key={products.referencia}>
                  <div className="boxFoto">
                    <img src={products.foto} alt="foto" className="foto" />
                  </div>
                  <button onClick={() => dispatch(cargarDetalle(products))} className="link">{products.nombre}</button>
                  <br />
                  <h4>{`$ ${products.precio}`}</h4>
                  <br />
                  <button onClick={() => dispatch(comprar(products))} className="buttonCarrito">AÑADIR AL CARRITO</button>
                  <hr className="hr"/>
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
