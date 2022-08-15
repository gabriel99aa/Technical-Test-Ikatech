import React from "react";
import {useSelector} from "react-redux";

import { IoHeart } from "react-icons/io5";
import "./style.css";

const DescriptionProduct = () => {

  const state = useSelector((state) => state);
  const {products} = state.calzado;

  return (
    <>
      <div className="maincontainer">
        <div className="view">
          <div className="imagen">
            <img src={products[0].foto} alt="img" />
          </div>
          <div className="chose">
            <div>
              <h2>{products[0].nombre}</h2>
              <h4>{products[0].precio}</h4>
              <p>{products[0].referencia}</p>
            </div>

            <h6>TALLA</h6>
            <div className="talla">
              <div className="size">
                <p>6</p>
              </div>
              <div className="size">
                <p>6.5</p>
              </div>
              <div className="size">
                <p>7</p>
              </div>
              <div className="size">
                <p>7.5</p>
              </div>
              <div className="size">
                <p>8</p>
              </div>
              <div className="size">
                <p>8.5</p>
              </div>
              <div className="size">
                <p>9</p>
              </div>
              <div className="size">
                <p>9.5</p>
              </div>
              <div className="size">
                <p>10</p>
              </div>
              <div className="size">
                <p>11</p>
              </div>
            </div>

            <p className="guia">GUÍA DE TALLAS</p>
            <div className="acciones">
              <div className="boxButtonCarrito">
                <button className="buttonCarrito">AÑADIR AL CARRITO</button>
              </div>
              <div className="boxLike">
                <button className="like">
                  <IoHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="Detalle">
          <div>
            <h4>DETALLE DE PRODUCTO</h4>
            <hr />
          </div>
          <div className="texto">
            <p>{products[0].detalle}</p>
          </div>
        </div>
        <div className="tecnologias">
          <div>
            <h4>TECNOLOGÍAS</h4>
            <hr />
          </div>
          <div className="texto">
            <p>{products[0].tecnologias}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionProduct;
