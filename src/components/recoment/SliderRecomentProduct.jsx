import React from "react";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import DB from "../../DB";
import "./style.css";
import { useDispatch } from "react-redux";
import {cargarDetalle} from "../../actions/calzadoActions";

const {products} = DB;

const SliderRecomentProduct = () => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const dispatch = useDispatch();

  return (
    <>
      <div className="superContainer">
        <div className="title1">
          <h2>PRODUCTOS RECOMENDADOS</h2>
        </div>
        <motion.div
          ref={carousel}
          whileTap={{ cursor: "grabbing" }}
          className="carousel"
        >
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            className="inner-carousel"
          >
            {products.map((products) => {
              return (
                <motion.div className="item" key={products.referencia}>
                  <div className="boxFoto">
                    <img src={products.foto} alt="foto" className="foto" />
                  </div>
                  <button onClick={() => dispatch(cargarDetalle(products))} className="link">{products.nombre}</button>
                  <br />
                  <h4>{`$ ${products.precio}`}</h4>
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

export default SliderRecomentProduct;
