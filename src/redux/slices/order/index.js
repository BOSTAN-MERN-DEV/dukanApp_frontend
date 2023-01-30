import { createSlice } from "@reduxjs/toolkit"
import { allOrder, orderById } from "./thunk";

const INITIAL_STATE = {
    orders: [],
    loadingOrder: false
}

const orderSlice = createSlice({
    initialState: INITIAL_STATE,
    name: "order",
    reducers: {},

    extraReducers: builder => {
        //GET ALL ORDERS
        builder.addCase(allOrder.pending, state => {
            state.loadingOrder = true;
        });

        builder.addCase(allOrder.fulfilled, (state, action) => {
            console.log(action.payload);
            return ({ orders: action.payload, loadingOrder: false });
        });

        builder.addCase(allOrder.rejected, (state, action) => {
            return INITIAL_STATE;
        });

        //GET ORDER BY ID
        builder.addCase(orderById.pending, state => {
            state.loadingOrder = true;
        });

        builder.addCase(orderById.fulfilled, (state, action) => {
            return ({ orders: action.payload, loadingOrder: false });
        });

        builder.addCase(orderById.rejected, (state, action) => {
            return INITIAL_STATE;
        });
    },
});

export { allOrder, orderById } from "./thunk";
export const orderReducer = orderSlice.reducer;