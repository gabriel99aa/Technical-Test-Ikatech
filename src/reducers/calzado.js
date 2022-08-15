import {VIEW_PRODUCT} from "../types";

import imagen1 from "../imgCalzado/1.jpg";

export const initialState = {
  products: [
    {
      nombre: "Zapato azul",
      precio: "$65.000",
      referencia: "Gsebkvbna",
      foto: imagen1,
      detalle:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      tecnologias:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.",
    },
  ],
};

export default function calzadoReducer(state = initialState, action) {
  switch (action.type) {
    case VIEW_PRODUCT:{
        let newData = action.payload;
        return {
          products: [{ ...newData, quantity: 1 }]
        }
    }
      
    default:
      return state;
  }
}
