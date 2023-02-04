import { createSlice } from "@reduxjs/toolkit";

let products = [];

const productSlice = createSlice({
    name: "product",
    initialState: products,
    reducers: {
        add: (state, data) => {
            products = [...products, data.payload];
            return products
        }
    }
});

export const { add } = productSlice.actions;
export const productReducer = productSlice.reducer;