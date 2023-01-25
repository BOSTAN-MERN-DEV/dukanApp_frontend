import { createSlice } from "@reduxjs/toolkit";

let categories = [{ id: 1, name: "laptop" }];

const categorySlice = createSlice({
    name: "category",
    initialState: categories,
    reducers: {
        add: (state, data) => {
            categories = [...categories, data.payload];
            return categories
        }
    },
});

export const { add, addCategory } = categorySlice.actions;
export const categoryReducer = categorySlice.reducer;