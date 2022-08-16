import React from "react";

import "./style.css";

const Filtro = () => {
  return (
    <>
      <div className="box">
        <h1 className="titulosFiltro">CALZADO</h1>
        <p>TODOS (151)</p>
        <div className="boxFiltro">
          <h4 className="titulosFiltro">TALLA</h4>
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
          <h4 className="titulosFiltro">PRECIO</h4>
          <p>$150.000 - $300.000 (10)</p>
          <p>$300.000 - $450.000 (24)</p>
          <h4 className="titulosFiltro">MATERIAL</h4>
          <p>Cuero (18)</p>
          <p>Nubuck (8)</p>
          <h4 className="titulosFiltro">COLOR</h4>
          <p>Negro (62)</p>
          <p>Azul (19)</p>
          <p>Cafe (42)</p>
          <p>ORO (12)</p>
          <h4 className="titulosFiltro">TECNOLOGÍA</h4>
          <p>HPO2Flex (5)</p>
          <p>BIOBEVEL (1)</p>
          <p>flexGroove (3)</p>
        </div>
      </div>
    </>
  );
};

export default Filtro;
