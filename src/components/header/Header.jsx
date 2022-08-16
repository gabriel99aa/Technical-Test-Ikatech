import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";

import "./style.css";
import Modal from "../modal/Modal";
import CarritoModal from "../modal/CarritoModal";

const Header = () => {
  return (
    <>
      <div className="off">
        <h4>HOT SALE - 30% EN SANDALIAS</h4>
      </div>
      <div className="submenu">
        <div className="buttonBoxsubmenu">
          <a
            className="menuBoton"
            target="_blank"
            rel="noreferrer"
            href="https://www.google.com/maps/search/ikatech/@19.1069496,-74.5012117,3z/data=!3m1!4b1"
          >
            DIRECTORIO DE TIENDAS
          </a>
        </div>
        <div className="buttonBoxsubmenu">
          <a
            className="menuBoton"
            target="_blank"
            rel="noreferrer"
            href="https://ikatechsolutions.com/"
          >
            SERVICIO AL CLIENTE
          </a>
        </div>
        <div className="plus">
          <a
            className="menuBoton"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/gabriel99aa"
          >
            MI CUENTA
          </a>
        </div>
      </div>
      <div className="menu">
        <div className="brand">
          <img className="ikatechBrand" src="/img/ika.png" alt="Brand"></img>
        </div>
        <div className="serchBox">
          <input type="text" className="serch" placeholder="Buscar" />
          <div>
            <p>ENVIO GRATIS PARA PEDIDOS SUPERIORES A $300.000</p>
          </div>
        </div>
        <div className="nav">
          <Link to="/">
            <p className="menuBoton">HOME</p>
          </Link>
          <Link to="/calzado">
            <p className="menuBoton">CALZADO</p>
          </Link>
        </div>
        <div className="carritoBox">
          <button
            className="carrito"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <p>
              <IoCartOutline /> CARRITO
            </p>
          </button>
          <Modal
            title="CARRITO DE COMPRAS"
            content={<CarritoModal />}
            secondaryAction="VACIAR CARRITO"
            primaryAction="PAGAR"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
