import { SHOPPING_CAR, TOTAL_COMPRA } from "../types";

export const initialState = {
  shoppingCar: [],
  totalCompra:[]
};

export default function shoppingCarReducer(state = initialState, action) {
  switch (action.type) {
    case SHOPPING_CAR: {
      let newData = action.payload;
      return {
        shoppingCar: [...state.shoppingCar, { ...newData, quantity: 1 }],
      };
    }

    case TOTAL_COMPRA: {
      let newData = action.payload;
      console.log(newData)
      return {
        total:  [{...state.totalCompra + newData}]
      };
    }

    default:
      return state;
  }
}
