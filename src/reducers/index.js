import { combineReducers } from "redux";
import calzadoReducer from "./calzado";
import shoppingCarReducer from "./shoppingReducer";

const reducer = combineReducers({
    calzado: calzadoReducer,
    shopping: shoppingCarReducer
});

export default reducer;