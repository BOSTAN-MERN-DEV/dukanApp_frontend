import { configureStore } from "@reduxjs/toolkit";

import { userReducer, productReducer, categoryReducer, orderReducer } from "./slices";


export const store = configureStore({
    reducer: {
        categories: categoryReducer,
        products: productReducer,
        user: userReducer,
        order: orderReducer
    }
});