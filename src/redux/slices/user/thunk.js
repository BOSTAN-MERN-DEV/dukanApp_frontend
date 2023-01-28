import { createAsyncThunk } from "@reduxjs/toolkit";

import { UserService } from "../../../services";

const user = new UserService();
export const loginUser = createAsyncThunk("user/login", async (data, thunkApi) => {
    debugger
    console.log("inside thunk");
    const result = await user.login(data);

    if (!result.success) {
        return thunkApi.rejectWithValue({
            statusCode: result.statusCode,
            statusMessage: result.statusMessage
        });
    }

    return result.data;
});

export const userSignup = createAsyncThunk("signup", async (data, thunkAPI) => {
    const response = await user.signup(data);
    if (!response.success) {
        return thunkAPI.rejectWithValue({
            statusCode: response.statusCode,
            statusMessage: response.statusMessage,
        });
    }
    return response.data;
});