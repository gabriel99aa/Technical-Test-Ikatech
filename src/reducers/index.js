import { combineReducers } from "redux";
import calzadoReducer from "./calzado";

const reducer = combineReducers({
    calzado: calzadoReducer
});

export default reducer;