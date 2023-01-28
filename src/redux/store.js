import { configureStore } from "@reduxjs/toolkit";
// import  addProduct  from "./slices/product";
// import { productReducer } from "./slices/product";
// import { categoryReducer } from "./slices/category";
import { userReducer, productReducer, categoryReducer } from "./slices";

export const store = configureStore({
    reducer: {
        categories: categoryReducer,
        products: productReducer,
        user: userReducer
    }
});