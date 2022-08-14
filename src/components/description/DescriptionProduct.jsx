import React from "react";
import { IoHeart } from "react-icons/io5";
import "./style.css";
import DB from "../../DB";

const DescriptionProduct = () => {
  return (
    <>
      <div className="maincontainer">
        <div className="view">
          <div className="imagen">
            <img src={DB[0].foto} alt="img" />
          </div>
          <div className="chose">
            <div>
              <h3>ZAPATILLA HOMBRE</h3>
              <h4>$40.000</h4>
              <p>sdvnaksd-a23857</p>
            </div>

            <h6>TALLA</h6>
            <div className="talla">
              <div className="size">6</div>
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
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting, remaining essentially unchanged. It was popularised
              in the 1960s with the release of Letraset sheets containing Lorem
              Ipsum passages, and more recently with desktop publishing software
              like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="tecnologias">
          <div>
            <h4>TECNOLOGÍAS</h4>
            <hr />
          </div>
          <div className="texto">
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book. It has survived not
              only five centuries.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DescriptionProduct;
