import { configureStore } from '@reduxjs/toolkit';
import calzado from '../reducers/calzado';


export default configureStore({
    reducer: {
        calzado
    }
})



// ESTA ES LA FORMA ANTIGUA DE CONFIGURAR LA STORE (SIN USAR REDUX TOOLKIT)

// import { createStore, applyMiddleware } from "redux";
// import reduxSagas from 'redux-sagas';

// import reducer from "../reducers/index";
// import rootSagas from "../sagas/index";

// const sagaMiddleware = reduxSagas();

// export default () => {
//     return{
//         ...createStore(reducer, applyMiddleware(sagaMiddleware)),
//         runSaga: sagaMiddleware.run(rootSagas)
//     }
// }



//store.subscribe(() => console.log(store))

