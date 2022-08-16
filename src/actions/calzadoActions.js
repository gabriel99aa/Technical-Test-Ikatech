import {VIEW_PRODUCT, SHOPPING_CAR, TOTAL_COMPRA} from "../types";

export const cargarDetalle = (data) => ({type: VIEW_PRODUCT, payload: data}) 
export const comprar = (data) => ({type: SHOPPING_CAR, payload: data})
export const total = (data) => ({type: TOTAL_COMPRA, payload: data})