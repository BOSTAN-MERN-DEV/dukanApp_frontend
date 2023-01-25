import { createSlice } from "@reduxjs/toolkit";

let products = [{ id: 101, title: "laptop", description: "High speed laptop corei12 with 255 ram 500Gb hard" }];

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