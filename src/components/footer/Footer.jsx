import React from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoIosArrowForward,
} from "react-icons/io";

import "./style.css";

const Footer = () => {
  return (
    <>
      <div className="redes">
        <h2>@IKATECH</h2>
        <hr className="line" />
        <div className="icons">
          <IoLogoFacebook />
          <IoLogoInstagram />
        </div>
      </div>
      <div className="info">
        <div className="servicio">
          <h4>SERVICIO AL CLIENTE</h4>
          <br />
          <p>CONTACTENOS</p>
          <p>CAMBIOS Y DEVOLUCIONES</p>
          <p>POLÍTICAS DE LA TIENDA</p>
          <p>POLITICA DE DATOS</p>
        </div>
        <div className="cuenta">
          <h4>MICUENTA</h4>
          <br />
          <p>MIS PEDIDOS</p>
          <p>MIS DEVOLUCIONES</p>
        </div>
        <div className="recursos">
          <h4>RECURSOS</h4>
          <br />
          <p>TIENDAS</p>
          <p>DEVOLUCIONES</p>
        </div>
        <div className="news">
          <h4>NEWSLATTER</h4>
          <br />
          <p>registrate para ser el primero en recibir nuestras noticias</p>
          <button className="email">
            <div >
              <p className="textoEmail">E-MAIL</p>
            </div>
            <div className="next">
              <IoIosArrowForward />
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Footer;
