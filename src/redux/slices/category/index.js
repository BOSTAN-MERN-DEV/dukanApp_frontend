import { createSlice } from "@reduxjs/toolkit";

// let categories = [{ id: 1, name: "laptop" }];
let careds = [
    {product_id: 1, img_url: "", title: "product title goes here", branc_name: "Apple", price: 123},
    {product_id: 2, img_url: "", title: "product title goes here another", branc_name: "Apple", price: 123},
]

const categorySlice = createSlice({
    name: "category",
    initialState: careds,
    reducers: {
        // add: (state, data) => {
        //     categories = [...categories, data.payload];
        //     return categories
        // }
    },
});

export const { add, addCategory } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;