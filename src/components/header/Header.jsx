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
          <a href="#">DIRECTORIO DE TIENDAS</a>
        </div>
        <div className="buttonBoxsubmenu">
          <a href="#">SERVICIO AL CLIENTE</a>
        </div>
        <div className="plus">
          <a href="#">MI CUENTA</a>
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
          <Link to="">
            <p>HOME</p>
          </Link>
          <Link to="">
            <p>CALZADO</p>
          </Link>
        </div>
        <div className="carritoBox">
          <button className="carrito" data-bs-toggle="modal" data-bs-target="#exampleModal" >
            <p>
              <IoCartOutline /> CARRITO
            </p>
          </button>
          <Modal title="CARRITO DE COMPRAS" content={<CarritoModal/>} secondaryAction ="VACIAR CARRITO" primaryAction="PAGAR"/>
        </div>
      </div>
    </>
  );
};

export default Header;
