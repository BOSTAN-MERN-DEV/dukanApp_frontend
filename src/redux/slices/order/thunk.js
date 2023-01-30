import { createAsyncThunk } from "@reduxjs/toolkit";
import { OrderService } from "../../../services/order";

const order = new OrderService();

export const allOrder = createAsyncThunk("api/orders", async (thunkApi) => {
    const res = await order.getAllOrder();

    if (res.statusMessage !== "Success") {
        return thunkApi.rejectWithValue({
            statusCode: res.statusCode,
            statusMessage: res.statusMessage
        });
    }

    return res.data;
});

export const orderById = createAsyncThunk("api/orders/order_id", async (order_id, thunkApi) => {
    debugger
    const result = await order.getOrderById(order_id);

    if (result.statusMessage !== "Success") {
        return thunkApi.rejectWithValue({
            statusCode: result.statusCode,
            statusMessage: result.statusMessage
        });
    }

    return result.data;
});