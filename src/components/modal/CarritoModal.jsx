import React from "react";
import { useSelector } from "react-redux";

const CarritoModal = () => {
  const state = useSelector((state) => state);
  const { shoppingCar, totalCompra } = state.shopping;

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">referencia</th>
            {/* <th scope="col">Talla</th> */}
            {/* <th scope="col">Cantidad</th> */}
          </tr>
        </thead>
        <tbody>
          {shoppingCar.map((shoppingCar) => {
            return (
              <tr key={shoppingCar.index}>
                <td>{shoppingCar.nombre}</td>
                <td>{shoppingCar.precio}</td>
                <td>{shoppingCar.referencia}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="total">
        <h2>{totalCompra}</h2>
      </div>
    </>
  );
};

export default CarritoModal;
