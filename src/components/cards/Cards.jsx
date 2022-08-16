import React from "react";
import DB from "../../DB";
import "./style.css";
import { useDispatch } from "react-redux";
import { cargarDetalle } from "../../actions/calzadoActions";
import { Link } from "react-router-dom";

const { products } = DB;

const Cards = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="bigBox">
        {products.map((products) => {
          return (
            <Link to="/producto" key={products.referencia}>
              <div
                onClick={() => dispatch(cargarDetalle(products))}
                className="item efec"
              >
                <div className="boxFoto">
                  <img src={products.foto} alt="foto" className="foto" />
                </div>

                <button className="link">{products.nombre}</button>

                <br />
                <h4>{`$ ${products.precio}`}</h4>
                <hr className="hr" />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Cards;
