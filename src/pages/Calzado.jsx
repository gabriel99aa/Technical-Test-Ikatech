import React from "react";
import Cards from "../components/cards/Cards";
import Filtro from "../components/filtro/Filtro";

import "./style.css";

const Calzado = () => {
  return (
    <>
      <div className="megaContainer">
        <div>
          <Filtro />
        </div>
        <div>
          <Cards />
        </div>
      </div>
    </>
  );
};

export default Calzado;
